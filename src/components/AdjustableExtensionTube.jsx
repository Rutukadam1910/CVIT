// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar";
// import ImageZoomModal from "./ImageZoomModal";
// import SideBar from "./Sidebar";
// import "../Styles/AdjustableExtensionTube.css";
// import buyIcon from "../assets/icons/buy-icon.png";
// import AdjustableMainImage from "../assets/ExtensionTube/AdjustableExtensionTube.jpg";
// import AdjustableDimensionLH from "../assets/Dimension/Adjustable_Extension_Tube_Dimension_LH.jpg";
// import AdjustableDimensionRH from "../assets/Dimension/Adjustable_Extension_Tube_Dimension_RH.jpg";

// const AdjustableExtensionTube = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [activeSection, setActiveSection] = useState("key-features");

//   const navbarRef = useRef(null);
//   const keyFeaturesSectionRef = useRef(null);
//   const technicalInfoSectionRef = useRef(null);
//   const productSectionRef = useRef(null);
//   const hasScrolledToProduct = useRef(false);

//   // Translated title
//   const title = t("AdjustableExtensionTube.title");
//   // Translated long description
//   const information = t("AdjustableExtensionTube.description");

//   // Translated key features list
//   const keyFeatures = [
//     t("AdjustableExtensionTube.features.adjustableExtension"),
//     t("AdjustableExtensionTube.features.maleFemaleThreads"),
//     t("AdjustableExtensionTube.features.blackAnodized"),
//     t("AdjustableExtensionTube.features.industrialUse"),
//     t("AdjustableExtensionTube.features.easyInstall"),
//     t("AdjustableExtensionTube.features.variousLengths"),
//     t("AdjustableExtensionTube.features.strayLightSuppression"),
//     t("AdjustableExtensionTube.features.cMountCompatible"),
//     t("AdjustableExtensionTube.features.lightweightRigid"),
//     t("AdjustableExtensionTube.features.secureIntegration"),
//     t("AdjustableExtensionTube.features.corrosionResistant"),
//   ];

//   // Product models (names & specs remain technical, but headers translated)
//   const productModels = [
//     {
//       model: "CCMAET30X48",
//       weight: "0.036 kg",
//       outerDiameter: "30 mm",
//       lMax: "48 mm",
//       lMin: "30 mm",
//     },
//     {
//       model: "CCMAET21X30",
//       weight: "0.022 kg",
//       outerDiameter: "30 mm",
//       lMax: "30 mm",
//       lMin: "21 mm",
//     },
//     {
//       model: "CCMAET16X21",
//       weight: "0.015 kg",
//       outerDiameter: "30 mm",
//       lMax: "21 mm",
//       lMin: "16 mm",
//     },
//   ];

//   // Technical data table (labels translated, values kept technical)
//   const technicalData = [
//     [t("AdjustableExtensionTube.technical.clearAperture"), "22.0"],
//     [t("AdjustableExtensionTube.technical.threadType"), "C-Mount"],
//     [t("AdjustableExtensionTube.technical.type"), "Extension Tube"],
//     [t("AdjustableExtensionTube.technical.function"), "Extension Tube (Adjustable)"],
//   ];

//   // Scroll offset calculation (unchanged)
//   const calculateScrollOffset = () => {
//     const width = window.innerWidth;
//     if (width <= 319) return 75;
//     if (width <= 479) return 80;
//     if (width <= 779) return 85;
//     if (width <= 979) return 95;
//     return 80;
//   };

//   // Sticky navbar effect
//   useEffect(() => {
//     const nav = document.getElementById("adjustable-detail-navbar");
//     if (!nav) return;
//     const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Handle scroll to product section when returning from Enquire/Buy
//   useEffect(() => {
//     const shouldScrollToProduct =
//       (location.state?.scrollTo === "product" || location.hash === "#product") &&
//       productSectionRef.current &&
//       !hasScrolledToProduct.current;

//     if (shouldScrollToProduct) {
//       hasScrolledToProduct.current = true;

//       setTimeout(() => {
//         const navHeight = document.getElementById("adjustable-detail-navbar")?.offsetHeight || 80;
//         const top =
//           productSectionRef.current.getBoundingClientRect().top +
//           window.pageYOffset -
//           navHeight -
//           30;

