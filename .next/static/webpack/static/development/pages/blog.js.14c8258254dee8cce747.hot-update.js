webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: allPosts, allPostsQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPosts", function() { return allPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPostsQueryVars", function() { return allPostsQueryVars; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    webs {\n      _id\n      Title\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var POSTS_PER_PAGE = 10;

function handleClick(event, id) {
  event.preventDefault(); // With route name and params

  _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute('blog/entry', {
    id: id
  }); // With route URL
  // Router.pushRoute(`/blog/${id}`)

  console.log(_routes__WEBPACK_IMPORTED_MODULE_4__["Router"]);
}

function PostList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      allPosts = _ref$data.allPosts,
      _allPostsMeta = _ref$data._allPostsMeta,
      webs = _ref$data.webs,
      loadMorePosts = _ref.loadMorePosts;
  console.log(webs);
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading posts."
  });

  if (webs && webs.length) {
    var areMorePosts = false;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-2126052553"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-2126052553"
    }, webs.map(function (post, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: index + 1,
        className: "jsx-2126052553"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2126052553"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2126052553"
      }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/blog/".concat(post.Data.Link),
        onClick: function onClick(event) {
          return handleClick(event, post.Data.Link);
        },
        className: "jsx-2126052553"
      }, post.Title, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2126052553"
      }, post.Data.Link))));
    })), areMorePosts ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return loadMorePosts();
      },
      className: "jsx-2126052553"
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2126052553",
      css: "section.jsx-2126052553{padding-bottom:20px;}li.jsx-2126052553{display:block;margin-bottom:10px;}div.jsx-2126052553{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-2126052553{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-2126052553{font-size:14px;margin-right:5px;}ul.jsx-2126052553{margin:0;padding:0;}button.jsx-2126052553:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURvQixBQUdpQyxBQUdOLEFBSUssQUFJSixBQU9BLEFBSU4sQUFJUyxTQUhSLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHNDQWNGLFlBYkYsT0FjVSxHQXBCZCxPQU9KLFNBQ1gsUUFhMkQsa0RBcEIzRCxPQXFCYSxXQUNGLFNBQ1EsaUJBQ1QsUUFDViIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuXG5jb25zdCBQT1NUU19QRVJfUEFHRSA9IDEwXG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBpZCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIFdpdGggcm91dGUgbmFtZSBhbmQgcGFyYW1zXG4gIFJvdXRlci5wdXNoUm91dGUoJ2Jsb2cvZW50cnknLCB7IGlkOiBpZCB9KVxuICAvLyBXaXRoIHJvdXRlIFVSTFxuICAvLyBSb3V0ZXIucHVzaFJvdXRlKGAvYmxvZy8ke2lkfWApXG4gIGNvbnNvbGUubG9nKFJvdXRlcilcbn1cblxuZnVuY3Rpb24gUG9zdExpc3Qoe1xuICBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBhbGxQb3N0cywgX2FsbFBvc3RzTWV0YSwgd2VicyB9LFxuICBsb2FkTW9yZVBvc3RzXG59KSB7XG4gIGNvbnNvbGUubG9nKHdlYnMpXG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBwb3N0cy4nIC8+XG4gIGlmICh3ZWJzICYmIHdlYnMubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gZmFsc2VcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7d2Vicy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleCArIDF9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYmxvZy8ke3Bvc3QuRGF0YS5MaW5rfWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVDbGljayhldmVudCwgcG9zdC5EYXRhLkxpbmspfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwb3N0LlRpdGxlfSA8c3Bhbj57cG9zdC5EYXRhLkxpbmt9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfXsnICd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggNHB4IDAgNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBhbGxQb3N0cyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHdlYnMge1xuICAgICAgX2lkXG4gICAgICBUaXRsZVxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzUXVlcnlWYXJzID0ge1xuICBza2lwOiAwLFxuICBmaXJzdDogUE9TVFNfUEVSX1BBR0Vcbn1cblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/PostList.js */"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
}

var allPosts = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE // The `graphql` wrapper executes a GraphQL query and makes the results
  // available on the `data` prop of the wrapped component (PostList)

};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(allPosts, {
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }

            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat(_toConsumableArray(previousResult.allPosts), _toConsumableArray(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList));

/***/ })

})
//# sourceMappingURL=blog.js.14c8258254dee8cce747.hot-update.js.map