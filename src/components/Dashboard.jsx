// import React, { useState, useRef, useEffect, lazy } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import Navbar from "./Navbar";
// import CookieConsent from "./CookieConsent";
// import "../Styles/Dashboard.css";

// import Bar_Light from "../assets/Lights/Bar_Light.png";
// import Ring_Light from "../assets/Lights/Ring_Light.png";
// import Dome_Light from "../assets/Lights/Dome_Light.png";
// import Flat_Diffused_Light_With_Center_Hole from "../assets/Lights/Flat_Direct_Diffused_Light_With_Center_Hole.png";
// import Flat_Diffused_Light from "../assets/Lights/Flat_DIrect_Diffused_Light.png";
// import Indirect_Flat_Light from "../assets/Lights/Indirect_Flat_Light.png";
// import Back_Light from "../assets/Lights/Back_Light.png";
// import Spot_Light from "../assets/Lights/Spot_Light.png";
// import Tunnel_Light from "../assets/Lights/Tunnel_Light.png";
// import SideBar from "./Sidebar";

// // Lazy loaded components
// const CustomerBenefits = lazy(() => import("./CustomerBenefits"));
// const Client = lazy(() => import("./Client"));
// const CaseStudy = lazy(() => import("./CaseStudy"));
// const Aboutus_Mission_Vision = lazy(() => import("./Aboutus_Mission_Vision"));
// const CoreValues = lazy(() => import("./CoreValues"));
// const Implementation = lazy(() => import("./Implementation"));
// const OurExpertises = lazy(() => import("./OurExpertise"));
// const SupportingPartners = lazy(() => import("./SupportingPartners"));
// const Review = lazy(() => import("./Review"));
// const ContactUs = lazy(() => import("./ContactUs"));
// const Footer = lazy(() => import("./Footer"));

// const products = [
//   { key: "BarLight", image: Bar_Light },
//   { key: "RingLight", image: Ring_Light },
//   { key: "DomeLight", image: Dome_Light },
//   { key: "FlatDiffusedLightWithCenterHole", image: Flat_Diffused_Light_With_Center_Hole },
//   { key: "FlatDiffusedLight", image: Flat_Diffused_Light },
//   { key: "IndirectFlatLight", image: Indirect_Flat_Light },
//   { key: "BackLight", image: Back_Light },
//   { key: "SpotLight", image: Spot_Light },
//   { key: "TunnelLight", image: Tunnel_Light },
// ];

// const industries = [
//   {
//     id: "automobile",
//     key: "Automobile",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <rect x="3" y="11" width="18" height="7" rx="2" />
//         <circle cx="7.5" cy="18.5" r="2.5" />
//         <circle cx="16.5" cy="18.5" r="2.5" />
//         <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
//       </svg>
//     ),
//   },
//   {
//     id: "metal-mining-cement",
//     key: "MetalMiningCement",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <rect x="3" y="12" width="18" height="8" />
//         <path d="M12 3v9" />
//         <path d="M8 7h8" />
//       </svg>
//     ),
//   },
//   {
//     id: "pharma-fmcg",
//     key: "PharmaFmcg",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M12 22V2M7 12h10" />
//         <circle cx="12" cy="12" r="10" />
//       </svg>
//     ),
//   },
//   {
//     id: "plastic-rubber",
//     key: "PlasticRubberIndustry",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <rect x="3" y="12" width="18" height="8" />
//         <path d="M7 12l3-5 3 5 4-8" />
//       </svg>
//     ),
//   },
//   {
//     id: "warehouse-distribution",
//     key: "WarehouseDistribution",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3" />
//         <path d="M9 21h6" />
//       </svg>
//     ),
//   },
//   {
//     id: "wire",
//     key: "WireIndustry",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" />
//         <path d="M4 12c2 0 2 4 4 4s2-4 4-4 2 4 4 4 2-4 4-4" />
//       </svg>
//     ),
//   },
//   {
//     id: "aerospace",
//     key: "Aerospace",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M12 2l3 7-3 13-3-13 3-7z" />
//         <path d="M9 9h6" />
//       </svg>
//     ),
//   },
// ];

// const toSlug = (name) => {
//   const slugMap = {
//     "BarLight": "bar-light",
//     "RingLight": "ring-light",
//     "DomeLight": "dome-light",
//     "FlatDiffusedLightWithCenterHole": "flat-diffused-light-with-center-hole",
//     "FlatDiffusedLight": "flat-diffused-light",
//     "IndirectFlatLight": "indirect-flat-light",
//     "BackLight": "back-light",
//     "SpotLight": "spot-light",
//     "TunnelLight": "tunnel-light"
//   };
//   return slugMap[name] || name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
// };

// const IconCircle = ({ children }) => (
//   <div className="icon-circle">
//     <div className="icon-wrapper">{children}</div>
//   </div>
// );

