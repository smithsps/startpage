import{S as C,i as J,s as K,k as w,e as h,t as H,L,d as o,m as x,c as p,a as I,h as M,b as v,g as T,J as r,M as j,N as R,j as k,K as z,v as U}from"../chunks/vendor-7131b014.js";function A(l){let u,e,d,f,n,t,_,g,D,S,m,s,V,E,b,q;return{c(){u=w(),e=h("div"),d=h("div"),f=w(),n=h("div"),t=h("h2"),_=H(l[2]),g=H(" : "),D=H(l[1]),S=w(),m=h("div"),s=h("input"),V=w(),E=h("div"),this.h()},l(a){L('[data-svelte="svelte-1dnowph"]',document.head).forEach(o),u=x(a),e=p(a,"DIV",{class:!0});var i=I(e);d=p(i,"DIV",{}),I(d).forEach(o),f=x(i),n=p(i,"DIV",{class:!0});var N=I(n);t=p(N,"H2",{class:!0});var y=I(t);_=M(y,l[2]),g=M(y," : "),D=M(y,l[1]),y.forEach(o),N.forEach(o),S=x(i),m=p(i,"DIV",{class:!0});var P=I(m);s=p(P,"INPUT",{class:!0,type:!0,placeholder:!0}),P.forEach(o),V=x(i),E=p(i,"DIV",{}),I(E).forEach(o),i.forEach(o),this.h()},h(){document.title="Home - Start Page",v(t,"class","text-8xl text-slate-50"),v(n,"class","mx-auto"),v(s,"class","bg-zinc-800 text-4xl text-white border-none"),v(s,"type","text"),v(s,"placeholder","enter your action"),s.autofocus=!0,v(m,"class","mx-auto mt-6"),v(e,"class","grid grid-rows-4")},m(a,c){T(a,u,c),T(a,e,c),r(e,d),r(e,f),r(e,n),r(n,t),r(t,_),r(t,g),r(t,D),r(e,S),r(e,m),r(m,s),j(s,l[0]),r(e,V),r(e,E),s.focus(),b||(q=R(s,"input",l[4]),b=!0)},p(a,[c]){c&4&&k(_,a[2]),c&2&&k(D,a[1]),c&1&&s.value!==a[0]&&j(s,a[0])},i:z,o:z,d(a){a&&o(u),a&&o(e),b=!1,q()}}}function B(l,u,e){let d,f,n="",t=new Date;U(()=>{const g=setInterval(()=>{e(3,t=new Date)},1e3);return()=>{clearInterval(g)}});function _(){n=this.value,e(0,n)}return l.$$.update=()=>{l.$$.dirty&8&&e(2,d=t==null?void 0:t.getHours()),l.$$.dirty&8&&e(1,f=String(t==null?void 0:t.getMinutes()).padStart(2,"0"))},[n,f,d,t,_]}class G extends C{constructor(u){super();J(this,u,B,A,K,{})}}export{G as default};