import{j as e,P as d,B as c}from"../static/index-oUtK46dN.js";import{F as m}from"../static/yext-favicon-Cgjx2BvB.js";import{D as l}from"../static/DirectoryCityGrid-BQOMs82L.js";import{B as y}from"../static/Breadcrumbs-BvUCP4yo.js";import"../static/index-CPH0DYhJ.js";import"../static/commonjsHelpers-DZNb-E5g.js";import"../static/index-QKaMz_F6.js";import"../static/index-D6sq2Auz.js";import"../static/index-D8_GnGOZ.js";const j={stream:{$id:"city-stream",filter:{entityTypes:["ce_city"]},fields:["id","uid","meta","name","description","slug","c_addressRegionDisplayName","dm_directoryParents.name","dm_directoryParents.slug","dm_directoryParents.meta","dm_directoryParents.c_addressRegionDisplayName","dm_directoryChildren.name","dm_directoryChildren.address","dm_directoryChildren.mainPhone","dm_directoryChildren.slug"],localization:{locales:["en"]}}},b=({document:r})=>`${r.slug.toString()}`,D=({document:r})=>[`alias/${r.locale}/${r.id.toString()}`],v=({document:r})=>({title:r.name,charset:"UTF-8",viewport:"width=device-width, initial-scale=1",tags:[{type:"link",attributes:{rel:"icon",type:"image/x-icon",href:m}}]}),B=async r=>{const{dm_directoryParents:t,name:i}=r.document;return(t||[]).push({name:i,slug:""}),{...r,document:{...r.document,dm_directoryParents:t}}},F=({relativePrefixToRoot:r,document:t,__meta:i})=>{const{name:s,description:n,dm_directoryParents:a,dm_directoryChildren:o}=t;return e.jsx(e.Fragment,{children:e.jsxs(d,{templateData:{__meta:i,document:t},children:[e.jsx(c,{name:s}),e.jsxs("div",{className:"centered-container",children:[e.jsx(y,{breadcrumbs:a,baseUrl:r}),e.jsx(l,{name:s,description:n,directoryChildren:o,relativePrefixToRoot:r})]})]})})};export{j as config,F as default,v as getHeadConfig,b as getPath,D as getRedirects,B as transformProps};