// const Dashboard = ({ type }) => {
//   const { t } = useTranslation();
//   const [toggleState, setToggleState] = useState(type);
//   const [isSliding, setIsSliding] = useState(false);
//   const [showRestContent, setShowRestContent] = useState(type === "dashboardOne");
//   const [showSidebarAtTop, setShowSidebarAtTop] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const homeRef = useRef(null);
//   const customerBenefitsRef = useRef(null);
//   const caseStudyRef = useRef(null);
//   const implementationRef = useRef(null);
//   const clientRef = useRef(null);
//   const contactUsRef = useRef(null);
//   const aboutUsRef = useRef(null);
//   const navigateTimeoutRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // Dynamic container class to control scrollbar
//   const containerClass = toggleState === "dashboardOne"
//     ? "dashboard-container dashboard-one"
//     : "dashboard-container dashboard-two";

//   // Handle #hash scrolling
//   useEffect(() => {
//     const hash = window.location.hash.replace("#", "");
//     if (!hash) return;

//     const sectionMap = {
//       "home": homeRef,
//       "customer-benefits": customerBenefitsRef,
//       "case-studies": caseStudyRef,
//       "implementation": implementationRef,
//       "clients": clientRef,
//       "contact-us-section": contactUsRef,
//       "about": aboutUsRef
//     };

//     const targetRef = sectionMap[hash];
//     if (targetRef?.current) {
//       setTimeout(() => {
//         targetRef.current.scrollIntoView({ behavior: "smooth" });
//       }, 300);
//     }
//   }, [location]);

//   // Scroll to top button logic for dashboard
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!implementationRef.current) return;
      
//       const implementationTop = implementationRef.current.offsetTop;
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
//       // Show sidebar at top when user reaches implementation section
//       if (scrollTop >= implementationTop - 200) { // 200px before reaching the section
//         setShowSidebarAtTop(true);
//       } else {
//         setShowSidebarAtTop(false);
//       }
//     };
    
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Sync with route changes
//   useEffect(() => {
//     localStorage.setItem("toggleState", type);
//     setToggleState(type);
//     setShowRestContent(type === "dashboardOne");
//   }, [type]);

//   // Handle scroll restoration and deep linking
//   useEffect(() => {
//     if (window.history.scrollRestoration) {
//       window.history.scrollRestoration = "manual";
//     }

//     const scrollTo = location.state?.scrollTo;
//     const fromCaseStudy = location.state?.fromCaseStudy;

//     const scrollToSection = () => {
//       if (location.pathname === "/") {
//         setTimeout(() => {
//           if (fromCaseStudy && caseStudyRef.current) {
//             caseStudyRef.current.scrollIntoView({ behavior: "smooth" });
//             window.history.replaceState({ ...location.state, fromCaseStudy: false, scrollTo: null }, "");
//           } else if (scrollTo) {
//             const refMap = {
//               "Home": homeRef,
//               "Customer Benefits": customerBenefitsRef,
//               "Our Case Studies": caseStudyRef,
//               "Implementation Roadmap": implementationRef,
//               "Our Clients": clientRef,
//               "Contact Us": contactUsRef,
//               "about": aboutUsRef,
//               "mission": aboutUsRef,
//               "vision": aboutUsRef,
//             };
//             const target = refMap[scrollTo];
//             if (target?.current) {
//               target.current.scrollIntoView({ behavior: "smooth" });
//             } else {
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }
//             window.history.replaceState({ ...location.state, scrollTo: null, fromCaseStudy: false }, "");
//           } else {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }
//         }, 100);
//       } else if (location.pathname === "/dashboardTwo") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     };

//     scrollToSection();

//     const handlePopstate = () => {
//       const isDashboardTwo = window.location.pathname === "/dashboardTwo";
//       setToggleState(isDashboardTwo ? "dashboardTwo" : "dashboardOne");
//       setShowRestContent(!isDashboardTwo);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     window.addEventListener("popstate", handlePopstate);
//     return () => {
//       window.removeEventListener("popstate", handlePopstate);
//       if (navigateTimeoutRef.current) clearTimeout(navigateTimeoutRef.current);
//     };
//   }, [location, navigate]);

//   const handleToggle = () => {
//     if (navigateTimeoutRef.current) return;
//     setIsSliding(true);
//     const newState = toggleState === "dashboardOne" ? "dashboardTwo" : "dashboardOne";
//     const newPath = newState === "dashboardOne" ? "/" : "/dashboardTwo";

//     navigateTimeoutRef.current = setTimeout(() => {
//       setToggleState(newState);
//       setShowRestContent(newState === "dashboardOne");
//       navigate(newPath, { replace: true, state: { showRestContent: newState === "dashboardOne" } });
//       setIsSliding(false);
//       navigateTimeoutRef.current = null;
//     }, 500);
//   };

//   const handleIndustryClick = (id) => {
//     if (navigateTimeoutRef.current) return;
//     setIsSliding(true);
//     navigateTimeoutRef.current = setTimeout(() => {
//       navigate(`/industry/${id}`, { state: {} });
//       setIsSliding(false);
//       navigateTimeoutRef.current = null;
//     }, 500);
//   };

//   const handleProductClick = (slug) => {
//     if (navigateTimeoutRef.current) return;
//     setIsSliding(true);
//     navigateTimeoutRef.current = setTimeout(() => {
//       navigate(`/product/${slug}`, { state: {} });
//       setIsSliding(false);
//       navigateTimeoutRef.current = null;
//     }, 500);
//   };

//   return (
//     <>
//       <SideBar showAtTop={showSidebarAtTop} />
//       <Navbar />
     
