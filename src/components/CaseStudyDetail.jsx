// import React, { useEffect, useRef, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// import gapMeasurementImg from "../assets/Gap_Measurement.png";
// import packetInspectionImg from "../assets/Packet_Inspection.png";
// import punchedNumberImg from "../assets/Punched_Number_detection.png";
// import sealentPresenceImg from "../assets/Door_Sealent_Presence.png";
// import sprocketWheelImg from "../assets/SpRocket_Wheel_Inspection.png";
// import vialAdapterImg from "../assets/vial_adapter.png";
// import tracingTrackingImg from "../assets/Tracing_And_Tracking.png";
// import WindowGlassImg from "../assets/Window_Glass.png";

// const caseStudies = [
//   {
//     id: 1,
//     title: "CASE STUDY 1 - AI BASED MACHINE VISION SYSTEM FOR VIAL ADOPTER INSPECTION",
//     image: vialAdapterImg,
//     description: `Project Requirements -
// The customer requires an AI-powered vision system to inspect Vial Adopters during production.
// The system must accurately detect and classify common defects such as: Damaged fingers, Improper Slits, Broken or Missing Spikes
// Inspections must be fast, accurate, and non-intrusive, with real-time feedback for the production line.

// Challenges -
// Subtle defects and variations in shape or color
// High-speed inspection requirements
// Reliable detection of both major and minor defects
// Variability in lighting and background

// CVIT AI Solution -
// We developed a deep learning-based vision model trained on thousands of images of both acceptable and defective Vial Adopters.
// High-resolution cameras were strategically placed to capture all critical angles.
// A convolutional neural network (CNN) architecture was used for defect detection and classification.
// Edge-based preprocessing ensured robust detection in varied lighting.
// Achieved over 98% accuracy at production speed with real-time alerts for defective units.`,
//   },
//   {
//     id: 2,
//     title: "CASE STUDY 2 - AI BASED OCR-OCV SYSTEM FOR VIAL ADAPTER PACKET INSPECTION",
//     image: packetInspectionImg,
//     description: `Project Requirements -
// The client needed an AI-driven OCR-OCV system to verify the printed text (e.g., batch codes, expiration dates) on Vial Adapter Packets.
// Ensure printed text is legible, correctly placed, and matches expected values.

// Challenges -
// Low-contrast or smudged printing
// Slight variations in character spacing or font
// High-speed inspection demands
// Frequent product label changes requiring adaptable AI

// CVIT AI Solution -
// We implemented a flexible OCR engine based on deep learning, trained to recognize multiple fonts, sizes, and orientations.
// Used synthetic data augmentation to improve recognition under poor printing conditions.
// Real-time comparison with expected templates via OCV ensured integrity.
// Integrated alert system for illegible/mismatched prints.
// Achieved over 95% OCR accuracy in real production environments.`,
//   },
//   {
//     id: 3,
//     title: "CASE STUDY 3 - AI BASED MACHINE VISION SYSTEM FOR GAP MEASUREMENT",
//     image: gapMeasurementImg,
//     description: `Project Requirements -
// Automate precise gap measurement between mechanical components for QA during assembly.
// Ensure spacing tolerances are consistently met across all units.

// Challenges -
// Tight tolerance requirements (sub-mm range)
// Complex component geometries
// Variable lighting and surface finishes
// Maintaining speed without compromising accuracy

// CVIT AI Solution -
// Designed a custom machine vision model using edge detection + neural network for interpretation.
// High-resolution line scan cameras used for micron-level precision.
// AI corrected for perspective distortion using 3D pose estimation.
// Measurement feedback integrated into PLC for automatic rejection of faulty assemblies.
// System achieved ±0.05mm measurement repeatability.`,
//   },
//   {
//     id: 4,
//     title: "CASE STUDY 4 - AI BASED MACHINE VISION SYSTEM FOR PUNCHED NUMBER DETECTION",
//     image: punchedNumberImg,
//     description: `Project Requirements -
// Automatically detect and verify metal-punched serial numbers on parts.
// Ensure legibility and correctness for compliance traceability.

// Challenges -
// Low contrast due to metal glare and irregular punching
// Non-uniform depths and distortion
// Dust and surface wear

// CVIT AI Solution -
// Custom AI-based OCR model trained on metal-punched numeric fonts with deformation tolerance.
// Adaptive illumination using dome + side lighting to remove shadows and glare.
// Used image sharpening + thresholding pre-processing before CNN detection.
// Integrated logging system stored serial numbers in database for each unit.
// System reached 94% accuracy with retry/recheck protocol for ambiguous reads.`,
//   },
//   {
//     id: 5,
//     title: "CASE STUDY 5 - AI BASED TRACEABILITY AND PART TRACKING SOLUTION",
//     image: tracingTrackingImg,
//     description: `Project Requirements -
// Enable full traceability of parts moving across a complex manufacturing line.
// Each part must be uniquely identified and tracked through stations.

// Challenges -
// Mixed part types and shapes
// Inconsistent label/tag placement
// Manual handling introduces orientation variation

// CVIT AI Solution -
// Implemented hybrid system: AI-based part recognition + barcode/QR detection.
// Integrated with MES system to log timestamps, location, and status per part.
// Used multiple angled cameras to ensure 360° visibility.
// Achieved 99% track coverage with automatic alerts for missing/unreadable tags.`,
//   },
//   {
//     id: 6,
//     title: "CASE STUDY 6 - AI BASED MACHINE VISION SYSTEM FOR DOOR SEALANT PRESENCE DETECTION",
//     image: sealentPresenceImg,
//     description: `Project Requirements -
// Verify the continuous presence and correct application of sealant on car doors before curing.
// Sealant must be applied evenly along designated track areas.

