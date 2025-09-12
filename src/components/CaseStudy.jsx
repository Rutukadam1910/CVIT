import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement.png";
import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection.png";
import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection.png";
import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence.png";
import vialAdapterImg from "../assets/CaseStudies/vial_adapter.png";
import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking.png";
import WindowGlassImg from "../assets/CaseStudies/Window_Glass.png";

const caseStudies = [
  {
    id: 1,
    title: "Vial Adapter Inspection",
    studyHeader: "CASE STUDY 1 - AI BASED MACHINE VISION SYSTEM FOR VIAL ADAPTER INSPECTION",
    imgSrc: vialAdapterImg,
  },
  {
    id: 2,
    title: "Vial Adapter Tray OCR-OCV",
    studyHeader: "CASE STUDY 2 - AI BASED OCR-OCV SYSTEM FOR VIAL ADAPTER TRAY",
    imgSrc: packetInspectionImg,
  },
  {
    id: 3,
    title: "Gap Measurement",
    studyHeader: "CASE STUDY 3 - AI BASED MACHINE VISION SYSTEM FOR GAP MEASUREMENT BETWEEN VIAL AND VIAL ADAPTER TRAY",
    imgSrc: gapMeasurementImg,
  },
  {
    id: 4,
    title: "Punched Number Detection",
    studyHeader: "CASE STUDY 4 - AI BASED MACHINE VISION SYSTEM FOR PUNCHED NUMBER DETECTION",
    imgSrc: punchedNumberImg,
  },
  {
    id: 5,
    title: "Tyre Traceability and Tracking",
    studyHeader: "CASE STUDY 5 - AI BASED TYRE TRACEABILITY AND TRACKING SOLUTION",
    imgSrc: tracingTrackingImg,
  },
  {
    id: 6,
    title: "Door Sealant Presence Detection",
    studyHeader: "CASE STUDY 6 - AI BASED MACHINE VISION SYSTEM FOR DOOR SEALANT PRESENCE DETECTION",
    imgSrc: sealentPresenceImg,
  },
  {
    id: 7,
    title: "Window Glass Open/Close Inspection",
    studyHeader: "CASE STUDY 7 - AI BASED MACHINE VISION SYSTEM FOR WINDOW GLASS OPEN/CLOSE INSPECTION",
    imgSrc: WindowGlassImg,
  },
];

const CaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const caseStudyId = params.get("fromId");
    if (caseStudyId) {
      const index = caseStudies.findIndex((study) => study.id === parseInt(caseStudyId));
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [location]);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);

  const handleImageClick = (index, id) => {
    if (index === currentIndex) {
      navigate(`/case-study/${id}?fromId=${caseStudies[currentIndex].id}`);
    } else {
      setCurrentIndex(index);
    }
  };

  const getPositionClass = (index) => {
    if (index === currentIndex) return "active";
    if (index === (currentIndex - 1 + caseStudies.length) % caseStudies.length) return "left";
    if (index === (currentIndex + 1) % caseStudies.length) return "right";
    return "hidden";
  };

  const cardVariants = {
    initial: (position) => ({
      opacity: 0,
      x: position === "right" ? 100 : position === "left" ? -100 : 0,
      scale: position === "active" ? 1 : 0.5896,
      filter: position === "active" ? "blur(0px)" : "blur(3.35px)",
      zIndex: position === "active" ? 3 : position === "hidden" ? 1 : 2,
    }),
    animate: (position) => ({
      opacity: position === "hidden" ? 0 : 1,
      x: position === "left" ? -241.2 : position === "right" ? 241.2 : 0,
      scale: position === "active" ? 1 : 0.5896,
      filter: position === "active" ? "blur(0px)" : "blur(3.35px)",
      zIndex: position === "active" ? 3 : position === "hidden" ? 1 : 2,
      transition: { duration: 0.5, ease: "easeInOut", delay: position === "hidden" ? 0 : 0.1 },
    }),
    exit: (position) => ({
      opacity: 0,
      x: position === "right" ? 100 : position === "left" ? -100 : 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <>
      <style>{`
        .carousel-container {
          width: 100%;
          padding: 3.015rem 0.67rem;
          text-align: center;
          background: #FFFFFF;
        }

        .carousel-title {
          font-size: 2.8rem;
          font-weight: 600;
          position: relative;
          display: inline-block;
          color: #EF3A3A;
          font-family: 'Inter', sans-serif;
        }

        .carousel-wrapper {
          position: relative;
          height: 522.6px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .carousel-card {
          width: 670px;
          height: 462.3px;
          border-radius: 13.4px;
          border: 3px solid black;
          position: absolute;
          overflow: hidden;
          background: #000000;
        }

        .carousel-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          cursor: pointer;
        }

        .carousel-card .card-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 12%;
          background-color: white;
          color: black;
          font-size: 0.91rem;
          font-weight: bold;
          padding: 0.6rem 1rem;
          z-index: 5;
          text-align: center;
        }

        .carousel-card .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(3.5px);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: #fff;
          opacity: 0;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .carousel-card.active:hover .overlay {
          opacity: 1;
        }

        .carousel-card.active {
          cursor: zoom-in;
        }

        .carousel-card.active:hover {
          transform: scale(1.0469);
        }

        .carousel-card.left,
        .carousel-card.right {
          cursor: pointer;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.34rem;
          margin-top: 0.1rem;
        }

        .arrow-button {
          font-size: 2.4rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #EF3A3A;
        }

        .nav-indicators {
          display: flex;
          gap: 0.536rem;
        }

        .nav-indicator {
          width: 6.7px;
          height: 6.7px;
          border-radius: 50%;
          background: #c1c1c1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-indicator.active {
          background: #EF3A3A;
          transform: scale(1.6);
        }

        .nav-indicator:hover {
          background: #333;
        }

        .icon-animation {
          font-size: 2.7rem;
          margin-bottom: 0.8rem;
          cursor: pointer !important;
          pointer-events: auto;
        }
        .icon-animation:hover, .icon-animation > * {
          cursor: pointer !important;
        }

        .view-text {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 10px;
          cursor: pointer;
        }
      `}</style>

      <section className="carousel-container">
        <motion.h2
          className="carousel-title"
          initial={{ opacity: 0, y: 26.8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR CASE STUDIES
        </motion.h2>

        <div className="carousel-wrapper">
          <AnimatePresence mode="popLayout">
            {caseStudies.map((study, index) => {
              const position = getPositionClass(index);
              return (
                <motion.div
                  key={study.id}
                  className={`carousel-card ${position}`}
                  custom={position}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => handleImageClick(index, study.id)}
                >
                  <div className="card-header">{study.studyHeader}</div>
                  <img src={study.imgSrc} alt={study.title} />
                  <div className="overlay">
                    <motion.div
                      className="icon-animation"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(index, study.id);
                      }}
                    >
                      <FiExternalLink />
                    </motion.div>
                    <div className="view-text">VIEW DETAILS</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="carousel-controls">
          <button className="arrow-button" onClick={handlePrev}>❮</button>
          <div className="nav-indicators">
            {caseStudies.map((_, index) => (
              <motion.div
                key={index}
                className={`nav-indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          <button className="arrow-button" onClick={handleNext}>❯</button>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;