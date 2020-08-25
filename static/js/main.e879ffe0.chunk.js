(this.webpackJsonpsharedatadifferentroutes=this.webpackJsonpsharedatadifferentroutes||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"books",(function(){return M}));var o,l=a(0),r=a.n(l),i=a(9),c=a.n(i),s=a(20),u=a(12),d=a(32),m=a(156),p=a(4),f=a(147),v=a(149),b=Object(f.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}})),E=function(e){return r.a.createElement(v.a,Object.assign({arrow:!0,classes:b()},e))},h=Object(p.a)((function(e){return Object(m.a)({row:{display:"flex",flexWrap:"wrap"},poster:{height:"180px",width:"auto"},book:{borderRadius:"0.1875rem",display:"flex",border:"3px solid transparent","&:not(:last-child)":{marginRight:"14px"},"&:hover":{border:"2px solid #ff51a1",padding:"1px"}}})}))((function(e){var t=e.books,a=e.classes;return r.a.createElement("div",{className:a.row},t.map((function(e,t){return r.a.createElement(s.b,{className:a.book,to:(null===e||void 0===e?void 0:e.id)?"/book/".concat(e.id):"",key:(null===e||void 0===e?void 0:e.id)||t},r.a.createElement(E,{title:(null===e||void 0===e?void 0:e.title)||""},(null===e||void 0===e?void 0:e.poster)&&r.a.createElement("img",{className:a.poster,alt:null===e||void 0===e?void 0:e.title,src:e.poster})))})))})),g=function(){var e=Object(d.c)((function(e){return e.books})),t=e.status,a=e.promise,n=e.result;return{read:function(){if("pending"===t)throw a;if("error"===t)throw n;if("success"===t)return n}}},O=function(){var e=g();return r.a.createElement(h,{books:e.read()||[]})},k=a(157),x=a(68),w=function(e){return r.a.createElement(x.a,e,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))},j=Object(p.a)((function(e){return Object(m.a)({root:{height:"calc(100vh - 110px)",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"25px",textTransform:"uppercase",flexDirection:"column",fontWeight:"bold","& a":{textTransform:"none",textDecoration:"none",color:"black","& svg":{position:"relative",top:"7px"}}}})}))((function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("div",null,"page not found"),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},"Go back ",r.a.createElement(w,{style:{fontSize:40}}))))})),y=Object(p.a)((function(e){return Object(m.a)({root:{marginTop:"20px",display:"flex",flexWrap:"wrap"},header:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},pipe:{"&:not(:last-child):after":{content:"|",padding:"5px"}}})}))((function(e){var t,a,n,o=e.classes,l=Object(u.g)().bookId,i=g().read()||[],c=null===i||void 0===i||null===(t=i.find)||void 0===t?void 0:t.call(i,(function(e){return(null===e||void 0===e?void 0:e.id)===l}));return c?r.a.createElement("article",{className:o.root},r.a.createElement("section",null,(null===c||void 0===c?void 0:c.poster)&&r.a.createElement("img",{alt:null===c||void 0===c?void 0:c.title,src:c.poster})),r.a.createElement("div",null,r.a.createElement("header",{className:o.header},r.a.createElement("h1",null,c.title),r.a.createElement("h3",null,c.subTitle),void 0!==(null===c||void 0===c?void 0:c.ranking)&&r.a.createElement(k.a,{name:"half-rating-read",value:c.ranking,precision:.1,readOnly:!0,size:"large"})),r.a.createElement("section",null,(null===c||void 0===c?void 0:c.publicationDate)&&r.a.createElement("span",{className:o.pipe},null===(a=new Date(c.publicationDate))||void 0===a||null===(n=a.getFullYear)||void 0===n?void 0:n.call(a)),(null===c||void 0===c?void 0:c.length)&&r.a.createElement("span",{className:o.pipe},c.length),(null===c||void 0===c?void 0:c.publisher)&&r.a.createElement("span",{className:o.pipe},c.publisher)),(null===c||void 0===c?void 0:c.overview)&&r.a.createElement("section",null,"Overview:",r.a.createElement("div",{style:{whiteSpace:"pre-line"}},c.overview)))):r.a.createElement(j,null)})),N=a(38),S=a(151),T=a(152),_=a(153),C=a(10),D=a(154),F=a(155),H=Object(p.a)((function(e){var t;return Object(m.a)({root:{flexGrow:1},toolbar:(t={backgroundColor:"#FF51A1",minHeight:80},Object(N.a)(t,e.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),Object(N.a)(t,e.breakpoints.up("sm"),{display:"flex",flexDirection:"row"}),t),title:{flexGrow:1,"& > a":{color:Object(C.c)(e.palette.common.white,1),textDecoration:"none"}},textfield:{"& > *":{color:Object(C.c)(e.palette.common.white,1)}}})}))((function(e){var t=e.classes,a=g().read()||[],n=Object(u.f)();return r.a.createElement("div",{className:t.root},r.a.createElement(S.a,null,r.a.createElement(T.a,{className:t.toolbar},r.a.createElement(_.a,{className:t.title,variant:"h6",noWrap:!0},r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement(F.a,{id:"combo-box-books",options:a,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.title)||""},style:{width:300},onChange:function(e,t){(null===t||void 0===t?void 0:t.id)&&n.push("/book/".concat(t.id))},renderInput:function(e){return r.a.createElement(D.a,Object.assign({},e,{label:"Search book",variant:"outlined",className:t.textfield}))}}))))})),I=a(64);!function(e){e.FETCH_BOOKS_FETCH="@BOOKS/fetch"}(o||(o={}));var B=function(e){return e.type===o.FETCH_BOOKS_FETCH},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:null,promise:null,result:null},t=arguments.length>1?arguments[1]:void 0;return B(t)?Object(I.a)({},e,{status:t.payload.status,promise:t.payload.promise,result:t.payload.result}):e},L=function(e,t,a){return{type:o.FETCH_BOOKS_FETCH,payload:{status:e,promise:t,result:a}}},z=a(65),K=a.n(z),G=function(e){var t="pending",a=null,n=K.a.get("https://sakai-san.github.io/sharedatadifferentroutes/books.json").then((function(o){t="success",a=(null===o||void 0===o?void 0:o.data)||[],e(L(t,n,a))})).catch((function(o){e(L(t="error",n,a=o))}));e(L(t,n,a))},M=W,R=Object(p.a)((function(e){return Object(m.a)({root:{width:"90%",margin:"0 auto",marginTop:"110px"}})}))((function(e){var t=e.classes,a=Object(d.b)();return Object(l.useEffect)((function(){a(G)}),[]),r.a.createElement(s.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(l.Suspense,{fallback:""},r.a.createElement(H,null)),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,render:function(){return r.a.createElement(l.Suspense,{fallback:r.a.createElement("h1",null,"Loading books...")},r.a.createElement(O,null))}}),r.a.createElement(u.a,{path:"/book/:bookId",render:function(){return r.a.createElement(l.Suspense,{fallback:r.a.createElement("h1",null,"Loading book...")},r.a.createElement(y,null))}}),r.a.createElement(u.a,{component:j}))))})),J=a(29),X=a(66);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(106);var A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,P=Object(J.e)(Object(J.c)(n),A(Object(J.a)(X.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:P},r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(107)}},[[79,1,2]]]);
//# sourceMappingURL=main.e879ffe0.chunk.js.map