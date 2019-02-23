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
      className: "jsx-806783361"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-806783361"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-806783361"
    }, web.Title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: web.id,
      className: "jsx-806783361"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-806783361"
    }, web.Title), image, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      prefetch: "true",
      target: "_blank",
      href: web.Link,
      className: "jsx-806783361"
    }, web.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
      source: web.Description
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: web.URL
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "806783361",
      css: "*.jsx-806783361{box-sizing:border-box;}section.jsx-806783361{padding-bottom:20px;max-width:900px;margin:0 auto;border:1rem solid #000;}li.jsx-806783361{display:block;margin-bottom:10px;}figure.jsx-806783361{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:2rem;position:relative;}.imgHero.jsx-806783361{border:1rem solid #000;}a.jsx-806783361{line-height:1.5;margin-bottom:20px;word-wrap:break-word;font-size:15px;font-weight:600;-webkit-letter-spacing:-0.25px;-moz-letter-spacing:-0.25px;-ms-letter-spacing:-0.25px;letter-spacing:-0.25px;-webkit-text-decoration:none;text-decoration:none;border-bottom:dashed 1px;}a.jsx-806783361:hover{color:#ccc;border-bottom:solid 1px;}span.jsx-806783361{border:1rem solid #000;}ul.jsx-806783361{margin:0;padding:0;}img.jsx-806783361{object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUdtQyxBQUdGLEFBTU4sQUFJSyxBQU1JLEFBR1AsQUFVTCxBQUlZLEFBR2QsQUFJUSxTQUhQLEVBUGMsR0F2QkwsRUFhQSxDQXFCckIsRUFIQSxDQXJDa0IsRUFIbEIsQ0FtQkEsQUFpQkEsVUExQkEsRUFhdUIsQUFVdkIsQ0E3QmdCLGNBQ1MsTUFtQlIsZUFDQyxFQW5CbEIsY0FvQnlCLE1BYlYsMEVBQ00sbUJBQ0QsVUFZRyxRQVh2QiwwQ0FZMkIseUJBQzNCIiwiZmlsZSI6Ii9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgUm91dGVyLCBMaW5rIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuL1Bvc3RMaXN0J1xuXG5mdW5jdGlvbiBQb3N0KHsgZGF0YTogeyBlcnJvciwgd2VicyB9IH0pIHtcbiAgbGV0IHdlYiA9IHdlYnNbMF07XG4gIGxldCBpbWFnZSA9IHdlYi5JbWFnZSAhPT0gbnVsbCA/IDxzcGFuIGlkPVwiaW1hZ2VcIiBjbGFzc05hbWU9XCJpbWdIZXJvXCJcbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vc3RyYXBpLmh1bGVhLm9yZy8ke3dlYi5JbWFnZS51cmx9KWAsXG4gICAgICBib3JkZXI6IGAxZW0gc29saWQgIzExMWAsXG4gICAgICBtYXJnaW5Cb3R0b206IGAyMHB4YFxuICAgIH19Pjwvc3Bhbj4gOiAnJztcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGJsb2cgcG9zdC4nIC8+XG4gIGlmICh3ZWIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGU+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt3ZWIuVGl0bGV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGtleT17d2ViLmlkfT5cbiAgICAgICAgICA8aDE+e3dlYi5UaXRsZX08L2gxPlxuICAgICAgICAgIHtpbWFnZX1cbiAgICAgICAgICA8YSBwcmVmZXRjaD1cInRydWVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXt3ZWIuTGlua30+e3dlYi5UaXRsZX08L2E+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXt3ZWIuRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPFBvc3RMaXN0IHRpdGxlPXt3ZWIuVVJMfT48L1Bvc3RMaXN0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJvcmRlcjogMXJlbSBzb2xpZCAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZ3VyZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdIZXJvIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXJlbSBzb2xpZCAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFyZW0gc29saWQgIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNvbnN0IHBvc3QgPSBncWxgXG4gIHF1ZXJ5IHdlYnMoJHVybDogU3RyaW5nISkge1xuICAgIHdlYnMoIHdoZXJlOiB7IFVSTDogJHVybCB9LCBsaW1pdDogMSkge1xuICAgICAgVGl0bGVcbiAgICAgIF9pZFxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICAgIExpbmtcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5jb25zdCBDb21wb25lbnRXaXRoTXV0YXRpb24gPSBncmFwaHFsKHBvc3QsIHtcbiAgb3B0aW9uczogKHsgcm91dGVyOiB7IHF1ZXJ5IH0gfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHVybDogcXVlcnkudXJsXG4gICAgfVxuICB9KSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhXG4gIH0pXG59KShQb3N0KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbXBvbmVudFdpdGhNdXRhdGlvbilcbiJdfQ== */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Post.jsx */"
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
//# sourceMappingURL=entry.js.938d77e7b92fdacfcce1.hot-update.js.map