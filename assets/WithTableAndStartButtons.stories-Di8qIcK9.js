import{x as t}from"./iframe-BBoZTpeG.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-DpZcIZJM.js";import"./structured-card-DOuJUNz7.js";import{d as i,a as s}from"./index-D3Jzj562.js";import{d as p}from"./index-DEgZXk_C.js";import{d as m}from"./index-DcxopvGW.js";import{d}from"./index-SmAm0jA4.js";import{d as c}from"./index-kGOJ_Lq4.js";import"./constants-CbBjP7hI.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DTzPJqx-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BTGAlWnR.js";import"./when-3fO0zp9C.js";import"./lit-utils-DKa_UPil.js";import"./async-directive-Zl3B6sc0.js";import"./index-DYaBatY9.js";import"./icon-button-BEiQBzi_.js";import"./base-button-adapter-DJQNH0hS.js";import"./focus-indicator-Ba6cFHFB.js";import"./icon-C791ysrD.js";import"./tooltip-CiYeXJdL.js";import"./with-longpress-listener-COlF9Oll.js";import"./dismissible-stack-BXmVBT0C.js";import"./select-CETvF4x1.js";import"./with-form-associated-CPHeTkOj.js";import"./field-IDhTqGss.js";import"./list-dropdown-aware-core-CvwyB5WW.js";import"./linear-progress-constants-D_cpunbP.js";import"./list-CL6UHVnD.js";import"./popover-DCPs24ed.js";import"./skeleton-constants-macaMeHj.js";import"./divider-DcQSu7w5.js";import"./circular-progress-BU6LE18_.js";import"./scaffold-Y_Tyln1Z.js";import"./toolbar-DbTdKBSA.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
      <forge-structured-card heading-level="2" body-spacing="none">
        <div slot="title">Asset Inventory</div>
        <forge-icon-button aria-label="Refresh data" slot="after-header-actions">
          <forge-icon name="refresh"></forge-icon>
        </forge-icon-button>
        <forge-icon-button aria-label="Download report" slot="after-header-actions">
          <forge-icon name="download"></forge-icon>
        </forge-icon-button>
        <forge-table slot="body" .data=${[{id:"AST-001",name:"Dell Latitude 5520",category:"Laptop",location:"Building A",status:"In Use"},{id:"AST-002",name:"HP LaserJet Pro",category:"Printer",location:"Building B",status:"Available"},{id:"AST-003",name:"Cisco IP Phone 8845",category:"Phone",location:"Building A",status:"In Use"},{id:"AST-004",name:'Samsung 27" Monitor',category:"Monitor",location:"Building C",status:"In Repair"},{id:"AST-005",name:"Logitech MX Keys",category:"Keyboard",location:"Building A",status:"Available"}]} .columnConfigurations=${[{property:"id",header:"Asset ID"},{property:"name",header:"Asset Name"},{property:"category",header:"Category"},{property:"location",header:"Location"},{property:"status",header:"Status"}]}></forge-table>
        <forge-stack slot="footer-start" inline alignment="center" wrap gap="8">
          <forge-button variant="outlined">Update asset inventory</forge-button>
          <forge-button variant="outlined">Asset inventory dataset</forge-button>
        </forge-stack>
        <forge-paginator slot="footer-primary-action" page-size="5" total="25" page-index="0"></forge-paginator>
      </forge-structured-card>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const Z=["WithTableAndStartButtons"];export{o as WithTableAndStartButtons,Z as __namedExportsOrder,Y as default};
