(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{418:function(e,t,a){e.exports=a(676)},425:function(e,t,a){},426:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},427:function(e,t,a){},676:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(356),i=a.n(l),o=(a(425),a(426),a(427),a(6)),c=a(4),m=a(3),s=a(10),u=a(389),d=a(749),E=a(745),p=a(754),g=a(756),h=a(760),f=a(759),y=a(757),w=a(186),b=a(743),v=a(758),x=a(752),N=a(761),S=a(753),O=a(385),C=a.n(O),F=a(387),M=a.n(F),k=a(386),j=a.n(k),A=a(762),I=a(735),T=a(737),D=a(763),L=a(359),z=a.n(L),P=a(360),R=a.n(P),B=a(361),J=a.n(B),G=a(362),K=a.n(G),V=a(363),W=a.n(V),Y=a(180),X=a.n(Y),$=n.createElement(n.Fragment,null,n.createElement(A.a,null,n.createElement(I.a,null,n.createElement(z.a,null)),n.createElement(T.a,{primary:"Dashboard"})),n.createElement(A.a,null,n.createElement(I.a,null,n.createElement(R.a,null)),n.createElement(T.a,{primary:"Orders"})),n.createElement(A.a,null,n.createElement(I.a,null,n.createElement(J.a,null)),n.createElement(T.a,{primary:"Customers"})),n.createElement(A.a,null,n.createElement(I.a,null,n.createElement(K.a,null)),n.createElement(T.a,{primary:"Reports"})),n.createElement(A.a,null,n.createElement(I.a,null,n.createElement(W.a,null)),n.createElement(T.a,{primary:"Integrations"}))),q=n.createElement(n.Fragment,null,n.createElement(D.a,{component:"div",inset:!0},"Saved reports"),n.createElement(A.a,null,n.createElement(I.a,null,n.createElement(X.a,null)),n.createElement(T.a,{primary:"Current month"})),n.createElement(A.a,null,n.createElement(I.a,null,n.createElement(X.a,null)),n.createElement(T.a,{primary:"Last quarter"})),n.createElement(A.a,null,n.createElement(I.a,null,n.createElement(X.a,null)),n.createElement(T.a,{primary:"Year-end sale"}))),H=a(746),U=[{field:"id",headerName:"ID",width:90},{field:"firstName",headerName:"First name",width:150,editable:!1},{field:"lastName",headerName:"Last name",width:150,editable:!1},{field:"age",headerName:"Age",type:"number",width:110,editable:!1},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")}}],Q=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lannister",firstName:"Cersei",age:42},{id:3,lastName:"Lannister",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}];function Z(){return n.createElement(g.a,{sx:{height:400,width:"100%"}},n.createElement(H.a,{rows:Q,columns:U,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],checkboxSelection:!0,disableRowSelectionOnClick:!0}))}var _=a(765),ee=a(768),te=a(764),ae=a(766),ne=a(767);var re=function(e){return n.createElement(w.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)};function le(e,t,a,n,r,l){return{id:e,date:t,name:a,shipTo:n,paymentMethod:r,amount:l}}var ie=[le(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),le(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),le(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),le(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),le(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function oe(e){e.preventDefault()}function ce(){return n.createElement(n.Fragment,null,n.createElement(re,null,"Recent Orders"),n.createElement(_.a,{size:"small"},n.createElement(ae.a,null,n.createElement(ne.a,null,n.createElement(te.a,null,"Date"),n.createElement(te.a,null,"Name"),n.createElement(te.a,null,"Ship To"),n.createElement(te.a,null,"Payment Method"),n.createElement(te.a,{align:"right"},"Sale Amount"))),n.createElement(ee.a,null,ie.map(function(e){return n.createElement(ne.a,{key:e.id},n.createElement(te.a,null,e.date),n.createElement(te.a,null,e.name),n.createElement(te.a,null,e.shipTo),n.createElement(te.a,null,e.paymentMethod),n.createElement(te.a,{align:"right"},"$".concat(e.amount)))}))),n.createElement(S.a,{color:"primary",href:"#",onClick:oe,sx:{mt:3}},"See more orders"))}var me=a(47),se=a(769),ue=a(744),de=a(383),Ee=a(384),pe=a(61),ge=a(382);function he(e,t){return{time:e,amount:t}}var fe=[he("00:00",0),he("03:00",300),he("06:00",600),he("09:00",800),he("12:00",1500),he("15:00",2e3),he("18:00",2400),he("21:00",2400),he("24:00",void 0)];function ye(){var e=Object(me.a)();return n.createElement(n.Fragment,null,n.createElement(re,null,"Today"),n.createElement(se.a,null,n.createElement(ue.a,{data:fe,margin:{top:16,right:16,bottom:0,left:24}},n.createElement(de.a,{dataKey:"time",stroke:e.palette.text.secondary,style:e.typography.body2}),n.createElement(Ee.a,{stroke:e.palette.text.secondary,style:e.typography.body2},n.createElement(pe.a,{angle:270,position:"left",style:Object(m.a)({textAnchor:"middle",fill:e.palette.text.primary},e.typography.body1)},"Sales ($)")),n.createElement(ge.a,{isAnimationActive:!1,type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}function we(e){return n.createElement(w.a,Object.assign({variant:"body2",color:"text.secondary",align:"center"},e),"Copyright \xa9 ",n.createElement(S.a,{color:"inherit",href:"https://mui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var be=Object(s.a)(h.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var t=e.theme,a=e.open;return Object(m.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},a&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})}),ve=Object(s.a)(p.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var t=e.theme,a=e.open;return{"& .MuiDrawer-paper":Object(m.a)({position:"relative",whiteSpace:"nowrap",width:240,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box"},!a&&Object(c.a)({overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},t.breakpoints.up("sm"),{width:t.spacing(9)}))}}),xe=Object(u.a)(),Ne=function(e){switch(console.log("view"),console.log(e),e){case"SortOrders":return n.createElement(n.Fragment,null,n.createElement(Z,null));case"Orders":return n.createElement(n.Fragment,null,n.createElement(ce,null));case"Chart":default:return n.createElement(n.Fragment,null,n.createElement(ye,null))}};function Se(e){var t=n.useState(!0),a=Object(o.a)(t,2),r=a[0],l=a[1],i=n.useState("SortOrders"),c=Object(o.a)(i,2),s=c[0],u=(c[1],function(){l(!r)});return n.useEffect(function(){console.log("view"),console.log(s)}),n.createElement(d.a,{theme:xe},n.createElement(g.a,{sx:{display:"flex"}},n.createElement(E.a,null),n.createElement(be,{position:"absolute",open:r},n.createElement(f.a,{sx:{pr:"24px"}},n.createElement(v.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:u,sx:Object(m.a)({marginRight:"36px"},r&&{display:"none"})},n.createElement(C.a,null)),n.createElement(w.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1}},"Dashboard"),n.createElement(v.a,{color:"inherit"},n.createElement(x.a,{badgeContent:4,color:"secondary"},n.createElement(j.a,null))))),n.createElement(ve,{variant:"permanent",open:r},n.createElement(f.a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]}},n.createElement(v.a,{onClick:u},n.createElement(M.a,null))),n.createElement(b.a,null),n.createElement(y.a,{component:"nav"},$,n.createElement(b.a,{sx:{my:1}}),q)),n.createElement(g.a,{component:"main",sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900]},flexGrow:1,height:"100vh",overflow:"auto"}},n.createElement(f.a,null),n.createElement(N.a,{maxWidth:"lg",sx:{mt:4,mb:4}},Ne(s)),n.createElement(we,{sx:{pt:4}}))))}var Oe=a(388),Ce=a(17);var Fe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Oe.a,null,r.a.createElement(Ce.c,null,r.a.createElement(Ce.a,{path:"/",element:r.a.createElement(Se,null)},r.a.createElement(Ce.a,{path:"/stations",element:r.a.createElement(Se,{view:"SortOrders"})}),r.a.createElement(Ce.a,{path:"/journey",element:r.a.createElement(Se,{view:"Orders"})})))))},Me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,770)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),l(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fe,null))),Me()}},[[418,1,2]]]);
//# sourceMappingURL=main.5baafac8.chunk.js.map