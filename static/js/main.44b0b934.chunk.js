(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(4),l=a.n(i),c=a(5),r=a.n(c);a(15);var s=function(e){let{notes:t,onAddNote:a,onDeleteNote:n,activeNote:i,setActiveNote:l}=e;const c=t.sort((e,t)=>t.lastModified-e.lastModified);return o.a.createElement("div",{className:"app-sidebar"},o.a.createElement("div",{className:"app-sidebar-header"},o.a.createElement("h1",null,"Pocket Notes"),o.a.createElement("button",{onClick:a},"Add")),o.a.createElement("div",{className:"app-sidebar-notes"},c.map(e=>o.a.createElement("div",{className:"app-sidebar-note ".concat(e.id===i&&"active"," "),onClick:()=>l(e.id)},o.a.createElement("div",{className:"sidebar-note-title"},o.a.createElement("strong",null,e.title),o.a.createElement("button",{onClick:()=>n(e.id)},"Delete")),o.a.createElement("p",null,e.body&&e.body.substr(0,100)+"..."),o.a.createElement("small",{className:"note-meta"},"Last modified "," ",new Date(e.lastModified).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"}))))))},d=a(2);var m=function(e){let{activeNote:t,onUpdateNote:a}=e;const n=(e,n)=>{a(Object(d.a)(Object(d.a)({},t),{},{[e]:n,lastModified:Date.now()}))};return t?o.a.createElement("div",{className:"app-main"},o.a.createElement("div",{className:"app-main-note-edit"},o.a.createElement("input",{type:"text",id:"title",value:t.title,onChange:e=>n("title",e.target.value),autoFocus:!0}),o.a.createElement("textarea",{id:"body",placeholder:"Write your note here...",value:t.body,onChange:e=>n("body",e.target.value)})),o.a.createElement("div",{className:"app-main-note-preview"},o.a.createElement("h1",{className:"preview-title"},t.title),o.a.createElement("div",{className:"markdown-preview"},t.body))):o.a.createElement("div",{className:"no-active-note"},"No note selected")};var p=function(){const[e,t]=Object(n.useState)(JSON.parse(localStorage.notes)||[]),[a,i]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{localStorage.setItem("notes",JSON.stringify(e))},[e]),o.a.createElement("div",{className:"App"},o.a.createElement(s,{notes:e,onAddNote:()=>{const a={id:r()(),title:"Untitled Note",body:"",lastModified:Date.now()};t([a,...e])},onDeleteNote:a=>{t(e.filter(e=>e.id!==a))},activeNote:a,setActiveNote:i}),o.a.createElement(m,{activeNote:e.find(e=>e.id===a),onUpdateNote:n=>{const o=e.map(e=>e.id===a?n:e);t(o)}}))};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)))},6:function(e,t,a){e.exports=a(16)}},[[6,1,2]]]);
//# sourceMappingURL=main.44b0b934.chunk.js.map