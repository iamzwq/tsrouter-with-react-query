import{p as s,v as r,j as a}from"./react-Fm9TnW5h.js";import{i as t,j as o,B as e,f as i}from"./mui-Rb0qJNw5.js";import{R as n,a as d}from"./index-BQavOKr1.js";const c=function(){const c=s(),{postId:l}=n.useParams(),{data:m}=r(d(l));return a.jsxs(a.Fragment,{children:[a.jsx(t,{onClick:()=>c({to:"/posts"}),variant:"outlined",startIcon:a.jsx(o,{}),children:"Go Back to posts"}),a.jsxs(e,{className:"mt-2 flex items-center gap-2 rounded-lg border-2 border-(--palette-primary-main) p-2",children:[a.jsxs(i,{color:"primary",fontWeight:"bold",variant:"h3",children:["#",m.id]}),a.jsxs(e,{className:"grow",children:[a.jsx(i,{fontWeight:"bold",children:m.title}),a.jsx(i,{variant:"body2",children:m.body})]})]})]})};export{c as component};