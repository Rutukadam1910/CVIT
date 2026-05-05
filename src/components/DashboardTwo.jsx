// import React, { useState, useRef, useEffect } from "react";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";
// const backgroundVideo = "https://res.cloudinary.com/dpsdxf2bc/video/upload/q_auto/background_cimxfk.mp4";

// import Bar_Light from "../assets/Bar_Light.png";
// import Ring_Light from "../assets/Ring_Light.png";
// import Dome_Light from "../assets/Dome_Light.png";
// import Flat_Diffused_Light_With_Center_Hole from "../assets/Flat_Direct_Diffused_Light_With_Center_Hole.png";
// import Flat_Diffused_Light from "../assets/Flat_DIrect_Diffused_Light.png";
// import Indirect_Flat_Light from "../assets/Indirect_Flat_Light.png";
// import Back_Light from "../assets/Back_Light.png";
// import Spot_Light from "../assets/Spot_Light.png";
// import Tunnel_Light from "../assets/Tunnel_Light.png";

// const products = [
//   { name: "Bar Light", image: Bar_Light },
//   { name: "Ring Light", image: Ring_Light },
//   { name: "Dome Light", image: Dome_Light },
//   { name: "Flat Diffused Light With Center Hole", image: Flat_Diffused_Light_With_Center_Hole },
//   { name: "Flat Diffused Light", image: Flat_Diffused_Light },
//   { name: "Indirect Flat Light", image: Indirect_Flat_Light },
//   { name: "Back Light", image: Back_Light },
//   { name: "Spot Light", image: Spot_Light },
//   { name: "Tunnel Light", image: Tunnel_Light },
// ];

// const toSlug = (name) =>
//   name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// const DashboardTwo = () => {
//   const [toggleState, setToggleState] = useState("dashboardTwo");
//   const [isSliding, setIsSliding] = useState(false);
//   const navigate = useNavigate();
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Update video time in localStorage on timeupdate
//     const handleTimeUpdate = () => {
//       if (videoRef.current) {
//         localStorage.setItem("videoCurrentTime", videoRef.current.currentTime);
//       }
//     };

//     const video = videoRef.current;
//     if (video) {
//       video.addEventListener("timeupdate", handleTimeUpdate);
//     }

//     // Reset isSliding to ensure slide-in animation
//     setIsSliding(false);

//     return () => {
//       if (video) {
//         video.removeEventListener("timeupdate", handleTimeUpdate);
//       }
//     };
//   }, []);

//   const handleLoadedMetadata = () => {
//     const savedTime = localStorage.getItem("videoCurrentTime");
//     if (videoRef.current && savedTime) {
//       videoRef.current.currentTime = parseFloat(savedTime);
//     }
//   };

//   const handleToggle = () => {
//     setIsSliding(true);
//     const newState = toggleState === "dashboardTwo" ? "dashboardOne" : "dashboardTwo";
//     setToggleState(newState);

//     setTimeout(() => {
//       setIsSliding(false);
//       if (newState === "dashboardOne") {
//         if (videoRef.current) {
//           localStorage.setItem("videoCurrentTime", videoRef.current.currentTime);
//         }
//         navigate("/", { state: { showRestContent: true } });
//       }
//     }, 500); // Maintain 500ms as requested
//   };

