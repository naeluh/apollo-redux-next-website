webpackHotUpdate("static/development/pages/work/entry.js",{

/***/ "./components/PostList.jsx":
/*!*********************************!*\
  !*** ./components/PostList.jsx ***!
  \*********************************/
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
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);



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

function handleClick(event, id, url) {
  event.preventDefault();
  _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].push({
    pathname: "/work/".concat(url),
    asPath: "/work/".concat(url)
  });
}

function PostList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      webs = _ref$data.webs,
      title = _ref.title,
      extraClass = _ref.extraClass;
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading posts."
  });

  if (webs && webs.length) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-3636536621" + " " + (extraClass || "")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, title === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-3636536621"
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "title",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-3636536621"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "description",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-3636536621"
    })) : ''), title === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3636536621"
    }, "Work") : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-3636536621"
    }, webs.map(function (post, index) {
      return post.URL !== title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: index + 1,
        className: "jsx-3636536621"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        props: post._id,
        href: "/work/".concat(post.Data.Link),
        onClick: function onClick(event) {
          return handleClick(event, post._id, post.Data.Link);
        },
        className: "jsx-3636536621"
      }, post.Image !== null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          backgroundImage: "url(https://strapi.hulea.org/".concat(post.Image.url, ")")
        },
        className: "jsx-3636536621" + " " + "imgHero"
      }) : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-3636536621"
      }, post.Title))) : '';
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3636536621",
      css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdExpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IiLCJmaWxlIjoiL21udC9kL3dhbXA2NC93d3cvYXBvbGxvLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9Qb3N0TGlzdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMTBcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGlkLCB1cmwpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBSb3V0ZXIucHVzaCh7XG4gICAgcGF0aG5hbWU6IGAvd29yay8ke3VybH1gLFxuICAgIGFzUGF0aDogYC93b3JrLyR7dXJsfWBcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIFBvc3RMaXN0KHsgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgd2VicyB9LCB0aXRsZSwgZXh0cmFDbGFzcyB9KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBwb3N0cy4nIC8+XG4gIGlmICh3ZWJzICYmIHdlYnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17ZXh0cmFDbGFzc30+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHt0aXRsZSA9PT0gdW5kZWZpbmVkID8gXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8dGl0bGU+V29yazwvdGl0bGU+IFxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCJOaWNrIEh1bGVhJ3MgV29yayBhbmQgUHJvamVjdHNcIj48L21ldGE+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk5pY2sgSHVsZWEncyBXb3JrIGFuZCBQcm9qZWN0c1wiPjwvbWV0YT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICA6ICcnfVxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHt0aXRsZSA9PT0gdW5kZWZpbmVkID8gPGgxPldvcms8L2gxPiA6ICcnfVxuICAgICAgICA8dWw+XG4gICAgICAgICAge3dlYnMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgcG9zdC5VUkwgIT09IHRpdGxlID8gPGxpIGtleT17aW5kZXggKyAxfT5cbiAgICAgICAgICAgICAgPGEgcHJvcHM9e3Bvc3QuX2lkfSBocmVmPXtgL3dvcmsvJHtwb3N0LkRhdGEuTGlua31gfSBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVDbGljayhldmVudCwgcG9zdC5faWQsIHBvc3QuRGF0YS5MaW5rKX0+XG4gICAgICAgICAgICAgICAge3Bvc3QuSW1hZ2UgIT09IG51bGwgPyA8c3BhbiBjbGFzc05hbWU9XCJpbWdIZXJvXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vc3RyYXBpLmh1bGVhLm9yZy8ke3Bvc3QuSW1hZ2UudXJsfSlgIH19Pjwvc3Bhbj4gOiAnJ31cbiAgICAgICAgICAgICAgICA8aDI+e3Bvc3QuVGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT4gOiAnJ1xuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5leHBvcnQgY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICB3ZWJzIHtcbiAgICAgIF9pZFxuICAgICAgVGl0bGVcbiAgICAgIEltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICAgIGV4dFxuICAgICAgICBwcm92aWRlclxuICAgICAgICBzaXplXG4gICAgICB9XG4gICAgICBEZXNjcmlwdGlvblxuICAgICAgRGF0YVxuICAgICAgVVJMXG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHVwZGF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuXG5cbmV4cG9ydCBjb25zdCBhbGxQb3N0c1F1ZXJ5VmFycyA9IHtcbiAgc2tpcDogMCxcbiAgZmlyc3Q6IFBPU1RTX1BFUl9QQUdFXG59XG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFBvc3RzLCB7XG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFBvc3RzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pKFBvc3RMaXN0KVxuIl19 */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/PostList.jsx */"
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
//# sourceMappingURL=entry.js.4aaca7f186a758759b4c.hot-update.js.map