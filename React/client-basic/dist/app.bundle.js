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

/***/ "./src/React.js":
/*!**********************!*\
  !*** ./src/React.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MyReactDom: () => (/* binding */ MyReactDom),\n/* harmony export */   React: () => (/* binding */ React)\n/* harmony export */ });\nfunction createElement (type, props, ...children) {\n  return {\n    type,\n    props: {\n        ...props,\n        children: children.map(child => typeof child != \"object\"\n                            ? createTextElement(child)\n                            : child\n            )\n    }\n  }\n}\n\nfunction createTextElement(text) {\n  return {\n    type: \"TEXT_ELEMENT\",\n    props: {\n      value: text,\n      children: []\n    }\n  }\n}\n// myReactDom.js\n\nfunction createDomElement(element) {\n  if (element.type === 'TEXT_ELEMENT') {\n    return document.createTextNode(element.props.value);\n  }\n\n  const dom = document.createElement(element.type);\n\n  element.props.children.forEach(child => {\n    const childDom = createDomElement(child);\n    dom.appendChild(childDom);\n  });\n\n  return dom;\n}\n\nfunction render(element, container) {\n  const domElement = createDomElement(element);\n  container.appendChild(domElement);\n}\n\nconst MyReactDom = {\n  render\n};\n\nconst React = {\n  createElement\n}\n\n//# sourceURL=webpack://react/./src/React.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React */ \"./src/React.js\");\n// import React from \"react\";\n// import {createRoot} from \"react-dom/client\";\n\n\n\nclass ReactElementFactory {\n\n  constructor() {\n    this.elements = []\n  }\n\n  createElement(type, props, value) {\n    this.elements.push(_React__WEBPACK_IMPORTED_MODULE_0__.React.createElement(type, props, value))\n  }\n\n}\n\n\nconst reactElements = new ReactElementFactory()\n\nreactElements.createElement(\"h1\", {id: \"name\"}, \"Hello World\")\nreactElements.createElement(\"div\", {id: \"text\"}, \"Welcome User\")\nreactElements.createElement(\"li\", {id: \"li1\"}, \"First\")\nreactElements.createElement(\"li\", {id: \"li2\"}, \"Second\")\nreactElements.createElement(\"li\", {id: \"li3\"}, \"Third\")\n\nconst element = _React__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", {id: \"element\"}, ...reactElements.elements);\nconsole.log(element)\n\nconst root  = document.getElementById(\"root\")\n_React__WEBPACK_IMPORTED_MODULE_0__.MyReactDom.render(element, root);\n// const root = createRoot(document.getElementById('root'));\n// root.render(element)\n\n//# sourceURL=webpack://react/./src/app.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;