//   return (
//     <>
//       <style>{`
//         body {
//           margin: 0;
//           padding: 0;
//           font-family: 'Inter', sans-serif;
//           background: #000;
//         }
//         .dashboard-container {
//           width: 100%;
//           color: white;
//           overflow-x: hidden;
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           position: relative;
//         }
//         .video-wrapper {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100vw;
//           height: 100vh;
//           z-index: -1;
//         }
//         .video-background {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           opacity: 0.8;
//         }
//         .video-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.7);
//         }
//         .content-wrapper {
//           width: 100%;
//           max-width: 2000px;
//           padding: 3rem;
//           margin: 40.6px auto;
//           box-sizing: border-box;
//           position: relative;
//           z-index: 2;
//         }
//         .heading-section {
//           text-align: center;
//           margin-bottom: 1.68rem;
//         }
//         .heading-section h1 {
//           font-family: "Special Gothic Expanded One", sans-serif;
//           font-weight: 700;
//           font-size: 4.35vw;
//           color: #EF3A3A;
//           text-shadow: 0 0 5.36px rgba(239, 58, 58, 0.5);
//         }
//         .heading-section h2 {
//           font-size: 2vw;
//           color: white;
//           font-weight: 700;
//         }
//         .slider-toggle-container {
//           display: flex;
//           justify-content: center;
//           margin: 2.01rem 0 2.68rem;
//           cursor: pointer;
//         }
//         .slider-toggle {
//           position: relative;
//           width: 40.2%;
//           max-width: 402px;
//           height: 68px;
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(4.02px);
//           border: 0.67px solid rgba(255, 255, 255, 0.08);
//           border-radius: 33.5px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 5.36px;
//           box-shadow: 0 4.02px 12.06px rgba(0, 0, 0, 0.35);
//           cursor: pointer;
//           user-select: none;
//             cursor: pointer;
//         }
//         .toggle-option {
//           width: 50%;
//           text-align: center;
//           font-size: 0.938rem;
//           font-weight: 700;
//           z-index: 2;
//           color: white;
//            cursor: pointer;
//         }
//         .slider-indicator {
//           position: absolute;
//           width: 49%;
//           height: 87%;
//           background: #EF3A3A;
//           border-radius: 30.8px;
//           top: 7%;
//           left: 5.36px;
//           transition: transform 0.5s ease-in-out;
//           z-index: 1;
//           cursor: pointer;
//         }
//         .slider-toggle.right .slider-indicator {
//           transform: translateX(99%);
//             cursor: pointer;
//         }
//         .industries-grid {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 1.8rem;
//         }
//         .industry-card {
//           width: 130px;
//           height: 190.9px;
//           background: rgba(255, 255, 255, 0.10);
//           backdrop-filter: blur(4.02px);
//           border-radius: 20.1px;
//           box-shadow: 0 4.02px 12.06px rgba(0, 0, 0, 0.35);
//           color: white;
//           font-weight: 700;
//           cursor: pointer;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: flex-start;
//           padding-top: 1rem;
//           transition: transform 0.3s ease;
//           text-align: center;
//           user-select: none;
//           z-index: 2;
//         }
//         .industry-card:hover {
//           background-color: #f2f2f2;
//           color: #222;
//           transform: translateY(-4.02px);
//         }
//         .industry-name {
//           font-size: 1rem;
//           font-weight: 600;
//           margin-top: 20px;
//           word-break: break-word;
//         }
//         .industry-card:hover .industry-name {
//           color: #EF3A3A;
//         }
//         .industry-logo {
//           width: 70px;
//           height: 70px;
//           object-fit: contain;
//           border-radius: 12px;
//           user-select: none;
//           pointer-events: none;
//           filter: drop-shadow(0 0 2px rgba(0,0,0,0.7));
//         }
//         .dashboard-content {
//           transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
//         }
//         .dashboard-content.slide-out {
//           transform: translateX(-100%);
//           opacity: 0;
//         }
//         .dashboard-content.slide-in {
//           transform: translateX(0);
//           opacity: 1;
//         }
//       `}</style>

//       <Navbar />

//       <div className="video-wrapper">
//         <video
//           ref={videoRef}
//           className="video-background"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           src={backgroundVideo}
//           crossOrigin="anonymous"
//           aria-hidden="true"
//           onLoadedMetadata={handleLoadedMetadata}
//           onError={(e) => console.error("Background video error:", e)}
//         >
//           <source src={backgroundVideo} type="video/mp4" />
//           <img src="/path/to/fallback-image.jpg" alt="Video unavailable" />
//         </video>
//         <div className="video-overlay" />
//       </div>


//       <div className="dashboard-container" aria-label="Dashboard Two - Products">
//         <div className="content-wrapper">
//           <div className="heading-section">
//             <h1>The Future Of AI Is Here !</h1>
//             <h2>CVIT Solution Pvt Ltd</h2>
//           </div>

//           <div className="slider-toggle-container">
//             <div
//               className={`slider-toggle ${toggleState === "dashboardOne" ? "left" : "right"}`}
//               onClick={handleToggle}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   handleToggle();
//                 }
//               }}
//               aria-pressed={toggleState === "dashboardTwo"}
//               aria-label="Toggle dashboard view"
//             >
//               <div className="toggle-option">Solutions</div>
//               <div className="toggle-option">Machine Vision Light</div>
//               <div className="slider-indicator" />
//             </div>
//           </div>

