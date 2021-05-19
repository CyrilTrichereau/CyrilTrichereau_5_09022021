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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoriesUrl\": () => (/* binding */ categoriesUrl),\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// ----------------- app.js\n// -----------------\n// ARRAY\n// -----------------\nvar categoriesUrl = [{\n  name: \"camera\",\n  url: \"http://localhost:3000/api/cameras\",\n  optionsLabel: \"Lentilles\"\n}, {\n  name: \"teddy\",\n  url: \"http://localhost:3000/api/teddies\",\n  optionsLabel: \"Couleurs\"\n}, {\n  name: \"furniture\",\n  url: \"http://localhost:3000/api/furniture\",\n  optionsLabel: \"Vernis\"\n}]; // FUNCTIONS\n// -----------------\n\nvar Product = function Product(jsonProduct) {\n  _classCallCheck(this, Product);\n\n  jsonProduct && Object.assign(this, jsonProduct);\n};\n\n; // -------\n// EXPORTS\n// -------\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/app.js?");

/***/ }),

/***/ "./src/js/homePage.js":
/*!****************************!*\
  !*** ./src/js/homePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ \"./src/app.js\");\n// -----------------------------\n// IMPORT FUNCTIONS, OBJECTS, ARRAY\n// -----------------------------\n // -----------------------------\n// FUNCTIONS\n// -----------------------------\n// Display objects from category array requested\n\nfunction displayCategory(arrayOfProducts) {\n  var target = document.querySelector(\"#categoryDisplayed\");\n\n  while (target.firstChild) {\n    target.removeChild(target.firstChild);\n  }\n\n  for (var i in arrayOfProducts) {\n    var product = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Product(arrayOfProducts[i]);\n    target.innerHTML += \"<a\\n        href=\\\"./pages/productPage.html\\\"\\n        class=\\\"product flex flex-col justify-center items-center max-w-xs rounded-3xl shadow-lg bg-white overflow-hidden m-2 my-4  cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl focus:shadow-2xl productBoxHomePage\\\">\\n            <img src = \\\"\".concat(product.imageUrl, \"\\\" alt=\\\"Image du produit: \").concat(product.name, \"\\\" />\\n            <h4\\n              class = \\\"my-4 px-6 text-2xl font-black text-center text-indigo-900\\\">\\n            \").concat(product.name, \"\\n            </h4>\\n            <p\\n              class = \\\"px-6 font-semibold text-lg text-center text-indigo-900\\\">\\n              </p>\\n              \").concat(product.price.toLocaleString('fr') + \" €\", \"\\n                <p \\n                class=\\\"my-4 px-6 pb-4 text-md font-semibold italic text-center\\\">\\n              \").concat(product.description, \"\\n            </p>\\n      </a>\");\n  }\n} // Function click on filter\n\n\nfunction clickOnFilter(filterIdHtml, url) {\n  var buttonFilter = document.querySelector(filterIdHtml);\n  buttonFilter.addEventListener(\"click\", function () {\n    fetch(url).then(function (response) {\n      // If request OK, return file in JSON\n      if (response.ok) {\n        return response.json();\n      } // If not, print an error message in console\n      else {\n          console.log(\"error with server\");\n        }\n    }).then(function (responseJson) {\n      displayCategory(responseJson);\n    });\n  });\n} // -----------------------------\n// RUN SCRIPT\n// -----------------------------\n//    --hero picture loading and create redirect link to category displayer with a category displayed\n\n\nfetch(_app_js__WEBPACK_IMPORTED_MODULE_0__.categoriesUrl[0].url).then(function (response) {\n  // If request OK, return file in JSON\n  if (response.ok) {\n    return response.json();\n  } // If not, print an error message in console\n  else {\n      console.log(\"error with server\");\n    }\n}).then(function (responseJson) {\n  // loading hero picture\n  var targetPicture = document.querySelector(\"#heroPicture\");\n  targetPicture.src = responseJson[4].imageUrl; // redirect link to category\n\n  var targetLink = document.querySelector(\"#goToCategoryCamera\");\n  targetLink.addEventListener(\"click\", function () {\n    displayCategory(responseJson);\n  });\n}); //    --listen click on filter and create products boxes with informations from responseObject\n\nclickOnFilter(\"#buttonTeddyFilter\", _app_js__WEBPACK_IMPORTED_MODULE_0__.categoriesUrl[1].url);\nclickOnFilter(\"#buttonCameraFilter\", _app_js__WEBPACK_IMPORTED_MODULE_0__.categoriesUrl[0].url);\nclickOnFilter(\"#buttonFurnitureFilter\", _app_js__WEBPACK_IMPORTED_MODULE_0__.categoriesUrl[2].url); //    --listen the cart local storage to update the numbers of products\n\n//# sourceURL=webpack://my-webpack-project/./src/js/homePage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/homePage.js");
/******/ 	
/******/ })()
;