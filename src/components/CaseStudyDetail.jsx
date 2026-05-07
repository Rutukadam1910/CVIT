// // // import React, { useEffect, useRef, useState, useMemo } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { useTranslation } from "react-i18next";
// // // import { TransitionGroup, CSSTransition } from "react-transition-group";
// // // import { motion } from "framer-motion";
// // // import { ChevronRight, ChevronLeft, ArrowRight, Eye, Target, Zap, CheckCircle } from "lucide-react";

// // // import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement_3.png";
// // // import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection_3.png";
// // // import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection_3.png";
// // // import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence_3.png";
// // // import vialAdapterImg from "../assets/CaseStudies/vial_adapter_3.png";
// // // import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking_3.png";
// // // import WindowGlassImg from "../assets/CaseStudies/Window_Glass_3.png";
// // // import "../Styles/CaseStudyDetail.css";
// // // import Navbar from "./Navbar";
// // // import SideBar from "./Sidebar";
// // // import Footer from "./Footer";

// // // const caseStudyImages = {
// // //   1: vialAdapterImg,
// // //   2: packetInspectionImg,
// // //   3: gapMeasurementImg,
// // //   4: punchedNumberImg,
// // //   5: tracingTrackingImg,
// // //   6: sealentPresenceImg,
// // //   7: WindowGlassImg,
// // // };

// // // // Fallback case studies array for navigation
// // // const caseStudiesFallback = [
// // //   { id: 1, title: "Vial Adaptor Inspection" },
// // //   { id: 2, title: "Vial Adaptor Tray OCR-OCV" },
// // //   { id: 3, title: "Gap Measurement" },
// // //   { id: 4, title: "Stamped Number Detection" },
// // //   { id: 5, title: "Tire Traceability and Tracking" },
// // //   { id: 6, title: "Door Sealant Presence Detection" },
// // //   { id: 7, title: "Window Glass Open/Close Detection" },
// // // ];

// // // // Parse description to handle sections across languages
// // // const parseDescription = (description, t) => {
// // //   const sections = description.split("\n\n").filter(Boolean);
// // //   let mainHeading = "";
// // //   let overviewContent = [];
// // //   const subSections = [];

// // //   // Define expected section titles using translation keys
// // //   const projectOverviewKey = t("CaseStudies.ProjectOverview", { defaultValue: "Project Overview" }).toLowerCase();
// // //   // Only keep the keys that are actually used
// // //   const solutionKey = t("CaseStudies.Solution", { defaultValue: "CVIT AI Solution" }).toLowerCase();

// // //   sections.forEach((section, index) => {
// // //     const lines = section.trim().split("\n").filter(Boolean);
// // //     if (!lines.length) return;

// // //     const title = lines[0].toLowerCase();
// // //     if (index === 0 && title.includes(projectOverviewKey)) {
// // //       mainHeading = lines[0];
// // //       overviewContent = lines.slice(1).map((line) => line.trim());
// // //     } else {
// // //       subSections.push({
// // //         title: lines[0].trim(),
// // //         content: lines.slice(1).map((line) => line.trim()),
// // //       });
// // //     }
// // //   });

// // //   return { mainHeading, overviewContent, subSections, solutionKey };
// // // };

// // // const CaseStudyDetail = () => {
// // //   const { t } = useTranslation();
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
  
// // //   // Wrap the study object in useMemo to prevent unnecessary re-renders
// // //   const study = useMemo(() => ({
// // //     id: parseInt(id, 10),
// // //     title: t(`CaseStudies.${id}.title`),
// // //     studyHeader: t(`CaseStudies.${id}.studyHeader`),
// // //     image: caseStudyImages[id],
// // //     description: t(`CaseStudies.${id}.description`),
// // //   }), [id, t]);
  
// // //   const [isExiting, setIsExiting] = useState(false);
// // //   const containerRef = useRef(null);
// // //   const imgWrapRef = useRef(null);
// // //   const nextBtnRef = useRef(null);
// // //   const prevBtnRef = useRef(null);
// // //   const rafRef = useRef(null);
// // //   const latestMouseRef = useRef(null);
// // //   const isNavigatingRef = useRef(false);

// // //   // Scroll to top when component mounts or when ID changes
// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);
// // //   }, [id]);

// // //   useEffect(() => {
// // //     setIsExiting(false);
// // //     isNavigatingRef.current = false;
// // //   }, [id]);

// // //   useEffect(() => {
// // //     if (study && study.image) {
// // //       const img = new Image();
// // //       img.src = study.image;
// // //     }

// // //     const handlePopstate = () => {
// // //       if (!isNavigatingRef.current) {
// // //         isNavigatingRef.current = true;
// // //         setIsExiting(true);
// // //         setTimeout(() => {
// // //           navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
// // //           isNavigatingRef.current = false;
// // //         }, 500);
// // //       }
// // //     };

// // //     window.addEventListener("popstate", handlePopstate);

// // //     return () => {
// // //       window.removeEventListener("popstate", handlePopstate);
// // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // //     };
// // //   }, [study, navigate, id, t]);

// // //   useEffect(() => {
// // //     if (prefersReducedMotion) {
// // //       const els = containerRef.current?.querySelectorAll(".reveal");
// // //       els?.forEach((el) => el.classList.add("in-view"));
// // //       return;
// // //     }

// // //     const root = containerRef.current || document;
// // //     const io = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add("in-view");
// // //             io.unobserve(entry.target);
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.13, root: null, rootMargin: "0px 0px -10% 0px" }
// // //     );

// // //     const revealEls = root.querySelectorAll(".reveal");
// // //     revealEls.forEach((el, i) => {
// // //       if (el) {
// // //         el.style.setProperty("--reveal-delay", `${i * 90}ms`);
// // //         io.observe(el);
// // //       }
// // //     });

// // //     return () => {
// // //       revealEls.forEach((el) => el.classList.remove("in-view"));
// // //       io.disconnect();
// // //     };
// // //   }, [prefersReducedMotion, id]);

// // //   useEffect(() => {
// // //     const el = imgWrapRef.current;
// // //     if (!el || prefersReducedMotion) return;

// // //     const onMove = (e) => {
// // //       latestMouseRef.current = e;
// // //       if (!rafRef.current) {
// // //         rafRef.current = requestAnimationFrame(() => {
// // //           const ev = latestMouseRef.current;
// // //           latestMouseRef.current = null;
// // //           rafRef.current = null;
// // //           if (!ev || !el) return;
// // //           const r = el.getBoundingClientRect();
// // //           const cx = r.left + r.width / 2;
// // //           const cy = r.top + r.height / 2;
// // //           const dx = (ev.clientX - cx) / r.width;
// // //           const dy = (ev.clientY - cy) / r.height;
// // //           const rotX = (-dy * 3).toFixed(2);
// // //           const rotY = (dx * 3).toFixed(2);
// // //           const tx = (dx * 5).toFixed(2);
// // //           const ty = (dy * -5).toFixed(2);
// // //           el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${tx}px, ${ty}px, 0)`;
// // //           const img = el.querySelector("img");
// // //           if (img && img.isConnected) {
// // //             img.style.transform = `translate3d(${(dx * 4).toFixed(2)}px, ${(dy * -4).toFixed(2)}px, 0) scale(1.02)`;
// // //             img.style.filter = "contrast(1.03) saturate(1.05)";
// // //           }
// // //         });
// // //       }
// // //     };

// // //     const onLeave = () => {
// // //       if (rafRef.current) {
// // //         cancelAnimationFrame(rafRef.current);
// // //         rafRef.current = null;
// // //       }
// // //       latestMouseRef.current = null;
// // //       if (!el) return;
// // //       el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
// // //       const img = el.querySelector("img");
// // //       if (img && img.isConnected) {
// // //         img.style.transform = "translate3d(0,0,0) scale(1)";
// // //         img.style.filter = "none";
// // //       }
// // //     };

// // //     el.addEventListener("mousemove", onMove);
// // //     el.addEventListener("mouseleave", onLeave);
// // //     el.addEventListener("touchmove", onMove, { passive: true });
// // //     el.addEventListener("touchend", onLeave);

// // //     return () => {
// // //       el.removeEventListener("mousemove", onMove);
// // //       el.removeEventListener("mouseleave", onLeave);
// // //       el.removeEventListener("touchmove", onMove);
// // //       el.removeEventListener("touchend", onLeave);
// // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // //     };
// // //   }, [prefersReducedMotion]);

// // //   const handleBackClick = () => {
// // //     console.log("Back button clicked, navigating to / with scrollTo: OurCaseStudies");
// // //     if (isNavigatingRef.current) {
// // //       console.log("Navigation blocked: isNavigatingRef is true");
// // //       return;
// // //     }
// // //     isNavigatingRef.current = true;
// // //     setIsExiting(true);
// // //     setTimeout(() => {
// // //       navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
// // //       isNavigatingRef.current = false;
// // //     }, 500);
// // //   };

// // //   const handleNextClick = () => {
// // //     console.log("Next button clicked, current ID:", id);
// // //     if (isNavigatingRef.current) {
// // //       console.log("Navigation blocked: isNavigatingRef is true");
// // //       return;
// // //     }
// // //     isNavigatingRef.current = true;
// // //     setIsExiting(true);
// // //     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
// // //     const nextIndex = (currentIndex + 1) % caseStudiesFallback.length;
// // //     const nextId = caseStudiesFallback[nextIndex].id;
// // //     console.log("Navigating to next case study ID:", nextId);
// // //     setTimeout(() => {
// // //       navigate(`/case-study/${nextId}?fromId=${id}`);
// // //       isNavigatingRef.current = false;
// // //     }, 500);
// // //   };

// // //   const handlePrevClick = () => {
// // //     console.log("Previous button clicked, current ID:", id);
// // //     if (isNavigatingRef.current) {
// // //       console.log("Navigation blocked: isNavigatingRef is true");
// // //       return;
// // //     }
// // //     isNavigatingRef.current = true;
// // //     setIsExiting(true);
// // //     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
// // //     const prevIndex = (currentIndex - 1 + caseStudiesFallback.length) % caseStudiesFallback.length;
// // //     const prevId = caseStudiesFallback[prevIndex].id;
// // //     console.log("Navigating to previous case study ID:", prevId);
// // //     setTimeout(() => {
// // //       navigate(`/case-study/${prevId}?fromId=${id}`);
// // //       isNavigatingRef.current = false;
// // //     }, 500);
// // //   };

// // //   if (!study.title || study.title.includes("CaseStudies") || !study.description) {
// // //     return (
// // //       <div className="cs-notfound" style={notFoundStyles.wrapper}>
// // //         <h2 style={notFoundStyles.title}>{t("PageNotFound")}</h2>
// // //         <button
// // //           style={notFoundStyles.button}
// // //           onClick={handleBackClick}
// // //           aria-label={t("BackToHomeAriaLabel")}
// // //         >
// // //           ← {t("BackToHome")}
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   const { mainHeading, overviewContent, subSections, solutionKey } = parseDescription(study.description, t);
// // //   const solutionSectionIndex = subSections.findIndex((s) =>
// // //     s.title && s.title.toLowerCase().includes(solutionKey)
// // //   );
// // //   const solutionSection = solutionSectionIndex !== -1 ? subSections[solutionSectionIndex] : null;
// // //   const descriptionSections = subSections.filter((_, idx) => idx !== solutionSectionIndex);

// // //   // Section icons for visual enhancement
// // //   const sectionIcons = {
// // //     overview: <Eye size={24} />,
// // //     challenge: <Target size={24} />,
// // //     solution: <Zap size={24} />,
// // //     result: <CheckCircle size={24} />,
// // //   };

// // //   return (
// // //      <>
// // //      <Navbar />
// // //      <SideBar/>
     
