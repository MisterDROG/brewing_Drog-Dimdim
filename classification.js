/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/classification.js":
/*!***********************************!*\
  !*** ./scripts/classification.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_pages_classification_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/pages/classification.css */ \"./components/pages/classification.css\");\n/* harmony import */ var _components_renderFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/renderFooter */ \"./scripts/components/renderFooter.js\");\n/* harmony import */ var _components_renderHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/renderHeader */ \"./scripts/components/renderHeader.js\");\n\n\n\n\n//render header and footer\n(0,_components_renderFooter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_components_renderHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./scripts/classification.js?");

/***/ }),

/***/ "./scripts/components/renderFooter.js":
/*!********************************************!*\
  !*** ./scripts/components/renderFooter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgs_logo_logo_social_vk_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../imgs/logo/logo_social/vk.png */ \"./imgs/logo/logo_social/vk.png\");\n/* harmony import */ var _imgs_logo_logo_social_Telegram_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imgs/logo/logo_social/Telegram.png */ \"./imgs/logo/logo_social/Telegram.png\");\n\n\n\n//function for render footer\nvar renderFooter = function renderFooter() {\n  var footerContainer = document.querySelector('.footer');\n  footerContainer.insertAdjacentHTML('beforeend', \"\\n        <a href=\\\"./index.html\\\" target=\\\"_blank\\\" class=\\\"footer__author\\\">&copy; BOIZ Brewery</a>\\n        <div class=\\\"footer__columns\\\">\\n            <nav class=\\\"footer__column\\\">\\n                <p class=\\\"footer__title\\\">\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B</p>\\n                <a href=\\\"./index.html\\\" target=\\\"_blank\\\" class=\\\"footer__link\\\"><img src=\\\"\".concat(_imgs_logo_logo_social_Telegram_png__WEBPACK_IMPORTED_MODULE_1__, \"\\\"\\n                    class=\\\"footer__link_img\\\" alt=\\\"telegram\\\" />Telegram</a>\\n                <a href=\\\"./index.html\\\" target=\\\"_blank\\\" class=\\\"footer__link\\\"><img src=\\\"\").concat(_imgs_logo_logo_social_vk_png__WEBPACK_IMPORTED_MODULE_0__, \"\\\"\\n                    class=\\\"footer__link_img\\\" alt=\\\"VK\\\" />VKontakte</a>\\n                <a href=\\\"./index.html\\\" target=\\\"_blank\\\" class=\\\"footer__link\\\"><img src=\\\"\").concat(_imgs_logo_logo_social_vk_png__WEBPACK_IMPORTED_MODULE_0__, \"\\\"\\n                    class=\\\"footer__link_img\\\" alt=\\\"VK\\\" />VK Public</a>\\n            </nav>\\n            <nav class=\\\"footer__column\\\">\\n                <p class=\\\"footer__title\\\">\\u041D\\u0430\\u0432\\u0438\\u0433\\u0430\\u0446\\u0438\\u044F</p>\\n                <a href=\\\"./index.html\\\" target=\\\"_self\\\" class=\\\"footer__link\\\">\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F</a>\\n                <a href=\\\"./where.html\\\" target=\\\"_self\\\" class=\\\"footer__link\\\">\\u041A\\u0443\\u0434\\u0430 \\u043F\\u043E\\u0439\\u0442\\u0438</a>\\n                <a href=\\\"./shop.html\\\" target=\\\"_self\\\" class=\\\"footer__link\\\">\\u041C\\u0430\\u0433\\u0430\\u0437\\u0438\\u043D</a>\\n            </nav>\\n        </div>\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);\n\n//# sourceURL=webpack:///./scripts/components/renderFooter.js?");

/***/ }),

