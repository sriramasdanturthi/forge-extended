import{x as e}from"./iframe-BBoZTpeG.js";import{I as t,q as r,u as n}from"./with-default-aria-DpZcIZJM.js";import"./count-card-3s9yPA-9.js";import{d as a}from"./index-DcxopvGW.js";import{d as s}from"./index-BnG3lVjO.js";import{d as p}from"./index-BEvVSe-q.js";import"./constants-CbBjP7hI.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DKa_UPil.js";import"./async-directive-Zl3B6sc0.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DYaBatY9.js";import"./index-U7KSRp5T.js";import"./tooltip-CiYeXJdL.js";import"./with-longpress-listener-COlF9Oll.js";import"./dismissible-stack-BXmVBT0C.js";import"./icon-C791ysrD.js";import"./state-Dx6pFZgq.js";import"./class-map-DTzPJqx-.js";import"./style-map-D-JYM50N.js";a();s();p();t.define([r,n]);const d="forge-count-card",q={title:"Components/Count Card",component:d,render:()=>e`
      <style>
        .meter-body {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--forge-theme-text-medium);
        }

        .body-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .last-updated {
          color: var(--forge-theme-text-low);
        }
      </style>
      <div style="width: 320px;">
        <forge-count-card>
          <span slot="label">Todays money</span>
          <forge-badge slot="header-end" theme="success">
            +8.2%
            <forge-icon slot="end" name="trending_up"></forge-icon>
          </forge-badge>
          <span slot="count">$50,846.00</span>
          <div slot="body" class="meter-body">
            <span class="forge-typography--body1">66% of monthly target</span>
            <span class="forge-typography--body1">100k</span>
          </div>
          <div slot="body" class="body-content">
            <forge-meter value="0.66" min="0" max="1" theme="success"></forge-meter>
            <span class="forge-typography--label1 last-updated">Last updated 12/12/2025</span>
          </div>
        </forge-count-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const E=["AdditionalBodyContent"];export{o as AdditionalBodyContent,E as __namedExportsOrder,q as default};