// // //      {/* HERO SECTION */}
// // //      <section className="hero-parallax">
// // //         <div className="parallax-bg"></div>
// // //         <div className="hero-overlay"></div>
// // //         <div className="hero-container">
// // //           <div className="hero-content-pro">
// // //             <p className="eyebrow">{t("CaseStudies.CaseStudy")}</p>
// // //             <h1 className="hero-headline">
// // //               {study.studyHeader}
// // //             </h1>
// // //             <p className="hero-subhead">{study.title}</p>
      
// // // <div className="hero-cta">
// // //   <button 
// // //     className="btn-primary-pro"
// // //     onClick={(e) => {
// // //       e.preventDefault();
// // //       const element = document.getElementById('case-study-content');
// // //       if (element) {
// // //         element.scrollIntoView({ behavior: 'smooth' });
// // //       }
// // //     }}
// // //   >
// // //     {t("CaseStudies.ViewDetails")}
// // //   </button>
// // // </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CASE STUDY CONTENT */}
// // //       <section className="policy-section" id="case-study-content">
// // //         <div className="container-pro">
// // //           <div className="policy-intro">
// // //             <p className="intro-text">
// // //               <strong>{mainHeading}</strong>{" "}
// // //               {overviewContent.length > 0 && overviewContent.join(" ")}
// // //             </p>
// // //           </div>

// // //           <div className="policy-grid">
// // //             {/* Image Section */}
// // //             <motion.div
// // //               className="policy-card"
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.7 }}
// // //             >
// // //               <div className="card-header">
// // //                 <h2 className="card-title">
// // //                   {sectionIcons.overview}
// // //                   {t("CaseStudies.VisualOverview")}
// // //                 </h2>
// // //               </div>
// // //               <div className="card-content">
// // //                 <div className="image-container-modern">
// // //                   {study.image && (
// // //                     <img
// // //                       src={study.image}
// // //                       alt={study.title}
// // //                       loading="eager"
// // //                       onError={(e) => {
// // //                         console.error(`Failed to load image: ${study.image}`);
// // //                         e.currentTarget.style.display = "none";
// // //                       }}
// // //                     />
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             {/* Description Sections */}
// // //             {descriptionSections.map((section, sIdx) => (
// // //               <motion.div
// // //                 key={sIdx}
// // //                 className="policy-card"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.7, delay: sIdx * 0.1 }}
// // //               >
// // //                 <div className="card-header">
// // //                   <h2 className="card-title">
// // //                     {section.title.toLowerCase().includes("challenge") ? sectionIcons.challenge : 
// // //                      section.title.toLowerCase().includes("requirement") ? sectionIcons.challenge :
// // //                      sectionIcons.overview}
// // //                     {section.title}
// // //                   </h2>
// // //                 </div>
// // //                 <div className="card-content">
// // //                   {section.content.map((line, li) => (
// // //                     <p key={li}>{line}</p>
// // //                   ))}
// // //                 </div>
// // //               </motion.div>
// // //             ))}

// // //             {/* Solution Section */}
// // //             {solutionSection && (
// // //               <motion.div
// // //                 className="policy-card"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.7, delay: 0.5 }}
// // //               >
// // //                 <div className="card-header">
// // //                   <h2 className="card-title">
// // //                     {sectionIcons.solution}
// // //                     {solutionSection.title}
// // //                   </h2>
// // //                 </div>
// // //                 <div className="card-content">
// // //                   <ol className="solution-list">
// // //                     {solutionSection.content.map((line, idx) => (
// // //                       <li key={idx}>{line}</li>
// // //                     ))}
// // //                   </ol>
// // //                 </div>
// // //               </motion.div>
// // //             )}

// // //             {/* Navigation Section - Simplified with just navigation buttons */}
// // //             <motion.div
// // //               className="policy-card"
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.7, delay: 0.6 }}
// // //             >
// // //               <div className="card-header">
// // //                 <h2 className="card-title">
// // //                   <ArrowRight size={24} />
// // //                   {t("CaseStudies.Navigation")}
// // //                 </h2>
// // //               </div>
// // //               <div className="card-content">
// // //                 <div className="navigation-buttons">
// // //                   <button
// // //                     ref={prevBtnRef}
// // //                     className="prev-btn-modern"
// // //                     onClick={handlePrevClick}
// // //                     aria-label={t("CaseStudies.PreviousCaseStudy")}
// // //                   >
// // //                     <ChevronLeft size={18} /> {t("CaseStudies.PreviousCaseStudy")}
// // //                   </button>
// // //                   <button
// // //                     ref={nextBtnRef}
// // //                     className="next-btn-modern"
// // //                     onClick={handleNextClick}
// // //                     aria-label={t("CaseStudies.NextCaseStudy")}
// // //                   >
// // //                     {t("CaseStudies.NextCaseStudy")} <ChevronRight size={18} />
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </div>

// // //           {/* Back to Home Button */}
// // //           <div className="back-home-container">
// // //             <button onClick={handleBackClick} className="back-home-btn">
// // //               {t("BackToHome")}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //       <Footer/>
// // //    </>
// // //   );
// // // };

// // // const prefersReducedMotion =
// // //   typeof window !== "undefined" &&
// // //   window.matchMedia &&
// // //   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// // // const notFoundStyles = {
// // //   wrapper: {
// // //     minHeight: "100vh",
// // //     display: "flex",
// // //     flexDirection: "column",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     padding: "2rem",
// // //     background: "#0b0f1a",
// // //     boxSizing: "border-box",
// // //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
// // //   },
// // //   title: {
// // //     fontSize: "2rem",
// // //     color: "#e2e8f0",
// // //     marginBottom: "1.5rem",
// // //     fontWeight: 600,
// // //   },
// // //   button: {
// // //     background: "#ef3a3a",
// // //     color: "#ffffff",
// // //     border: "none",
// // //     padding: "0.75rem 1.5rem",
// // //     borderRadius: "8px",
// // //     cursor: "pointer",
// // //     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
// // //     fontWeight: 600,
// // //     fontSize: "1rem",
// // //     transition: "background 0.2s ease, box-shadow 0.2s ease",
// // //   },
// // // };

// // // export default CaseStudyDetail;

// // import React, { useEffect, useRef, useState, useMemo } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { useTranslation } from "react-i18next";
// // import { TransitionGroup, CSSTransition } from "react-transition-group";
// // import { motion } from "framer-motion";
// // import { ChevronRight, ChevronLeft, ArrowRight, Eye, Target, Zap, CheckCircle } from "lucide-react";

// // import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement_3.png";
// // import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection_3.png";
// // import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection_3.png";
// // import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence_3.png";
// // import vialAdapterImg from "../assets/CaseStudies/vial_adapter_3.png";
// // import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking_3.png";
// // import WindowGlassImg from "../assets/CaseStudies/Window_Glass_3.png";
// // import "../Styles/CaseStudyDetail.css";
// // import Navbar from "./Navbar";
// // import SideBar from "./Sidebar";
// // import Footer from "./Footer";

// // const caseStudyImages = {
// //   1: vialAdapterImg,
// //   2: packetInspectionImg,
// //   3: gapMeasurementImg,
// //   4: punchedNumberImg,
// //   5: tracingTrackingImg,
// //   6: sealentPresenceImg,
// //   7: WindowGlassImg,
// // };

// // // Fallback case studies array for navigation
// // const caseStudiesFallback = [
// //   { id: 1, title: "Vial Adaptor Inspection" },
// //   { id: 2, title: "Vial Adaptor Tray OCR-OCV" },
// //   { id: 3, title: "Gap Measurement" },
// //   { id: 4, title: "Stamped Number Detection" },
// //   { id: 5, title: "Tire Traceability and Tracking" },
// //   { id: 6, title: "Door Sealant Presence Detection" },
// //   { id: 7, title: "Window Glass Open/Close Detection" },
// // ];

// // // Parse description to handle sections across languages
// // const parseDescription = (description, t) => {
// //   const sections = description.split("\n\n").filter(Boolean);
// //   let mainHeading = "";
// //   let overviewContent = [];
// //   const subSections = [];

// //   // Define expected section titles using translation keys
// //   const projectOverviewKey = t("CaseStudies.ProjectOverview", { defaultValue: "Project Overview" }).toLowerCase();
// //   // Only keep the keys that are actually used
// //   const solutionKey = t("CaseStudies.Solution", { defaultValue: "CVIT AI Solution" }).toLowerCase();

// //   sections.forEach((section, index) => {
// //     const lines = section.trim().split("\n").filter(Boolean);
// //     if (!lines.length) return;

// //     const title = lines[0].toLowerCase();
// //     if (index === 0 && title.includes(projectOverviewKey)) {
// //       mainHeading = lines[0];
// //       overviewContent = lines.slice(1).map((line) => line.trim());
// //     } else {
// //       subSections.push({
// //         title: lines[0].trim(),
// //         content: lines.slice(1).map((line) => line.trim()),
// //       });
// //     }
// //   });

// //   return { mainHeading, overviewContent, subSections, solutionKey };
// // };

// // const CaseStudyDetail = () => {
// //   const { t } = useTranslation();
// //   const { id } = useParams();
// //   const navigate = useNavigate();
  
// //   // Wrap the study object in useMemo to prevent unnecessary re-renders
// //   const study = useMemo(() => ({
// //     id: parseInt(id, 10),
// //     title: t(`CaseStudies.${id}.title`),
// //     studyHeader: t(`CaseStudies.${id}.studyHeader`),
// //     image: caseStudyImages[id],
// //     description: t(`CaseStudies.${id}.description`),
// //   }), [id, t]);
  
// //   const [isExiting, setIsExiting] = useState(false);
// //   const containerRef = useRef(null);
// //   const imgWrapRef = useRef(null);
// //   const nextBtnRef = useRef(null);
// //   const prevBtnRef = useRef(null);
// //   const rafRef = useRef(null);
// //   const latestMouseRef = useRef(null);
// //   const isNavigatingRef = useRef(false);

// //   // Scroll to top when component mounts or when ID changes
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, [id]);

// //   useEffect(() => {
// //     setIsExiting(false);
// //     isNavigatingRef.current = false;
// //   }, [id]);

// //   useEffect(() => {
// //     if (study && study.image) {
// //       const img = new Image();
// //       img.src = study.image;
// //     }

// //     const handlePopstate = () => {
// //       if (!isNavigatingRef.current) {
// //         isNavigatingRef.current = true;
// //         setIsExiting(true);
// //         setTimeout(() => {
// //           navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
// //           isNavigatingRef.current = false;
// //         }, 500);
// //       }
// //     };

// //     window.addEventListener("popstate", handlePopstate);

// //     return () => {
// //       window.removeEventListener("popstate", handlePopstate);
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     };
// //   }, [study, navigate, id, t]);

// //   useEffect(() => {
// //     if (prefersReducedMotion) {
// //       const els = containerRef.current?.querySelectorAll(".reveal");
// //       els?.forEach((el) => el.classList.add("in-view"));
// //       return;
// //     }

// //     const root = containerRef.current || document;
// //     const io = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add("in-view");
// //             io.unobserve(entry.target);
// //           }
// //         });
// //       },
// //       { threshold: 0.13, root: null, rootMargin: "0px 0px -10% 0px" }
// //     );

// //     const revealEls = root.querySelectorAll(".reveal");
// //     revealEls.forEach((el, i) => {
// //       if (el) {
// //         el.style.setProperty("--reveal-delay", `${i * 90}ms`);
// //         io.observe(el);
// //       }
// //     });

// //     return () => {
// //       revealEls.forEach((el) => el.classList.remove("in-view"));
// //       io.disconnect();
// //     };
// //   }, [prefersReducedMotion, id]);

// //   useEffect(() => {
// //     const el = imgWrapRef.current;
// //     if (!el || prefersReducedMotion) return;

