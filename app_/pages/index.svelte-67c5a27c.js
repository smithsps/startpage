import{S as $,i as ee,s as te,e as x,t as P,k as V,c as E,a as S,h as L,d as _,m as H,b,g as R,J as u,K as A,L as Z,M as ae,N as K,O as se,j as Y,v as re,P as le}from"../chunks/vendor-7e205e56.js";const B={categories:[{name:"Email",class:"text-emerald-500 border-emerald-500",bookmarks:[{name:"Gmail",href:"https://mail.google.com/mail/u/0/"},{name:"Outlook",href:"https://outlook.office.com/mail/"},{name:"Runbox",href:"https://runbox.com/app/"}]},{name:"Home Lab",class:"text-indigo-600 border-indigo-600",bookmarks:[{name:"Unraid",href:""},{name:"Seedbox",href:""}]},{name:"Discussion",class:"text-amber-700 border-amber-700",bookmarks:[{name:"Hacker News",href:"https://news.ycombinator.com"},{name:"Lobste.rs",href:"https://lobste.rs/"},{name:"Reddit",href:"https://www.reddit.com/"}]},{name:"Media",class:"text-rose-600 border-rose-600",bookmarks:[{name:"Twitch",href:"https://www.twitch.tv/"},{name:"Youtube",href:"https://www.youtube.com/"}]}]};function F(a,t,e){const n=a.slice();return n[8]=t[e],n}function Q(a,t,e){const n=a.slice();return n[11]=t[e],n}function W(a){let t,e,n=a[11].name+"",c,m,s;return{c(){t=x("div"),e=x("a"),c=P(n),s=V(),this.h()},l(v){t=E(v,"DIV",{class:!0});var g=S(t);e=E(g,"A",{href:!0});var i=S(e);c=L(i,n),i.forEach(_),s=H(g),g.forEach(_),this.h()},h(){b(e,"href",m=a[11].href),b(t,"class","")},m(v,g){R(v,t,g),u(t,e),u(e,c),u(t,s)},p:A,d(v){v&&_(t)}}}function X(a){let t,e,n=a[8].name+"",c,m,s,v,g,i=a[8].bookmarks,h=[];for(let r=0;r<i.length;r+=1)h[r]=W(Q(a,i,r));return{c(){t=x("div"),e=x("span"),c=P(n),m=V(),s=x("div");for(let r=0;r<h.length;r+=1)h[r].c();v=V(),this.h()},l(r){t=E(r,"DIV",{class:!0});var d=S(t);e=E(d,"SPAN",{class:!0});var l=S(e);c=L(l,n),l.forEach(_),m=H(d),s=E(d,"DIV",{class:!0});var k=S(s);for(let y=0;y<h.length;y+=1)h[y].l(k);k.forEach(_),v=H(d),d.forEach(_),this.h()},h(){b(e,"class","text-xl"),b(s,"class","ml-2"),b(t,"class",g=["border w-80 py-2 pl-2 w-100",T(a[8].bookmarks.length),a[8].class].join(" "))},m(r,d){R(r,t,d),u(t,e),u(e,c),u(t,m),u(t,s);for(let l=0;l<h.length;l+=1)h[l].m(s,null);u(t,v)},p(r,d){if(d&0){i=r[8].bookmarks;let l;for(l=0;l<i.length;l+=1){const k=Q(r,i,l);h[l]?h[l].p(k,d):(h[l]=W(k),h[l].c(),h[l].m(s,null))}for(;l<h.length;l+=1)h[l].d(1);h.length=i.length}},d(r){r&&_(t),Z(h,r)}}}function oe(a){var z,C;let t,e,n,c,m=((z=a[5])!=null?z:0)+"",s,v,g=((C=a[4])!=null?C:0)+"",i,h,r,d,l,k,y,j,U,D=B.categories,p=[];for(let o=0;o<D.length;o+=1)p[o]=X(F(a,D,o));return{c(){t=V(),e=x("div"),n=x("div"),c=x("h2"),s=P(m),v=P(" : "),i=P(g),h=V(),r=x("div"),d=x("input"),l=V(),k=x("div"),y=x("div");for(let o=0;o<p.length;o+=1)p[o].c();this.h()},l(o){ae('[data-svelte="svelte-1dnowph"]',document.head).forEach(_),t=H(o),e=E(o,"DIV",{class:!0});var w=S(e);n=E(w,"DIV",{class:!0});var M=S(n);c=E(M,"H2",{class:!0});var f=S(c);s=L(f,m),v=L(f," : "),i=L(f,g),f.forEach(_),M.forEach(_),h=H(w),r=E(w,"DIV",{class:!0});var N=S(r);d=E(N,"INPUT",{class:!0,type:!0,placeholder:!0}),N.forEach(_),l=H(w),k=E(w,"DIV",{class:!0});var G=S(k);y=E(G,"DIV",{class:!0});var J=S(y);for(let q=0;q<p.length;q+=1)p[q].l(J);J.forEach(_),G.forEach(_),w.forEach(_),this.h()},h(){document.title="Home - Start Page",b(c,"class","text-8xl text-slate-50 transition-opacity duration-150"),K(c,"opacity-0",!a[2]),b(n,"class","mx-auto mt-32"),b(d,"class","bg-zinc-800 text-4xl text-white border-none"),b(d,"type","text"),b(d,"placeholder","enter your action"),b(r,"class","mx-auto mt-10"),b(y,"class","grid grid-flow-col grid-rows-6 gap-6 text-white"),b(k,"class","mx-auto row-span-2"),b(e,"class","grid grid-rows-4")},m(o,I){R(o,t,I),R(o,e,I),u(e,n),u(n,c),u(c,s),u(c,v),u(c,i),u(e,h),u(e,r),u(r,d),a[6](d),u(e,l),u(e,k),u(k,y);for(let w=0;w<p.length;w+=1)p[w].m(y,null);j||(U=se(d,"keyup",a[7]),j=!0)},p(o,[I]){var w,M;if(I&32&&m!==(m=((w=o[5])!=null?w:0)+"")&&Y(s,m),I&16&&g!==(g=((M=o[4])!=null?M:0)+"")&&Y(i,g),I&4&&K(c,"opacity-0",!o[2]),I&2){D=B.categories;let f;for(f=0;f<D.length;f+=1){const N=F(o,D,f);p[f]?p[f].p(N,I):(p[f]=X(N),p[f].c(),p[f].m(y,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=D.length}},i:A,o:A,d(o){o&&_(t),o&&_(e),a[6](null),Z(p,o),j=!1,U()}}}function O(a){console.log(a)}function T(a){switch(a){case 1:return"row-span-1";case 2:return"row-span-2";case 3:return"row-span-3";case 4:return"row-span-4"}throw Error("missing row-span-"+a)}function ne(a,t,e){let n,c,m,s;re(()=>{e(2,s=new Date),m.focus();const i=setInterval(()=>{e(2,s=new Date)},1e3);return()=>{clearInterval(i)}});function v(i){le[i?"unshift":"push"](()=>{m=i,e(3,m)})}const g=({target:{value:i}})=>O(i);return a.$$.update=()=>{a.$$.dirty&4&&e(5,n=s==null?void 0:s.getHours()),a.$$.dirty&4&&e(4,c=String(s==null?void 0:s.getMinutes()).padStart(2,"0"))},[O,T,s,m,c,n,v,g]}class ie extends ${constructor(t){super();ee(this,t,ne,oe,te,{handleSearch:0,rowSpan:1})}get handleSearch(){return O}get rowSpan(){return T}}export{ie as default};