import{W as c,j as s,a as u,d as x}from"./app-Ju9o337L.js";import{A as p}from"./AuthenticatedLayout-CzcCzr-l.js";import{I as m}from"./InputLabel-tW8A3ybc.js";import{T as o}from"./TextInput-BgYNvz8S.js";import{I as l}from"./InputError-CdDkSkkP.js";import"./ApplicationLogo-BQEdKpRZ.js";import"./transition-Vb28f7yg.js";function y({auth:i}){const{data:a,setData:r,post:n,errors:t,reset:h}=c({name:"",email:"",password:"",password_confirmation:"",description:"",due_date:""}),d=e=>{e.preventDefault(),n(route("user.store"))};return s.jsxs(p,{user:i.user,header:s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create New User"})}),children:[s.jsx(u,{title:"Users"}),s.jsx("div",{className:"py-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsxs("form",{onSubmit:d,className:`p-4 sm:p-8 bg-white dark:bg-gray-800
                    shadow sm:rounded-lg`,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"user_name",value:"User Name"}),s.jsx(o,{id:"user_name",type:"text",name:"name",value:a.name,className:"mt-1 block w-full",isFocused:!0,onChange:e=>r("name",e.target.value)}),s.jsx(l,{message:t.name,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"user_email",value:"User Email"}),s.jsx(o,{id:"user_email",type:"text",name:"email",value:a.email,className:"mt-1 block w-full",onChange:e=>r("email",e.target.value)}),s.jsx(l,{message:t.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"user_password",value:"Password"}),s.jsx(o,{id:"user_password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",onChange:e=>r("password",e.target.value)}),s.jsx(l,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"user_password_confirmation",value:"Password Confirmation"}),s.jsx(o,{id:"user_password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",onChange:e=>r("password_confirmation",e.target.value)}),s.jsx(l,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4 text-right",children:[s.jsx(x,{href:route("user.index"),className:`bg-gray-100 py-1 px-3
                        text-gray-800 rounded shadow transition-all
                        hover:bg-gray-200 mr-2`,children:"Cancel"}),s.jsx("button",{className:`bg-emerald-500 py-1 px-3 text-white rounded
                        shadow transition-all hover:bg-emerald-600`,children:"Submit"})]})]})})})})]})}export{y as default};
