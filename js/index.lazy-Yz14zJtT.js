import{x as o,q as s,y as t,j as a,L as r}from"./react-CIfi_uNQ.js";import{i,B as e,f as n}from"./mui-DzuLHEHL.js";const p=o({queryKey:["posts"],queryFn:async()=>await(await fetch("https://jsonplaceholder.typicode.com/posts")).json()}),c=s("/(app)/_layout/posts/")({component:function(){const{data:o}=t(p);return a.jsx(i,{spacing:2,p:1,children:o.slice(0,10).map((o=>a.jsxs(e,{component:r,sx:{display:"flex",alignItems:"center",columnGap:2,p:2,border:"2px solid lightgrey","&:hover":{borderColor:"primary.main"}},to:`/posts/${o.id}`,children:[a.jsxs(n,{variant:"h4",fontWeight:"bold",color:"primary",children:["#",o.id]}),a.jsx(n,{variant:"body2",children:null==o?void 0:o.title})]},o.id)))})}});export{c as Route};