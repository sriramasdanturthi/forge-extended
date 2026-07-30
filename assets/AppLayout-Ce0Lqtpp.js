import{j as e,M as i,T as a,C as s}from"./blocks-gqGYpk7g.js";import{useMDXComponents as t}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-BFLg4w35.js";import{A as c,D as d}from"./AppLayout.stories-Dkx_JpRg.js";import"./iframe-BBoZTpeG.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-C8LkwTSf.js";import"./if-defined-Bq9zxgeT.js";import"./app-layout-weOjxgOv.js";import"./when-3fO0zp9C.js";import"./constants-CbBjP7hI.js";import"./with-default-aria-DpZcIZJM.js";import"./state-Dx6pFZgq.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./index-wmNU3PPb.js";import"./scaffold-Y_Tyln1Z.js";import"./index-DWtH4V5g.js";import"./dismissible-stack-BXmVBT0C.js";import"./list-CL6UHVnD.js";import"./focus-indicator-Ba6cFHFB.js";import"./index-DEgZXk_C.js";import"./icon-button-BEiQBzi_.js";import"./base-button-adapter-DJQNH0hS.js";import"./icon-C791ysrD.js";import"./index-DcxopvGW.js";import"./tooltip-CiYeXJdL.js";import"./with-longpress-listener-COlF9Oll.js";import"./index-CkBiVXux.js";import"./index-DUD6un-t.js";import"./index-C0Jaduq7.js";function o(r){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(a,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-app-layout>"})," component provides a responsive layout structure for Tyler Cloud applications, featuring an embedded app bar with navigation drawer functionality. This component adapts automatically to different screen sizes, providing an optimal user experience across desktop and mobile devices."]}),`
`,e.jsx(n.p,{children:"The layout includes a built-in app bar with configurable slots and a responsive navigation system that transforms between a persistent side drawer on large screens and a modal drawer on smaller screens."}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-app-layout>"})," component serves as the foundational layout structure for applications, providing both the app bar and navigation framework in a single, cohesive component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application">\r
  <!-- App bar content -->\r
  <img src="/logo.png" alt="Company Logo" slot="app-bar-logo" />\r
  <forge-button slot="app-bar-end" variant="raised">Action</forge-button>\r
\r
  <!-- Navigation content -->\r
  <forge-list slot="navigation">\r
    <forge-list-item>\r
      <forge-icon slot="start" name="dashboard"></forge-icon>\r
      <button type="button">Dashboard</button>\r
    </forge-list-item>\r
    <forge-list-item>\r
      <forge-icon slot="start" name="people"></forge-icon>\r
      <button type="button">Users</button>\r
    </forge-list-item>\r
  </forge-list>\r
\r
  <!-- Main content -->\r
  <main>\r
    <h1>Page Content</h1>\r
    <p>Your application content goes here.</p>\r
  </main>\r
\r
  <!-- Footer -->\r
  <div slot="footer">\r
    <p>&copy; 2024 Tyler Technologies</p>\r
  </div>\r
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"app-bar-integration",children:"App Bar Integration"}),`
`,e.jsxs(n.p,{children:["The component includes an embedded ",e.jsx(n.code,{children:"<forge-app-bar>"})," with several configurable slots for custom content. The app bar automatically includes a menu button on small screens to control the navigation drawer."]}),`
`,e.jsx(n.h3,{id:"app-bar-slots",children:"App Bar Slots"}),`
`,e.jsx(n.p,{children:"The app bar provides dedicated slots for different types of content:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Logo slot"}),": For company or application branding"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start slot"}),": For actions at the beginning of the app bar"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center slot"}),": For centered content like search bars"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End slot"}),": For actions at the end of the app bar (user profile, settings, etc.)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="Dashboard">\r
  <!-- Logo in the app bar -->\r
  <forge-avatar slot="app-bar-logo" size="small">\r
    <img src="/company-logo.png" alt="Company" />\r
  </forge-avatar>\r
\r
  <!-- Start actions -->\r
  <forge-button slot="app-bar-start" variant="text">\r
    <forge-icon name="refresh" slot="start"></forge-icon>\r
    Refresh\r
  </forge-button>\r
\r
  <!-- Center content -->\r
  <forge-text-field slot="app-bar-center" placeholder="Search...">\r
    <forge-icon slot="leading" name="search"></forge-icon>\r
  </forge-text-field>\r