//       <div className={containerClass} ref={homeRef}>
//         <div className="content-wrapper">
//           <div className="heading-section">
//             <h1>{t('DashboardHeading')}</h1>
//             <h2>{t('DashboardSubheading')}</h2>
//           </div>

//           <div className="slider-toggle-container">
//             <div
//               className={`slider-toggle ${toggleState === "dashboardOne" ? "left" : "right"}`}
//               onClick={handleToggle}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleToggle())}
//               aria-pressed={toggleState === "dashboardTwo"}
//               aria-label={t('ToggleAriaLabel')}
//             >
//               <div className="toggle-option">{t('MachineVisionSystem')}</div>
//               <div className="toggle-option">{t('MachineVisionLight')}</div>
//               <div className="slider-indicator" />
//             </div>
//           </div>

//           <div className={`dashboard-content ${isSliding ? "slide-out" : "slide-in"}`}>
//             {toggleState === "dashboardOne" && (
//               <section key="dashboardOne">
//                 <div className="industries-grid" role="list">
//                   {industries.map(({ id, key, icon }) => (
//                     <div
//                       key={id}
//                       className="industry-card"
//                       onClick={() => handleIndustryClick(id)}
//                       tabIndex={0}
//                       onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleIndustryClick(id))}
//                       role="button"
//                       aria-label={t('IndustryAriaLabel', { name: t(key) })}
//                     >
//                       <IconCircle>{icon}</IconCircle>
//                       <div className="industry-name">{t(key)}</div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {toggleState === "dashboardTwo" && (
//               <section key="dashboardTwo">
//                 <div className="industries-grid" role="list">
//                   {products.map(({ key, image }) => {
//                     const slug = toSlug(key);
//                     return (
//                       <div
//                         key={slug}
//                         className="product-card"
//                         onClick={() => handleProductClick(slug)}
//                         tabIndex={0}
//                         onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleProductClick(slug))}
//                         role="listitem"
//                         aria-label={t('ProductAriaLabel', { name: t(key) })}
//                       >
//                         <img
//                           src={image}
//                           alt={t(`${key}Alt`)}
//                           className="product-logo"
//                           draggable={false}
//                           loading="lazy"
//                         />
//                         <div className="industry-name">{t(key)}</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </section>
//             )}
//           </div>
//         </div>

//         <CookieConsent />

//         {/* Long sections only rendered on dashboardOne - NO Suspense wrapper here anymore */}
//         {showRestContent && toggleState === "dashboardOne" && (
//           <>
//             <section id="customer-benefits" style={{ marginTop: "2rem" }} ref={customerBenefitsRef}>
//               <CustomerBenefits />
//             </section>

//             <section id="clients" ref={clientRef}>
//               <Client />
//             </section>

//             <section id="case-studies" ref={caseStudyRef}>
//               <CaseStudy />
//             </section>

//             <section id="about" ref={aboutUsRef}>
//               <Aboutus_Mission_Vision initialTab={location.state?.scrollTo} />
//             </section>

//             <section id="core-values">
//               <CoreValues />
//             </section>

//             <section id="implementation" ref={implementationRef}>
//               <Implementation />
//             </section>

//             <section id="our-expertises">
//               <OurExpertises />
//             </section>

//             <section id="supporting-partners">
//               <SupportingPartners />
//             </section>

//             <section id="reviews">
//               <Review />
//             </section>

//             <section id="contact-us-section" ref={contactUsRef}>
//               <ContactUs />
//             </section>

//             <section id="footer">
//               <Footer />
//             </section>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Dashboard;


import React, { useState, useRef, useEffect, lazy } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";
import CookieConsent from "./CookieConsent";
import "../Styles/Dashboard.css";

import Bar_Light from "../assets/Lights/Bar_Light.png";
import Ring_Light from "../assets/Lights/Ring_Light.png";
import Dome_Light from "../assets/Lights/Dome_Light.png";
import Flat_Diffused_Light_With_Center_Hole from "../assets/Lights/Flat_Direct_Diffused_Light_With_Center_Hole.png";
import Flat_Diffused_Light from "../assets/Lights/Flat_DIrect_Diffused_Light.png";
import Indirect_Flat_Light from "../assets/Lights/Indirect_Flat_Light.png";
import Back_Light from "../assets/Lights/Back_Light.png";
import Spot_Light from "../assets/Lights/Spot_Light.png";
import Tunnel_Light from "../assets/Lights/Tunnel_Light.png";
import SideBar from "./Sidebar";

// Lazy loaded components
const CompanyData = lazy(() => import("./CompanyData"));
const CustomerBenefits = lazy(() => import("./CustomerBenefits"));
const Client = lazy(() => import("./Client"));
const CaseStudy = lazy(() => import("./CaseStudy"));
const Aboutus_Mission_Vision = lazy(() => import("./Aboutus_Mission_Vision"));
const CoreValues = lazy(() => import("./CoreValues"));
const Implementation = lazy(() => import("./Implementation"));
const OurExpertises = lazy(() => import("./OurExpertise"));
const SupportingPartners = lazy(() => import("./SupportingPartners"));
const Review = lazy(() => import("./Review"));
const ContactUs = lazy(() => import("./ContactUs"));
const Footer = lazy(() => import("./Footer"));

