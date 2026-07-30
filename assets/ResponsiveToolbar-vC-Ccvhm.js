import{j as e,M as i,T as r,C as a}from"./blocks-gqGYpk7g.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BFLg4w35.js";import{R as c,D as p}from"./ResponsiveToolbar.stories-DiXuitv5.js";import"./iframe-BBoZTpeG.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-C8LkwTSf.js";import"./if-defined-Bq9zxgeT.js";import"./responsive-toolbar-CsFmtXDE.js";import"./constants-CbBjP7hI.js";import"./with-default-aria-DpZcIZJM.js";import"./ref-CVXC2r8d.js";import"./async-directive-Zl3B6sc0.js";import"./directive-CJw_OlP2.js";import"./index-D6aUUVNl.js";import"./toolbar-DbTdKBSA.js";import"./index-SmAm0jA4.js";import"./base-button-adapter-DJQNH0hS.js";import"./focus-indicator-Ba6cFHFB.js";import"./icon-C791ysrD.js";import"./index-kGOJ_Lq4.js";import"./index-DEgZXk_C.js";import"./icon-button-BEiQBzi_.js";import"./index-DeIMLqRU.js";import"./list-dropdown-aware-core-CvwyB5WW.js";import"./linear-progress-constants-D_cpunbP.js";import"./list-CL6UHVnD.js";import"./popover-DCPs24ed.js";import"./with-longpress-listener-COlF9Oll.js";import"./dismissible-stack-BXmVBT0C.js";import"./skeleton-constants-macaMeHj.js";import"./tooltip-CiYeXJdL.js";function n(t){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(r,{}),`
`,e.jsxs(o.p,{children:["The Responsive Toolbar dynamically adjusts your toolbar content to prevent overlap on smaller screens. It leverages a ",e.jsx(o.code,{children:"ResizeObserver"}),` to detect\r
when the title content collides with the end slot content. When an overlap is detected, the toolbar automatically hides the `,e.jsx(o.code,{children:"desktop-actions"}),` slot\r
and displays the `,e.jsx(o.code,{children:"mobile-actions"})," slot instead."]}),`
`,e.jsxs(o.p,{children:[`This approach eliminates the need for manually configuring breakpoints or container queries, ensuring a seamless adaptive experience without extra\r
calculations. Simply provide your `,e.jsx(o.code,{children:"desktop-actions"})," slot content and your ",e.jsx(o.code,{children:"mobile-actions"})," slot content, and the component handles the rest."]}),`
`,e.jsx(a,{of:p}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),` The responsive toolbar will not automatically create a mobile friendly version of your end slot content. You\r
should be providing markup for both the `,e.jsx(o.code,{children:"desktop-actions"})," slot and the ",e.jsx(o.code,{children:"mobile-actions"}),` slot, this lets you fine tune\r
the user experience based on available space.`]}),`
`]}),`
`,e.jsx(o.h3,{id:"why-a-responsive-toolbar",children:"Why a responsive toolbar?"}),`
`,e.jsxs(o.p,{children:[`The toolbar is a common source of layout issues in applications, often overlooked when adapting to different screen sizes. Managing multiple instances\r
of the primitive `,e.jsx(o.code,{children:"<forge-toolbar>"})," across a page can make breakpoint handling complex and inconsistent."]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"<forge-responsive-toolbar>"}),` solves this by automatically adjusting to various container sizes, preventing hidden content, overlapping text, and\r
broken layouts. It ensures a clean, readable UI without the need for manual breakpoint management.`]}),`
`,e.jsx(o.h3,{id:"when-to-use-a-responsive-toolbar",children:"When to use a responsive toolbar"}),`
`,e.jsx(o.p,{children:`If you know that your application could potentially be used on lower resolutions or mobile devices, and you're currently using toolbars with actions\r
in the end slot, then you should use a responsive toolbar instead.`}),`
`,e.jsx(o.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{})]})}function Y(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{Y as default};
