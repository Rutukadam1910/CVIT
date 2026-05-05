// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiExternalLink } from "react-icons/fi";
// import { useTranslation } from "react-i18next";

// import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement.png";
// import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection.png";
// import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection.png";
// import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence.png";
// import vialAdapterImg from "../assets/CaseStudies/vial_adapter.png";
// import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking.png";
// import WindowGlassImg from "../assets/CaseStudies/Window_Glass.png";
// import "../Styles/CaseStudy.css";

// const caseStudies = [
//   { id: 1, imgSrc: vialAdapterImg },
//   { id: 2, imgSrc: packetInspectionImg },
//   { id: 3, imgSrc: gapMeasurementImg },
//   { id: 4, imgSrc: punchedNumberImg },
//   { id: 5, imgSrc: tracingTrackingImg },
//   { id: 6, imgSrc: sealentPresenceImg },
//   { id: 7, imgSrc: WindowGlassImg },
// ];

// const CaseStudy = () => {
//   const { t } = useTranslation();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const caseStudyId = params.get("fromId");
//     if (caseStudyId) {
//       const index = caseStudies.findIndex((study) => study.id === parseInt(caseStudyId, 10));
//       if (index !== -1) setCurrentIndex(index);
//     }
//   }, [location]);

//   const handlePrev = () =>
//     setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

//   const handleNext = () =>
//     setCurrentIndex((prev) => (prev + 1) % caseStudies.length);

//   const handleImageClick = (index, id) => {
//     if (index === currentIndex) {
//       navigate(`/case-study/${id}?fromId=${caseStudies[currentIndex].id}`);
//     } else {
//       setCurrentIndex(index);
//     }
//   };

//   const getPositionClass = (index) => {
//     if (index === currentIndex) return "active";
//     if (index === (currentIndex - 1 + caseStudies.length) % caseStudies.length) return "left";
//     if (index === (currentIndex + 1) % caseStudies.length) return "right";
//     return "hidden";
//   };

//   const cardVariants = {
//     initial: (position) => ({
//       opacity: 0,
//       x: position === "right" ? 100 : position === "left" ? -100 : 0,
//       scale: position === "active" ? 1 : 0.5896,
//       filter: position === "active" ? "blur(0px)" : "blur(3.35px)",
//       zIndex: position === "active" ? 3 : position === "hidden" ? 1 : 2,
//     }),
//     animate: (position) => ({
//       opacity: position === "hidden" ? 0 : 1,
//       x: position === "left" ? -241.2 : position === "right" ? 241.2 : 0,
//       scale: position === "active" ? 1 : 0.5896,
//       filter: position === "active" ? "blur(0px)" : "blur(3.35px)",
//       zIndex: position === "active" ? 3 : position === "hidden" ? 1 : 2,
//       transition: { duration: 0.5, ease: "easeInOut", delay: position === "hidden" ? 0 : 0.1 },
//     }),
//     exit: (position) => ({
//       opacity: 0,
//       x: position === "right" ? 100 : position === "left" ? -100 : 0,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     }),
//   };

//   return (
//     <section className="carousel-container" id="OurCaseStudies">
//       <motion.h2
//         className="carousel-title"
//         initial={{ opacity: 0, y: 26.8 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {t("OurCaseStudies")}
//       </motion.h2>

//       <div className="carousel-wrapper">
//         <AnimatePresence mode="popLayout">
//           {caseStudies.map((study, index) => {
//             const position = getPositionClass(index);
//             return (
//               <motion.div
//                 key={study.id}
//                 className={`carousel-card ${position}`}
//                 custom={position}
//                 variants={cardVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 onClick={() => handleImageClick(index, study.id)}
//               >
//                 <div className="card-header">{t(`CaseStudies.${study.id}.studyHeader`)}</div>
//                 <img src={study.imgSrc} alt={t(`CaseStudies.${study.id}.title`)} />
//                 <div className="overlay">
//                   <motion.div
//                     className="icon-animation"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ type: "spring", stiffness: 200 }}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleImageClick(index, study.id);
//                     }}
//                   >
//                     <FiExternalLink />
//                   </motion.div>
//                   <div className="view-text">{t("CaseStudies.ViewDetails")}</div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>

