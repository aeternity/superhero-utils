(function(t){function r(r){for(var n,a,u=r[0],c=r[1],s=r[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(r);while(p.length)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,r=0;r<i.length;r++){for(var e=i[r],n=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(n=!1)}n&&(i.splice(r--,1),t=a(a.s=e[0]))}return t}var n={},o={app:0},i=[];function a(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=n,a.d=function(t,r,e){a.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,r){if(1&r&&(t=a(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)a.d(e,n,function(r){return t[r]}.bind(null,n));return e},a.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(r,"a",r),r},a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var l=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"51e6":function(t,r,e){},"56d7":function(t,r,e){"use strict";e.r(r);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h3",[t._v("superhero-utils example using vue, webpack")]),e("SuperheroButton",{attrs:{size:"medium",account:"ak_... or .chain name"}})],1)},i=[],a=(e("51e6"),e("cdc3")),u={components:{SuperheroButton:a["Button"]}},c=u,s=e("2877"),l=Object(s["a"])(c,o,i,!1,null,null,null),f=l.exports;new n["a"]({render:function(t){return t(f)}}).$mount("#app")},cdc3:function(t,r,e){(function(t){var n,o,i;e("a4d3"),e("e01a"),e("b636"),e("d28b"),e("944a"),e("99af"),e("4de4"),e("7db0"),e("4160"),e("a630"),e("caad"),e("c975"),e("d81d"),e("fb6a"),e("b0c0"),e("0c47"),e("23dc"),e("4fad"),e("e439"),e("dbb4"),e("3410"),e("b64b"),e("d3b7"),e("25f0"),e("2532"),e("3ca3"),e("159b"),e("ddb0"),e("2b3d");var a=e("7037");!function(e,u){"object"==a(r)&&"object"==a(t)?t.exports=u():(o=[],n=u,i="function"===typeof n?n.apply(r,o):n,void 0===i||(t.exports=i))}(self,(function(){return function(){var t={228:function(t){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}},858:function(t){t.exports=function(t){if(Array.isArray(t))return t}},926:function(t){function r(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}},713:function(t){t.exports=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}},884:function(t){t.exports=function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return e}}},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},479:function(t,r,e){var n=e(316);t.exports=function(t,r){if(null==t)return{};var e,o,i=n(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},316:function(t){t.exports=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}},38:function(t,r,e){var n=e(858),o=e(884),i=e(379),a=e(521);t.exports=function(t,r){return n(t)||o(t,r)||i(t,r)||a()}},379:function(t,r,e){var n=e(228);t.exports=function(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}},757:function(t,r,e){t.exports=e(666)},970:function(t,r,e){"use strict";e.r(r),e.d(r,{Button:function(){return S},createButton:function(){return w},createButtonByDiv:function(){return b},ensurePaid:function(){return I}});var n=e(713),o=e.n(n),i=e(757),a=e.n(i),u=e(926),c=e.n(u),s=e(38),l=e.n(s),f=e(479),p=e.n(f),h="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjkgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZmF2aWNvbjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS01IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBpZD0iZmF2aWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyLjAwMDAwMCwgMS4wMDAwMDApIiBmaWxsPSIjMTE2MUZFIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzExNjFGRSIgc3Ryb2tlLXdpZHRoPSIwLjMiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzkuNTU0NzAzMSw0LjcwNzM0NTYyZS0xNCBMNTIuOTcxNzkzLDAuMDA0NDUxMDYxNyBMNjAuNTI2NTE5MSw3LjA2NjMzNTgxIEw1NS43MzM2Mjc0LDExLjc2MTM5MjYgTDU1LjY2Mzg0NzYsMTEuODgwNTI1NiBMNTUuNjEyODI0NSwxMS44Nzk5NDQ0IEw0Ni4zMDU3NDE0LDIxIEwzMiw3LjA2MTIzMDI0IEwzOS41NTQ3MDMxLDQuNzA3MzQ1NjJlLTE0IFogTTQwLjQxMTAzNzYsMi4xNjg2Mzk3MyBMMzUuMTQwNTkxNSw3LjA5NDgyMDU2IEw0Ni4zMDA0NzY1LDE3Ljk2ODQzMTcgTDUzLjI5MjgxMDEsMTEuMTE2ODYwOCBMNDQuNTEyNDcxLDIuMTY5OTQ4NzkgTDQwLjQxMTAzNzYsMi4xNjg2Mzk3MyBaIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K";function d(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?d(Object(e),!0).forEach((function(r){o()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var y,g=function(t){var r=t.url,e=p()(t,["url"]),n=new URL("https://wallet.superhero.com/tip");return n.searchParams.set("url",r),n.searchParams.set("x-success",r),n.searchParams.set("x-cancel",r),Object.entries(e).filter((function(t){var r=l()(t,2)[1];return![void 0,null].includes(r)})).forEach((function(t){var r=l()(t,2),e=r[0],o=r[1];return n.searchParams.set(e,o)})),n},m=function(){var t=c()(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(y){t.next=6;break}return t.next=3,fetch("https://raendom-backend.z52da5wt.xyz/cache/stats");case 3:return t.next=5,t.sent.json();case 5:y=t.sent.by_url;case 6:return t.abrupt("return",(null===(e=y.find((function(t){return t.url===r})))||void 0===e?void 0:e.total_amount_ae)||0);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),b=function(t,r){var e=r.size,n=void 0===e?"icon":e,o=r.url,i=void 0===o?window.location.href:o,u=r.account,s=p()(r,["size","url","account"]),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return'\n    <a\n      href="'.concat(g(v({url:i},s)),'"\n      ').concat(u?'data-account="'.concat(u,'"'):"",'\n    >\n      <img alt="Superhero Icon" src="').concat(h,'" />\n      ').concat(t&&"<span>".concat(t,"</span>"),"\n    </a>")},f='\n    <div class="tips-amount">\n      <span class="tips">0</span>\n      <span class="ae">AE</span>\n    </div>',d={icon:l(),small:l("Donate")+f,medium:l("Donate Now")+f,large:f+l("Donate Now")};if(!d[n])throw new Error("Unsupported size");return t.innerHTML=d[n],t.className="superhero-utils-button ".concat(n),c()(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e=t.querySelector(".tips"))){r.next=5;break}return r.next=4,m(i);case 4:e.innerHTML=r.sent;case 5:case"end":return r.stop()}}),r)})))(),t},w=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e="string"==typeof t?document.querySelectorAll(t):t,n=function(t){var e=b(document.createElement("div"),r);return t.replaceWith(e),e};return NodeList.prototype.isPrototypeOf(e)?Array.from(e).map(n):n(e)},x="superhero-paywall-paid-urls",j="superhero-paywall-tip-result",M="success",O=function(t){var r=new URL(t);return r.searchParams.delete(j),r.toString()},N=function(){return localStorage[x]?JSON.parse(localStorage[x]):[]},L=function(t){var r=N();r.includes(t)||(r.push(t),localStorage[x]=JSON.stringify(r))},I=function(){var t=c()(a().mark((function t(){var r,e,n,o,i,u=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=u.length>0&&void 0!==u[0]?u[0]:{},e=r.url,n=void 0===e?O(window.location.href):e,new URL(window.location).searchParams.get(j)===M&&L(n),!N().includes(n)){t.next=4;break}return t.abrupt("return");case 4:(o=document.createElement("div")).className="superhero-utils-paywall",o.innerHTML='\n    <div class="modal">\n      You need to leave a tip to continue\n      <br />\n      <div class="button" />\n    </div>\n  ',(i=new URL(n)).searchParams.set(j,M),w(o.querySelector(".button"),{size:"small",url:n,"x-success":i}),document.body.style.overflow="hidden",document.body.appendChild(o);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S={props:{size:{validator:function(t){return["icon","small","medium","large"].includes(t)},default:void 0},url:{type:String,default:void 0},account:{type:String,default:void 0}},mounted:function(){var t=this;this.$watch((function(t){return{size:t.size,url:t.url,account:t.account}}),(function(r){return b(t.$refs.button,r)}),{immediate:!0})},render:function(t){return t("div",{ref:"button"})}}},666:function(t){var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,r,e){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return z()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=L(a,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===p)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var c=f(t,r,e);if("normal"===c.type){if(n=e.done?v:h,c.arg===y)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=v,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",y={};function g(){}function m(){}function b(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,j=x&&x(x(E([])));j&&j!==e&&n.call(j,i)&&(w=j);var M=b.prototype=g.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function N(t,r){function e(o,i,u,c){var s=f(t[o],t,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==a(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):r.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return e("throw",t,u,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function I(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:z}}function z(){return{value:r,done:!0}}return m.prototype=M.constructor=b,b.constructor=m,m.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(M),t},t.awrap=function(t){return{__await:t}},O(N.prototype),N.prototype[u]=function(){return this},t.AsyncIterator=N,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new N(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(M),s(M,c,"Generator"),M[i]=function(){return this},M.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}return e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e(970)}()}))}).call(this,e("62e4")(t))}});
//# sourceMappingURL=app.053133b3.js.map