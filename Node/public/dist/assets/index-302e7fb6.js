import{_ as oe,l as H,r as S,o as y,c as v,b as E,F as L,j as Q,n as se,B as Z,t as V,u as h,q as N,E as le,y as T,w as U,f as F,m as ae,a as A,i as j,v as ee,d as P,e as G,C as ie,z as re,D as ce,G as de,p as ue,h as fe,g as te,x as ne}from"./index-419cddad.js";import{C as pe}from"./index-63271b98.js";import{c as me,e as he}from"./execcontent-4df68f9e.js";import{p as ye,u as ge,g as xe}from"./index-1b4a693b.js";import"./index-ef380852.js";const _e=["onClick"],ve={__name:"filecontentmenu",emits:["putFileToRecycle","rename"],setup(n,{expose:I,emit:R}){let k=H([{name:"分享",icon:"icon-shujugongxiang",command:"shear"},{name:"删除",icon:"icon-huishouzhan",command:"delete"},{name:"重命名",icon:"icon-zhongmingming",command:"rename"},{name:"移动至",icon:"icon-yidong"},{name:"360压缩",icon:"icon-yasuobao",color:"#51BDF4"}]),m=S(!0),c=H({});const p=H({x:0,y:0,display:"none"});let g=S(0);const _=async(i,r)=>{let{username:u,userid:b}=JSON.parse(sessionStorage.getItem("user"));switch(r){case"shear":let x=me(u,c.fileid,c.filename+"."+c.filesuffix);return he(x),T.success("分享链接已复制到粘贴板");case"delete":if(!c.fileid)return;try{await le.confirm(`确认删除 ${c.filename+"."+c.filesuffix} 吗？`,"删除文件",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});let{code:M,msg:w}=await ye({fileid:c.fileid,userid:b});if(M!==200)return T.error(w);T.success(w),R("putFileToRecycle",c.fileid)}catch{T.info("已取消")}return;case"rename":return R("rename",g.value)}},o=i=>{m.value=!i.className.includes("icon-24gf-folderOpen");let{fileid:r,filename:u,filesuffix:b,folderid:x}=i.dataset;c.fileid=r,c.folderid=x,c.filename=u,c.filesuffix=b;let M={name:"打开",icon:"icon-24gf-folderOpen",color:"#FFD153"},w=k.find(C=>C.icon==="icon-24gf-folderOpen");m.value?w&&k.shift():w||k.unshift(M)};return I({showContentMenu:(i,r)=>{g.value=r;let{target:u}=i;o(u),p.x=u.offsetLeft+i.offsetX,p.y=u.offsetTop+i.offsetY,p.display="block"},hiddenContentMenu:()=>(p.display="none",g.value=0)}),(i,r)=>(y(),v("div",null,[E("div",{onContextmenu:r[0]||(r[0]=N(()=>{},["stop"])),class:"contentmenu",style:Z({left:p.x+"px",top:p.y+"px",display:p.display})},[(y(!0),v(L,null,Q(h(k),(u,b)=>(y(),v("div",{key:b,onClick:x=>_(x,u.command)},[E("i",{class:se(["iconfont",u.icon]),style:Z({color:u.color})},null,6),E("span",null,V(u.name),1)],8,_e))),128))],36)]))}},be=oe(ve,[["__scopeId","data-v-f297ac1c"]]),we=()=>{let n=H({isDragging:!1,dom:null,startX:0,startY:0,endX:0,endY:0,mode:"inside"}),I=H([]);function R(o){if(o.button===2)return;n.isDragging=!0,n.dom=document.querySelector(".mask"),n.dom.style.display="block",n.dom.style.width=0,n.dom.style.height=0;let{x:l,y:a}=c(o);n.startX=l,n.startY=a,n.dom.style.left=`${l}px`,n.dom.style.top=`${a}px`}function k(o){if(!n.isDragging)return;let{x:l,y:a}=c(o);l-n.startX<0&&(n.dom.style.left=`${l}px`),a-n.startY<0&&(n.dom.style.top=`${a}px`),n.dom.style.height=`${Math.abs(a-n.startY)}px`,n.dom.style.width=`${Math.abs(l-n.startX)}px`}async function m(o){if(o.button===2)return;let{x:l,y:a}=c(o);n.endX=l,n.endY=a;let i=await p();I.length=0,i.forEach(r=>{I.push(r),document.querySelector(`#${r}`).classList.add("ischoosed")}),n.isDragging=!1,n.dom.style.display="none",n.dom=null,n.startX=0,n.startY=0,n.endX=0,n.endY=0}function c(o){let{offsetLeft:l,offsetTop:a}=document.querySelector(".pages"),{clientX:i,clientY:r}=o;return{x:i-l,y:r-a}}function p(){return new Promise((o,l)=>{let{startX:a,startY:i,endX:r,endY:u}=n,b=Math.abs(a),x=Math.abs(i),M=Math.abs(r),w=Math.abs(u),C=[Math.min(b,M),Math.max(b,M)],X=[Math.min(x,w),Math.max(x,w)],B=[];document.querySelectorAll(".pages-list-files-item").forEach(Y=>{Y.classList.remove("ischoosed");let[z,O,K,W]=g(Y),t=_(z,C,X),e=_(O,C,X),f=_(K,C,X),d=_(W,C,X);function D(){(t||e||f||d)&&B.push(Y.id)}function J(){t&&e&&f&&d&&B.push(Y.id)}n.mode==="inside"?D():J()}),o(B)})}function g(o){let l=[],{offsetLeft:a,offsetTop:i,offsetWidth:r,offsetHeight:u}=o;return l.push({x:a,y:i}),l.push({x:a+r,y:i}),l.push({x:a+r,y:i+u}),l.push({x:a,y:i+u}),l}function _(o,l,a){let i=o.x>=l[0]&&o.x<=l[1],r=o.y>=a[0]&&o.y<=a[1];return i&&r}return{mouseDownHandle:R,mouseUpHandle:m,mouseMoveHandle:k,choosedDomID:I}};const Ce=n=>(ue("data-v-e3ca1ea8"),n=n(),fe(),n),ke=["onContextmenu"],Me=Ce(()=>E("div",{class:"mask"},null,-1)),Ie={class:"pages-list"},De={key:0,class:"pages-list-filesbread"},Fe={class:"pages-list-files"},Se=["onDblclick","onContextmenu","id"],Re=["data-fileid","data-filename","data-filesuffix"],$e=["onDblclick"],Te=["onDblclick"],He={__name:"index",setup(n){const{mouseDownHandle:I,mouseUpHandle:R,mouseMoveHandle:k}=we();var m=H([]);const c=S(null);let p=S(""),g=S(null),_=S(null),o=H([]),l=S("");U(()=>te.state.searchKeyWord,t=>l.value=t,{immediate:!1,deep:!0}),U(()=>te.state.topCreateData,t=>O(t),{immediate:!1,deep:!0});const a=(t,e)=>{if(e==="folder")return"#ffd153";let f={docx:"#0f90e3",xlsx:"#01a408",pdf:"#ea5454",txt:"rgba(0, 0, 0, 0.6)",md:"#5A96DB"};return f[t]?f[t]:""},i=t=>{x(m[t])},r=(t,e)=>{const{type:f}=e,d={folder:()=>{u(e),F.replace({query:{folderid:e.folderid,fromPath:F.currentRoute.value.query.folderid}})},word:()=>F.push(`/word/${e.fileid}`),excel:()=>F.push(`/excel/${e.fileid}`),markdown:()=>F.push(`/edit/${e.fileid}`)};d[f]&&d[f]()},u=t=>{o.push({name:t.foldername}),sessionStorage.setItem("pagelistbread",JSON.stringify(o))},b=()=>{o.pop(),F.replace({query:{folderid:F.currentRoute.value.query.fromPath}})},x=async t=>{m.forEach(e=>e.changeflag=!1),t.changeflag=!0,await ne(),c.value[0].focus()},M=async()=>{let t="";if(m.forEach(e=>{e.changeflag&&(t=e.fileid,e.folderid,e.filename=p.value||e.filename,e.changeflag=!1)}),p.value){let e=t?await ge({fileid:t,newfilename:p.value}):{code:0,msg:"暂未实现文件夹更新"};e.code===200?T.success(e.msg):T.error(e.msg)}p.value=""},w=()=>c.value[0].blur();let C=S(!1);const X=async t=>{C.value=!0,await ne(),g.value.showContentMenu(t),_.value.hiddenContentMenu()},B=()=>{C.value=!1},Y=()=>{g.value&&g.value.hiddenContentMenu(),_.value.hiddenContentMenu()},z=(t,e)=>(_.value.showContentMenu(t,e),g.value&&g.value.hiddenContentMenu()),O=({name:t,id:e,type:f,suffix:d})=>{if(f==="folder")return m.push({type:"folder",foldername:t,folderid:e,icon:"icon-24gf-folderOpen"});let D={md:"icon-file-markdown1",txt:"icon-wenben1",xlsx:"icon-excel",docx:"icon-Word"};m.push({type:f,fileid:e,filename:t,filesuffix:d,suffix:d,icon:D[d]})},K=t=>{m.splice(m.findIndex(e=>e.fileid===t),1)},W=t=>{const e={md:{type:"markdown",icon:"icon-file-markdown1"},txt:{type:"txt",icon:"icon-wenben1"},xlsx:{type:"excel",icon:"icon-excel"},docx:{type:"word",icon:"icon-Word"},folder:{type:"folder",icon:"icon-24gf-folderOpen"}};function f(d){d&&(t.type=e[d].type,t.icon=e[d].icon)}t.folderid?f("folder"):f(t.filesuffix),t.suffix=t.filesuffix};return U(F.currentRoute,async t=>{if(t.path!="/home/pages")return;m.length=0;let{userid:e}=JSON.parse(sessionStorage.getItem("user")),{folderid:f}=t.query;f||(o.length=0,sessionStorage.setItem("pagelistbread",[]));let d=await xe({userid:e,folderid:f});if(d.code!==200)return T.error(d.msg);d.data.length&&d.data.forEach(D=>{W(D),m.push(D)})},{immediate:!0,deep:!0}),ae(()=>{let t=sessionStorage.getItem("pagelistbread");t&&JSON.parse(t).forEach(e=>o.push(e))}),(t,e)=>{const f=A("el-icon"),d=A("el-breadcrumb-item"),D=A("el-breadcrumb"),J=A("el-input");return y(),v("div",{id:"pages",class:"pages",onClick:Y,onContextmenu:N(X,["prevent","stop"]),onMousedown:e[1]||(e[1]=(...s)=>h(I)&&h(I)(...s)),onMouseup:e[2]||(e[2]=(...s)=>h(R)&&h(R)(...s)),onMousemove:e[3]||(e[3]=(...s)=>h(k)&&h(k)(...s))},[Me,h(C)?(y(),j(pe,{key:0,ref_key:"contentmenuRef",ref:g,onCreate:O,onClose:B},null,512)):ee("",!0),P(be,{ref_key:"filecontentmenuRef",ref:_,onPutFileToRecycle:K,onRename:i},null,512),E("div",Ie,[h(o).length?(y(),v("div",De,[P(f,{onClick:b},{default:G(()=>[P(h(ie))]),_:1}),P(D,{separator:"/"},{default:G(()=>[(y(!0),v(L,null,Q(h(o),(s,q)=>(y(),j(d,{key:q},{default:G(()=>[re(V(s.name),1)]),_:2},1024))),128))]),_:1})])):ee("",!0),E("div",Fe,[(y(!0),v(L,null,Q(h(m).filter(s=>!h(l)||(s.filename||s.foldername).includes(h(l))),(s,q)=>(y(),v("div",{onDblclick:$=>r(q,s),onContextmenu:N($=>z($,q),["prevent","stop"]),class:"pages-list-files-item",key:q,id:s.fileid||s.folderid},[E("i",{"data-fileid":s.fileid,"data-filename":s.filename,"data-filesuffix":s.suffix||s.filesuffix,class:se(["iconfont",s.icon]),style:Z({color:a(s.suffix,s.type)})},null,14,Re),s.changeflag?(y(),j(J,{key:1,ref_for:!0,ref_key:"inputRef",ref:c,onBlur:M,onKeydown:ce(w,["enter"]),modelValue:h(p),"onUpdate:modelValue":e[0]||(e[0]=$=>de(p)?p.value=$:p=$)},null,8,["onKeydown","modelValue"])):(y(),v(L,{key:0},[s.type==="folder"?(y(),v("span",{key:0,onDblclick:N($=>x(s),["stop"])},V(s.foldername),41,$e)):(y(),v("span",{key:1,onDblclick:N($=>x(s),["stop"])},V(s.filename+"."+s.suffix),41,Te))],64))],40,Se))),128))])])],40,ke)}}},Ne=oe(He,[["__scopeId","data-v-e3ca1ea8"]]);export{Ne as default};
