import{W as u,j as s,a as x,d as p}from"./app-Ju9o337L.js";import{A as h}from"./AuthenticatedLayout-CzcCzr-l.js";import{I as l}from"./InputLabel-tW8A3ybc.js";import{T as o}from"./TextInput-BgYNvz8S.js";import{I as i}from"./InputError-CdDkSkkP.js";import"./TextAreaInput-rOSIQ7gF.js";import"./SelectInput-VpGLjJVs.js";import"./ApplicationLogo-BQEdKpRZ.js";import"./transition-Vb28f7yg.js";function C({auth:n,user:a}){const{data:r,setData:t,post:d,errors:m,reset:g}=u({name:a.name||"",email:a.email||"",password:"",password_confirmation:"",_method:"PUT"}),c=e=>{e.preventDefault(),d(route("user.update",a.id))};return s.jsxs(h,{user:n.user,header:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:['Edit User "',a.name,'"']})}),children:[s.jsx(x,{title:"Users"}),s.jsx("div",{className:"py-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsxs("form",{onSubmit:c,className:`p-4 sm:p-8 bg-white dark:bg-gray-800
                    shadow sm:rounded-lg`,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"user_name",value:"User Name"}),s.jsx(o,{id:"user_name",type:"text",name:"name",value:r.name,className:"mt-1 block w-full",isFocused:!0,onChange:e=>t("name",e.target.value)}),s.jsx(i,{message:m.name,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"user_email",value:"User Email"}),s.jsx(o,{id:"user_email",type:"text",name:"email",value:r.email,className:"mt-1 block w-full",onChange:e=>t("email",e.target.value)}),s.jsx(i,{message:m.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"user_password",value:"Password"}),s.jsx(o,{id:"user_password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",onChange:e=>t("password",e.target.value)}),s.jsx(i,{message:m.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"user_password_confirmation",value:"Confirm Password"}),s.jsx(o,{id:"user_password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",onChange:e=>t("password_confirmation",e.target.value)}),s.jsx(i,{message:m.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4 text-right",children:[s.jsx(p,{href:route("user.index"),className:`bg-gray-100 py-1 px-3
                        text-gray-800 rounded shadow transition-all
                        hover:bg-gray-200 mr-2`,children:"Cancel"}),s.jsx("button",{className:`bg-emerald-500 py-1 px-3 text-white rounded
                        shadow transition-all hover:bg-emerald-600`,children:"Submit"})]})]})})})})]})}export{C as default};