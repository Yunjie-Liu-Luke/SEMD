import{a as S,f as N}from"./index-5be0137b.js";import{_ as $,l as z,m as I,y as h,a as c,o as B,c as A,b as n,d as a,e as s,u as E,z as d,n as _,B as m,t as F,f}from"./index-9a74c0c4.js";import{c as M,e as O}from"./execcontent-1518c34a.js";import"./index-c120a155.js";const J={class:"file-menu"},V={class:"fileName"},D={class:"fileName-title"},P=["onClick"],T={class:"opt"},j=["onClick"],q=["onClick"],U=["onClick"],W={__name:"index",setup(G){let u=z([]);const g={txt:"icon-wenben",excel:"icon-excel",word:"icon-Word",markdown:"icon-file-markdown1",pdf:"icon-pdf1"},w={word:"#0f90e3",excel:"#01a408",pdf:"#ea5454",txt:"rgba(0, 0, 0, 0.6)",markdown:"#5A96DB",folder:"#ffd153"},x=()=>{},b=e=>{const{filesuffix:t}=e;switch(console.log(t),t){case"md":f.push({path:`/edit/${e.fileid}`,query:e});break;case"xlsx":f.push(`/excel/${e.fileid}`);break;case"docx":f.push(`/word/${e.fileid}`);break}},v=e=>{let{username:t}=JSON.parse(sessionStorage.getItem("user")),l=M(t,e.fileid,e.filename+"."+e.filesuffix);O(l),h.success("分享链接已复制到粘贴板")},p=async(e,t)=>{let{userid:l}=JSON.parse(sessionStorage.getItem("user"));t==="top"&&(e.top=!e.top),t==="favor"&&(e.favor=!e.favor),await N({userid:l,fileid:e.fileid})};return I(async()=>{let{userid:e}=JSON.parse(sessionStorage.getItem("user")),t=await S(e);if(t.code!==200)return h.error(t.msg);t.data.forEach(l=>u.push(l))}),(e,t)=>{const l=c("el-button"),k=c("el-button-group"),i=c("el-table-column"),y=c("el-table"),C=c("el-pagination");return B(),A("div",null,[n("div",J,[a(k,null,{default:s(()=>[a(l,{size:"small",disabled:!0},{default:s(()=>[d(" 删除 ")]),_:1}),a(l,{size:"small",disabled:!0},{default:s(()=>[d(" 分享 ")]),_:1}),a(l,{size:"small",disabled:!0},{default:s(()=>[d(" 添加到 ")]),_:1})]),_:1})]),a(y,{data:E(u).sort((o,r)=>r.top-o.top),onSelectionChange:x},{default:s(()=>[a(i,{type:"selection",width:"55"}),a(i,{label:"文件名"},{default:s(o=>[n("div",V,[n("div",D,[n("i",{class:_(["iconfont",g[o.row.filetype]]),style:m({color:w[o.row.filetype]})},null,6),n("span",{onClick:r=>b(o.row)},F(o.row.filename+"."+o.row.filesuffix),9,P)])])]),_:1}),a(i,{prop:"owner",label:"拥有者"}),a(i,{prop:"createtime",label:"日期"}),a(i,{fixed:"right",label:"操作",align:"right"},{default:s(o=>[n("div",T,[n("i",{class:"iconfont icon-lianjie",title:"分享",onClick:r=>v(o.row)},null,8,j),n("i",{title:"收藏",class:_(["iconfont",o.row.favor?"icon-shoucang1":"icon-shoucang"]),onClick:r=>p(o.row,"favor")},null,10,q),n("i",{title:"置顶",style:m({display:o.row.top?"block":""}),class:_(["iconfont",o.row.top?"icon-tuding":"icon-tuding1"]),onClick:r=>p(o.row,"top")},null,14,U)])]),_:1})]),_:1},8,["data"]),a(C,{background:"",layout:"prev, pager, next",total:30})])}}},R=$(W,[["__scopeId","data-v-91797829"]]);export{R as default};
