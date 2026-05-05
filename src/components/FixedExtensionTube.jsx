// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar";
// import ImageZoomModal from "./ImageZoomModal";
// import SideBar from "./Sidebar";
// import "../Styles/FixedExtensionTube.css";
// import buyIcon from "../assets/icons/buy-icon.png";
// import FixedMainImage from "../assets/ExtensionTube/FixedExtensionTube.jpg";
// import FixedDimension from "../assets/Dimension/Fixed_Extension_Tube_Dimension.jpg";

// const FixedExtensionTube = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//   const [activeSection, setActiveSection] = useState("key-features");

//   const zoomContainerRef = useRef(null);
//   const navbarRef = useRef(null);
//   const keyFeaturesSectionRef = useRef(null);
//   const technicalInfoSectionRef = useRef(null);
//   const productSectionRef = useRef(null);
//   const hasScrolledToProduct = useRef(false);

//   // Translated title
//   const title = t("FixedExtensionTube.title");

//   // Translated long description
//   const information = t("FixedExtensionTube.description");

//   // Translated key features list
//   const keyFeatures = [
//     t("FixedExtensionTube.features.fixedExtension"),
//     t("FixedExtensionTube.features.maleFemaleThreads"),
//     t("FixedExtensionTube.features.blackAnodized"),
//     t("FixedExtensionTube.features.industrialUse"),
//     t("FixedExtensionTube.features.easyInstall"),
//     t("FixedExtensionTube.features.variousLengths"),
//     t("FixedExtensionTube.features.strayLightSuppression"),
//     t("FixedExtensionTube.features.cMountCompatible"),
//     t("FixedExtensionTube.features.lightweightRigid"),
//     t("FixedExtensionTube.features.secureIntegration"),
//     t("FixedExtensionTube.features.corrosionResistant"),
//   ];

//   // Product models (technical values unchanged)
//   const productModels = [
//     { model: "CCMFET40", weight: "0.038 kg", outerDiameter: "30 mm", length: "40 mm" },
//     { model: "CCMFET30", weight: "0.030 kg", outerDiameter: "30 mm", length: "30 mm" },
//     { model: "CCMFET20", weight: "0.022 kg", outerDiameter: "30 mm", length: "20 mm" },
//     { model: "CCMFET10", weight: "0.014 kg", outerDiameter: "30 mm", length: "10 mm" },
//     { model: "CCMFET5", weight: "0.010 kg", outerDiameter: "30 mm", length: "5 mm" },
//   ];

//   // Technical data table (labels translated, values technical)
//   const technicalData = [
//     [t("FixedExtensionTube.technical.clearAperture"), "22.0"],
//     [t("FixedExtensionTube.technical.threadType"), "C-Mount"],
//     [t("FixedExtensionTube.technical.type"), "Extension Tube"],
//     [t("FixedExtensionTube.technical.function"), "Extension Tube (Fixed)"],
//   ];

//   const calculateScrollOffset = () => {
//     const width = window.innerWidth;
//     if (width <= 319) return 75;
//     if (width <= 479) return 80;
//     if (width <= 779) return 85;
//     if (width <= 979) return 95;
//     return 80;
//   };

//   useEffect(() => {
//     const nav = document.getElementById("fixed-detail-navbar");
//     if (!nav) return;
//     const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

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
//         const navHeight = document.getElementById("fixed-detail-navbar")?.offsetHeight || 80;
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
//         const navHeight = document.getElementById("fixed-detail-navbar")?.offsetHeight || 80;
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

//     window.scrollTo({ top, behavior: "smooth" });
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//     setIsDragging(false);
//     setPosition({ x: 0, y: 0 });
//   };

//   const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
//   const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));

