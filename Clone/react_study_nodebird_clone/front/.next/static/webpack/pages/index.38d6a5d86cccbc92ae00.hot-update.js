webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'loosie'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://i.pinimg.com/originals/05/8d/5e/058d5e4b595686316522dee2cb987292.jpg'\n    }, {\n      src: 'https://i.pinimg.com/564x/0c/8a/b3/0c8ab3a08066fde463d3b618bc3d9837.jpg'\n    }, {\n      src: 'https://i.pinimg.com/564x/37/b1/26/37b126cd0d37cfa4365511d150826c1c.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'nero'\n      },\n      content: '우아 대박이네요~'\n    }, {\n      User: {\n        nickname: 'kozy'\n      },\n      content: '오 굳굳이에요'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nvar ADD_POST = 'ADD_POST';\nvar addPost = {\n  type: ADD_POST\n};\nvar dummyPost = {\n  id: 2,\n  content: '더미데이터입니다',\n  User: {\n    id: 1,\n    nickname: 'loosie'\n  },\n  Images: [],\n  Comments: []\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFFLENBQUM7QUFDUkMsTUFBRSxFQUFFLENBREk7QUFFUkMsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBRSxDQURGO0FBRUZFLGNBQVEsRUFBRTtBQUZSLEtBRkU7QUFNUkMsV0FBTyxFQUFFLHVCQU5EO0FBT1JDLFVBQU0sRUFBRSxDQUFDO0FBQ0xDLFNBQUcsRUFBRTtBQURBLEtBQUQsRUFHUjtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQUhRLEVBTVI7QUFDSUEsU0FBRyxFQUFFO0FBRFQsS0FOUSxDQVBBO0FBbUJSQyxZQUFRLEVBQUUsQ0FBQztBQUNQTCxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BREM7QUFJUEMsYUFBTyxFQUFFO0FBSkYsS0FBRCxFQUtSO0FBQ0VGLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQUxRO0FBbkJGLEdBQUQsQ0FEYTtBQWdDeEJJLFlBQVUsRUFBRSxFQWhDWTtBQWlDeEJDLFdBQVMsRUFBRTtBQWpDYSxDQUFyQjtBQW9DUCxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFFTyxJQUFNQyxPQUFPLEdBQUU7QUFDbEJDLE1BQUksRUFBRUY7QUFEWSxDQUFmO0FBSVAsSUFBTUcsU0FBUyxHQUFFO0FBQ2JaLElBQUUsRUFBRSxDQURTO0FBRWJHLFNBQU8sRUFBRSxVQUZJO0FBR2JGLE1BQUksRUFBRTtBQUNGRCxNQUFFLEVBQUUsQ0FERjtBQUVGRSxZQUFRLEVBQUU7QUFGUixHQUhPO0FBT2JFLFFBQU0sRUFBRSxFQVBLO0FBUWJFLFVBQVEsRUFBRTtBQVJHLENBQWpCOztBQVdBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4QmhCLFlBQXdCO0FBQUEsTUFBVmlCLE1BQVU7O0FBQzdDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNJLFNBQUtGLFFBQUw7QUFDSSw2Q0FDR0ssS0FESDtBQUVBZixpQkFBUyxHQUFHYSxTQUFILHNHQUFpQkUsS0FBSyxDQUFDZixTQUF2QixFQUZUO0FBR0FTLGlCQUFTLEVBQUU7QUFIWDs7QUFLSjtBQUNJLGFBQU9NLEtBQVA7QUFSUjtBQVVILENBWEQ7O0FBY2VELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtYWluUG9zdHM6IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnbG9vc2llJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG4gICAgICAgIEltYWdlczogW3tcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8wNS84ZC81ZS8wNThkNWU0YjU5NTY4NjMxNjUyMmRlZTJjYjk4NzI5Mi5qcGcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvMGMvOGEvYjMvMGM4YWIzYTA4MDY2ZmRlNDYzZDNiNjE4YmMzZDk4MzcuanBnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2kucGluaW1nLmNvbS81NjR4LzM3L2IxLzI2LzM3YjEyNmNkMGQzN2NmYTQzNjU1MTFkMTUwODI2YzFjLmpwZydcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgXSxcbiAgICAgICAgXG4gICAgICAgIENvbW1lbnRzOiBbe1xuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiAn7Jqw7JWEIOuMgOuwleydtOuEpOyalH4nXG4gICAgICAgIH0se1xuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAna296eSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiAn7JikIOq1s+q1s+ydtOyXkOyalCdcbiAgICAgICAgfV1cbiAgICB9XSxcbiAgICBpbWFnZVBhdGhzOiBbXSxcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxufVxuXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID17XG4gICAgdHlwZTogQUREX1BPU1QsXG59XG5cbmNvbnN0IGR1bW15UG9zdCA9e1xuICAgIGlkOiAyLFxuICAgIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLDsnoXri4jri6QnLFxuICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiAnbG9vc2llJ1xuICAgIH0sXG4gICAgSW1hZ2VzOiBbXSxcbiAgICBDb21tZW50czogW10sXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})