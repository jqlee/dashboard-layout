/*
通過一些嘗試，找出較合適的作法如下:

webpack拆解成兩個檔案:

webpack.dev.js 負責編譯pug、scss、typescrpit等開發時就需要測試的，發布目標是 ./build
webpack.config.js 負責將編譯結果發行到dist
*/

const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const glob = require('glob');

//pugOptions(path.join(__dirname, 'src/demo.pug'), 'demo.html')
let pugOptions = (t,o)=>{
    return {
    template: t,
    filename: o,
    inject: true, 
    // 等於'body',javascript 資源將被放置到body元素的底部
    chunks: ['device', 'main'], 
    // 指定需要引入的js，沒有設置默認全部引入
    excludeChunks: ['devor.js'], 
    // 排除的js
    minify: {
      sortAttributes: true,
      collapseWhitespace: false, 
      // 折疊空白字元就是壓縮Html
      collapseBooleanAttributes: true, 
      // 折疊布林值属性，例:readonly checked
      removeComments: true,
      // 移除註釋
      removeAttributeQuotes: false 
      // 移除屬性的引號
    }
  }
}

module.exports = {
  mode: 'development', // development | production ﹐或是在npm指令加上 --mode production
  optimization: {
    minimize: false
  },
  entry: {
    /* 每一個 entry */
    "jquery.jq-dashboard": [
      './src/jquery.jq-dashboard.scss',
      "./src/jquery.jq-dashboard.js",
    ],
    'site': [
      "./src/demo.js",
      "./src/loading.png",
      "./src/logo.png",
      "./src/pages/photoshop.html"
    ]

  },

  output: {
      /* output只針對預設的js */
      filename: './js/[name].js',
      path: path.resolve(__dirname, './build'),
  },

  module: {
    rules: [
      {test: /\.js$/i,
        use: [
        ]},
      {test: /\.(scss|sass)$/i,
        use: [
          // 需要用到的 loader
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          // 把 postcss-loader 放在 css-loader 前面 (第一步)
          {
            loader: 'postcss-loader',
            options: {
              // 傳遞 plugins 選項並載入 autoprefixer 做使用 (第二步)
              plugins: [require('autoprefixer')],
            },
          },
          "sass-loader"
       ]},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { 
              limit: 40000,
              name: '[name].[ext]',
              outputPath: 'css'
            }
          }
        ]
      },
      {
        test: /\.htm[l]*$/,
        use: [{
          loader:'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './html'
          }
        }]
      },
      {
        test: /\.pug$/,
        use: [
          'raw-loader',
          {
          loader: 'pug-html-loader',
              options: {
                  pretty: true 
                  // 美化 HTML 的編排 (不壓縮HTML的一種)
              }
          },
        ]
      }
    ]
  },

  plugins: [
    // new CleanWebpackPlugin(), // --watch指令只會複製異動項目，使用此外掛會造成dist缺少未異動項目
    new MiniCssExtractPlugin({
      // 指定輸出位置
      // [name] 為上方進入點設定的 "名稱"
      filename: "./css/[name].min.css"
    }),
    new HtmlWebpackPlugin(pugOptions(path.join(__dirname, 'src/demo.pug'),'demo.html'))
  ],

};

