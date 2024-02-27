var Te=Object.defineProperty;var Ke=(t,e,n)=>e in t?Te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var se=(t,e,n)=>(Ke(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function v(){}function Be(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function xe(t){return t()}function _e(){return Object.create(null)}function P(t){t.forEach(xe)}function Ce(t){return typeof t=="function"}function V(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ze(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function ye(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function k(){return B(" ")}function Le(){return B("")}function N(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function s(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ne(t){return Array.from(t.childNodes)}function oe(t,e){e=""+e,t.data!==e&&(t.data=e)}function ae(t,e){t.value=e??""}function ie(t,e,n){t.classList.toggle(e,!!n)}let ee;function H(t){ee=t}function Me(){if(!ee)throw new Error("Function called outside component initialization");return ee}function He(t){Me().$$.on_mount.push(t)}const F=[],be=[];let J=[];const ve=[],Pe=Promise.resolve();let de=!1;function qe(){de||(de=!0,Pe.then(he))}function fe(t){J.push(t)}const ue=new Set;let D=0;function he(){if(D!==0)return;const t=ee;do{try{for(;D<F.length;){const e=F[D];D++,H(e),Re(e.$$)}}catch(e){throw F.length=0,D=0,e}for(H(null),F.length=0,D=0;be.length;)be.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];ue.has(n)||(ue.add(n),n())}J.length=0}while(F.length);for(;ve.length;)ve.pop()();de=!1,ue.clear(),H(t)}function Re(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}function Ue(t){const e=[],n=[];J.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),J=e}const le=new Set;let U;function pe(){U={r:0,c:[],p:U}}function me(){U.r||P(U.c),U=U.p}function K(t,e){t&&t.i&&(le.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(le.has(t))return;le.add(t),U.c.push(()=>{le.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function te(t,e){const n=e.token={};function r(l,o,c,i){if(e.token!==n)return;e.resolved=i;let u=e.ctx;c!==void 0&&(u=u.slice(),u[c]=i);const a=l&&(e.current=l)(u);let f=!1;e.block&&(e.blocks?e.blocks.forEach((m,_)=>{_!==o&&m&&(pe(),Z(m,1,1,()=>{e.blocks[_]===m&&(e.blocks[_]=null)}),me())}):e.block.d(1),a.c(),K(a,1),a.m(e.mount(),e.anchor),f=!0),e.block=a,e.blocks&&(e.blocks[o]=a),f&&he()}if(Be(t)){const l=Me();if(t.then(o=>{H(l),r(e.then,1,e.value,o),H(null)},o=>{if(H(l),r(e.catch,2,e.error,o),H(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ge(t,e,n){const r=e.slice(),{resolved:l}=t;t.current===t.then&&(r[t.value]=l),t.current===t.catch&&(r[t.error]=l),t.block.p(r,n)}function X(t){t&&t.c()}function G(t,e,n){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),fe(()=>{const o=t.$$.on_mount.map(xe).filter(Ce);t.$$.on_destroy?t.$$.on_destroy.push(...o):P(o),t.$$.on_mount=[]}),l.forEach(fe)}function z(t,e){const n=t.$$;n.fragment!==null&&(Ue(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function De(t,e){t.$$.dirty[0]===-1&&(F.push(t),qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,l,o,c=null,i=[-1]){const u=ee;H(t);const a=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:l,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:_e(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};c&&c(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(m,_,...j)=>{const h=j.length?j[0]:_;return a.ctx&&l(a.ctx[m],a.ctx[m]=h)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](h),f&&De(t,m)),_}):[],a.update(),f=!0,P(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const m=Ne(e.target);a.fragment&&a.fragment.l(m),m.forEach(w)}else a.fragment&&a.fragment.c();e.intro&&K(t.$$.fragment),G(t,e.target,e.anchor),he()}H(u)}class Y{constructor(){se(this,"$$");se(this,"$$set")}$destroy(){z(this,1),this.$destroy=v}$on(e,n){if(!Ce(n))return v;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Ze(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fe);var Oe={exports:{}};(function(t,e){function n(){var c=document.querySelector("[data-toggle-theme]"),i=c?c.getAttribute("data-key"):null;(function(u=localStorage.getItem(i||"theme")){localStorage.getItem(i||"theme")&&(document.documentElement.setAttribute("data-theme",u),c&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(a=>{a.classList.add(c.getAttribute("data-act-class"))}))})(),c&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(u=>{u.addEventListener("click",function(){var a=u.getAttribute("data-toggle-theme");if(a){var f=a.split(",");document.documentElement.getAttribute("data-theme")==f[0]?f.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(i||"theme")):(document.documentElement.setAttribute("data-theme",f[1]),localStorage.setItem(i||"theme",f[1])):(document.documentElement.setAttribute("data-theme",f[0]),localStorage.setItem(i||"theme",f[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(m=>{m.classList.toggle(this.getAttribute("data-act-class"))})})})}function r(){var c=document.querySelector("[data-set-theme='']"),i=c?c.getAttribute("data-key"):null;(function(u=localStorage.getItem(i||"theme")){if(u!=null&&u!="")if(localStorage.getItem(i||"theme")&&localStorage.getItem(i||"theme")!=""){document.documentElement.setAttribute("data-theme",u);var a=document.querySelector("[data-set-theme='"+u.toString()+"']");a&&([...document.querySelectorAll("[data-set-theme]")].forEach(f=>{f.classList.remove(f.getAttribute("data-act-class"))}),a.getAttribute("data-act-class")&&a.classList.add(a.getAttribute("data-act-class")))}else{var a=document.querySelector("[data-set-theme='']");a.getAttribute("data-act-class")&&a.classList.add(a.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(u=>{u.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(i||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(a=>{a.classList.remove(a.getAttribute("data-act-class"))}),u.getAttribute("data-act-class")&&u.classList.add(u.getAttribute("data-act-class"))})})}function l(){var c=document.querySelector("select[data-choose-theme]"),i=c?c.getAttribute("data-key"):null;(function(u=localStorage.getItem(i||"theme")){if(localStorage.getItem(i||"theme")){document.documentElement.setAttribute("data-theme",u);var a=document.querySelector("select[data-choose-theme] [value='"+u.toString()+"']");a&&[...document.querySelectorAll("select[data-choose-theme] [value='"+u.toString()+"']")].forEach(f=>{f.selected=!0})}})(),c&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(u=>{u.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(i||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(i||"theme")+"']")].forEach(a=>{a.selected=!0})})})}function o(c=!0){c===!0?document.addEventListener("DOMContentLoaded",function(i){n(),l(),r()}):(n(),l(),r())}t.exports={themeChange:o}})(Oe);var Je=Oe.exports;function Ge(t){let e;return{c(){e=p("div"),e.innerHTML=`<div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold">0xGUI</h1> <p class="py-6">An easy way to transfer files over the Internet.<br/>
                With end-to-end encryption, for free.</p></div></div>`,s(e,"class","hero")},m(n,r){y(n,e,r)},p:v,i:v,o:v,d(n){n&&w(e)}}}class ze extends Y{constructor(e){super(),W(this,e,null,Ge,V,{})}}function je(t){const e=/[<,.>]+/;if(t.match(e))throw new Error("One of the text input fields contains non-allowed characters (such as <.,>).");return t}function Ve(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Xe,then:Qe,catch:Ye,value:12,error:13};return te(n=t[0],r),{c(){e=Le(),r.block.c()},m(l,o){y(l,e,o),r.block.m(l,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e},p(l,o){t=l,r.ctx=t,o&1&&n!==(n=t[0])&&te(n,r)||ge(r,t,o)},d(l){l&&w(e),r.block.d(l),r.token=null,r=null}}}function We(t){let e,n,r,l,o,c,i,u,a,f,m,_,j,h,g,E,A,T,M,S=!t[3]&&ke(),$=t[3]&&Ae(),b=t[3]&&Se(t);return{c(){e=p("div"),n=p("h2"),n.textContent="Send a file.",r=k(),l=p("div"),o=p("div"),o.innerHTML=`<svg class="w-6 h-6 fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.4-5.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4c0-.6-.4-1-1-1h-2Z" clip-rule="evenodd"></path></svg> <div><h3 class="font-bold">Details</h3> <div>Using this service, your file will be freely available on the Internet.
                            As such, it&#39;s <b>strongly recommended</b> to not send any kind of personal
                            information.</div> <h3 class="font-bold">Limitations</h3> <div>Check the repository link in the footer for the complete list. Also,
                            only files smaller than 400MB are allowed, and files will stay online
                            only for 24 hours.</div></div>`,c=k(),i=p("div"),u=p("div"),a=p("label"),S&&S.c(),f=k(),m=p("input"),_=k(),$&&$.c(),j=k(),h=p("input"),g=k(),b&&b.c(),E=k(),A=p("button"),A.textContent="Upload",s(n,"class","font-bold text-lg"),s(o,"class","alert"),s(m,"type","checkbox"),s(m,"class","toggle toggle-primary"),s(a,"class","cursor-pointer label"),s(u,"class","form-control w-56"),s(i,"class","block m-auto"),s(h,"type","file"),s(h,"class","file-input file-input-bordered file-input-primary block m-auto my-4 border-2"),s(h,"id","input_file"),s(A,"class","btn btn-primary max-w-40 block m-auto mt-4"),ie(A,"btn-disabled",t[2]===""||t[3]&&t[1]===""),s(l,"class","pt-4 text-center"),s(e,"id","send_form")},m(x,I){y(x,e,I),d(e,n),d(e,r),d(e,l),d(l,o),d(l,c),d(l,i),d(i,u),d(u,a),S&&S.m(a,null),d(a,f),d(a,m),m.checked=t[3],d(a,_),$&&$.m(a,null),d(l,j),d(l,h),d(l,g),b&&b.m(l,null),d(l,E),d(l,A),T||(M=[N(m,"change",t[7]),N(h,"change",t[8]),N(A,"click",t[6])],T=!0)},p(x,I){x[3]?S&&(S.d(1),S=null):S||(S=ke(),S.c(),S.m(a,f)),I&8&&(m.checked=x[3]),x[3]?$||($=Ae(),$.c(),$.m(a,null)):$&&($.d(1),$=null),x[3]?b?b.p(x,I):(b=Se(x),b.c(),b.m(l,E)):b&&(b.d(1),b=null),I&14&&ie(A,"btn-disabled",x[2]===""||x[3]&&x[1]==="")},d(x){x&&w(e),S&&S.d(),$&&$.d(),b&&b.d(),T=!1,P(M)}}}function Ye(t){let e,n,r,l,o,c,i=t[13]+"",u;return{c(){e=p("div"),n=p("figure"),n.innerHTML='<svg class="stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>',r=k(),l=p("div"),o=p("h2"),o.textContent="Something went wrong...",c=k(),u=B(i),s(n,"class","w-1/4"),s(o,"class","card-title"),s(l,"class","card-body"),s(e,"class","card items-center")},m(a,f){y(a,e,f),d(e,n),d(e,r),d(e,l),d(l,o),d(l,c),d(l,u)},p(a,f){f&1&&i!==(i=a[13]+"")&&oe(u,i)},d(a){a&&w(e)}}}function Qe(t){let e,n,r,l,o,c,i,u=t[5](t[12])+"",a,f,m,_=t[12]+"",j;return{c(){e=p("div"),n=p("figure"),n.innerHTML='<svg class="stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>',r=k(),l=p("div"),o=p("h2"),o.textContent="Success!",c=B(`
                    The file has been correctly uploaded. Share this link to other people:
                    `),i=p("div"),a=B(u),f=B(`
                    Or, alternatively, just share the file code:
                    `),m=p("div"),j=B(_),s(n,"class","w-1/4"),s(o,"class","card-title"),s(i,"class","alert"),s(m,"class","alert"),s(l,"class","card-body"),s(e,"class","card items-center")},m(h,g){y(h,e,g),d(e,n),d(e,r),d(e,l),d(l,o),d(l,c),d(l,i),d(i,a),d(l,f),d(l,m),d(m,j)},p(h,g){g&1&&u!==(u=h[5](h[12])+"")&&oe(a,u),g&1&&_!==(_=h[12]+"")&&oe(j,_)},d(h){h&&w(e)}}}function Xe(t){let e;return{c(){e=p("div"),e.innerHTML='<span class="loading loading-spinner loading-lg"></span>',s(e,"class","text-center")},m(n,r){y(n,e,r)},p:v,d(n){n&&w(e)}}}function ke(t){let e;return{c(){e=p("span"),e.textContent="Not encrypted",s(e,"class","label-text")},m(n,r){y(n,e,r)},d(n){n&&w(e)}}}function Ae(t){let e;return{c(){e=p("span"),e.textContent="Encrypted",s(e,"class","label-text")},m(n,r){y(n,e,r)},d(n){n&&w(e)}}}function Se(t){let e,n,r;return{c(){e=p("input"),s(e,"type","text"),s(e,"placeholder","Write the receiver key"),s(e,"class","input input-bordered input-primary block m-auto border-2")},m(l,o){y(l,e,o),ae(e,t[1]),n||(r=N(e,"input",t[9]),n=!0)},p(l,o){o&2&&e.value!==l[1]&&ae(e,l[1])},d(l){l&&w(e),n=!1,r()}}}function et(t){let e;function n(o,c){return o[4]?We:Ve}let r=n(t),l=r(t);return{c(){e=p("div"),l.c(),s(e,"class","modal-box")},m(o,c){y(o,e,c),l.m(e,null)},p(o,[c]){r===(r=n(o))&&l?l.p(o,c):(l.d(1),l=r(o),l&&(l.c(),l.m(e,null)))},i:v,o:v,d(o){o&&w(e),l.d()}}}function tt(t,e,n){const r=g=>window.location.origin+window.location.pathname+"?file="+g,l=g=>{const E=new FileReader;return g&&E.readAsDataURL(g),new Promise((A,T)=>{E.onload=M=>{A(M.target.result)}})},o=async()=>{n(4,m=!1);const g=document.getElementById("input_file").files[0],E=new FormData;let A,T,M,S;if(g.size>4*Math.pow(10,9))throw new Error("The file is too large to upload.");if(n(1,u=je(u)),f){const b=await window.crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),x=window.crypto.getRandomValues(new Uint8Array(12)),I=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:x},b,await g.arrayBuffer());try{T=await fetch("https://promaobfghoibelpbtwf.supabase.co/functions/v1/fetch_file",{method:"POST",body:JSON.stringify({filename:u+".json"})})}catch{throw new Error("A network error happened while downloading the receiver key. Make sure your Internet connection is stable and try again.")}if(!T.ok)throw new Error("The submitted receiver key does not exist.");try{M=await window.crypto.subtle.importKey("jwk",JSON.parse(await T.text()),{name:"RSA-OAEP",hash:"SHA-256"},!0,["wrapKey"])}catch{throw new Error("The submitted key value is not a key, but a file instead.")}const Q=await window.crypto.subtle.wrapKey("jwk",b,M,{name:"RSA-OAEP"});A={encrypted:"yes",payload:await l(new Blob([I],{type:"application/octet-stream"})),iv:await l(new Blob([x],{type:"application/octet-stream"})),aes_key:await l(new Blob([Q],{type:"application/octet-stream"})),name:g.name,type:g.type}}else A={encrypted:"no",payload:await l(g),name:g.name,type:g.type};const $=new File([JSON.stringify(A)],"raw_json",{type:"application/json"});E.append("file",$,$.name),E.append("expires","24");try{S=await fetch("https://promaobfghoibelpbtwf.supabase.co/functions/v1/send_file",{method:"POST",body:E})}catch{throw new Error("A network error happened while uploading the receiver encrypted file. Make sure your Internet connection is stable and try again.")}return S.ok?(await S.text()).split("/").pop().split(".")[0]:S.status},c=()=>{n(0,i=o())};let i,u="",a="",f=!1,m=!0;function _(){f=this.checked,n(3,f)}function j(){a=this.value,n(2,a)}function h(){u=this.value,n(1,u)}return[i,u,a,f,m,r,c,_,j,h]}class nt extends Y{constructor(e){super(),W(this,e,tt,et,V,{})}}const Ie=it().then(t=>t),rt=Ie.then(t=>at(t).then(e=>e.split("/").pop().split(".")[0]));async function lt(){return(await Ie).privateKey}async function ot(){return await rt}async function at(t){let e=await crypto.subtle.exportKey("jwk",t.publicKey);const n=new FormData;let r=new File([JSON.stringify(e)],"public_key.json",{type:"application/json"});return n.append("file",r,"public_key.json"),n.append("expires","168"),await(await fetch("https://promaobfghoibelpbtwf.supabase.co/functions/v1/send_file",{method:"POST",body:n})).text()}async function it(){const t=localStorage.getItem("crypto_keys");if(t){const o=JSON.parse(t);if(o.expiry>=new Date().getTime()){const c=await window.crypto.subtle.importKey("jwk",o.private_key,{name:"RSA-OAEP",hash:"SHA-256"},!0,["unwrapKey"]),i=await window.crypto.subtle.importKey("jwk",o.public_key,{name:"RSA-OAEP",hash:"SHA-256"},!0,["wrapKey"]);return{privateKey:c,publicKey:i}}}const e=new Date,n=await window.crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["wrapKey","unwrapKey"]),r=await window.crypto.subtle.exportKey("jwk",n.privateKey),l=await window.crypto.subtle.exportKey("jwk",n.publicKey);return e.setTime(e.getTime()+7*23*60*60*1e3),localStorage.setItem("crypto_keys",JSON.stringify({private_key:r,public_key:l,expiry:e.getTime()})),n}function ct(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:dt,catch:ut,value:0,error:7};return te(n=t[2],r),{c(){e=Le(),r.block.c()},m(l,o){y(l,e,o),r.block.m(l,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e},p(l,o){t=l,r.ctx=t,o&4&&n!==(n=t[2])&&te(n,r)||ge(r,t,o)},d(l){l&&w(e),r.block.d(l),r.token=null,r=null}}}function st(t){let e,n,r,l,o,c,i,u;return{c(){e=p("h3"),e.textContent="Receive a file.",n=k(),r=p("div"),l=p("input"),o=k(),c=p("button"),c.textContent="Download",s(e,"class","font-bold text-lg"),s(l,"type","text"),s(l,"placeholder","Type the file code"),s(l,"class","input input-bordered input-secondary block m-auto border-2"),s(c,"class","btn block m-auto mt-4 btn-secondary"),ie(c,"btn-disabled",t[0]===""),s(r,"class","pt-4")},m(a,f){y(a,e,f),y(a,n,f),y(a,r,f),d(r,l),ae(l,t[0]),d(r,o),d(r,c),i||(u=[N(l,"input",t[4]),N(c,"click",t[3])],i=!0)},p(a,f){f&1&&l.value!==a[0]&&ae(l,a[0]),f&1&&ie(c,"btn-disabled",a[0]==="")},d(a){a&&(w(e),w(n),w(r)),i=!1,P(u)}}}function ut(t){let e,n,r,l,o,c,i=t[7]+"",u;return{c(){e=p("div"),n=p("figure"),n.innerHTML='<svg class="stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>',r=k(),l=p("div"),o=p("h2"),o.textContent="Something went wrong...",c=k(),u=B(i),s(n,"class","w-1/4"),s(o,"class","card-title"),s(l,"class","card-body"),s(e,"class","card items-center")},m(a,f){y(a,e,f),d(e,n),d(e,r),d(e,l),d(l,o),d(l,c),d(l,u)},p(a,f){f&4&&i!==(i=a[7]+"")&&oe(u,i)},d(a){a&&w(e)}}}function dt(t){let e;return{c(){e=p("div"),e.innerHTML=`<figure class="w-1/4"><svg class="stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></figure> <div class="card-body"><h2 class="card-title">Success!</h2>
                    The file is being downloaded right now.</div>`,s(e,"class","card items-center")},m(n,r){y(n,e,r)},p:v,d(n){n&&w(e)}}}function ft(t){let e;return{c(){e=p("div"),e.innerHTML='<span class="loading loading-spinner loading-lg"></span>',s(e,"class","text-center")},m(n,r){y(n,e,r)},p:v,d(n){n&&w(e)}}}function pt(t){let e;function n(o,c){return o[1]?st:ct}let r=n(t),l=r(t);return{c(){e=p("div"),l.c(),s(e,"class","modal-box")},m(o,c){y(o,e,c),l.m(e,null)},p(o,[c]){r===(r=n(o))&&l?l.p(o,c):(l.d(1),l=r(o),l&&(l.c(),l.m(e,null)))},i:v,o:v,d(o){o&&w(e),l.d()}}}function mt(t,e,n){let{filename:r}=e;const l=async f=>(await(await fetch(f)).blob()).arrayBuffer(),o=async()=>{n(1,i=!1);let f,m,_;n(0,r=je(r));try{f=await fetch("https://promaobfghoibelpbtwf.supabase.co/functions/v1/fetch_file",{method:"POST",body:JSON.stringify({filename:r+".json"})})}catch{throw new Error("A network error happened while downloading the file. Make sure your Internet connection is stable and try again.")}if(!f.ok)throw new Error("The requested file does not exist.");const j=await f.text(),h=JSON.parse(j);if(h.encrypted==="yes"){const g=await l(h.aes_key),E=await l(h.iv),A=await l(h.payload);try{_=await window.crypto.subtle.unwrapKey("jwk",g,await lt(),{name:"RSA-OAEP",hash:"SHA-256"},{name:"AES-GCM"},!0,["encrypt","decrypt"])}catch{throw new Error("The selected file exists, but cannot be opened because the designated receiver is someone else.")}const T=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:E},_,A);m=new Blob([T],{type:h.type})}else m=await(await fetch(h.payload)).blob();if(m!=null){let g=window.URL.createObjectURL(m),E=document.createElement("a");E.href=g,E.download=h.name,document.body.appendChild(E),E.click(),E.remove()}},c=()=>{n(2,u=o())};let i=!0,u;function a(){r=this.value,n(0,r)}return t.$$set=f=>{"filename"in f&&n(0,r=f.filename)},[r,i,u,c,a]}class ht extends Y{constructor(e){super(),W(this,e,mt,pt,V,{filename:0})}}function gt(t){return{c:v,m:v,p:v,d:v}}function wt(t){let e=t[1]+"",n;return{c(){n=B(e)},m(r,l){y(r,n,l)},p:v,d(r){r&&w(n)}}}function _t(t){let e;return{c(){e=p("span"),s(e,"class","loading loading-spinner loading-lg")},m(n,r){y(n,e,r)},p:v,d(n){n&&w(e)}}}function yt(t){let e,n,r,l,o,c={ctx:t,current:null,token:null,hasCatch:!1,pending:_t,then:wt,catch:gt,value:1};return te(t[0],c),{c(){e=p("div"),n=p("div"),r=ye("svg"),l=ye("path"),o=B(`
        Your key is:
        `),c.block.c(),s(l,"fill-rule","evenodd"),s(l,"d","M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.4-5.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4c0-.6-.4-1-1-1h-2Z"),s(l,"clip-rule","evenodd"),s(r,"class","w-6 h-6 fill-current"),s(r,"aria-hidden","true"),s(r,"xmlns","http://www.w3.org/2000/svg"),s(r,"fill","currentColor"),s(r,"viewBox","0 0 24 24"),s(n,"class","alert w-1/2"),s(e,"class","grid place-items-center mb-4")},m(i,u){y(i,e,u),d(e,n),d(n,r),d(r,l),d(n,o),c.block.m(n,c.anchor=null),c.mount=()=>n,c.anchor=null},p(i,[u]){t=i,ge(c,t,u)},i:v,o:v,d(i){i&&w(e),c.block.d(),c.token=null,c=null}}}function bt(t){return[ot()]}class vt extends Y{constructor(e){super(),W(this,e,bt,yt,V,{})}}function kt(t){let e;return{c(){e=p("footer"),e.innerHTML='<div class="items-center grid-flow-col"><a href="https://github.com/Dapizz01/0xGUI"><svg class="w-10 h-10 stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"></path></svg></a></div> <div class="grid-flow-col place-self-end justify-self-end"><label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="cmyk"/> <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg> <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></label></div>',s(e,"class","footer grid-cols-2 items-center p-5 bg-neutral text-neutral-content")},m(n,r){y(n,e,r)},p:v,i:v,o:v,d(n){n&&w(e)}}}class At extends Y{constructor(e){super(),W(this,e,null,kt,V,{})}}function $e(t){let e,n;return e=new nt({}),{c(){X(e.$$.fragment)},m(r,l){G(e,r,l),n=!0},i(r){n||(K(e.$$.fragment,r),n=!0)},o(r){Z(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Ee(t){let e,n;return e=new ht({props:{filename:t[2]}}),{c(){X(e.$$.fragment)},m(r,l){G(e,r,l),n=!0},p(r,l){const o={};l&4&&(o.filename=r[2]),e.$set(o)},i(r){n||(K(e.$$.fragment,r),n=!0)},o(r){Z(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function St(t){let e,n,r,l,o,c,i,u,a,f,m,_,j,h,g,E,A,T,M,S,$,b,x,I,Q,q,ne,re,ce,we;o=new ze({}),i=new vt({}),A=new At({});let O=t[0]&&$e(),C=t[1]&&Ee(t);return{c(){e=p("head"),e.innerHTML="<title>0xGUI</title>",n=k(),r=p("main"),l=p("div"),X(o.$$.fragment),c=k(),X(i.$$.fragment),u=k(),a=p("div"),f=B(`I want to...
            `),m=p("div"),_=p("button"),_.textContent="send",j=k(),h=p("button"),h.textContent="receive",g=B(`
            a file.`),E=k(),X(A.$$.fragment),T=k(),M=p("dialog"),O&&O.c(),S=k(),$=p("form"),b=p("button"),b.textContent="close",x=k(),I=p("dialog"),C&&C.c(),Q=k(),q=p("form"),ne=p("button"),ne.textContent="close",s(_,"class","btn btn-primary"),s(h,"class","btn btn-secondary"),s(m,"class","group"),s(a,"class","text-center"),s(l,"id","content_wrap"),s($,"method","dialog"),s($,"class","modal-backdrop"),s(M,"id","send_modal"),s(M,"class","modal"),s(q,"method","dialog"),s(q,"class","modal-backdrop"),s(I,"id","receive_modal"),s(I,"class","modal"),s(r,"id","page_container")},m(L,R){y(L,e,R),y(L,n,R),y(L,r,R),d(r,l),G(o,l,null),d(l,c),G(i,l,null),d(l,u),d(l,a),d(a,f),d(a,m),d(m,_),d(m,j),d(m,h),d(a,g),d(r,E),G(A,r,null),d(r,T),d(r,M),O&&O.m(M,null),d(M,S),d(M,$),d($,b),d(r,x),d(r,I),C&&C.m(I,null),d(I,Q),d(I,q),d(q,ne),re=!0,ce||(we=[N(_,"click",t[3]),N(h,"click",t[4]),N(b,"click",t[5]),N(ne,"click",t[6])],ce=!0)},p(L,[R]){L[0]?O?R&1&&K(O,1):(O=$e(),O.c(),K(O,1),O.m(M,S)):O&&(pe(),Z(O,1,1,()=>{O=null}),me()),L[1]?C?(C.p(L,R),R&2&&K(C,1)):(C=Ee(L),C.c(),K(C,1),C.m(I,Q)):C&&(pe(),Z(C,1,1,()=>{C=null}),me())},i(L){re||(K(o.$$.fragment,L),K(i.$$.fragment,L),K(A.$$.fragment,L),K(O),K(C),re=!0)},o(L){Z(o.$$.fragment,L),Z(i.$$.fragment,L),Z(A.$$.fragment,L),Z(O),Z(C),re=!1},d(L){L&&(w(e),w(n),w(r)),z(o),z(i),z(A),O&&O.d(),C&&C.d(),ce=!1,P(we)}}}function $t(t,e,n){let r=!0,l=!0,o=new URLSearchParams(window.location.search).get("file");He(()=>{Je.themeChange(!1),o!==""&&o!==null&&i()});const c=()=>{document.getElementById("send_modal").showModal(),n(0,r=!0)},i=()=>{document.getElementById("receive_modal").showModal(),n(1,l=!0)};return[r,l,o,c,i,()=>n(0,r=!1),()=>{n(1,l=!1),n(2,o="")}]}class Et extends Y{constructor(e){super(),W(this,e,$t,St,V,{})}}new Et({target:document.getElementById("app")});
