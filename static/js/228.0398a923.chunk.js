"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_=self.webpackChunkgoit_react_hw_08_phonebook_||[]).push([[228],{9228:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,o,i,a,s,d,c,l,p,u,x,f,h,g,m=t(885),b=t(2791),Z=t(9434),v=t(3634),w=t(6916),j=function(n){return n.contacts.items},y=function(n){return n.contacts.isLoading},P=function(n){return Boolean(n.contacts.items.length)},C=(0,w.P1)([j,function(n){return n.contacts.filter}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),k=t(168),z=t(6444),_=z.ZP.form(r||(r=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 400px;\n  padding: 20px;\n  border: 1px solid #064927;\n  border-radius: 4px;\n"]))),L=z.ZP.label(o||(o=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),A=z.ZP.input(i||(i=(0,k.Z)(["\n  font-size: 16px;\n  padding: 5px 15px;\n  border: 1px solid #2c7953;\n  border-radius: 4px;\n"]))),F=z.ZP.button(a||(a=(0,k.Z)(["\n  display: block;\n  width: 200px;\n  margin-top: 10px;\n  padding: 5px;\n  border: 1px solid #2c7953;\n  border-radius: 4px;\n  cursor: pointer;\n\n  color: #064927;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n\n  :hover {\n    font-weight: 600;\n  }\n"]))),I=t(184),N=function(){var n=(0,Z.v9)(j),e=(0,Z.I0)(),t=(0,b.useState)(""),r=(0,m.Z)(t,2),o=r[0],i=r[1],a=(0,b.useState)(""),s=(0,m.Z)(a,2),d=s[0],c=s[1],l=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?i(r):"number"===t&&c(r)};return(0,I.jsxs)(_,{autoComplete:"off",onSubmit:function(t){if(t.preventDefault(),n.map((function(n){return n.name.toLocaleLowerCase()})).some((function(n){return n===o.toLocaleLowerCase()})))return alert("".concat(o," is already in contacts"));var r={contactName:o,phone:d};console.log(r),e((0,v.uK)(r)),i(""),c("")},children:[(0,I.jsxs)(L,{htmlFor:"name",children:["Name",(0,I.jsx)(A,{type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:l,required:!0})]}),(0,I.jsxs)(L,{htmlFor:"number",children:["Number",(0,I.jsx)(A,{type:"tel",name:"number",value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:l,required:!0})]}),(0,I.jsx)(F,{type:"submit",children:"Add contact"})]})},S=z.ZP.ul(s||(s=(0,k.Z)(["\n  width: 350px;\n  margin: 0;\n  padding: 20px;\n  list-style: circle;\n"]))),D=z.ZP.li(d||(d=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"]))),q=z.ZP.p(c||(c=(0,k.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),B=z.ZP.button(l||(l=(0,k.Z)(["\n  display: block;\n  width: 100px;\n  height: 30px;\n  padding: 5px;\n  border: 1px solid #2c7953;\n  border-radius: 4px;\n  cursor: pointer;\n\n  color: #064927;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n\n  :hover {\n    font-weight: 600;\n  }\n"]))),K=function(){var n=(0,Z.v9)(C),e=(0,Z.v9)(y),t=(0,Z.I0)();return(0,I.jsx)(S,{children:n.map((function(n){var r=n.id,o=n.name,i=n.number;return(0,I.jsxs)(D,{children:[(0,I.jsxs)(q,{children:[o,": ",i]}),(0,I.jsx)(B,{onClick:function(){return n=r,void t((0,v.GK)(n));var n},disabled:e,children:"Delete"})]},r)}))})},E=t(1538),G=z.ZP.div(p||(p=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 300px;\n"]))),J=z.ZP.label(u||(u=(0,k.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),M=z.ZP.input(x||(x=(0,k.Z)(["\n  font-size: 16px;\n  padding: 5px 15px;\n  border: 1px solid #2c7953;\n  border-radius: 4px;\n"]))),$=function(){var n=(0,b.useState)(""),e=(0,m.Z)(n,2),t=e[0],r=e[1],o=(0,Z.I0)();return(0,I.jsxs)(G,{children:[(0,I.jsx)(J,{htmlFor:"filter",children:"Find contact by name"}),(0,I.jsx)(M,{type:"text",id:"filter",value:t,onChange:function(n){n.preventDefault(),r(n.target.value),o((0,E.x)(n.target.value))}})]})},H=z.ZP.section(f||(f=(0,k.Z)(["\n  color: #064927;\n  padding: 20px 0;\n"]))),O=z.ZP.h2(h||(h=(0,k.Z)(["\n  margin: 0 0 30px 0;\n"]))),Q=function(n){var e=n.title,t=n.children;return(0,I.jsxs)(H,{children:[(0,I.jsx)(O,{children:e}),t]})},R=z.ZP.div(g||(g=(0,k.Z)(["\n  /* width: 100vh;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  padding: 40px; */\n  display: flex;\n  gap: 50px;\n  padding: 30px;\n  /* background-color: #d8edc5a3; */\n  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */\n"]))),T=function(){var n=(0,Z.v9)(P),e=(0,Z.I0)();return(0,b.useEffect)((function(){n||e((0,v.yF)())}),[e,n]),(0,I.jsxs)(R,{children:[(0,I.jsx)(Q,{title:"Phonebook",children:(0,I.jsx)(N,{})}),(0,I.jsxs)(Q,{title:"Contacts",children:[(0,I.jsx)($,{}),n&&(0,I.jsx)(K,{})]})]})}}}]);
//# sourceMappingURL=228.0398a923.chunk.js.map