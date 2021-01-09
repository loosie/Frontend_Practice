webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useinput */ \"./components/hooks/useinput.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ijong-won/Desktop/code/Frontend_Practice/Clone/react_study_nodebird_clone/front/components/CommentForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  var _useInput = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(''),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      commentText = _useInput2[0],\n      onChangeCommentText = _useInput2[1];\n\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    callback;\n  }, [commentText]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onFinish: onSubmitComment,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea, {\n    value: commentText,\n    onChnage: onChangeCommentText,\n    rows: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, \"\\uC090\\uC57D\")));\n};\n\n_s(CommentForm, \"zY36UX01FvwcFQZaTMZwANtp89M=\", false, function () {\n  return [_hooks_useinput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = CommentForm;\nCommentForm.propTypes = {\n  post: PropTypes.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcz80ZDAyIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwicG9zdCIsInVzZUlucHV0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJjYWxsYmFjayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFFYUMsK0RBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUE7QUFBQSxNQUV2QkMsV0FGdUI7QUFBQSxNQUVWQyxtQkFGVTs7QUFJOUIsTUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUMvQixZQUFNO0FBQ0ZDLFlBQVE7QUFDWCxHQUg4QixFQUkvQixDQUFDSixXQUFELENBSitCLENBQW5DO0FBS0EsU0FDSSxNQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFRSxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMENBQUQsQ0FBTyxRQUFQO0FBQWdCLFNBQUssRUFBRUYsV0FBdkI7QUFBb0MsWUFBUSxFQUFFQyxtQkFBOUM7QUFBbUUsUUFBSSxFQUFFLENBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixZQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixDQURKLENBREo7QUFRSCxDQWpCRDs7R0FBTUosVztVQUV5Q0UsdUQ7OztLQUZ6Q0YsVztBQW9CTkEsV0FBVyxDQUFDUSxTQUFaLEdBQXVCO0FBQ25CUCxNQUFJLEVBQUVRLFNBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESixDQUF2QjtBQUllWCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi9ob29rcy91c2VpbnB1dCc7XG5cbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XG5cbiAgICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHRdID0gdXNlSW5wdXQoJycpO1xuXG4gICAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgIH0sXG4gICAgICAgIFtjb21tZW50VGV4dF0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e2NvbW1lbnRUZXh0fSBvbkNobmFnZT17b25DaGFuZ2VDb21tZW50VGV4dH0gcm93cz17NH0gLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7sgpDslb08L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufVxuXG5cbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9e1xuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n");

/***/ }),

/***/ "./node_modules/antd/lib/_util/colors.js":
false,

/***/ "./node_modules/antd/lib/_util/hooks/useForceUpdate.js":
false,

/***/ "./node_modules/antd/lib/_util/reactNode.js":
false,

/***/ "./node_modules/antd/lib/_util/type.js":
false,

/***/ "./node_modules/antd/lib/form/ErrorList.js":
false,

/***/ "./node_modules/antd/lib/form/FormItem.js":
false,

/***/ "./node_modules/antd/lib/form/FormItemInput.js":
false,

/***/ "./node_modules/antd/lib/form/FormItemLabel.js":
false,

/***/ "./node_modules/antd/lib/form/context.js":
false,

/***/ "./node_modules/antd/lib/form/hooks/useCacheErrors.js":
false,

/***/ "./node_modules/antd/lib/form/hooks/useFrameState.js":
false,

/***/ "./node_modules/antd/lib/form/hooks/useItemRef.js":
false,

/***/ "./node_modules/antd/lib/form/util.js":
false,

/***/ "./node_modules/antd/lib/grid/RowContext.js":
false,

/***/ "./node_modules/antd/lib/grid/col.js":
false,

/***/ "./node_modules/antd/lib/grid/row.js":
false,

/***/ "./node_modules/antd/lib/tooltip/index.js":
false,

/***/ "./node_modules/antd/lib/tooltip/placements.js":
false,

/***/ "./node_modules/rc-field-form/lib/FieldContext.js":
false,

/***/ "./node_modules/rc-tooltip/lib/placements.js":
false,

/***/ "./node_modules/rc-util/lib/hooks/useMemo.js":
false,

/***/ "./node_modules/rc-util/lib/raf.js":
false

})