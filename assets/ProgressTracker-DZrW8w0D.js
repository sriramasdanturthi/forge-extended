import{j as e,M as o,T as d,C as s}from"./blocks-gqGYpk7g.js";import{useMDXComponents as r}from"./index-De36GQbW.js";import{C as a}from"./CustomArgTypes-BFLg4w35.js";import{P as c,D as l,C as h,V as p,a as m}from"./ProgressTracker.stories-BNsvcQI_.js";import"./iframe-BBoZTpeG.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-C8LkwTSf.js";import"./with-default-aria-DpZcIZJM.js";import"./constants-CbBjP7hI.js";import"./class-map-DTzPJqx-.js";import"./directive-CJw_OlP2.js";import"./if-defined-Bq9zxgeT.js";import"./lit-utils-DKa_UPil.js";import"./async-directive-Zl3B6sc0.js";import"./index-DcxopvGW.js";import"./icon-C791ysrD.js";import"./index-SmAm0jA4.js";import"./base-button-adapter-DJQNH0hS.js";import"./focus-indicator-Ba6cFHFB.js";import"./index-DYaBatY9.js";import"./index-DWtH4V5g.js";import"./dismissible-stack-BXmVBT0C.js";import"./index-DEgZXk_C.js";import"./icon-button-BEiQBzi_.js";import"./index-D6aUUVNl.js";import"./toolbar-DbTdKBSA.js";function i(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(d,{}),`
`,e.jsx(t.p,{children:`The Progress Tracker displays progress through a sequence of steps or milestones, visually distinguishing
completed steps from incomplete steps. It renders whatever steps it is given, in the order provided, so
consumers can safely reload step data at any time without assuming the steps or their order are unchanged.`}),`
`,e.jsxs(t.p,{children:[`The connector between two steps is fully filled once the following step is completed, and partially filled
after the most recently completed step to indicate progress toward the next step (configurable via the
`,e.jsx(t.code,{children:"--forge-progress-tracker-active-connector-fill"}),` custom property). The component does not display or
calculate a completion percentage.`]}),`
`,e.jsxs(t.p,{children:["Optional ",e.jsx(t.code,{children:"title"})," and ",e.jsx(t.code,{children:"actions"})," slots render a header row above the steps — the ",e.jsx(t.code,{children:"actions"}),` slot is intended
for one or two buttons (for example a "Show Workflow" action).`]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(t.h2,{id:"providing-steps",children:"Providing steps"}),`
`,e.jsxs(t.p,{children:["Steps are provided through the ",e.jsx(t.code,{children:"steps"})," property. Each step supports the following fields:"]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Field"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"label"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The label displayed for the step."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"completed"})}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"boolean"})," (optional)"]}),e.jsx(t.td,{children:"Whether the step is completed. Completed steps render a check icon; incomplete steps render their step number."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"description"})}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"string"})," (optional)"]}),e.jsx(t.td,{children:"Additional information about the step. When provided, the step becomes interactive and dispatches the step info event when selected."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"theme"})}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' | 'info'"})," (optional)"]}),e.jsx(t.td,{children:"Colors the step indicator and its trailing connector with the corresponding Forge theme color."})]})]})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const tracker = document.querySelector('forge-progress-tracker');
tracker.steps = [
  { label: 'Application Received', completed: true, description: 'Your application was received and logged.' },
  { label: 'Fees Paid', completed: true },
  { label: 'Internal Review', completed: true },
  { label: 'Documents Approved' },
  { label: 'Record Issued' }
];
`})}),`
`,e.jsx(t.h2,{id:"handling-the-step-info-event",children:"Handling the step info event"}),`
`,e.jsxs(t.p,{children:[`The component is purely presentational and does not render a dialog itself. Steps that include a
`,e.jsx(t.code,{children:"description"})," are rendered as buttons; selecting one dispatches the ",e.jsx(t.code,{children:"forge-progress-tracker-step-info"}),`
event, and the consuming application presents the step's additional information however it chooses —
typically in a dialog that it owns. Steps without a description are rendered as static content with no
clickable affordance.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`tracker.addEventListener('forge-progress-tracker-step-info', evt => {
  const { step, index } = evt.detail;
  // Present step.description in an application-owned dialog
});
`})}),`
`,e.jsx(t.p,{children:"The event bubbles and is composed, so it can be handled on the component itself or any ancestor."}),`
`,e.jsx(t.h2,{id:"color-coded-steps",children:"Color-coded steps"}),`
`,e.jsxs(t.p,{children:["Each step may optionally specify a ",e.jsx(t.code,{children:"theme"}),` that colors its indicator and trailing connector using the
corresponding Forge theme color. Steps without a theme use the default view, so the two modes can be mixed
freely within the same tracker.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h2,{id:"vertical",children:"Vertical"}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:'orientation="vertical"'}),` to stack the steps vertically with labels beside each step indicator. All
other behavior — completion states, per-step themes, partial connector fill, and the step info event — is
identical in both orientations.`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h2,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(t.p,{children:["In the horizontal orientation each step reserves a minimum width (",e.jsx(t.code,{children:"--forge-progress-tracker-step-min-width"}),`,
`,e.jsx(t.code,{children:"96px"}),` by default) and labels wrap at word boundaries. When the available width is smaller than the steps
require, the steps scroll horizontally rather than overlapping or truncating step names.`]}),`
`,e.jsx(t.h2,{id:"theming",children:"Theming"}),`
`,e.jsx(t.p,{children:`The component derives its colors from the Forge theme (primary, on-primary, outline, and text colors), so it
automatically adapts to custom themes and both light and dark modes. Individual colors can be adjusted via
the CSS custom properties listed below while maintaining accessible contrast.`}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`Steps are rendered as an ordered list, and each step announces its completion state via visually hidden
text. The announcement text is localizable via the `,e.jsx(t.code,{children:"completed-label"})," and ",e.jsx(t.code,{children:"incomplete-label"})," attributes."]}),`
`,e.jsxs(t.li,{children:["The first incomplete step is marked with ",e.jsx(t.code,{children:'aria-current="step"'}),"."]}),`
`,e.jsxs(t.li,{children:["Interactive steps are rendered as native buttons with ",e.jsx(t.code,{children:'aria-haspopup="dialog"'}),` and are fully keyboard
accessible.`]}),`
`,e.jsxs(t.li,{children:["Step indicators and connectors are hidden from assistive technology (",e.jsx(t.code,{children:"aria-hidden"}),`); all information they
convey visually is also available as text.`]}),`
`,e.jsxs(t.li,{children:[`Because the information dialog is owned by the consuming application, the application is responsible for
its accessibility. Using `,e.jsx(t.code,{children:"forge-dialog"})," provides focus management, ",e.jsx(t.code,{children:"Escape"}),` dismissal, and backdrop
light-dismiss behavior out of the box.`]}),`
`]})]})}function N(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{N as default};
