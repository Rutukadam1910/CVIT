import{a as h,s as f,u as b,b as v,r as l,j as n,m as u,A as w}from"./index-CB1z3ct1.js";function y(e){e.values.forEach(i=>i.stop())}function p(e,i){[...i].reverse().forEach(r=>{const o=e.getVariant(r);o&&f(e,o),e.variantChildren&&e.variantChildren.forEach(c=>{p(c,i)})})}function j(e,i){if(Array.isArray(i))return p(e,i);if(typeof i=="string")return p(e,[i]);f(e,i)}function I(){const e=new Set,i={subscribe(a){return e.add(a),()=>void e.delete(a)},start(a,r){const o=[];return e.forEach(c=>{o.push(h(c,a,{transitionOverride:r}))}),Promise.all(o)},set(a){return e.forEach(r=>{j(r,a)})},stop(){e.forEach(a=>{y(a)})},mount(){return()=>{i.stop()}}};return i}function N(){const e=b(I);return v(e.mount,[]),e}const z=N,A="/assets/aboutus-B-lnDZ2T.jpg",C="/assets/ourvision-DaZlQjen.png",S="/assets/mission-BCrmD6GM.png",m=[{id:"about",title:"ABOUT US",heading:"Pushing the Boundaries",text:"At CVIT Solution, we are dedicated to pushing the boundaries of computer vision to address critical challenges across various industries.We specialize in developing cutting-edge computer vision applications. Harnessing the power of Artificial Intelligence, we enable businesses to automate tasks, gain valuable insights from visual data, and create innovative applications that were once considered impossible.",img:A},{id:"vision",title:"OUR VISION",heading:"Create Safer, More Efficient, and Intelligent Systems",text:"Our vision is to be at the forefront of innovation, leveraging the potential of computer vision to solve complex problems.We believe that computer vision has the capacity to transform industries and create safer, more efficient, and intelligent systems.",img:C},{id:"mission",title:"OUR MISSION",heading:"Make a Defect-Free Industry",text:"Our mission is to make a defect-free industry through our advanced machine vision systems.",img:S}];function O(){const[e,i]=l.useState("about"),[a,r]=l.useState({}),o=l.useRef({}),c=z(),g=()=>{const t=o.current[e];if(t&&t.parentNode){const s=t.getBoundingClientRect(),d=t.parentNode.getBoundingClientRect();c.start({left:s.left-d.left,width:s.width,transition:{type:"spring",stiffness:300,damping:30}})}};l.useEffect(()=>{g()},[e]),l.useEffect(()=>{const t=()=>g();return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),l.useEffect(()=>{const t=m.find(s=>s.id===e);if(!a[t.id]){const s=new Image;s.src=t.img,s.onload=()=>r(d=>({...d,[t.id]:!0}))}},[e,a]);const x={initial:{opacity:0,y:30,scale:.98},animate:{opacity:1,y:0,scale:1,transition:{duration:.7,ease:"easeOut"}},exit:{opacity:0,y:-20,scale:.97,transition:{duration:.5,ease:"easeInOut"}}};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        * {
          font-family: 'Inter', sans-serif !important;
          cursor: url('https://cdn-icons-png.flaticon.com/512/25/25694.png'), auto;
        }
        .page-wrapper {
          width: 100%;
          background: #000;
          padding: 4rem 1rem;
          color: white;
          box-sizing: border-box;
        }
        .tab-container {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          background: #151515;
          padding: 0.7rem 0;
          border-radius: 10px;
          position: relative;
          box-shadow: 0 3px 15px rgba(0,0,0,0.6);
        }
        .tab {
          font-size: 1.2rem;
          font-weight: 600;
          padding: 0.7rem 1rem;
          color: #aaa;
          cursor: pointer;
          transition: color 0.3s ease;
          text-align: center;
          z-index: 5;
          user-select: none;
          flex: 1;
        }
        .tab:hover, .tab.active {
          color: #fff;
        }
        .underline {
          position: absolute;
          bottom: 0;
          height: 2px;
          background: #ef3a3a;
          border-radius: 2px;
          z-index: 4;
        }
        .content-area {
          max-width: 1140px;
          margin: 2rem auto 0;
          padding: 3rem 2rem;
          background: #111;
          border-radius: 14px;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          gap: 2rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.08);
          box-sizing: border-box;
          min-height: 420px;
        }
        .text-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: center;
          padding: 0 2rem;
          box-sizing: border-box;
          height: 100%;
        }
        .text-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }
        .content-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: #fff;
        }
        .content-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ccc;
          max-width: 100%;
          white-space: pre-line;
          text-align: justify;
        }
        .image-section {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          max-width: 400px;
          height: 100%;
        }
        .image-section img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.4);
          user-select: none;
          pointer-events: none;
        }
        @media (max-width: 1100px) {
          .content-area {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1rem;
          }
          .content-heading {
            font-size: 1.6rem;
          }
          .content-text {
            font-size: 1rem;
          }
          .tab {
            font-size: 0.9rem;
            padding: 0.5rem;
          }
          .text-section {
            padding: 0 1rem;
          }
          .image-section {
            max-width: 100%;
            min-height: 250px;
          }
        }
      `}),n.jsxs("div",{className:"page-wrapper",children:[n.jsxs("div",{className:"tab-container",children:[m.map(t=>n.jsx("div",{className:`tab ${e===t.id?"active":""}`,ref:s=>o.current[t.id]=s,onClick:()=>i(t.id),children:t.title},t.id)),n.jsx(u.div,{className:"underline",initial:!1,animate:c})]}),n.jsxs("div",{className:"content-area",children:[n.jsx(w,{mode:"wait",children:n.jsx(u.div,{className:"text-section",initial:"initial",animate:"animate",exit:"exit",variants:x,children:n.jsxs("div",{className:"text-wrapper",children:[n.jsx("h2",{className:"content-heading",children:m.find(t=>t.id===e)?.heading}),n.jsx("p",{className:"content-text",children:m.find(t=>t.id===e)?.text})]})},e)}),n.jsx("div",{className:"image-section",children:m.map(t=>{const s=t.id===e,d=a[t.id];return n.jsx(u.img,{src:t.img,alt:t.title,initial:{opacity:0,scale:.95},animate:{opacity:s&&d?1:0,scale:s&&d?1:.95},transition:{duration:.6,ease:"easeOut"},style:{zIndex:s?2:1}},t.id)})})]})]})]})}export{O as default};