// Challenges -
// Sealant color similar to door frame (low contrast)
// Sealant applied via robot - may skip or misplace regions
// Real-time inspection needed before next process stage

// CVIT AI Solution -
// Trained a segmentation model (U-Net architecture) to detect sealant trace against complex backgrounds.
// Used UV-sensitive cameras where sealant was tagged with fluorescent agent.
// Implemented heatmap overlay to visualize inspection results to operator.
// Achieved >97% detection accuracy and reduced defect pass-through by 85%.`,
//   },
//   {
//     id: 7,
//     title: "CASE STUDY 7 - AI BASED MACHINE VISION SYSTEM FOR SPROCKET WHEEL INSPECTION",
//     image: sprocketWheelImg,
//     description: `Project Requirements -
// Detect manufacturing defects in sprocket wheels - such as broken teeth, cracks, or deformation.
// Inspect multiple sprocket variants on same line.

// Challenges -
// Irregular defects hard to define using rule-based systems
// Changing lighting due to metallic surface
// Different sizes/shapes of wheels on the same conveyor

// CVIT AI Solution -
// Developed multi-class defect detection CNN using transfer learning on pre-trained models.
// Designed a smart fixture to rotate sprockets under a stationary camera.
// Adaptive thresholding used to normalize reflections.
// System detected 6 defect classes with 93% accuracy and supported auto-sorting by defect type.`,
//   },
//   {
//     id: 8,
//     title: "CASE STUDY 8 - AI BASED MACHINE VISION SYSTEM FOR WINDOW GLASS SCRATCH INSPECTION",
//     image: WindowGlassImg,
//     description: `Project Requirements -
// Inspect window glass panels for surface scratches before dispatch.
// Catch both visible and micro scratches.

// Challenges -
// Highly reflective glass surface causes artifacts
// Scratches vary in depth and orientation
// Need differentiation from dust/smudges

// CVIT AI Solution -
// Used darkfield illumination to enhance scratch visibility.
// High-resolution imaging + deep learning model trained to distinguish scratches from noise.
// Dynamic thresholding and post-processing to filter false positives.
// Achieved 90%+ detection rate for scratch length >2mm.
// Reduced return/rework rate by 70%.`,
//   },
// ];

// // Helper to parse description text into sections & split lines into array items for numbered lists
// const parseDescription = (description) => {
//   return description
//     .split("\n\n")
//     .map((section) => {
//       const [title, ...contentLines] = section.trim().split("\n");
//       const cleanedContent = contentLines.map((line) => line.trim()).filter(Boolean);
//       return {
//         title,
//         content: cleanedContent,
//       };
//     })
//     .filter(Boolean);
// };

// const CaseStudyDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const study = caseStudies.find((cs) => cs.id === parseInt(id, 10));
//   const [isExiting, setIsExiting] = useState(false);
//   const containerRef = useRef(null);
//   const imgWrapRef = useRef(null);
//   const backBtnRef = useRef(null);
//   const rafRef = useRef(null);
//   const latestMouseRef = useRef(null);
//   const isNavigatingRef = useRef(false);
//   const timeoutRef = useRef(null);
//   const prefersReducedMotion =
//     typeof window !== "undefined" &&
//     window.matchMedia &&
//     window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   useEffect(() => {
//     if (study && study.image) {
//       const img = new Image();
//       img.src = study.image;
//     }

//     const handlePopstate = () => {
//       if (!isNavigatingRef.current) {
//         isNavigatingRef.current = true;
//         setIsExiting(true);
//         timeoutRef.current = setTimeout(() => {
//           isNavigatingRef.current = false;
//           navigate("/", { state: { scrollTo: "Our Case Studies", fromCaseStudy: true } });
//         }, 500);
//       }
//     };

//     window.addEventListener("popstate", handlePopstate);

//     return () => {
//       window.removeEventListener("popstate", handlePopstate);
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [study, navigate]);

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
//   }, [prefersReducedMotion]);

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
//     if (isNavigatingRef.current) return;
//     isNavigatingRef.current = true;
//     setIsExiting(true);
//     timeoutRef.current = setTimeout(() => {
//       navigate("/", { state: { scrollTo: "Our Case Studies", fromCaseStudy: true } });
//       isNavigatingRef.current = false;
//     }, 500);
//   };

//   if (!study) {
//     return (
//       <div className="cs-notfound" style={notFoundStyles.wrapper}>
//         <h2 style={notFoundStyles.title}>Case Study Not Found</h2>
//         <button
//           style={notFoundStyles.button}
//           onClick={handleBackClick}
//           aria-label="Go back to case studies"
//         >
//           ← Go Back
//         </button>
//       </div>
//     );
//   }

//   const parsed = parseDescription(study.description);
//   const solutionSectionIndex = parsed.findIndex((s) =>
//     s.title && s.title.toLowerCase().includes("cvit ai solution")
//   );
//   const solutionSection =
//     solutionSectionIndex !== -1 ? parsed[solutionSectionIndex] : null;
//   const sideSections = parsed.filter((_, idx) => idx !== solutionSectionIndex);