const products = [
  { key: "BarLight", image: Bar_Light },
  { key: "RingLight", image: Ring_Light },
  { key: "DomeLight", image: Dome_Light },
  { key: "FlatDiffusedLightWithCenterHole", image: Flat_Diffused_Light_With_Center_Hole },
  { key: "FlatDiffusedLight", image: Flat_Diffused_Light },
  { key: "IndirectFlatLight", image: Indirect_Flat_Light },
  { key: "BackLight", image: Back_Light },
  { key: "SpotLight", image: Spot_Light },
  { key: "TunnelLight", image: Tunnel_Light },
];

const industries = [
  {
    id: "automobile",
    key: "Automobile",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <rect x="3" y="11" width="18" height="7" rx="2" />
        <circle cx="7.5" cy="18.5" r="2.5" />
        <circle cx="16.5" cy="18.5" r="2.5" />
        <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      </svg>
    ),
  },
  {
    id: "metal-mining-cement",
    key: "MetalMiningCement",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <rect x="3" y="12" width="18" height="8" />
        <path d="M12 3v9" />
        <path d="M8 7h8" />
      </svg>
    ),
  },
  {
    id: "pharma-fmcg",
    key: "PharmaFmcg",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <path d="M12 22V2M7 12h10" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    id: "plastic-rubber",
    key: "PlasticRubberIndustry",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <rect x="3" y="12" width="18" height="8" />
        <path d="M7 12l3-5 3 5 4-8" />
      </svg>
    ),
  },
  {
    id: "warehouse-distribution",
    key: "WarehouseDistribution",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <path d="M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    id: "wire",
    key: "WireIndustry",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" />
        <path d="M4 12c2 0 2 4 4 4s2-4 4-4 2 4 4 4 2-4 4-4" />
      </svg>
    ),
  },
  {
    id: "aerospace",
    key: "Aerospace",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <path d="M12 2l3 7-3 13-3-13 3-7z" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
];

