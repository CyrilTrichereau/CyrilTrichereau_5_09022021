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

/***/ "./src/JS/functions/actionsWhenClickFilter.js":
/*!****************************************************!*\
  !*** ./src/JS/functions/actionsWhenClickFilter.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objectsAndVariables/requestsURL.js */ \"./src/JS/objectsAndVariables/requestsURL.js\");\n/* harmony import */ var _categoryFilteredDisplayerHomePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryFilteredDisplayerHomePage.js */ \"./src/JS/functions/categoryFilteredDisplayerHomePage.js\");\n\r\n// -------\r\n// ACTIONS TO DO AFTER A CLICK IN FILTER BUTTON\r\n// -------\r\n\r\n// IMPORT FUNCTIONS\r\n\r\n\r\n\r\n// -------\r\n// MAIN FUNCTION\r\n// -------\r\nfunction actionsWhenClickFilter (target) {\r\n    // Creation of an array\r\n    let buttonsFilter = [];\r\n    // Set variables with targeting the button in html page\r\n    let buttonTeddyFilter = document.getElementById('buttonTeddyFilter');\r\n    let buttonCameraFilter = document.getElementById('buttonCameraFilter');\r\n    let buttonFurnitureFilter  = document.getElementById('buttonFurnitureFilter');\r\n    //Send the variables to the array\r\n    buttonsFilter.push (buttonTeddyFilter, buttonCameraFilter, buttonFurnitureFilter);\r\n    console.log(buttonsFilter);\r\n    // Set the listener with a loop who use the array\r\n    for (let i = 0; i < buttonsFilter.length; i++) {\r\n        buttonsFilter[i].addEventListener('click', function () {\r\n            // if it's the teddy filter who is click\r\n            if (buttonsFilter[i] == buttonTeddyFilter) {\r\n                (0,_categoryFilteredDisplayerHomePage_js__WEBPACK_IMPORTED_MODULE_1__.default) (_objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__.default.teddy, target);\r\n            }\r\n            // if it's the camera filter who is click\r\n            else if (buttonsFilter[i] == buttonCameraFilter) {\r\n                (0,_categoryFilteredDisplayerHomePage_js__WEBPACK_IMPORTED_MODULE_1__.default) (_objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__.default.camera, target);\r\n            }\r\n            // if it's the furniture filter who is click\r\n            else if (buttonsFilter[i] == buttonFurnitureFilter) {\r\n                (0,_categoryFilteredDisplayerHomePage_js__WEBPACK_IMPORTED_MODULE_1__.default) (_objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__.default.furniture, target);\r\n            }\r\n            // Else print in console an error message\r\n            else {\r\n                console.log(\"error with selection of category\");\r\n            }\r\n        })\r\n    }\r\n\r\n}\r\n\r\n// -------\r\n// EXPORTS\r\n// -------\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionsWhenClickFilter);\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/JS/functions/actionsWhenClickFilter.js?");

/***/ }),

/***/ "./src/JS/functions/categoryFilteredDisplayerHomePage.js":
/*!***************************************************************!*\
  !*** ./src/JS/functions/categoryFilteredDisplayerHomePage.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newProductBoxHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProductBoxHomePage */ \"./src/JS/functions/newProductBoxHomePage.js\");\n/* harmony import */ var _separatorThousands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./separatorThousands */ \"./src/JS/functions/separatorThousands.js\");\n\r\n// -------\r\n// CATEGORY DISPLAYER\r\n// -------\r\n\r\n// IMPORT FUNCTIONS\r\n\r\n\r\n\r\n\r\n\r\n// -------\r\n// MAIN FUNCTION\r\n// -------\r\n\r\nfunction categoryFilteredDisplayerHomePage (category, target) {\r\n    // Request to server\r\n    fetch(category)\r\n        .then(function(response) {\r\n            // If request OK, return file in JSON\r\n            if (response.ok) {\r\n                return response.json();\r\n            }\r\n            // If not, print an error message in console\r\n            else {\r\n                console.error(error)\r\n            }\r\n        })\r\n\r\n        .then (function (value) {\r\n            console.log(value);\r\n            //Erase the category displayer\r\n            while (target.firstChild) {\r\n                target.removeChild(target.firstChild)\r\n            };\r\n\r\n\r\n\r\n\r\n            // Loop for divid the object in variables\r\n            for (let i = 0; i < value.length; i++) {\r\n                let valueSource = value[i].imageUrl;\r\n                let valueName = value[i].name;\r\n                let valuePrice = value[i].price;\r\n\r\n                let valueDescription = value[i].description;\r\n                // Call the function to create products boxes and set the variables\r\n                (0,_newProductBoxHomePage__WEBPACK_IMPORTED_MODULE_0__.default) (valueSource, valueName, (0,_separatorThousands__WEBPACK_IMPORTED_MODULE_1__.default) (valuePrice), valueDescription, target);\r\n            }\r\n        })\r\n};\r\n\r\n\r\n\r\n\r\n\r\n// -------\r\n// EXPORTS\r\n// -------\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryFilteredDisplayerHomePage);\r\n\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/JS/functions/categoryFilteredDisplayerHomePage.js?");

