"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/../../../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _infrastructure_components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/components/Title */ \"(app-pages-browser)/./src/infrastructure/components/Title.tsx\");\n/* harmony import */ var _infrastructure_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/infrastructure/components/Button */ \"(app-pages-browser)/./src/infrastructure/components/Button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [countries, setCountries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(\"http://localhost:9000\", \"/api/countries\")).then((response)=>setCountries(response.data)).catch((error)=>console.error(error));\n    }, []);\n    function handleClick() {\n        router.push(\"/countries\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gradient-to-tr from-orange-600 to-orange-300\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"text-center py-6 text-white\",\n                    children: \"Country Finder\"\n                }, void 0, false, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5 text-center mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: handleClick,\n                    children: \"Go to finder\"\n                }, void 0, false, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"IOU5AxkT1m4MJ1B0iuzed+WDb/s=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNsQjtBQUM0QjtBQUVFO0FBQ1o7QUFPNUMsTUFBTU0sT0FBTzs7SUFDWCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQVksRUFBRTtJQUN4RCxNQUFNUSxTQUFTSiwwREFBU0E7SUFFeEJMLGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUNGUSxHQUFHLENBQUMsR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDLG1CQUMzQ0csSUFBSSxDQUFDLENBQUNDLFdBQWFQLGFBQWFPLFNBQVNDLElBQUksR0FDN0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVQyxRQUFRRCxLQUFLLENBQUNBO0lBQ3BDLEdBQUcsRUFBRTtJQUVMLFNBQVNFO1FBQ1BYLE9BQU9ZLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNwQix3RUFBS0E7b0JBQUNvQixXQUFVOzhCQUE4Qjs7Ozs7Ozs7Ozs7MEJBR2pELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ25CLHlFQUFNQTtvQkFBQ3FCLFNBQVNMOzhCQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztHQTFCTWQ7O1FBRVdELHNEQUFTQTs7O0tBRnBCQztBQTRCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9pbmZyYXN0cnVjdHVyZS9jb21wb25lbnRzL1RpdGxlXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCJAL2luZnJhc3RydWN0dXJlL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2luZnJhc3RydWN0dXJlL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmludGVyZmFjZSBDb3VudHJ5IHtcbiAgYWxwaGEyQ29kZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb3VudHJpZXMsIHNldENvdW50cmllc10gPSB1c2VTdGF0ZTxDb3VudHJ5W10+KFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL2NvdW50cmllc2ApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldENvdW50cmllcyhyZXNwb25zZS5kYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIHJvdXRlci5wdXNoKFwiL2NvdW50cmllc1wiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctYmxhY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS0zMDBcIj5cbiAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTYgdGV4dC13aGl0ZVwiPkNvdW50cnkgRmluZGVyPC9UaXRsZT5cbiAgICAgICAgey8qIDxTZWFyY2hCYXIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgY291bnRyeVwiPjwvU2VhcmNoQmFyPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgdGV4dC1jZW50ZXIgbXQtMTBcIj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+R28gdG8gZmluZGVyPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJUaXRsZSIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkhvbWUiLCJjb3VudHJpZXMiLCJzZXRDb3VudHJpZXMiLCJyb3V0ZXIiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDbGljayIsInB1c2giLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});