//   return (
//     <>
//       <style>{`
//         :root {
//           --bg: #f7f9fc;
//           --card-bg: #ffffff;
//           --text-primary: #1a2a44;
//           --text-secondary: #4a5568;
//           --accent-color: #ef3a3a;
//           --border-color: #e2e8f0;
//           --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//           --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
//           --max-content-w: 1280px;
//           --right-col-w: 600px;
//           --mini-card-height: 300px;
//           --solution-card-height: 350px;
//           --image-height: 500px;
//         }

//         .cs-container {
//           background: var(--bg);
//           min-height: 100vh;
//           padding: 60px 20px;
//           box-sizing: border-box;
//           display: flex;
//           justify-content: center;
//           align-items: flex-start;
//           font-family: var(--font-family);
//           color: var(--text-primary);
//           scroll-padding-top: 80px;
//           position: relative;
//           z-index: 1;
//           pointer-events: auto;
//         }

//         .cs-container-exit,
//         .cs-container-exit-active {
//           opacity: 0;
//           transform: translateY(15px) scale(0.98);
//           transition: opacity 0.5s var(--ease-smooth), transform 0.5s var(--ease-smooth);
//           pointer-events: none;
//         }

//         .transition-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: var(--bg);
//           opacity: 0;
//           transition: opacity 0.5s var(--ease-smooth);
//           pointer-events: none;
//           z-index: 2;
//         }

//         .cs-container-exit ~ .transition-overlay,
//         .cs-container-exit-active ~ .transition-overlay {
//           opacity: 1;
//         }

//         .cs-inner {
//           width: 100%;
//           max-width: var(--max-content-w);
//           margin: 0 auto;
//           box-sizing: border-box;
//         }

//         .cs-title {
//           font-weight: 700;
//           font-size: clamp(2rem, 3.5vw, 2rem);
//           line-height: 1.3;
//           margin-bottom: 2rem;
//           color: var(--text-primary);
//           padding-left: 16px;
//           border-left: 5px solid var(--accent-color);
//           opacity: 0;
//           transform: translateY(10px);
//           transition: opacity 0.3s var(--ease-smooth), transform 0.3s var(--ease-smooth);
//         }
//         .cs-title.in-view {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .layout {
//           display: grid;
//           grid-template-columns: 1fr var(--right-col-w);
//           gap: 32px;
//           align-items: start;
//         }
//         @media (max-width: 1024px) {
//           .layout {
//             grid-template-columns: 1fr;
//             gap: 24px;
//           }
//         }

//         .image-wrap {
//           position: relative;
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: var(--shadow);
//           background: #ffffff;
//           transition: transform 0.2s var(--ease-smooth);
//           margin-top: 62px;
//           height: var(--image-height);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .image-wrap:hover {
//           transform: translateY(-4px);
//         }

//         .image-frame {
//           border-radius: 8px;
//           overflow: hidden;
//           background: #f8fafc;
//           opacity: 0;
//           transform: translateY(10px);
//           transition: opacity 0.3s var(--ease-smooth) var(--reveal-delay),
//                       transform 0.3s var(--ease-smooth) var(--reveal-delay);
//           width: 100%;
//           height: 100%;
//         }
//         .image-frame.in-view {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .image-canvas {
//           border-radius: 6px;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-sizing: border-box;
//           overflow: hidden;
//         }

//         .image-canvas img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center;
//           border-radius: 4px;
//           box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
//           transition: transform 0.2s var(--ease-smooth), filter 0.2s var(--ease-smooth);
//         }

//         .right-column {
//           display: flex;
//           flex-direction: column;
//           gap: 24px;
//           align-self: flex-start;
//           max-width: var(--right-col-w);
//           width: 100%;
//           box-sizing: border-box;
//         }

//         .mini-card {
//           background: var(--card-bg);
//           border-radius: 12px;
//           padding: 24px;
//           border: 1px solid var(--border-color);
//           box-shadow: var(--shadow);
//           opacity: 0;
//           transform: translateY(10px);
//           transition: opacity 0.3s var(--ease-smooth) var(--reveal-delay),
//                       transform 0.3s var(--ease-smooth) var(--reveal-delay);
//           min-height: var(--mini-card-height);
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }
//         .mini-card.in-view {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .mini-card:hover {
//           box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
//           transform: translateY(-2px);
//         }

//         .mini-card .title {
//           font-weight: 600;
//           font-size: 1.25rem;
//           margin-bottom: 16px;
//           color: var(--text-primary);
//           border-left: 4px solid var(--accent-color);
//           padding-left: 12px;
//         }

//         .mini-card .content {
//           font-size: 1rem;
//           line-height: 1.6;
//           color: var(--text-secondary);
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }

//         .mini-card .content ol {
//           padding-left: 28px;
//           margin: 0;
//           list-style: none;
//           counter-reset: li;
//         }
//         .mini-card .content ol li {
//           position: relative;
//           margin-bottom: 12px;
//           font-weight: 400;
//           color: var(--text-primary);
//           padding-left: 36px;
//           counter-increment: li;
//           line-height: 1.6;
//         }
//         .mini-card .content ol li::before {
//           content: counter(li);
//           position: absolute;
//           left: 0;
//           top: 50%;
//           transform: translateY(-50%);
//           height: 24px;
//           width: 24px;
//           border-radius: 50%;
//           background: var(--accent-color);
//           color: #ffffff;
//           font-size: 0.9rem;
//           font-weight: 600;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }
//         .mini-card .content ol li:hover {
//           color: var(--accent-color);
//           transform: scale(1.02);
//         }

