import{_ as h,r as l,m as b,f as a,a as n,o as N,i as R,e as s,u as t,G as w,b as u,d as r,z as i,t as g,y}from"./index-b957ea96.js";import{j as B}from"./index-3a024812.js";import"./index-d2f44d42.js";const I={class:"username"},S={class:"dialog-footer"},j={__name:"index",setup(q){let o=l(!0),_=()=>{o.value=!1,a.push("/")},c=l(""),d=l(""),p=l(""),x=async()=>{let{userid:m}=JSON.parse(sessionStorage.getItem("user")),e=await B(m,c.value);if(e.code!==200)return y.error(e.msg);y.success(e.msg),a.push("/")};return b(()=>{c.value=a.currentRoute.value.params.fileid,p.value=a.currentRoute.value.query.filename,d.value=a.currentRoute.value.query.username}),(m,e)=>{const k=n("el-divider"),C=n("el-link"),f=n("el-button"),V=n("el-dialog");return N(),R(V,{onClose:t(_),modelValue:t(o),"onUpdate:modelValue":e[0]||(e[0]=v=>w(o)?o.value=v:o=v),title:"邀请加入编辑",width:"30%"},{footer:s(()=>[u("span",S,[r(f,{onClick:t(_)},{default:s(()=>[i("取消")]),_:1},8,["onClick"]),r(f,{type:"primary",onClick:t(x)},{default:s(()=>[i(" 加入 ")]),_:1},8,["onClick"])])]),default:s(()=>[u("span",I,g(t(d)),1),r(k),u("span",null,[i(" 邀请你加入 "),r(C,{type:"primary"},{default:s(()=>[i(g(t(p)),1)]),_:1})])]),_:1},8,["onClose","modelValue"])}}},D=h(j,[["__scopeId","data-v-5d36dc27"]]);export{D as default};
