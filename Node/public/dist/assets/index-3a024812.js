import{f as t}from"./index-d2f44d42.js";const r=e=>t({url:"/file/findFiles",method:"post",data:e}),s=e=>t({url:"/file/findFileByFileId",method:"post",data:e}),i=e=>t({url:"/file/createFile",method:"post",data:e}),n=e=>t({url:"/file/uploadFile",method:"post",data:e,"Content-Type":"multipart/form-data"}),a=e=>t({url:"/file/shareFile",method:"post",data:{userid:e}}),u=(e,o)=>t({url:"/file/joinFile",method:"post",data:{userid:e,fileid:o}}),d=e=>t({url:"/file/updateFileState",method:"post",data:e}),p=e=>t({url:"/file/updateFile",method:"post",data:e}),F=e=>t({url:"/version/updateVersion",method:"post",data:e}),c=e=>t({url:"/file/getFileContent",method:"post",data:e}),f=e=>t({url:"/file/putFileToRecycle",method:"post",data:e}),m=e=>t({url:"/excel/uploadFile",method:"post","Content-Type":"multipart/form-data",data:e}),h=e=>t({url:"/version/getVersion",method:"post",data:e});export{a,s as b,i as c,h as d,n as e,d as f,r as g,c as h,m as i,u as j,f as p,F as s,p as u};
