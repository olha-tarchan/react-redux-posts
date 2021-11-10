(this["webpackJsonpreact-redux-posts"]=this["webpackJsonpreact-redux-posts"]||[]).push([[0],{75:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(13),s=n(27),r=n(18),i=n(53),o=n(7),l=(n(69),n(6)),u=n(2),j=n(81),d=n(77),b=(n(50),n(54),"POST/CREATE_POST"),O="POST/EDIT_POST",m="POST/DELETE_POST",p="POST/FETCH_POST",h="POST/SHOW_LOADER",x="POST/HIDE_LOADER",f="POST/SHOW_ERROR",v="POST/HIDE_ERROR",g="POST/SHOW_COLLAPSE",y="POST/HIDE_COLLAPSE";function P(e){return{type:O,payload:e}}function S(e){return function(t){t({type:f,payload:e}),setTimeout((function(){t({type:v})}),3e3)}}var T=n(1),N=function(e){var t=e.text;return Object(T.jsxs)("div",{className:"alert alert-warning",role:"alert",children:["error: ",t]})},E="Save",w={createPost:function(e){return{type:b,payload:e}},showError:S},C=Object(r.b)((function(e){return{error:e.app.error}}),w)((function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(o.a)(t,2),a=n[0],s=n[1],r=function(e){e.persist(),s((function(t){return Object(u.a)(Object(u.a)({},t),Object(l.a)({},e.target.name,e.target.value))}))};return Object(T.jsxs)(j.a,{className:"border p-5 col-lg-6 mx-auto",onSubmit:function(t){if(t.preventDefault(),!a.title.trim()||!a.content.trim())return e.showError("Title and Content have to fill");var n={id:Number(Date.now().toString()),title:a.title,content:a.content};e.createPost(n),s({title:"",content:""}),e.showPanel(!1)},children:[e.error&&Object(T.jsx)(N,{text:e.error}),Object(T.jsxs)(j.a.Group,{className:"mb-3",controlId:"title",children:[Object(T.jsx)(j.a.Label,{children:"Title"}),Object(T.jsx)(j.a.Control,{name:"title",value:a.title,onChange:r,type:"text"})]}),Object(T.jsxs)(j.a.Group,{className:"mb-3",controlId:"content",children:[Object(T.jsx)(j.a.Label,{children:"Content"}),Object(T.jsx)(j.a.Control,{as:"textarea",name:"content",value:a.content,onChange:r,type:"text"})]}),Object(T.jsx)(d.a,{variant:"info",type:"submit",className:"text-white",children:E})]})})),_=n(43);var D={editPost:P},L=Object(r.b)(null,D)((function(e){var t=e.post,n=e.onEditBlock,a=Object(r.c)(),s=Object(c.useState)({title:t.title,content:t.content}),i=Object(o.a)(s,2),j=i[0],d=i[1],b=function(e){e.persist(),d((function(t){return Object(u.a)(Object(u.a)({},t),Object(l.a)({},e.target.name,e.target.value))}))};return Object(T.jsx)("form",{className:"collapse-to-left m-3",onSubmit:function(e){if(e.preventDefault(),j.title.trim()&&j.content){var c=Object(u.a)(Object(u.a)({},t),{title:j.title,content:j.content});a(P(c)),a({type:y}),n(!1)}},children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("input",{type:"text",className:"form-control mb-3",id:"title",value:j.title,name:"title",onChange:b}),Object(T.jsx)("textarea",{className:"form-control mb-3",id:"content",value:j.content,name:"content",onChange:b,rows:"4"}),Object(T.jsx)("button",{className:"btn btn-info text-white mb-2",type:"submit",children:E})]})})})),k=n(84),I=function(e){var t=e.post,n=e.onDelete,a=Object(c.useState)(!1),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(T.jsxs)(k.a,{className:"my-3 ",children:[r?Object(T.jsx)(L,{onEditBlock:function(e){i(e)}.bind(undefined),post:t}):Object(T.jsxs)(k.a.Body,{children:[Object(T.jsx)(k.a.Title,{children:t.title}),Object(T.jsx)(k.a.Text,{children:t.content})]}),Object(T.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(T.jsx)(k.a.Link,{onClick:function(){return i(!r)},className:"text-uppercase btn btn-light m-3 mt-0  mr-1  justify-content-end",children:r?"Hide":"Edit"}),Object(T.jsx)(k.a.Link,{onClick:function(){return n(t.id)},className:"text-uppercase btn btn-light m-3 mt-0  mr-1  justify-content-end",children:"Delete"})]})]})},R={deletePostDispatch:function(e){return{type:m,payload:e}},edit:P},B=Object(r.b)((function(e){return{error:e.app.error,syncPost:e.stateMock.posts}}),R)((function(e){var t=function(t){e.deletePostDispatch(t)};return e.syncPost.length?Object(_.a)(e.syncPost).reverse().map((function(e){return Object(T.jsx)(I,{post:e,onDelete:t.bind(undefined)},e.id)})):Object(T.jsx)("p",{className:"text-center",children:"don't have posts yet"})})),H=n(58),F=n(83),q=n(78),A=n(82),M=n(57),X=n(80),G=function(e){return Object(T.jsxs)(X.a,{show:e.show,onHide:function(){e.handleClose(!1)},children:[Object(T.jsx)(X.a.Header,{closeButton:!0,children:Object(T.jsx)(X.a.Title,{children:"Info"})}),Object(T.jsxs)(X.a.Body,{children:["Simple Example with React-Redux, Bootstrap.",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"You can:",Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:"add new post"}),Object(T.jsx)("li",{children:"edit post"}),Object(T.jsx)("li",{children:"delete post"})]})]})]})};function U(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(F.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"shadow-sm p-3 mb-5",children:Object(T.jsxs)(q.a,{children:[Object(T.jsx)(F.a.Brand,{children:"Olha Tarchan"}),Object(T.jsx)(A.a,{className:"m-sm-2",children:Object(T.jsx)("a",{className:"py-2 me-3 text-white text-decoration-none",target:"_blank",href:"https://github.com/olha-tarchan/react-redux-posts",children:"GITHUB"})}),Object(T.jsx)(A.a,{className:"m-sm-2",children:Object(T.jsx)(M.a,{variant:"info",className:" me-3 text-white text-uppercase",onClick:function(){a(!0)},children:"Info"})})]})}),Object(T.jsx)(G,{show:n,handleClose:function(){a(!1)}.bind(this)})]})}var W=n(79),J=n(55);var V=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(U,{}),Object(T.jsxs)(q.a,{style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[Object(T.jsx)(W.a,{children:Object(T.jsxs)(J.a,{children:[Object(T.jsx)("div",{className:"d-flex justify-content-end",children:Object(T.jsx)("div",{className:" m-auto",children:Object(T.jsx)(d.a,{onClick:function(){return a(!n)},"aria-controls":"example-collapse-text","aria-expanded":n,variant:"info",className:"text-white",children:n?"Close Form":"Create new post"})})}),Object(T.jsx)("div",{children:Object(T.jsx)(H.a,{in:n,children:Object(T.jsx)("div",{id:"example-collapse-text",className:"mt-3",children:Object(T.jsx)(C,{showPanel:function(){a(!1)}.bind(this)})})})})]})}),Object(T.jsx)(W.a,{children:Object(T.jsx)(J.a,{className:" col-lg-6 mx-auto my-3 p-3 box-shadow",children:Object(T.jsx)(B,{})})})]})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},Y={posts:[{id:1630394554061,title:"Lorem ipsum dolor sit amet",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nunc, volutpat tristique malesuada eget, interdum in orci. Morbi egestas orci a leo tempor posuere. Maecenas consectetur tincidunt ligula vel scelerisque. Fusce tortor velit, pharetra nec pretium nec, fringilla at lacus. Morbi blandit nulla vitae nisl euismod, id posuere purus imperdiet."},{id:1630394553061,title:"Donec quam lorem",content:"Donec quam lorem, tempor ac ornare eget, ultrices ac erat. Praesent ultrices metus nec nisl rutrum, at blandit eros pharetra. Quisque maximus id felis auctor posuere. "},{id:1630393553061,title:"Nam sed nisl",content:"Nam sed nisl ac orci tempor dignissim ut ut purus. Pellentesque lectus sem, elementum eget massa eu, lobortis vestibulum purus. Aenean vulputate pellentesque risus, vel pulvinar nibh mattis quis. Aliquam ut molestie lorem. "}],fetchedPosts:[]},z=[],K={loading:!1,error:null,collapsePanel:!1},Z=Object(s.b)({stateMock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.concat(t.payload)});case O:return z=e.posts.map((function(e){return e.id===t.payload.id&&(e.title=t.payload.title,e.content=t.payload.content),e})),Object(u.a)(Object(u.a)({},e),{},{posts:z});case m:return z=e.posts.filter((function(e){return e.id!==t.payload})),Object(u.a)(Object(u.a)({},e),{},{posts:z});case p:return Object(u.a)(Object(u.a)({},e),{},{fetchedPosts:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case x:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case f:return Object(u.a)(Object(u.a)({},e),{},{error:t.payload});case v:return Object(u.a)(Object(u.a)({},e),{},{error:null});case g:return Object(u.a)(Object(u.a)({},e),{},{collapsePanel:!0});case y:return Object(u.a)(Object(u.a)({},e),{},{collapsePanel:!1});default:return e}}}),$=Object(s.d)(Z,Object(s.c)(Object(s.a)(i.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ee=Object(T.jsx)(r.a,{store:$,children:Object(T.jsx)(V,{})});Object(a.render)(ee,document.getElementById("root")),Q()}},[[75,1,2]]]);
//# sourceMappingURL=main.c76c338d.chunk.js.map