
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import indiamartLogo from "../assets/logo/indiamart.png";
import googleimg from "../assets/logo/google.png";
import "../Styles/Review.css";

const Review = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const target = 1248;
  const rating = 4.5;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(counter);
  }, []);

  return (
    <div className="review-container">
      {/* Card 1 */}
      <div className="card2">
        <h3 className="heading-primary">{t("Review.headingPrimary")}</h3>
      </div>

      <div className="divider" />

      {/* Card 2: Indiamart */}
      <a
        href="https://www.indiamart.com/cvit-solution/"
        target="_blank"
        rel="noopener noreferrer"
        className="card fade-in delay-1 link-card"
      >
        <div className="icon-wrapper">
          <img
            src={indiamartLogo}
            alt={t("Review.indiamartLogoAlt")}
            className="indiamart-img"
          />
        </div>
        <h3 className="heading-secondary mt-tight">
          {t("Review.indiamartHeading")}
        </h3>
        <p className="subtext">{t("Review.indiamartSubtext")}</p>
      </a>

      <div className="divider" />

      {/* Card 3: Google Review */}
      <a
        href="https://www.google.com/search?q=CVIT+SOLUTION+PVT+LTD+Reviews&hl=en#lrd=0x3bc2bbea4fee3e13:0xd4aaec345ec569d8,3"
        target="_blank"
        rel="noopener noreferrer"
        className="card fade-in delay-2 link-card"
      >
        <div className="icon-wrapper">
          <img
            src={googleimg}
            alt={t("Review.googleLogoAlt")}
            className="google-img"
          />
        </div>
        <div className="stars-wrapper">
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <span className="rating-text">{rating.toFixed(1)}/5</span>
        </div>
        <h3 className="heading-secondary mt-tight">
          {t("Review.googleHeading")}
        </h3>
        <p className="subtext">
          {t("Review.googleSubtext", { count: count.toLocaleString() })}
        </p>
      </a>
    </div>
  );
};

export default Review;


// import React, { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import {
//   FaRocket,
//   FaCheckCircle,
//   FaUsers,
//   FaLightbulb,
// } from "react-icons/fa";
// import indiamartLogo from "../assets/logo/indiamart.png";
// import googleimg from "../assets/logo/google.png";
// import "../Styles/Review.css";

// const STATS = [
//   {
//     icon: <FaRocket />,
//     valueKey: "Review.stats.projectsValue",
//     labelKey: "Review.stats.projects",
//   },
//   {
//     icon: <FaCheckCircle />,
//     valueKey: "Review.stats.successRateValue",
//     labelKey: "Review.stats.successRate",
//   },
//   {
//     icon: <FaUsers />,
//     valueKey: "Review.stats.teamValue",
//     labelKey: "Review.stats.team",
//   },
//   {
//     icon: <FaLightbulb />,
//     valueKey: "Review.stats.lightsValue",
//     labelKey: "Review.stats.lights",
//   },
// ];

// const Review = () => {
//   const { t } = useTranslation();
//   const [count, setCount] = useState(0);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const statsBandRef = useRef(null);
//   const target = 1248;
//   const rating = 4.5;

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = target / (duration / 16);
//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         start = target;
//         clearInterval(counter);
//       }
//       setCount(Math.floor(start));
//     }, 16);
//     return () => clearInterval(counter);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStatsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );
//     if (statsBandRef.current) observer.observe(statsBandRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="review-section-wrapper">

//       {/* Section break between Partners and Stats */}
//       <div className="review-section-break">
//         <div className="review-section-break-line" />
//         <div className="review-section-break-chip">OUR NUMBERS</div>
//         <div className="review-section-break-line" />
//       </div>

//       {/* Stats Band */}
//       <div
//         className={`stats-band ${statsVisible ? "stats-band--visible" : ""}`}
//         ref={statsBandRef}
//       >
//         {STATS.map((stat, i) => (
//           <div
//             className="stat-cell"
//             key={i}
//             style={{ transitionDelay: `${i * 0.12}s` }}
//           >
//             <div className="stat-icon-wrap">
//               <div className="stat-icon">{stat.icon}</div>
//             </div>
//             <div className="stat-value">{t(stat.valueKey)}</div>
//             <div className="stat-label">{t(stat.labelKey)}</div>
//           </div>
//         ))}
//       </div>

//       {/* Section break between Stats and Review */}
//       <div className="review-section-break">
//         <div className="review-section-break-line" />
//         <div className="review-section-break-chip">TRUSTED BY MANY</div>
//         <div className="review-section-break-line" />
//       </div>

//       {/* Review container */}
//       <div className="review-container">
//         <div className="card2">
//           <h3 className="heading-primary">{t("Review.headingPrimary")}</h3>
//         </div>

//         <div className="divider" />

//         <a
//           href="https://www.indiamart.com/cvit-solution/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="card fade-in delay-1 link-card"
//         >
//           <div className="icon-wrapper">
//             <img
//               src={indiamartLogo}
//               alt={t("Review.indiamartLogoAlt")}
//               className="indiamart-img"
//             />
//           </div>
//           <h3 className="heading-secondary mt-tight">
//             {t("Review.indiamartHeading")}
//           </h3>
//           <p className="subtext">{t("Review.indiamartSubtext")}</p>
//         </a>

//         <div className="divider" />

//         <a
//           href="https://www.google.com/search?q=CVIT+SOLUTION+PVT+LTD+Reviews&hl=en#lrd=0x3bc2bbea4fee3e13:0xd4aaec345ec569d8,3"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="card fade-in delay-2 link-card"
//         >
//           <div className="icon-wrapper">
//             <img
//               src={googleimg}
//               alt={t("Review.googleLogoAlt")}
//               className="google-img"
//             />
//           </div>
//           <div className="stars-wrapper">
//             <div className="stars">
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStarHalfAlt />
//             </div>
//             <span className="rating-text">{rating.toFixed(1)}/5</span>
//           </div>
//           <h3 className="heading-secondary mt-tight">
//             {t("Review.googleHeading")}
//           </h3>
//           <p className="subtext">
//             {t("Review.googleSubtext", { count: count.toLocaleString() })}
//           </p>
//         </a>
//       </div>

//     </div>
//   );
// };

// export default Review;