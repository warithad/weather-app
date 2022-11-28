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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\n\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activateSearchButton();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/apikey.js":
/*!*******************************!*\
  !*** ./src/modules/apikey.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY)\n/* harmony export */ });\nconst API_KEY = '3d5912c9bf4619e4ebc78092fe030d8e';\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/apikey.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/modules/weather.js\");\n\n\nclass UI {\n    static activateSearchButton() {\n        const submitButton = document.getElementById('submit-button');\n        const input = document.getElementById('request-input');\n        submitButton.addEventListener('click', async (e) => {\n            e.preventDefault();\n            const city = input.value;\n            if (city !== '') {\n                const data = await _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(city);\n                UI.appendData(data);\n            }\n        });\n    }\n\n    static appendData(data) {\n        const weatherCard = document.getElementById('weather-card');\n        const feelsLike = document.getElementById('feels-like');\n        const humidity = document.getElementById('humidity');\n        const wind = document.getElementById('wind');\n        const temperature = document.getElementById('temperature');\n        const city = document.getElementById('city');\n\n        city.textContent = data.city;\n        feelsLike.textContent = data.feelsLike;\n        humidity.textContent = data.humidity;\n        temperature.textContent = data.temperature;\n        wind.textContent = data.windSpeed;\n\n        weatherCard.removeAttribute('hidden');\n    }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/ui.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\n/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ \"./src/modules/apikey.js\");\n\n\nclass Weather {\n    static async getData(city) {\n        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${_apikey__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`;\n        try {\n            const response = await fetch(url, { mode: 'cors' });\n            if (!response.ok) {\n                throw new Error(`${city} not found`);\n            }\n\n            const data = await response.json();\n            const temperature = `Temperature: ${data.main.temp} \\u00B0C`;\n            const feelsLike = `Feels Like: ${data.main.feels_like} \\u00B0C`;\n            const humidity = `Humidity: ${data.main.humidity}%`;\n            const windSpeed = `Wind: ${data.wind.speed} km/h`;\n            console.log(temperature);\n            return {\n                temperature, feelsLike, humidity, windSpeed, city,\n            };\n        } catch (error) {\n            alert(error);\n            return null;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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