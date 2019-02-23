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
      className: "jsx-2181661057"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-2181661057"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-2181661057"
    }, web.Title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: web.id,
      className: "jsx-2181661057"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-2181661057"
    }, web.Title), image, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      prefetch: "true",
      target: "_blank",
      href: web.Link,
      className: "jsx-2181661057"
    }, web.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
      source: web.Description
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: web.URL,
      extraClass: "worklist"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2181661057",
      css: "*.jsx-2181661057{box-sizing:border-box;}section.jsx-2181661057{padding-bottom:20px;max-width:900px;margin:0 auto;}li.jsx-2181661057{display:block;margin-bottom:10px;}figure.jsx-2181661057{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:2rem;position:relative;}.imgHero.jsx-2181661057{border:1rem solid #000;}a.jsx-2181661057{line-height:1.5;margin-bottom:20px;word-wrap:break-word;font-size:15px;font-weight:600;-webkit-letter-spacing:-0.25px;-moz-letter-spacing:-0.25px;-ms-letter-spacing:-0.25px;letter-spacing:-0.25px;-webkit-text-decoration:none;text-decoration:none;border-bottom:dashed 1px;}a.jsx-2181661057:hover{color:#ccc;border-bottom:solid 1px;}span.jsx-2181661057{border:1rem solid #000;}ul.jsx-2181661057{margin:0;padding:0;}img.jsx-2181661057{object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUdtQyxBQUdGLEFBS04sQUFJSyxBQU1JLEFBR1AsQUFVTCxBQUlZLEFBR2QsQUFJUSxTQUhQLEVBUGMsR0F2QkwsRUFhQSxDQXFCckIsRUFIQSxDQXBDa0IsRUFIbEIsQ0FrQkEsQUFpQkEsVUExQkEsRUFhdUIsQUFVdkIsQ0E1QmdCLGNBQ2hCLE1Ba0JpQixlQUNDLGdCQUNPLE1BYlYsMEVBQ00sbUJBQ0QsVUFZRyxRQVh2QiwwQ0FZMkIseUJBQzNCIiwiZmlsZSI6Ii9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgUm91dGVyLCBMaW5rIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuL1Bvc3RMaXN0J1xuXG5mdW5jdGlvbiBQb3N0KHsgZGF0YTogeyBlcnJvciwgd2VicyB9IH0pIHtcbiAgbGV0IHdlYiA9IHdlYnNbMF07XG4gIGxldCBpbWFnZSA9IHdlYi5JbWFnZSAhPT0gbnVsbCA/IDxzcGFuIGlkPVwiaW1hZ2VcIiBjbGFzc05hbWU9XCJpbWdIZXJvXCJcbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vc3RyYXBpLmh1bGVhLm9yZy8ke3dlYi5JbWFnZS51cmx9KWAsXG4gICAgICBib3JkZXI6IGAxZW0gc29saWQgIzExMWAsXG4gICAgICBtYXJnaW5Cb3R0b206IGAyMHB4YFxuICAgIH19Pjwvc3Bhbj4gOiAnJztcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGJsb2cgcG9zdC4nIC8+XG4gIGlmICh3ZWIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGU+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt3ZWIuVGl0bGV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGtleT17d2ViLmlkfT5cbiAgICAgICAgICA8aDE+e3dlYi5UaXRsZX08L2gxPlxuICAgICAgICAgIHtpbWFnZX1cbiAgICAgICAgICA8YSBwcmVmZXRjaD1cInRydWVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXt3ZWIuTGlua30+e3dlYi5UaXRsZX08L2E+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXt3ZWIuRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPFBvc3RMaXN0IHRpdGxlPXt3ZWIuVVJMfSBleHRyYUNsYXNzPVwid29ya2xpc3RcIj48L1Bvc3RMaXN0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWd1cmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nSGVybyB7XG4gICAgICAgICAgICBib3JkZXI6IDFyZW0gc29saWQgIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcmVtIHNvbGlkICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5jb25zdCBwb3N0ID0gZ3FsYFxuICBxdWVyeSB3ZWJzKCR1cmw6IFN0cmluZyEpIHtcbiAgICB3ZWJzKCB3aGVyZTogeyBVUkw6ICR1cmwgfSwgbGltaXQ6IDEpIHtcbiAgICAgIFRpdGxlXG4gICAgICBfaWRcbiAgICAgIEltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICAgIGV4dFxuICAgICAgICBwcm92aWRlclxuICAgICAgICBzaXplXG4gICAgICB9XG4gICAgICBEZXNjcmlwdGlvblxuICAgICAgRGF0YVxuICAgICAgVVJMXG4gICAgICBMaW5rXG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHVwZGF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuY29uc3QgQ29tcG9uZW50V2l0aE11dGF0aW9uID0gZ3JhcGhxbChwb3N0LCB7XG4gIG9wdGlvbnM6ICh7IHJvdXRlcjogeyBxdWVyeSB9IH0pID0+ICh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICB1cmw6IHF1ZXJ5LnVybFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YVxuICB9KVxufSkoUG9zdClcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDb21wb25lbnRXaXRoTXV0YXRpb24pXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Post.jsx */"
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
//# sourceMappingURL=entry.js.cfe53edd1a5c7d9c8610.hot-update.js.map