// //     const onMove = (e) => {
// //       latestMouseRef.current = e;
// //       if (!rafRef.current) {
// //         rafRef.current = requestAnimationFrame(() => {
// //           const ev = latestMouseRef.current;
// //           latestMouseRef.current = null;
// //           rafRef.current = null;
// //           if (!ev || !el) return;
// //           const r = el.getBoundingClientRect();
// //           const cx = r.left + r.width / 2;
// //           const cy = r.top + r.height / 2;
// //           const dx = (ev.clientX - cx) / r.width;
// //           const dy = (ev.clientY - cy) / r.height;
// //           const rotX = (-dy * 3).toFixed(2);
// //           const rotY = (dx * 3).toFixed(2);
// //           const tx = (dx * 5).toFixed(2);
// //           const ty = (dy * -5).toFixed(2);
// //           el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${tx}px, ${ty}px, 0)`;
// //           const img = el.querySelector("img");
// //           if (img && img.isConnected) {
// //             img.style.transform = `translate3d(${(dx * 4).toFixed(2)}px, ${(dy * -4).toFixed(2)}px, 0) scale(1.02)`;
// //             img.style.filter = "contrast(1.03) saturate(1.05)";
// //           }
// //         });
// //       }
// //     };

// //     const onLeave = () => {
// //       if (rafRef.current) {
// //         cancelAnimationFrame(rafRef.current);
// //         rafRef.current = null;
// //       }
// //       latestMouseRef.current = null;
// //       if (!el) return;
// //       el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
// //       const img = el.querySelector("img");
// //       if (img && img.isConnected) {
// //         img.style.transform = "translate3d(0,0,0) scale(1)";
// //         img.style.filter = "none";
// //       }
// //     };

// //     el.addEventListener("mousemove", onMove);
// //     el.addEventListener("mouseleave", onLeave);
// //     el.addEventListener("touchmove", onMove, { passive: true });
// //     el.addEventListener("touchend", onLeave);

// //     return () => {
// //       el.removeEventListener("mousemove", onMove);
// //       el.removeEventListener("mouseleave", onLeave);
// //       el.removeEventListener("touchmove", onMove);
// //       el.removeEventListener("touchend", onLeave);
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     };
// //   }, [prefersReducedMotion]);

// //   const handleBackClick = () => {
// //     console.log("Back button clicked, navigating to / with scrollTo: OurCaseStudies");
// //     if (isNavigatingRef.current) {
// //       console.log("Navigation blocked: isNavigatingRef is true");
// //       return;
// //     }
// //     isNavigatingRef.current = true;
// //     setIsExiting(true);
// //     setTimeout(() => {
// //       navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
// //       isNavigatingRef.current = false;
// //     }, 500);
// //   };

// //   const handleNextClick = () => {
// //     console.log("Next button clicked, current ID:", id);
// //     if (isNavigatingRef.current) {
// //       console.log("Navigation blocked: isNavigatingRef is true");
// //       return;
// //     }
// //     isNavigatingRef.current = true;
// //     setIsExiting(true);
// //     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
// //     const nextIndex = (currentIndex + 1) % caseStudiesFallback.length;
// //     const nextId = caseStudiesFallback[nextIndex].id;
// //     console.log("Navigating to next case study ID:", nextId);
// //     setTimeout(() => {
// //       navigate(`/case-study/${nextId}?fromId=${id}`);
// //       isNavigatingRef.current = false;
// //     }, 500);
// //   };

// //   const handlePrevClick = () => {
// //     console.log("Previous button clicked, current ID:", id);
// //     if (isNavigatingRef.current) {
// //       console.log("Navigation blocked: isNavigatingRef is true");
// //       return;
// //     }
// //     isNavigatingRef.current = true;
// //     setIsExiting(true);
// //     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
// //     const prevIndex = (currentIndex - 1 + caseStudiesFallback.length) % caseStudiesFallback.length;
// //     const prevId = caseStudiesFallback[prevIndex].id;
// //     console.log("Navigating to previous case study ID:", prevId);
// //     setTimeout(() => {
// //       navigate(`/case-study/${prevId}?fromId=${id}`);
// //       isNavigatingRef.current = false;
// //     }, 500);
// //   };

// //   if (!study.title || study.title.includes("CaseStudies") || !study.description) {
// //     return (
// //       <div className="cs-notfound" style={notFoundStyles.wrapper}>
// //         <h2 style={notFoundStyles.title}>{t("PageNotFound")}</h2>
// //         <button
// //           style={notFoundStyles.button}
// //           onClick={handleBackClick}
// //           aria-label={t("BackToHomeAriaLabel")}
// //         >
// //           ← {t("BackToHome")}
// //         </button>
// //       </div>
// //     );
// //   }

// //   const { mainHeading, overviewContent, subSections, solutionKey } = parseDescription(study.description, t);
// //   const solutionSectionIndex = subSections.findIndex((s) =>
// //     s.title && s.title.toLowerCase().includes(solutionKey)
// //   );
// //   const solutionSection = solutionSectionIndex !== -1 ? subSections[solutionSectionIndex] : null;
// //   const descriptionSections = subSections.filter((_, idx) => idx !== solutionSectionIndex);

// //   // Section icons for visual enhancement
// //   const sectionIcons = {
// //     overview: <Eye size={24} />,
// //     challenge: <Target size={24} />,
// //     solution: <Zap size={24} />,
// //     result: <CheckCircle size={24} />,
// //   };

// //   return (
// //      <>
// //      <Navbar />
// //      <SideBar/>
     
// //      {/* HERO SECTION */}
// //      <section className="hero-parallax">
// //         <div className="parallax-bg"></div>
// //         <div className="hero-overlay"></div>
// //         <div className="hero-container">
// //           <div className="hero-content-pro">
// //             <p className="eyebrow">{t("CaseStudies.CaseStudy")}</p>
// //             <h1 className="hero-headline">
// //               {study.studyHeader}
// //             </h1>
// //             <p className="hero-subhead">{study.title}</p>
      
// // <div className="hero-cta">
// //   <button 
// //     className="btn-primary-pro"
// //     onClick={(e) => {
// //       e.preventDefault();
// //       const element = document.getElementById('case-study-content');
// //       if (element) {
// //         element.scrollIntoView({ behavior: 'smooth' });
// //       }
// //     }}
// //   >
// //     {t("CaseStudies.ViewDetails")}
// //   </button>
// // </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CASE STUDY CONTENT */}
// //       <section className="policy-section" id="case-study-content">
// //         <div className="container-pro">
// //           <div className="policy-intro">
// //             <p className="intro-text">
// //               <strong>{mainHeading}</strong>{" "}
// //               {overviewContent.length > 0 && overviewContent.join(" ")}
// //             </p>
// //           </div>

// //           <div className="policy-grid">
// //             {/* Image Section */}
// //             <motion.div
// //               className="policy-card"
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.7 }}
// //             >
// //               <div className="card-header">
// //                 <h2 className="card-title">
// //                   {sectionIcons.overview}
// //                   {t("CaseStudies.VisualOverview")}
// //                 </h2>
// //               </div>
// //               <div className="card-content">
// //                 <div className="image-container-modern">
// //                   {study.image && (
// //                     <img
// //                       src={study.image}
// //                       alt={study.title}
// //                       loading="eager"
// //                       onError={(e) => {
// //                         console.error(`Failed to load image: ${study.image}`);
// //                         e.currentTarget.style.display = "none";
// //                       }}
// //                     />
// //                   )}
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Description Sections */}
// //             {descriptionSections.map((section, sIdx) => (
// //               <motion.div
// //                 key={sIdx}
// //                 className="policy-card"
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: sIdx * 0.1 }}
// //               >
// //                 <div className="card-header">
// //                   <h2 className="card-title">
// //                     {section.title.toLowerCase().includes("challenge") ? sectionIcons.challenge : 
// //                      section.title.toLowerCase().includes("requirement") ? sectionIcons.challenge :
// //                      sectionIcons.overview}
// //                     {section.title}
// //                   </h2>
// //                 </div>
// //                 <div className="card-content">
// //                   {section.content.map((line, li) => (
// //                     <p key={li}>{line}</p>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             ))}

// //             {/* Solution Section */}
// //             {solutionSection && (
// //               <motion.div
// //                 className="policy-card"
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: 0.5 }}
// //               >
// //                 <div className="card-header">
// //                   <h2 className="card-title">
// //                     {sectionIcons.solution}
// //                     {solutionSection.title}
// //                   </h2>
// //                 </div>
// //                 <div className="card-content">
// //                   <ol className="solution-list">
// //                     {solutionSection.content.map((line, idx) => (
// //                       <li key={idx}>{line}</li>
// //                     ))}
// //                   </ol>
// //                 </div>
// //               </motion.div>
// //             )}
// //           </div>

// //           {/* Standalone Navigation Buttons */}
// //           <div className="standalone-navigation">
// //             <button
// //               ref={prevBtnRef}
// //               className="standalone-btn prev-btn-standalone"
// //               onClick={handlePrevClick}
// //               aria-label={t("CaseStudies.PreviousCaseStudy")}
// //             >
// //               <ChevronLeft size={18} /> {t("CaseStudies.PreviousCaseStudy")}
// //             </button>
// //             <button
// //               ref={nextBtnRef}
// //               className="standalone-btn next-btn-standalone"
// //               onClick={handleNextClick}
// //               aria-label={t("CaseStudies.NextCaseStudy")}
// //             >
// //               {t("CaseStudies.NextCaseStudy")} <ChevronRight size={18} />
// //             </button>
// //           </div>

// //           {/* Back to Home Button */}
// //           <div className="back-home-container">
// //             <button onClick={handleBackClick} className="back-home-btn">
// //               {t("BackToHome")}
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //       <Footer/>
// //    </>
// //   );
// // };

// // const prefersReducedMotion =
// //   typeof window !== "undefined" &&
// //   window.matchMedia &&
// //   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// // const notFoundStyles = {
// //   wrapper: {
// //     minHeight: "100vh",
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: "2rem",
// //     background: "#0b0f1a",
// //     boxSizing: "border-box",
// //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
// //   },
// //   title: {
// //     fontSize: "2rem",
// //     color: "#e2e8f0",
// //     marginBottom: "1.5rem",
// //     fontWeight: 600,
// //   },
// //   button: {
// //     background: "#ef3a3a",
// //     color: "#ffffff",
// //     border: "none",
// //     padding: "0.75rem 1.5rem",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
// //     fontWeight: 600,
// //     fontSize: "1rem",
// //     transition: "background 0.2s ease, box-shadow 0.2s ease",
// //   },
// // };

// // export default CaseStudyDetail;



// import React, { useEffect, useRef, useState, useMemo } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { motion } from "framer-motion";
// import { ChevronRight, ChevronLeft, ArrowRight, Eye, Target, Zap, CheckCircle } from "lucide-react";

// import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement_3.png";
// import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection_3.png";
// import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection_3.png";
// import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence_3.png";
// import vialAdapterImg from "../assets/CaseStudies/vial_adapter_3.png";
// import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking_3.png";
// import WindowGlassImg from "../assets/CaseStudies/Window_Glass_3.png";
// import TubTyvekImg from "../assets/CaseStudies/Tub_Tyvek_Inner_OK_3.jpg";
// import HandBrakeCableImg from "../assets/CaseStudies/Hand_Brake_Cable_3.jpg";
// import VINInspectionImg from "../assets/CaseStudies/VIN_Number_detection_3.png";
// import LadleHookImg from "../assets/CaseStudies/Ladle_Hook_Inspection_3.png";
// import CylinderHeadImg from "../assets/CaseStudies/Cylinder_Head_Inspection_3.jpg";
// import "../Styles/CaseStudyDetail.css";
// import Navbar from "./Navbar";
// import SideBar from "./Sidebar";
// import Footer from "./Footer";

