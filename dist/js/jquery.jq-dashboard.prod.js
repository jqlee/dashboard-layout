!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),e.exports=n(3)},function(e,t){var n;(n=jQuery).fn.jqDashboard=function(e){return this.each((function(t,r){let o=function(e){let t={};for(let r in n.fn.jqDashboard.defaults){let o=n(e).data(r.toLowerCase());t[r]=o}return t}(r);o=n.extend({},n.fn.jqDashboard.defaults,o,e),n('<div class="jq-overlay">').appendTo(document.body).on("click",e=>{let t=n(e.currentTarget).parents(".jq-dashboard"),r=t.hasClass("menu-push")?"menu-push":"menu-overlay";t.toggleClass(r)})}))},n.fn.jqDashboard.defaults={customClass:"",slideTypeName:"slide-push"},n(()=>{n("body.jq-dashboard").jqDashboard()}),n(document).on("click",".jqd-content, .jqd-overlay",e=>{n(".jqd-menu :checked").prop("checked",!1)}),n(document).on("click",".jqd-menu .toggle-menu",e=>{console.log("menu toggle!");let t=n(e.currentTarget),r=t.hasClass("slide-push")?"menu-push":"menu-overlay";t.parents(".jq-dashboard").toggleClass(r)})},function(e,t,n){"use strict";n.r(t),t.default=n.p+"css/logo.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"css/loading.png"}]);