//           <div className={`dashboard-content ${isSliding ? "slide-out" : "slide-in"}`}>
//             {toggleState === "dashboardTwo" && (
//               <section>
//                 <div className="industries-grid" role="list">
//                   {products.map(({ name, image }) => {
//                     const slug = toSlug(name);
//                     return (
//                       <div
//                         key={slug}
//                         className="industry-card"
//                         onClick={() => navigate(`/product/${slug}`)}
//                         tabIndex={0}
//                         onKeyDown={(e) => {
//                           if (e.key === "Enter" || e.key === " ") {
//                             e.preventDefault();
//                             navigate(`/product/${slug}`);
//                           }
//                         }}
//                         role="listitem"
//                         aria-label={`Go to details for product ${name}`}
//                       >
//                         <img
//                           src={image}
//                           alt={`${name} logo`}
//                           className="industry-logo"
//                           draggable={false}
//                           loading="lazy"
//                         />
//                         <div className="industry-name">{name}</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </section>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardTwo;




// import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import Navbar from "./Navbar";
// import DelayedFallback from "./DelayedFallback";
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
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
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
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
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
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M12 22V2M7 12h10" />
//         <circle cx="12" cy="12" r="10" />
//       </svg>
//     ),
//   },
//   {
//     id: "plastic-rubber",
//     key: "PlasticRubberIndustry",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <rect x="3" y="12" width="18" height="8" />
//         <path d="M7 12l3-5 3 5 4-8" />
//       </svg>
//     ),
//   },
//   {
//     id: "warehouse-distribution",
//     key: "WarehouseDistribution",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3" />
//         <path d="M9 21h6" />
//       </svg>
//     ),
//   },
//   {
//     id: "wire",
//     key: "WireIndustry",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
//         <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" />
//         <path d="M4 12c2 0 2 4 4 4s2-4 4-4 2 4 4 4 2-4 4-4" />
//       </svg>
//     ),
//   },
//   {
//     id: "aerospace",
//     key: "Aerospace",
//     icon: (
//       <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
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



//   // NEW — Handle #hash based scrolling from outside links
// useEffect(() => {
//   const hash = window.location.hash.replace("#", "");

//   if (!hash) return;

//   const sectionMap = {
//     "home": homeRef,
//     "customer-benefits": customerBenefitsRef,
//     "case-studies": caseStudyRef,
//     "implementation": implementationRef,
//     "clients": clientRef,
//     "contact-us-section": contactUsRef,
//     "about": aboutUsRef
//   };

//   const targetRef = sectionMap[hash];

//   if (targetRef?.current) {
//     setTimeout(() => {
//       targetRef.current.scrollIntoView({ behavior: "smooth" });
//     }, 300);
//   }
// }, [location]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const gotop = document.getElementById("gotop");
//       if (!gotop) return;

//       const documentHeight = document.documentElement.scrollHeight;
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       const middlePoint = documentHeight / 2;

//       if (scrollTop >= middlePoint) {
//         gotop.style.opacity = "1";
//         gotop.style.transform = "translateY(0)";
//         gotop.style.visibility = "visible";
//         gotop.style.transition = "opacity 0.4s ease-in-out, transform 0.4s ease-in-out";
//       } else {
//         gotop.style.opacity = "0";
//         gotop.style.transform = "translateY(20px)";
//         gotop.style.transition = "opacity 0.4s ease-in-out, transform 0.4s ease-in-out";
//         setTimeout(() => {
//           if (gotop.style.opacity === "0") gotop.style.visibility = "hidden";
//         }, 400);
//       }
//     };

//     const debouncedHandleScroll = () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//       timeoutRef.current = setTimeout(handleScroll, 100);
//     };

//     // Initialize the "Top" button as hidden
//     const gotop = document.getElementById("gotop");
//     if (gotop) {
//       gotop.style.opacity = "0";
//       gotop.style.visibility = "hidden";
//       gotop.style.transform = "translateY(20px)";
//     }

//     window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

//     const observer = new MutationObserver(debouncedHandleScroll);
//     observer.observe(document.body, { childList: true, subtree: true });

//     debouncedHandleScroll(); // Initial call to set state

