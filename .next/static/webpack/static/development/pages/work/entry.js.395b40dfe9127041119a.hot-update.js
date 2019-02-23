webpackHotUpdate("static/development/pages/work/entry.js",{

/***/ "./components/Post.jsx":
/*!*****************************!*\
  !*** ./components/Post.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.jsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PostList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostList */ "./components/PostList.jsx");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query webs($url: String!) {\n    webs( where: { URL: $url }, limit: 1) {\n      Title\n      _id\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      Link\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check









function Post(_ref) {
  var _ref$data = _ref.data,
      error = _ref$data.error,
      webs = _ref$data.webs;
  var web = webs[0];
  var image = web.Image !== null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "image",
    className: "imgHero",
    style: {
      backgroundImage: "url(https://strapi.hulea.org/".concat(web.Image.url, ")"),
      border: "1em solid #111",
      marginBottom: "20px"
    }
  }) : '';
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading blog post."
  });

  if (web) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "jsx-3119774723"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-3119774723"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-3119774723"
    }, web.Title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: web.id,
      className: "jsx-3119774723"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3119774723"
    }, web.Title), image, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      prefetch: "true",
      target: "_blank",
      href: web.Link,
      className: "jsx-3119774723"
    }, web.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
      source: web.Description
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: web.URL,
      extraClass: "worklist"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3119774723",
      css: "*.jsx-3119774723{box-sizing:border-box;}section.jsx-3119774723{padding-bottom:20px;max-width:900px;margin:0 auto;}li.jsx-3119774723{display:block;margin-bottom:10px;}figure.jsx-3119774723{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:2rem;position:relative;}.imgHero.jsx-3119774723{border:1rem solid #000;}a.jsx-3119774723{line-height:1.5;margin-bottom:20px;word-wrap:break-word;font-size:1.5em;font-weight:600;-webkit-letter-spacing:-0.50px;-moz-letter-spacing:-0.50px;-ms-letter-spacing:-0.50px;letter-spacing:-0.50px;-webkit-text-decoration:none;text-decoration:none;border-bottom:dashed 1px;}a.jsx-3119774723:hover{color:#ccc;border-bottom:solid 1px;}span.jsx-3119774723{border:1rem solid #000;}ul.jsx-3119774723{margin:0;padding:0;}img.jsx-3119774723{object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUdtQyxBQUdGLEFBS04sQUFJSyxBQU1JLEFBR1AsQUFVTCxBQUlZLEFBR2QsQUFJUSxTQUhQLEVBUGMsR0F2QkwsRUFhQSxDQXFCckIsRUFIQSxDQXBDa0IsRUFIbEIsQ0FrQkEsQUFpQkEsVUExQkEsRUFhdUIsQUFVdkIsQ0E1QmdCLGNBQ2hCLE1Ba0JrQixnQkFDQSxnQkFDTyxLQWJWLDBFQUNNLG1CQUNELFdBWUcsT0FYdkIsMkNBWTJCLHlCQUMzQiIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL1Bvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWNoZWNrXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIFJvdXRlciwgTGluayB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi9Qb3N0TGlzdCdcblxuZnVuY3Rpb24gUG9zdCh7IGRhdGE6IHsgZXJyb3IsIHdlYnMgfSB9KSB7XG4gIGxldCB3ZWIgPSB3ZWJzWzBdO1xuICBsZXQgaW1hZ2UgPSB3ZWIuSW1hZ2UgIT09IG51bGwgPyA8c3BhbiBpZD1cImltYWdlXCIgY2xhc3NOYW1lPVwiaW1nSGVyb1wiXG4gICAgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3N0cmFwaS5odWxlYS5vcmcvJHt3ZWIuSW1hZ2UudXJsfSlgLFxuICAgICAgYm9yZGVyOiBgMWVtIHNvbGlkICMxMTFgLFxuICAgICAgbWFyZ2luQm90dG9tOiBgMjBweGBcbiAgICB9fT48L3NwYW4+IDogJyc7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBibG9nIHBvc3QuJyAvPlxuICBpZiAod2ViKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57d2ViLlRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBrZXk9e3dlYi5pZH0+XG4gICAgICAgICAgPGgxPnt3ZWIuVGl0bGV9PC9oMT5cbiAgICAgICAgICB7aW1hZ2V9XG4gICAgICAgICAgPGEgcHJlZmV0Y2g9XCJ0cnVlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17d2ViLkxpbmt9Pnt3ZWIuVGl0bGV9PC9hPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17d2ViLkRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxQb3N0TGlzdCB0aXRsZT17d2ViLlVSTH0gZXh0cmFDbGFzcz1cIndvcmtsaXN0XCI+PC9Qb3N0TGlzdD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZ0hlcm8ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcmVtIHNvbGlkICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFyZW0gc29saWQgIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNvbnN0IHBvc3QgPSBncWxgXG4gIHF1ZXJ5IHdlYnMoJHVybDogU3RyaW5nISkge1xuICAgIHdlYnMoIHdoZXJlOiB7IFVSTDogJHVybCB9LCBsaW1pdDogMSkge1xuICAgICAgVGl0bGVcbiAgICAgIF9pZFxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICAgIExpbmtcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5jb25zdCBDb21wb25lbnRXaXRoTXV0YXRpb24gPSBncmFwaHFsKHBvc3QsIHtcbiAgb3B0aW9uczogKHsgcm91dGVyOiB7IHF1ZXJ5IH0gfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHVybDogcXVlcnkudXJsXG4gICAgfVxuICB9KSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhXG4gIH0pXG59KShQb3N0KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbXBvbmVudFdpdGhNdXRhdGlvbilcbiJdfQ== */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Post.jsx */"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
}

var post = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject()); // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)

var ComponentWithMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(post, {
  options: function options(_ref2) {
    var query = _ref2.router.query;
    return {
      variables: {
        url: query.url
      }
    };
  },
  props: function props(_ref3) {
    var data = _ref3.data;
    return {
      data: data
    };
  }
})(Post);
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ComponentWithMutation));

/***/ })

})
//# sourceMappingURL=entry.js.395b40dfe9127041119a.hot-update.js.map