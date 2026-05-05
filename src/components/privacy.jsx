// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaArrowUp } from "react-icons/fa";
// import "../Styles/Privacy.css";

// const Privacy = () => {
//   const { t, i18n } = useTranslation();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   // Scroll to top when component mounts or route changes
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   }, [location]);

//   // Show/hide back to top button based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle scroll to top
//   const handleScrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   };

//   // Handle navigation to home
//   const handleBackToHome = () => {
//     navigate("/");
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   };

//   // Re-render on language change
//   useEffect(() => {
//     const handleLanguageChange = () => {
//       // No state update needed; component will re-render due to useTranslation
//     };
//     i18n.on("languageChanged", handleLanguageChange);
//     return () => i18n.off("languageChanged", handleLanguageChange);
//   }, [i18n]);

//   return (
//     <div className="privacy-container">
//       <div className="privacy-header">
//         <h1 className="privacy-title">{t("Privacy.title")}</h1>
//         <p className="privacy-subtitle">{t("Privacy.subtitle")}</p>
//       </div>

//       <div className="privacy-content">
//         <div className="privacy-policy-text">
//           <p className="intro-text">
//             <strong>{t("Privacy.introText")}</strong>{" "}
//             {t("Privacy.introDescription")}
//           </p>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section1.title")}</h2>
//             <p>{t("Privacy.section1.description")}</p>

//             <div className="subsection">
//               <h3 className="subsection-title">
//                 {t("Privacy.section1.subsection1.title")}
//               </h3>
//               <p>{t("Privacy.section1.subsection1.description")}</p>
//             </div>

//             <div className="subsection">
//               <h3 className="subsection-title">
//                 {t("Privacy.section1.subsection2.title")}
//               </h3>
//               <p>{t("Privacy.section1.subsection2.description")}</p>
//             </div>

//             <div className="subsection">
//               <h3 className="subsection-title">
//                 {t("Privacy.section1.subsection3.title")}
//               </h3>
//               <p>{t("Privacy.section1.subsection3.description")}</p>
//             </div>
//           </section>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section2.title")}</h2>
//             <p>{t("Privacy.section2.description")}</p>
//             <ul className="policy-list">
//               {[
//                 "respondToInquiries",
//                 "provideServices",
//                 "sendUpdates",
//                 "analyzeTraffic",
//                 "enhanceSecurity",
//                 "fulfillLegalObligations",
//               ].map((key) => (
//                 <li key={key}>{t(`Privacy.section2.list.${key}`)}</li>
//               ))}
//             </ul>
//           </section>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section3.title")}</h2>
//             <p>{t("Privacy.section3.description")}</p>
//             <ul className="policy-list">
//               {[
//                 "serviceProviders",
//                 "legalReasons",
//                 "protectRights",
//                 "corporateTransaction",
//               ].map((key) => (
//                 <li key={key}>{t(`Privacy.section3.list.${key}`)}</li>
//               ))}
//             </ul>
//           </section>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section4.title")}</h2>
//             <ul className="policy-list">
//               {["useCookies", "controlCookies", "cookieTypes"].map((key) => (
//                 <li key={key}>{t(`Privacy.section4.list.${key}`)}</li>
//               ))}
//             </ul>
//           </section>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section5.title")}</h2>
//             <p>{t("Privacy.section5.description")}</p>
//           </section>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section6.title")}</h2>
//             <p>{t("Privacy.section6.description")}</p>
//           </section>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section7.title")}</h2>
//             <p>{t("Privacy.section7.description")}</p>
//           </section>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section8.title")}</h2>
//             <p>{t("Privacy.section8.description")}</p>
//             <ul className="policy-list">
//               {[
//                 "access",
//                 "rectification",
//                 "deletion",
//                 "objection",
//                 "portability",
//                 "withdrawConsent",
//               ].map((key) => (
//                 <li key={key}>
//                   <strong>{t(`Privacy.section8.list.${key}.title`)}</strong>:{" "}
//                   {t(`Privacy.section8.list.${key}.description`)}
//                 </li>
//               ))}
//             </ul>
//             <p>{t("Privacy.section8.contact")}</p>
//           </section>

//           <section className="policy-section">
//             <h2 className="section-title">{t("Privacy.section9.title")}</h2>
//             <p>{t("Privacy.section9.description")}</p>
//           </section>

//           <div className="back-to-home-container">
//             <button
//               className="back-to-home"
//               onClick={handleBackToHome}
//               aria-label={t("BackToHomeAriaLabel")}
//               title={t("BackToHome")}
//             >
//               {t("BackToHome")}
//             </button>
//           </div>
//         </div>
//       </div>

//       <button
//         className={`back-to-top ${showBackToTop ? "show" : ""}`}
//         onClick={handleScrollToTop}
//         aria-label={t("BackToTopAriaLabel")}
//         title={t("BackToTop")}
//       >
//         <FaArrowUp />
//       </button>
//     </div>
//   );
// };

// export default Privacy;



import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Mail, ChevronRight } from "lucide-react";
import "../Styles/Privacy.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Footer from "./Footer";

