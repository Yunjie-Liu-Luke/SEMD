import{_ as L,l as R,r as V,m as T,a as i,o as P,i as U,e as l,d as o,u as w,U as $,V as S,z as g,b as a,y as f,f as I,c as A,n as E,p as H,h as N}from"./index-5042f0f1.js";import{f as O}from"./index-feacd30b.js";const B=p=>O({url:"/user/login",method:"post",data:p}),M=p=>O({url:"/user/register",method:"post",data:p});const z={class:"registerTip"},J={__name:"loginForm",emits:["toRegister"],setup(p,{emit:m}){const e=R({loading:!1,userid:"",password:"",checkpass:"",remember:!1}),u=V(null),v=R({userid:[{required:!0,message:"请输入账号！",trigger:"blur"}],password:[{required:!0,message:"请输入密码！",trigger:"blur"}],checkpass:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:(t,s,r)=>{s!==e.password?r(new Error("密码不一致！")):r()},trigger:"blur"}]}),F=async t=>{t&&await t.validate((s,r)=>{if(s)return b();for(const n in r)if(Object.hasOwnProperty.call(r,n)){f.error(r[n][0].message);return}})},b=async()=>{e.loading=!0;try{let t=await B({userid:e.userid,password:e.password});if(e.loading=!1,t.code!==200)return f.error(t.msg);f.success(t.msg);let s=JSON.parse(JSON.stringify(t.data)),{token:r}=s;if(delete s.token,sessionStorage.setItem("token",r),sessionStorage.setItem("user",JSON.stringify(s)),e.remember,I.currentRoute.value.query.fileid){let{fileid:n,filename:d,username:k}=I.currentRoute.value.query;const h=`/invited/${n}`,x={filename:d,username:k};return I.push({path:h,query:x})}I.push("/home")}catch{e.loading=!1,f.error("服务器异常，请检查！")}},y=t=>(m("toRegister"),t.resetFields());return T(()=>{sessionStorage.clear()}),(t,s)=>{const r=i("el-icon"),n=i("el-input"),d=i("el-form-item"),k=i("el-button"),h=i("el-checkbox"),x=i("el-link"),c=i("el-form");return P(),U(c,{ref_key:"loginFormRef",ref:u,rules:v,model:e,"label-width":"0px"},{default:l(()=>[o(d,{prop:"userid"},{default:l(()=>[o(n,{placeholder:"请输入账号",modelValue:e.userid,"onUpdate:modelValue":s[0]||(s[0]=_=>e.userid=_),disabled:e.loading},{prefix:l(()=>[o(r,null,{default:l(()=>[o(w($))]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1}),o(d,{prop:"password"},{default:l(()=>[o(n,{placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=_=>e.password=_),disabled:e.loading},{prefix:l(()=>[o(r,null,{default:l(()=>[o(w(S))]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1}),o(d,{prop:"checkpass"},{default:l(()=>[o(n,{placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.checkpass,"onUpdate:modelValue":s[2]||(s[2]=_=>e.checkpass=_),disabled:e.loading},{prefix:l(()=>[o(r,null,{default:l(()=>[o(w(S))]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1}),o(d,null,{default:l(()=>[o(k,{type:"primary",style:{width:"100%"},onClick:s[3]||(s[3]=_=>F(u.value)),loading:e.loading},{default:l(()=>[g(" 登录 ")]),_:1},8,["loading"])]),_:1}),o(d,null,{default:l(()=>[a("div",z,[a("span",null,[o(h,{modelValue:e.remember,"onUpdate:modelValue":s[4]||(s[4]=_=>e.remember=_),size:"small"},null,8,["modelValue"]),g("记住账号")]),a("span",null,[g(" 还没有账号？请 "),o(x,{type:"warning",onClick:s[5]||(s[5]=_=>y(u.value))},{default:l(()=>[g(" 前往注册 ")]),_:1})])])]),_:1})]),_:1},8,["rules","model"])}}},j=L(J,[["__scopeId","data-v-443b95ab"]]);const W={class:"registerTip"},X={__name:"registerForm",emits:["toLogin"],setup(p,{emit:m}){const e=R({userid:"",password:"",checkpass:""}),u=V(null),v=R({userid:[{required:!0,message:"请输入账号！",trigger:"blur"}],password:[{required:!0,message:"请确认密码！",trigger:"blur"}],checkpass:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:(t,s,r)=>{s!==e.password?r(new Error("密码不一致！")):r()},trigger:"blur"}]}),F=async t=>{t&&await t.validate((s,r)=>{if(s)return b();for(const n in r)if(Object.hasOwnProperty.call(r,n)){f.error(r[n][0].message);return}})},b=async()=>{const t=await M({userid:e.userid,password:e.password});if(t.code!==200)return f.error(t.msg);f.success("注册成功"),m("toLogin"),e.userid="",e.password="",e.checkpass=""},y=t=>(m("toLogin"),t.resetFields());return(t,s)=>{const r=i("el-icon"),n=i("el-input"),d=i("el-form-item"),k=i("el-button"),h=i("el-link"),x=i("el-form");return P(),U(x,{ref_key:"registerFormRef",ref:u,rules:v,model:e,"label-width":"0px"},{default:l(()=>[o(d,{prop:"userid"},{default:l(()=>[o(n,{placeholder:"请输入账号",modelValue:e.userid,"onUpdate:modelValue":s[0]||(s[0]=c=>e.userid=c)},{prefix:l(()=>[o(r,null,{default:l(()=>[o(w($))]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{prop:"password"},{default:l(()=>[o(n,{placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=c=>e.password=c)},{prefix:l(()=>[o(r,null,{default:l(()=>[o(w(S))]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{prop:"checkpass"},{default:l(()=>[o(n,{placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.checkpass,"onUpdate:modelValue":s[2]||(s[2]=c=>e.checkpass=c)},{prefix:l(()=>[o(r,null,{default:l(()=>[o(w(S))]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,null,{default:l(()=>[o(k,{type:"primary",style:{width:"100%"},onClick:s[3]||(s[3]=c=>F(u.value))},{default:l(()=>[g(" 注册 ")]),_:1})]),_:1}),o(d,null,{default:l(()=>[a("div",W,[g(" 已有账号？请 "),o(h,{type:"warning",onClick:s[4]||(s[4]=c=>y(u.value))},{default:l(()=>[g(" 前往登录 ")]),_:1})])]),_:1})]),_:1},8,["rules","model"])}}},D=L(X,[["__scopeId","data-v-678e65e1"]]);const C=p=>(H("data-v-ca030eb3"),p=p(),N(),p),G={class:"login"},K=C(()=>a("div",{class:"login-mask"},null,-1)),Q={class:"login-box"},Y=C(()=>a("div",{class:"login-box-left"},[a("div",{class:"login-box-left-logo"},[a("i",{class:"iconfont icon-circulation"})]),a("div",{class:"login-box-left-tip"},[a("ul",null,[a("li",null,"多人协作在线编辑器-Multi Person Online Editor"),a("li",null,"支持Word、Excel、TXT、Markdown等多文件类型"),a("li",null,"效率高、低成本、时效性、多版本控制")])])],-1)),Z={class:"login-box-form"},ee={__name:"index",setup(p){const m=V("login"),e=V("LoginAnimation"),u=V("登录"),q=()=>(e.value="RegisterAnimation",u.value="注册"),v=()=>(e.value="LoginAnimation",u.value="登录");return T(()=>sessionStorage.clear()),(F,b)=>{const y=i("el-tab-pane"),t=i("el-tabs");return P(),A("div",G,[K,a("div",Q,[Y,a("div",Z,[o(t,{modelValue:m.value,"onUpdate:modelValue":b[0]||(b[0]=s=>m.value=s),class:"demo-tabs"},{default:l(()=>[o(y,{label:u.value,name:"login",class:E(e.value)},{default:l(()=>[o(j,{onToRegister:q}),o(D,{onToLogin:v})]),_:1},8,["label","class"])]),_:1},8,["modelValue"])])])])}}},le=L(ee,[["__scopeId","data-v-ca030eb3"]]);export{le as default};