//         .solution-card {
//           margin-top: 40px;
//           background: var(--card-bg);
//           border-radius: 12px;
//           padding: 32px;
//           border: 1px solid var(--border-color);
//           box-shadow: var(--shadow);
//           opacity: 0;
//           transform: translateY(10px);
//           transition: opacity 0.3s var(--ease-smooth) var(--reveal-delay),
//                       transform 0.3s var(--ease-smooth) var(--reveal-delay);
//           min-height: var(--solution-card-height);
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           max-width: var(--max-content-w);
//           width: 100%;
//         }
//         .solution-card.in-view {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .solution-card:hover {
//           box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
//         }

//         .solution-header {
//           margin-bottom: 24px;
//           border-left: 5px solid var(--accent-color);
//           padding-left: 12px;
//         }
//         .solution-header h3 {
//           margin: 0;
//           font-weight: 700;
//           font-size: 1.5rem;
//           color: var(--text-primary);
//         }

//         .solution-body {
//           font-size: 1rem;
//           line-height: 1.6;
//           color: var(--text-secondary);
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }

//         .solution-body ol {
//           padding-left: 28px;
//           margin: 0;
//           list-style: none;
//           counter-reset: li;
//         }
//         .solution-body ol li {
//           position: relative;
//           margin-bottom: 12px;
//           font-weight: 400;
//           color: var(--text-primary);
//           padding-left: 36px;
//           counter-increment: li;
//           line-height: 1.6;
//         }
//         .solution-body ol li::before {
//           content: counter(li);
//           position: absolute;
//           left: 0;
//           top: 50%;
//           transform: translateY(-50%);
//           height: 24px;
//           width: 24px;
//           border-radius: 50%;
//           background: var(--accent-color);
//           color: #ffffff;
//           font-size: 0.9rem;
//           font-weight: 600;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }
//         .solution-body ol li:hover {
//           color: var(--accent-color);
//           transform: scale(1.02);
//         }

//         .solution-body div.line {
//           padding-left: 0;
//           color: var(--text-secondary);
//           font-weight: 400;
//         }
//         .solution-body div.line::before {
//           content: "";
//         }

//         .back-wrap {
//           display: flex;
//           justify-content: flex-end;
//           margin-top: 32px;
//         }

//         .back-btn {
//           background: var(--accent-color);
//           color: #ffffff;
//           border: none;
//           padding: 12px 24px;
//           border-radius: 8px;
//           font-weight: 600;
//           font-size: 1rem;
//           cursor: pointer;
//           box-shadow: var(--shadow);
//           transition: background 0.2s ease, box-shadow 0.2s ease;
//         }
//         .back-btn:hover {
//           background: #c53030;
//           box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
//         }
//         .back-btn:focus-visible {
//           outline: 2px solid #c53030;
//           outline-offset: 2px;
//         }
//         .back-btn:active {
//           box-shadow: var(--shadow);
//         }

//         .reveal {
//           opacity: 0;
//           transform: translateY(10px);
//           transition-property: opacity, transform;
//           transition-timing-function: var(--ease-smooth);
//           transition-duration: 0.3s;
//           transition-delay: var(--reveal-delay);
//         }
//         .reveal.in-view {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         button, a {
//           user-select: none;
//         }

//         @media (max-width: 1024px) {
//           :root {
//             --right-col-w: 100%;
//             --mini-card-height: 250px;
//             --solution-card-height: 300px;
//             --image-height: 300px;
//           }
//           .cs-container {
//             padding: 40px 16px;
//           }
//           .cs-title {
//             font-size: clamp(1.8rem, 3vw, 2.2rem);
//           }
//           .image-wrap {
//             margin-top: 24px;
//           }
//           .mini-card {
//             padding: 20px;
//             min-height: var(--mini-card-height);
//           }
//           .mini-card .title {
//             font-size: 1.15rem;
//           }
//           .mini-card .content {
//             font-size: 0.95rem;
//           }
//           .solution-card {
//             padding: 24px;
//             min-height: var(--solution-card-height);
//           }
//           .solution-header h3 {
//             font-size: 1.3rem;
//           }
//           .back-btn {
//             padding: 10px 20px;
//             font-size: 0.95rem;
//           }
//         }
//         @media (max-width: 640px) {
//           :root {
//             --image-height: 200px;
//           }
//           .cs-title {
//             font-size: 1.6rem;
//             padding-left: 12px;
//           }
//           .mini-card {
//             padding: 16px;
//             min-height: var(--mini-card-height);
//           }
//           .solution-card {
//             padding: 20px;
//             min-height: var(--solution-card-height);
//           }
//         }
//       `}</style>

//       <TransitionGroup>
//         <CSSTransition
//           key={id}
//           timeout={500}
//           classNames="cs-container"
//           unmountOnExit
//         >
//           <div className="cs-container" role="main">
//             <div className="transition-overlay" aria-hidden="true" />
//             <div ref={containerRef} className="cs-inner" aria-live="polite">
//               <h1 className={`cs-title reveal ${!isExiting ? "in-view" : ""}`}>
//                 {study.title}
//               </h1>