//   const handleMouseDown = (e) => {
//     if (zoomLevel > 1) {
//       setIsDragging(true);
//       setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
//       e.preventDefault();
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging || zoomLevel <= 1) return;
//     const newX = e.clientX - startPos.x;
//     const newY = e.clientY - startPos.y;
//     const container = zoomContainerRef.current;
//     if (container) {
//       const rect = container.getBoundingClientRect();
//       const maxX = (rect.width * zoomLevel - rect.width) / 2;
//       const maxY = (rect.height * zoomLevel - rect.height) / 2;
//       setPosition({
//         x: Math.max(-maxX, Math.min(maxX, newX)),
//         y: Math.max(-maxY, Math.min(maxY, newY)),
//       });
//     }
//   };

//   const handleMouseUp = () => setIsDragging(false);

//   const handleTouchStart = (e) => {
//     if (zoomLevel > 1 && e.touches.length === 1) {
//       setIsDragging(true);
//       setStartPos({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
//       e.preventDefault();
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging || zoomLevel <= 1 || e.touches.length !== 1) return;
//     const newX = e.touches[0].clientX - startPos.x;
//     const newY = e.touches[0].clientY - startPos.y;
//     const container = zoomContainerRef.current;
//     if (container) {
//       const rect = container.getBoundingClientRect();
//       const maxX = (rect.width * zoomLevel - rect.width) / 2;
//       const maxY = (rect.height * zoomLevel - rect.height) / 2;
//       setPosition({
//         x: Math.max(-maxX, Math.min(maxX, newX)),
//         y: Math.max(-maxY, Math.min(maxY, newY)),
//       });
//     }
//     e.preventDefault();
//   };

//   const handleTouchEnd = () => setIsDragging(false);

//   return (
//     <>
//       <Navbar />

//       <main className="fixed-extension-tube-main">
//         <h1 className="fixed-extension-tube-title">{title}</h1>

//         <div className="fixed-image-container">
//           <img
//             src={FixedMainImage}
//             alt={t("FixedExtensionTube.mainImageAlt")}
//             className="fixed-main-image"
//             draggable={false}
//             loading="eager"
//           />
//         </div>

//         <div className="fixed-information-container">
//           <p className="fixed-information-text">{information}</p>
//         </div>

//         {/* Sticky Navigation */}
//         <nav id="fixed-detail-navbar" ref={navbarRef} className="fixed-product-nav reveal-on-scroll">
//           <div className="fixed-nav-button-wrapper">
//             <button
//               onClick={() => handleNavClick("key-features")}
//               aria-current={activeSection === "key-features" ? "page" : undefined}
//               className={`fixed-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
//             >
//               {t("FixedExtensionTube.nav.keyFeatures")}
//             </button>

//             <button
//               onClick={() => handleNavClick("technical-info")}
//               aria-current={activeSection === "technical-info" ? "page" : undefined}
//               className={`fixed-nav-tab ${activeSection === "technical-info" ? "active" : ""}`}
//             >
//               {t("FixedExtensionTube.nav.technicalInfo")}
//             </button>

//             <button
//               onClick={() => handleNavClick("product")}
//               aria-current={activeSection === "product" ? "page" : undefined}
//               className={`fixed-nav-tab ${activeSection === "product" ? "active" : ""}`}
//             >
//               {t("FixedExtensionTube.nav.product")}
//             </button>
//           </div>
//         </nav>

//         <section ref={keyFeaturesSectionRef} id="fixed-key-features" className="fixed-section reveal-on-scroll">
//           <h2 className="fixed-key-features-title">
//             {t("FixedExtensionTube.sectionTitles.keyFeatures")}
//           </h2>

//           <div className="fixed-key-features-container">
//             <ul className="fixed-key-features-list">
//               {keyFeatures.map((f, i) => (
//                 <li key={i} className="fixed-key-feature-item">
//                   {f}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         <hr className="fixed-section-divider" />

//         <section ref={technicalInfoSectionRef} id="fixed-technical-info" className="fixed-section reveal-on-scroll">
//           <h2 className="fixed-technical-info-title">
//             {t("FixedExtensionTube.sectionTitles.technicalInfo")}
//           </h2>

