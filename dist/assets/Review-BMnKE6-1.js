import{r as n,j as e}from"./index-DKL6fd2z.js";import{F as r,a as l}from"./index-Gply5R60.js";const m="/assets/indiamart-BXUh_ti1.png",x="/assets/google-IQbXmh4w.png",f=()=>{const[s,o]=n.useState(0),t=1248,c=4.5;return n.useEffect(()=>{let a=0;const d=t/(2e3/16),i=setInterval(()=>{a+=d,a>=t&&(a=t,clearInterval(i)),o(Math.floor(a))},16);return()=>clearInterval(i)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"review-container",children:[e.jsx("div",{className:"card2",children:e.jsx("h3",{className:"heading-primary",children:"We Are Business Who Cares, And it Shows"})}),e.jsx("div",{className:"divider"}),e.jsxs("a",{href:"https://www.indiamart.com/cvit-solution/",target:"_blank",rel:"noopener noreferrer",className:"card fade-in delay-1 link-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("img",{src:m,alt:"Indiamart",className:"indiamart-img"})}),e.jsx("h3",{className:"heading-secondary mt-tight",children:"Reach us On Indiamart"}),e.jsx("p",{className:"subtext",children:"Discover Our Services"})]}),e.jsx("div",{className:"divider"}),e.jsxs("a",{href:"https://www.google.com/search?q=CVIT+SOLUTION+PVT+LTD+Reviews&hl=en#lrd=0x3bc2bbea4fee3e13:0xd4aaec345ec569d8,3",target:"_blank",rel:"noopener noreferrer",className:"card fade-in delay-2 link-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("img",{src:x,alt:"google",className:"google-img"})}),e.jsxs("div",{className:"stars-wrapper",children:[e.jsxs("div",{className:"stars",children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(l,{})]}),e.jsxs("span",{className:"rating-text",children:[c.toFixed(1),"/5"]})]}),e.jsx("h3",{className:"heading-secondary mt-tight",children:"Rate Us on Google"}),e.jsxs("p",{className:"subtext",children:[s.toLocaleString()," reviews"]})]})]}),e.jsx("style",{children:`
        .review-container {
          display: flex;
          justify-content: space-around;
          align-items: stretch;
          flex-wrap: wrap;
          padding: 1rem 2rem;
          background-color: #fff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          max-width: 1900px;
          margin: 0 auto;
          min-height: 250px;
        }

        .card {
          flex: 1 1 250px;
          min-width: 350px;
          max-width: 450px;
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          text-decoration: none;
          border-radius: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
          
        .card2 {
          flex: 1 1 250px;
          min-width: 350px;
          max-width: 450px;
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          text-decoration: none;
          border-radius: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .link-card:hover {
          cursor: pointer;
        }

        .link-card {
          text-decoration: none;
          color: inherit;
        }

        .divider {
          width: 1px;
          background-color: #ccc;
          height: auto;
          min-height: 80%;
          align-self: center;
        }

        .heading-primary {
          color: #ef3a3a;
          font-weight: 600;
          font-size: 1.25rem;
          text-align: center;
        }

        .heading-secondary {
          color: #374151;
          font-weight: 600;
          font-size: 1rem;
        }

        .mt-tight {
          margin-top: 0.5rem;
        }

        .subtext {
          font-size: 0.85rem;
          color: #9ca3af;
          margin-top: 0.2rem;
        }

        .indiamart-img {
          width: 120px;
          height: 120px;
          object-fit: contain;
        }

           .indiamart-img:hover{
            cursor: pointer;
        }

        .google-img {
          width: 90px;
          height: 90px;
        }
        
         .google-img:hover {
           cursor: pointer;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
        }

        .stars-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.4rem;
        }

        .stars {
          display: flex;
          gap: 4px;
          font-size: 1.3rem;
          color: #facc15;
        }

        .rating-text {
          font-size: 1rem;
          font-weight: 500;
          color: #4b5563;
          animation: fadeIn 1s ease-in;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.6s forwards ease-in-out;
        }

        
        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .review-container {
            flex-direction: column;
            align-items: center;
          }

          .divider {
            width: 80%;
            height: 1px;
            background-color: #ccc;
            margin: 1.5rem 0;
          }

          .card {
            padding: 1.5rem 1rem;
          }
        }
      `})]})};export{f as default};
