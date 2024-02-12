import{j as s,t as i,$ as c}from"./index-oUtK46dN.js";import"./index-CPH0DYhJ.js";import"./index-D6sq2Auz.js";import{f as m}from"./index-D8_GnGOZ.js";const D=({name:a,description:e})=>{const r=a===null?"About":`About ${a}`;return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"border-b border-gray-300 bg-gray-100 shadow-md rounded-lg p-2 px-4 py-5 sm:p-6",children:[s.jsx("div",{className:"text-xl font-semibold",children:r}),e&&s.jsx("p",{className:"pt-4",children:e})]})})},x=({name:a,list:e})=>{let r;return e&&(r=e.map(t=>s.jsx("li",{children:t},t))),s.jsx(s.Fragment,{children:s.jsxs("div",{children:[s.jsx("div",{className:"text-xl font-semibold mb-4",children:a}),r&&s.jsx("ul",{className:"list-disc pl-6 space-y-2",children:r})]})})},w=({address:a,phone:e,services:r})=>s.jsx(s.Fragment,{children:s.jsx("div",{className:"border-b border-gray-300 bg-gray-100 shadow-md rounded-lg p-2 px-4 py-5 sm:p-6",children:s.jsxs("div",{className:"grid gap-y-3",children:[s.jsx("div",{className:"text-xl font-semibold",children:"Store Details"}),s.jsx(i,{address:a,lines:[["line1","line2"],["city",",","region"]]}),e&&s.jsx("span",{children:s.jsx(c,{href:`tel:${e}`,className:"hover:underline",children:m(e)})}),r&&s.jsx(x,{list:r})]})})}),n=new Date().getDay();function y(){const a=[0,1,2,3,4,5,6],e=[];for(let r=0;r<a.length;r++){let t=a[r];t-n>=0?t=t-n:t=t+7-n,e[r]=t}return{sunday:e[0],monday:e[1],tuesday:e[2],wednesday:e[3],thursday:e[4],friday:e[5],saturday:e[6]}}const u={sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6};function h(a){const e=[];for(const[t,d]of Object.entries(a))e[y()[t]]={key:t,value:d};const r={};return e.forEach(t=>{r[t.key]=t.value}),r}const j=a=>{const e=[];for(const[r,t]of Object.entries(h(a)))e.push(s.jsx(b,{dayName:r,day:t,isToday:p(r)},r));return s.jsx("tbody",{className:"font-normal",children:e})};function p(a){return u[a]===n}function o(a,e){const r=a.split(":");let t=Number(r[0]);const d=r[1],l=t<12||t===24?"AM":"PM";return t=t%12||12,t.toString()+":"+d+(e?l:"")}const b=a=>{const{dayName:e,day:r,isToday:t}=a;return s.jsxs("tr",{className:t?"bg-gray-200 font-bold":"",children:[s.jsx("td",{className:"capitalize text-left pl-1 pr-4",children:s.jsx("span",{children:e})}),!r.isClosed&&s.jsx("td",{className:"pr-1",children:s.jsxs("span",{children:[o(r.openIntervals[0].start,!0)," -"," ",o(r.openIntervals[0].end,!0)]})}),r.isClosed&&s.jsx("td",{className:"pr-1",children:s.jsx("span",{children:"Closed"})})]})},I=a=>{const{title:e,hours:r}=a;return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"border-b border-gray-300 bg-gray-100 shadow-md rounded-lg p-2 px-4 py-5 sm:p-6",children:[s.jsx("div",{className:"text-xl font-semibold mb-4",children:e}),s.jsxs("table",{children:[s.jsx("thead",{className:"sr-only",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Day of the Week"}),s.jsx("th",{children:"Hours"})]})}),j(r)]})]})})};export{D as A,w as D,I as H};