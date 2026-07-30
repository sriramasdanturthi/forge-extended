import{j as e,M as s}from"./blocks-gqGYpk7g.js";import{useMDXComponents as o}from"./index-De36GQbW.js";import"./iframe-BBoZTpeG.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Frameworks/Vue"}),`
`,e.jsx(n.h1,{id:"vue",children:"Vue"}),`
`,e.jsxs(n.p,{children:["Vue has ",e.jsx(n.a,{href:"https://custom-elements-everywhere.com/#vue",rel:"nofollow",children:"great support"})," for custom elements and can be used directly."]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To use Forge Extended in your Vue application, install the following package from npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge-extended
`})}),`
`,e.jsx(n.h2,{id:"configure-vue",children:"Configure Vue"}),`
`,e.jsxs(n.p,{children:[`To make sure Vue plays nice with custom elements, you need to configure the compiler to allow certain elements. The Vue\r
documentation has a section on `,e.jsx(n.a,{href:"https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue",rel:"nofollow",children:"using custom elements in Vue"}),`\r
that explains what you need to do.`]}),`
`,e.jsx(n.p,{children:"If you're using the Vue plugin with Vite, you can use the following in your Vite config:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { defineConfig } from 'vite';\r
import vue from '@vitejs/plugin-vue';\r
\r
export default defineConfig({\r
  plugins: [\r
    vue({\r
      template: {\r
        compilerOptions: {\r
          isCustomElement: tag => tag.startsWith('forge-')\r
        }\r
      }\r
    })\r
  ]\r
});
`})}),`
`,e.jsx(n.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsxs(n.p,{children:["To use Forge components in your Vue application, import the components you need from the ",e.jsx(n.code,{children:"@tylertech/forge-extended"})," package."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>\r
  <forge-responsive-toolbar></forge-responsive-toolbar>\r
</template>\r
\r
<script setup>\r
  import '@tylertech/forge-extended/responsive-toolbar';\r
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"typescript-support",children:"TypeScript Support"}),`
`,e.jsxs(n.p,{children:[`If you are using TypeScript in your Vue application, we also include typings for all Forge Extended components. You can add a reference to those\r
typings in your `,e.jsx(n.code,{children:"tsconfig.json"})," file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{\r
  "compilerOptions": {\r
    "types": ["@tylertech/forge-extended/dist/types/vue/forge-extended-vue.d.ts"]\r
  }\r
}
`})})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{u as default};