// const caseStudyImages = {
//   1: vialAdapterImg,
//   2: packetInspectionImg,
//   3: gapMeasurementImg,
//   4: punchedNumberImg,
//   5: tracingTrackingImg,
//   6: sealentPresenceImg,
//   7: WindowGlassImg,
//   8: TubTyvekImg,
//   9: HandBrakeCableImg,
//   10: VINInspectionImg,
//   11: LadleHookImg,
//   12: CylinderHeadImg,
// };

// // Fallback case studies array for navigation
// const caseStudiesFallback = [
//   { id: 1, title: "Vial Adaptor Inspection" },
//   { id: 2, title: "Vial Adaptor Tray OCR-OCV" },
//   { id: 3, title: "Gap Measurement" },
//   { id: 4, title: "Stamped Number Detection" },
//   { id: 5, title: "Tire Traceability and Tracking" },
//   { id: 6, title: "Door Sealant Presence Detection" },
//   { id: 7, title: "Window Glass Open/Close Detection" },
//   { id: 8, title: "Tub TYVEK Inspection" },
//   { id: 9, title: "Hand Brake Cable Bin Inspection" },
//   { id: 10, title: "VIN Number Plate Inspection" },
//   { id: 11, title: "Ladle Hook Inspection" },
//   { id: 12, title: "360° Cylinder Head Inspection" },
// ];

// // Parse description to handle sections across languages
// const parseDescription = (description, t) => {
//   const sections = description.split("\n\n").filter(Boolean);
//   let mainHeading = "";
//   let overviewContent = [];
//   const subSections = [];

//   // Define expected section titles using translation keys
//   const projectOverviewKey = t("CaseStudies.ProjectOverview", { defaultValue: "Project Overview" }).toLowerCase();
//   // Only keep the keys that are actually used
//   const solutionKey = t("CaseStudies.Solution", { defaultValue: "CVIT AI Solution" }).toLowerCase();

//   sections.forEach((section, index) => {
//     const lines = section.trim().split("\n").filter(Boolean);
//     if (!lines.length) return;

//     const title = lines[0].toLowerCase();
//     if (index === 0 && title.includes(projectOverviewKey)) {
//       mainHeading = lines[0];
//       overviewContent = lines.slice(1).map((line) => line.trim());
//     } else {
//       subSections.push({
//         title: lines[0].trim(),
//         content: lines.slice(1).map((line) => line.trim()),
//       });
//     }
//   });

//   return { mainHeading, overviewContent, subSections, solutionKey };
// };

// const CaseStudyDetail = () => {
//   const { t } = useTranslation();
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   // Wrap the study object in useMemo to prevent unnecessary re-renders
//   const study = useMemo(() => ({
//     id: parseInt(id, 10),
//     title: t(`CaseStudies.${id}.title`),
//     studyHeader: t(`CaseStudies.${id}.studyHeader`),
//     image: caseStudyImages[id],
//     description: t(`CaseStudies.${id}.description`),
//   }), [id, t]);
  
//   const [isExiting, setIsExiting] = useState(false);
//   const containerRef = useRef(null);
//   const imgWrapRef = useRef(null);
//   const nextBtnRef = useRef(null);
//   const prevBtnRef = useRef(null);
//   const rafRef = useRef(null);
//   const latestMouseRef = useRef(null);
//   const isNavigatingRef = useRef(false);

//   // Scroll to top when component mounts or when ID changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   useEffect(() => {
//     setIsExiting(false);
//     isNavigatingRef.current = false;
//   }, [id]);

//   useEffect(() => {
//     if (study && study.image) {
//       const img = new Image();
//       img.src = study.image;
//     }

//     const handlePopstate = () => {
//       if (!isNavigatingRef.current) {
//         isNavigatingRef.current = true;
//         setIsExiting(true);
//         setTimeout(() => {
//           navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
//           isNavigatingRef.current = false;
//         }, 500);
//       }
//     };

//     window.addEventListener("popstate", handlePopstate);

//     return () => {
//       window.removeEventListener("popstate", handlePopstate);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [study, navigate, id, t]);

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       const els = containerRef.current?.querySelectorAll(".reveal");
//       els?.forEach((el) => el.classList.add("in-view"));
//       return;
//     }

//     const root = containerRef.current || document;
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("in-view");
//             io.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.13, root: null, rootMargin: "0px 0px -10% 0px" }
//     );

//     const revealEls = root.querySelectorAll(".reveal");
//     revealEls.forEach((el, i) => {
//       if (el) {
//         el.style.setProperty("--reveal-delay", `${i * 90}ms`);
//         io.observe(el);
//       }
//     });

//     return () => {
//       revealEls.forEach((el) => el.classList.remove("in-view"));
//       io.disconnect();
//     };
//   }, [prefersReducedMotion, id]);

//   useEffect(() => {
//     const el = imgWrapRef.current;
//     if (!el || prefersReducedMotion) return;

//     const onMove = (e) => {
//       latestMouseRef.current = e;
//       if (!rafRef.current) {
//         rafRef.current = requestAnimationFrame(() => {
//           const ev = latestMouseRef.current;
//           latestMouseRef.current = null;
//           rafRef.current = null;
//           if (!ev || !el) return;
//           const r = el.getBoundingClientRect();
//           const cx = r.left + r.width / 2;
//           const cy = r.top + r.height / 2;
//           const dx = (ev.clientX - cx) / r.width;
//           const dy = (ev.clientY - cy) / r.height;
//           const rotX = (-dy * 3).toFixed(2);
//           const rotY = (dx * 3).toFixed(2);
//           const tx = (dx * 5).toFixed(2);
//           const ty = (dy * -5).toFixed(2);
//           el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${tx}px, ${ty}px, 0)`;
//           const img = el.querySelector("img");
//           if (img && img.isConnected) {
//             img.style.transform = `translate3d(${(dx * 4).toFixed(2)}px, ${(dy * -4).toFixed(2)}px, 0) scale(1.02)`;
//             img.style.filter = "contrast(1.03) saturate(1.05)";
//           }
//         });
//       }
//     };

//     const onLeave = () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//         rafRef.current = null;
//       }
//       latestMouseRef.current = null;
//       if (!el) return;
//       el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
//       const img = el.querySelector("img");
//       if (img && img.isConnected) {
//         img.style.transform = "translate3d(0,0,0) scale(1)";
//         img.style.filter = "none";
//       }
//     };

//     el.addEventListener("mousemove", onMove);
//     el.addEventListener("mouseleave", onLeave);
//     el.addEventListener("touchmove", onMove, { passive: true });
//     el.addEventListener("touchend", onLeave);

//     return () => {
//       el.removeEventListener("mousemove", onMove);
//       el.removeEventListener("mouseleave", onLeave);
//       el.removeEventListener("touchmove", onMove);
//       el.removeEventListener("touchend", onLeave);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [prefersReducedMotion]);

//   const handleBackClick = () => {
//     console.log("Back button clicked, navigating to / with scrollTo: OurCaseStudies");
//     if (isNavigatingRef.current) {
//       console.log("Navigation blocked: isNavigatingRef is true");
//       return;
//     }
//     isNavigatingRef.current = true;
//     setIsExiting(true);
//     setTimeout(() => {
//       navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
//       isNavigatingRef.current = false;
//     }, 500);
//   };

//   const handleNextClick = () => {
//     console.log("Next button clicked, current ID:", id);
//     if (isNavigatingRef.current) {
//       console.log("Navigation blocked: isNavigatingRef is true");
//       return;
//     }
//     isNavigatingRef.current = true;
//     setIsExiting(true);
//     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
//     const nextIndex = (currentIndex + 1) % caseStudiesFallback.length;
//     const nextId = caseStudiesFallback[nextIndex].id;
//     console.log("Navigating to next case study ID:", nextId);
//     setTimeout(() => {
//       navigate(`/case-study/${nextId}?fromId=${id}`);
//       isNavigatingRef.current = false;
//     }, 500);
//   };

//   const handlePrevClick = () => {
//     console.log("Previous button clicked, current ID:", id);
//     if (isNavigatingRef.current) {
//       console.log("Navigation blocked: isNavigatingRef is true");
//       return;
//     }
//     isNavigatingRef.current = true;
//     setIsExiting(true);
//     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
//     const prevIndex = (currentIndex - 1 + caseStudiesFallback.length) % caseStudiesFallback.length;
//     const prevId = caseStudiesFallback[prevIndex].id;
//     console.log("Navigating to previous case study ID:", prevId);
//     setTimeout(() => {
//       navigate(`/case-study/${prevId}?fromId=${id}`);
//       isNavigatingRef.current = false;
//     }, 500);
//   };

//   if (!study.title || study.title.includes("CaseStudies") || !study.description) {
//     return (
//       <div className="cs-notfound" style={notFoundStyles.wrapper}>
//         <h2 style={notFoundStyles.title}>{t("PageNotFound")}</h2>
//         <button
//           style={notFoundStyles.button}
//           onClick={handleBackClick}
//           aria-label={t("BackToHomeAriaLabel")}
//         >
//           ← {t("BackToHome")}
//         </button>
//       </div>
//     );
//   }

//   const { mainHeading, overviewContent, subSections, solutionKey } = parseDescription(study.description, t);
//   const solutionSectionIndex = subSections.findIndex((s) =>
//     s.title && s.title.toLowerCase().includes(solutionKey)
//   );
//   const solutionSection = solutionSectionIndex !== -1 ? subSections[solutionSectionIndex] : null;
//   const descriptionSections = subSections.filter((_, idx) => idx !== solutionSectionIndex);

//   // Section icons for visual enhancement
//   const sectionIcons = {
//     overview: <Eye size={24} />,
//     challenge: <Target size={24} />,
//     solution: <Zap size={24} />,
//     result: <CheckCircle size={24} />,
//   };

//   return (
//      <>
//      <Navbar />
//      <SideBar/>
     
//      {/* HERO SECTION */}
//      <section className="hero-parallax">
//         <div className="parallax-bg"></div>
//         <div className="hero-overlay"></div>
//         <div className="hero-container">
//           <div className="hero-content-pro">
//             <p className="eyebrow">{t("CaseStudies.CaseStudy")}</p>
//             <h1 className="hero-headline">
//               {study.studyHeader}
//             </h1>
//             <p className="hero-subhead">{study.title}</p>
      
// <div className="hero-cta">
//   <button 
//     className="btn-primary-pro"
//     onClick={(e) => {
//       e.preventDefault();
//       const element = document.getElementById('case-study-content');
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }}
//   >
//     {t("CaseStudies.ViewDetails")}
//   </button>
// </div>
//           </div>
//         </div>
//       </section>

//       {/* CASE STUDY CONTENT */}
//       <section className="policy-section" id="case-study-content">
//         <div className="container-pro">
//           <div className="policy-intro">
//             <p className="intro-text">
//               <strong>{mainHeading}</strong>{" "}
//               {overviewContent.length > 0 && overviewContent.join(" ")}
//             </p>
//           </div>

//           <div className="policy-grid">
//             {/* Image Section */}
//             <motion.div
//               className="policy-card"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="card-header">
//                 <h2 className="card-title">
//                   {sectionIcons.overview}
//                   {t("CaseStudies.VisualOverview")}
//                 </h2>
//               </div>
//               <div className="card-content">
//                 <div className="image-container-modern">
//                   {study.image && (
//                     <img
//                       src={study.image}
//                       alt={study.title}
//                       loading="eager"
//                       onError={(e) => {
//                         console.error(`Failed to load image: ${study.image}`);
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Description Sections */}
//             {descriptionSections.map((section, sIdx) => (
//               <motion.div
//                 key={sIdx}
//                 className="policy-card"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: sIdx * 0.1 }}
//               >
//                 <div className="card-header">
//                   <h2 className="card-title">
//                     {section.title.toLowerCase().includes("challenge") ? sectionIcons.challenge : 
//                      section.title.toLowerCase().includes("requirement") ? sectionIcons.challenge :
//                      sectionIcons.overview}
//                     {section.title}
//                   </h2>
//                 </div>
//                 <div className="card-content">
//                   {section.content.map((line, li) => (
//                     <p key={li}>{line}</p>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}

