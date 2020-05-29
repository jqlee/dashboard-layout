/*
Webpack編譯過程會造成jquery事件內的 this 指涉失敗，原因不明
已知 this 經常會被指向 Window 或 Document，
較保險的方式，在事件註冊內以 $(e.currentTarget) 取代 $(this)

*/

(function( $ ) {
  const mainSelector = '.jq-dashboard';

  $.fn.jqDashboard = function( options ) { 
    return this.each(function(i,item) {
      let settings = loadSettings(item);
      settings = $.extend({}, $.fn.jqDashboard.defaults, settings, options);
      render(this, settings);
    });
  }

  $.fn.jqDashboard.defaults = {
    customClass: '',
    slideTypeName: 'slide-push', // toggle-menu的滑動方式，可能值有 [slide-push | slide-overlay]
  };

  $(()=>{
    $('body.jq-dashboard').jqDashboard();
  });

  $(document).on('click','.jqd-content, .jqd-overlay',(e)=>{
    // hide all menu
    $('.jqd-menu :checked').prop('checked', false);
  });

  $(document).on('click', '.jqd-menu .toggle-menu', (e)=>{
    console.log('menu toggle!');


    let el = $(e.currentTarget);
    let toggleType = el.hasClass('slide-push')?'menu-push':'menu-overlay';
    el.parents('.jq-dashboard').toggleClass(toggleType);
  });

  function render(el, options){
    let overlay = $('<div class="jq-overlay">').appendTo(document.body);
    overlay.on('click',(e)=>{
      let el = $(e.currentTarget);
      let dashboard = el.parents('.jq-dashboard');
      let toggleType = dashboard.hasClass('menu-push')?'menu-push':'menu-overlay';
      dashboard.toggleClass(toggleType);
    });
  }
  function loadSettings(el){
    let settings = {};
    for( let k in $.fn.jqDashboard.defaults){
      let ov = $(el).data(k.toLowerCase());
      settings[k] = ov;
    }
    return settings;
  }

})(jQuery);