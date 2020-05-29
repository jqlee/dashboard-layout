/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/jquery.jq-dashboard.js":
/*!************************************!*\
  !*** ./src/jquery.jq-dashboard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nWebpack編譯過程會造成jquery事件內的 this 指涉失敗，原因不明\r\n已知 this 經常會被指向 Window 或 Document，\r\n較保險的方式，在事件註冊內以 $(e.currentTarget) 取代 $(this)\r\n\r\n*/\r\n\r\n(function( $ ) {\r\n  const mainSelector = '.jq-dashboard';\r\n\r\n  $.fn.jqDashboard = function( options ) { \r\n    return this.each(function(i,item) {\r\n      let settings = loadSettings(item);\r\n      settings = $.extend({}, $.fn.jqDashboard.defaults, settings, options);\r\n      render(this, settings);\r\n    });\r\n  }\r\n\r\n  $.fn.jqDashboard.defaults = {\r\n    customClass: '',\r\n    slideTypeName: 'slide-push', // toggle-menu的滑動方式，可能值有 [slide-push | slide-overlay]\r\n  };\r\n\r\n  $(()=>{\r\n    $('body.jq-dashboard').jqDashboard();\r\n  });\r\n\r\n  $(document).on('click','.jqd-content, .jqd-overlay',(e)=>{\r\n    // hide all menu\r\n    $('.jqd-menu :checked').prop('checked', false);\r\n  });\r\n\r\n  $(document).on('click', '.jqd-menu .toggle-menu', (e)=>{\r\n    console.log('menu toggle!');\r\n\r\n\r\n    let el = $(e.currentTarget);\r\n    let toggleType = el.hasClass('slide-push')?'menu-push':'menu-overlay';\r\n    el.parents('.jq-dashboard').toggleClass(toggleType);\r\n  });\r\n\r\n  function render(el, options){\r\n    let overlay = $('<div class=\"jq-overlay\">').appendTo(document.body);\r\n    overlay.on('click',(e)=>{\r\n      let el = $(e.currentTarget);\r\n      let dashboard = el.parents('.jq-dashboard');\r\n      let toggleType = dashboard.hasClass('menu-push')?'menu-push':'menu-overlay';\r\n      dashboard.toggleClass(toggleType);\r\n    });\r\n  }\r\n  function loadSettings(el){\r\n    let settings = {};\r\n    for( let k in $.fn.jqDashboard.defaults){\r\n      let ov = $(el).data(k.toLowerCase());\r\n      settings[k] = ov;\r\n    }\r\n    return settings;\r\n  }\r\n\r\n})(jQuery);\n\n//# sourceURL=webpack:///./src/jquery.jq-dashboard.js?");

/***/ }),

/***/ "./src/jquery.jq-dashboard.scss":
/*!**************************************!*\
  !*** ./src/jquery.jq-dashboard.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/jquery.jq-dashboard.scss?");

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./src/jquery.jq-dashboard.scss ./src/jquery.jq-dashboard.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/jquery.jq-dashboard.scss */\"./src/jquery.jq-dashboard.scss\");\nmodule.exports = __webpack_require__(/*! ./src/jquery.jq-dashboard.js */\"./src/jquery.jq-dashboard.js\");\n\n\n//# sourceURL=webpack:///multi_./src/jquery.jq-dashboard.scss_./src/jquery.jq-dashboard.js?");

/***/ })

/******/ });