//     return () => {
//       window.removeEventListener("scroll", debouncedHandleScroll);
//       observer.disconnect();
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("toggleState", type);
//     setToggleState(type);
//     setShowRestContent(type === "dashboardOne");
//   }, [type]);

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
//             switch (scrollTo) {
//               case "Home":
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//                 break;
//               case "Customer Benefits":
//                 customerBenefitsRef.current?.scrollIntoView({ behavior: "smooth" });
//                 break;
//               case "Our Case Studies":
//                 caseStudyRef.current?.scrollIntoView({ behavior: "smooth" });
//                 break;
//               case "Implementation Roadmap":
//                 implementationRef.current?.scrollIntoView({ behavior: "smooth" });
//                 break;
//               case "Our Clients":
//                 clientRef.current?.scrollIntoView({ behavior: "smooth" });
//                 break;
//               case "Contact Us":
//                 contactUsRef.current?.scrollIntoView({ behavior: "smooth" });
//                 break;
//               case "about":
//               case "mission":
//               case "vision":
//                 aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
//                 break;
//               default:
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//                 break;
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
//       if (window.location.pathname === "/" && location.state?.fromCaseStudy && caseStudyRef.current) {
//         setTimeout(() => {
//           caseStudyRef.current.scrollIntoView({ behavior: "smooth" });
//           window.history.replaceState({ ...location.state, fromCaseStudy: false, scrollTo: null }, "");
//         }, 100);
//       } else {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     };

//     window.addEventListener("popstate", handlePopstate);

//     return () => {
//       window.removeEventListener("popstate", handlePopstate);
//       if (navigateTimeoutRef.current) {
//         clearTimeout(navigateTimeoutRef.current);
//       }
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
//       <Navbar />
//       <div className="dashboard-container" ref={homeRef}>
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
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   handleToggle();
//                 }
//               }}
//               aria-pressed={toggleState === "dashboardTwo"}
//               aria-label={t('ToggleAriaLabel')}
//             >
//               <div className="toggle-option">{t('Solutions')}</div>
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
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter" || e.key === " ") {
//                           e.preventDefault();
//                           handleIndustryClick(id);
//                         }
//                       }}
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
//               {toggleState === "dashboardTwo" && (
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
//                         onKeyDown={(e) => {
//                           if (e.key === "Enter" || e.key === " ") {
//                             e.preventDefault();
//                             handleProductClick(slug);
//                           }
//                         }}
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

//           {toggleState === "dashboardOne" && (
//             <div id="huake-side-bar" className="huake-side-bar" role="navigation" aria-label={t('QuickContactAriaLabel')}>
//               <a
//                 href="/contact-us"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/contact-us");
//                 }}
//                 rel="nofollow"
//                 aria-label={t('Contact')}
//                 className="text"
//               >
//                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                   <circle cx="12" cy="7" r="4" />
//                 </svg>
//                 <span>{t('Contact')}</span>
//               </a>
//               <a
//                 href="mailto:sales@cvit.in"
//                 rel="nofollow"
//                 target="_blank"
//                 aria-label={t('Email')}
//                 className="text"
//               >
//                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                   <polyline points="22,6 12,13 2,6" />
//                 </svg>
//                 <span>{t('Email')}</span>
//               </a>
//               <a
//                 href="https://api.whatsapp.com/send?phone=7507149084"
//                 rel="nofollow"
//                 target="_blank"
//                 aria-label={t('WhatsApp')}
//                 className="text"
//               >
//                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M11.991 21.781a9.9 9.9 0 0 1-5.034-1.38l-.36-.216-3.741.981.999-3.649-.234-.376a9.84 9.84 0 0 1-1.511-5.258c0-5.439 4.436-9.876 9.887-9.876a9.84 9.84 0 0 1 6.99 2.897 9.84 9.84 0 0 1 2.892 6.99c-.006 5.459-4.442 9.888-9.888 9.888m5.423-7.401c-.296-.149-1.755-.867-2.03-.969-.273-.098-.473-.149-.667.149-.2.296-.77.969-.941 1.163-.171.199-.348.222-.645.075-.296-.15-1.254-.462-2.388-1.478-.885-.787-1.478-1.763-1.655-2.058-.171-.297-.016-.456.132-.604.131-.132.296-.348.444-.519.15-.171.199-.297.297-.495.098-.201.051-.372-.022-.52-.075-.149-.667-1.614-.918-2.205-.24-.583-.484-.502-.667-.51-.171-.01-.37-.01-.57-.01a1.095 1.095 0 0 0-.794.37c-.273.297-1.037 1.016-1.037 2.482s1.065 2.874 1.215 3.074c.147.199 2.091 3.198 5.075 4.488.705.307 1.26.489 1.694.627.713.228 1.356.193 1.869.120.57-.087 1.757-.720 2.007-1.414.246-.696.246-1.29.171-1.414-.073-.126-.273-.199-.57-.348"/>
//                 </svg>
//                 <span>{t('WhatsApp')}</span>
//               </a>
//               <a
//                 href="#"
//                 rel="nofollow"
//                 aria-label={t('Top')}
//                 id="gotop"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   window.scrollTo({ top: 0, behavior: "smooth" });
//                 }}
//               >
//                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M12 19V5" />
//                   <path d="M5 12l7-7 7 7" />
//                 </svg>
//                 <span>{t('Top')}</span>
//               </a>
//             </div>
//           )}
//         </div>
        