//               <div className="layout" role="region" aria-label="Case study content">
//                 <div
//                   className={`image-wrap reveal ${!isExiting ? "in-view" : ""}`}
//                   ref={imgWrapRef}
//                   tabIndex={-1}
//                   aria-hidden={prefersReducedMotion ? "true" : "false"}
//                 >
//                   <div
//                     className={`image-frame reveal ${!isExiting ? "in-view" : ""}`}
//                     style={{ transitionDelay: !isExiting ? "150ms" : "0ms" }}
//                   >
//                     <div className="image-canvas">
//                       {study.image && (
//                         <img
//                           src={study.image}
//                           alt={study.title}
//                           loading="eager"
//                           onError={(e) => {
//                             console.error(`Failed to load image: ${study.image}`);
//                             e.currentTarget.style.display = "none";
//                           }}
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className="right-column"
//                   aria-hidden={prefersReducedMotion ? "true" : "false"}
//                 >
//                   {sideSections.map((section, sIdx) => (
//                     <article
//                       key={sIdx}
//                       className={`mini-card reveal ${!isExiting ? "in-view" : ""}`}
//                       style={{ transitionDelay: `${sIdx * 90 + 150}ms` }}
//                       aria-label={section.title}
//                       tabIndex={-1}
//                     >
//                       <div className="title">{section.title}</div>
//                       <div className="content">
//                         <ol>
//                           {section.content.map((line, li) => (
//                             <li key={li}>{line}</li>
//                           ))}
//                         </ol>
//                       </div>
//                     </article>
//                   ))}
//                 </div>
//               </div>

//               {solutionSection && (
//                 <section
//                   className={`solution-card reveal ${!isExiting ? "in-view" : ""}`}
//                   style={{ transitionDelay: "250ms" }}
//                   tabIndex={-1}
//                   aria-label={solutionSection.title}
//                 >
//                   <div className="solution-header">
//                     <h3>{solutionSection.title}</h3>
//                   </div>
//                   <div
//                     className="solution-body"
//                     aria-hidden={prefersReducedMotion ? "true" : "false"}
//                   >
//                     <ol>
//                       {solutionSection.content.map((line, idx) => (
//                         <li key={idx}>{line}</li>
//                       ))}
//                     </ol>
//                   </div>

//                   <div className="back-wrap">
//                     <button
//                       ref={backBtnRef}
//                       className="back-btn"
//                       onClick={handleBackClick}
//                       aria-label="Go back to case studies"
//                     >
//                       ← Go Back
//                     </button>
//                   </div>
//                 </section>
//               )}
//             </div>
//           </div>
//         </CSSTransition>
//       </TransitionGroup>
//     </>
//   );
// };

// const notFoundStyles = {
//   wrapper: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "2rem",
//     background: "#f7f9fc",
//     boxSizing: "border-box",
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//   },
//   title: {
//     fontSize: "2rem",
//     color: "#1a2a44",
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

import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import gapMeasurementImg from "../assets/Gap_Measurement.png";
import packetInspectionImg from "../assets/Packet_Inspection.png";
import punchedNumberImg from "../assets/Punched_Number_detection.png";
import sealentPresenceImg from "../assets/Door_Sealent_Presence.png";
import sprocketWheelImg from "../assets/SpRocket_Wheel_Inspection.png";
import vialAdapterImg from "../assets/vial_adapter.png";
import tracingTrackingImg from "../assets/Tracing_And_Tracking.png";
import WindowGlassImg from "../assets/Window_Glass.png";

