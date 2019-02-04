webpackHotUpdate("static/development/pages/project.js",{

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
    css: "header.jsx-2143213672{position:fixed;right:100px;z-index:9999;top:0;}.is-active.jsx-2143213672{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2dCLEFBR3dCLEFBU1csZUFSZCxZQUNDLGFBQ1AsTUFDUixjQU1BIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxubGV0IHN0YXRlID0ge1xuICBpc0FjdGl2ZTogdHJ1ZSxcbn1cblxuY29uc3QgdG9nZ2xlTmF2ID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgaGVyZWApXG4gIHN0YXRlLmlzQWN0aXZlID0gIXN0YXRlLmlzQWN0aXZlXG59XG5cbmNvbnN0IEhlYWRlciA9ICh7IHJvdXRlcjogeyBwYXRobmFtZSB9IH0pID0+IChcblxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdGF0ZS5pc0FjdGl2ZSA/ICdoaWRlLW92ZXJsYXknIDogJyd9PlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBvbkNsaWNrPXt0b2dnbGVOYXZ9IGNsYXNzTmFtZT1cImxpc3Qgb25lXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU5hdn0gaWQ9XCJtZW51X2J1dG9vblwiIGFyaWEtbGFiZWw9XCJjbG9zZWRcIiA+PC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheS1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBpZD1cImNsb3NlXCI+PHNwYW4+Y2xvc2U8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPHVsIGlkPVwid2VibGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPjxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyA/ICdpcy1hY3RpdmUnIDogJyd9PjEyNy4wLjAuMTwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy93b3JrJz48YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL3dvcmsnID8gJ2lzLWFjdGl2ZScgOiAnJ30+V29yazwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9jb250YWN0Jz48YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnID8gJ2lzLWFjdGl2ZScgOiAnJ30+Q29udGFjdDwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+PGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9hYm91dCcgPyAnaXMtYWN0aXZlJyA6ICcnfT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMTAwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICAgIGEge1xuXG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXIpXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=project.js.ed0bfd323da0654e07bb.hot-update.js.map