//             {/* Solution Section */}
//             {solutionSection && (
//               <motion.div
//                 className="policy-card"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: 0.5 }}
//               >
//                 <div className="card-header">
//                   <h2 className="card-title">
//                     {sectionIcons.solution}
//                     {solutionSection.title}
//                   </h2>
//                 </div>
//                 <div className="card-content">
//                   <ol className="solution-list">
//                     {solutionSection.content.map((line, idx) => (
//                       <li key={idx}>{line}</li>
//                     ))}
//                   </ol>
//                 </div>
//               </motion.div>
//             )}
//           </div>

//           {/* Standalone Navigation Buttons */}
//           <div className="standalone-navigation">
//             <button
//               ref={prevBtnRef}
//               className="standalone-btn prev-btn-standalone"
//               onClick={handlePrevClick}
//               aria-label={t("CaseStudies.PreviousCaseStudy")}
//             >
//               <ChevronLeft size={18} /> {t("CaseStudies.PreviousCaseStudy")}
//             </button>
//             <button
//               ref={nextBtnRef}
//               className="standalone-btn next-btn-standalone"
//               onClick={handleNextClick}
//               aria-label={t("CaseStudies.NextCaseStudy")}
//             >
//               {t("CaseStudies.NextCaseStudy")} <ChevronRight size={18} />
//             </button>
//           </div>

//           {/* Back to Home Button */}
//           <div className="back-home-container">
//             <button onClick={handleBackClick} className="back-home-btn">
//               {t("BackToHome")}
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer/>
//    </>
//   );
// };

// const prefersReducedMotion =
//   typeof window !== "undefined" &&
//   window.matchMedia &&
//   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// const notFoundStyles = {
//   wrapper: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "2rem",
//     background: "#0b0f1a",
//     boxSizing: "border-box",
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//   },
//   title: {
//     fontSize: "2rem",
//     color: "#e2e8f0",
//     marginBottom: "1.5rem",
//     fontWeight: 600,
//   },
//   button: {
//     background: "#ef3a3a",
//     color: "#ffffff",
//     border: "none",
//     padding: "0.75rem 1.5rem",
//     borderRadius: "8px",
//     cursor: "pointer",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
//     fontWeight: 600,
//     fontSize: "1rem",
//     transition: "background 0.2s ease, box-shadow 0.2s ease",
//   },
// };

// export default CaseStudyDetail;

// // import React, { useEffect, useRef, useState, useMemo } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { useTranslation } from "react-i18next";
// // import { TransitionGroup, CSSTransition } from "react-transition-group";
// // import { motion } from "framer-motion";
// // import { ChevronRight, ChevronLeft, ArrowRight, Eye, Target, Zap, CheckCircle } from "lucide-react";

// // import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement_3.png";
// // import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection_3.png";
// // import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection_3.png";
// // import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence_3.png";
// // import vialAdapterImg from "../assets/CaseStudies/vial_adapter_3.png";
// // import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking_3.png";
// // import WindowGlassImg from "../assets/CaseStudies/Window_Glass_3.png";
// // import "../Styles/CaseStudyDetail.css";
// // import Navbar from "./Navbar";
// // import SideBar from "./Sidebar";
// // import Footer from "./Footer";

// // const caseStudyImages = {
// //   1: vialAdapterImg,
// //   2: packetInspectionImg,
// //   3: gapMeasurementImg,
// //   4: punchedNumberImg,
// //   5: tracingTrackingImg,
// //   6: sealentPresenceImg,
// //   7: WindowGlassImg,
// // };

// // // Fallback case studies array for navigation
// // const caseStudiesFallback = [
// //   { id: 1, title: "Vial Adaptor Inspection" },
// //   { id: 2, title: "Vial Adaptor Tray OCR-OCV" },
// //   { id: 3, title: "Gap Measurement" },
// //   { id: 4, title: "Stamped Number Detection" },
// //   { id: 5, title: "Tire Traceability and Tracking" },
// //   { id: 6, title: "Door Sealant Presence Detection" },
// //   { id: 7, title: "Window Glass Open/Close Detection" },
// // ];

// // // Parse description to handle sections across languages
// // const parseDescription = (description, t) => {
// //   const sections = description.split("\n\n").filter(Boolean);
// //   let mainHeading = "";
// //   let overviewContent = [];
// //   const subSections = [];

// //   // Define expected section titles using translation keys
// //   const projectOverviewKey = t("CaseStudies.ProjectOverview", { defaultValue: "Project Overview" }).toLowerCase();
// //   // Only keep the keys that are actually used
// //   const solutionKey = t("CaseStudies.Solution", { defaultValue: "CVIT AI Solution" }).toLowerCase();

// //   sections.forEach((section, index) => {
// //     const lines = section.trim().split("\n").filter(Boolean);
// //     if (!lines.length) return;

// //     const title = lines[0].toLowerCase();
// //     if (index === 0 && title.includes(projectOverviewKey)) {
// //       mainHeading = lines[0];
// //       overviewContent = lines.slice(1).map((line) => line.trim());
// //     } else {
// //       subSections.push({
// //         title: lines[0].trim(),
// //         content: lines.slice(1).map((line) => line.trim()),
// //       });
// //     }
// //   });

// //   return { mainHeading, overviewContent, subSections, solutionKey };
// // };

// // const CaseStudyDetail = () => {
// //   const { t } = useTranslation();
// //   const { id } = useParams();
// //   const navigate = useNavigate();
  
// //   // Wrap the study object in useMemo to prevent unnecessary re-renders
// //   const study = useMemo(() => ({
// //     id: parseInt(id, 10),
// //     title: t(`CaseStudies.${id}.title`),
// //     studyHeader: t(`CaseStudies.${id}.studyHeader`),
// //     image: caseStudyImages[id],
// //     description: t(`CaseStudies.${id}.description`),
// //   }), [id, t]);
  
// //   const [isExiting, setIsExiting] = useState(false);
// //   const containerRef = useRef(null);
// //   const imgWrapRef = useRef(null);
// //   const nextBtnRef = useRef(null);
// //   const prevBtnRef = useRef(null);
// //   const rafRef = useRef(null);
// //   const latestMouseRef = useRef(null);
// //   const isNavigatingRef = useRef(false);

// //   // Scroll to top when component mounts or when ID changes
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, [id]);

// //   useEffect(() => {
// //     setIsExiting(false);
// //     isNavigatingRef.current = false;
// //   }, [id]);

// //   useEffect(() => {
// //     if (study && study.image) {
// //       const img = new Image();
// //       img.src = study.image;
// //     }

// //     const handlePopstate = () => {
// //       if (!isNavigatingRef.current) {
// //         isNavigatingRef.current = true;
// //         setIsExiting(true);
// //         setTimeout(() => {
// //           navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
// //           isNavigatingRef.current = false;
// //         }, 500);
// //       }
// //     };

// //     window.addEventListener("popstate", handlePopstate);

// //     return () => {
// //       window.removeEventListener("popstate", handlePopstate);
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     };
// //   }, [study, navigate, id, t]);

// //   useEffect(() => {
// //     if (prefersReducedMotion) {
// //       const els = containerRef.current?.querySelectorAll(".reveal");
// //       els?.forEach((el) => el.classList.add("in-view"));
// //       return;
// //     }

// //     const root = containerRef.current || document;
// //     const io = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add("in-view");
// //             io.unobserve(entry.target);
// //           }
// //         });
// //       },
// //       { threshold: 0.13, root: null, rootMargin: "0px 0px -10% 0px" }
// //     );

// //     const revealEls = root.querySelectorAll(".reveal");
// //     revealEls.forEach((el, i) => {
// //       if (el) {
// //         el.style.setProperty("--reveal-delay", `${i * 90}ms`);
// //         io.observe(el);
// //       }
// //     });

// //     return () => {
// //       revealEls.forEach((el) => el.classList.remove("in-view"));
// //       io.disconnect();
// //     };
// //   }, [prefersReducedMotion, id]);

// //   useEffect(() => {
// //     const el = imgWrapRef.current;
// //     if (!el || prefersReducedMotion) return;

// //     const onMove = (e) => {
// //       latestMouseRef.current = e;
// //       if (!rafRef.current) {
// //         rafRef.current = requestAnimationFrame(() => {
// //           const ev = latestMouseRef.current;
// //           latestMouseRef.current = null;
// //           rafRef.current = null;
// //           if (!ev || !el) return;
// //           const r = el.getBoundingClientRect();
// //           const cx = r.left + r.width / 2;
// //           const cy = r.top + r.height / 2;
// //           const dx = (ev.clientX - cx) / r.width;
// //           const dy = (ev.clientY - cy) / r.height;
// //           const rotX = (-dy * 3).toFixed(2);
// //           const rotY = (dx * 3).toFixed(2);
// //           const tx = (dx * 5).toFixed(2);
// //           const ty = (dy * -5).toFixed(2);
// //           el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${tx}px, ${ty}px, 0)`;
// //           const img = el.querySelector("img");
// //           if (img && img.isConnected) {
// //             img.style.transform = `translate3d(${(dx * 4).toFixed(2)}px, ${(dy * -4).toFixed(2)}px, 0) scale(1.02)`;
// //             img.style.filter = "contrast(1.03) saturate(1.05)";
// //           }
// //         });
// //       }
// //     };

// //     const onLeave = () => {
// //       if (rafRef.current) {
// //         cancelAnimationFrame(rafRef.current);
// //         rafRef.current = null;
// //       }
// //       latestMouseRef.current = null;
// //       if (!el) return;
// //       el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
// //       const img = el.querySelector("img");
// //       if (img && img.isConnected) {
// //         img.style.transform = "translate3d(0,0,0) scale(1)";
// //         img.style.filter = "none";
// //       }
// //     };

// //     el.addEventListener("mousemove", onMove);
// //     el.addEventListener("mouseleave", onLeave);
// //     el.addEventListener("touchmove", onMove, { passive: true });
// //     el.addEventListener("touchend", onLeave);

// //     return () => {
// //       el.removeEventListener("mousemove", onMove);
// //       el.removeEventListener("mouseleave", onLeave);
// //       el.removeEventListener("touchmove", onMove);
// //       el.removeEventListener("touchend", onLeave);
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     };
// //   }, [prefersReducedMotion]);

// //   const handleBackClick = () => {
// //     console.log("Back button clicked, navigating to / with scrollTo: OurCaseStudies");
// //     if (isNavigatingRef.current) {
// //       console.log("Navigation blocked: isNavigatingRef is true");
// //       return;
// //     }
// //     isNavigatingRef.current = true;
// //     setIsExiting(true);
// //     setTimeout(() => {
// //       navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
// //       isNavigatingRef.current = false;
// //     }, 500);
// //   };

// //   const handleNextClick = () => {
// //     console.log("Next button clicked, current ID:", id);
// //     if (isNavigatingRef.current) {
// //       console.log("Navigation blocked: isNavigatingRef is true");
// //       return;
// //     }
// //     isNavigatingRef.current = true;
// //     setIsExiting(true);
// //     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
// //     const nextIndex = (currentIndex + 1) % caseStudiesFallback.length;
// //     const nextId = caseStudiesFallback[nextIndex].id;
// //     console.log("Navigating to next case study ID:", nextId);
// //     setTimeout(() => {
// //       navigate(`/case-study/${nextId}?fromId=${id}`);
// //       isNavigatingRef.current = false;
// //     }, 500);
// //   };