//         <CookieConsent />  

//        {showRestContent && toggleState === "dashboardOne" && (
//   <Suspense
//     fallback={<DelayedFallback message={t("Loading")} delay={300} />}
//   >
//     {/* CUSTOMER BENEFITS */}
//     <section
//       id="customer-benefits"
//       style={{ marginTop: "2rem" }}
//       ref={customerBenefitsRef}
//     >
//       <CustomerBenefits />
//     </section>

//     {/* CLIENTS */}
//     <section id="clients" ref={clientRef}>
//       <Client />
//     </section>

//     {/* CASE STUDIES */}
//     <section id="case-studies" ref={caseStudyRef}>
//       <CaseStudy />
//     </section>

//     {/* ABOUT / MISSION / VISION */}
//     <section id="about" ref={aboutUsRef}>
//       <Aboutus_Mission_Vision
//         initialTab={location.state?.scrollTo}
//       />
//     </section>

//     {/* CORE VALUES */}
//     <section id="core-values">
//       <CoreValues />
//     </section>

//     {/* IMPLEMENTATION SECTION */}
//     <section id="implementation" ref={implementationRef}>
//       <Implementation />
//     </section>

//     {/* OUR EXPERTISES */}
//     <section id="our-expertises">
//       <OurExpertises />
//     </section>

//     {/* SUPPORTING PARTNERS */}
//     <section id="supporting-partners">
//       <SupportingPartners />
//     </section>

//     {/* REVIEWS */}
//     <section id="reviews">
//       <Review />
//     </section>

//     {/* CONTACT US SECTION */}
//     <section id="contact-us-section" ref={contactUsRef}>
//       <ContactUs />
//     </section>

//     {/* FOOTER */}
//     <section id="footer">
//       <Footer />
//     </section>
//   </Suspense>
// )}

//       </div>
//     </>
//   );
// };

// export default Dashboard;





// // src/pages/DashboardTwo.jsx
// import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import Navbar from "../components/Navbar";
// import CookieConsent from "../components/CookieConsent";
// import "../Styles/Dashboard.css";

// // Import all product images
// import Bar_Light from "../assets/Lights/Bar_Light.png";
// import Ring_Light from "../assets/Lights/Ring_Light.png";
// import Dome_Light from "../assets/Lights/Dome_Light.png";
// import Flat_Diffused_Light_With_Center_Hole from "../assets/Lights/Flat_Direct_Diffused_Light_With_Center_Hole.png";
// import Flat_Diffused_Light from "../assets/Lights/Flat_DIrect_Diffused_Light.png";
// import Indirect_Flat_Light from "../assets/Lights/Indirect_Flat_Light.png";
// import Back_Light from "../assets/Lights/Back_Light.png";
// import Spot_Light from "../assets/Lights/Spot_Light.png";
// import Tunnel_Light from "../assets/Lights/Tunnel_Light.png";

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
//   return slugMap[name] || name.toLowerCase().replace(/\s+/g, "-");
// };

// const DashboardTwo = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const homeRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleProductClick = (slug) => {
//     navigate(`/product/${slug}`);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard-container" ref={homeRef}>
//         <div className="content-wrapper">
//           <div className="heading-section">
//             <h1>{t('MachineVisionLightHeading') || t('DashboardHeading')}</h1>
//             <h2>{t('MachineVisionLightSubheading') || "Explore Our Advanced Lighting Solutions"}</h2>
//           </div>

//           <div className="dashboard-content slide-in">
//             <section>
//               <div className="industries-grid" role="list">
//                 {products.map(({ key, image }) => {
//                   const slug = toSlug(key);
//                   return (
//                     <div
//                       key={slug}
//                       className="product-card"
//                       onClick={() => handleProductClick(slug)}
//                       tabIndex={0}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter" || e.key === " ") {
//                           e.preventDefault();
//                           handleProductClick(slug);
//                         }
//                       }}
//                       role="listitem"
//                       aria-label={t(key)}
//                     >
//                       <img
//                         src={image}
//                         alt={t(`${key}Alt`)}
//                         className="product-logo"
//                         draggable={false}
//                         loading="lazy"
//                       />
//                       <div className="industry-name">{t(key)}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>
//           </div>
//         </div>

//         <CookieConsent />
//       </div>
//     </>
//   );
// };

// export default DashboardTwo;
