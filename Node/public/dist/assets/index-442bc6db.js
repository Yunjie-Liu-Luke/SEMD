import{g as _}from"./index-639c8acb.js";import{_ as x,l as m,m as g,a as y,o as l,c as r,d as h,e as d,u as i,b as s,F as v,j as b,n as w,B as I,t as k,W as S,f as B,p as F,h as A}from"./index-87ff34da.js";import"./index-34b18b95.js";const C=a=>(F("data-v-c480139f"),a=a(),A(),a),N={class:"box"},z=C(()=>s("span",{class:"text-large font-600 mr-3"}," 回收站 ",-1)),D={class:"mt-4 text-sm font-bold box-main"},E=["data-fileid","data-filename","data-filesuffix"],L={__name:"index",setup(a){let f=m([]);function p(e,o){return e==="docx"?"#0f90e3":e==="xlsx"?"#01a408":e==="pdf"?"#ea5454":e==="txt"?"rgba(0, 0, 0, 0.6)":e==="md"?"#5A96DB":o==="folder"?"#ffd153":""}const u=e=>{e.folderid&&(e.type="folder",e.icon="icon-24gf-folderOpen"),e.filesuffix==="md"&&(e.type="markdown",e.icon="icon-file-markdown1"),e.filesuffix==="txt"&&(e.type="txt",e.icon="icon-wenben1"),e.filesuffix==="xlsx"&&(e.type="excel",e.icon="icon-excel"),e.filesuffix==="docx"&&(e.type="word",e.icon="icon-Word"),e.suffix=e.filesuffix};return g(async()=>{let{userid:e}=JSON.parse(sessionStorage.getItem("user")),{code:o,msg:c,data:t}=await _({userid:e,state:2});f.length=0,t.forEach(n=>{u(n),f.push(n)})}),(e,o)=>{const c=y("el-page-header");return l(),r("div",N,[h(c,{icon:i(S),onBack:o[0]||(o[0]=t=>i(B).back())},{content:d(()=>[z]),default:d(()=>[s("div",D,[(l(!0),r(v,null,b(i(f),(t,n)=>(l(),r("div",{class:"box-main-item",key:n},[s("i",{"data-fileid":t.fileid,"data-filename":t.filename,"data-filesuffix":t.suffix||t.filesuffix,class:w(["iconfont",t.icon]),style:I({color:p(t.suffix,t.type)})},null,14,E),s("span",null,k(t.type==="folder"?t.foldername:t.filename+"."+t.suffix),1)]))),128))])]),_:1},8,["icon"])])}}},j=x(L,[["__scopeId","data-v-c480139f"]]);export{j as default};
