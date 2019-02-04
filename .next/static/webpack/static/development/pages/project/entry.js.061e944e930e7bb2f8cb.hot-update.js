webpackHotUpdate("static/development/pages/project/entry.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined;





state = {
  isActive: true
};

toggleNav = function toggleNav() {
  _this.setState(function (prevState) {
    return {
      isActive: !prevState.isActive
    };
  });
};

var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-2143213672"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2143213672" + " " + "hide-overlay"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2143213672"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2143213672"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2143213672" + " " + "list one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    id: "menu_butoon",
    "aria-label": "closed",
    className: "jsx-2143213672"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2143213672" + " " + "overlay"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2143213672" + " " + "overlay-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "close",
    className: "jsx-2143213672"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2143213672"
  }, "close")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    id: "weblist",
    className: "jsx-2143213672"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2143213672" + " " + "bk"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2143213672" + " " + ((pathname === '/' ? 'is-active' : '') || "")
  }, "127.0.0.1"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2143213672" + " " + "bk"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/work"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2143213672" + " " + ((pathname === '/work' ? 'is-active' : '') || "")
  }, "Work"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2143213672" + " " + "bk"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2143213672" + " " + ((pathname === '/contact' ? 'is-active' : '') || "")
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2143213672" + " " + "bk"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2143213672" + " " + ((pathname === '/about' ? 'is-active' : '') || "")
  }, "About"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2143213672",
    css: "header.jsx-2143213672{position:fixed;right:100px;z-index:9999;top:0;}.is-active.jsx-2143213672{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2dCLEFBR3dCLEFBU1csZUFSZCxZQUNDLGFBQ1AsTUFDUixjQU1BIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuc3RhdGUgPSB7XG4gIGlzQWN0aXZlOiB0cnVlLFxufVxuXG50b2dnbGVOYXYgPSAoKSA9PiB7XG4gIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgaXNBY3RpdmU6ICFwcmV2U3RhdGUuaXNBY3RpdmVcbiAgfSkpXG59XG5cbmNvbnN0IEhlYWRlciA9ICh7IHJvdXRlcjogeyBwYXRobmFtZSB9IH0pID0+IChcblxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZS1vdmVybGF5XCI+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3Qgb25lXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWVudV9idXRvb25cIiBhcmlhLWxhYmVsPVwiY2xvc2VkXCIgPjwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZVwiPjxzcGFuPmNsb3NlPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDx1bCBpZD1cIndlYmxpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJia1wiPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz48YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnLycgPyAnaXMtYWN0aXZlJyA6ICcnfT4xMjcuMC4wLjE8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJia1wiPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvd29yayc+PGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy93b3JrJyA/ICdpcy1hY3RpdmUnIDogJyd9Pldvcms8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJia1wiPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvY29udGFjdCc+PGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9jb250YWN0JyA/ICdpcy1hY3RpdmUnIDogJyd9PkNvbnRhY3Q8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJia1wiPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYWJvdXQnPjxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ2lzLWFjdGl2ZScgOiAnJ30+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IDEwMHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgICBhIHtcblxuICAgICAgfVxuICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSGVhZGVyKVxuIl19 */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=entry.js.061e944e930e7bb2f8cb.hot-update.js.map