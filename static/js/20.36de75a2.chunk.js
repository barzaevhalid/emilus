(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[20],{566:function(e,t,n){"use strict";n.r(t),n.d(t,"userDetails",(function(){return q}));var a=n(83),s=n(84),c=n(102),i=n(101),r=n(2),l=n(0),o=n(468),d=n(278),j=n(544),m=n(561),b=n(108),u=n(563),h=n(493),x=n(494),O=n(459),p=n(32),v=n(166),f=n(191),g=n.n(f),y=(n(511),n(106)),w=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).avatarEndpoint="https://www.mocky.io/v2/5cc8019d300000980a055e76",e.state={user:null},e}return Object(s.a)(n,[{key:"getBase64",value:function(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}},{key:"componentWillMount",value:function(){var e=this,t=this.props.location.pathname[this.props.location.pathname.length-1];console.log(t),g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t)).then((function(t){return e.setState({user:t.data})}))}},{key:"render",value:function(){var e=this;if(!this.state.user)return Object(r.jsx)(y.a,{align:"center",cover:"content"});var t=this.state.user,n=t.name,a=t.email,s=t.username,c=t.phone,i=t.website,l=t.address;return console.log(this.state),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(v.a,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left",children:[Object(r.jsx)(j.a,{size:90,src:"",icon:Object(r.jsx)(o.a,{})}),Object(r.jsxs)("div",{className:"ml-md-3 mt-md-0 mt-3",children:[Object(r.jsx)(m.a,{onChange:function(t){var n="updatable";"uploading"!==t.file.status?"done"===t.file.status&&(e.getBase64(t.file.originFileObj,(function(t){return e.setState({avatarUrl:t})})),d.b.success({content:"Uploaded!",key:n,duration:1.5})):d.b.loading({content:"Uploading...",key:n,duration:1e3})},showUploadList:!1,action:this.avatarEndpoint,children:Object(r.jsx)(b.a,{type:"primary",children:"Change Avatar"})}),Object(r.jsx)(b.a,{className:"ml-2",onClick:function(){e.setState({avatarUrl:""})},children:"Remove"})]})]}),Object(r.jsx)("div",{className:"mt-4",children:Object(r.jsx)(u.a,{name:"basicInformation",layout:"vertical",initialValues:{name:n,email:a,username:s,phoneNumber:c,website:i,address:l.street,city:l.city,postcode:l.zipcode},onFinish:function(t){var n="updatable";d.b.loading({content:"Updating...",key:n}),setTimeout((function(){e.setState({name:t.name,email:t.email,userName:t.userName,dateOfBirth:t.dateOfBirth,phoneNumber:t.phoneNumber,website:t.website,address:t.address,city:t.city,postcode:t.postcode}),d.b.success({content:"Done!",key:n,duration:2}),window.location.replace("/app/main/clients/list")}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:Object(r.jsx)(h.a,{children:Object(r.jsxs)(x.a,{xs:24,sm:24,md:24,lg:16,children:[Object(r.jsxs)(h.a,{gutter:p.c,children:[Object(r.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(r.jsx)(u.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(r.jsx)(O.a,{})})}),Object(r.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(r.jsx)(u.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(r.jsx)(O.a,{})})}),Object(r.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(r.jsx)(u.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:Object(r.jsx)(O.a,{})})}),Object(r.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(r.jsx)(u.a.Item,{label:"Phone Number",name:"phoneNumber",children:Object(r.jsx)(O.a,{})})}),Object(r.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(r.jsx)(u.a.Item,{label:"Website",name:"website",children:Object(r.jsx)(O.a,{})})}),Object(r.jsx)(x.a,{xs:24,sm:24,md:24,children:Object(r.jsx)(u.a.Item,{label:"Address",name:"address",children:Object(r.jsx)(O.a,{})})}),Object(r.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(r.jsx)(u.a.Item,{label:"City",name:"city",children:Object(r.jsx)(O.a,{})})}),Object(r.jsx)(x.a,{xs:24,sm:24,md:12,children:Object(r.jsx)(u.a.Item,{label:"Post code",name:"postcode",children:Object(r.jsx)(O.a,{})})})]}),Object(r.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})]})}}]),n}(l.Component),C=n(184),N=n(42),k=n(16),I=n(76),S=n(451),F=n(461),U=n(51),P=n(569),B=S.a.useBreakpoint,E=function(e){var t=e.sideContent,n=e.sideContentWidth,a=void 0===n?250:n,s=e.border;return Object(r.jsx)("div",{className:"side-content ".concat(s?"with-border":""),style:{width:"".concat(a,"px")},children:t})},A=function(e){var t=e.sideContent,n=e.visible,a=e.onSideContentClose;return Object(r.jsx)(F.a,{width:320,placement:"left",closable:!1,onClose:a,visible:n,bodyStyle:{paddingLeft:0,paddingRight:0},children:Object(r.jsx)("div",{className:"h-100",children:t})})},L=function(e){var t=e.mainContent,n=e.pageHeader,a=e.sideContentGutter,s=void 0===a||a,c=!U.a.getBreakPoint(B()).includes("lg"),i=Object(l.useState)(!1),o=Object(I.a)(i,2),d=o[0],j=o[1];return Object(r.jsxs)("div",{className:"inner-app-layout",children:[c?Object(r.jsx)(A,Object(k.a)({visible:d,onSideContentClose:function(e){j(!1)}},e)):Object(r.jsx)(E,Object(k.a)({},e)),Object(r.jsxs)("div",{className:"main-content ".concat(n?"has-page-header":""," ").concat(s?"gutter":"no-gutter"),children:[c?Object(r.jsx)("div",{className:"font-size-lg mb-3 ".concat(s?"":"pt-3 px-3"),children:Object(r.jsx)(P.a,{onClick:function(){j(!0)}})}):null,t]})]})},R=function(){return Object(r.jsx)(C.a,{defaultSelectedKeys:"edit-profile",mode:"inline",children:Object(r.jsxs)(C.a.Item,{children:[Object(r.jsx)(o.a,{}),Object(r.jsx)("span",{children:"Edit Profile"})]},"edit-profile")})},W=function(){var e=window.location.pathname.replace([window.location.pathname.length-1]);return Object(r.jsx)(N.d,{children:Object(r.jsx)(N.b,{exact:!0,path:e,component:w})})},q=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsx)(L,{sideContentWidth:320,sideContent:Object(r.jsx)(R,{}),mainContent:Object(r.jsx)(W,{})})}}]),n}(l.Component);t.default=q}}]);
//# sourceMappingURL=20.36de75a2.chunk.js.map