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

/***/ "./src/JS/functions/productPageDisplayInformation.js":
/*!***********************************************************!*\
  !*** ./src/JS/functions/productPageDisplayInformation.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objectsAndVariables/requestsURL.js */ \"./src/JS/objectsAndVariables/requestsURL.js\");\n/* harmony import */ var _separatorThousands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./separatorThousands */ \"./src/JS/functions/separatorThousands.js\");\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// FUNCTION WHO FILL IT UP THE PRODUCT PAGE WITH INFORMATION FROM THE SERVER\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n\r\n\r\n// -----------------------------\r\n// IMPORT FUNCTIONS, OBJECTS, ARRAY\r\n// -----------------------------\r\n\r\n// Objects\r\n\r\n\r\n// Functions\r\n\r\n\r\n\r\nfunction addChooseProductOption (target) {\r\n    // 1st OPTION : CHOOSE YOUR OPTION\r\n        // Create new html tag\r\n        let productOption = document.createElement(\"option\");\r\n        // add text\r\n        productOption.textContent = \"Choisissez une option\";\r\n        // add as a child of target\r\n        target.appendChild(productOption);\r\n}\r\n\r\n\r\nfunction addProductOptions (arrayOptions, target) {\r\n         for (let i = 0; i < arrayOptions.length; i++) {\r\n            console.log(arrayOptions.length);\r\n             //Create new html tag\r\n             let productOtherOptions = document.createElement(\"option\");\r\n             // add text\r\n             productOtherOptions.textContent = arrayOptions[i];\r\n            // add as a child of target\r\n             target.appendChild(productOtherOptions);\r\n     }\r\n}\r\n\r\n\r\n// -----------------------------\r\n// MAIN FUNCTION\r\n// -----------------------------\r\n\r\nfunction productPageDisplayInformation (ID) {\r\n    // Start by targeting the html for output the information\r\n    let productPicture = document.getElementById('productPicture');\r\n    let productName = document.getElementById('productName');\r\n    let productID = document.getElementById('productID');\r\n    let productOptionsLabel = document.getElementById('productOptionsLabel');\r\n    let productOptions = document.getElementById('productOptions');\r\n    let productPrice = document.getElementById('productPrice');\r\n    let productDescription = document.getElementById('productDescription');\r\n    \r\n    // FOR EVERY CATEGORY\r\n    console.log(_objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__.default);\r\n    for (let i = 0; i < _objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__.default.length; i++) {\r\n        // Request to server\r\n        fetch(_objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__.default[i].url)\r\n            .then(function(response) {\r\n                // If request OK, return file in JSON\r\n                if (response.ok) {\r\n                    return response.json();\r\n                }\r\n                // If not, print an error message in console\r\n                else {\r\n                }\r\n            })\r\n\r\n            .then (function (value) {\r\n                console.log(value);\r\n                // Loop for divid the object in variables\r\n                for (let i = 0; i < value.length; i++) {\r\n                    if (ID == value[i]._id) {\r\n                        // Apply picture url source\r\n                        productPicture.src = value[i].imageUrl;\r\n                        // Apply name\r\n                        productName.textContent = value[i].name;\r\n                        // Apply ID\r\n                        productID.innerHTML = value[i]._id;\r\n                        // Apply options label, in french\r\n\r\n\r\n\r\n\r\n\r\n                        if (value[i].lenses != null) {\r\n                            // Apply options label, in french\r\n                            productOptionsLabel.textContent = \"Lentilles\";\r\n                            addChooseProductOption (productOptions);\r\n                            let thisCameraLenses = value[i].lenses;\r\n                            console.log(thisCameraLenses);\r\n                            addProductOptions (thisCameraLenses, productOptions);\r\n\r\n\r\n                            // -------------------------ADD VALUE\r\n                            // <option value=\"50mm 1.8\">50mm 1.8</option>\r\n                        }\r\n\r\n\r\n\r\n\r\n\r\n                        if (value[i].colors != null) {\r\n                            // Apply options label, in french\r\n                            productOptionsLabel.textContent = \"Couleurs\";\r\n                        }\r\n                        if (value[i].varnish != null) {\r\n                            // Apply options label, in french\r\n                            productOptionsLabel.textContent = \"Vernis\";\r\n                        }\r\n                        else {\r\n                        }\r\n                        // Apply price with separator thousands and Euro symbol\r\n                        productPrice.textContent = (0,_separatorThousands__WEBPACK_IMPORTED_MODULE_1__.default) (value[i].price);\r\n                        productPrice.textContent += \" €\";\r\n                        // Add description\r\n                        productDescription = value[i].description;\r\n                    }\r\n                    else {\r\n                    }\r\n                }\r\n        })\r\n    }\r\n      \r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n// -------\r\n// EXPORTS\r\n// -------\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productPageDisplayInformation);\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/JS/functions/productPageDisplayInformation.js?");