// //   const handlePrevClick = () => {
// //     console.log("Previous button clicked, current ID:", id);
// //     if (isNavigatingRef.current) {
// //       console.log("Navigation blocked: isNavigatingRef is true");
// //       return;
// //     }
// //     isNavigatingRef.current = true;
// //     setIsExiting(true);
// //     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
// //     const prevIndex = (currentIndex - 1 + caseStudiesFallback.length) % caseStudiesFallback.length;
// //     const prevId = caseStudiesFallback[prevIndex].id;
// //     console.log("Navigating to previous case study ID:", prevId);
// //     setTimeout(() => {
// //       navigate(`/case-study/${prevId}?fromId=${id}`);
// //       isNavigatingRef.current = false;
// //     }, 500);
// //   };

// //   if (!study.title || study.title.includes("CaseStudies") || !study.description) {
// //     return (
// //       <div className="cs-notfound" style={notFoundStyles.wrapper}>
// //         <h2 style={notFoundStyles.title}>{t("PageNotFound")}</h2>
// //         <button
// //           style={notFoundStyles.button}
// //           onClick={handleBackClick}
// //           aria-label={t("BackToHomeAriaLabel")}
// //         >
// //           ← {t("BackToHome")}
// //         </button>
// //       </div>
// //     );
// //   }

// //   const { mainHeading, overviewContent, subSections, solutionKey } = parseDescription(study.description, t);
// //   const solutionSectionIndex = subSections.findIndex((s) =>
// //     s.title && s.title.toLowerCase().includes(solutionKey)
// //   );
// //   const solutionSection = solutionSectionIndex !== -1 ? subSections[solutionSectionIndex] : null;
// //   const descriptionSections = subSections.filter((_, idx) => idx !== solutionSectionIndex);

// //   // Section icons for visual enhancement
// //   const sectionIcons = {
// //     overview: <Eye size={24} />,
// //     challenge: <Target size={24} />,
// //     solution: <Zap size={24} />,
// //     result: <CheckCircle size={24} />,
// //   };

// //   return (
// //      <>
// //      <Navbar />
// //      <SideBar/>
     
// //      {/* HERO SECTION */}
// //      <section className="hero-parallax">
// //         <div className="parallax-bg"></div>
// //         <div className="hero-overlay"></div>
// //         <div className="hero-container">
// //           <div className="hero-content-pro">
// //             <p className="eyebrow">{t("CaseStudies.CaseStudy")}</p>
// //             <h1 className="hero-headline">
// //               {study.studyHeader}
// //             </h1>
// //             <p className="hero-subhead">{study.title}</p>
      
// // <div className="hero-cta">
// //   <button 
// //     className="btn-primary-pro"
// //     onClick={(e) => {
// //       e.preventDefault();
// //       const element = document.getElementById('case-study-content');
// //       if (element) {
// //         element.scrollIntoView({ behavior: 'smooth' });
// //       }
// //     }}
// //   >
// //     {t("CaseStudies.ViewDetails")}
// //   </button>
// // </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CASE STUDY CONTENT */}
// //       <section className="policy-section" id="case-study-content">
// //         <div className="container-pro">
// //           <div className="policy-intro">
// //             <p className="intro-text">
// //               <strong>{mainHeading}</strong>{" "}
// //               {overviewContent.length > 0 && overviewContent.join(" ")}
// //             </p>
// //           </div>

// //           <div className="policy-grid">
// //             {/* Image Section */}
// //             <motion.div
// //               className="policy-card"
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.7 }}
// //             >
// //               <div className="card-header">
// //                 <h2 className="card-title">
// //                   {sectionIcons.overview}
// //                   {t("CaseStudies.VisualOverview")}
// //                 </h2>
// //               </div>
// //               <div className="card-content">
// //                 <div className="image-container-modern">
// //                   {study.image && (
// //                     <img
// //                       src={study.image}
// //                       alt={study.title}
// //                       loading="eager"
// //                       onError={(e) => {
// //                         console.error(`Failed to load image: ${study.image}`);
// //                         e.currentTarget.style.display = "none";
// //                       }}
// //                     />
// //                   )}
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Description Sections */}
// //             {descriptionSections.map((section, sIdx) => (
// //               <motion.div
// //                 key={sIdx}
// //                 className="policy-card"
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: sIdx * 0.1 }}
// //               >
// //                 <div className="card-header">
// //                   <h2 className="card-title">
// //                     {section.title.toLowerCase().includes("challenge") ? sectionIcons.challenge : 
// //                      section.title.toLowerCase().includes("requirement") ? sectionIcons.challenge :
// //                      sectionIcons.overview}
// //                     {section.title}
// //                   </h2>
// //                 </div>
// //                 <div className="card-content">
// //                   {section.content.map((line, li) => (
// //                     <p key={li}>{line}</p>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             ))}

// //             {/* Solution Section */}
// //             {solutionSection && (
// //               <motion.div
// //                 className="policy-card"
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: 0.5 }}
// //               >
// //                 <div className="card-header">
// //                   <h2 className="card-title">
// //                     {sectionIcons.solution}
// //                     {solutionSection.title}
// //                   </h2>
// //                 </div>
// //                 <div className="card-content">
// //                   <ol className="solution-list">
// //                     {solutionSection.content.map((line, idx) => (
// //                       <li key={idx}>{line}</li>
// //                     ))}
// //                   </ol>
// //                 </div>
// //               </motion.div>
// //             )}

// //             {/* Navigation Section - Simplified with just navigation buttons */}
// //             <motion.div
// //               className="policy-card"
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.7, delay: 0.6 }}
// //             >
// //               <div className="card-header">
// //                 <h2 className="card-title">
// //                   <ArrowRight size={24} />
// //                   {t("CaseStudies.Navigation")}
// //                 </h2>
// //               </div>
// //               <div className="card-content">
// //                 <div className="navigation-buttons">
// //                   <button
// //                     ref={prevBtnRef}
// //                     className="prev-btn-modern"
// //                     onClick={handlePrevClick}
// //                     aria-label={t("CaseStudies.PreviousCaseStudy")}
// //                   >
// //                     <ChevronLeft size={18} /> {t("CaseStudies.PreviousCaseStudy")}
// //                   </button>
// //                   <button
// //                     ref={nextBtnRef}
// //                     className="next-btn-modern"
// //                     onClick={handleNextClick}
// //                     aria-label={t("CaseStudies.NextCaseStudy")}
// //                   >
// //                     {t("CaseStudies.NextCaseStudy")} <ChevronRight size={18} />
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Back to Home Button */}
// //           <div className="back-home-container">
// //             <button onClick={handleBackClick} className="back-home-btn">
// //               {t("BackToHome")}
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //       <Footer/>
// //    </>
// //   );
// // };

// // const prefersReducedMotion =
// //   typeof window !== "undefined" &&
// //   window.matchMedia &&
// //   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// // const notFoundStyles = {
// //   wrapper: {
// //     minHeight: "100vh",
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: "2rem",
// //     background: "#0b0f1a",
// //     boxSizing: "border-box",
// //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
// //   },
// //   title: {
// //     fontSize: "2rem",
// //     color: "#e2e8f0",
// //     marginBottom: "1.5rem",
// //     fontWeight: 600,
// //   },
// //   button: {
// //     background: "#ef3a3a",
// //     color: "#ffffff",
// //     border: "none",
// //     padding: "0.75rem 1.5rem",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
// //     fontWeight: 600,
// //     fontSize: "1rem",
// //     transition: "background 0.2s ease, box-shadow 0.2s ease",
// //   },
// // };

// // export default CaseStudyDetail;

// import React, { useEffect, useRef, useState, useMemo } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { motion } from "framer-motion";
// import { ChevronRight, ChevronLeft, ArrowRight, Eye, Target, Zap, CheckCircle } from "lucide-react";

// import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement_3.png";
// import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection_3.png";
// import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection_3.png";
// import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence_3.png";
// import vialAdapterImg from "../assets/CaseStudies/vial_adapter_3.png";
// import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking_3.png";
// import WindowGlassImg from "../assets/CaseStudies/Window_Glass_3.png";
// import "../Styles/CaseStudyDetail.css";
// import Navbar from "./Navbar";
// import SideBar from "./Sidebar";
// import Footer from "./Footer";

// const caseStudyImages = {
//   1: vialAdapterImg,
//   2: packetInspectionImg,
//   3: gapMeasurementImg,
//   4: punchedNumberImg,
//   5: tracingTrackingImg,
//   6: sealentPresenceImg,
//   7: WindowGlassImg,
// };

// // Fallback case studies array for navigation
// const caseStudiesFallback = [
//   { id: 1, title: "Vial Adaptor Inspection" },
//   { id: 2, title: "Vial Adaptor Tray OCR-OCV" },
//   { id: 3, title: "Gap Measurement" },
//   { id: 4, title: "Stamped Number Detection" },
//   { id: 5, title: "Tire Traceability and Tracking" },
//   { id: 6, title: "Door Sealant Presence Detection" },
//   { id: 7, title: "Window Glass Open/Close Detection" },
// ];

// // Parse description to handle sections across languages
// const parseDescription = (description, t) => {
//   const sections = description.split("\n\n").filter(Boolean);
//   let mainHeading = "";
//   let overviewContent = [];
//   const subSections = [];

//   // Define expected section titles using translation keys
//   const projectOverviewKey = t("CaseStudies.ProjectOverview", { defaultValue: "Project Overview" }).toLowerCase();
//   // Only keep the keys that are actually used
//   const solutionKey = t("CaseStudies.Solution", { defaultValue: "CVIT AI Solution" }).toLowerCase();

//   sections.forEach((section, index) => {
//     const lines = section.trim().split("\n").filter(Boolean);
//     if (!lines.length) return;

//     const title = lines[0].toLowerCase();
//     if (index === 0 && title.includes(projectOverviewKey)) {
//       mainHeading = lines[0];
//       overviewContent = lines.slice(1).map((line) => line.trim());
//     } else {
//       subSections.push({
//         title: lines[0].trim(),
//         content: lines.slice(1).map((line) => line.trim()),
//       });
//     }
//   });

//   return { mainHeading, overviewContent, subSections, solutionKey };
// };

// const CaseStudyDetail = () => {
//   const { t } = useTranslation();
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   // Wrap the study object in useMemo to prevent unnecessary re-renders
//   const study = useMemo(() => ({
//     id: parseInt(id, 10),
//     title: t(`CaseStudies.${id}.title`),
//     studyHeader: t(`CaseStudies.${id}.studyHeader`),
//     image: caseStudyImages[id],
//     description: t(`CaseStudies.${id}.description`),
//   }), [id, t]);
  
//   const [isExiting, setIsExiting] = useState(false);
//   const containerRef = useRef(null);
//   const imgWrapRef = useRef(null);
//   const nextBtnRef = useRef(null);
//   const prevBtnRef = useRef(null);
//   const rafRef = useRef(null);
//   const latestMouseRef = useRef(null);
//   const isNavigatingRef = useRef(false);

//   // Scroll to top when component mounts or when ID changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   useEffect(() => {
//     setIsExiting(false);
//     isNavigatingRef.current = false;
//   }, [id]);

//   useEffect(() => {
//     if (study && study.image) {
//       const img = new Image();
//       img.src = study.image;
//     }

//     const handlePopstate = () => {
//       if (!isNavigatingRef.current) {
//         isNavigatingRef.current = true;
//         setIsExiting(true);
//         setTimeout(() => {
//           navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
//           isNavigatingRef.current = false;
//         }, 500);
//       }
//     };