//           <div className="fixed-technical-info-container">
//             <table className="fixed-technical-info-table">
//               <tbody>
//                 {technicalData.map(([label, value], i) => (
//                   <tr key={i}>
//                     <td className="fixed-tech-header-cell">{label}</td>
//                     <td className="fixed-tech-data-cell">{value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="fixed-dimension-overview">
//             <h3>{t("FixedExtensionTube.sectionTitles.dimension")}</h3>
//             <div className="fixed-dimension-image-container reveal-on-scroll">
//               <img
//                 src={FixedDimension}
//                 alt={t("FixedExtensionTube.dimensionAlt")}
//                 loading="lazy"
//                 draggable={false}
//               />
//             </div>
//           </div>
//         </section>

//         <hr className="fixed-section-divider" />

//         {/* This is the important part - product table section with id="product" */}
//         <section ref={productSectionRef} id="product" className="fixed-section reveal-on-scroll">
//           <h2 className="fixed-section-title">
//             {t("FixedExtensionTube.sectionTitles.product")}
//           </h2>

//           <div className="fixed-model-structure-table-container">
//             <table className="fixed-model-structure-table">
//               <thead>
//                 <tr>
//                   <th>{t("FixedExtensionTube.tableHeaders.model")}</th>
//                   <th>{t("FixedExtensionTube.tableHeaders.weight")}</th>
//                   <th>{t("FixedExtensionTube.tableHeaders.outerDiameter")}</th>
//                   <th>{t("FixedExtensionTube.tableHeaders.length")}</th>
//                   <th>{t("FixedExtensionTube.tableHeaders.buyNow")}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {productModels.map((m, i) => (
//                   <tr key={i}>
//                     <td className="fixed-model-cell">{m.model}</td>
//                     <td>{m.weight}</td>
//                     <td>{m.outerDiameter}</td>
//                     <td>{m.length}</td>
//                     <td className="fixed-buy-cell">
//                       <button
//                         className="fixed-buy-button"
//                         onClick={() => navigate(`/buy/${m.model}`, { 
//                           state: { 
//                             from: location.pathname,
//                             scrollTo: "product" // Add this to enable scroll back to product section
//                           } 
//                         })}
//                         aria-label={t("FixedExtensionTube.buyAriaLabel", { model: m.model })}
//                       >
//                         <img src={buyIcon} alt={t("FixedExtensionTube.buyAlt")} className="buy-icon" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="fixed-enquire-container reveal-on-scroll">
//             <span>{t("FixedExtensionTube.enquireText")}</span>
//             <button
//               onClick={() => navigate("/enquire", { 
//                 state: { 
//                   from: location.pathname,
//                   scrollTo: "product" // Add this to enable scroll back to product section
//                 } 
//               })}
//               className="fixed-enquire-btn"
//             >
//               {t("FixedExtensionTube.enquireButton")}
//             </button>
//           </div>
//         </section>

//         {selectedImage && (
//           <ImageZoomModal
//             selectedImage={selectedImage}
//             zoomLevel={zoomLevel}
//             position={position}
//             isDragging={isDragging}
//             zoomContainerRef={zoomContainerRef}
//             onClose={handleCloseModal}
//             onZoomIn={handleZoomIn}
//             onZoomOut={handleZoomOut}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           />
//         )}

//         <SideBar navigate={navigate} />

//         <div className="fixed-back-to-products-container">
//           <button
//             onClick={() => navigate("/dashboardTwo")}
//             className="fixed-premium-btn action-btn pulse"
//           >
//             {t("FixedExtensionTube.backToProducts")}
//           </button>
//         </div>
//       </main>
//     </>
//   );
// };

// export default FixedExtensionTube;


import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import ImageZoomModal from "./ImageZoomModal";
import SideBar from "./Sidebar";
import "../Styles/FixedExtensionTube.css";
import FixedMainImage from "../assets/ExtensionTube/FixedExtensionTube.jpg";
import FixedDimension from "../assets/Dimension/Fixed_Extension_Tube_Dimension.jpg";

