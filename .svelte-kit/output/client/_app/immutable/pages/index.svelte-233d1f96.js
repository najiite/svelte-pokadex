import{S as T,i as W,s as j,l as b,a as x,r as y,m as w,n as I,c as E,u as S,h,L as H,p as d,b as v,F as P,v as L,E as A,K as D,M as B,N as F,f as C,d as G,t as q,O,P as R,w as U,x as V,y as J,B as Q,g as X}from"../chunks/index-31cb5493.js";import{w as Y}from"../chunks/index-5c13590d.js";/* empty css                                                    */const z=Y([]),Z=async()=>{const a=(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")).json()).results.map((n,o)=>({id:o+1,name:n.name,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${o+1}.png`}));z.set(a)};Z();function ee(i){let t,s,a,n,o,m,u=i[0].id+"",_,g,k=i[0].name+"",p,l;return{c(){t=b("a"),s=b("img"),o=x(),m=b("h2"),_=y(u),g=y(". "),p=y(k),this.h()},l(f){t=w(f,"A",{class:!0,href:!0});var e=I(t);s=w(e,"IMG",{src:!0,alt:!0}),o=E(e),m=w(e,"H2",{});var r=I(m);_=S(r,u),g=S(r,". "),p=S(r,k),r.forEach(h),e.forEach(h),this.h()},h(){H(s.src,a=i[0].image)||d(s,"src",a),d(s,"alt",n=i[0].name),d(t,"class","py-6 bg-slate-900 text-slate-100 font-bold text-center uppercase rounded-md shadow-sm hover:shadow-md flex flex-col items-center"),d(t,"href",l=`/pokeman/${i[0].id}`)},m(f,e){v(f,t,e),P(t,s),P(t,o),P(t,m),P(m,_),P(m,g),P(m,p)},p(f,[e]){e&1&&!H(s.src,a=f[0].image)&&d(s,"src",a),e&1&&n!==(n=f[0].name)&&d(s,"alt",n),e&1&&u!==(u=f[0].id+"")&&L(_,u),e&1&&k!==(k=f[0].name+"")&&L(p,k),e&1&&l!==(l=`/pokeman/${f[0].id}`)&&d(t,"href",l)},i:A,o:A,d(f){f&&h(t)}}}function te(i,t,s){let{pokeman:a}=t;return i.$$set=n=>{"pokeman"in n&&s(0,a=n.pokeman)},[a]}class ae extends T{constructor(t){super(),W(this,t,te,ee,j,{pokeman:0})}}function M(i,t,s){const a=i.slice();return a[4]=t[s],a}function N(i){let t,s;return t=new ae({props:{pokeman:i[4]}}),{c(){U(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,n){J(t,a,n),s=!0},p(a,n){const o={};n&2&&(o.pokeman=a[4]),t.$set(o)},i(a){s||(C(t.$$.fragment,a),s=!0)},o(a){q(t.$$.fragment,a),s=!1},d(a){Q(t,a)}}}function se(i){let t,s,a,n,o,m,u,_,g,k,p=i[1],l=[];for(let e=0;e<p.length;e+=1)l[e]=N(M(i,p,e));const f=e=>q(l[e],1,1,()=>{l[e]=null});return{c(){t=x(),s=b("h1"),a=y("Welcome to SvelteKit Pokadex"),n=x(),o=b("input"),m=x(),u=b("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){D('[data-svelte="svelte-xfbn0z"]',document.head).forEach(h),t=E(e),s=w(e,"H1",{class:!0});var c=I(s);a=S(c,"Welcome to SvelteKit Pokadex"),c.forEach(h),n=E(e),o=w(e,"INPUT",{class:!0,type:!0,placeholder:!0}),m=E(e),u=w(e,"DIV",{class:!0});var $=I(u);for(let K=0;K<l.length;K+=1)l[K].l($);$.forEach(h),this.h()},h(){document.title="Home | Pokadex built with SvelteKit",d(s,"class","text-4xl text-center my-8 uppercase text-slate-900"),d(o,"class","w-full rounded-md my-10 p-4 border-2 border-slate-300"),d(o,"type","text"),d(o,"placeholder","Search for a Pokemon"),d(u,"class","grid gap-4 md:grid-cols-3 lg:grid-cols-4 grid-cols-2")},m(e,r){v(e,t,r),v(e,s,r),P(s,a),v(e,n,r),v(e,o,r),B(o,i[0]),v(e,m,r),v(e,u,r);for(let c=0;c<l.length;c+=1)l[c].m(u,null);_=!0,g||(k=F(o,"input",i[3]),g=!0)},p(e,[r]){if(r&1&&o.value!==e[0]&&B(o,e[0]),r&2){p=e[1];let c;for(c=0;c<p.length;c+=1){const $=M(e,p,c);l[c]?(l[c].p($,r),C(l[c],1)):(l[c]=N($),l[c].c(),C(l[c],1),l[c].m(u,null))}for(X(),c=p.length;c<l.length;c+=1)f(c);G()}},i(e){if(!_){for(let r=0;r<p.length;r+=1)C(l[r]);_=!0}},o(e){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)q(l[r]);_=!1},d(e){e&&h(t),e&&h(s),e&&h(n),e&&h(o),e&&h(m),e&&h(u),O(l,e),g=!1,k()}}}function le(i,t,s){let a;R(i,z,u=>s(2,a=u));let n="",o=[];function m(){n=this.value,s(0,n)}return i.$$.update=()=>{i.$$.dirty&5&&(n?s(1,o=a.filter(u=>u.name.toLowerCase().includes(n.toLowerCase()))):s(1,o=[...a]))},[n,o,a,m]}class ie extends T{constructor(t){super(),W(this,t,le,se,j,{})}}export{ie as default};