const caseStudies = [
  {
    id: 1,
    title: "CASE STUDY 1 - AI BASED MACHINE VISION SYSTEM FOR VIAL ADOPTER INSPECTION",
    image: vialAdapterImg,
    description: `Project Requirements -
The customer requires an AI-powered vision system to inspect Vial Adopters during production.
The system must accurately detect and classify common defects such as: Damaged fingers, Improper Slits, Broken or Missing Spikes
Inspections must be fast, accurate, and non-intrusive, with real-time feedback for the production line.

Challenges -
Subtle defects and variations in shape or color
High-speed inspection requirements
Reliable detection of both major and minor defects
Variability in lighting and background

CVIT AI Solution -
We developed a deep learning-based vision model trained on thousands of images of both acceptable and defective Vial Adopters.
High-resolution cameras were strategically placed to capture all critical angles.
A convolutional neural network (CNN) architecture was used for defect detection and classification.
Edge-based preprocessing ensured robust detection in varied lighting.
Achieved over 98% accuracy at production speed with real-time alerts for defective units.`,
  },
  {
    id: 2,
    title: "CASE STUDY 2 - AI BASED OCR-OCV SYSTEM FOR VIAL ADAPTER PACKET INSPECTION",
    image: packetInspectionImg,
    description: `Project Requirements -
The client needed an AI-driven OCR-OCV system to verify the printed text (e.g., batch codes, expiration dates) on Vial Adapter Packets.
Ensure printed text is legible, correctly placed, and matches expected values.

Challenges -
Low-contrast or smudged printing
Slight variations in character spacing or font
High-speed inspection demands
Frequent product label changes requiring adaptable AI

CVIT AI Solution -
We implemented a flexible OCR engine based on deep learning, trained to recognize multiple fonts, sizes, and orientations.
Used synthetic data augmentation to improve recognition under poor printing conditions.
Real-time comparison with expected templates via OCV ensured integrity.
Integrated alert system for illegible/mismatched prints.
Achieved over 95% OCR accuracy in real production environments.`,
  },
  {
    id: 3,
    title: "CASE STUDY 3 - AI BASED MACHINE VISION SYSTEM FOR GAP MEASUREMENT",
    image: gapMeasurementImg,
    description: `Project Requirements -
Automate precise gap measurement between mechanical components for QA during assembly.
Ensure spacing tolerances are consistently met across all units.

Challenges -
Tight tolerance requirements (sub-mm range)
Complex component geometries
Variable lighting and surface finishes
Maintaining speed without compromising accuracy

CVIT AI Solution -
Designed a custom machine vision model using edge detection + neural network for interpretation.
High-resolution line scan cameras used for micron-level precision.
AI corrected for perspective distortion using 3D pose estimation.
Measurement feedback integrated into PLC for automatic rejection of faulty assemblies.
System achieved ±0.05mm measurement repeatability.`,
  },
  {
    id: 4,
    title: "CASE STUDY 4 - AI BASED MACHINE VISION SYSTEM FOR PUNCHED NUMBER DETECTION",
    image: punchedNumberImg,
    description: `Project Requirements -
Automatically detect and verify metal-punched serial numbers on parts.
Ensure legibility and correctness for compliance traceability.

Challenges -
Low contrast due to metal glare and irregular punching
Non-uniform depths and distortion
Dust and surface wear

CVIT AI Solution -
Custom AI-based OCR model trained on metal-punched numeric fonts with deformation tolerance.
Adaptive illumination using dome + side lighting to remove shadows and glare.
Used image sharpening + thresholding pre-processing before CNN detection.
Integrated logging system stored serial numbers in database for each unit.
System reached 94% accuracy with retry/recheck protocol for ambiguous reads.`,
  },
  {
    id: 5,
    title: "CASE STUDY 5 - AI BASED TRACEABILITY AND PART TRACKING SOLUTION",
    image: tracingTrackingImg,
    description: `Project Requirements -
Enable full traceability of parts moving across a complex manufacturing line.
Each part must be uniquely identified and tracked through stations.

Challenges -
Mixed part types and shapes
Inconsistent label/tag placement
Manual handling introduces orientation variation

CVIT AI Solution -
Implemented hybrid system: AI-based part recognition + barcode/QR detection.
Integrated with MES system to log timestamps, location, and status per part.
Used multiple angled cameras to ensure 360° visibility.
Achieved 99% track coverage with automatic alerts for missing/unreadable tags.`,
  },
  {
    id: 6,
    title: "CASE STUDY 6 - AI BASED MACHINE VISION SYSTEM FOR DOOR SEALANT PRESENCE DETECTION",
    image: sealentPresenceImg,
    description: `Project Requirements -
Verify the continuous presence and correct application of sealant on car doors before curing.
Sealant must be applied evenly along designated track areas.

Challenges -
Sealant color similar to door frame (low contrast)
Sealant applied via robot - may skip or misplace regions
Real-time inspection needed before next process stage

CVIT AI Solution -
Trained a segmentation model (U-Net architecture) to detect sealant trace against complex backgrounds.
Used UV-sensitive cameras where sealant was tagged with fluorescent agent.
Implemented heatmap overlay to visualize inspection results to operator.
Achieved >97% detection accuracy and reduced defect pass-through by 85%.`,
  },
  {
    id: 7,
    title: "CASE STUDY 7 - AI BASED MACHINE VISION SYSTEM FOR SPROCKET WHEEL INSPECTION",
    image: sprocketWheelImg,
    description: `Project Requirements -
Detect manufacturing defects in sprocket wheels - such as broken teeth, cracks, or deformation.
Inspect multiple sprocket variants on same line.

Challenges -
Irregular defects hard to define using rule-based systems
Changing lighting due to metallic surface
Different sizes/shapes of wheels on the same conveyor

CVIT AI Solution -
Developed multi-class defect detection CNN using transfer learning on pre-trained models.
Designed a smart fixture to rotate sprockets under a stationary camera.
Adaptive thresholding used to normalize reflections.
System detected 6 defect classes with 93% accuracy and supported auto-sorting by defect type.`,
  },
  {
    id: 8,
    title: "CASE STUDY 8 - AI BASED MACHINE VISION SYSTEM FOR WINDOW GLASS SCRATCH INSPECTION",
    image: WindowGlassImg,
    description: `Project Requirements -
Inspect window glass panels for surface scratches before dispatch.
Catch both visible and micro scratches.

Challenges -
Highly reflective glass surface causes artifacts
Scratches vary in depth and orientation
Need differentiation from dust/smudges

CVIT AI Solution -
Used darkfield illumination to enhance scratch visibility.
High-resolution imaging + deep learning model trained to distinguish scratches from noise.
Dynamic thresholding and post-processing to filter false positives.
Achieved 90%+ detection rate for scratch length >2mm.
Reduced return/rework rate by 70%.`,
  },
];

