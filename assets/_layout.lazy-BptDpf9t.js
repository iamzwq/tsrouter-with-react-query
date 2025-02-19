import{r as u,u as Me,a as je,b as Q,c as we,d as Le,e as Pe,f as ne,g as $e,h as ie,i as Te,j as s,k as O,l as P,m as L,n as ze,o as Be,p as Ne,O as Fe}from"./index-ZfCGJTDw.js";import{r as Oe,u as Ee,B as fe,C as Ae,c as Z,a as De,L as X,b as Ue,M as He}from"./Menu-DvSJR9q8.js";import{g as $,a as A,u as D,s as j,c as U,m as E,b as le,r as Ve}from"./createSimplePaletteValueFilter-CDOjEtHb.js";const _e="Error preloading route! ☝️";function We(e,t){const a=Me(),[o,l]=u.useState(!1),c=u.useRef(!1),r=je(t),{activeProps:n=()=>({className:"active"}),inactiveProps:v=()=>({}),activeOptions:d,to:y,preload:x,preloadDelay:h,hashScrollIntoView:C,replace:S,startTransition:R,resetScroll:m,viewTransition:g,children:b,target:I,disabled:p,style:k,className:T,onClick:z,onFocus:H,onMouseEnter:V,onMouseLeave:_,onTouchStart:W,ignoreBlocker:ve,...me}=e,{params:yt,search:xt,hash:It,state:Ct,mask:Rt,reloadDocument:St,...ee}=me,te=u.useMemo(()=>{try{return new URL(`${y}`),"external"}catch{}return"internal"},[y]),he=Q({select:i=>i.location.search,structuralSharing:!0});e={from:we({strict:!1,select:i=>i.pathname}),...e};const M=u.useMemo(()=>a.buildLocation(e),[a,e,he]),B=u.useMemo(()=>e.reloadDocument?!1:x??a.options.defaultPreload,[a.options.defaultPreload,x,e.reloadDocument]),be=h??a.options.defaultPreloadDelay??0,q=Q({select:i=>{if(d!=null&&d.exact){if(!$e(i.location.pathname,M.pathname,a.basepath))return!1}else{const f=ie(i.location.pathname,a.basepath).split("/");if(!ie(M.pathname,a.basepath).split("/").every((Se,ke)=>Se===f[ke]))return!1}return((d==null?void 0:d.includeSearch)??!0)&&!Te(i.location.search,M.search,{partial:!(d!=null&&d.exact),ignoreUndefined:!(d!=null&&d.explicitUndefined)})?!1:d!=null&&d.includeHash?i.location.hash===M.hash:!0}}),w=u.useCallback(()=>{a.preloadRoute(e).catch(i=>{console.warn(i),console.warn(_e)})},[e,a]),ye=u.useCallback(i=>{i!=null&&i.isIntersecting&&w()},[w]);if(Le(r,ye,{rootMargin:"100px"},{disabled:!!p||B!=="viewport"}),Pe(()=>{c.current||!p&&B==="render"&&(w(),c.current=!0)},[p,w,B]),te==="external")return{...ee,ref:r,type:te,href:y,...b&&{children:b},...I&&{target:I},...p&&{disabled:p},...k&&{style:k},...T&&{className:T},...z&&{onClick:z},...H&&{onFocus:H},...V&&{onMouseEnter:V},..._&&{onMouseLeave:_},...W&&{onTouchStart:W}};const xe=i=>{if(!p&&!qe(i)&&!i.defaultPrevented&&(!I||I==="_self")&&i.button===0){i.preventDefault(),Oe.flushSync(()=>{l(!0)});const f=a.subscribe("onResolved",()=>{f(),l(!1)});return a.navigate({...e,replace:S,resetScroll:m,hashScrollIntoView:C,startTransition:R,viewTransition:g,ignoreBlocker:ve})}},ae=i=>{p||B&&w()},Ie=ae,Ce=i=>{if(p)return;const f=i.target||{};if(B){if(f.preloadTimeout)return;f.preloadTimeout=setTimeout(()=>{f.preloadTimeout=null,w()},be)}},Re=i=>{if(p)return;const f=i.target||{};f.preloadTimeout&&(clearTimeout(f.preloadTimeout),f.preloadTimeout=null)},N=i=>f=>{var Y;(Y=f.persist)==null||Y.call(f),i.filter(Boolean).forEach(re=>{f.defaultPrevented||re(f)})},G=q?ne(n,{})??{}:{},K=q?{}:ne(v,{}),oe=[T,G.className,K.className].filter(Boolean).join(" "),se={...k,...G.style,...K.style};return{...ee,...G,...K,href:p?void 0:M.maskedLocation?a.history.createHref(M.maskedLocation.href):a.history.createHref(M.href),ref:r,onClick:N([z,xe]),onFocus:N([H,ae]),onMouseEnter:N([V,Ce]),onMouseLeave:N([_,Re]),onTouchStart:N([W,Ie]),disabled:!!p,target:I,...Object.keys(se).length&&{style:se},...oe&&{className:oe},...p&&{role:"link","aria-disabled":!0},...q&&{"data-status":"active","aria-current":"page"},...o&&{"data-transitioning":"transitioning"}}}const J=u.forwardRef((e,t)=>{const{_asChild:a,...o}=e,{type:l,ref:c,...r}=We(o,t),n=typeof o.children=="function"?o.children({isActive:r["data-status"]==="active"}):o.children;return typeof a>"u"&&delete r.disabled,u.createElement(a||"a",{...r,ref:c},n)});function qe(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ge(e){return Q({select:t=>t.location})}function Ke(e){return A("MuiIconButton",e)}const ce=$("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),Ye=e=>{const{classes:t,disabled:a,color:o,edge:l,size:c,loading:r}=e,n={root:["root",r&&"loading",a&&"disabled",o!=="default"&&`color${P(o)}`,l&&`edge${P(l)}`,`size${P(c)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return U(n,Ke,t)},Je=j(fe,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.loading&&t.loading,a.color!=="default"&&t[`color${P(a.color)}`],a.edge&&t[`edge${P(a.edge)}`],t[`size${P(a.size)}`]]}})(E(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:t=>!t.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:L(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),E(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(le()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette).filter(le()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:L((e.vars||e).palette[t].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${ce.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled},[`&.${ce.loading}`]:{color:"transparent"}}))),Qe=j("span",{name:"MuiIconButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>t.loadingIndicator})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),ge=u.forwardRef(function(t,a){const o=D({props:t,name:"MuiIconButton"}),{edge:l=!1,children:c,className:r,color:n="default",disabled:v=!1,disableFocusRipple:d=!1,size:y="medium",id:x,loading:h=null,loadingIndicator:C,...S}=o,R=Ee(x),m=C??s.jsx(Ae,{"aria-labelledby":R,color:"inherit",size:16}),g={...o,edge:l,color:n,disabled:v,disableFocusRipple:d,loading:h,loadingIndicator:m,size:y},b=Ye(g);return s.jsxs(Je,{id:h?R:x,className:O(b.root,r),centerRipple:!0,focusRipple:!d,disabled:v||h,ref:a,...S,ownerState:g,children:[typeof h=="boolean"&&s.jsx("span",{className:b.loadingWrapper,style:{display:"contents"},children:s.jsx(Qe,{className:b.loadingIndicator,ownerState:g,children:h&&m})}),c]})}),Xe=Z(s.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Ze(e){return A("MuiAvatar",e)}$("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const et=e=>{const{classes:t,variant:a,colorDefault:o}=e;return U({root:["root",a,o&&"colorDefault"],img:["img"],fallback:["fallback"]},Ze,t)},tt=j("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})(E(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),at=j("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ot=j(Xe,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function st({crossOrigin:e,referrerPolicy:t,src:a,srcSet:o}){const[l,c]=u.useState(!1);return u.useEffect(()=>{if(!a&&!o)return;c(!1);let r=!0;const n=new Image;return n.onload=()=>{r&&c("loaded")},n.onerror=()=>{r&&c("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=a,o&&(n.srcset=o),()=>{r=!1}},[e,t,a,o]),l}const rt=u.forwardRef(function(t,a){const o=D({props:t,name:"MuiAvatar"}),{alt:l,children:c,className:r,component:n="div",slots:v={},slotProps:d={},imgProps:y,sizes:x,src:h,srcSet:C,variant:S="circular",...R}=o;let m=null;const g={...o,component:n,variant:S},b=st({...y,...typeof d.img=="function"?d.img(g):d.img,src:h,srcSet:C}),I=h||C,p=I&&b!=="error";g.colorDefault=!p,delete g.ownerState;const k=et(g),[T,z]=De("img",{className:k.img,elementType:at,externalForwardedProps:{slots:v,slotProps:{img:{...y,...d.img}}},additionalProps:{alt:l,src:h,srcSet:C,sizes:x},ownerState:g});return p?m=s.jsx(T,{...z}):c||c===0?m=c:I&&l?m=l[0]:m=s.jsx(ot,{ownerState:g,className:k.fallback}),s.jsx(tt,{as:n,className:O(k.root,r),ref:a,...R,ownerState:g,children:m})}),de=$("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);function nt(e){return A("MuiListItemIcon",e)}const ue=$("MuiListItemIcon",["root","alignItemsFlexStart"]),it=e=>{const{alignItems:t,classes:a}=e;return U({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},nt,a)},lt=j("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(E(({theme:e})=>({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),ct=u.forwardRef(function(t,a){const o=D({props:t,name:"MuiListItemIcon"}),{className:l,...c}=o,r=u.useContext(X),n={...o,alignItems:r.alignItems},v=it(n);return s.jsx(lt,{className:O(v.root,l),ownerState:n,ref:a,...c})}),pe=$("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function dt(e){return A("MuiMenuItem",e)}const F=$("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ut=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},pt=e=>{const{disabled:t,dense:a,divider:o,disableGutters:l,selected:c,classes:r}=e,v=U({root:["root",a&&"dense",t&&"disabled",!l&&"gutters",o&&"divider",c&&"selected"]},dt,r);return{...r,...v}},ft=j(fe,{shouldForwardProp:e=>Ve(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ut})(E(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:L(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${F.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:L(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${F.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:L(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:L(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${de.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${de.inset}`]:{marginLeft:52},[`& .${pe.root}`]:{marginTop:0,marginBottom:0},[`& .${pe.inset}`]:{paddingLeft:36},[`& .${ue.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${ue.root} svg`]:{fontSize:"1.25rem"}}}]}))),gt=u.forwardRef(function(t,a){const o=D({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:r=!1,divider:n=!1,disableGutters:v=!1,focusVisibleClassName:d,role:y="menuitem",tabIndex:x,className:h,...C}=o,S=u.useContext(X),R=u.useMemo(()=>({dense:r||S.dense||!1,disableGutters:v}),[S.dense,r,v]),m=u.useRef(null);ze(()=>{l&&m.current&&m.current.focus()},[l]);const g={...o,dense:R.dense,divider:n,disableGutters:v},b=pt(o),I=Ue(m,a);let p;return o.disabled||(p=x!==void 0?x:-1),s.jsx(X.Provider,{value:R,children:s.jsx(ft,{ref:I,role:y,tabIndex:p,component:c,focusVisibleClassName:O(b.focusVisible,d),className:O(b.root,h),...C,ownerState:g,classes:b})})}),vt=Z(s.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),mt=Z(s.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout");function ht(){const e=Be(),t=Ge(),[a,o]=u.useState(null),l=!!a,c=n=>{o(n.currentTarget)},r=()=>{o(null)};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{onClick:c,size:"small",sx:{ml:1},children:s.jsx(rt,{sx:{width:32,height:32}})}),s.jsx(He,{anchorEl:a,open:l,onClose:r,onClick:r,slotProps:{paper:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"&::before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:s.jsxs(gt,{onClick:()=>{r(),e({to:"/login",search:{redirectTo:t.pathname}})},children:[s.jsx(ct,{children:s.jsx(mt,{fontSize:"small"})}),"Logout"]})})]})}const Lt=Ne("/_layout")({component:bt});function bt(){return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex h-8 px-2",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(J,{to:"/",className:"[&.active]:font-bold",children:"Home"}),s.jsx(J,{to:"/dashboard",className:"[&.active]:font-bold",children:"Dashboard"}),s.jsx(J,{to:"/posts",className:"[&.active]:font-bold",children:"Posts"})]}),s.jsxs("div",{className:"ml-auto flex items-center",children:[s.jsx(ge,{className:"animate-spin",children:s.jsx(vt,{})}),s.jsx(ht,{})]})]}),s.jsx("hr",{}),s.jsx("main",{className:"p-2",children:s.jsx(Fe,{})})]})}export{Lt as Route};
