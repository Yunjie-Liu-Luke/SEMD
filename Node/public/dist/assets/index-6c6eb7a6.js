import{_ as u,a as c,o as t,c as a,d as o,e as r,u as s,b as n,t as p,z as i,A as m}from"./index-b957ea96.js";const v="/assets/avatar-ae8813d6.jpg";const g={class:"user"},b={class:"user-info"},f=["innerHTML"],h={key:1,src:v,alt:""},x={class:"username"},y={__name:"index",setup(k){let e=JSON.parse(sessionStorage.getItem("user"));console.log(e),e.vip;const d=e.userimg.includes("svg");return(N,S)=>{const _=c("el-breadcrumb-item"),l=c("el-breadcrumb");return t(),a("div",g,[o(l,{"separator-icon":s(m)},{default:r(()=>[o(_,{to:{path:"/"}},{default:r(()=>[i("返回")]),_:1}),o(_,null,{default:r(()=>[i("个人中心")]),_:1})]),_:1},8,["separator-icon"]),n("div",b,[s(d)?(t(),a("div",{key:0,class:"user-avatar-svg",innerHTML:s(e).userimg},null,8,f)):(t(),a("img",h)),n("div",null,[n("p",x,p(s(e).username),1)])])])}}},T=u(y,[["__scopeId","data-v-885741be"]]);export{T as default};