\r
  <!-- End actions -->\r
  <forge-user-profile slot="app-bar-end" full-name="John Doe" email="john.doe@example.com"> </forge-user-profile>\r
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(n.p,{children:"The component automatically adapts to screen size using a configurable breakpoint (default: 960px):"}),`
`,e.jsx(n.h3,{id:"large-screens--breakpoint",children:"Large Screens (>= breakpoint)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigation appears as a persistent drawer in the body-left area"}),`
`,e.jsxs(n.li,{children:["Can use standard drawer (default) or mini drawer mode via the ",e.jsx(n.code,{children:"use-mini-drawer"})," attribute"]}),`
`,e.jsx(n.li,{children:"Menu button is hidden since navigation is always visible"}),`
`,e.jsx(n.li,{children:"Full scaffold layout with dedicated navigation space"}),`
`,e.jsx(n.li,{children:"Toggle button available to collapse/expand the drawer"}),`
`]}),`
`,e.jsx(n.h3,{id:"small-screens--breakpoint",children:"Small Screens (< breakpoint)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigation appears as a modal drawer triggered by the menu button"}),`
`,e.jsx(n.li,{children:"Menu button becomes visible in the app bar start slot"}),`
`,e.jsx(n.li,{children:"Drawer overlays content and can be toggled open/closed"}),`
`,e.jsx(n.li,{children:"Drawer automatically closes when screen size increases"}),`
`,e.jsxs(n.li,{children:["Always uses a modal dialog drawer regardless of ",e.jsx(n.code,{children:"use-mini-drawer"})," setting"]}),`
`]}),`
`,e.jsx(n.h3,{id:"auto-close-on-navigation",children:"Auto-close on Navigation"}),`
`,e.jsxs(n.p,{children:["On small screens, you can automatically close the modal drawer when a user clicks on a navigation item by adding the ",e.jsx(n.code,{children:"data-forge-app-layout-close"})," attribute to any element within the navigation slot. The attribute can be placed on a parent element (like ",e.jsx(n.code,{children:"<forge-list>"}),") to close the drawer on any click within that element:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application">\r
  <!-- All clicks within this list will close the drawer -->\r
  <forge-list slot="navigation" navlist data-forge-app-layout-close>\r
    <forge-list-item>\r
      <forge-icon slot="start" name="home"></forge-icon>\r
      <a href="/home">Home</a>\r
    </forge-list-item>\r
    <forge-list-item>\r
      <forge-icon slot="start" name="settings"></forge-icon>\r
      <a href="/settings">Settings</a>\r
    </forge-list-item>\r
  </forge-list>\r
</forge-app-layout>
`})}),`
`,e.jsx(n.p,{children:"For more granular control, you can place the attribute on individual items:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application">\r
  <forge-list slot="navigation" navlist>\r
    <!-- These items will close the drawer when clicked -->\r
    <forge-list-item data-forge-app-layout-close>\r
      <forge-icon slot="start" name="home"></forge-icon>\r
      <a href="/home">Home</a>\r
    </forge-list-item>\r
\r
    <!-- This item won't close the drawer (e.g., submenu toggle) -->\r
    <forge-list-item>\r
      <forge-icon slot="start" name="expand_more"></forge-icon>\r
      <button type="button">Expand submenu</button>\r
    </forge-list-item>\r
  </forge-list>\r
</forge-app-layout>
`})}),`
`,e.jsxs(n.p,{children:["You can also programmatically close the drawer using the ",e.jsx(n.code,{children:"closeDrawer()"})," method:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const appLayout = document.querySelector('forge-app-layout');\r
appLayout.closeDrawer();
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"APP_LAYOUT_CLOSE_ATTRIBUTE"})," constant is exported for use in JavaScript/TypeScript:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { APP_LAYOUT_CLOSE_ATTRIBUTE } from '@tylertech/forge-extended';\r
\r
element.setAttribute(APP_LAYOUT_CLOSE_ATTRIBUTE, '');
`})}),`
`,e.jsx(n.h3,{id:"custom-breakpoint",children:"Custom Breakpoint"}),`
`,e.jsxs(n.p,{children:["You can customize the responsive breakpoint by setting the ",e.jsx(n.code,{children:"breakpoint"})," property:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Use a 1024px breakpoint instead of the default 960px -->\r
<forge-app-layout app-title="Desktop App" breakpoint="1024">\r
  <!-- Navigation will switch to drawer mode at 1024px -->\r
</forge-app-layout>\r
\r
<!-- Use a smaller 768px breakpoint for tablets -->\r
<forge-app-layout app-title="Tablet App" breakpoint="768">\r
  <!-- Navigation switches to drawer mode at 768px -->\r
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"navigation-content",children:"Navigation Content"}),`
`,e.jsxs(n.p,{children:["The navigation slot accepts any content but works best with structured navigation elements like ",e.jsx(n.code,{children:"<forge-list>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="Administration">\r
  <forge-list slot="navigation" navlist>\r
    <!-- Dashboard Section -->\r
    <forge-list-item>\r
      <forge-icon slot="start" name="dashboard"></forge-icon>\r
      <a href="/dashboard">Dashboard</a>\r
    </forge-list-item>\r
\r
    <!-- Divider -->\r
    <forge-divider></forge-divider>\r
\r
    <!-- Users Section -->\r
    <forge-list-item>\r
      <forge-icon slot="start" name="people"></forge-icon>\r
      <a href="/users">Users</a>\r
    </forge-list-item>\r
    <forge-list-item>\r
      <forge-icon slot="start" name="admin_panel_settings"></forge-icon>\r
      <a href="/roles">Roles & Permissions</a>\r
    </forge-list-item>\r
  </forge-list>\r
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"mini-drawer-mode",children:"Mini Drawer Mode"}),`
`,e.jsx(n.p,{children:"The app-layout component supports using a mini drawer for navigation on large screens. The mini drawer provides a collapsed view that shows only icons, allowing for more content space while maintaining quick access to navigation."}),`
`,e.jsx(n.h3,{id:"using-mini-drawer",children:"Using Mini Drawer"}),`
`,e.jsxs(n.p,{children:["Enable mini drawer mode by setting the ",e.jsx(n.code,{children:"use-mini-drawer"})," attribute:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application" use-mini-drawer>\r
  <forge-list slot="navigation" navlist>\r
    <forge-list-item>\r
      <forge-icon slot="start" name="dashboard"></forge-icon>\r
      <button type="button">Dashboard</button>\r
    </forge-list-item>\r
    <forge-list-item>\r
      <forge-icon slot="start" name="people"></forge-icon>\r
      <button type="button">Users</button>\r
    </forge-list-item>\r
  </forge-list>\r
\r
  <!-- Main content -->\r
  <main>Your content here</main>\r
</forge-app-layout>
`})}),`
`,e.jsxs(n.p,{children:["When enabled, the navigation drawer on large screens will use the ",e.jsx(n.code,{children:"<forge-mini-drawer>"})," component instead of the standard ",e.jsx(n.code,{children:"<forge-drawer>"}),", providing a more compact navigation experience."]}),`
`,e.jsx(n.h3,{id:"hover-expansion",children:"Hover Expansion"}),`
`,e.jsx(n.p,{children:"Enable hover expansion to allow the mini drawer to temporarily expand when the user hovers over it:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="My Application" use-mini-drawer mini-hover>\r
  <forge-list slot="navigation" navlist>\r
    <!-- Navigation items -->\r
  </forge-list>\r
</forge-app-layout>
`})}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"mini-hover"})," is enabled:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The drawer remains collapsed by default, showing only icons"}),`
`,e.jsx(n.li,{children:"Hovering over the drawer temporarily expands it to show full labels"}),`
`,e.jsx(n.li,{children:"The drawer collapses again when the mouse leaves the drawer area"}),`
`,e.jsx(n.li,{children:"This provides a space-efficient navigation option while maintaining easy access to full labels"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The mini drawer mode only affects the navigation drawer on large screens (above the breakpoint). On small screens, the navigation will always use a modal drawer regardless of the ",e.jsx(n.code,{children:"use-mini-drawer"})," setting."]}),`
`]}),`
`,e.jsx(n.h2,{id:"layout-slots",children:"Layout Slots"}),`
`,e.jsx(n.p,{children:"Beyond the app bar and navigation, the component provides additional layout slots for content placement:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default slot"}),": Main content area"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body slots"}),": ",e.jsx(n.code,{children:"body-header"}),", ",e.jsx(n.code,{children:"body-footer"}),", ",e.jsx(n.code,{children:"body-left"}),", ",e.jsx(n.code,{children:"body-right"})," for additional content areas"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Footer slot"}),": Application footer content"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-app-layout app-title="Complex Layout">\r
  <!-- Navigation -->\r
  <nav slot="navigation">...</nav>\r
\r
  <!-- Body header -->\r
  <div slot="body-header">\r
    <forge-toolbar>\r
      <h1>Page Title</h1>\r
      <forge-button slot="end">Action</forge-button>\r
    </forge-toolbar>\r
  </div>\r
\r
  <!-- Main content (default slot) -->\r
  <main>\r
    <h2>Primary Content</h2>\r
    <p>Your main application content.</p>\r
  </main>\r
\r
  <!-- Body footer -->\r
  <div slot="body-footer">\r
    <forge-pagination></forge-pagination>\r
  </div>\r
\r
  <!-- Application footer -->\r
  <footer slot="footer">\r
    <p>&copy; 2024 Tyler Technologies. All rights reserved.</p>\r
  </footer>\r
</forge-app-layout>
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The embedded menu button includes appropriate focus management and keyboard navigation"}),`
`,e.jsx(n.li,{children:"Navigation drawer follows standard dialog accessibility patterns when in modal mode"}),`
`,e.jsx(n.li,{children:"App bar maintains proper heading structure and landmark roles"}),`
`,e.jsx(n.li,{children:"All slots support proper semantic markup for screen readers"}),`
`,e.jsx(n.li,{children:"Responsive behavior maintains keyboard accessibility across screen sizes"}),`
`]})]})}function I(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{I as default};
