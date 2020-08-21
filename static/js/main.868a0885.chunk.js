(this.webpackJsonpsharedatadifferentroutes=this.webpackJsonpsharedatadifferentroutes||[]).push([[0],{48:function(e,n,t){e.exports=t(60)},58:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"useBooks",(function(){return _}));var o,l=t(0),r=t.n(l),i=t(7),c=t.n(i),u=t(22),s=t(3),d=t(84),v=t(31),m=t(29),p=function(e,n,t){var a=e.read();return n(t(a||[])),a};!function(e){e.FETCH_BOOKS="@BOOKS/fetch",e.FETCHING_BOOKS="@BOOKS/fetching"}(o||(o={}));var E=function(e){return e.type===o.FETCHING_BOOKS},b=function(e){return e.type===o.FETCH_BOOKS},f=function(e){return{type:o.FETCH_BOOKS,payload:e}},h=t(80),O=t(82),g=Object(h.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}})),w=function(e){return r.a.createElement(O.a,Object.assign({arrow:!0,classes:g()},e))},k=Object(v.a)((function(e){return Object(d.a)({row:{display:"flex",flexWrap:"wrap"},poster:{height:"180px",width:"auto"}})}))((function(e){var n=e.books,t=e.classes;return r.a.createElement("div",{className:t.row},n.map((function(e,n){return r.a.createElement(u.b,{className:"Book-item",to:(null===e||void 0===e?void 0:e.asin)||(null===e||void 0===e?void 0:e.isbn13)||(null===e||void 0===e?void 0:e.isbn10)?"/book/".concat((null===e||void 0===e?void 0:e.asin)||(null===e||void 0===e?void 0:e.isbn13)||(null===e||void 0===e?void 0:e.isbn10)):"",key:(null===e||void 0===e?void 0:e.asin)||(null===e||void 0===e?void 0:e.isbn13)||(null===e||void 0===e?void 0:e.isbn10)||n},r.a.createElement(w,{title:(null===e||void 0===e?void 0:e.title)||""},(null===e||void 0===e?void 0:e.poster)&&r.a.createElement("img",{className:t.poster,alt:null===e||void 0===e?void 0:e.title,src:e.poster})))})))})),S=function(e){var n=e.wrapPromise,t=p(n,Object(m.b)(),f);return r.a.createElement(k,{books:t})},j=t(83),y=function(){return r.a.createElement("div",null,"page not found")},B=function(e){var n,t,a=e.wrapPromise.read(),o=Object(s.f)().bookId,l=a.find((function(e){return((null===e||void 0===e?void 0:e.asin)||(null===e||void 0===e?void 0:e.isbn13)||(null===e||void 0===e?void 0:e.isbn10))===o}));return l?r.a.createElement("article",{className:"Book"},r.a.createElement("section",null,(null===l||void 0===l?void 0:l.poster)&&r.a.createElement("img",{alt:null===l||void 0===l?void 0:l.title,src:l.poster})),r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,l.title),r.a.createElement("h3",null,l.subTitle),void 0!==(null===l||void 0===l?void 0:l.ranking)&&r.a.createElement(j.a,{name:"half-rating-read",value:l.ranking,precision:.1,readOnly:!0,size:"large"})),r.a.createElement("section",null,(null===l||void 0===l?void 0:l.publicationDate)&&r.a.createElement("span",{className:"Pipe"},null===(n=new Date(l.publicationDate))||void 0===n||null===(t=n.getFullYear)||void 0===t?void 0:t.call(n)),(null===l||void 0===l?void 0:l.length)&&r.a.createElement("span",{className:"Pipe"},l.length),(null===l||void 0===l?void 0:l.publisher)&&r.a.createElement("span",{className:"Pipe"},l.publisher)),(null===l||void 0===l?void 0:l.overview)&&r.a.createElement("section",null,"Overview:",r.a.createElement("div",{style:{whiteSpace:"pre-line"}},l.overview)))):r.a.createElement(y,null)},N=(t(58),t(44));var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{books:[],isFetching:!1},n=arguments.length>1?arguments[1]:void 0;return E(n)?Object(N.a)({},e,{isFetching:n.payload}):b(n)?{books:n.payload,isFetching:!1}:e},F=Object(v.a)((function(e){return Object(d.a)({root:{width:"90%",margin:"0 auto",marginTtop:"110px"}})}))((function(e){var n=e.classes,t=_();return r.a.createElement(u.a,null,r.a.createElement("div",{className:n.root},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,render:function(){return r.a.createElement(l.Suspense,{fallback:r.a.createElement("h1",null,"Loading books...")},r.a.createElement(S,{wrapPromise:t}))}}),r.a.createElement(s.a,{path:"/book/:bookId",render:function(){return r.a.createElement(l.Suspense,{fallback:r.a.createElement("h1",null,"Loading books...")},r.a.createElement(B,{wrapPromise:t}))}}),r.a.createElement(s.a,{component:y}))))})),T=t(18),P=t(43);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(59);var C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,K=Object(T.e)(Object(T.c)(a),C(Object(T.a)(P.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:K},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.868a0885.chunk.js.map