const toSlug = (name) => {
  const slugMap = {
    "BarLight": "bar-light",
    "RingLight": "ring-light",
    "DomeLight": "dome-light",
    "FlatDiffusedLightWithCenterHole": "flat-diffused-light-with-center-hole",
    "FlatDiffusedLight": "flat-diffused-light",
    "IndirectFlatLight": "indirect-flat-light",
    "BackLight": "back-light",
    "SpotLight": "spot-light",
    "TunnelLight": "tunnel-light"
  };
  return slugMap[name] || name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

const IconCircle = ({ children }) => (
  <div className="icon-circle">
    <div className="icon-wrapper">{children}</div>
  </div>
);

const Dashboard = ({ type }) => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(type);
  const [isSliding, setIsSliding] = useState(false);
  const [showRestContent, setShowRestContent] = useState(type === "dashboardOne");
  const [showSidebarAtTop, setShowSidebarAtTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const homeRef = useRef(null);
  const customerBenefitsRef = useRef(null);
  const caseStudyRef = useRef(null);
  const implementationRef = useRef(null);
  const clientRef = useRef(null);
  const contactUsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const navigateTimeoutRef = useRef(null);
  const timeoutRef = useRef(null);

  // Dynamic container class to control scrollbar
  const containerClass = toggleState === "dashboardOne"
    ? "dashboard-container dashboard-one"
    : "dashboard-container dashboard-two";

  // Handle #hash scrolling
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const sectionMap = {
      "home": homeRef,
      "customer-benefits": customerBenefitsRef,
      "case-studies": caseStudyRef,
      "implementation": implementationRef,
      "clients": clientRef,
      "contact-us-section": contactUsRef,
      "about": aboutUsRef
    };

    const targetRef = sectionMap[hash];
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  // Scroll to top button logic for dashboard
  useEffect(() => {
    const handleScroll = () => {
      if (!implementationRef.current) return;
      
      const implementationTop = implementationRef.current.offsetTop;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Show sidebar at top when user reaches implementation section
      if (scrollTop >= implementationTop - 200) { // 200px before reaching the section
        setShowSidebarAtTop(true);
      } else {
        setShowSidebarAtTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync with route changes
  useEffect(() => {
    localStorage.setItem("toggleState", type);
    setToggleState(type);
    setShowRestContent(type === "dashboardOne");
  }, [type]);
  

  // Handle scroll restoration and deep linking
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    const scrollTo = location.state?.scrollTo;
    const fromCaseStudy = location.state?.fromCaseStudy;

    const scrollToSection = () => {
      if (location.pathname === "/") {
        setTimeout(() => {
          if (fromCaseStudy && caseStudyRef.current) {
            caseStudyRef.current.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState({ ...location.state, fromCaseStudy: false, scrollTo: null }, "");
          } else if (scrollTo) {
            const refMap = {
              "Home": homeRef,
              "Customer Benefits": customerBenefitsRef,
              "Our Case Studies": caseStudyRef,
              "Implementation Roadmap": implementationRef,
              "Our Clients": clientRef,
              "Contact Us": contactUsRef,
              "about": aboutUsRef,
              "mission": aboutUsRef,
              "vision": aboutUsRef,
            };
            const target = refMap[scrollTo];
            if (target?.current) {
              target.current.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            window.history.replaceState({ ...location.state, scrollTo: null, fromCaseStudy: false }, "");
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      } else if (location.pathname === "/dashboardTwo") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    scrollToSection();

    const handlePopstate = () => {
      const isDashboardTwo = window.location.pathname === "/dashboardTwo";
      setToggleState(isDashboardTwo ? "dashboardTwo" : "dashboardOne");
      setShowRestContent(!isDashboardTwo);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
      if (navigateTimeoutRef.current) clearTimeout(navigateTimeoutRef.current);
    };
  }, [location, navigate]);

  const handleToggle = () => {
    if (navigateTimeoutRef.current) return;
    setIsSliding(true);
    const newState = toggleState === "dashboardOne" ? "dashboardTwo" : "dashboardOne";
    const newPath = newState === "dashboardOne" ? "/" : "/dashboardTwo";

    navigateTimeoutRef.current = setTimeout(() => {
      setToggleState(newState);
      setShowRestContent(newState === "dashboardOne");
      navigate(newPath, { replace: true, state: { showRestContent: newState === "dashboardOne" } });
      setIsSliding(false);
      navigateTimeoutRef.current = null;
    }, 500);
  };

  const handleIndustryClick = (id) => {
    if (navigateTimeoutRef.current) return;
    setIsSliding(true);
    navigateTimeoutRef.current = setTimeout(() => {
      navigate(`/industry/${id}`, { state: {} });
      setIsSliding(false);
      navigateTimeoutRef.current = null;
    }, 500);
  };

  const handleProductClick = (slug) => {
    if (navigateTimeoutRef.current) return;
    setIsSliding(true);
    navigateTimeoutRef.current = setTimeout(() => {
      navigate(`/product/${slug}`, { state: {} });
      setIsSliding(false);
      navigateTimeoutRef.current = null;
    }, 500);
  };

  return (
    <>
      <SideBar showAtTop={showSidebarAtTop} />
      <Navbar />
     
      <div className={containerClass} ref={homeRef}>
        <div className="content-wrapper">
          <div className="heading-section">
            <h1>{t('DashboardHeading')}</h1>
            <h2>{t('DashboardSubheading')}</h2>
          </div>

          <div className="slider-toggle-container">
            <div
              className={`slider-toggle ${toggleState === "dashboardOne" ? "left" : "right"}`}
              onClick={handleToggle}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleToggle())}
              aria-pressed={toggleState === "dashboardTwo"}
              aria-label={t('ToggleAriaLabel')}
            >
              <div className="toggle-option">{t('MachineVisionSystem')}</div>
              <div className="toggle-option">{t('MachineVisionLight')}</div>
              <div className="slider-indicator" />
            </div>
          </div>

          <div className={`dashboard-content ${isSliding ? "slide-out" : "slide-in"}`}>
            {toggleState === "dashboardOne" && (
              <section key="dashboardOne">
                <div className="industries-grid" role="list">
                  {industries.map(({ id, key, icon }) => (
                    <div
                      key={id}
                      className="industry-card"
                      onClick={() => handleIndustryClick(id)}
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleIndustryClick(id))}
                      role="button"
                      aria-label={t('IndustryAriaLabel', { name: t(key) })}
                    >
                      <IconCircle>{icon}</IconCircle>
                      <div className="industry-name">{t(key)}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {toggleState === "dashboardTwo" && (
              <section key="dashboardTwo">
                <div className="industries-grid" role="list">
                  {products.map(({ key, image }) => {
                    const slug = toSlug(key);
                    return (
                      <div
                        key={slug}
                        className="product-card"
                        onClick={() => handleProductClick(slug)}
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleProductClick(slug))}
                        role="listitem"
                        aria-label={t('ProductAriaLabel', { name: t(key) })}
                      >
                        <img
                          src={image}
                          alt={t(`${key}Alt`)}
                          className="product-logo"
                          draggable={false}
                          loading="lazy"
                        />
                        <div className="industry-name">{t(key)}</div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>

        <CookieConsent />

        {/* Long sections only rendered on dashboardOne - NO Suspense wrapper here anymore */}
        {showRestContent && toggleState === "dashboardOne" && (
          <>
            <section id="company-data" style={{ marginTop: "2rem" }}>
              <CompanyData />
            </section>

            <section id="customer-benefits" ref={customerBenefitsRef}>
              <CustomerBenefits />
            </section>

            <section id="clients" ref={clientRef}>
              <Client />
            </section>

            <section id="case-studies" ref={caseStudyRef}>
              <CaseStudy />
            </section>

            <section id="about" ref={aboutUsRef}>
              <Aboutus_Mission_Vision initialTab={location.state?.scrollTo} />
            </section>

            <section id="core-values">
              <CoreValues />
            </section>

            <section id="implementation" ref={implementationRef}>
              <Implementation />
            </section>

            <section id="our-expertises">
              <OurExpertises />
            </section>

            <section id="supporting-partners">
              <SupportingPartners />
            </section>

            <section id="reviews">
              <Review />
            </section>

            <section id="contact-us-section" ref={contactUsRef}>
              <ContactUs />
            </section>

            <section id="footer">
              <Footer />
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;

// import React, { useState, useRef, useEffect, lazy } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import Navbar from "./Navbar";
// import CookieConsent from "./CookieConsent";
// import "../Styles/Dashboard.css";

// import Bar_Light from "../assets/Lights/Bar_Light.png";
// import Ring_Light from "../assets/Lights/Ring_Light.png";
// import Dome_Light from "../assets/Lights/Dome_Light.png";
// import Flat_Diffused_Light_With_Center_Hole from "../assets/Lights/Flat_Direct_Diffused_Light_With_Center_Hole.png";
// import Flat_Diffused_Light from "../assets/Lights/Flat_DIrect_Diffused_Light.png";
// import Indirect_Flat_Light from "../assets/Lights/Indirect_Flat_Light.png";
// import Back_Light from "../assets/Lights/Back_Light.png";
// import Spot_Light from "../assets/Lights/Spot_Light.png";
// import Tunnel_Light from "../assets/Lights/Tunnel_Light.png";
// import SideBar from "./Sidebar";

// // Lazy loaded components
// const CompanyData = lazy(() => import("./CompanyData"));
// const CustomerBenefits = lazy(() => import("./CustomerBenefits"));
// const Client = lazy(() => import("./Client"));
// const CaseStudy = lazy(() => import("./CaseStudy"));
// const Aboutus_Mission_Vision = lazy(() => import("./Aboutus_Mission_Vision"));
// const CoreValues = lazy(() => import("./CoreValues"));
// const Implementation = lazy(() => import("./Implementation"));
// const OurExpertises = lazy(() => import("./OurExpertise"));
// const SupportingPartners = lazy(() => import("./SupportingPartners"));
// const Review = lazy(() => import("./Review"));
// const ContactUs = lazy(() => import("./ContactUs"));
// const Footer = lazy(() => import("./Footer"));

// const products = [
//   { key: "BarLight", image: Bar_Light },
//   { key: "RingLight", image: Ring_Light },
//   { key: "DomeLight", image: Dome_Light },
//   { key: "FlatDiffusedLightWithCenterHole", image: Flat_Diffused_Light_With_Center_Hole },
//   { key: "FlatDiffusedLight", image: Flat_Diffused_Light },
//   { key: "IndirectFlatLight", image: Indirect_Flat_Light },
//   { key: "BackLight", image: Back_Light },
//   { key: "SpotLight", image: Spot_Light },
//   { key: "TunnelLight", image: Tunnel_Light },
// ];

// const industries = [
//   {
//     id: "automobile",
//     key: "Automobile",
//     icon: (
//       <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <rect x="3" y="11" width="18" height="7" rx="2" />
//         <circle cx="7.5" cy="18.5" r="2.5" />
//         <circle cx="16.5" cy="18.5" r="2.5" />
//         <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
//       </svg>
//     ),
//   },
//   {
//     id: "metal-mining-cement",
//     key: "MetalMiningCement",
//     icon: (
//       <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <rect x="3" y="12" width="18" height="8" />
//         <path d="M12 3v9" />
//         <path d="M8 7h8" />
//       </svg>
//     ),
//   },
//   {
//     id: "pharma-fmcg",
//     key: "PharmaFmcg",
//     icon: (
//       <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M12 22V2M7 12h10" />
//         <circle cx="12" cy="12" r="10" />
//       </svg>
//     ),
//   },
//   {
//     id: "plastic-rubber",
//     key: "PlasticRubberIndustry",
//     icon: (
//       <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <rect x="3" y="12" width="18" height="8" />
//         <path d="M7 12l3-5 3 5 4-8" />
//       </svg>
//     ),
//   },
//   {
//     id: "warehouse-distribution",
//     key: "WarehouseDistribution",
//     icon: (
//       <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3" />
//         <path d="M9 21h6" />
//       </svg>
//     ),
//   },
//   {
//     id: "wire",
//     key: "WireIndustry",
//     icon: (
//       <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" />
//         <path d="M4 12c2 0 2 4 4 4s2-4 4-4 2 4 4 4 2-4 4-4" />
//       </svg>
//     ),
//   },
//   {
//     id: "aerospace",
//     key: "Aerospace",
//     icon: (
//       <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M12 2l3 7-3 13-3-13 3-7z" />
//         <path d="M9 9h6" />
//       </svg>
//     ),
//   },
// ];

// const toSlug = (name) => {
//   const slugMap = {
//     "BarLight": "bar-light",
//     "RingLight": "ring-light",
//     "DomeLight": "dome-light",
//     "FlatDiffusedLightWithCenterHole": "flat-diffused-light-with-center-hole",
//     "FlatDiffusedLight": "flat-diffused-light",
//     "IndirectFlatLight": "indirect-flat-light",
//     "BackLight": "back-light",
//     "SpotLight": "spot-light",
//     "TunnelLight": "tunnel-light"
//   };
//   return slugMap[name] || name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
// };

// const Dashboard = ({ type }) => {
//   const { t } = useTranslation();
//   const [toggleState, setToggleState] = useState(type);
//   const [isSliding, setIsSliding] = useState(false);
//   const [showRestContent, setShowRestContent] = useState(type === "dashboardOne");
//   const [showSidebarAtTop, setShowSidebarAtTop] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const homeRef = useRef(null);
//   const customerBenefitsRef = useRef(null);
//   const caseStudyRef = useRef(null);
//   const implementationRef = useRef(null);
//   const clientRef = useRef(null);
//   const contactUsRef = useRef(null);
//   const aboutUsRef = useRef(null);
//   const navigateTimeoutRef = useRef(null);

//   const containerClass = toggleState === "dashboardOne"
//     ? "dashboard-container dashboard-one"
//     : "dashboard-container dashboard-two";

//   // Mount animation trigger
//   useEffect(() => {
//     const timer = setTimeout(() => setMounted(true), 80);
//     return () => clearTimeout(timer);
//   }, []);

//   // Hash-based scroll
//   useEffect(() => {
//     const hash = window.location.hash.replace("#", "");
//     if (!hash) return;
//     const sectionMap = {
//       "home":               homeRef,
//       "customer-benefits":  customerBenefitsRef,
//       "case-studies":       caseStudyRef,
//       "implementation":     implementationRef,
//       "clients":            clientRef,
//       "contact-us-section": contactUsRef,
//       "about":              aboutUsRef,
//     };
//     const targetRef = sectionMap[hash];
//     if (targetRef?.current) {
//       setTimeout(() => targetRef.current.scrollIntoView({ behavior: "smooth" }), 300);
//     }
//   }, [location]);

//   // Sidebar visibility based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!implementationRef.current) return;
//       const implementationTop = implementationRef.current.offsetTop;
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       setShowSidebarAtTop(scrollTop >= implementationTop - 200);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Sync toggle state with route prop
//   useEffect(() => {
//     localStorage.setItem("toggleState", type);
//     setToggleState(type);
//     setShowRestContent(type === "dashboardOne");
//   }, [type]);

//   // Scroll restoration + deep-link handling
//   useEffect(() => {
//     if (window.history.scrollRestoration) window.history.scrollRestoration = "manual";

//     const scrollTo      = location.state?.scrollTo;
//     const fromCaseStudy = location.state?.fromCaseStudy;

//     const scrollToSection = () => {
//       if (location.pathname === "/") {
//         setTimeout(() => {
//           if (fromCaseStudy && caseStudyRef.current) {
//             caseStudyRef.current.scrollIntoView({ behavior: "smooth" });
//             window.history.replaceState(
//               { ...location.state, fromCaseStudy: false, scrollTo: null }, ""
//             );
//           } else if (scrollTo) {
//             const refMap = {
//               "Home":                   homeRef,
//               "Customer Benefits":      customerBenefitsRef,
//               "Our Case Studies":       caseStudyRef,
//               "Implementation Roadmap": implementationRef,
//               "Our Clients":            clientRef,
//               "Contact Us":             contactUsRef,
//               "about":                  aboutUsRef,
//               "mission":                aboutUsRef,
//               "vision":                 aboutUsRef,
//             };
//             const target = refMap[scrollTo];
//             if (target?.current) target.current.scrollIntoView({ behavior: "smooth" });
//             else window.scrollTo({ top: 0, behavior: "smooth" });
//             window.history.replaceState(
//               { ...location.state, scrollTo: null, fromCaseStudy: false }, ""
//             );
//           } else {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }
//         }, 100);
//       } else if (location.pathname === "/dashboardTwo") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     };

//     scrollToSection();

//     const handlePopstate = () => {
//       const isDashboardTwo = window.location.pathname === "/dashboardTwo";
//       setToggleState(isDashboardTwo ? "dashboardTwo" : "dashboardOne");
//       setShowRestContent(!isDashboardTwo);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     window.addEventListener("popstate", handlePopstate);
//     return () => {
//       window.removeEventListener("popstate", handlePopstate);
//       if (navigateTimeoutRef.current) clearTimeout(navigateTimeoutRef.current);
//     };
//   }, [location, navigate]);

//   const handleToggle = () => {
//     if (navigateTimeoutRef.current) return;
//     setIsSliding(true);
//     const newState = toggleState === "dashboardOne" ? "dashboardTwo" : "dashboardOne";
//     const newPath  = newState === "dashboardOne" ? "/" : "/dashboardTwo";
//     navigateTimeoutRef.current = setTimeout(() => {
//       setToggleState(newState);
//       setShowRestContent(newState === "dashboardOne");
//       navigate(newPath, { replace: true, state: { showRestContent: newState === "dashboardOne" } });
//       setIsSliding(false);
//       navigateTimeoutRef.current = null;
//     }, 500);
//   };

//   const handleIndustryClick = (id) => {
//     if (navigateTimeoutRef.current) return;
//     setIsSliding(true);
//     navigateTimeoutRef.current = setTimeout(() => {
//       navigate(`/industry/${id}`, { state: {} });
//       setIsSliding(false);
//       navigateTimeoutRef.current = null;
//     }, 500);
//   };

//   const handleProductClick = (slug) => {
//     if (navigateTimeoutRef.current) return;
//     setIsSliding(true);
//     navigateTimeoutRef.current = setTimeout(() => {
//       navigate(`/product/${slug}`, { state: {} });
//       setIsSliding(false);
//       navigateTimeoutRef.current = null;
//     }, 500);
//   };

//   return (
//     <>
//       <SideBar showAtTop={showSidebarAtTop} />
//       <Navbar />

//       <div className={containerClass} ref={homeRef}>

//         <div className={`content-wrapper ${mounted ? "content-wrapper--visible" : ""}`}>

//           {/* ── Hero Section ── */}
//           <div className="hero-section">
//             <div className="hero-label">
//               <span className="hero-label-dot" />
//               <span className="hero-label-text">MACHINE VISION SOLUTIONS</span>
//             </div>

//             <h1 className="hero-title">{t('DashboardHeading')}</h1>
//             <p className="hero-sub">{t('DashboardSubheading')}</p>

//             {/* Scroll cue */}
//             <div className="hero-scroll-cue" aria-hidden="true">
//               <div className="hero-scroll-mouse">
//                 <div className="hero-scroll-wheel" />
//               </div>
//             </div>
//           </div>

//           {/* ── Toggle ── */}
//           <div className="toggle-section">
//             <div className="toggle-label-row">
//               <span className="toggle-label-line" />
//               <span className="toggle-label-text">SELECT CATEGORY</span>
//               <span className="toggle-label-line" />
//             </div>

//             <div className="slider-toggle-container">
//               <div
//                 className={`slider-toggle ${toggleState === "dashboardOne" ? "left" : "right"}`}
//                 onClick={handleToggle}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) =>
//                   (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleToggle())
//                 }
//                 aria-pressed={toggleState === "dashboardTwo"}
//                 aria-label={t('ToggleAriaLabel')}
//               >
//                 <div className="toggle-option">{t('MachineVisionSystem')}</div>
//                 <div className="toggle-option">{t('MachineVisionLight')}</div>
//                 <div className="slider-indicator">
//                   <span className="slider-indicator-glow" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Cards Grid ── */}
//           <div className={`dashboard-content ${isSliding ? "slide-out" : "slide-in"}`}>

//             {toggleState === "dashboardOne" && (
//               <section key="dashboardOne">
//                 <div className="grid-section-label">
//                   <span>INDUSTRIES WE SERVE</span>
//                   <span className="grid-section-count">{industries.length} sectors</span>
//                 </div>
//                 <div className="industries-grid" role="list">
//                   {industries.map(({ id, key, icon }, idx) => (
//                     <div
//                       key={id}
//                       className="industry-card"
//                       style={{ "--idx": idx }}
//                       onClick={() => handleIndustryClick(id)}
//                       tabIndex={0}
//                       onKeyDown={(e) =>
//                         (e.key === "Enter" || e.key === " ") &&
//                         (e.preventDefault(), handleIndustryClick(id))
//                       }
//                       role="button"
//                       aria-label={t('IndustryAriaLabel', { name: t(key) })}
//                     >
//                       <div className="icon-circle">
//                         <div className="icon-wrapper">{icon}</div>
//                       </div>
//                       <div className="industry-name">{t(key)}</div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {toggleState === "dashboardTwo" && (
//               <section key="dashboardTwo">
//                 <div className="grid-section-label">
//                   <span>PRODUCT RANGE</span>
//                   <span className="grid-section-count">{products.length} types</span>
//                 </div>
//                 <div className="industries-grid" role="list">
//                   {products.map(({ key, image }, idx) => {
//                     const slug = toSlug(key);
//                     return (
//                       <div
//                         key={slug}
//                         className="product-card"
//                         style={{ "--idx": idx }}
//                         onClick={() => handleProductClick(slug)}
//                         tabIndex={0}
//                         onKeyDown={(e) =>
//                           (e.key === "Enter" || e.key === " ") &&
//                           (e.preventDefault(), handleProductClick(slug))
//                         }
//                         role="listitem"
//                         aria-label={t('ProductAriaLabel', { name: t(key) })}
//                       >
//                         <div className="product-img-wrap">
//                           <img
//                             src={image}
//                             alt={t(`${key}Alt`)}
//                             className="product-logo"
//                             draggable={false}
//                             loading="lazy"
//                           />
//                         </div>
//                         <div className="industry-name">{t(key)}</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </section>
//             )}

//           </div>
//         </div>

//         <CookieConsent />

//         {showRestContent && toggleState === "dashboardOne" && (
//           <>
//             <section id="company-data" style={{ marginTop: "2rem" }}>
//               <CompanyData />
//             </section>

//             <section id="customer-benefits" ref={customerBenefitsRef}>
//               <CustomerBenefits />
//             </section>

//             <section id="clients" ref={clientRef}>
//               <Client />
//             </section>

//             <section id="case-studies" ref={caseStudyRef}>
//               <CaseStudy />
//             </section>

//             <section id="about" ref={aboutUsRef}>
//               <Aboutus_Mission_Vision initialTab={location.state?.scrollTo} />
//             </section>

//             <section id="core-values">
//               <CoreValues />
//             </section>

//             <section id="implementation" ref={implementationRef}>
//               <Implementation />
//             </section>

//             <section id="our-expertises">
//               <OurExpertises />
//             </section>

//             <section id="supporting-partners">
//               <SupportingPartners />
//             </section>

//             <section id="reviews">
//               <Review />
//             </section>

//             <section id="contact-us-section" ref={contactUsRef}>
//               <ContactUs />
//             </section>

//             <section id="footer">
//               <Footer />
//             </section>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Dashboard;