const FixedExtensionTube = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("key-features");

  const zoomContainerRef = useRef(null);
  const navbarRef = useRef(null);
  const keyFeaturesSectionRef = useRef(null);
  const technicalInfoSectionRef = useRef(null);
  const productSectionRef = useRef(null);
  const hasScrolledToProduct = useRef(false);

  // Translated title
  const title = t("FixedExtensionTube.title");

  // Translated long description
  const information = t("FixedExtensionTube.description");

  // Translated key features list
  const keyFeatures = [
    t("FixedExtensionTube.features.fixedExtension"),
    t("FixedExtensionTube.features.maleFemaleThreads"),
    t("FixedExtensionTube.features.blackAnodized"),
    t("FixedExtensionTube.features.industrialUse"),
    t("FixedExtensionTube.features.easyInstall"),
    t("FixedExtensionTube.features.variousLengths"),
    t("FixedExtensionTube.features.strayLightSuppression"),
    t("FixedExtensionTube.features.cMountCompatible"),
    t("FixedExtensionTube.features.lightweightRigid"),
    t("FixedExtensionTube.features.secureIntegration"),
    t("FixedExtensionTube.features.corrosionResistant"),
  ];

  // Product models (technical values unchanged)
  const productModels = [
    { model: "CCMFET40", weight: "0.038 kg", outerDiameter: "30 mm", length: "40 mm" },
    { model: "CCMFET30", weight: "0.030 kg", outerDiameter: "30 mm", length: "30 mm" },
    { model: "CCMFET20", weight: "0.022 kg", outerDiameter: "30 mm", length: "20 mm" },
    { model: "CCMFET10", weight: "0.014 kg", outerDiameter: "30 mm", length: "10 mm" },
    { model: "CCMFET5", weight: "0.010 kg", outerDiameter: "30 mm", length: "5 mm" },
  ];

  // Technical data table (labels translated, values technical)
  const technicalData = [
    [t("FixedExtensionTube.technical.clearAperture"), "22.0"],
    [t("FixedExtensionTube.technical.threadType"), "C-Mount"],
    [t("FixedExtensionTube.technical.type"), "Extension Tube"],
    [t("FixedExtensionTube.technical.function"), "Extension Tube (Fixed)"],
  ];

  const calculateScrollOffset = () => {
    const width = window.innerWidth;
    if (width <= 319) return 75;
    if (width <= 479) return 80;
    if (width <= 779) return 85;
    if (width <= 979) return 95;
    return 80;
  };

  useEffect(() => {
    const nav = document.getElementById("fixed-detail-navbar");
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
        const navHeight = document.getElementById("fixed-detail-navbar")?.offsetHeight || 80;
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
        const navHeight = document.getElementById("fixed-detail-navbar")?.offsetHeight || 80;
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

    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsDragging(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoomLevel <= 1) return;
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    const container = zoomContainerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const maxX = (rect.width * zoomLevel - rect.width) / 2;
      const maxY = (rect.height * zoomLevel - rect.height) / 2;
      setPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY)),
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setStartPos({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
      e.preventDefault();
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || zoomLevel <= 1 || e.touches.length !== 1) return;
    const newX = e.touches[0].clientX - startPos.x;
    const newY = e.touches[0].clientY - startPos.y;
    const container = zoomContainerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const maxX = (rect.width * zoomLevel - rect.width) / 2;
      const maxY = (rect.height * zoomLevel - rect.height) / 2;
      setPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY)),
      });
    }
    e.preventDefault();
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <>
      <Navbar />

      <main className="fixed-extension-tube-main">
        <h1 className="fixed-extension-tube-title">{title}</h1>

        <div className="fixed-image-container">
          <img
            src={FixedMainImage}
            alt={t("FixedExtensionTube.mainImageAlt")}
            className="fixed-main-image"
            draggable={false}
            loading="eager"
          />
        </div>

        <div className="fixed-information-container">
          <p className="fixed-information-text">{information}</p>
        </div>

        {/* Sticky Navigation */}
        <nav id="fixed-detail-navbar" ref={navbarRef} className="fixed-product-nav reveal-on-scroll">
          <div className="fixed-nav-button-wrapper">
            <button
              onClick={() => handleNavClick("key-features")}
              aria-current={activeSection === "key-features" ? "page" : undefined}
              className={`fixed-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
            >
              {t("FixedExtensionTube.nav.keyFeatures")}
            </button>

            <button
              onClick={() => handleNavClick("technical-info")}
              aria-current={activeSection === "technical-info" ? "page" : undefined}
              className={`fixed-nav-tab ${activeSection === "technical-info" ? "active" : ""}`}
            >
              {t("FixedExtensionTube.nav.technicalInfo")}
            </button>

            <button
              onClick={() => handleNavClick("product")}
              aria-current={activeSection === "product" ? "page" : undefined}
              className={`fixed-nav-tab ${activeSection === "product" ? "active" : ""}`}
            >
              {t("FixedExtensionTube.nav.product")}
            </button>
          </div>
        </nav>

        <section ref={keyFeaturesSectionRef} id="fixed-key-features" className="fixed-section reveal-on-scroll">
          <h2 className="fixed-key-features-title">
            {t("FixedExtensionTube.sectionTitles.keyFeatures")}
          </h2>

          <div className="fixed-key-features-container">
            <ul className="fixed-key-features-list">
              {keyFeatures.map((f, i) => (
                <li key={i} className="fixed-key-feature-item">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="fixed-section-divider" />

        <section ref={technicalInfoSectionRef} id="fixed-technical-info" className="fixed-section reveal-on-scroll">
          <h2 className="fixed-technical-info-title">
            {t("FixedExtensionTube.sectionTitles.technicalInfo")}
          </h2>

          <div className="fixed-technical-info-container">
            <table className="fixed-technical-info-table">
              <tbody>
                {technicalData.map(([label, value], i) => (
                  <tr key={i}>
                    <td className="fixed-tech-header-cell">{label}</td>
                    <td className="fixed-tech-data-cell">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="fixed-dimension-overview">
            <h3>{t("FixedExtensionTube.sectionTitles.dimension")}</h3>
            <div className="fixed-dimension-image-container reveal-on-scroll">
              <img
                src={FixedDimension}
                alt={t("FixedExtensionTube.dimensionAlt")}
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <hr className="fixed-section-divider" />

        {/* This is the important part - product table section with id="product" */}
        <section ref={productSectionRef} id="product" className="fixed-section reveal-on-scroll">
          <h2 className="fixed-section-title">
            {t("FixedExtensionTube.sectionTitles.product")}
          </h2>

          <div className="fixed-model-structure-table-container">
            <table className="fixed-model-structure-table">
              <thead>
                <tr>
                  <th>{t("FixedExtensionTube.tableHeaders.model")}</th>
                  <th>{t("FixedExtensionTube.tableHeaders.weight")}</th>
                  <th>{t("FixedExtensionTube.tableHeaders.outerDiameter")}</th>
                  <th>{t("FixedExtensionTube.tableHeaders.length")}</th>
                </tr>
              </thead>
              <tbody>
                {productModels.map((m, i) => (
                  <tr key={i}>
                    <td className="fixed-model-cell">{m.model}</td>
                    <td>{m.weight}</td>
                    <td>{m.outerDiameter}</td>
                    <td>{m.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {selectedImage && (
          <ImageZoomModal
            selectedImage={selectedImage}
            zoomLevel={zoomLevel}
            position={position}
            isDragging={isDragging}
            zoomContainerRef={zoomContainerRef}
            onClose={handleCloseModal}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        )}

        <SideBar navigate={navigate} />

        <div className="fixed-back-to-products-container">
          <button
            onClick={() => navigate("/dashboardTwo")}
            className="fixed-premium-btn action-btn pulse"
          >
            {t("FixedExtensionTube.backToProducts")}
          </button>
        </div>
      </main>
    </>
  );
};

export default FixedExtensionTube;