const Privacy = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);

  // // Handle navigation to home
  const handleBackToHome = () => {
    navigate("/");
  };

  // Re-render on language change
  useEffect(() => {
    const handleLanguageChange = () => {
      // No state update needed; component will re-render due to useTranslation
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => i18n.off("languageChanged", handleLanguageChange);
  }, [i18n]);

  // Handle scroll to policy section
  const scrollToPolicy = (e) => {
    e.preventDefault();
    const element = document.getElementById("policy-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Section icons for visual enhancement
  const sectionIcons = {
    section1: <Shield size={24} />,
    section2: <Database size={24} />,
    section3: <UserCheck size={24} />,
    section4: <Eye size={24} />,
    section5: <Lock size={24} />,
    section6: <Mail size={24} />,
    section7: <Shield size={24} />,
    section8: <UserCheck size={24} />,
    section9: <Lock size={24} />,
  };

  return (
    
    <div className="privacy-page">
      <Navbar />
      <SideBar/>
      {/* HERO SECTION */}
      <section className="hero-parallax">
        <div className="parallax-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content-pro">
            <p className="eyebrow">{t("Privacy.title")}</p>
            <h1 className="hero-headline">
              {t("Privacy.subtitle")}
            </h1>
            <p className="hero-subhead">{t("Privacy.introText")}</p>
            <div className="hero-cta">
              <a href="#policy-content" className="btn-primary-pro" onClick={scrollToPolicy}>
                {t("Privacy.ReadPolicy")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY CONTENT */}
      <section className="policy-section" id="policy-content">
        <div className="container-pro">
          <div className="policy-intro">
            <p className="intro-text">
              <strong>{t("Privacy.introText")}</strong>{" "}
              {t("Privacy.introDescription")}
            </p>
          </div>

          <div className="policy-grid">
            {/* Section 1 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section1}
                  {t("Privacy.section1.title")}
                </h2>
              </div>
              <div className="card-content">
                <p>{t("Privacy.section1.description")}</p>
                
                <div className="subsections">
                  <div className="subsection">
                    <h3 className="subsection-title">
                      <ChevronRight size={16} />
                      {t("Privacy.section1.subsection1.title")}
                    </h3>
                    <p>{t("Privacy.section1.subsection1.description")}</p>
                  </div>
                  
                  <div className="subsection">
                    <h3 className="subsection-title">
                      <ChevronRight size={16} />
                      {t("Privacy.section1.subsection2.title")}
                    </h3>
                    <p>{t("Privacy.section1.subsection2.description")}</p>
                  </div>
                  
                  <div className="subsection">
                    <h3 className="subsection-title">
                      <ChevronRight size={16} />
                      {t("Privacy.section1.subsection3.title")}
                    </h3>
                    <p>{t("Privacy.section1.subsection3.description")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section2}
                  {t("Privacy.section2.title")}
                </h2>
              </div>
              <div className="card-content">
                <p>{t("Privacy.section2.description")}</p>
                <ul className="policy-list">
                  {[
                    "respondToInquiries",
                    "provideServices",
                    "sendUpdates",
                    "analyzeTraffic",
                    "enhanceSecurity",
                    "fulfillLegalObligations",
                  ].map((key) => (
                    <li key={key}>{t(`Privacy.section2.list.${key}`)}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section3}
                  {t("Privacy.section3.title")}
                </h2>
              </div>
              <div className="card-content">
                <p>{t("Privacy.section3.description")}</p>
                <ul className="policy-list">
                  {[
                    "serviceProviders",
                    "legalReasons",
                    "protectRights",
                    "corporateTransaction",
                  ].map((key) => (
                    <li key={key}>{t(`Privacy.section3.list.${key}`)}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section4}
                  {t("Privacy.section4.title")}
                </h2>
              </div>
              <div className="card-content">
                <ul className="policy-list">
                  {["useCookies", "controlCookies", "cookieTypes"].map((key) => (
                    <li key={key}>{t(`Privacy.section4.list.${key}`)}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section5}
                  {t("Privacy.section5.title")}
                </h2>
              </div>
              <div className="card-content">
                <p>{t("Privacy.section5.description")}</p>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section6}
                  {t("Privacy.section6.title")}
                </h2>
              </div>
              <div className="card-content">
                <p>{t("Privacy.section6.description")}</p>
              </div>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section7}
                  {t("Privacy.section7.title")}
                </h2>
              </div>
              <div className="card-content">
                <p>{t("Privacy.section7.description")}</p>
              </div>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section8}
                  {t("Privacy.section8.title")}
                </h2>
              </div>
              <div className="card-content">
                <p>{t("Privacy.section8.description")}</p>
                <ul className="policy-list">
                  {[
                    "access",
                    "rectification",
                    "deletion",
                    "objection",
                    "portability",
                    "withdrawConsent",
                  ].map((key) => (
                    <li key={key}>
                      <strong>{t(`Privacy.section8.list.${key}.title`)}</strong>:{" "}
                      {t(`Privacy.section8.list.${key}.description`)}
                    </li>
                  ))}
                </ul>
               
              </div>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              className="policy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="card-header">
                <h2 className="card-title">
                  {sectionIcons.section9}
                  {t("Privacy.section9.title")}
                </h2>
              </div>
              <div className="card-content">
                <p>{t("Privacy.section9.description")}</p>
              </div>
            </motion.div>
          </div>

          {/* Back to Home Button */}
          <div className="back-home-container">
            <button onClick={handleBackToHome} className="back-home-btn">
              {t("BackToHome")}
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
};

export default Privacy;