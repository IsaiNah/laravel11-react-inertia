import{j as s,a as i}from"./app-Ju9o337L.js";import{A as m}from"./AuthenticatedLayout-CzcCzr-l.js";import{P as r,b as c}from"./constants-Ckjsl-FG.js";import x from"./TasksTable-DJ4UXKdo.js";import"./ApplicationLogo-BQEdKpRZ.js";import"./transition-Vb28f7yg.js";import"./TableHeading-B_J4qqhh.js";import"./SelectInput-VpGLjJVs.js";import"./TextInput-BgYNvz8S.js";function v({auth:a,success:l,project:e,tasks:d,queryParams:t}){return s.jsxs(m,{user:a.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:`Project "${e.name}"`}),children:[s.jsx(i,{title:`Project "${e.name}"`}),s.jsx("div",{className:"px-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[s.jsx("div",{children:s.jsx("img",{src:e.image_path,alt:"",className:"w-full h-62 object-cover"})}),s.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[s.jsxs("div",{className:"grid gap-4 grid-cols-2 mt-2",children:[s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("label",{className:"font-bold text-lg",children:"Project ID"}),s.jsx("p",{className:"mt-1",children:e.id})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Project Name"}),s.jsx("p",{className:"mt-1",children:e.name})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Project Status"}),s.jsx("p",{className:"mt-1",children:s.jsx("span",{className:"px-2 py-1 rounded "+r[e.status],children:s.jsx("span",{className:"text-white",children:c[e.status]})})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Created By"}),s.jsx("p",{className:"mt-1",children:e.createdBy.name})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-bold text-lg",children:"Due Date"}),s.jsx("p",{className:"mt-1",children:e.due_date}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Create Date"}),s.jsx("p",{className:"mt-1",children:e.created_at})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Updated By"}),s.jsx("p",{className:"mt-1",children:e.updatedBy.name})]})]})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Project Description"}),s.jsx("p",{className:"mt-1",children:e.description})]})]})]})})}),s.jsx("div",{className:"py-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:s.jsx(x,{tasks:d,queryParams:t,hideProjectColumn:!0,success:l})})})})})]})}export{v as default};