/***/ "./scripts/components/renderHeader.js":
/*!********************************************!*\
  !*** ./scripts/components/renderHeader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgs_logo_boiz_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../imgs/logo/boiz_logo.png */ \"./imgs/logo/boiz_logo.png\");\n/* harmony import */ var _imgs_logo_menuButton_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imgs/logo/menuButton.jpg */ \"./imgs/logo/menuButton.jpg\");\n\n\n\n//function for render header\nvar renderHeader = function renderHeader() {\n  var headerContainer = document.querySelector('.header');\n  headerContainer.insertAdjacentHTML('beforeend', \"\\n            <div class=\\\"header__container\\\">\\n                <a href=\\\"./index.html\\\" target=\\\"_self\\\" class=\\\"header__img\\\">\\n                <img class=\\\"logo__header\\\" alt=\\\"logo BOIZ BREWERY\\\" src=\\\"\".concat(_imgs_logo_boiz_logo_png__WEBPACK_IMPORTED_MODULE_0__, \"\\\" />\\n                </a>\\n                <a class=\\\"header__button\\\"><img class=\\\"header__button-image\\\" alt=\\\"menuButton\\\" src=\\\"\").concat(_imgs_logo_menuButton_jpg__WEBPACK_IMPORTED_MODULE_1__, \"\\\" /></a>\\n            </div>\\n            <nav class=\\\"header__links\\\">\\n                <a href=\\\"./index.html\\\" target=\\\"_self\\\" class=\\\"header__link\\\">\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F</a>\\n                <a href=\\\"./where.html\\\" target=\\\"_self\\\" class=\\\"header__link\\\">\\u041C\\u0435\\u0441\\u0442\\u0430</a>\\n                <a href=\\\"./classification.html\\\" target=\\\"_self\\\" class=\\\"header__link\\\">\\u041F\\u0438\\u0432\\u043E</a>\\n                <a href=\\\"./glasses.html\\\" target=\\\"_self\\\" class=\\\"header__link\\\">\\u0411\\u043E\\u043A\\u0430\\u043B\\u044B</a>\\n                <a href=\\\"./shop.html\\\" target=\\\"_self\\\" class=\\\"header__link\\\">\\u041C\\u0430\\u0433\\u0430\\u0437\\u0438\\u043D</a>\\n            </nav>\"));\n\n  //event listeners for mobile menu open/close\n  var menuButton = document.querySelector('.header__button');\n  var menuLinks = document.querySelector('.header__links');\n  menuButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    if (menuLinks.style.display == 'flex') {\n      menuLinks.style.display = 'none';\n    } else {\n      menuLinks.style.display = 'flex';\n    }\n  });\n\n  //event listeners for mobile menu open/close (while window resize)\n  window.addEventListener('resize', function () {\n    if (window.innerWidth >= 720) {\n      menuLinks.style.display = 'flex';\n    } else if (window.innerWidth < 720) {\n      menuLinks.style.display = 'none';\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);\n\n//# sourceURL=webpack:///./scripts/components/renderHeader.js?");

/***/ }),

/***/ "./components/pages/classification.css":
/*!*********************************************!*\
  !*** ./components/pages/classification.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/pages/classification.css?");

/***/ }),

/***/ "./imgs/logo/boiz_logo.png":
/*!*********************************!*\
  !*** ./imgs/logo/boiz_logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/boiz_logo.png\";\n\n//# sourceURL=webpack:///./imgs/logo/boiz_logo.png?");

/***/ }),

/***/ "./imgs/logo/logo_social/Telegram.png":
/*!********************************************!*\
  !*** ./imgs/logo/logo_social/Telegram.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Telegram.png\";\n\n//# sourceURL=webpack:///./imgs/logo/logo_social/Telegram.png?");

/***/ }),

/***/ "./imgs/logo/logo_social/vk.png":
/*!**************************************!*\
  !*** ./imgs/logo/logo_social/vk.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/vk.png\";\n\n//# sourceURL=webpack:///./imgs/logo/logo_social/vk.png?");

/***/ }),

/***/ "./imgs/logo/menuButton.jpg":
/*!**********************************!*\
  !*** ./imgs/logo/menuButton.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/menuButton.jpg\";\n\n//# sourceURL=webpack:///./imgs/logo/menuButton.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"classification": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("./scripts/classification.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;