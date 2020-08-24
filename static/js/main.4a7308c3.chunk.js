(this.webpackJsonpsharedatadifferentroutes=this.webpackJsonpsharedatadifferentroutes||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"books",(function(){return M}));var o,r=a(0),l=a.n(r),i=a(9),c=a.n(i),s=a(20),u=a(12),d=a(32),m=a(156),p=a(4),f=a(147),v=a(149),b=Object(f.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}})),E=function(e){return l.a.createElement(v.a,Object.assign({arrow:!0,classes:b()},e))},h=Object(p.a)((function(e){return Object(m.a)({row:{display:"flex",flexWrap:"wrap"},poster:{height:"180px",width:"auto"},book:{borderRadius:"0.1875rem",display:"flex",border:"3px solid transparent","&:not(:last-child)":{marginRight:"14px"},"&:hover":{border:"2px solid #ff51a1",padding:"1px"}}})}))((function(e){var t=e.books,a=e.classes;return l.a.createElement("div",{className:a.row},t.map((function(e,t){return l.a.createElement(s.b,{className:a.book,to:(null===e||void 0===e?void 0:e.id)?"/book/".concat(e.id):"",key:(null===e||void 0===e?void 0:e.id)||t},l.a.createElement(E,{title:(null===e||void 0===e?void 0:e.title)||""},(null===e||void 0===e?void 0:e.poster)&&l.a.createElement("img",{className:a.poster,alt:null===e||void 0===e?void 0:e.title,src:e.poster})))})))})),O=function(){var e=Object(d.c)((function(e){return e.books})),t=e.status,a=e.promise,n=e.result;return{read:function(){if("pending"===t)throw a;if("error"===t)throw n;if("success"===t)return n}}},g=function(){var e=O();return l.a.createElement(h,{books:e.read()||[]})},x=a(157),k=a(68),w=function(e){return l.a.createElement(k.a,e,l.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))},j=Object(p.a)((function(e){return Object(m.a)({root:{height:"calc(100vh - 110px)",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"25px",textTransform:"uppercase",flexDirection:"column",fontWeight:"bold","& a":{textTransform:"none",textDecoration:"none",color:"black","& svg":{position:"relative",top:"7px"}}}})}))((function(e){var t=e.classes;return l.a.createElement("div",{className:t.root},l.a.createElement("div",null,"page not found"),l.a.createElement("div",null,l.a.createElement(s.b,{to:"/"},"Go back ",l.a.createElement(w,{style:{fontSize:40}}))))})),S=Object(p.a)((function(e){return Object(m.a)({root:{marginTop:"20px",display:"flex",flexWrap:"wrap"},header:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},pipe:{"&:not(:last-child):after":{content:"|",padding:"5px"}}})}))((function(e){var t,a,n,o=e.classes,r=Object(u.g)().bookId,i=O().read()||[],c=null===i||void 0===i||null===(t=i.find)||void 0===t?void 0:t.call(i,(function(e){return(null===e||void 0===e?void 0:e.id)===r}));return c?l.a.createElement("article",{className:o.root},l.a.createElement("section",null,(null===c||void 0===c?void 0:c.poster)&&l.a.createElement("img",{alt:null===c||void 0===c?void 0:c.title,src:c.poster})),l.a.createElement("div",null,l.a.createElement("header",{className:o.header},l.a.createElement("h1",null,c.title),l.a.createElement("h3",null,c.subTitle),void 0!==(null===c||void 0===c?void 0:c.ranking)&&l.a.createElement(x.a,{name:"half-rating-read",value:c.ranking,precision:.1,readOnly:!0,size:"large"})),l.a.createElement("section",null,(null===c||void 0===c?void 0:c.publicationDate)&&l.a.createElement("span",{className:o.pipe},null===(a=new Date(c.publicationDate))||void 0===a||null===(n=a.getFullYear)||void 0===n?void 0:n.call(a)),(null===c||void 0===c?void 0:c.length)&&l.a.createElement("span",{className:o.pipe},c.length),(null===c||void 0===c?void 0:c.publisher)&&l.a.createElement("span",{className:o.pipe},c.publisher)),(null===c||void 0===c?void 0:c.overview)&&l.a.createElement("section",null,"Overview:",l.a.createElement("div",{style:{whiteSpace:"pre-line"}},c.overview)))):l.a.createElement(j,null)})),y=a(38),T=a(151),_=a(152),N=a(153),C=a(10),B=a(154),F=a(155),H=Object(p.a)((function(e){var t;return Object(m.a)({root:{flexGrow:1},toolbar:(t={backgroundColor:"#FF51A1",minHeight:80},Object(y.a)(t,e.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),Object(y.a)(t,e.breakpoints.up("sm"),{display:"flex",flexDirection:"row"}),t),title:{flexGrow:1,"& > a":{color:Object(C.c)(e.palette.common.white,1),textDecoration:"none"}},textfield:{"& > *":{color:Object(C.c)(e.palette.common.white,1)}}})}))((function(e){var t=e.classes,a=O().read()||[],n=Object(u.f)();return l.a.createElement("div",{className:t.root},l.a.createElement(T.a,null,l.a.createElement(_.a,{className:t.toolbar},l.a.createElement(N.a,{className:t.title,variant:"h6",noWrap:!0},l.a.createElement(s.b,{to:"/"},"Home")),l.a.createElement(F.a,{id:"combo-box-movies",options:a,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.title)||""},style:{width:300},onChange:function(e,t){(null===t||void 0===t?void 0:t.id)&&n.push("/book/".concat(t.id))},renderInput:function(e){return l.a.createElement(B.a,Object.assign({},e,{label:"Search movie",variant:"outlined",className:t.textfield}))}}))))})),D=a(64);!function(e){e.FETCH_BOOKS_STATUS="@BOOKS/fetchStatus",e.FETCH_BOOKS_PROMISE="@BOOKS/fetchPromise",e.FETCH_BOOKS_RESULT="@BOOKS/fetchResult",e.FETCH_BOOKS_FETCH="@BOOKS/fetch"}(o||(o={}));var K=function(e){return e.type===o.FETCH_BOOKS_FETCH},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:null,promise:null,result:null},t=arguments.length>1?arguments[1]:void 0;return K(t)?Object(D.a)({},e,{status:t.payload.status,promise:t.payload.promise,result:t.payload.result}):e},L=function(e,t,a){return{type:o.FETCH_BOOKS_FETCH,payload:{status:e,promise:t,result:a}}},R=a(65),W=a.n(R),z=function(e){var t,a="pending",n=W.a.get("https://sakai-san.github.io/sharedatadifferentroutes/books.json").then((function(o){e(L(a="success",n,t=o))})).catch((function(o){e(L(a="error",n,t=o))}));e(L(a,n,t))},M=I,G=Object(p.a)((function(e){return Object(m.a)({root:{width:"90%",margin:"0 auto",marginTop:"110px"}})}))((function(e){var t=e.classes,a=Object(d.b)();return Object(r.useEffect)((function(){a(z)}),[]),l.a.createElement(s.a,null,l.a.createElement("div",{className:t.root},l.a.createElement(r.Suspense,{fallback:""},l.a.createElement(H,null)),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0,render:function(){return l.a.createElement(r.Suspense,{fallback:l.a.createElement("h1",null,"Loading books...")},l.a.createElement(g,null))}}),l.a.createElement(u.a,{path:"/book/:bookId",render:function(){return l.a.createElement(r.Suspense,{fallback:l.a.createElement("h1",null,"Loading book...")},l.a.createElement(S,null))}}),l.a.createElement(u.a,{component:j}))))})),P=a(29),U=a(66);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(106);var A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,J=Object(P.e)(Object(P.c)(n),A(Object(P.a)(U.a)));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,{store:J},l.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(107)}},[[79,1,2]]]);
//# sourceMappingURL=main.4a7308c3.chunk.js.map