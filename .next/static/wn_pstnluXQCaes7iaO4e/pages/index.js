(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+wdc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=null,i=!1,l=3,r=-1,o=-1,u=!1,s=!1;function c(){if(!u){var e=a.expirationTime;s?_():s=!0,g(p,e)}}function f(){var e=a,t=a.next;if(a===t)a=null;else{var n=a.previous;a=n.next=t,t.previous=n}e.next=e.previous=null,n=e.callback,t=e.expirationTime,e=e.priorityLevel;var i=l,r=o;l=e,o=t;try{var u=n()}finally{l=i,o=r}if("function"===typeof u)if(u={callback:u,priorityLevel:e,expirationTime:t,next:null,previous:null},null===a)a=u.next=u.previous=u;else{n=null,e=a;do{if(e.expirationTime>=t){n=e;break}e=e.next}while(e!==a);null===n?n=a:n===a&&(a=u,c()),(t=n.previous).next=n.previous=u,u.next=n,u.previous=t}}function m(){if(-1===r&&null!==a&&1===a.priorityLevel){u=!0;try{do{f()}while(null!==a&&1===a.priorityLevel)}finally{u=!1,null!==a?c():s=!1}}}function p(e){u=!0;var n=i;i=e;try{if(e)for(;null!==a;){var l=t.unstable_now();if(!(a.expirationTime<=l))break;do{f()}while(null!==a&&a.expirationTime<=l)}else if(null!==a)do{f()}while(null!==a&&!E())}finally{u=!1,i=n,null!==a?c():s=!1,m()}}var d,b,v=Date,h="function"===typeof setTimeout?setTimeout:void 0,y="function"===typeof clearTimeout?clearTimeout:void 0,w="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,x="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function k(e){d=w(function(t){y(b),e(t)}),b=h(function(){x(d),e(t.unstable_now())},100)}if("object"===typeof performance&&"function"===typeof performance.now){var j=performance;t.unstable_now=function(){return j.now()}}else t.unstable_now=function(){return v.now()};var g,_,E,N=null;if((N=window)&&N._schedMock){var T=N._schedMock;g=T[0],_=T[1],E=T[2],t.unstable_now=T[3]}else if("function"!==typeof MessageChannel){var O=null,M=function(e){if(null!==O)try{O(e)}finally{O=null}};g=function(e){null!==O?setTimeout(g,0,e):(O=e,setTimeout(M,0,!1))},_=function(){O=null},E=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof w&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof x&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var C=null,P=!1,A=-1,q=!1,F=!1,L=0,H=33,R=33;E=function(){return L<=t.unstable_now()};var W=new MessageChannel,D=W.port2;W.port1.onmessage=function(){P=!1;var e=C,n=A;C=null,A=-1;var a=t.unstable_now(),i=!1;if(0>=L-a){if(!(-1!==n&&n<=a))return q||(q=!0,k(I)),C=e,void(A=n);i=!0}if(null!==e){F=!0;try{e(i)}finally{F=!1}}};var I=function(e){if(null!==C){k(I);var t=e-L+R;t<R&&H<R?(8>t&&(t=8),R=t<H?H:t):H=t,L=e+R,P||(P=!0,D.postMessage(void 0))}else q=!1};g=function(e,t){C=e,A=t,F||0>t?D.postMessage(void 0):q||(q=!0,k(I))},_=function(){C=null,P=!1,A=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=l,i=r;l=e,r=t.unstable_now();try{return n()}finally{l=a,r=i,m()}},t.unstable_next=function(e){switch(l){case 1:case 2:case 3:var n=3;break;default:n=l}var a=l,i=r;l=n,r=t.unstable_now();try{return e()}finally{l=a,r=i,m()}},t.unstable_scheduleCallback=function(e,n){var i=-1!==r?r:t.unstable_now();if("object"===typeof n&&null!==n&&"number"===typeof n.timeout)n=i+n.timeout;else switch(l){case 1:n=i+-1;break;case 2:n=i+250;break;case 5:n=i+1073741823;break;case 4:n=i+1e4;break;default:n=i+5e3}if(e={callback:e,priorityLevel:l,expirationTime:n,next:null,previous:null},null===a)a=e.next=e.previous=e,c();else{i=null;var o=a;do{if(o.expirationTime>n){i=o;break}o=o.next}while(o!==a);null===i?i=a:i===a&&(a=e,c()),(n=i.previous).next=i.previous=e,e.next=i,e.previous=n}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)a=null;else{e===a&&(a=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=l;return function(){var a=l,i=r;l=n,r=t.unstable_now();try{return e.apply(this,arguments)}finally{l=a,r=i,m()}}},t.unstable_getCurrentPriorityLevel=function(){return l},t.unstable_shouldYield=function(){return!i&&(null!==a&&a.expirationTime<o||E())},t.unstable_continueExecution=function(){null!==a&&c()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return a}},QCnb:function(e,t,n){"use strict";e.exports=n("+wdc")},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),i=n("sLSF"),l=n("MI3g"),r=n("a7VT"),o=n("Tit0"),u=n("q1tI"),s=n.n(u),c=n("gaPq"),f=n("Cgje"),m=n("naWs"),p=n("AT/M"),d=n("vYYK"),b=n("MX0m"),v=n.n(b),h=n("YFqc"),y=n.n(h),w=n("i8i4"),x=n.n(w),k=n("m/Pd"),j=n.n(k),g=function(e){function t(){var e,n;Object(a.default)(this,t);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=Object(l.default)(this,(e=Object(r.default)(t)).call.apply(e,[this].concat(o))),Object(d.a)(Object(p.default)(n),"state",{height:"",width:""}),Object(d.a)(Object(p.default)(n),"getRandomArbitrary",function(e,t){return Math.random()*(t-e)+e}),Object(d.a)(Object(p.default)(n),"color",function(){return"#"+Math.random().toString(16).slice(2,8).toUpperCase()}),Object(d.a)(Object(p.default)(n),"r",n.getRandomArbitrary(1.3432,70.6546)),n}return Object(o.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){document.body.style.overflowX="hidden";x.a.findDOMNode(this.refs.block).getBoundingClientRect();this.setState(function(e){return{height:window.innerHeight,width:window.innerWidth}})}},{key:"render",value:function(){return s.a.createElement("section",{className:"jsx-4052954295 offset60"},s.a.createElement(j.a,null,s.a.createElement("title",{className:"jsx-4052954295"},"Nick Hulea"),s.a.createElement("meta",{name:"title",content:"Nick Hulea's Website!",className:"jsx-4052954295"}),s.a.createElement("meta",{name:"description",content:"Nick Hulea's Website!",className:"jsx-4052954295"})),s.a.createElement("h1",{id:"title",className:"jsx-4052954295"},"Welcome!"),s.a.createElement("p",{id:"description",className:"jsx-4052954295"},"Hello you have arrived at the website of Nick Hulea !"),s.a.createElement("p",{className:"jsx-4052954295"},"Samples of my work can be found ",s.a.createElement(y.a,{href:"/work"},s.a.createElement("a",{prefetch:"true",className:"jsx-4052954295"},"here")),"."),s.a.createElement("p",{className:"jsx-4052954295"},"If you would like to contact me or if you have any questions click ",s.a.createElement(y.a,{href:"/contact"},s.a.createElement("a",{prefetch:"true",className:"jsx-4052954295"},"here")),"."),s.a.createElement("div",{id:"block",ref:"block",style:{transform:"rotate3d(1, 1, 1, "+this.r+"deg)",backgroundColor:this.color(),height:this.state.height,width:this.state.width},className:"jsx-4052954295"}),s.a.createElement("div",{className:"jsx-4052954295 clear"}),s.a.createElement(v.a,{id:"4052954295"},["#title.jsx-4052954295{font-weight:900;font-size:50px;line-height:1;-webkit-letter-spacing:-0.05em;-moz-letter-spacing:-0.05em;-ms-letter-spacing:-0.05em;letter-spacing:-0.05em;}","p.jsx-4052954295{font-weight:600;font-size:24px;line-height:1.1;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}","body.jsx-4052954295,#block.jsx-4052954295{overflow-x:hidden;}","#block.jsx-4052954295{position:fixed;top:0;left:0;}",".clear.jsx-4052954295{clear:both;height:75vh;}"]))}}]),t}(s.a.Component),_=function(e){function t(){return Object(a.default)(this,t),Object(l.default)(this,Object(r.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){return s.a.createElement(c.a,null,s.a.createElement(f.a,null),s.a.createElement(g,{title:"Home Page"}),s.a.createElement(m.a,null))}}]),t}(s.a.Component);t.default=_},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);