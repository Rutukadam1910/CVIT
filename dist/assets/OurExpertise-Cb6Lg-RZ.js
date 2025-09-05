import{c as t,r as i,j as e}from"./index-CB1z3ct1.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],p=t("briefcase",c);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],d=t("code-xml",l);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],h=t("handshake",x);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],b=t("lightbulb",m);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],f=t("search",g);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],y=t("wrench",u),v=[{id:"technical-proficiency",title:"Technical Proficiency",icon:e.jsx(d,{size:56,color:"#31CDF0"})},{id:"industry-experience",title:"Industry Experience",icon:e.jsx(p,{size:56,color:"#F95E00"})},{id:"research-development",title:"Research and Development",icon:e.jsx(f,{size:56,color:"#FCCA00"})},{id:"collaborations-partnership",title:"Collaborations and Partnership",icon:e.jsx(h,{size:56,color:"#0D6EFF"})},{id:"innovative-solutions",title:"Innovative Solutions",icon:e.jsx(b,{size:56,color:"#96E15C"})},{id:"ongoing-support-maintenance",title:"Ongoing Support & Maintenance",icon:e.jsx(y,{size:56,color:"#EC5A83"})}],w=()=>{const[a,s]=i.useState(!1);return i.useEffect(()=>{const r=setTimeout(()=>s(!0),100);return()=>clearTimeout(r)},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        * {
          font-family: 'Inter', sans-serif !important;
        }
        .expertise-section {
          background: #0a0a0a;
          color: white;
          text-align: center;
          padding: 4rem 1.34rem;
          overflow: hidden;
        }
        .subtitle {
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          font-size: 1rem;
          padding: 0.35rem 0.9rem;
          border-radius: 13px;
          display: inline-block;
          margin-bottom: 0.8rem;
          font-weight: 600;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease;
        }
        .subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .heading {
          font-weight: 600;
          font-size: 2.6rem;
          margin-bottom: 2rem;
        }
        .expertise-scroll-wrapper {
          overflow-x: auto;
          white-space: nowrap;
          padding-bottom: 1rem;
           padding-top: 1rem;
          scrollbar-width: none;
        }
        .expertise-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }
        .expertise-grid {
          display: inline-flex;
          gap: 21px;
        }
        .expertise-card {
          background: rgba(255, 255, 255, 0.04);
          padding: 1.6rem 1.3rem;
          border-radius: 13px;
          backdrop-filter: blur(5px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 225px;
          height: 180px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          position: relative;
          cursor: default;
          transform: perspective(1000px);
        }
        .expertise-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: perspective(1000px) translateY(-8px) scale(1.05);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.15);
          z-index: 10;
        }
        .icon-wrapper-expertise {
          transition: transform 0.3s ease;
          margin-top: 1.2rem;
        }
        .expertise-card:hover .icon-wrapper-expertise {
          transform: scale(1.15);
        }
        .expertise-title {
          font-size: 0.85rem;
          color: #f0f4f8;
          margin-top: 1rem;
          font-weight: 600;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 2rem;
          }
          .expertise-title {
            font-size: 0.85rem;
          }
          .expertise-card {
            width: 180px;
            height: 200px;
            padding: 1rem;
          }
          .expertise-card:hover {
            transform: perspective(1000px) translateY(-6px) scale(1.03);
            box-shadow: 0 6px 15px rgba(255, 255, 255, 0.15), 0 0 20px rgba(255, 255, 255, 0.1);
          }
          .icon-wrapper-expertise svg {
            width: 42px;
            height: 42px;
          }
        }
      `}),e.jsxs("section",{className:"expertise-section","aria-label":"Our Expertises",children:[e.jsx("div",{className:`subtitle ${a?"visible":""}`,children:"Where Skill Meets Innovation"}),e.jsx("h2",{className:"heading",children:"OUR EXPERTISES"}),e.jsx("div",{className:"expertise-scroll-wrapper",children:e.jsx("div",{className:"expertise-grid",children:v.map(({id:r,title:o,icon:n})=>e.jsxs("div",{className:"expertise-card",children:[e.jsx("div",{className:"icon-wrapper-expertise",children:n}),e.jsx("div",{className:"expertise-title",children:o})]},r))})})]})]})};export{w as default};