//         window.scrollTo({
//           top,
//           behavior: "smooth",
//         });

//         // Clean URL
//         navigate(location.pathname, { replace: true, state: {} });
//       }, 450); // Increased timeout for better reliability
//     }
//   }, [location, navigate]);

//   // Fallback for hash only (in case state is lost)
//   useEffect(() => {
//     if (location.hash === "#product" && productSectionRef.current && !hasScrolledToProduct.current) {
//       hasScrolledToProduct.current = true;
//       setTimeout(() => {
//         const navHeight = document.getElementById("adjustable-detail-navbar")?.offsetHeight || 80;
//         const top =
//           productSectionRef.current.getBoundingClientRect().top +
//           window.pageYOffset -
//           navHeight -
//           30;
//         window.scrollTo({ top, behavior: "smooth" });
//       }, 600);
//     }
//   }, [location.hash]);

//   const handleNavClick = (section) => {
//     setActiveSection(section);

//     const refs = {
//       "key-features": keyFeaturesSectionRef,
//       "technical-info": technicalInfoSectionRef,
//       product: productSectionRef,
//     };

//     const targetRef = refs[section];
//     if (!targetRef?.current) return;

//     const scrollOffset = calculateScrollOffset();
//     const top =
//       targetRef.current.getBoundingClientRect().top +
//       window.pageYOffset -
//       scrollOffset;

//     window.scrollTo({
//       top,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="adjustable-extension-tube-main">
//         <h1 className="adjustable-extension-tube-title">{title}</h1>

//         <div className="adjustable-image-container">
//           <img
//             src={AdjustableMainImage}
//             alt={t("AdjustableExtensionTube.mainImageAlt")}
//             className="adjustable-main-image"
//             draggable={false}
//             loading="eager"
//           />
//         </div>

//         <div className="adjustable-information-container">
//           <p className="adjustable-information-text">{information}</p>
//         </div>

//         {/* Sticky Navigation */}
//         <nav id="adjustable-detail-navbar" ref={navbarRef} className="adjustable-product-nav reveal-on-scroll">
//           <div className="adjustable-nav-button-wrapper">
//             <button
//               onClick={() => handleNavClick("key-features")}
//               aria-current={activeSection === "key-features" ? "page" : undefined}
//               className={`adjustable-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
//             >
//               {t("AdjustableExtensionTube.nav.keyFeatures")}
//             </button>
//             <button
//               onClick={() => handleNavClick("technical-info")}
//               aria-current={activeSection === "technical-info" ? "page" : undefined}
//               className={`adjustable-nav-tab ${activeSection === "technical-info" ? "active" : ""}`}
//             >
//               {t("AdjustableExtensionTube.nav.technicalInfo")}
//             </button>
//             <button
//               onClick={() => handleNavClick("product")}
//               aria-current={activeSection === "product" ? "page" : undefined}
//               className={`adjustable-nav-tab ${activeSection === "product" ? "active" : ""}`}
//             >
//               {t("AdjustableExtensionTube.nav.product")}
//             </button>
//           </div>
//         </nav>

//         <section ref={keyFeaturesSectionRef} id="adjustable-key-features" className="adjustable-section reveal-on-scroll">
//           <h2 className="adjustable-key-features-title">
//             {t("AdjustableExtensionTube.sectionTitles.keyFeatures")}
//           </h2>
//           <div className="adjustable-key-features-container">
//             <ul className="adjustable-key-features-list">
//               {keyFeatures.map((f, i) => (
//                 <li key={i} className="adjustable-key-feature-item">
//                   {f}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         <hr className="adjustable-section-divider" />

//         <section ref={technicalInfoSectionRef} id="adjustable-technical-info" className="adjustable-section reveal-on-scroll">
//           <h2 className="adjustable-technical-info-title">
//             {t("AdjustableExtensionTube.sectionTitles.technicalInfo")}
//           </h2>
//           <div className="adjustable-technical-info-container">
//             <table className="adjustable-technical-info-table">
//               <tbody>
//                 {technicalData.map(([label, value], i) => (
//                   <tr key={i}>
//                     <td className="adjustable-tech-header-cell">{label}</td>
//                     <td className="adjustable-tech-data-cell">{value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="adjustable-dimension-overview">
//             <h3>{t("AdjustableExtensionTube.sectionTitles.dimension")}</h3>
//             <div className="adjustable-dimension-image-container reveal-on-scroll">
//               <img
//                 src={AdjustableDimensionLH}
//                 alt={t("AdjustableExtensionTube.dimensionAltLH")}
//                 loading="lazy"
//                 draggable={false}
//               />
//               <img
//                 src={AdjustableDimensionRH}
//                 alt={t("AdjustableExtensionTube.dimensionAltRH")}
//                 loading="lazy"
//                 draggable={false}
//               />
//             </div>
//           </div>
//         </section>

