(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{329:function(e,t,r){r(452),e.exports=self.fetch.bind(self)},451:function(e,t,r){__NEXT_REGISTER_PAGE("/contact",function(){return e.exports=r(465),{page:e.exports.default}})},452:function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",function(){return u}),r.d(t,"Request",function(){return y}),r.d(t,"Response",function(){return g}),r.d(t,"DOMException",function(){return v}),r.d(t,"fetch",function(){return _});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function i(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function c(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function h(e){var t=new FileReader,r=c(t);return t.readAsArrayBuffer(e),r}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:n.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:n.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n.arrayBuffer&&n.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||a(e))?this._bodyArrayBuffer=p(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,r,n=f(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=c(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=i(e),t=s(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[i(e)]},u.prototype.get=function(e){return e=i(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(i(e))},u.prototype.set=function(e,t){this.map[i(e)]=s(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),l(e)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),l(e)},n.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(e,t){var r,n,o=(t=t||{}).body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),m.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function g(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},d.call(y.prototype),d.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];g.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})};var v=self.DOMException;try{new v}catch(e){(v=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),v.prototype.constructor=v}function _(e,t){return new Promise(function(r,o){var a=new y(e,t);if(a.signal&&a.signal.aborted)return o(new v("Aborted","AbortError"));var i=new XMLHttpRequest;function s(){i.abort()}i.onload=function(){var e,t,n={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;r(new g(o,n))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.onabort=function(){o(new v("Aborted","AbortError"))},i.open(a.method,a.url,!0),"include"===a.credentials?i.withCredentials=!0:"omit"===a.credentials&&(i.withCredentials=!1),"responseType"in i&&n.blob&&(i.responseType="blob"),a.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),a.signal&&(a.signal.addEventListener("abort",s),i.onreadystatechange=function(){4===i.readyState&&a.signal.removeEventListener("abort",s)}),i.send(void 0===a._bodyInit?null:a._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=u,self.Request=y,self.Response=g)},465:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(53),i=r(54),s=r(329),l=r.n(s);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),e}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r(41).polyfill();var w=function(e){function t(){return c(this,t),d(this,y(t).apply(this,arguments))}return b(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("label",{htmlFor:this.props.htmlFor},this.props.title)}}]),t}(),v=function(e){function t(e){var r;return c(this,t),u(m(m(r=d(this,y(t).call(this,e)))),"handleChange",function(e){var t={};t[e.target.name]=e.target.value,r.setState(t)}),u(m(m(r)),"handleSubmit",function(e){e.preventDefault();var t={first_name:r.state.first_name,last_name:r.state.last_name,email:r.state.email,message:r.state.message};if(t.first_name.length<1||t.email.length<1||t.last_name.length<1||t.message.length<1)return!1;var n=new FormData;n.append("first_name",t.first_name),n.append("last_name",t.last_name),n.append("email",t.email),n.append("message",t.message),l()("https://hulea.org/contact-form.php",{method:"POST",mode:"cors",body:n}).then(function(e){return r.setState(function(e){return{isActive:!e.isActive}}),setTimeout(function(){r.setState(function(e){return{isActive:!e.isActive}})},2e3),e.status,e.json()}).then(function(e){}).catch(function(e){alert("There was some problem with sending your message."),console.log(e)}),r.setState({first_name:"",last_name:"",email:"",message:"",isActive:!0})}),r.state={first_name:"",last_name:"",email:"",message:"",isActive:!0},r.handleChange=r.handleChange.bind(m(m(r))),r.handleSubmit=r.handleSubmit.bind(m(m(r))),r}return b(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("form",{className:"react-form",onSubmit:this.handleSubmit},o.a.createElement("h1",null,"Contact"),o.a.createElement("h3",{className:this.state.isActive?"hide":""},"Thanks!"),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(w,{htmlFor:"first_name",title:"First Name:"}),o.a.createElement("input",{id:"first_name",className:"form-input",name:"first_name",type:"text",required:!0,onChange:this.handleChange,value:this.state.first_name})),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(w,{htmlFor:"last_name",title:"Last Name:"}),o.a.createElement("input",{id:"last_name",className:"form-input",name:"last_name",type:"text",required:!0,onChange:this.handleChange,value:this.state.last_name})),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(w,{htmlFor:"email",title:"Email:"}),o.a.createElement("input",{id:"email",className:"form-input",name:"email",type:"email",required:!0,onChange:this.handleChange,value:this.state.email})),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(w,{htmlFor:"message",title:"Message:"}),o.a.createElement("textarea",{id:"message",className:"form-textarea",name:"message",required:!0,onChange:this.handleChange,value:this.state.message})),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement("input",{id:"formButton",className:"button",type:"submit",placeholder:"Send message"}))))}}]),t}(),_=r(55),E=r(28),A=r.n(E);t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(A.a,null,o.a.createElement("title",null,"Contact")),o.a.createElement(i.a,null),o.a.createElement(v,null),o.a.createElement(_.a,null))}}},[[451,1,0]]]);