/***/ }),

/***/ "./src/JS/functions/separatorThousands.js":
/*!************************************************!*\
  !*** ./src/JS/functions/separatorThousands.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// -------\r\n// MAIN FUNCTION\r\n// -------\r\n\r\nfunction separatorThousands(numberSource, b,) {\r\n    numberSource = '' + numberSource;\r\n    b = b || ' ';\r\n    var c = '',\r\n        d = 0;\r\n    while (numberSource.match(/^0[0-9]/)) {\r\n        numberSource = numberSource.substr(1);\r\n    }\r\n    for (var i = numberSource.length-1; i >= 0; i--) {\r\n      c = (d != 0 && d % 3 == 0) ? numberSource[i] + b + c : numberSource[i] + c;\r\n      d++;\r\n    }\r\n    return c;\r\n  }\r\n\r\n\r\n// -------\r\n// EXPORTS\r\n// -------\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (separatorThousands);\r\n\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/JS/functions/separatorThousands.js?");

/***/ }),

/***/ "./src/JS/objectsAndVariables/requestsURL.js":
/*!***************************************************!*\
  !*** ./src/JS/objectsAndVariables/requestsURL.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// DECLARATION OF REQUESTS URL\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n\r\nconst requestsURL = { \r\n    camera: \"http://localhost:3000/api/cameras\", \r\n    teddy: \"http://localhost:3000/api/teddies\", \r\n    furniture: \"http://localhost:3000/api/furniture\"\r\n};\r\n\r\nconst addressesArrayUrl = [\r\n    {\r\n        \"name\": \"camera\",\r\n        \"url\": \"http://localhost:3000/api/cameras\"\r\n    },\r\n    {\r\n        \"name\": \"teddy\",\r\n        \"url\": \"http://localhost:3000/api/teddies\"\r\n    },\r\n    {\r\n        \"name\": \"furniture\",\r\n        \"url\": \"http://localhost:3000/api/furniture\"\r\n    }\r\n];\r\n\r\n// -------\r\n// EXPORTS\r\n// -------\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addressesArrayUrl);\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/JS/objectsAndVariables/requestsURL.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JS_objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JS/objectsAndVariables/requestsURL.js */ \"./src/JS/objectsAndVariables/requestsURL.js\");\n/* harmony import */ var _JS_functions_productPageDisplayInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/functions/productPageDisplayInformation */ \"./src/JS/functions/productPageDisplayInformation.js\");\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// IMPORT FUNCTIONS, OBJECTS, ARRAY\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// Objects\r\n\r\n\r\n\r\n// Functions\r\n\r\n// import actionsWhenClickFilter from './JS/functions/actionsWhenClickFilter.js';\r\n\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// RUN SCRIPT\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n\r\n(0,_JS_functions_productPageDisplayInformation__WEBPACK_IMPORTED_MODULE_1__.default) (\"5be9c4471c9d440000a730e8\");\r\n\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;