/***/ }),

/***/ "./src/JS/functions/heroPicture.js":
/*!*****************************************!*\
  !*** ./src/JS/functions/heroPicture.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// HERO PICTURE LOADING\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n\r\nfunction heroPictureLoading (category, numberProduct) {\r\n    fetch(category)\r\n        .then(function(response) {\r\n            // If request OK, return file in JSON\r\n            if (response.ok) {\r\n                return response.json();\r\n            }\r\n            // If not, print an error message in console\r\n            else {\r\n                console.error(error)\r\n            }\r\n        })\r\n\r\n    // Then do something with data\r\n    .then (function (value) {\r\n        // Find picture in html\r\n        let target = document.getElementById('heroPicture');\r\n        // Apply the choosen source\r\n        target.src = value[numberProduct].imageUrl;\r\n    });\r\n}\r\n\r\n\r\n// -------\r\n// EXPORTS\r\n// -------\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heroPictureLoading);\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/JS/functions/heroPicture.js?");

/***/ }),

/***/ "./src/JS/functions/newProductBoxHomePage.js":
/*!***************************************************!*\
  !*** ./src/JS/functions/newProductBoxHomePage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"addClasses\": () => (/* binding */ addClasses),\n/* harmony export */   \"newPicture\": () => (/* binding */ newPicture),\n/* harmony export */   \"newBlocText\": () => (/* binding */ newBlocText)\n/* harmony export */ });\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// FUNCTION WHO CREATE A NEW PRODUCT BOX\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n\r\n// ADD CLASSES FUNCTION\r\nfunction addClasses(value, target) {\r\n  // Read array and add every class\r\n  for (let i = 0; i < value.length; i++) {\r\n    target.classList.add(value[i]);\r\n  }\r\n}\r\n\r\n// ADD PICTURE FUNCTION\r\nfunction newPicture(classes, source, alt, target) {\r\n  // Create new html tag\r\n  let valueNewPicture = document.createElement(\"img\");\r\n  // add classes with addClasses function\r\n  addClasses(classes, valueNewPicture);\r\n  // add alt value\r\n  valueNewPicture.setAttribute(\"alt\", alt);\r\n  // add source\r\n  valueNewPicture.src = source;\r\n  // add as a child of target\r\n  target.appendChild(valueNewPicture);\r\n}\r\n\r\n// ADD BLOC TEXT FUNCTION\r\nfunction newBlocText(HtmlTag, classes, text, target) {\r\n  // Create new html tag\r\n  let valueNewBlocText = document.createElement(HtmlTag);\r\n  // add classes with addClasses function\r\n  addClasses(classes, valueNewBlocText);\r\n  // add text\r\n  valueNewBlocText.innerText = text;\r\n  // add as a child of target\r\n  target.appendChild(valueNewBlocText);\r\n}\r\n\r\n// ---------\r\n// --------- MAIN FUNCTION -----------\r\n// ---------\r\n// NEW PRODUCT BOX HOME PAGE FUNCTION\r\nfunction newProductBoxHomePage(\r\n  pictureSource,\r\n  titleH4Text,\r\n  priceText,\r\n  descriptionText,\r\n  productBoxTarget\r\n) {\r\n  // SET VARIABLES\r\n  // Box Classes\r\n  let newDivContainerClasses = [\r\n    \"product\",\r\n    \"flex\",\r\n    \"flex-col\",\r\n    \"justify-center\",\r\n    \"items-center\",\r\n    \"max-w-xs\",\r\n    \"rounded-3xl\",\r\n    \"shadow-lg\",\r\n    \"bg-white\",\r\n    \"overflow-hidden\",\r\n    \"m-2\",\r\n    \"my-4\",\r\n    \"cursor-pointer\",\r\n    \"transform\",\r\n    \"transition-all\",\r\n    \"hover:scale-105\",\r\n    \"hover:shadow-xl\",\r\n    \"focus:shadow-2xl\",\r\n  ];\r\n  let pictureClasses = [];\r\n  let titleH4Classes = [\r\n    \"my-4\",\r\n    \"px-6\",\r\n    \"text-2xl\",\r\n    \"font-black\",\r\n    \"text-center\",\r\n    \"text-indigo-900\",\r\n  ];\r\n  let priceClasses = [\r\n    \"px-6\",\r\n    \"font-semibold\",\r\n    \"text-lg\",\r\n    \"text-center\",\r\n    \"text-indigo-900\",\r\n  ];\r\n  let descriptionClasses = [\r\n    \"my-4\",\r\n    \"px-6\",\r\n    \"pb-4\",\r\n    \"text-md\",\r\n    \"font-semibold\",\r\n    \"italic\",\r\n    \"text-center\",\r\n  ];\r\n\r\n  // Box alt Tag\r\n  let pictureAttributeAlt = \"Image du produit\";\r\n\r\n  // HTML CREATION - ARCHITECTURE AND ADD CONTENT\r\n  // Div container CREATION\r\n  let newDivContainer = document.createElement(\"div\");\r\n  addClasses(newDivContainerClasses, newDivContainer);\r\n  productBoxTarget.appendChild(newDivContainer);\r\n\r\n  // Picture CREATION\r\n  newPicture(\r\n    pictureClasses,\r\n    pictureSource,\r\n    pictureAttributeAlt,\r\n    newDivContainer\r\n  );\r\n\r\n  // Title H4 CREATION\r\n  newBlocText(\"h4\", titleH4Classes, titleH4Text, newDivContainer);\r\n\r\n  // Price CREATION\r\n  priceText += \" €\";\r\n  newBlocText(\"p\", priceClasses, priceText, newDivContainer);\r\n\r\n  // Description CREATION\r\n  newBlocText(\"p\", descriptionClasses, descriptionText, newDivContainer);\r\n}\r\n\r\n\r\n// -------\r\n// EXPORTS\r\n// -------\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProductBoxHomePage);\r\n\r\n\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/JS/functions/newProductBoxHomePage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// DECLARATION OF REQUESTS URL\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n\r\nconst requestsURL = { \r\n    camera: \"http://localhost:3000/api/cameras\", \r\n    teddy: \"http://localhost:3000/api/teddies\", \r\n    furniture: \"http://localhost:3000/api/furniture\"\r\n};\r\n\r\n// -------\r\n// EXPORTS\r\n// -------\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestsURL);\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/JS/objectsAndVariables/requestsURL.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JS_objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JS/objectsAndVariables/requestsURL.js */ \"./src/JS/objectsAndVariables/requestsURL.js\");\n/* harmony import */ var _JS_functions_heroPicture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/functions/heroPicture.js */ \"./src/JS/functions/heroPicture.js\");\n/* harmony import */ var _JS_functions_actionsWhenClickFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/functions/actionsWhenClickFilter.js */ \"./src/JS/functions/actionsWhenClickFilter.js\");\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// IMPORT FUNCTIONS, OBJECTS, ARRAY\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// Objects\r\n\r\n\r\n// Functions\r\n\r\n\r\n\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n// RUN SCRIPT\r\n// -----------------------------\r\n// -----------------------------\r\n// -----------------------------\r\n\r\n// TARGET HTML FOR CATEGORY DISPLAYER\r\nlet productBoxTarget = document.getElementById('categoryDisplayed');\r\n\r\n// FUNCTION CATEGORY DISPLAYER\r\n(0,_JS_functions_actionsWhenClickFilter_js__WEBPACK_IMPORTED_MODULE_2__.default) (productBoxTarget);\r\n\r\n// HERO PICTURE LOADING\r\n(0,_JS_functions_heroPicture_js__WEBPACK_IMPORTED_MODULE_1__.default) (_JS_objectsAndVariables_requestsURL_js__WEBPACK_IMPORTED_MODULE_0__.default.camera, 4);\n\n//# sourceURL=webpack://cyriltrichereau_5_09022021/./src/index.js?");

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