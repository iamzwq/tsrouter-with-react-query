import{o as s,p as e,r as a,j as o,q as t,L as r,O as n}from"./react-CIfi_uNQ.js";import{I as l,A as i,M as c,b as d,L as p,d as x,B as h,e as m,f as j,S as f}from"./mui-DzuLHEHL.js";function g(){const t=s(),r=e(),[n,h]=a.useState(null),m=Boolean(n),j=()=>{h(null)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:s=>{h(s.currentTarget)},size:"small",sx:{ml:1},children:o.jsx(i,{sx:{width:32,height:32}})}),o.jsx(c,{anchorEl:n,open:m,onClose:j,onClick:j,slotProps:{paper:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"&::before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:o.jsxs(d,{onClick:()=>{j(),t({to:"/login",search:{redirectTo:r.pathname}})},children:[o.jsx(p,{children:o.jsx(x,{fontSize:"small"})}),"Logout"]})})]})}const b=t("/(app)/_layout")({component:function(){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sticky top-0 flex h-8 gap-4 border-b border-b-(--palette-divider) bg-(--palette-background-default) px-2",children:[o.jsxs(h,{className:"flex items-center gap-0.5 select-none",component:r,to:"/",children:[o.jsx(m,{color:"primary",sx:{fontSize:36}}),o.jsx(j,{textTransform:"uppercase",fontWeight:"bold",fontSize:24,color:"primary",children:"tsrouter"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(r,{to:"/",className:"[&.active]:font-bold",children:"Home"}),o.jsx(r,{to:"/dashboard",className:"[&.active]:font-bold",children:"Dashboard"}),o.jsx(r,{to:"/posts",className:"[&.active]:font-bold",children:"Posts"})]}),o.jsxs("div",{className:"ml-auto flex items-center",children:[o.jsx(l,{className:"animate-spin",children:o.jsx(f,{})}),o.jsx(g,{})]})]}),o.jsx("main",{className:"p-2",children:o.jsx(n,{})})]})}});export{b as Route};