//     window.addEventListener("popstate", handlePopstate);

//     return () => {
//       window.removeEventListener("popstate", handlePopstate);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [study, navigate, id, t]);

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       const els = containerRef.current?.querySelectorAll(".reveal");
//       els?.forEach((el) => el.classList.add("in-view"));
//       return;
//     }

//     const root = containerRef.current || document;
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("in-view");
//             io.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.13, root: null, rootMargin: "0px 0px -10% 0px" }
//     );

//     const revealEls = root.querySelectorAll(".reveal");
//     revealEls.forEach((el, i) => {
//       if (el) {
//         el.style.setProperty("--reveal-delay", `${i * 90}ms`);
//         io.observe(el);
//       }
//     });

//     return () => {
//       revealEls.forEach((el) => el.classList.remove("in-view"));
//       io.disconnect();
//     };
//   }, [prefersReducedMotion, id]);

//   useEffect(() => {
//     const el = imgWrapRef.current;
//     if (!el || prefersReducedMotion) return;

//     const onMove = (e) => {
//       latestMouseRef.current = e;
//       if (!rafRef.current) {
//         rafRef.current = requestAnimationFrame(() => {
//           const ev = latestMouseRef.current;
//           latestMouseRef.current = null;
//           rafRef.current = null;
//           if (!ev || !el) return;
//           const r = el.getBoundingClientRect();
//           const cx = r.left + r.width / 2;
//           const cy = r.top + r.height / 2;
//           const dx = (ev.clientX - cx) / r.width;
//           const dy = (ev.clientY - cy) / r.height;
//           const rotX = (-dy * 3).toFixed(2);
//           const rotY = (dx * 3).toFixed(2);
//           const tx = (dx * 5).toFixed(2);
//           const ty = (dy * -5).toFixed(2);
//           el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${tx}px, ${ty}px, 0)`;
//           const img = el.querySelector("img");
//           if (img && img.isConnected) {
//             img.style.transform = `translate3d(${(dx * 4).toFixed(2)}px, ${(dy * -4).toFixed(2)}px, 0) scale(1.02)`;
//             img.style.filter = "contrast(1.03) saturate(1.05)";
//           }
//         });
//       }
//     };

//     const onLeave = () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//         rafRef.current = null;
//       }
//       latestMouseRef.current = null;
//       if (!el) return;
//       el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
//       const img = el.querySelector("img");
//       if (img && img.isConnected) {
//         img.style.transform = "translate3d(0,0,0) scale(1)";
//         img.style.filter = "none";
//       }
//     };

//     el.addEventListener("mousemove", onMove);
//     el.addEventListener("mouseleave", onLeave);
//     el.addEventListener("touchmove", onMove, { passive: true });
//     el.addEventListener("touchend", onLeave);

//     return () => {
//       el.removeEventListener("mousemove", onMove);
//       el.removeEventListener("mouseleave", onLeave);
//       el.removeEventListener("touchmove", onMove);
//       el.removeEventListener("touchend", onLeave);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [prefersReducedMotion]);

//   const handleBackClick = () => {
//     console.log("Back button clicked, navigating to / with scrollTo: OurCaseStudies");
//     if (isNavigatingRef.current) {
//       console.log("Navigation blocked: isNavigatingRef is true");
//       return;
//     }
//     isNavigatingRef.current = true;
//     setIsExiting(true);
//     setTimeout(() => {
//       navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
//       isNavigatingRef.current = false;
//     }, 500);
//   };

//   const handleNextClick = () => {
//     console.log("Next button clicked, current ID:", id);
//     if (isNavigatingRef.current) {
//       console.log("Navigation blocked: isNavigatingRef is true");
//       return;
//     }
//     isNavigatingRef.current = true;
//     setIsExiting(true);
//     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
//     const nextIndex = (currentIndex + 1) % caseStudiesFallback.length;
//     const nextId = caseStudiesFallback[nextIndex].id;
//     console.log("Navigating to next case study ID:", nextId);
//     setTimeout(() => {
//       navigate(`/case-study/${nextId}?fromId=${id}`);
//       isNavigatingRef.current = false;
//     }, 500);
//   };

//   const handlePrevClick = () => {
//     console.log("Previous button clicked, current ID:", id);
//     if (isNavigatingRef.current) {
//       console.log("Navigation blocked: isNavigatingRef is true");
//       return;
//     }
//     isNavigatingRef.current = true;
//     setIsExiting(true);
//     const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
//     const prevIndex = (currentIndex - 1 + caseStudiesFallback.length) % caseStudiesFallback.length;
//     const prevId = caseStudiesFallback[prevIndex].id;
//     console.log("Navigating to previous case study ID:", prevId);
//     setTimeout(() => {
//       navigate(`/case-study/${prevId}?fromId=${id}`);
//       isNavigatingRef.current = false;
//     }, 500);
//   };

//   if (!study.title || study.title.includes("CaseStudies") || !study.description) {
//     return (
//       <div className="cs-notfound" style={notFoundStyles.wrapper}>
//         <h2 style={notFoundStyles.title}>{t("PageNotFound")}</h2>
//         <button
//           style={notFoundStyles.button}
//           onClick={handleBackClick}
//           aria-label={t("BackToHomeAriaLabel")}
//         >
//           ← {t("BackToHome")}
//         </button>
//       </div>
//     );
//   }

//   const { mainHeading, overviewContent, subSections, solutionKey } = parseDescription(study.description, t);
//   const solutionSectionIndex = subSections.findIndex((s) =>
//     s.title && s.title.toLowerCase().includes(solutionKey)
//   );
//   const solutionSection = solutionSectionIndex !== -1 ? subSections[solutionSectionIndex] : null;
//   const descriptionSections = subSections.filter((_, idx) => idx !== solutionSectionIndex);

//   // Section icons for visual enhancement
//   const sectionIcons = {
//     overview: <Eye size={24} />,
//     challenge: <Target size={24} />,
//     solution: <Zap size={24} />,
//     result: <CheckCircle size={24} />,
//   };

//   return (
//      <>
//      <Navbar />
//      <SideBar/>
     
//      {/* HERO SECTION */}
//      <section className="hero-parallax">
//         <div className="parallax-bg"></div>
//         <div className="hero-overlay"></div>
//         <div className="hero-container">
//           <div className="hero-content-pro">
//             <p className="eyebrow">{t("CaseStudies.CaseStudy")}</p>
//             <h1 className="hero-headline">
//               {study.studyHeader}
//             </h1>
//             <p className="hero-subhead">{study.title}</p>
      
// <div className="hero-cta">
//   <button 
//     className="btn-primary-pro"
//     onClick={(e) => {
//       e.preventDefault();
//       const element = document.getElementById('case-study-content');
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }}
//   >
//     {t("CaseStudies.ViewDetails")}
//   </button>
// </div>
//           </div>
//         </div>
//       </section>

//       {/* CASE STUDY CONTENT */}
//       <section className="policy-section" id="case-study-content">
//         <div className="container-pro">
//           <div className="policy-intro">
//             <p className="intro-text">
//               <strong>{mainHeading}</strong>{" "}
//               {overviewContent.length > 0 && overviewContent.join(" ")}
//             </p>
//           </div>

//           <div className="policy-grid">
//             {/* Image Section */}
//             <motion.div
//               className="policy-card"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="card-header">
//                 <h2 className="card-title">
//                   {sectionIcons.overview}
//                   {t("CaseStudies.VisualOverview")}
//                 </h2>
//               </div>
//               <div className="card-content">
//                 <div className="image-container-modern">
//                   {study.image && (
//                     <img
//                       src={study.image}
//                       alt={study.title}
//                       loading="eager"
//                       onError={(e) => {
//                         console.error(`Failed to load image: ${study.image}`);
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Description Sections */}
//             {descriptionSections.map((section, sIdx) => (
//               <motion.div
//                 key={sIdx}
//                 className="policy-card"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: sIdx * 0.1 }}
//               >
//                 <div className="card-header">
//                   <h2 className="card-title">
//                     {section.title.toLowerCase().includes("challenge") ? sectionIcons.challenge : 
//                      section.title.toLowerCase().includes("requirement") ? sectionIcons.challenge :
//                      sectionIcons.overview}
//                     {section.title}
//                   </h2>
//                 </div>
//                 <div className="card-content">
//                   {section.content.map((line, li) => (
//                     <p key={li}>{line}</p>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}

//             {/* Solution Section */}
//             {solutionSection && (
//               <motion.div
//                 className="policy-card"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: 0.5 }}
//               >
//                 <div className="card-header">
//                   <h2 className="card-title">
//                     {sectionIcons.solution}
//                     {solutionSection.title}
//                   </h2>
//                 </div>
//                 <div className="card-content">
//                   <ol className="solution-list">
//                     {solutionSection.content.map((line, idx) => (
//                       <li key={idx}>{line}</li>
//                     ))}
//                   </ol>
//                 </div>
//               </motion.div>
//             )}
//           </div>

//           {/* Standalone Navigation Buttons */}
//           <div className="standalone-navigation">
//             <button
//               ref={prevBtnRef}
//               className="standalone-btn prev-btn-standalone"
//               onClick={handlePrevClick}
//               aria-label={t("CaseStudies.PreviousCaseStudy")}
//             >
//               <ChevronLeft size={18} /> {t("CaseStudies.PreviousCaseStudy")}
//             </button>
//             <button
//               ref={nextBtnRef}
//               className="standalone-btn next-btn-standalone"
//               onClick={handleNextClick}
//               aria-label={t("CaseStudies.NextCaseStudy")}
//             >
//               {t("CaseStudies.NextCaseStudy")} <ChevronRight size={18} />
//             </button>
//           </div>

//           {/* Back to Home Button */}
//           <div className="back-home-container">
//             <button onClick={handleBackClick} className="back-home-btn">
//               {t("BackToHome")}
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer/>
//    </>
//   );
// };

// const prefersReducedMotion =
//   typeof window !== "undefined" &&
//   window.matchMedia &&
//   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// const notFoundStyles = {
//   wrapper: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "2rem",
//     background: "#0b0f1a",
//     boxSizing: "border-box",
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//   },
//   title: {
//     fontSize: "2rem",
//     color: "#e2e8f0",
//     marginBottom: "1.5rem",
//     fontWeight: 600,
//   },
//   button: {
//     background: "#ef3a3a",
//     color: "#ffffff",
//     border: "none",
//     padding: "0.75rem 1.5rem",
//     borderRadius: "8px",
//     cursor: "pointer",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
//     fontWeight: 600,
//     fontSize: "1rem",
//     transition: "background 0.2s ease, box-shadow 0.2s ease",
//   },
// };

// export default CaseStudyDetail;



import React, { useEffect, useRef, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight, Eye, Target, Zap, CheckCircle } from "lucide-react";

import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement_3.png";
import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection_3.png";
import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection_3.png";
import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence_3.png";
import vialAdapterImg from "../assets/CaseStudies/vial_adapter_3.png";
import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking_3.png";
import WindowGlassImg from "../assets/CaseStudies/Window_Glass_3.png";
import TubTyvekImg from "../assets/CaseStudies/Tub_Tyvek_Inner_OK_3.png";
import HandBrakeCableImg from "../assets/CaseStudies/Hand_Brake_Cable_3.png";
import VINInspectionImg from "../assets/CaseStudies/VIN_Number_detection_3.png";
import LadleHookImg from "../assets/CaseStudies/Ladle_Hook_Inspection_3.png";
import CylinderHeadImg from "../assets/CaseStudies/Cylinder_Head_Inspection_3.png";
import "../Styles/CaseStudyDetail.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Footer from "./Footer";

