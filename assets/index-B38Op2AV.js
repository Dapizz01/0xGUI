var ke=Object.defineProperty;var $e=(t,e,n)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>($e(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function $(){}function xe(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function he(t){return t()}function ae(){return Object.create(null)}function R(t){t.forEach(he)}function _e(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ce(t){return Object.keys(t).length===0}function s(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function k(){return y(" ")}function ge(){return y("")}function O(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t){return Array.from(t.childNodes)}function Z(t,e){e=""+e,t.data!==e&&(t.data=e)}function de(t,e){t.value=e??""}function D(t,e,n){t.classList.toggle(e,!!n)}let H;function M(t){H=t}function be(){if(!H)throw new Error("Function called outside component initialization");return H}function Se(t){be().$$.on_mount.push(t)}const P=[],ue=[];let G=[];const fe=[],Me=Promise.resolve();let ne=!1;function Te(){ne||(ne=!0,Me.then(ie))}function le(t){G.push(t)}const te=new Set;let N=0;function ie(){if(N!==0)return;const t=H;do{try{for(;N<P.length;){const e=P[N];N++,M(e),Ee(e.$$)}}catch(e){throw P.length=0,N=0,e}for(M(null),P.length=0,N=0;ue.length;)ue.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];te.has(n)||(te.add(n),n())}G.length=0}while(P.length);for(;fe.length;)fe.pop()();ne=!1,te.clear(),M(t)}function Ee(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(le)}}function Oe(t){const e=[],n=[];G.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),G=e}const F=new Set;let U;function re(){U={r:0,c:[],p:U}}function oe(){U.r||R(U.c),U=U.p}function S(t,e){t&&t.i&&(F.delete(t),t.i(e))}function E(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),U.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function W(t,e){const n=e.token={};function r(l,o,c,a){if(e.token!==n)return;e.resolved=a;let p=e.ctx;c!==void 0&&(p=p.slice(),p[c]=a);const i=l&&(e.current=l)(p);let u=!1;e.block&&(e.blocks?e.blocks.forEach((m,h)=>{h!==o&&m&&(re(),E(m,1,1,()=>{e.blocks[h]===m&&(e.blocks[h]=null)}),oe())}):e.block.d(1),i.c(),S(i,1),i.m(e.mount(),e.anchor),u=!0),e.block=i,e.blocks&&(e.blocks[o]=i),u&&ie()}if(xe(t)){const l=be();if(t.then(o=>{M(l),r(e.then,1,e.value,o),M(null)},o=>{if(M(l),r(e.catch,2,e.error,o),M(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ve(t,e,n){const r=e.slice(),{resolved:l}=t;t.current===t.then&&(r[t.value]=l),t.current===t.catch&&(r[t.error]=l),t.block.p(r,n)}function ce(t){t&&t.c()}function z(t,e,n){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),le(()=>{const o=t.$$.on_mount.map(he).filter(_e);t.$$.on_destroy?t.$$.on_destroy.push(...o):R(o),t.$$.on_mount=[]}),l.forEach(le)}function J(t,e){const n=t.$$;n.fragment!==null&&(Oe(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Re(t,e){t.$$.dirty[0]===-1&&(P.push(t),Te(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,r,l,o,c=null,a=[-1]){const p=H;M(t);const i=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:l,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:ae(),dirty:a,skip_bound:!1,root:e.target||p.$$.root};c&&c(i.root);let u=!1;if(i.ctx=n?n(t,e.props||{},(m,h,...w)=>{const L=w.length?w[0]:h;return i.ctx&&l(i.ctx[m],i.ctx[m]=L)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](L),u&&Re(t,m)),h}):[],i.update(),u=!0,R(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const m=Le(e.target);i.fragment&&i.fragment.l(m),m.forEach(b)}else i.fragment&&i.fragment.c();e.intro&&S(t.$$.fragment),z(t,e.target,e.anchor),ie()}M(p)}class Q{constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){J(this,1),this.$destroy=$}$on(e,n){if(!_e(n))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);function Ue(t){let e;return{c(){e=f("div"),e.innerHTML='<div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold">0xGUI</h1> <p class="py-6">An easy way to transfer files over the Internet. For free.</p></div></div>',d(e,"class","hero")},m(n,r){v(n,e,r)},p:$,i:$,o:$,d(n){n&&b(e)}}}class Ne extends Q{constructor(e){super(),K(this,e,null,Ue,q,{})}}const we="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3esuccess%3c/title%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='add-copy'%20fill='%23000000'%20transform='translate(42.666667,%2042.666667)'%3e%3cpath%20d='M213.333333,3.55271368e-14%20C95.51296,3.55271368e-14%203.55271368e-14,95.51296%203.55271368e-14,213.333333%20C3.55271368e-14,331.153707%2095.51296,426.666667%20213.333333,426.666667%20C331.153707,426.666667%20426.666667,331.153707%20426.666667,213.333333%20C426.666667,95.51296%20331.153707,3.55271368e-14%20213.333333,3.55271368e-14%20Z%20M213.333333,384%20C119.227947,384%2042.6666667,307.43872%2042.6666667,213.333333%20C42.6666667,119.227947%20119.227947,42.6666667%20213.333333,42.6666667%20C307.43872,42.6666667%20384,119.227947%20384,213.333333%20C384,307.43872%20307.438933,384%20213.333333,384%20Z%20M293.669333,137.114453%20L323.835947,167.281067%20L192,299.66912%20L112.916693,220.585813%20L143.083307,190.4192%20L192,239.335893%20L293.669333,137.114453%20Z'%20id='Shape'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ye="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eerror%3c/title%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='add'%20fill='%23000000'%20transform='translate(42.666667,%2042.666667)'%3e%3cpath%20d='M213.333333,3.55271368e-14%20C331.136,3.55271368e-14%20426.666667,95.5306667%20426.666667,213.333333%20C426.666667,331.136%20331.136,426.666667%20213.333333,426.666667%20C95.5306667,426.666667%203.55271368e-14,331.136%203.55271368e-14,213.333333%20C3.55271368e-14,95.5306667%2095.5306667,3.55271368e-14%20213.333333,3.55271368e-14%20Z%20M213.333333,42.6666667%20C119.232,42.6666667%2042.6666667,119.232%2042.6666667,213.333333%20C42.6666667,307.434667%20119.232,384%20213.333333,384%20C307.434667,384%20384,307.434667%20384,213.333333%20C384,119.232%20307.434667,42.6666667%20213.333333,42.6666667%20Z%20M262.250667,134.250667%20L292.416,164.416%20L243.498667,213.333333%20L292.416,262.250667%20L262.250667,292.416%20L213.333333,243.498667%20L164.416,292.416%20L134.250667,262.250667%20L183.168,213.333333%20L134.250667,164.416%20L164.416,134.250667%20L213.333333,183.168%20L262.250667,134.250667%20Z'%20id='error'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Pe="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20stroke='%231C274C'%20stroke-width='1.5'/%3e%3cpath%20d='M12%2017V11'%20stroke='%231C274C'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3ccircle%20cx='1'%20cy='1'%20r='1'%20transform='matrix(1%200%200%20-1%2011%209)'%20fill='%231C274C'/%3e%3c/svg%3e";function Ge(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Ve,then:He,catch:Be,value:7,error:8};return W(n=t[0],r),{c(){e=ge(),r.block.c()},m(l,o){v(l,e,o),r.block.m(l,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e},p(l,o){t=l,r.ctx=t,o&1&&n!==(n=t[0])&&W(n,r)||ve(r,t,o)},d(l){l&&b(e),r.block.d(l),r.token=null,r=null}}}function Ae(t){let e,n,r,l,o,c,a,p,i,u,m;return{c(){e=f("div"),n=f("h2"),n.textContent="Send a file.",r=k(),l=f("div"),o=f("div"),o.innerHTML=`<img src="${Pe}" class="stroke-info shrink-0 w-6 h-6" alt="Info icon"/> <div><h3 class="font-bold">Details</h3> <div>Using this service, your file will be freely available on the Internet.
                            As such, it&#39;s <b>strongly recommended</b> to not send any kind of personal
                            information.</div> <h3 class="font-bold">Limitations</h3> <div>All of the limitations listed at <a href="https://0x0.st">0x0.st</a>,
                            plus a fixed expire date of 7 days.</div></div>`,c=k(),a=f("input"),p=k(),i=f("button"),i.textContent="Upload",d(n,"class","font-bold text-lg"),d(o,"class","alert"),d(a,"type","file"),d(a,"class","file-input file-input-bordered file-input-primary block m-auto my-4 border-2"),d(a,"id","input_file"),d(i,"class","btn btn-primary max-w-40 block m-auto mt-4"),D(i,"btn-disabled",t[1]===""),d(l,"class","pt-4 text-center"),d(e,"id","send_form")},m(h,w){v(h,e,w),s(e,n),s(e,r),s(e,l),s(l,o),s(l,c),s(l,a),s(l,p),s(l,i),u||(m=[O(a,"change",t[5]),O(i,"click",t[4])],u=!0)},p(h,w){w&2&&D(i,"btn-disabled",h[1]==="")},d(h){h&&b(e),u=!1,R(m)}}}function Be(t){let e,n,r,l,o,c,a=t[8]+"",p,i;return{c(){e=f("div"),n=f("figure"),n.innerHTML=`<img src="${ye}" alt="Error icon"/>`,r=k(),l=f("div"),o=f("h2"),o.textContent="Something went wrong...",c=y(`
                    The file hasn't been correctly sent (error `),p=y(a),i=y(`). Wait some time and try
                    again.`),d(n,"class","w-1/4"),d(o,"class","card-title"),d(l,"class","card-body"),d(e,"class","card items-center")},m(u,m){v(u,e,m),s(e,n),s(e,r),s(e,l),s(l,o),s(l,c),s(l,p),s(l,i)},p(u,m){m&1&&a!==(a=u[8]+"")&&Z(p,a)},d(u){u&&b(e)}}}function He(t){let e,n,r,l,o,c,a,p=t[3](t[7])+"",i,u,m,h=t[7]+"",w,L;return{c(){e=f("div"),n=f("figure"),n.innerHTML=`<img src="${we}" alt="Success icon"/>`,r=k(),l=f("div"),o=f("h2"),o.textContent="Success!",c=y(`
                    The file has been correctly uploaded. Share this link to other people:
                    `),a=f("div"),i=y(p),u=y(`
                    Or, alternatively, just share the file code:
                    `),m=f("div"),w=y(h),L=y(`
                    Remember, the file will stay online for 7 days.`),d(n,"class","w-1/4"),d(o,"class","card-title"),d(a,"class","alert"),d(m,"class","alert"),d(l,"class","card-body"),d(e,"class","card items-center")},m(x,I){v(x,e,I),s(e,n),s(e,r),s(e,l),s(l,o),s(l,c),s(l,a),s(a,i),s(l,u),s(l,m),s(m,w),s(l,L)},p(x,I){I&1&&p!==(p=x[3](x[7])+"")&&Z(i,p),I&1&&h!==(h=x[7]+"")&&Z(w,h)},d(x){x&&b(e)}}}function Ve(t){let e;return{c(){e=f("div"),e.innerHTML='<span class="loading loading-spinner loading-lg"></span>',d(e,"class","text-center")},m(n,r){v(n,e,r)},p:$,d(n){n&&b(e)}}}function je(t){let e;function n(o,c){return o[2]?Ae:Ge}let r=n(t),l=r(t);return{c(){e=f("div"),l.c(),d(e,"class","modal-box")},m(o,c){v(o,e,c),l.m(e,null)},p(o,[c]){r===(r=n(o))&&l?l.p(o,c):(l.d(1),l=r(o),l&&(l.c(),l.m(e,null)))},i:$,o:$,d(o){o&&b(e),l.d()}}}function Fe(t,e,n){const r=u=>window.location.origin+window.location.pathname+"?file="+u,l=async()=>{n(2,p=!1);const u=new FormData;let m=document.getElementById("input_file").files[0];u.append("file",m,"@"+m.name);const h=await fetch("https://promaobfghoibelpbtwf.supabase.co/functions/v1/send_file",{method:"POST",body:u});return h.ok?(await h.text()).split("/").pop():h.status},o=()=>{n(0,c=l())};let c,a="",p=!0;function i(){a=this.value,n(1,a)}return[c,a,p,r,o,i]}class Ze extends Q{constructor(e){super(),K(this,e,Fe,je,q,{})}}function De(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Je,then:ze,catch:qe,value:0,error:6};return W(n=t[2],r),{c(){e=ge(),r.block.c()},m(l,o){v(l,e,o),r.block.m(l,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e},p(l,o){t=l,r.ctx=t,o&4&&n!==(n=t[2])&&W(n,r)||ve(r,t,o)},d(l){l&&b(e),r.block.d(l),r.token=null,r=null}}}function We(t){let e,n,r,l,o,c,a,p;return{c(){e=f("h3"),e.textContent="Receive a file.",n=k(),r=f("div"),l=f("input"),o=k(),c=f("button"),c.textContent="Download",d(e,"class","font-bold text-lg"),d(l,"type","text"),d(l,"placeholder","Type the file code"),d(l,"class","file-input file-input-bordered file-input-secondary block m-auto border-2"),d(c,"class","btn block m-auto mt-4 btn-secondary"),D(c,"btn-disabled",t[0]===""),d(r,"class","pt-4")},m(i,u){v(i,e,u),v(i,n,u),v(i,r,u),s(r,l),de(l,t[0]),s(r,o),s(r,c),a||(p=[O(l,"input",t[4]),O(c,"click",t[3])],a=!0)},p(i,u){u&1&&l.value!==i[0]&&de(l,i[0]),u&1&&D(c,"btn-disabled",i[0]==="")},d(i){i&&(b(e),b(n),b(r)),a=!1,R(p)}}}function qe(t){let e,n,r,l,o,c,a=t[6]+"",p,i;return{c(){e=f("div"),n=f("figure"),n.innerHTML=`<img src="${ye}" alt="Error icon"/>`,r=k(),l=f("div"),o=f("h2"),o.textContent="Something went wrong...",c=y(`
                    The file hasn't been correctly downloaded (error `),p=y(a),i=y(`). Wait some time and
                    try again.`),d(n,"class","w-1/4"),d(o,"class","card-title"),d(l,"class","card-body"),d(e,"class","card items-center")},m(u,m){v(u,e,m),s(e,n),s(e,r),s(e,l),s(l,o),s(l,c),s(l,p),s(l,i)},p(u,m){m&4&&a!==(a=u[6]+"")&&Z(p,a)},d(u){u&&b(e)}}}function ze(t){let e;return{c(){e=f("div"),e.innerHTML=`<figure class="w-1/4"><img src="${we}" alt="Success icon"/></figure> <div class="card-body"><h2 class="card-title">Success!</h2>
                    The file is being downloaded right now.</div>`,d(e,"class","card items-center")},m(n,r){v(n,e,r)},p:$,d(n){n&&b(e)}}}function Je(t){let e;return{c(){e=f("div"),e.innerHTML='<span class="loading loading-spinner loading-lg"></span>',d(e,"class","text-center")},m(n,r){v(n,e,r)},p:$,d(n){n&&b(e)}}}function Ke(t){let e;function n(o,c){return o[1]?We:De}let r=n(t),l=r(t);return{c(){e=f("div"),l.c(),d(e,"class","modal-box")},m(o,c){v(o,e,c),l.m(e,null)},p(o,[c]){r===(r=n(o))&&l?l.p(o,c):(l.d(1),l=r(o),l&&(l.c(),l.m(e,null)))},i:$,o:$,d(o){o&&b(e),l.d()}}}function Qe(t,e,n){let{filename:r}=e;const l=async()=>{n(1,c=!1);const i=await fetch("https://promaobfghoibelpbtwf.supabase.co/functions/v1/fetch_file",{method:"POST",body:JSON.stringify({filename:r})});if(i.ok){let u=await i.blob();for(let m in i.headers.keys())console.log(m),console.log(i.headers.get(m));if(u!=null){let m=window.URL.createObjectURL(u),h=document.createElement("a");h.href=m,h.download="file",document.body.appendChild(h),h.click(),h.remove()}console.log(u)}else return i.status},o=()=>{n(2,a=l())};let c=!0,a;function p(){r=this.value,n(0,r)}return t.$$set=i=>{"filename"in i&&n(0,r=i.filename)},[r,c,a,o,p]}class Xe extends Q{constructor(e){super(),K(this,e,Qe,Ke,q,{filename:0})}}function me(t){let e,n;return e=new Ze({}),{c(){ce(e.$$.fragment)},m(r,l){z(e,r,l),n=!0},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){J(e,r)}}}function pe(t){let e,n;return e=new Xe({props:{filename:t[2]}}),{c(){ce(e.$$.fragment)},m(r,l){z(e,r,l),n=!0},p(r,l){const o={};l&4&&(o.filename=r[2]),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){J(e,r)}}}function Ye(t){let e,n,r,l,o,c,a,p,i,u,m,h,w,L,x,I,T,X,A,V,j,Y,se;n=new Ne({});let g=t[0]&&me(),_=t[1]&&pe(t);return{c(){e=f("main"),ce(n.$$.fragment),r=k(),l=f("div"),o=y(`I want to...
        `),c=f("div"),a=f("button"),a.textContent="send",p=k(),i=f("button"),i.textContent="receive",u=y(`
        a file.`),m=k(),h=f("dialog"),g&&g.c(),w=k(),L=f("form"),x=f("button"),x.textContent="close",I=k(),T=f("dialog"),_&&_.c(),X=k(),A=f("form"),V=f("button"),V.textContent="close",d(a,"class","btn btn-primary"),d(i,"class","btn btn-secondary"),d(c,"class","group"),d(l,"class","text-center"),d(L,"method","dialog"),d(L,"class","modal-backdrop"),d(h,"id","send_modal"),d(h,"class","modal"),d(A,"method","dialog"),d(A,"class","modal-backdrop"),d(T,"id","receive_modal"),d(T,"class","modal")},m(C,B){v(C,e,B),z(n,e,null),s(e,r),s(e,l),s(l,o),s(l,c),s(c,a),s(c,p),s(c,i),s(l,u),s(e,m),s(e,h),g&&g.m(h,null),s(h,w),s(h,L),s(L,x),s(e,I),s(e,T),_&&_.m(T,null),s(T,X),s(T,A),s(A,V),j=!0,Y||(se=[O(a,"click",t[3]),O(i,"click",t[4]),O(x,"click",t[5]),O(V,"click",t[6])],Y=!0)},p(C,[B]){C[0]?g?B&1&&S(g,1):(g=me(),g.c(),S(g,1),g.m(h,w)):g&&(re(),E(g,1,1,()=>{g=null}),oe()),C[1]?_?(_.p(C,B),B&2&&S(_,1)):(_=pe(C),_.c(),S(_,1),_.m(T,X)):_&&(re(),E(_,1,1,()=>{_=null}),oe())},i(C){j||(S(n.$$.fragment,C),S(g),S(_),j=!0)},o(C){E(n.$$.fragment,C),E(g),E(_),j=!1},d(C){C&&b(e),J(n),g&&g.d(),_&&_.d(),Y=!1,R(se)}}}function et(t,e,n){let r=!0,l=!0,o=new URLSearchParams(window.location.search).get("file");Se(()=>{console.log(o),o!==""&&o!==null&&a()});const c=()=>{document.getElementById("send_modal").showModal(),n(0,r=!0)},a=()=>{document.getElementById("receive_modal").showModal(),n(1,l=!0)};return[r,l,o,c,a,()=>n(0,r=!1),()=>{n(1,l=!1),n(2,o="")}]}class tt extends Q{constructor(e){super(),K(this,e,et,Ye,q,{})}}new tt({target:document.getElementById("app")});
