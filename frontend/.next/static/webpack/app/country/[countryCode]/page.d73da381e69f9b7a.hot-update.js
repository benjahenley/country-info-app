"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/country/[countryCode]/page",{

/***/ "(app-pages-browser)/./src/infrastructure/components/Chart.tsx":
/*!*************************************************!*\
  !*** ./src/infrastructure/components/Chart.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nconst PopulationChart = (param)=>{\n    let { populationCounts } = param;\n    const data = {\n        labels: populationCounts.map((data)=>data.year),\n        datasets: [\n            {\n                label: \"Population Over Time\",\n                data: populationCounts.map((data)=>data.value),\n                fill: false,\n                borderColor: \"rgba(75, 192, 192, 1)\",\n                tension: 0.1\n            }\n        ]\n    };\n    const options = {\n        responsive: true,\n        maintainAspectRatio: false,\n        plugins: {\n            legend: {\n                position: \"top\"\n            },\n            title: {\n                display: false,\n                text: \"Population Growth\"\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-screen-sm mx-auto\",\n        style: {\n            height: \"400px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {\n            data: data,\n            options: options\n        }, void 0, false, {\n            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/infrastructure/components/Chart.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/infrastructure/components/Chart.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PopulationChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopulationChart);\nvar _c;\n$RefreshReg$(_c, \"PopulationChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9pbmZyYXN0cnVjdHVyZS9jb21wb25lbnRzL0NoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQVVyQjtBQUVsQkUsMkNBQU9BLENBQUNRLFFBQVEsQ0FDZFAsaURBQVdBLEVBQ1hDLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsa0RBQVlBLEVBQ1pDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBWVIsTUFBTUUsa0JBQWtEO1FBQUMsRUFDdkRDLGdCQUFnQixFQUNqQjtJQUNDLE1BQU1DLE9BQU87UUFDWEMsUUFBUUYsaUJBQWlCRyxHQUFHLENBQUMsQ0FBQ0YsT0FBU0EsS0FBS0csSUFBSTtRQUNoREMsVUFBVTtZQUNSO2dCQUNFQyxPQUFPO2dCQUNQTCxNQUFNRCxpQkFBaUJHLEdBQUcsQ0FBQyxDQUFDRixPQUFTQSxLQUFLTSxLQUFLO2dCQUMvQ0MsTUFBTTtnQkFDTkMsYUFBYTtnQkFDYkMsU0FBUztZQUNYO1NBQ0Q7SUFDSDtJQUVBLE1BQU1DLFVBQVU7UUFDZEMsWUFBWTtRQUNaQyxxQkFBcUI7UUFDckJDLFNBQVM7WUFDUEMsUUFBUTtnQkFDTkMsVUFBVTtZQUNaO1lBQ0FDLE9BQU87Z0JBQ0xDLFNBQVM7Z0JBQ1RDLE1BQU07WUFDUjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFpQ0MsT0FBTztZQUFFQyxRQUFRO1FBQVE7a0JBQ3ZFLDRFQUFDbkMsaURBQUlBO1lBQUNhLE1BQU1BO1lBQU1VLFNBQVNBOzs7Ozs7Ozs7OztBQUdqQztLQW5DTVo7QUFxQ04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2luZnJhc3RydWN0dXJlL2NvbXBvbmVudHMvQ2hhcnQudHN4P2VlMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIExpbmVFbGVtZW50LFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgUG9pbnRFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kLFxufSBmcm9tIFwiY2hhcnQuanNcIjtcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgTGluZUVsZW1lbnQsXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmRcbik7XG5cbmludGVyZmFjZSBQb3B1bGF0aW9uQ291bnQge1xuICB5ZWFyOiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBQb3B1bGF0aW9uQ2hhcnRQcm9wcyB7XG4gIHBvcHVsYXRpb25Db3VudHM6IFBvcHVsYXRpb25Db3VudFtdO1xufVxuXG5jb25zdCBQb3B1bGF0aW9uQ2hhcnQ6IFJlYWN0LkZDPFBvcHVsYXRpb25DaGFydFByb3BzPiA9ICh7XG4gIHBvcHVsYXRpb25Db3VudHMsXG59KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBwb3B1bGF0aW9uQ291bnRzLm1hcCgoZGF0YSkgPT4gZGF0YS55ZWFyKSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJQb3B1bGF0aW9uIE92ZXIgVGltZVwiLFxuICAgICAgICBkYXRhOiBwb3B1bGF0aW9uQ291bnRzLm1hcCgoZGF0YSkgPT4gZGF0YS52YWx1ZSksXG4gICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMSlcIixcbiAgICAgICAgdGVuc2lvbjogMC4xLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSwgLy8gSW1wb3J0YW50IGZvciByZXNwb25zaXZlbmVzc1xuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIiBhcyBjb25zdCxcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgdGV4dDogXCJQb3B1bGF0aW9uIEdyb3d0aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc2NyZWVuLXNtIG14LWF1dG9cIiBzdHlsZT17eyBoZWlnaHQ6IFwiNDAwcHhcIiB9fT5cbiAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1bGF0aW9uQ2hhcnQ7XG4iXSwibmFtZXMiOlsiTGluZSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkxpbmVFbGVtZW50IiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwicmVnaXN0ZXIiLCJQb3B1bGF0aW9uQ2hhcnQiLCJwb3B1bGF0aW9uQ291bnRzIiwiZGF0YSIsImxhYmVscyIsIm1hcCIsInllYXIiLCJkYXRhc2V0cyIsImxhYmVsIiwidmFsdWUiLCJmaWxsIiwiYm9yZGVyQ29sb3IiLCJ0ZW5zaW9uIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/infrastructure/components/Chart.tsx\n"));

/***/ })

});