const caseStudyImages = {
  1: vialAdapterImg,
  2: packetInspectionImg,
  3: gapMeasurementImg,
  4: punchedNumberImg,
  5: tracingTrackingImg,
  6: sealentPresenceImg,
  7: WindowGlassImg,
  8: TubTyvekImg,
  9: HandBrakeCableImg,
  10: VINInspectionImg,
  11: LadleHookImg,
  12: CylinderHeadImg,
};

// Fallback case studies array for navigation
const caseStudiesFallback = [
  { id: 1, title: "Vial Adaptor Inspection" },
  { id: 2, title: "Vial Adaptor Tray OCR-OCV" },
  { id: 3, title: "Gap Measurement" },
  { id: 4, title: "Stamped Number Detection" },
  { id: 5, title: "Tire Traceability and Tracking" },
  { id: 6, title: "Door Sealant Presence Detection" },
  { id: 7, title: "Window Glass Open/Close Detection" },
  { id: 8, title: "Tub TYVEK Inspection" },
  { id: 9, title: "Hand Brake Cable Bin Inspection" },
  { id: 10, title: "VIN Number Plate Inspection" },
  { id: 11, title: "Ladle Hook Inspection" },
  { id: 12, title: "360° Cylinder Head Inspection" },
];

// Parse description to handle sections across languages
const parseDescription = (description, t) => {
  const sections = description.split("\n\n").filter(Boolean);
  let mainHeading = "";
  let overviewContent = [];
  const subSections = [];

  // Define expected section titles using translation keys
  const projectOverviewKey = t("CaseStudies.ProjectOverview", { defaultValue: "Project Overview" }).toLowerCase();
  // Only keep the keys that are actually used
  const solutionKey = t("CaseStudies.Solution", { defaultValue: "CVIT AI Solution" }).toLowerCase();

  sections.forEach((section, index) => {
    const lines = section.trim().split("\n").filter(Boolean);
    if (!lines.length) return;

    const title = lines[0].toLowerCase();
    if (index === 0 && title.includes(projectOverviewKey)) {
      mainHeading = lines[0];
      overviewContent = lines.slice(1).map((line) => line.trim());
    } else {
      subSections.push({
        title: lines[0].trim(),
        content: lines.slice(1).map((line) => line.trim()),
      });
    }
  });

  return { mainHeading, overviewContent, subSections, solutionKey };
};

const CaseStudyDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Wrap the study object in useMemo to prevent unnecessary re-renders
  const study = useMemo(() => ({
    id: parseInt(id, 10),
    title: t(`CaseStudies.${id}.title`),
    studyHeader: t(`CaseStudies.${id}.studyHeader`),
    image: caseStudyImages[id],
    description: t(`CaseStudies.${id}.description`),
  }), [id, t]);
  
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef(null);
  const imgWrapRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const rafRef = useRef(null);
  const latestMouseRef = useRef(null);
  const isNavigatingRef = useRef(false);

  // Scroll to top when component mounts or when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setIsExiting(false);
    isNavigatingRef.current = false;
  }, [id]);

  useEffect(() => {
    if (study && study.image) {
      const img = new Image();
      img.src = study.image;
    }

    const handlePopstate = () => {
      if (!isNavigatingRef.current) {
        isNavigatingRef.current = true;
        setIsExiting(true);
        setTimeout(() => {
          navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
          isNavigatingRef.current = false;
        }, 500);
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [study, navigate, id, t]);

  useEffect(() => {
    if (prefersReducedMotion) {
      const els = containerRef.current?.querySelectorAll(".reveal");
      els?.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const root = containerRef.current || document;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13, root: null, rootMargin: "0px 0px -10% 0px" }
    );

    const revealEls = root.querySelectorAll(".reveal");
    revealEls.forEach((el, i) => {
      if (el) {
        el.style.setProperty("--reveal-delay", `${i * 90}ms`);
        io.observe(el);
      }
    });

    return () => {
      revealEls.forEach((el) => el.classList.remove("in-view"));
      io.disconnect();
    };
  }, [prefersReducedMotion, id]);

  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el || prefersReducedMotion) return;

    const onMove = (e) => {
      latestMouseRef.current = e;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const ev = latestMouseRef.current;
          latestMouseRef.current = null;
          rafRef.current = null;
          if (!ev || !el) return;
          const r = el.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = (ev.clientX - cx) / r.width;
          const dy = (ev.clientY - cy) / r.height;
          const rotX = (-dy * 3).toFixed(2);
          const rotY = (dx * 3).toFixed(2);
          const tx = (dx * 5).toFixed(2);
          const ty = (dy * -5).toFixed(2);
          el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${tx}px, ${ty}px, 0)`;
          const img = el.querySelector("img");
          if (img && img.isConnected) {
            img.style.transform = `translate3d(${(dx * 4).toFixed(2)}px, ${(dy * -4).toFixed(2)}px, 0) scale(1.02)`;
            img.style.filter = "contrast(1.03) saturate(1.05)";
          }
        });
      }
    };

    const onLeave = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      latestMouseRef.current = null;
      if (!el) return;
      el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
      const img = el.querySelector("img");
      if (img && img.isConnected) {
        img.style.transform = "translate3d(0,0,0) scale(1)";
        img.style.filter = "none";
      }
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  const handleBackClick = () => {
    console.log("Back button clicked, navigating to / with scrollTo: OurCaseStudies");
    if (isNavigatingRef.current) {
      console.log("Navigation blocked: isNavigatingRef is true");
      return;
    }
    isNavigatingRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      navigate(`/`, { state: { scrollTo: t("OurCaseStudies"), fromCaseStudy: true, fromId: id } });
      isNavigatingRef.current = false;
    }, 500);
  };

  const handleNextClick = () => {
    console.log("Next button clicked, current ID:", id);
    if (isNavigatingRef.current) {
      console.log("Navigation blocked: isNavigatingRef is true");
      return;
    }
    isNavigatingRef.current = true;
    setIsExiting(true);
    const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
    const nextIndex = (currentIndex + 1) % caseStudiesFallback.length;
    const nextId = caseStudiesFallback[nextIndex].id;
    console.log("Navigating to next case study ID:", nextId);
    setTimeout(() => {
      navigate(`/case-study/${nextId}?fromId=${id}`);
      isNavigatingRef.current = false;
    }, 500);
  };

  const handlePrevClick = () => {
    console.log("Previous button clicked, current ID:", id);
    if (isNavigatingRef.current) {
      console.log("Navigation blocked: isNavigatingRef is true");
      return;
    }
    isNavigatingRef.current = true;
    setIsExiting(true);
    const currentIndex = caseStudiesFallback.findIndex((cs) => cs.id === parseInt(id, 10));
    const prevIndex = (currentIndex - 1 + caseStudiesFallback.length) % caseStudiesFallback.length;
    const prevId = caseStudiesFallback[prevIndex].id;
    console.log("Navigating to previous case study ID:", prevId);
    setTimeout(() => {
      navigate(`/case-study/${prevId}?fromId=${id}`);
      isNavigatingRef.current = false;
    }, 500);
  };

  if (!study.title || study.title.includes("CaseStudies") || !study.description) {
    return (
      <div className="cs-notfound" style={notFoundStyles.wrapper}>
        <h2 style={notFoundStyles.title}>{t("PageNotFound")}</h2>
        <button
          style={notFoundStyles.button}
          onClick={handleBackClick}
          aria-label={t("BackToHomeAriaLabel")}
        >
          ← {t("BackToHome")}
        </button>
      </div>
    );
  }

  const { mainHeading, overviewContent, subSections, solutionKey } = parseDescription(study.description, t);
  const solutionSectionIndex = subSections.findIndex((s) =>
    s.title && s.title.toLowerCase().includes(solutionKey)
  );
  const solutionSection = solutionSectionIndex !== -1 ? subSections[solutionSectionIndex] : null;
  const descriptionSections = subSections.filter((_, idx) => idx !== solutionSectionIndex);

  // Section icons for visual enhancement
  const sectionIcons = {
    overview: <Eye size={24} />,
    challenge: <Target size={24} />,
    solution: <Zap size={24} />,
    result: <CheckCircle size={24} />,
  };

  return (
     <>
     <Navbar />
     <SideBar/>
     
     {/* HERO SECTION */}
     <section className="hero-parallax">
        <div className="parallax-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content-pro">
            <p className="eyebrow">{t("CaseStudies.CaseStudy")}</p>
            <h1 className="hero-headline">
              {study.studyHeader}
            </h1>
            <p className="hero-subhead">{study.title}</p>
      
<div className="hero-cta">
  <button 
    className="btn-primary-pro"
    onClick={(e) => {
      e.preventDefault();
      const element = document.getElementById('case-study-content');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    {t("CaseStudies.ViewDetails")}
  </button>
</div>
          </div>
        </div>
      </section>

      {/* CASE STUDY CONTENT */}
      <section className="policy-section" id="case-study-content">
        <div className="container-pro">
          <div className="policy-intro">
            <p className="intro-text">
              <strong>{mainHeading}</strong>{" "}
              {overviewContent.length > 0 && overviewContent.join(" ")}
            </p>
          </div>

          <div className="policy-grid">
            {/* Image Section */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.overview}
                  {t("CaseStudies.VisualOverview")}
                </h2>
              </div>
              <div className="card-content">
                <div className="image-container-modern">
                  {study.image && (
                    <img
                      src={study.image}
                      alt={study.title}
                      loading="eager"
                      onError={(e) => {
                        console.error(`Failed to load image: ${study.image}`);
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                </div>
              </div>
            </motion.div>

            {/* Description Sections */}
            {descriptionSections.map((section, sIdx) => (
              <motion.div
                key={sIdx}
                className="policy-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: sIdx * 0.1 }}
              >
                <div className="card-header">
                  <h2 className="card-title">
                    {section.title.toLowerCase().includes("challenge") ? sectionIcons.challenge : 
                     section.title.toLowerCase().includes("requirement") ? sectionIcons.challenge :
                     sectionIcons.overview}
                    {section.title}
                  </h2>
                </div>
                <div className="card-content">
                  <ol className="solution-list">
                    {section.content.map((line, li) => (
                      <li key={li}>{line}</li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ))}

            {/* Solution Section */}
            {solutionSection && (
              <motion.div
                className="policy-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="card-header">
                  <h2 className="card-title">
                    {sectionIcons.solution}
                    {solutionSection.title}
                  </h2>
                </div>
                <div className="card-content">
                  <ol className="solution-list">
                    {solutionSection.content.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            )}
          </div>

          {/* Standalone Navigation Buttons */}
          <div className="standalone-navigation">
            <button
              ref={prevBtnRef}
              className="standalone-btn prev-btn-standalone"
              onClick={handlePrevClick}
              aria-label={t("CaseStudies.PreviousCaseStudy")}
            >
              <ChevronLeft size={18} /> {t("CaseStudies.PreviousCaseStudy")}
            </button>
            <button
              ref={nextBtnRef}
              className="standalone-btn next-btn-standalone"
              onClick={handleNextClick}
              aria-label={t("CaseStudies.NextCaseStudy")}
            >
              {t("CaseStudies.NextCaseStudy")} <ChevronRight size={18} />
            </button>
          </div>

          {/* Back to Home Button */}
          <div className="back-home-container">
            <button onClick={handleBackClick} className="back-home-btn">
              {t("BackToHome")}
            </button>
          </div>
        </div>
      </section>
      <Footer/>
   </>
  );
};

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const notFoundStyles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    background: "#0b0f1a",
    boxSizing: "border-box",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  title: {
    fontSize: "2rem",
    color: "#e2e8f0",
    marginBottom: "1.5rem",
    fontWeight: 600,
  },
  button: {
    background: "#ef3a3a",
    color: "#ffffff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "background 0.2s ease, box-shadow 0.2s ease",
  },
};

export default CaseStudyDetail;