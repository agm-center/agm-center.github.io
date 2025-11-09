const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.B8tgDod3.js","_astro/preload-helper.BlTxHScW.js","_astro/_commonjsHelpers.Cpj98o6Y.js","_astro/string.RbRJYSZp.js"])))=>i.map(i=>d[i]);
import{_ as L}from"./preload-helper.BlTxHScW.js";const E={},p=new Set,m=new WeakSet;let u=!0,b,g=!1;function S(e){g||(g=!0,u??=!1,b??="hover",A(),T(),C(),O())}function A(){for(const e of["touchstart","mousedown"])document.addEventListener(e,t=>{c(t.target,"tap")&&l(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function T(){let e;document.body.addEventListener("focusin",r=>{c(r.target,"hover")&&t(r)},{passive:!0}),document.body.addEventListener("focusout",a,{passive:!0}),f(()=>{for(const r of document.getElementsByTagName("a"))m.has(r)||c(r,"hover")&&(m.add(r),r.addEventListener("mouseenter",t,{passive:!0}),r.addEventListener("mouseleave",a,{passive:!0}))});function t(r){const n=r.target.href;e&&clearTimeout(e),e=setTimeout(()=>{l(n)},80)}function a(){e&&(clearTimeout(e),e=0)}}function C(){let e;f(()=>{for(const t of document.getElementsByTagName("a"))m.has(t)||c(t,"viewport")&&(m.add(t),e??=M(),e.observe(t))})}function M(){const e=new WeakMap;return new IntersectionObserver((t,a)=>{for(const r of t){const n=r.target,o=e.get(n);r.isIntersecting?(o&&clearTimeout(o),e.set(n,setTimeout(()=>{a.unobserve(n),e.delete(n),l(n.href)},300))):o&&(clearTimeout(o),e.delete(n))}})}function O(){f(()=>{for(const e of document.getElementsByTagName("a"))c(e,"load")&&l(e.href)})}function l(e,t){e=e.replace(/#.*/,"");const a=t?.ignoreSlowConnection??!1;if(P(e,a))if(p.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else{const r=new Headers;for(const[n,o]of Object.entries(E))r.set(n,o);fetch(e,{priority:"low",headers:r})}}function P(e,t){if(!navigator.onLine||!t&&v())return!1;try{const a=new URL(e,location.href);return location.origin===a.origin&&(location.pathname!==a.pathname||location.search!==a.search)&&!p.has(e)}catch{}return!1}function c(e,t){if(e?.tagName!=="A")return!1;const a=e.dataset.astroPrefetch;return a==="false"?!1:t==="tap"&&(a!=null||u)&&v()?!0:a==null&&u||a===""?t===b:a===t}function v(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function f(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}const h=()=>document.querySelectorAll("pre.mermaid").length>0;h()?(console.log("[astro-mermaid] Mermaid diagrams detected, loading mermaid.js..."),L(()=>import("./mermaid.core.B8tgDod3.js").then(e=>e.b8),__vite__mapDeps([0,1,2,3])).then(async({default:e})=>{const t=[];if(t&&t.length>0){console.log("[astro-mermaid] Registering",t.length,"icon packs");const n=t.map(o=>({name:o.name,loader:new Function("return "+o.loader)()}));await e.registerIconPacks(n)}const a={startOnLoad:!1,theme:"base"};async function r(){console.log("[astro-mermaid] Initializing mermaid diagrams...");const n=document.querySelectorAll("pre.mermaid");if(console.log("[astro-mermaid] Found",n.length,"mermaid diagrams"),n.length===0)return;let o=a.theme;e.initialize({...a,theme:o,gitGraph:{mainBranchName:"main",showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(const i of n){if(i.hasAttribute("data-processed"))continue;i.hasAttribute("data-diagram")||i.setAttribute("data-diagram",i.textContent||"");const y=i.getAttribute("data-diagram")||"",s="mermaid-"+Math.random().toString(36).slice(2,11);console.log("[astro-mermaid] Rendering diagram:",s);try{const d=document.getElementById(s);d&&d.remove();const{svg:w}=await e.render(s,y);i.innerHTML=w,i.setAttribute("data-processed","true"),console.log("[astro-mermaid] Successfully rendered diagram:",s)}catch(d){console.error("[astro-mermaid] Mermaid rendering error for diagram:",s,d),i.innerHTML=`<div style="color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;">
            <strong>Error rendering diagram:</strong><br/>
            ${d.message||"Unknown error"}
          </div>`,i.setAttribute("data-processed","true")}}}r(),document.addEventListener("astro:after-swap",()=>{h()&&r()})}).catch(e=>{console.error("[astro-mermaid] Failed to load mermaid:",e)})):console.log("[astro-mermaid] No mermaid diagrams found on this page, skipping mermaid.js load");const k=document.createElement("style");k.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `;document.head.appendChild(k);S();
