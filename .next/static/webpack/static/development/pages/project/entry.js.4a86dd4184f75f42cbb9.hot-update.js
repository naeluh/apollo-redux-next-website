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




var state = {
  isActive: true
};

var toggleNav = function toggleNav() {
  console.log("here");
  state.isActive = !state.isActive;
};

var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-2143213672"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2143213672" + " " + ((state.isActive ? 'hide-overlay' : '') || "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2143213672"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2143213672"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: toggleNav,
    className: "jsx-2143213672" + " " + "list one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: toggleNav,
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
    css: "header.jsx-2143213672{position:fixed;right:100px;z-index:9999;top:0;}.is-active.jsx-2143213672{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2dCLEFBR3dCLEFBU1csZUFSZCxZQUNDLGFBQ1AsTUFDUixjQU1BIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3Qgc3RhdGUgPSB7XG4gIGlzQWN0aXZlOiB0cnVlLFxufVxuXG5jb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBoZXJlYClcbiAgc3RhdGUuaXNBY3RpdmUgPSAhc3RhdGUuaXNBY3RpdmVcbn1cblxuY29uc3QgSGVhZGVyID0gKHsgcm91dGVyOiB7IHBhdGhuYW1lIH0gfSkgPT4gKFxuXG4gIDxoZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0YXRlLmlzQWN0aXZlID8gJ2hpZGUtb3ZlcmxheScgOiAnJ30+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIG9uQ2xpY2s9e3RvZ2dsZU5hdn0gY2xhc3NOYW1lPVwibGlzdCBvbmVcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTmF2fSBpZD1cIm1lbnVfYnV0b29uXCIgYXJpYS1sYWJlbD1cImNsb3NlZFwiID48L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2VcIj48c3Bhbj5jbG9zZTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8dWwgaWQ9XCJ3ZWJsaXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+PGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nID8gJ2lzLWFjdGl2ZScgOiAnJ30+MTI3LjAuMC4xPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL3dvcmsnPjxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvd29yaycgPyAnaXMtYWN0aXZlJyA6ICcnfT5Xb3JrPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2NvbnRhY3QnPjxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCcgPyAnaXMtYWN0aXZlJyA6ICcnfT5Db250YWN0PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz48YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyA/ICdpcy1hY3RpdmUnIDogJyd9PkFib3V0PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgYSB7XG5cbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlcilcbiJdfQ== */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=entry.js.4a86dd4184f75f42cbb9.hot-update.js.map