//         <hr className="adjustable-section-divider" />

//         {/* This is the important part - product table section with id="product" */}
//         <section ref={productSectionRef} id="product" className="adjustable-section reveal-on-scroll">
//           <h2 className="adjustable-section-title">
//             {t("AdjustableExtensionTube.sectionTitles.product")}
//           </h2>

//           <div className="adjustable-model-structure-table-container">
//             <table className="adjustable-model-structure-table">
//               <thead>
//                 <tr>
//                   <th>{t("AdjustableExtensionTube.tableHeaders.model")}</th>
//                   <th>{t("AdjustableExtensionTube.tableHeaders.weight")}</th>
//                   <th>{t("AdjustableExtensionTube.tableHeaders.outerDiameter")}</th>
//                   <th>{t("AdjustableExtensionTube.tableHeaders.lMax")}</th>
//                   <th>{t("AdjustableExtensionTube.tableHeaders.lMin")}</th>
//                   <th>{t("AdjustableExtensionTube.tableHeaders.buyNow")}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {productModels.map((m, i) => (
//                   <tr key={i}>
//                     <td className="adjustable-model-cell">{m.model}</td>
//                     <td>{m.weight}</td>
//                     <td>{m.outerDiameter}</td>
//                     <td>{m.lMax}</td>
//                     <td>{m.lMin}</td>
//                     <td className="adjustable-buy-cell">
//                       <button
//                         className="adjustable-buy-button"
//                         onClick={() => navigate(`/buy/${m.model}`, { 
//                           state: { 
//                             from: location.pathname,
//                             scrollTo: "product" // Add this to enable scroll back to product section
//                           } 
//                         })}
//                         aria-label={t("AdjustableExtensionTube.buyAriaLabel", { model: m.model })}
//                       >
//                         <img src={buyIcon} alt={t("AdjustableExtensionTube.buyAlt")} className="buy-icon" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="adjustable-enquire-container reveal-on-scroll">
//             <span>{t("AdjustableExtensionTube.enquireText")}</span>
//             <button
//               onClick={() => navigate("/enquire", { 
//                 state: { 
//                   from: location.pathname,
//                   scrollTo: "product" // Add this to enable scroll back to product section
//                 } 
//               })}
//               className="adjustable-enquire-btn"
//             >
//               {t("AdjustableExtensionTube.enquireButton")}
//             </button>
//           </div>
//         </section>

//         <SideBar navigate={navigate} />

//         <div className="adjustable-back-to-products-container">
//           <button
//             onClick={() => navigate("/dashboardTwo")}
//             className="adjustable-premium-btn action-btn pulse"
//           >
//             {t("AdjustableExtensionTube.backToProducts")}
//           </button>
//         </div>
//       </main>
//     </>
//   );
// };

// export default AdjustableExtensionTube;

import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import ImageZoomModal from "./ImageZoomModal";
import SideBar from "./Sidebar";
import "../Styles/AdjustableExtensionTube.css";
import AdjustableMainImage from "../assets/ExtensionTube/AdjustableExtensionTube.jpg";
import AdjustableDimensionLH from "../assets/Dimension/Adjustable_Extension_Tube_Dimension_LH.jpg";
import AdjustableDimensionRH from "../assets/Dimension/Adjustable_Extension_Tube_Dimension_RH.jpg";

