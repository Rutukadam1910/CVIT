import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement.png";
import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection.png";
import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection.png";
import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence.png";
import vialAdapterImg from "../assets/CaseStudies/vial_adapter.png";
import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking.png";
import WindowGlassImg from "../assets/CaseStudies/Window_Glass.png";
import "../Styles/CaseStudyDetail.css";

const caseStudies = [
  {
    id: 1,
    title: "CASE STUDY 1 - AI BASED MACHINE VISION SYSTEM FOR VIAL ADAPTER INSPECTION",
    image: vialAdapterImg,
    description: `Project Overview:
An AI-powered vision inspection system was required for Vial Adapters during production to ensure quality control and defect detection.

The System Must:
   Detect and classify common defects such as damaged fingers, improper slits, and broken or missing spikes.
   Operate at a speed of 300 PPM (parts per minute).
   Provide real-time feedback to the production line with high accuracy.

Key Challenges:
   Variation in defect types.
   High-speed inspection requirements (300 PPM).
   Defining and setting accurate tolerance limits.

CVIT AI Solution:
   Developed a deep learning-based vision model, trained on thousands of images of both acceptable and defective Vial Adapters.
   Designed high-level calculations to achieve a minimum defect size detection of up to 200 microns.
   Integrated a high-speed camera and processing unit capable of handling 300 PPM inspection speed.
   Implemented edge-based preprocessing to ensure robust detection under varied lighting conditions.
   Achieved 99.99%+ accuracy at production speed with real-time alerts for defective units.`,
  },
  {
    id: 2,
    title: "CASE STUDY 2 - AI BASED OCR-OCV SYSTEM FOR VIAL ADAPTER TRAY",
    image: packetInspectionImg,
    description: `Project Overview:
An AI-driven OCR-OCV system was needed for Vial Adapter trays to ensure accuracy and compliance in printed information.

The System Must:
   Verify printed text such as batch codes, expiration dates, and other critical details.
   Ensure text is legible, correctly placed, and matches expected values.

Key Challenges:
   Variation in Print Quality - Differences in ink spread, fading, or smudging.
   Font and Size Variability - Ensuring accuracy across multiple text formats.
   High-Speed Verification - Maintaining accuracy while matching production line speed.
   Alignment & Placement Issues - Printed text may shift or be slightly misaligned on the tray.

CVIT AI Solution:
   Implemented a flexible OCR engine based on deep learning, capable of recognizing multiple fonts, sizes, and orientations.
   Applied synthetic data augmentation to handle poor print conditions such as fading, smudging, or low contrast.
   Enabled real-time comparison with expected templates through OCV to ensure data integrity.
   Integrated an alert system for illegible or mismatched prints.
   Achieved 99.99%+ OCR accuracy in real production environments at line speed.`,
  },
  {
    id: 3,
    title: "CASE STUDY 3 - AI BASED MACHINE VISION SYSTEM FOR GAP MEASUREMENT BETWEEN VIAL AND VIAL ADAPTER TRAY",
    image: gapMeasurementImg,
    description: `Project Overview:
An AI-powered vision system was developed to automate precise measurement of gaps between vials and vial adapters in trays.

The System Must:
   Ensure that spacing tolerances are consistently maintained across all units.
   Provide accurate, real-time feedback to support high-speed production quality control.

Key Challenges:
   Transparent Parts - Difficulty in detecting vial and adapter edges due to transparency.
   Lighting Conditions - Variations in illumination affecting consistent image capture.
   Accuracy in Gap Measurement - Ensuring micron-level precision to maintain strict tolerances.

CVIT AI Solution:
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
    description: `Project Overview:
An AI-based machine vision system was required to ensure reliable detection of punched numbers on engine cylinder heads for quality and traceability.

The System Must:
   Detect and verify punched numbers despite errors in punching machine operations.
   Handle variations in character shapes, depths, and alignments caused by mechanical inconsistencies.
   Provide real-time feedback to maintain production quality and traceability.

Key Challenges:
   Variation in Fonts - Different character styles, sizes, and punching depths make consistent detection difficult.
   Integration with Existing Server - Ensuring seamless connectivity and data exchange with the client's current IT/production infrastructure.
   Unavailability of Raw Data - Limited availability of labelled samples for building and training a robust deep learning model.

CVIT AI Solution:
   Developed seamless integration using python libraries, enabling connectivity with the client's existing server infrastructure.
   Implemented a high-level OCR software designed for industrial applications, capable of handling variations in punched fonts and depths.
   Optimized the model to achieve 100% accuracy on all alphanumeric characters by leveraging only 25% master data for training.`,
  },
  {
    id: 5,
    title: "CASE STUDY 5 - AI BASED TYRE TRACEABILITY AND TRACKING SOLUTION",
    image: tracingTrackingImg,
    description: `Project Overview:
An AI-based tyre traceability and tracking system was developed to ensure compliance in assembly and labelling.

The System Must:
   Provide 100% traceability to verify whether each tyre has been assembled as per the vehicle's configuration.
   Ensure barcode-based labelling of tyres after successful inspection for identification and tracking.
   Maintain real-time data logging of inspection results for audit and reporting.
   Support integration with the customer's existing production and IT systems.
   Deliver high accuracy and speed to match the production line throughput.

Key Challenges:
   Detection of Black Characters on Black Tyres - Ensuring reliable character and barcode recognition despite low contrast between print and surface.
   Maintaining Production Time - Achieving accurate inspection and traceability without slowing down the assembly line throughput.

CVIT AI Solution:
   Implemented hybrid system: AI-based part recognition + barcode/QR detection.
   Integrated with MES system to log timestamps, location, and status per part.
   Used multiple angled cameras to ensure 360° visibility.
   Achieved 99% track coverage with automatic alerts for missing/unreadable tags.`,
  },
  {
    id: 6,
    title: "CASE STUDY 6 - AI BASED MACHINE VISION SYSTEM FOR DOOR SEALANT PRESENCE DETECTION",
    image: sealentPresenceImg,
    description: `Project Overview:
An AI-based machine vision system was required to ensure accurate detection of door sealant presence during production.

The System Must:
   Detect the presence or absence of sealant strips with high accuracy.
   Handle variations in parts due to different door models and designs.
   Verify correct sealant strip count to ensure compliance with assembly standards.
   Provide real-time inspection feedback to support production quality control.

Key Challenges:
   Low Contrast Detection - Sealant colour is often similar to the door frame, making it difficult to distinguish.
   Application Variability - Robot-applied sealant may result in skipped or misplaced regions.
   Real-Time Inspection - Inspection must be completed instantly before the next production stage to avoid rework or defects passing downstream.

CVIT AI Solution:
   The system first detects the door part type to determine the required sealant quantity and strip positions.
   Implemented deep learning vision algorithms capable of distinguishing sealant even when its color closely matches the door frame.
   Integrated profile and edge-based inspection to identify skipped or misplaced sealant regions.
   Designed for real-time inspection, ensuring defects are flagged before the next production stage.
   Integrated with a pneumatic sensor that securely holds the part until it is verified as OK, preventing defective parts from moving forward.
   Achieved high accuracy at line speed, reducing rework and ensuring assembly compliance.`,
  },
  {
    id: 7,
    title: "CASE STUDY 7 - AI BASED MACHINE VISION SYSTEM FOR WINDOW GLASS OPEN/CLOSE INSPECTION",
    image: WindowGlassImg,
    description: `Project Overview:
An AI-based vision inspection system was developed to ensure window glass is closed before the showering process.

The System Must:
   Inspect the window glass from the left, right, and top sides to verify proper closure.
   Detect any imperfectly closed glass with high accuracy.
   Stop the conveyor line automatically in case of defective glass, preventing it from entering the showering stage.
   Operate in real time without affecting production throughput.

Key Challenges:
   Detection on Transparent Glass - Ensuring reliable closure detection despite transparency and reflections.
   Customized Lighting Design - Requirement of an illumination setup to enhance visibility of glass edges and closure gaps.
   Production Accuracy Compliance - Achieving the required inspection precision while maintaining production line speed.

CVIT AI Solution:
   Precisely measures glass gaps to detect imperfect closures.
   Identifies defective glass in real time with high accuracy.
   Integrates with the production line to automatically halt operations if defects are found, preventing faulty products from proceeding.
   Operates seamlessly without impacting production throughput.`,
  },
];

// Updated parseDescription to handle Project Overview without repeating heading
const parseDescription = (description) => {
  const sections = description.split("\n\n").filter(Boolean);
  let mainHeading = "";
  let overviewContent = [];
  const subSections = [];

  sections.forEach((section, index) => {
    const lines = section.trim().split("\n").filter(Boolean);
    if (index === 0 && lines[0].toLowerCase().includes("project overview")) {
      mainHeading = lines[0]; // e.g., "Project Overview"
      overviewContent = lines.slice(1).map((line) => line.trim()); // Capture description line
    } else {
      const [title, ...contentLines] = lines;
      subSections.push({
        title: title.trim(),
        content: contentLines.map((line) => line.trim()),
      });
    }
  });

  return { mainHeading, overviewContent, subSections };
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

  const { mainHeading, overviewContent, subSections } = parseDescription(study.description);
  const solutionSectionIndex = subSections.findIndex((s) =>
    s.title && s.title.toLowerCase().includes("cvit ai solution")
  );
  const solutionSection =
    solutionSectionIndex !== -1 ? subSections[solutionSectionIndex] : null;
  const descriptionSections = subSections.filter((_, idx) => idx !== solutionSectionIndex);

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={500}
        classNames="cs-container"
        unmountOnExit
      >
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
                <article
                  className={`description-card reveal ${!isExiting ? "in-view" : ""}`}
                  style={{ transitionDelay: "150ms" }}
                  aria-label="Case study description"
                  tabIndex={-1}
                >
                  {mainHeading && (
                    <div className="main-heading">{mainHeading}</div>
                  )}
                  {overviewContent.length > 0 && (
                    <div className="sub-section">
                      <div className="content">
                        {overviewContent.map((line, li) => (
                          <p key={li}>{line}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {descriptionSections.map((section, sIdx) => (
                    <div key={sIdx} className="sub-section">
                      <div className="sub-heading">{section.title}</div>
                      <div className="content">
                        {section.title.toLowerCase().includes("the system must") ||
                        section.title.toLowerCase().includes("key challenges") ? (
                          <ol>
                            {section.content.map((line, li) => (
                              <li key={li}>{line}</li>
                            ))}
                          </ol>
                        ) : (
                          section.content.map((line, li) => (
                            <p key={li}>{line}</p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </article>
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