//       <div className="carousel-controls">
//         <button className="arrow-button" onClick={handlePrev} aria-label={t("CaseStudies.PreviousCaseStudy")}>❮</button>
//         <div className="nav-indicators">
//           {caseStudies.map((_, index) => (
//             <motion.div
//               key={index}
//               className={`nav-indicator ${index === currentIndex ? "active" : ""}`}
//               onClick={() => setCurrentIndex(index)}
//               whileHover={{ scale: 1.3 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label={t(`CaseStudies.${index + 1}.title`)}
//             />
//           ))}
//         </div>
//         <button className="arrow-button" onClick={handleNext} aria-label={t("CaseStudies.NextCaseStudy")}>❯</button>
//       </div>
//     </section>
//   );
// };

// export default CaseStudy;


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import gapMeasurementImg from "../assets/CaseStudies/Gap_Measurement.png";
import packetInspectionImg from "../assets/CaseStudies/Packet_Inspection.png";
import punchedNumberImg from "../assets/CaseStudies/Punched_Number_detection.png";
import sealentPresenceImg from "../assets/CaseStudies/Door_Sealent_Presence.png";
import vialAdapterImg from "../assets/CaseStudies/vial_adapter.png";
import tracingTrackingImg from "../assets/CaseStudies/Tracing_And_Tracking.png";
import WindowGlassImg from "../assets/CaseStudies/Window_Glass.png";
import TubTyvekImg from "../assets/CaseStudies/Tub_Tyvek_Inner_OK.png";
import HandBrakeCableImg from "../assets/CaseStudies/Hand_Brake_Cable_1.jpg";
import VINInspectionImg from "../assets/CaseStudies/VIN_Number_detection.png";
import LadleHookImg from "../assets/CaseStudies/Ladle_Hook_Inspection.png";
import CylinderHeadImg from "../assets/CaseStudies/Cylinder_Head_Inspection.jpg";
import "../Styles/CaseStudy.css";

const caseStudies = [
  { id: 1, imgSrc: vialAdapterImg },
  { id: 2, imgSrc: packetInspectionImg },
  { id: 3, imgSrc: gapMeasurementImg },
  { id: 4, imgSrc: punchedNumberImg },
  { id: 5, imgSrc: tracingTrackingImg },
  { id: 6, imgSrc: sealentPresenceImg },
  { id: 7, imgSrc: WindowGlassImg },
  { id: 8, imgSrc: TubTyvekImg },
  { id: 9, imgSrc: HandBrakeCableImg },
  { id: 10, imgSrc: VINInspectionImg },
  { id: 11, imgSrc: LadleHookImg },
  { id: 12, imgSrc: CylinderHeadImg },
];

const CaseStudy = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const caseStudyId = params.get("fromId");
    if (caseStudyId) {
      const index = caseStudies.findIndex((study) => study.id === parseInt(caseStudyId, 10));
      if (index !== -1) setCurrentIndex(index);
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
    <section className="carousel-container" id="OurCaseStudies">
      <motion.h2
        className="carousel-title"
        initial={{ opacity: 0, y: 26.8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t("OurCaseStudies")}
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
                <div className="card-header">{t(`CaseStudies.${study.id}.studyHeader`)}</div>
                <img src={study.imgSrc} alt={t(`CaseStudies.${study.id}.title`)} />
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
                  <div className="view-text">{t("CaseStudies.ViewDetails")}</div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <button className="arrow-button" onClick={handlePrev} aria-label={t("CaseStudies.PreviousCaseStudy")}>❮</button>
        <div className="nav-indicators">
          {caseStudies.map((_, index) => (
            <motion.div
              key={index}
              className={`nav-indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t(`CaseStudies.${index + 1}.title`)}
            />
          ))}
        </div>
        <button className="arrow-button" onClick={handleNext} aria-label={t("CaseStudies.NextCaseStudy")}>❯</button>
      </div>
    </section>
  );
};

export default CaseStudy;