const AdjustableExtensionTube = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("key-features");

  const navbarRef = useRef(null);
  const keyFeaturesSectionRef = useRef(null);
  const technicalInfoSectionRef = useRef(null);
  const productSectionRef = useRef(null);
  const hasScrolledToProduct = useRef(false);

  // Translated title
  const title = t("AdjustableExtensionTube.title");
  // Translated long description
  const information = t("AdjustableExtensionTube.description");

  // Translated key features list
  const keyFeatures = [
    t("AdjustableExtensionTube.features.adjustableExtension"),
    t("AdjustableExtensionTube.features.maleFemaleThreads"),
    t("AdjustableExtensionTube.features.blackAnodized"),
    t("AdjustableExtensionTube.features.industrialUse"),
    t("AdjustableExtensionTube.features.easyInstall"),
    t("AdjustableExtensionTube.features.variousLengths"),
    t("AdjustableExtensionTube.features.strayLightSuppression"),
    t("AdjustableExtensionTube.features.cMountCompatible"),
    t("AdjustableExtensionTube.features.lightweightRigid"),
    t("AdjustableExtensionTube.features.secureIntegration"),
    t("AdjustableExtensionTube.features.corrosionResistant"),
  ];

  // Product models (names & specs remain technical, but headers translated)
  const productModels = [
    {
      model: "CCMAET30X48",
      weight: "0.036 kg",
      outerDiameter: "30 mm",
      lMax: "48 mm",
      lMin: "30 mm",
    },
    {
      model: "CCMAET21X30",
      weight: "0.022 kg",
      outerDiameter: "30 mm",
      lMax: "30 mm",
      lMin: "21 mm",
    },
    {
      model: "CCMAET16X21",
      weight: "0.015 kg",
      outerDiameter: "30 mm",
      lMax: "21 mm",
      lMin: "16 mm",
    },
  ];

  // Technical data table (labels translated, values kept technical)
  const technicalData = [
    [t("AdjustableExtensionTube.technical.clearAperture"), "22.0"],
    [t("AdjustableExtensionTube.technical.threadType"), "C-Mount"],
    [t("AdjustableExtensionTube.technical.type"), "Extension Tube"],
    [t("AdjustableExtensionTube.technical.function"), "Extension Tube (Adjustable)"],
  ];

  // Scroll offset calculation (unchanged)
  const calculateScrollOffset = () => {
    const width = window.innerWidth;
    if (width <= 319) return 75;
    if (width <= 479) return 80;
    if (width <= 779) return 85;
    if (width <= 979) return 95;
    return 80;
  };

  // Sticky navbar effect
  useEffect(() => {
    const nav = document.getElementById("adjustable-detail-navbar");
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll to product section when returning from Enquire/Buy
  useEffect(() => {
    const shouldScrollToProduct =
      (location.state?.scrollTo === "product" || location.hash === "#product") &&
      productSectionRef.current &&
      !hasScrolledToProduct.current;

    if (shouldScrollToProduct) {
      hasScrolledToProduct.current = true;

      setTimeout(() => {
        const navHeight = document.getElementById("adjustable-detail-navbar")?.offsetHeight || 80;
        const top =
          productSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight -
          30;

        window.scrollTo({
          top,
          behavior: "smooth",
        });

        // Clean URL
        navigate(location.pathname, { replace: true, state: {} });
      }, 450); // Increased timeout for better reliability
    }
  }, [location, navigate]);

  // Fallback for hash only (in case state is lost)
  useEffect(() => {
    if (location.hash === "#product" && productSectionRef.current && !hasScrolledToProduct.current) {
      hasScrolledToProduct.current = true;
      setTimeout(() => {
        const navHeight = document.getElementById("adjustable-detail-navbar")?.offsetHeight || 80;
        const top =
          productSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight -
          30;
        window.scrollTo({ top, behavior: "smooth" });
      }, 600);
    }
  }, [location.hash]);

  const handleNavClick = (section) => {
    setActiveSection(section);

    const refs = {
      "key-features": keyFeaturesSectionRef,
      "technical-info": technicalInfoSectionRef,
      product: productSectionRef,
    };

    const targetRef = refs[section];
    if (!targetRef?.current) return;

    const scrollOffset = calculateScrollOffset();
    const top =
      targetRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      scrollOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <main className="adjustable-extension-tube-main">
        <h1 className="adjustable-extension-tube-title">{title}</h1>

        <div className="adjustable-image-container">
          <img
            src={AdjustableMainImage}
            alt={t("AdjustableExtensionTube.mainImageAlt")}
            className="adjustable-main-image"
            draggable={false}
            loading="eager"
          />
        </div>

        <div className="adjustable-information-container">
          <p className="adjustable-information-text">{information}</p>
        </div>

        {/* Sticky Navigation */}
        <nav id="adjustable-detail-navbar" ref={navbarRef} className="adjustable-product-nav reveal-on-scroll">
          <div className="adjustable-nav-button-wrapper">
            <button
              onClick={() => handleNavClick("key-features")}
              aria-current={activeSection === "key-features" ? "page" : undefined}
              className={`adjustable-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
            >
              {t("AdjustableExtensionTube.nav.keyFeatures")}
            </button>
            <button
              onClick={() => handleNavClick("technical-info")}
              aria-current={activeSection === "technical-info" ? "page" : undefined}
              className={`adjustable-nav-tab ${activeSection === "technical-info" ? "active" : ""}`}
            >
              {t("AdjustableExtensionTube.nav.technicalInfo")}
            </button>
            <button
              onClick={() => handleNavClick("product")}
              aria-current={activeSection === "product" ? "page" : undefined}
              className={`adjustable-nav-tab ${activeSection === "product" ? "active" : ""}`}
            >
              {t("AdjustableExtensionTube.nav.product")}
            </button>
          </div>
        </nav>

        <section ref={keyFeaturesSectionRef} id="adjustable-key-features" className="adjustable-section reveal-on-scroll">
          <h2 className="adjustable-key-features-title">
            {t("AdjustableExtensionTube.sectionTitles.keyFeatures")}
          </h2>
          <div className="adjustable-key-features-container">
            <ul className="adjustable-key-features-list">
              {keyFeatures.map((f, i) => (
                <li key={i} className="adjustable-key-feature-item">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="adjustable-section-divider" />

        <section ref={technicalInfoSectionRef} id="adjustable-technical-info" className="adjustable-section reveal-on-scroll">
          <h2 className="adjustable-technical-info-title">
            {t("AdjustableExtensionTube.sectionTitles.technicalInfo")}
          </h2>
          <div className="adjustable-technical-info-container">
            <table className="adjustable-technical-info-table">
              <tbody>
                {technicalData.map(([label, value], i) => (
                  <tr key={i}>
                    <td className="adjustable-tech-header-cell">{label}</td>
                    <td className="adjustable-tech-data-cell">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="adjustable-dimension-overview">
            <h3>{t("AdjustableExtensionTube.sectionTitles.dimension")}</h3>
            <div className="adjustable-dimension-image-container reveal-on-scroll">
              <img
                src={AdjustableDimensionLH}
                alt={t("AdjustableExtensionTube.dimensionAltLH")}
                loading="lazy"
                draggable={false}
              />
              <img
                src={AdjustableDimensionRH}
                alt={t("AdjustableExtensionTube.dimensionAltRH")}
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <hr className="adjustable-section-divider" />

        {/* This is the important part - product table section with id="product" */}
        <section ref={productSectionRef} id="product" className="adjustable-section reveal-on-scroll">
          <h2 className="adjustable-section-title">
            {t("AdjustableExtensionTube.sectionTitles.product")}
          </h2>

          <div className="adjustable-model-structure-table-container">
            <table className="adjustable-model-structure-table">
              <thead>
                <tr>
                  <th>{t("AdjustableExtensionTube.tableHeaders.model")}</th>
                  <th>{t("AdjustableExtensionTube.tableHeaders.weight")}</th>
                  <th>{t("AdjustableExtensionTube.tableHeaders.outerDiameter")}</th>
                  <th>{t("AdjustableExtensionTube.tableHeaders.lMax")}</th>
                  <th>{t("AdjustableExtensionTube.tableHeaders.lMin")}</th>
                </tr>
              </thead>
              <tbody>
                {productModels.map((m, i) => (
                  <tr key={i}>
                    <td className="adjustable-model-cell">{m.model}</td>
                    <td>{m.weight}</td>
                    <td>{m.outerDiameter}</td>
                    <td>{m.lMax}</td>
                    <td>{m.lMin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>

        <SideBar navigate={navigate} />

        <div className="adjustable-back-to-products-container">
          <button
            onClick={() => navigate("/dashboardTwo")}
            className="adjustable-premium-btn action-btn pulse"
          >
            {t("AdjustableExtensionTube.backToProducts")}
          </button>
        </div>
      </main>
    </>
  );
};

export default AdjustableExtensionTube;