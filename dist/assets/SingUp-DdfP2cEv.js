import{r as a,n as y,j as e,T as b,t as d,L as S}from"./index-BJesf9DP.js";import{i as P}from"./logo-C32agGLs.js";import{S as E}from"./StatusModal-CmXvdwUj.js";function T(o){switch(o){case 400:return{title:"Bad Request",description:"The server could not understand the request due to invalid syntax."};case 401:return{title:"Unauthorized",description:"The client must authenticate itself to get the requested response."};case 403:return{title:"Forbidden",description:"The client does not have access rights to the content."};case 404:return{title:"Not Found",description:"The server can not find the requested resource."};case 500:return{title:"Internal Server Error",description:"The server has encountered a situation it does not know how to handle."};default:return{title:"Error",description:"An error occurred while processing your request."}}}function F(){const[o,u]=a.useState(""),[c,h]=a.useState(""),[p,x]=a.useState(""),[t,i]=a.useState([]),[f,m]=a.useState(!1),[j,v]=a.useState(""),g=y(),w=async s=>{s.preventDefault();const n=s.currentTarget;if(!n.checkValidity()){s.stopPropagation(),n.classList.add("was-validated");return}if(!o||!c){i([...t,new Error("Email and password are required")]);return}if(c!==p){i([...t,new Error("Passwords do not match")]);return}const r=await fetch("https://fidechat.meddyg.com/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:c,name:j}),credentials:"include"});if(r.ok){const{data:l}=await r.json();localStorage.setItem("data",JSON.stringify(l)),m(!0)}else{const l=await r.json().catch(()=>{})??(r.statusText||T(r.status).description);i([...t,new Error(l)])}},N=()=>{m(!1),g("/")};return e.jsxs("section",{children:[e.jsx(E,{show:f,handleClose:N,title:"Account created",description:"Your account has been created successfully. You will be redirected to the login page.",status:"success"}),e.jsx(b,{position:"top-end",className:"p-3",children:t.map((s,n)=>e.jsxs(d,{onClose:()=>{const r=[...t];r.splice(n,1),i(r)},delay:3e3,autohide:!0,children:[e.jsx(d.Header,{children:e.jsx("strong",{className:"me-auto",children:"Error"})}),e.jsx(d.Body,{children:s.message})]},n))}),e.jsx("div",{className:"container mt-5",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4",children:e.jsx("div",{className:"card border border-light-subtle rounded-3 shadow-sm",children:e.jsxs("div",{className:"card-body p-3 p-md-4 p-xl-5",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("img",{src:P,alt:"Fidelitas logo",width:"90",height:"90"})}),e.jsx("h2",{className:"fs-6 fw-normal text-center text-secondary mb-4",children:"Create your account"}),e.jsx("form",{method:"post",className:"needs-validation",onSubmit:s=>w(s),noValidate:!0,children:e.jsxs("div",{className:"row gy-2",children:[e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"email",className:"form-control",id:"email",onChange:s=>u(s.target.value),required:!0}),e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsx("div",{className:"invalid-feedback",children:"Please enter a valid email address."})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"text",className:"form-control",id:"username",onChange:s=>v(s.target.value),required:!0}),e.jsx("label",{htmlFor:"username",children:"Username"}),e.jsx("div",{className:"invalid-feedback",children:"Please enter your username."})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"password",className:"form-control",name:"password",id:"password",onChange:s=>h(s.target.value),required:!0}),e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("div",{className:"invalid-feedback",children:"Please enter your password."})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"password",className:"form-control",name:"confirmPassword",id:"confirmPassword",onChange:s=>x(s.target.value),required:!0}),e.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),e.jsx("div",{className:"invalid-feedback",children:"Please confirm your password."})]})}),e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"d-grid my-3",children:e.jsx("button",{className:"btn btn-primary btn-lg",type:"submit",children:"Sign Up"})})}),e.jsx("div",{className:"col-12",children:e.jsxs("p",{className:"m-0 text-secondary text-center",children:["Already have an account?"," ",e.jsx(S,{to:"/login",className:"link-primary text-decoration-none",children:"Log In"})]})})]})})]})})})})})]})}export{F as default};