// Helper to parse description text into sections & split lines into array items for numbered lists
const parseDescription = (description) => {
  return description
    .split("\n\n")
    .map((section) => {
      const [title, ...contentLines] = section.trim().split("\n");
      const cleanedContent = contentLines.map((line) => line.trim()).filter(Boolean);
      return {
        title,
        content: cleanedContent,
      };
    })
    .filter(Boolean);
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find((cs) => cs.id === parseInt(id, 10));
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef(null);
  const imgWrapRef = useRef(null);
  const backBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const rafRef = useRef(null);
  const latestMouseRef = useRef(null);
  const isNavigatingRef = useRef(false);
  const timeoutRef = useRef(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reset isExiting when id changes to ensure new content renders
  useEffect(() => {
    setIsExiting(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
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
    timeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
      navigate(`/`, { state: { scrollTo: "Our Case Studies", fromCaseStudy: true, fromId: id } });
    }, 500);
  }
};

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [study, navigate, id]);

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
  if (isNavigatingRef.current) return;
  isNavigatingRef.current = true;
  setIsExiting(true);
  timeoutRef.current = setTimeout(() => {
    navigate(`/`, { state: { scrollTo: "Our Case Studies", fromCaseStudy: true, fromId: id } });
    isNavigatingRef.current = false;
  }, 500);
};

  const handleNextClick = () => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsExiting(true);
    const currentIndex = caseStudies.findIndex((cs) => cs.id === parseInt(id, 10));
    const nextIndex = (currentIndex + 1) % caseStudies.length;
    const nextId = caseStudies[nextIndex].id;
    timeoutRef.current = setTimeout(() => {
      navigate(`/case-study/${nextId}?fromId=${id}`);
      isNavigatingRef.current = false;
    }, 500);
  };

  if (!study) {
    return (
      <div className="cs-notfound" style={notFoundStyles.wrapper}>
        <h2 style={notFoundStyles.title}>Case Study Not Found</h2>
        <button
          style={notFoundStyles.button}
          onClick={handleBackClick}
          aria-label="Go back to case studies"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  const parsed = parseDescription(study.description);
  const solutionSectionIndex = parsed.findIndex((s) =>
    s.title && s.title.toLowerCase().includes("cvit ai solution")
  );
  const solutionSection =
    solutionSectionIndex !== -1 ? parsed[solutionSectionIndex] : null;
  const sideSections = parsed.filter((_, idx) => idx !== solutionSectionIndex);

  return (
    <>
      <style>{`
        :root {
          --bg: #f7f9fc;
          --card-bg: #ffffff;
          --text-primary: #1a2a44;
          --text-secondary: #4a5568;
          --accent-color: #ef3a3a;
          --border-color: #e2e8f0;
          --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
          --max-content-w: 1280px;
          --right-col-w: 600px;
          --mini-card-height: 300px;
          --solution-card-height: 350px;
          --image-height: 500px;
        }

        .cs-container {
          background: var(--bg);
          min-height: 100vh;
          padding: 60px 20px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          font-family: var(--font-family);
          color: var(--text-primary);
          scroll-padding-top: 80px;
          position: relative;
          z-index: 1;
          pointer-events: auto;
        }

        .cs-container-exit,
        .cs-container-exit-active {
          opacity: 0;
          transform: translateY(15px) scale(0.98);
          transition: opacity 0.5s var(--ease-smooth), transform 0.5s var(--ease-smooth);
          pointer-events: none;
        }

        .transition-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg);
          opacity: 0;
          transition: opacity 0.5s var(--ease-smooth);
          pointer-events: none;
          z-index: 2;
        }

        .cs-container-exit ~ .transition-overlay,
        .cs-container-exit-active ~ .transition-overlay {
          opacity: 1;
        }

        .cs-inner {
          width: 100%;
          max-width: var(--max-content-w);
          margin: 0 auto;
          box-sizing: border-box;
        }

        .cs-title {
          font-weight: 700;
          font-size: clamp(2rem, 3.5vw, 2rem);
          line-height: 1.3;
          margin-bottom: 2rem;
          color: var(--text-primary);
          padding-left: 16px;
          border-left: 5px solid var(--accent-color);
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s var(--ease-smooth), transform 0.3s var(--ease-smooth);
        }
        .cs-title.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .layout {
          display: grid;
          grid-template-columns: 1fr var(--right-col-w);
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .image-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow);
          background: #ffffff;
          transition: transform 0.2s var(--ease-smooth);
          margin-top: 62px;
          height: var(--image-height);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-wrap:hover {
          transform: translateY(-4px);
        }

        .image-frame {
          border-radius: 8px;
          overflow: hidden;
          background: #f8fafc;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s var(--ease-smooth) var(--reveal-delay),
                      transform 0.3s var(--ease-smooth) var(--reveal-delay);
          width: 100%;
          height: 100%;
        }
        .image-frame.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .image-canvas {
          border-radius: 6px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          overflow: hidden;
        }

        .image-canvas img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s var(--ease-smooth), filter 0.2s var(--ease-smooth);
        }

        .right-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-self: flex-start;
          max-width: var(--right-col-w);
          width: 100%;
          box-sizing: border-box;
        }

        .mini-card {
          background: var(--card-bg);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s var(--ease-smooth) var(--reveal-delay),
                      transform 0.3s var(--ease-smooth) var(--reveal-delay);
          min-height: var(--mini-card-height);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .mini-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .mini-card:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .mini-card .title {
          font-weight: 600;
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: var(--text-primary);
          border-left: 4px solid var(--accent-color);
          padding-left: 12px;
        }

        .mini-card .content {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mini-card .content ol {
          padding-left: 28px;
          margin: 0;
          list-style: none;
          counter-reset: li;
        }
        .mini-card .content ol li {
          position: relative;
          margin-bottom: 12px;
          font-weight: 400;
          color: var(--text-primary);
          padding-left: 36px;
          counter-increment: li;
          line-height: 1.6;
        }
        .mini-card .content ol li::before {
          content: counter(li);
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: var(--accent-color);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .mini-card .content ol li:hover {
          color: var(--accent-color);
          transform: scale(1.02);
        }

        .solution-card {
          margin-top: 40px;
          background: var(--card-bg);
          border-radius: 12px;
          padding: 32px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s var(--ease-smooth) var(--reveal-delay),
                      transform 0.3s var(--ease-smooth) var(--reveal-delay);
          min-height: var(--solution-card-height);
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: var(--max-content-w);
          width: 100%;
        }
        .solution-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .solution-card:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .solution-header {
          margin-bottom: 24px;
          border-left: 5px solid var(--accent-color);
          padding-left: 12px;
        }
        .solution-header h3 {
          margin: 0;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .solution-body {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .solution-body ol {
          padding-left: 28px;
          margin: 0;
          list-style: none;
          counter-reset: li;
        }
        .solution-body ol li {
          position: relative;
          margin-bottom: 12px;
          font-weight: 400;
          color: var(--text-primary);
          padding-left: 36px;
          counter-increment: li;
          line-height: 1.6;
        }
        .solution-body ol li::before {
          content: counter(li);
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: var(--accent-color);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .solution-body ol li:hover {
          color: var(--accent-color);
          transform: scale(1.02);
        }

        .solution-body div.line {
          padding-left: 0;
          color: var(--text-secondary);
          font-weight: 400;
        }
        .solution-body div.line::before {
          content: "";
        }

        .back-wrap {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          margin-top: 32px;
        }

        .back-btn, .next-btn {
          background: var(--accent-color);
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: var(--shadow);
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }
        .back-btn:hover, .next-btn:hover {
          background: #c53030;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }
        .back-btn:focus-visible, .next-btn:focus-visible {
          outline: 2px solid #c53030;
          outline-offset: 2px;
        }
        .back-btn:active, .next-btn:active {
          box-shadow: var(--shadow);
        }

        .reveal {
          opacity: 0;
          transform: translateY(10px);
          transition-property: opacity, transform;
          transition-timing-function: var(--ease-smooth);
          transition-duration: 0.3s;
          transition-delay: var(--reveal-delay);
        }
        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        button, a {
          user-select: none;
        }

        @media (max-width: 1024px) {
          :root {
            --right-col-w: 100%;
            --mini-card-height: 250px;
            --solution-card-height: 300px;
            --image-height: 300px;
          }
          .cs-container {
            padding: 40px 16px;
          }
          .cs-title {
            font-size: clamp(1.8rem, 3vw, 2.2rem);
          }
          .image-wrap {
            margin-top: 24px;
          }
          .mini-card {
            padding: 20px;
            min-height: var(--mini-card-height);
          }
          .mini-card .title {
            font-size: 1.15rem;
          }
          .mini-card .content {
            font-size: 0.95rem;
          }
          .solution-card {
            padding: 24px;
            min-height: var(--solution-card-height);
          }
          .solution-header h3 {
            font-size: 1.3rem;
          }
          .back-btn, .next-btn {
            padding: 10px 20px;
            font-size: 0.95rem;
          }
        }
        @media (max-width: 640px) {
          :root {
            --image-height: 200px;
          }
          .cs-title {
            font-size: 1.6rem;
            padding-left: 12px;
          }
          .mini-card {
            padding: 16px;
            min-height: var(--mini-card-height);
          }
          .solution-card {
            padding: 20px;
            min-height: var(--solution-card-height);
          }
        }
      `}</style>

      <TransitionGroup>
  <CSSTransition
    timeout={500}
    classNames="cs-container"
    unmountOnExit
  >
    {/* 👇 Add key={id} here */}
    <div key={id} className="cs-container" role="main">
      <div className="transition-overlay" aria-hidden="true" />
      <div ref={containerRef} className="cs-inner" aria-live="polite">
        <h1 className={`cs-title reveal ${!isExiting ? "in-view" : ""}`}>
          {study.title}
        </h1>

        <div className="layout" role="region" aria-label="Case study content">
          <div
            className={`image-wrap reveal ${!isExiting ? "in-view" : ""}`}
            ref={imgWrapRef}
            tabIndex={-1}
            aria-hidden={prefersReducedMotion ? "true" : "false"}
          >
            <div
              className={`image-frame reveal ${!isExiting ? "in-view" : ""}`}
              style={{ transitionDelay: !isExiting ? "150ms" : "0ms" }}
            >
              <div className="image-canvas">
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
          </div>

          <div
            className="right-column"
            aria-hidden={prefersReducedMotion ? "true" : "false"}
          >
            {sideSections.map((section, sIdx) => (
              <article
                key={sIdx}
                className={`mini-card reveal ${!isExiting ? "in-view" : ""}`}
                style={{ transitionDelay: `${sIdx * 90 + 150}ms` }}
                aria-label={section.title}
                tabIndex={-1}
              >
                <div className="title">{section.title}</div>
                <div className="content">
                  <ol>
                    {section.content.map((line, li) => (
                      <li key={li}>{line}</li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>

        {solutionSection && (
          <section
            className={`solution-card reveal ${!isExiting ? "in-view" : ""}`}
            style={{ transitionDelay: "250ms" }}
            tabIndex={-1}
            aria-label={solutionSection.title}
          >
            <div className="solution-header">
              <h3>{solutionSection.title}</h3>
            </div>
            <div
              className="solution-body"
              aria-hidden={prefersReducedMotion ? "true" : "false"}
            >
              <ol>
                {solutionSection.content.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ol>
            </div>

            <div className="back-wrap">
              <button
                ref={backBtnRef}
                className="back-btn"
                onClick={handleBackClick}
                aria-label="Go back to case studies"
              >
                ← Go Back
              </button>
              <button
                ref={nextBtnRef}
                className="next-btn"
                onClick={handleNextClick}
                aria-label="Go to next case study"
              >
                Next Case Study →
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  </CSSTransition>
</TransitionGroup>

    </>
  );
};

const notFoundStyles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    background: "#f7f9fc",
    boxSizing: "border-box",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  title: {
    fontSize: "2rem",
    color: "#1a2a44",
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