import{_ as B,r as b,w as L,a as f,o as p,c as k,b as e,d as _,e as m,u as h,s as ee,n as R,f as w,g as F,p as j,h as D,i as T,F as P,j as K,t as U,k as te,l as H,m as ne,q as N,v as E,x as oe,E as q,y as S,z as se,A as ae}from"./index-decd1a57.js";import{C as ie}from"./index-44013621.js";import{s as le,c as ce}from"./index-30518a80.js";import"./index-f830237c.js";const v=t=>(j("data-v-aff1e213"),t=t(),D(),t),re={class:"aside"},de=v(()=>e("div",{class:"aside-logo"},[e("i",{class:"iconfont icon-circulation"}),e("span",{title:"多人协作编辑器"}," 多人协作编辑器 ")],-1)),ue={class:"aside-search"},pe=v(()=>e("i",{class:"iconfont icon-shouye-zhihui"},null,-1)),_e=v(()=>e("span",null," 首页 ",-1)),me=[pe,_e],he=v(()=>e("i",{class:"iconfont icon-zuijinchangyong"},null,-1)),fe=v(()=>e("span",null," 最近文档 ",-1)),ge=[he,fe],ve=v(()=>e("i",{class:"iconfont icon-shujugongxiang"},null,-1)),ye=v(()=>e("span",null," 与我共享 ",-1)),we=[ve,ye],xe=v(()=>e("i",{class:"iconfont icon-huishouzhan"},null,-1)),Ce=v(()=>e("span",null," 回收站 ",-1)),be=[xe,Ce],ke={__name:"aside",props:{activeMenu:{type:String,default:"pages"}},setup(t){const o=b("");L(o,s=>F.commit("setSearchKeyWord",s));const l=s=>w.push(`/home/${s}`);return(s,n)=>{const c=f("el-icon"),r=f("el-input");return p(),k("div",re,[de,e("div",ue,[_(r,{placeholder:"搜索",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=a=>o.value=a),clearable:""},{prefix:m(()=>[_(c,null,{default:m(()=>[_(h(ee))]),_:1})]),_:1},8,["modelValue"])]),e("div",{class:R(["aside-icon",{active:t.activeMenu==="pages"}]),onClick:n[1]||(n[1]=a=>l("pages"))},me,2),e("div",{class:R(["aside-icon",{active:t.activeMenu==="news"}]),onClick:n[2]||(n[2]=a=>l("news"))},ge,2),e("div",{class:R(["aside-icon",{active:t.activeMenu==="share"}]),onClick:n[3]||(n[3]=a=>l("share"))},we,2),e("div",{class:"aside-bottom",onClick:n[4]||(n[4]=a=>h(w).push("/recycle"))},be)])}}},$e=B(ke,[["__scopeId","data-v-aff1e213"]]);const Se={style:{width:"100%",height:"100%"}},Me={class:"dropdownItem"},Ie=["title"],Te={__name:"index",props:{trigger:{type:String,default:"click"},list:{type:Array,default:()=>[]}},emits:["handleCommand","handleOpen","handleClose"],setup(t,{emit:o}){const l=c=>o("handleCommand",c),s=()=>o("handleOpen"),n=()=>o("handleClose");return(c,r)=>{const a=f("el-dropdown-item"),g=f("el-dropdown-menu"),y=f("el-dropdown");return p(),T(y,{trigger:t.trigger,onHandleOpen:s,onHandleClose:n,onCommand:l},{dropdown:m(()=>[_(g,null,{default:m(()=>[(p(!0),k(P,null,K(t.list,d=>(p(),T(a,{key:d.command,command:d.command},{default:m(()=>[e("div",Me,[e("i",{class:R(["iconfont",d.icon])},null,2),e("span",{title:d.name},U(d.name),9,Ie)])]),_:2},1032,["command"]))),128))]),_:1})]),default:m(()=>[e("div",Se,[te(c.$slots,"content",{},void 0,!0)])]),_:3},8,["trigger"])}}},Re=B(Te,[["__scopeId","data-v-b30e786d"]]),Be=(t,o,l="Typora")=>new Promise((s,n)=>{if(t.name.split(".")[1]==="md"){let r=new FileReader;r.readAsText(t,"UTF-8"),r.onloadend=async a=>{a.target.readyState!==2&&n({msg:"文件读写失败"});let g=Oe(a.target.result.toString().split(`
`)),{userid:y}=JSON.parse(sessionStorage.getItem("user")),d=await le({fileid:o,userid:y,content:g});d.code!==200&&n(d),s(d)}}});function Oe(t,o){let l=[];return t.forEach(s=>{let n=s&&s.match(/^[#]+|[*]+[\u4e00-\u9fa5|\d|a-z|A-Z|-]|[~~~]{3}|[<][u][>]|[\]][(]/g);if(!n)return l.push({insert:J(s)});let c=null;n.forEach(r=>{r.toString().includes("#")&&(c=r.length)}),l.push({insert:J(s),attributes:{header:c}})}),JSON.stringify(l)}function J(t){return t.replace(/[']/g,"#[d]#").replace(/["]/g,"#[s]#").replace(/^#+/g,"")}const M=t=>(j("data-v-fbe52d70"),t=t(),D(),t),Ve={class:"top-left"},ze=M(()=>e("i",{class:"iconfont icon-xinjian"},null,-1)),Ne=M(()=>e("span",null,"新建",-1)),Fe=M(()=>e("i",{class:"iconfont icon-daoru"},null,-1)),He=M(()=>e("span",null,"导入",-1)),Ae=M(()=>e("i",{class:"iconfont icon-duqumoban"},null,-1)),Ee=M(()=>e("span",null,"模板",-1)),qe={class:"top-right"},Je={class:"top-right-user"},Le=["innerHTML"],je={key:2,class:"iconfont icon-tipvip"},De={__name:"top",setup(t){let o=b(!0),l=b("");const s=H([{name:"个人中心",command:"user",icon:"icon-zhanghao"},{name:"系统设置",command:"setting",icon:"icon-shezhi-xianxing"},{name:"项目地址",command:"gitee",icon:"icon-github-fill"},{name:"退出系统",command:"exit",icon:"icon-tuichu"}]),n=H({show:!1}),c=i=>{switch(i){case"user":w.push("/user");break;case"gitee":window.open("https://gitee.com/wfeng0/mpoe");break;case"setting":n.show=!0;break;case"exit":sessionStorage.clear(),w.push("/login");break}},r=()=>w.push("/template");let a=b(null),g=b(!1);const y=async i=>{g.value=!0,await oe(),a.value.showContentMenu(i,!0)},d=()=>g.value=!1,W=i=>F.commit("setTopCreateData",i);let O=b(null);const Z=async i=>{const u=i.target.files[0];try{await q.confirm(`确认上传 ${u.name} 进行协同吗？`,"文件上传",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}),G(u)}catch{S.info("已取消")}O.value.value=""},G=async i=>{let u=JSON.parse(sessionStorage.getItem("user")).userid,x=i.name.split(".")[0],C=i.name.split(".")[1],V={md:"markdown",txt:"txt",doc:"word",docx:"word",xls:"excel",xlsx:"excel"}[C],Q=w.currentRoute.value.query.folderid,X=Math.random().toString().split(".")[1].slice(0,3),$=await ce({userid:u,filename:x,filesuffix:C,filetype:V,fileownerfolderid:Q});if($.code!==200)return S.error("导入失败，"+$.msg);S.success("文件导入成功！");let Y={id:$.data,name:X,suffix:C,type:V};F.commit("setTopCreateData",Y);let z=await Be(i,$.data,"Typora");if(z.code!==200)return S.error(z.msg);S.success(z.msg);try{await q.confirm("是否立即打开文件？","打开文件",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});let A={filename:x,filesuffix:C,filetype:V,owner:u};w.push({path:C==="xlsx"?`/excel/${$.data}`:`/edit/${$.data}`,query:A})}catch{S.info("已取消")}};return ne(()=>{let i=JSON.parse(sessionStorage.getItem("user"));o.value=i.vip,l.value=i.userimg}),(i,u)=>{const x=f("el-button"),C=f("el-avatar");return p(),k("div",{class:"top",onClick:u[2]||(u[2]=N((...I)=>i.hiddenContentMenu&&i.hiddenContentMenu(...I),["stop"]))},[e("div",Ve,[_(x,{type:"primary",onClick:u[0]||(u[0]=N(I=>y(I),["stop"]))},{default:m(()=>[ze,Ne]),_:1}),_(x,{text:"",onClick:u[1]||(u[1]=N(I=>h(O).click(),["stop"]))},{default:m(()=>[Fe,He]),_:1}),_(x,{text:"",onClick:r},{default:m(()=>[Ae,Ee]),_:1})]),e("div",qe,[e("div",Je,[_(Re,{list:s,onCommand:c},{content:m(()=>[h(l)?(p(),k("div",{key:0,class:"userimg_svg",innerHTML:h(l)},null,8,Le)):(p(),T(C,{key:1,shape:"square",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})),h(o)?(p(),k("i",je)):E("",!0)]),_:1},8,["list"])])]),h(g)?(p(),T(ie,{key:0,ref_key:"contentmenuRef",ref:a,onCreate:W,onClose:d},null,512)):E("",!0),e("input",{type:"file",onChange:Z,style:{display:"none"},accept:"*",ref_key:"inputRef",ref:O},null,544)])}}},Pe=B(De,[["__scopeId","data-v-fbe52d70"]]);const Ke={class:"home"},Ue={class:"home-main"},We={__name:"index",setup(t){let o=H([{title:"首页",path:"/home/pages"}]),l=[{path:"news",title:"最近文档"},{path:"share",title:"与我共享"}],s=b("pages");return L(w.currentRoute,n=>{let c=n.path.split("/")[2];s=c;let r=l.find(a=>a.path===c);o.length===1&&c==="pages"||(o.length>1&&o.pop(),r&&o.push({title:r.title,path:`/home/${r.path}`}))},{deep:!0,immediate:!0}),(n,c)=>{const r=f("el-breadcrumb-item"),a=f("el-breadcrumb"),g=f("router-view");return p(),k("div",Ke,[_($e,{activeMenu:h(s)},null,8,["activeMenu"]),e("div",Ue,[_(Pe),_(a,{class:"home-main-bread","separator-icon":h(ae)},{default:m(()=>[(p(!0),k(P,null,K(h(o),(y,d)=>(p(),T(r,{key:d,to:{path:y.path}},{default:m(()=>[se(U(y.title),1)]),_:2},1032,["to"]))),128))]),_:1},8,["separator-icon"]),_(g,{style:{flex:"auto",padding:"10px 20px"}})])])}}},Ye=B(We,[["__scopeId","data-v-1e2b8ee2"]]);export{Ye as default};
