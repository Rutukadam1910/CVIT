// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import { useTranslation } from "react-i18next";
// // // import Navbar from "./Navbar";
// // // import Gallery from "./Gallery";
// // // import ImageZoomModal from "./ImageZoomModal";
// // // import SideBar from "./Sidebar";
// // // import "../Styles/CameraVisionEnclosureWithCoolingJacket.css";
// // // import buyIcon from "../assets/icons/buy-icon.png";
// // // import info from "../assets/CameraVisionEnclosure/info_2.png";
// // // import cameravisionenclosureImage from "../assets/CameraVisionEnclosure/camera-vision-enclosure-with-cooling-jacket.jpg";
// // // import CameraEnclosureWithCoolingJacketDimension from "../assets/Dimension/camera-vision-enclosure-with-cooling-jacket-dimension.jpg";
// // // import WithCoolingjacketGallery1 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(1).png";
// // // import WithCoolingjacketGallery2 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(15).png";
// // // import WithCoolingjacketGallery3 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(3).png";
// // // import WithCoolingjacketGallery4 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(4).png";
// // // import WithCoolingjacketGallery5 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(5).png";
// // // import WithCoolingjacketGallery6 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(6).png";
// // // import WithCoolingjacketGallery7 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(7).png";
// // // import WithCoolingjacketGallery8 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(8).png";
// // // import WithCoolingjacketGallery9 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(9).png";
// // // import WithCoolingjacketGallery10 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(10).png";

// // // // Coming Soon Component (translated)
// // // const ComingSoon = ({ onClose }) => {
// // //   const { t } = useTranslation();
// // //   return (
// // //     <div className="cooling-coming-soon-overlay">
// // //       <div className="cooling-coming-soon-modal">
// // //         <button className="cooling-coming-soon-close" onClick={onClose}>×</button>
// // //         <div className="cooling-coming-soon-content">
// // //           <h2>{t("CameraEnclosure.comingSoonTitle")}</h2>
// // //           <p>{t("CameraEnclosure.comingSoonText")}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const CameraEnclosureWithCoolingJacket = () => {
// // //   const { t } = useTranslation();
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [zoomLevel, setZoomLevel] = useState(1);
// // //   const [position, setPosition] = useState({ x: 0, y: 0 });
// // //   const [isDragging, setIsDragging] = useState(false);
// // //   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
// // //   const [loadGallery, setLoadGallery] = useState(false);
// // //   const [activeSection, setActiveSection] = useState("key-features");
// // //   const [showComingSoon, setShowComingSoon] = useState(false);

// // //   const zoomContainerRef = useRef(null);
// // //   const keyFeaturesSectionRef = useRef(null);
// // //   const ProductSectionRef = useRef(null);
// // //   const technicalInfoSectionRef = useRef(null);
// // //   const accessoriesSectionRef = useRef(null);
// // //   const gallerySectionRef = useRef(null);
// // //   const navbarRef = useRef(null);
// // //   const hasScrolledToProduct = useRef(false);

// // //   // Gallery images array
// // //   const galleryImages = [
// // //     WithCoolingjacketGallery1, WithCoolingjacketGallery2, WithCoolingjacketGallery3,
// // //     WithCoolingjacketGallery4, WithCoolingjacketGallery5, WithCoolingjacketGallery6,
// // //     WithCoolingjacketGallery7, WithCoolingjacketGallery8, WithCoolingjacketGallery9,
// // //     WithCoolingjacketGallery10
// // //   ];

// // //   // Translated technical specs
// // //   const technicalSpecs = [
// // //     { label: t("CameraEnclosure.specs.operatingTemp"), value: t("CameraEnclosure.specs.operatingTempValue") },
// // //     { label: t("CameraEnclosure.specs.finish"), value: t("CameraEnclosure.specs.finishValue") },
// // //     { label: t("CameraEnclosure.specs.cableEntries"), value: t("CameraEnclosure.specs.cableEntriesValue") },
// // //     { label: t("CameraEnclosure.specs.windowCleaning"), value: t("CameraEnclosure.specs.windowCleaningValue") },
// // //   ];

// // //   // Translated accessories
// // //   const accessories = [
// // //     { name: t("CameraEnclosure.accessories.mountingBracket"), route: "/product/with-cooling-jacket/mounting-bracket" },
// // //     { name: t("CameraEnclosure.accessories.airCurtain"), route: "/product/with-cooling-jacket/air-curtain" },
// // //     { name: t("CameraEnclosure.accessories.waterChiller"), route: "/product/with-cooling-jacket/water-chiller" },
// // //   ];

// // //   // Preload gallery images
// // //   useEffect(() => {
// // //     const preload = async () => {
// // //       await Promise.all(
// // //         galleryImages.map((src) => {
// // //           return new Promise((resolve) => {
// // //             const img = new Image();
// // //             img.src = src;
// // //             img.onload = img.onerror = resolve;
// // //           });
// // //         })
// // //       );
// // //       setLoadGallery(true);
// // //     };
// // //     preload();
// // //   }, []);

// // //   // Sticky navbar effect
// // //   useEffect(() => {
// // //     const nav = document.getElementById("cooling-navbar");
// // //     if (!nav) return;
// // //     const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
// // //     window.addEventListener("scroll", handler);
// // //     return () => window.removeEventListener("scroll", handler);
// // //   }, []);

// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);
// // //   }, []);

// // //   useEffect(() => {
// // //     const shouldScrollToProduct =
// // //       (location.state?.scrollTo === "product" || location.hash === "#product") &&
// // //       ProductSectionRef.current &&
// // //       !hasScrolledToProduct.current;

// // //     if (shouldScrollToProduct) {
// // //       hasScrolledToProduct.current = true;

// // //       setTimeout(() => {
// // //         const navHeight = document.getElementById("cooling-navbar")?.offsetHeight || 80;
// // //         const top =
// // //           ProductSectionRef.current.getBoundingClientRect().top +
// // //           window.pageYOffset -
// // //           navHeight -
// // //           30;

// // //         window.scrollTo({ top, behavior: "smooth" });

// // //         navigate(location.pathname, { replace: true, state: {} });
// // //       }, 300);
// // //     }
// // //   }, [location, navigate]);

// // //   const calculateScrollOffset = () => {
// // //     const width = window.innerWidth;
// // //     if (width <= 319) return 75;
// // //     if (width <= 479) return 80;
// // //     if (width <= 779) return 85;
// // //     if (width <= 979) return 95;
// // //     return 80;
// // //   };

// // //   const goToBuy = (modelCode, variant) => {
// // //     navigate(`/buy/${modelCode}`, {
// // //       state: {
// // //         productName: "camera-enclosure-with-cooling-jacket",
// // //         variant,
// // //         from: location.pathname,
// // //       },
// // //     });
// // //   };

// // //   const handleNavClick = (section) => {
// // //     setActiveSection(section);
// // //     const refs = {
// // //       "key-features": keyFeaturesSectionRef,
// // //       product: ProductSectionRef,
// // //       technical: technicalInfoSectionRef,
// // //       accessories: accessoriesSectionRef,
// // //       gallery: gallerySectionRef,
// // //     };
// // //     const targetRef = refs[section];
// // //     if (!targetRef?.current) return;

// // //     const scrollOffset = calculateScrollOffset();
// // //     const top = targetRef.current.getBoundingClientRect().top + window.pageYOffset - scrollOffset;

// // //     window.scrollTo({ top, behavior: "smooth" });
// // //   };

// // //   const handleImageClick = (imgSrc) => {
// // //     setSelectedImage(imgSrc);
// // //     setZoomLevel(1);
// // //     setPosition({ x: 0, y: 0 });
// // //   };

// // //   const handleCloseModal = () => {
// // //     setSelectedImage(null);
// // //     setIsDragging(false);
// // //     setPosition({ x: 0, y: 0 });
// // //   };

// // //   const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
// // //   const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));

// // //   const handleMouseDown = (e) => {
// // //     if (zoomLevel > 1) {
// // //       setIsDragging(true);
// // //       setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
// // //       e.preventDefault();
// // //     }
// // //   };

// // //   const handleMouseMove = (e) => {
// // //     if (!isDragging || zoomLevel <= 1) return;
// // //     const newX = e.clientX - startPos.x;
// // //     const newY = e.clientY - startPos.y;
// // //     const container = zoomContainerRef.current;
// // //     if (container) {
// // //       const rect = container.getBoundingClientRect();
// // //       const maxX = (rect.width * zoomLevel - rect.width) / 2;
// // //       const maxY = (rect.height * zoomLevel - rect.height) / 2;
// // //       setPosition({
// // //         x: Math.max(-maxX, Math.min(maxX, newX)),
// // //         y: Math.max(-maxY, Math.min(maxY, newY)),
// // //       });
// // //     }
// // //   };

// // //   const handleMouseUp = () => setIsDragging(false);

// // //   const handleTouchStart = (e) => {
// // //     if (zoomLevel > 1 && e.touches.length === 1) {
// // //       setIsDragging(true);
// // //       setStartPos({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
// // //       e.preventDefault();
// // //     }
// // //   };

// // //   const handleTouchMove = (e) => {
// // //     if (!isDragging || zoomLevel <= 1 || e.touches.length !== 1) return;
// // //     const newX = e.touches[0].clientX - startPos.x;
// // //     const newY = e.touches[0].clientY - startPos.y;
// // //     const container = zoomContainerRef.current;
// // //     if (container) {
// // //       const rect = container.getBoundingClientRect();
// // //       const maxX = (rect.width * zoomLevel - rect.width) / 2;
// // //       const maxY = (rect.height * zoomLevel - rect.height) / 2;
// // //       setPosition({
// // //         x: Math.max(-maxX, Math.min(maxX, newX)),
// // //         y: Math.max(-maxY, Math.min(maxY, newY)),
// // //       });
// // //     }
// // //     e.preventDefault();
// // //   };

// // //   const handleTouchEnd = () => setIsDragging(false);

// // //   const handleAccessoryClick = () => {
// // //     setShowComingSoon(true);
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <main className="cooling-camera-enclosure-with-cooling-jacket-main">
// // //         <h1 className="cooling-camera-enclosure-with-cooling-jacket-title">
// // //           {t("CameraEnclosure.title")}
// // //         </h1>

// // //         <div className="cooling-image-container">
// // //           <img
// // //             src={cameravisionenclosureImage}
// // //             alt={t("CameraEnclosure.mainImageAlt")}
// // //             className="cooling-main-image"
// // //             draggable={false}
// // //             loading="eager"
// // //           />
// // //         </div>

// // //         <div className="cooling-information-container">
// // //           <p className="cooling-information-text">
// // //             {t("CameraEnclosure.description")}
// // //           </p>
// // //         </div>

// // //         <nav id="cooling-navbar" ref={navbarRef} className="cooling-product-nav reveal-on-scroll">
// // //           <div className="cooling-nav-button-wrapper">
// // //             <button
// // //               onClick={() => handleNavClick("key-features")}
// // //               aria-current={activeSection === "key-features" ? "page" : undefined}
// // //               className={`cooling-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
// // //             >
// // //               {t("CameraEnclosure.nav.keyFeatures")}
// // //             </button>

// // //             <button
// // //               onClick={() => handleNavClick("product")}
// // //               aria-current={activeSection === "product" ? "page" : undefined}
// // //               className={`cooling-nav-tab ${activeSection === "product" ? "active" : ""}`}
// // //             >
// // //               {t("CameraEnclosure.nav.product")}
// // //             </button>

// // //             <button
// // //               onClick={() => handleNavClick("technical")}
// // //               aria-current={activeSection === "technical" ? "page" : undefined}
// // //               className={`cooling-nav-tab ${activeSection === "technical" ? "active" : ""}`}
// // //             >
// // //               {t("CameraEnclosure.nav.technical")}
// // //             </button>

// // //             <button
// // //               onClick={() => handleNavClick("accessories")}
// // //               aria-current={activeSection === "accessories" ? "page" : undefined}
// // //               className={`cooling-nav-tab ${activeSection === "accessories" ? "active" : ""}`}
// // //             >
// // //               {t("CameraEnclosure.nav.accessories")}
// // //             </button>

// // //             <button
// // //               onClick={() => handleNavClick("gallery")}
// // //               aria-current={activeSection === "gallery" ? "page" : undefined}
// // //               className={`cooling-nav-tab ${activeSection === "gallery" ? "active" : ""}`}
// // //             >
// // //               {t("CameraEnclosure.nav.gallery")}
// // //             </button>
// // //           </div>
// // //         </nav>

// // //         <section ref={keyFeaturesSectionRef} className="cooling-section reveal-on-scroll">
// // //           <h2 className="cooling-key-features-title">
// // //             {t("CameraEnclosure.sectionTitles.keyFeatures")}
// // //           </h2>
// // //           <div className="cooling-key-features-container">
// // //             <ul className="cooling-key-features-list">
// // //               {[
// // //                 t("CameraEnclosure.features.supportSizes"),
// // //                 t("CameraEnclosure.features.compatibleBrands"),
// // //                 t("CameraEnclosure.features.highTemp"),
// // //                 t("CameraEnclosure.features.airCurtain"),
// // //                 t("CameraEnclosure.features.ip68Cable"),
// // //                 t("CameraEnclosure.features.finish"),
// // //                 t("CameraEnclosure.features.mountingIncluded"),
// // //                 t("CameraEnclosure.features.xlOption"),
// // //               ].map((feature, i) => (
// // //                 <li key={i} className="cooling-key-feature-item">
// // //                   {feature}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         </section>

// // //         <hr className="cooling-section-divider" />

// // //         <section ref={ProductSectionRef} className="cooling-section reveal-on-scroll" id="cooling-product">
// // //           <h3 className="cooling-model-structure-title">
// // //             {t("CameraEnclosure.sectionTitles.product")}
// // //           </h3>

// // //           <div className="cooling-model-structure-table-container">
// // //             <table className="cooling-product-table">
// // //               <colgroup>
// // //                 <col style={{ width: "100px" }} />
// // //                 <col style={{ width: "80px" }} />
// // //                 <col style={{ width: "100px" }} />
// // //                 <col style={{ width: "70px" }} />
// // //                 <col style={{ width: "70px" }} />
// // //                 <col style={{ width: "65px" }} />
// // //                 <col style={{ width: "30px" }} />
// // //                 <col style={{ width: "30px" }} />
// // //                 <col style={{ width: "30px" }} />
// // //                 <col style={{ width: "30px" }} />
// // //                 <col style={{ width: "50px" }} />
// // //               </colgroup>

// // //               <thead>
// // //                 <tr>
// // //                   <th>{t("CameraEnclosure.tableHeaders.modelNo")}</th>
// // //                   <th>{t("CameraEnclosure.tableHeaders.compatibleCameraSize")}</th>
// // //                   <th colSpan="3">{t("CameraEnclosure.tableHeaders.lensHousing")}</th>
// // //                   <th>{t("CameraEnclosure.tableHeaders.totalWeight")}</th>
// // //                   <th>A</th>
// // //                   <th>B</th>
// // //                   <th>C</th>
// // //                   <th>D</th>
// // //                   <th>{t("CameraEnclosure.tableHeaders.buyNow")}</th>
// // //                 </tr>
// // //                 <tr>
// // //                   <th></th>
// // //                   <th></th>
// // //                   <th>{t("CameraEnclosure.tableHeaders.housingSize")}</th>
// // //                   <th>{t("CameraEnclosure.tableHeaders.maxAllowableOD")}</th>
// // //                   <th>{t("CameraEnclosure.tableHeaders.maxAllowableLength")}</th>
// // //                   <th></th>
// // //                   <th></th>
// // //                   <th></th>
// // //                   <th></th>
// // //                   <th></th>
// // //                   <th></th>
// // //                 </tr>
// // //               </thead>

// // //               {/* MVCEWC29X29.V2 Group */}
// // //               <tbody className="cooling-group-peach">
// // //                 <tr>
// // //                   <td rowSpan="7" className="cooling-model-bold">MVCEWC29X29.V2</td>
// // //                   <td rowSpan="7">29mm X 29mm</td>
// // //                   <td className="cooling-housing-size">78 mm x 45 mm</td>
// // //                   <td className="cooling-max-od">70 mm</td>
// // //                   <td className="cooling-max-length">42 mm</td>
// // //                   <td rowSpan="7" className="cooling-weight-bold">5 to 7 Kg</td>
// // //                   <td className="cooling-dim-a">100</td>
// // //                   <td className="cooling-dim-b">80</td>
// // //                   <td className="cooling-dim-c">78</td>
// // //                   <td className="cooling-dim-d">150</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC29X29.V2-78x45", "78 mm x 45 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC29X29.V2 - 78x45 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">78 mm x 55 mm</td>
// // //                   <td className="cooling-max-od">70 mm</td>
// // //                   <td className="cooling-max-length">52 mm</td>
// // //                   <td className="cooling-dim-a">100</td>
// // //                   <td className="cooling-dim-b">80</td>
// // //                   <td className="cooling-dim-c">78</td>
// // //                   <td className="cooling-dim-d">160</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC29X29.V2-78x55", "78 mm x 55 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC29X29.V2 - 78x55 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">78 mm x 65 mm</td>
// // //                   <td className="cooling-max-od">70 mm</td>
// // //                   <td className="cooling-max-length">62 mm</td>
// // //                   <td className="cooling-dim-a">100</td>
// // //                   <td className="cooling-dim-b">80</td>
// // //                   <td className="cooling-dim-c">78</td>
// // //                   <td className="cooling-dim-d">170</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC29X29.V2-78x65", "78 mm x 65 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC29X29.V2 - 78x65 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">78 mm x 75 mm</td>
// // //                   <td className="cooling-max-od">70 mm</td>
// // //                   <td className="cooling-max-length">72 mm</td>
// // //                   <td className="cooling-dim-a">100</td>
// // //                   <td className="cooling-dim-b">80</td>
// // //                   <td className="cooling-dim-c">78</td>
// // //                   <td className="cooling-dim-d">180</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC29X29.V2-78x75", "78 mm x 75 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC29X29.V2 - 78x75 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">78 mm x 85 mm</td>
// // //                   <td className="cooling-max-od">70 mm</td>
// // //                   <td className="cooling-max-length">82 mm</td>
// // //                   <td className="cooling-dim-a">100</td>
// // //                   <td className="cooling-dim-b">80</td>
// // //                   <td className="cooling-dim-c">78</td>
// // //                   <td className="cooling-dim-d">190</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC29X29.V2-78x85", "78 mm x 85 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC29X29.V2 - 78x85 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">78 mm x 95 mm</td>
// // //                   <td className="cooling-max-od">70 mm</td>
// // //                   <td className="cooling-max-length">92 mm</td>
// // //                   <td className="cooling-dim-a">100</td>
// // //                   <td className="cooling-dim-b">80</td>
// // //                   <td className="cooling-dim-c">78</td>
// // //                   <td className="cooling-dim-d">200</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC29X29.V2-78x95", "78 mm x 95 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC29X29.V2 - 78x95 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">78 mm x 105 mm</td>
// // //                   <td className="cooling-max-od">70 mm</td>
// // //                   <td className="cooling-max-length">102 mm</td>
// // //                   <td className="cooling-dim-a">100</td>
// // //                   <td className="cooling-dim-b">80</td>
// // //                   <td className="cooling-dim-c">78</td>
// // //                   <td className="cooling-dim-d">210</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC29X29.V2-78x105", "78 mm x 105 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC29X29.V2 - 78x105 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               </tbody>

// // //               {/* MVCEWC40X30.V1 Group */}
// // //               <tbody className="cooling-group-white">
// // //                 <tr>
// // //                   <td rowSpan="7" className="cooling-model-bold">MVCEWC40X30.V1</td>
// // //                   <td rowSpan="7">40mm X 30mm</td>
// // //                   <td className="cooling-housing-size">100 mm x 45 mm</td>
// // //                   <td className="cooling-max-od">85 mm</td>
// // //                   <td className="cooling-max-length">-</td>
// // //                   <td rowSpan="7" className="cooling-weight-bold">6 to 9 Kg</td>
// // //                   <td className="cooling-dim-a">110</td>
// // //                   <td className="cooling-dim-b">95</td>
// // //                   <td className="cooling-dim-c">88</td>
// // //                   <td className="cooling-dim-d">150</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC40X30.V1-100x45", "100 mm x 45 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC40X30.V1 - 100x45 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">100 mm x 55 mm</td>
// // //                   <td className="cooling-max-od">85 mm</td>
// // //                   <td className="cooling-max-length">-</td>
// // //                   <td className="cooling-dim-a">110</td>
// // //                   <td className="cooling-dim-b">95</td>
// // //                   <td className="cooling-dim-c">88</td>
// // //                   <td className="cooling-dim-d">160</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC40X30.V1-100x55", "100 mm x 55 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC40X30.V1 - 100x55 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">100 mm x 65 mm</td>
// // //                   <td className="cooling-max-od">85 mm</td>
// // //                   <td className="cooling-max-length">-</td>
// // //                   <td className="cooling-dim-a">110</td>
// // //                   <td className="cooling-dim-b">95</td>
// // //                   <td className="cooling-dim-c">88</td>
// // //                   <td className="cooling-dim-d">170</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC40X30.V1-100x65", "100 mm x 65 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC40X30.V1 - 100x65 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">100 mm x 75 mm</td>
// // //                   <td className="cooling-max-od">85 mm</td>
// // //                   <td className="cooling-max-length">-</td>
// // //                   <td className="cooling-dim-a">110</td>
// // //                   <td className="cooling-dim-b">95</td>
// // //                   <td className="cooling-dim-c">88</td>
// // //                   <td className="cooling-dim-d">180</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC40X30.V1-100x75", "100 mm x 75 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC40X30.V1 - 100x75 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">100 mm x 85 mm</td>
// // //                   <td className="cooling-max-od">85 mm</td>
// // //                   <td className="cooling-max-length">-</td>
// // //                   <td className="cooling-dim-a">110</td>
// // //                   <td className="cooling-dim-b">95</td>
// // //                   <td className="cooling-dim-c">88</td>
// // //                   <td className="cooling-dim-d">190</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC40X30.V1-100x85", "100 mm x 85 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC40X30.V1 - 100x85 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">100 mm x 95 mm</td>
// // //                   <td className="cooling-max-od">85 mm</td>
// // //                   <td className="cooling-max-length">-</td>
// // //                   <td className="cooling-dim-a">110</td>
// // //                   <td className="cooling-dim-b">95</td>
// // //                   <td className="cooling-dim-c">88</td>
// // //                   <td className="cooling-dim-d">200</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC40X30.V1-100x95", "100 mm x 95 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC40X30.V1 - 100x95 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">100 mm x 105 mm</td>
// // //                   <td className="cooling-max-od">85 mm</td>
// // //                   <td className="cooling-max-length">-</td>
// // //                   <td className="cooling-dim-a">110</td>
// // //                   <td className="cooling-dim-b">95</td>
// // //                   <td className="cooling-dim-c">88</td>
// // //                   <td className="cooling-dim-d">210</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC40X30.V1-100x105", "100 mm x 105 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC40X30.V1 - 100x105 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               </tbody>

// // //               {/* MVCEWC60X60.V2 Group */}
// // //               <tbody className="cooling-group-peach">
// // //                 <tr>
// // //                   <td rowSpan="7" className="cooling-model-bold">MVCEWC60X60.V2</td>
// // //                   <td rowSpan="7">60mm X 60mm</td>
// // //                   <td className="cooling-housing-size">140 mm x 75 mm</td>
// // //                   <td className="cooling-max-od">100 mm</td>
// // //                   <td className="cooling-max-length">50 mm</td>
// // //                   <td rowSpan="7" className="cooling-weight-bold">12 to 15 Kg</td>
// // //                   <td className="cooling-dim-a">194</td>
// // //                   <td className="cooling-dim-b">130</td>
// // //                   <td className="cooling-dim-c">140</td>
// // //                   <td className="cooling-dim-d">325</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC60X60.V2-140x75", "140 mm x 75 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC60X60.V2 - 140x75 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">140 mm x 85 mm</td>
// // //                   <td className="cooling-max-od">100 mm</td>
// // //                   <td className="cooling-max-length">60 mm</td>
// // //                   <td className="cooling-dim-a">194</td>
// // //                   <td className="cooling-dim-b">130</td>
// // //                   <td className="cooling-dim-c">140</td>
// // //                   <td className="cooling-dim-d">335</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC60X60.V2-140x85", "140 mm x 85 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC60X60.V2 - 140x85 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">140 mm x 95 mm</td>
// // //                   <td className="cooling-max-od">100 mm</td>
// // //                   <td className="cooling-max-length">70 mm</td>
// // //                   <td className="cooling-dim-a">194</td>
// // //                   <td className="cooling-dim-b">130</td>
// // //                   <td className="cooling-dim-c">140</td>
// // //                   <td className="cooling-dim-d">345</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC60X60.V2-140x95", "140 mm x 95 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC60X60.V2 - 140x95 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">140 mm x 105 mm</td>
// // //                   <td className="cooling-max-od">100 mm</td>
// // //                   <td className="cooling-max-length">80 mm</td>
// // //                   <td className="cooling-dim-a">194</td>
// // //                   <td className="cooling-dim-b">130</td>
// // //                   <td className="cooling-dim-c">140</td>
// // //                   <td className="cooling-dim-d">355</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC60X60.V2-140x105", "140 mm x 105 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC60X60.V2 - 140x105 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">140 mm x 115 mm</td>
// // //                   <td className="cooling-max-od">100 mm</td>
// // //                   <td className="cooling-max-length">90 mm</td>
// // //                   <td className="cooling-dim-a">194</td>
// // //                   <td className="cooling-dim-b">130</td>
// // //                   <td className="cooling-dim-c">140</td>
// // //                   <td className="cooling-dim-d">365</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC60X60.V2-140x115", "140 mm x 115 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC60X60.V2 - 140x115 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">140 mm x 125 mm</td>
// // //                   <td className="cooling-max-od">100 mm</td>
// // //                   <td className="cooling-max-length">100 mm</td>
// // //                   <td className="cooling-dim-a">194</td>
// // //                   <td className="cooling-dim-b">130</td>
// // //                   <td className="cooling-dim-c">140</td>
// // //                   <td className="cooling-dim-d">375</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC60X60.V2-140x125", "140 mm x 125 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC60X60.V2 - 140x125 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="cooling-housing-size">140 mm x 135 mm</td>
// // //                   <td className="cooling-max-od">100 mm</td>
// // //                   <td className="cooling-max-length">110 mm</td>
// // //                   <td className="cooling-dim-a">194</td>
// // //                   <td className="cooling-dim-b">130</td>
// // //                   <td className="cooling-dim-c">140</td>
// // //                   <td className="cooling-dim-d">385</td>
// // //                   <td>
// // //                     <button
// // //                       className="cooling-buy-button"
// // //                       onClick={() => goToBuy("MVCEWC60X60.V2-140x135", "140 mm x 135 mm")}
// // //                       aria-label={t("CameraEnclosure.buyAriaLabel", { model: "MVCEWC60X60.V2 - 140x135 mm" })}
// // //                     >
// // //                       <img src={buyIcon} alt={t("CameraEnclosure.buyAlt")} className="buy-icon" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               </tbody>
// // //             </table>
// // //           </div>

// // //           <div className="cooling-enquire-container reveal-on-scroll">
// // //             <span>{t("CameraEnclosure.enquireText")}</span>
// // //             <button
// // //               onClick={() => navigate("/enquire", { state: { from: location.pathname } })}
// // //               className="cooling-enquire-btn"
// // //             >
// // //               {t("CameraEnclosure.enquireButton")}
// // //             </button>
// // //           </div>
// // //         </section>

// // //         <hr className="cooling-section-divider" />

// // //         <section ref={technicalInfoSectionRef} className="cooling-section reveal-on-scroll">
// // //           <h2 className="cooling-technical-info-title">
// // //             {t("CameraEnclosure.sectionTitles.technical")}
// // //           </h2>
// // //           <div className="cooling-model-structure-table-container">
// // //             <table className="cooling-model-structure-table">
// // //               <tbody>
// // //                 {technicalSpecs.map((spec, i) => (
// // //                   <tr key={i}>
// // //                     <td>{spec.label}</td>
// // //                     <td>{spec.value}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>

// // //           <div className="cooling-dimension-overview reveal-on-scroll">
// // //             <h3>{t("CameraEnclosure.sectionTitles.dimension")}</h3>
// // //             <div className="cooling-dimension-image-container cooling-fixed-dimension-single">
// // //               <img
// // //                 src={CameraEnclosureWithCoolingJacketDimension}
// // //                 alt={t("CameraEnclosure.dimensionAlt")}
// // //                 loading="lazy"
// // //                 draggable={false}
// // //               />
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <hr className="cooling-section-divider" />

// // //         <section ref={accessoriesSectionRef} className="cooling-section reveal-on-scroll">
// // //           <h2 className="cooling-section-title">
// // //             {t("CameraEnclosure.sectionTitles.accessories")}
// // //           </h2>
// // //           <div className="cooling-model-structure-table-container">
// // //             <table className="cooling-model-structure-table">
// // //               <thead>
// // //                 <tr>
// // //                   <th>{t("CameraEnclosure.tableHeaders.accessory")}</th>
// // //                   <th>{t("CameraEnclosure.tableHeaders.moreDetails")}</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {accessories.map((acc, i) => (
// // //                   <tr key={i}>
// // //                     <td>{acc.name}</td>
// // //                     <td className="cooling-detail-cell">
// // //                       <div className="cooling-detail-button-wrapper">
// // //                         <button
// // //                           className="cooling-detail-button"
// // //                           onClick={handleAccessoryClick}
// // //                           aria-label={t("CameraEnclosure.accessoryAriaLabel", { name: acc.name })}
// // //                         >
// // //                           <img src={info} alt={t("CameraEnclosure.moreInfoAlt")} />
// // //                         </button>
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </section>

// // //         <hr className="cooling-section-divider" />

// // //         <section
// // //           ref={gallerySectionRef}
// // //           id="cooling-gallery"
// // //           className="cooling-gallery-section reveal-on-scroll"
// // //           tabIndex={-1}
// // //           aria-label={t("CameraEnclosure.galleryAriaLabel")}
// // //         >
// // //           <h2 className="cooling-section-title-3">
// // //             {t("CameraEnclosure.sectionTitles.gallery")}
// // //           </h2>
// // //           <div className={`cooling-gallery-container ${loadGallery ? "loaded" : ""}`}>
// // //             <Gallery
// // //               galleryImages={galleryImages}
// // //               loadGallery={loadGallery}
// // //               onImageClick={handleImageClick}
// // //             />
// // //           </div>
// // //         </section>

// // //         {selectedImage && (
// // //           <ImageZoomModal
// // //             selectedImage={selectedImage}
// // //             zoomLevel={zoomLevel}
// // //             position={position}
// // //             isDragging={isDragging}
// // //             zoomContainerRef={zoomContainerRef}
// // //             onClose={handleCloseModal}
// // //             onZoomIn={handleZoomIn}
// // //             onZoomOut={handleZoomOut}
// // //             onMouseDown={handleMouseDown}
// // //             onMouseMove={handleMouseMove}
// // //             onMouseUp={handleMouseUp}
// // //             onTouchStart={handleTouchStart}
// // //             onTouchMove={handleTouchMove}
// // //             onTouchEnd={handleTouchEnd}
// // //           />
// // //         )}

// // //         {showComingSoon && <ComingSoon onClose={() => setShowComingSoon(false)} />}

// // //         <SideBar navigate={navigate} />

// // //         <div className="cooling-back-to-products-container">
// // //           <button
// // //             onClick={() => navigate("/dashboardTwo")}
// // //             className="cooling-premium-btn cooling-action-btn cooling-pulse"
// // //           >
// // //             {t("CameraEnclosure.backToProducts")}
// // //           </button>
// // //         </div>
// // //       </main>
// // //     </>
// // //   );
// // // };

// // // export default CameraEnclosureWithCoolingJacket;


// // import React, { useEffect, useState, useRef } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useTranslation } from "react-i18next";
// // import Navbar from "./Navbar";
// // import Gallery from "./Gallery";
// // import ImageZoomModal from "./ImageZoomModal";
// // import SideBar from "./Sidebar";
// // import "../Styles/CameraVisionEnclosureWithCoolingJacket.css";
// // import info from "../assets/CameraVisionEnclosure/info_2.png";
// // import cameravisionenclosureImage from "../assets/CameraVisionEnclosure/camera-vision-enclosure-with-cooling-jacket.jpg";
// // import CameraEnclosureWithCoolingJacketDimension from "../assets/Dimension/camera-vision-enclosure-with-cooling-jacket-dimension.jpg";
// // import WithCoolingjacketGallery1 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(1).png";
// // import WithCoolingjacketGallery2 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(15).png";
// // import WithCoolingjacketGallery3 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(3).png";
// // import WithCoolingjacketGallery4 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(4).png";
// // import WithCoolingjacketGallery5 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(5).png";
// // import WithCoolingjacketGallery6 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(6).png";
// // import WithCoolingjacketGallery7 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(7).png";
// // import WithCoolingjacketGallery8 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(8).png";
// // import WithCoolingjacketGallery9 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(9).png";
// // import WithCoolingjacketGallery10 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(10).png";

// // // Coming Soon Component (translated)
// // const ComingSoon = ({ onClose }) => {
// //   const { t } = useTranslation();
// //   return (
// //     <div className="cooling-coming-soon-overlay">
// //       <div className="cooling-coming-soon-modal">
// //         <button className="cooling-coming-soon-close" onClick={onClose}>×</button>
// //         <div className="cooling-coming-soon-content">
// //           <h2>{t("CameraEnclosure.comingSoonTitle")}</h2>
// //           <p>{t("CameraEnclosure.comingSoonText")}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const CameraEnclosureWithCoolingJacket = () => {
// //   const { t } = useTranslation();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [zoomLevel, setZoomLevel] = useState(1);
// //   const [position, setPosition] = useState({ x: 0, y: 0 });
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
// //   const [loadGallery, setLoadGallery] = useState(false);
// //   const [activeSection, setActiveSection] = useState("key-features");
// //   const [showComingSoon, setShowComingSoon] = useState(false);

// //   const zoomContainerRef = useRef(null);
// //   const keyFeaturesSectionRef = useRef(null);
// //   const ProductSectionRef = useRef(null);
// //   const technicalInfoSectionRef = useRef(null);
// //   const accessoriesSectionRef = useRef(null);
// //   const gallerySectionRef = useRef(null);
// //   const navbarRef = useRef(null);
// //   const hasScrolledToProduct = useRef(false);

// //   const galleryImages = [
// //     WithCoolingjacketGallery1, WithCoolingjacketGallery2, WithCoolingjacketGallery3,
// //     WithCoolingjacketGallery4, WithCoolingjacketGallery5, WithCoolingjacketGallery6,
// //     WithCoolingjacketGallery7, WithCoolingjacketGallery8, WithCoolingjacketGallery9,
// //     WithCoolingjacketGallery10
// //   ];

// //   const technicalSpecs = [
// //     { label: t("CameraEnclosure.specs.operatingTemp"), value: t("CameraEnclosure.specs.operatingTempValue") },
// //     { label: t("CameraEnclosure.specs.finish"), value: t("CameraEnclosure.specs.finishValue") },
// //     { label: t("CameraEnclosure.specs.cableEntries"), value: t("CameraEnclosure.specs.cableEntriesValue") },
// //     { label: t("CameraEnclosure.specs.windowCleaning"), value: t("CameraEnclosure.specs.windowCleaningValue") },
// //   ];

// //   const accessories = [
// //     { name: t("CameraEnclosure.accessories.mountingBracket"), route: "/product/with-cooling-jacket/mounting-bracket" },
// //     { name: t("CameraEnclosure.accessories.airCurtain"), route: "/product/with-cooling-jacket/air-curtain" },
// //     { name: t("CameraEnclosure.accessories.waterChiller"), route: "/product/with-cooling-jacket/water-chiller" },
// //   ];

// //   useEffect(() => {
// //     const preload = async () => {
// //       await Promise.all(
// //         galleryImages.map((src) => {
// //           return new Promise((resolve) => {
// //             const img = new Image();
// //             img.src = src;
// //             img.onload = img.onerror = resolve;
// //           });
// //         })
// //       );
// //       setLoadGallery(true);
// //     };
// //     preload();
// //   }, []);

// //   useEffect(() => {
// //     const nav = document.getElementById("cooling-navbar");
// //     if (!nav) return;
// //     const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
// //     window.addEventListener("scroll", handler);
// //     return () => window.removeEventListener("scroll", handler);
// //   }, []);

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   useEffect(() => {
// //     const shouldScrollToProduct =
// //       (location.state?.scrollTo === "product" || location.hash === "#product") &&
// //       ProductSectionRef.current &&
// //       !hasScrolledToProduct.current;

// //     if (shouldScrollToProduct) {
// //       hasScrolledToProduct.current = true;
// //       setTimeout(() => {
// //         const navHeight = document.getElementById("cooling-navbar")?.offsetHeight || 80;
// //         const top =
// //           ProductSectionRef.current.getBoundingClientRect().top +
// //           window.pageYOffset -
// //           navHeight -
// //           30;
// //         window.scrollTo({ top, behavior: "smooth" });
// //         navigate(location.pathname, { replace: true, state: {} });
// //       }, 300);
// //     }
// //   }, [location, navigate]);

// //   const calculateScrollOffset = () => {
// //     const width = window.innerWidth;
// //     if (width <= 319) return 75;
// //     if (width <= 479) return 80;
// //     if (width <= 779) return 85;
// //     if (width <= 979) return 95;
// //     return 80;
// //   };

// //   const handleNavClick = (section) => {
// //     setActiveSection(section);
// //     const refs = {
// //       "key-features": keyFeaturesSectionRef,
// //       product: ProductSectionRef,
// //       technical: technicalInfoSectionRef,
// //       accessories: accessoriesSectionRef,
// //       gallery: gallerySectionRef,
// //     };
// //     const targetRef = refs[section];
// //     if (!targetRef?.current) return;
// //     const scrollOffset = calculateScrollOffset();
// //     const top = targetRef.current.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
// //     window.scrollTo({ top, behavior: "smooth" });
// //   };

// //   const handleImageClick = (imgSrc) => {
// //     setSelectedImage(imgSrc);
// //     setZoomLevel(1);
// //     setPosition({ x: 0, y: 0 });
// //   };

// //   const handleCloseModal = () => {
// //     setSelectedImage(null);
// //     setIsDragging(false);
// //     setPosition({ x: 0, y: 0 });
// //   };

// //   const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
// //   const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));

// //   const handleMouseDown = (e) => {
// //     if (zoomLevel > 1) {
// //       setIsDragging(true);
// //       setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
// //       e.preventDefault();
// //     }
// //   };

// //   const handleMouseMove = (e) => {
// //     if (!isDragging || zoomLevel <= 1) return;
// //     const newX = e.clientX - startPos.x;
// //     const newY = e.clientY - startPos.y;
// //     const container = zoomContainerRef.current;
// //     if (container) {
// //       const rect = container.getBoundingClientRect();
// //       const maxX = (rect.width * zoomLevel - rect.width) / 2;
// //       const maxY = (rect.height * zoomLevel - rect.height) / 2;
// //       setPosition({
// //         x: Math.max(-maxX, Math.min(maxX, newX)),
// //         y: Math.max(-maxY, Math.min(maxY, newY)),
// //       });
// //     }
// //   };

// //   const handleMouseUp = () => setIsDragging(false);

// //   const handleTouchStart = (e) => {
// //     if (zoomLevel > 1 && e.touches.length === 1) {
// //       setIsDragging(true);
// //       setStartPos({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
// //       e.preventDefault();
// //     }
// //   };

// //   const handleTouchMove = (e) => {
// //     if (!isDragging || zoomLevel <= 1 || e.touches.length !== 1) return;
// //     const newX = e.touches[0].clientX - startPos.x;
// //     const newY = e.touches[0].clientY - startPos.y;
// //     const container = zoomContainerRef.current;
// //     if (container) {
// //       const rect = container.getBoundingClientRect();
// //       const maxX = (rect.width * zoomLevel - rect.width) / 2;
// //       const maxY = (rect.height * zoomLevel - rect.height) / 2;
// //       setPosition({
// //         x: Math.max(-maxX, Math.min(maxX, newX)),
// //         y: Math.max(-maxY, Math.min(maxY, newY)),
// //       });
// //     }
// //     e.preventDefault();
// //   };

// //   const handleTouchEnd = () => setIsDragging(false);

// //   const handleAccessoryClick = () => {
// //     setShowComingSoon(true);
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="cooling-camera-enclosure-with-cooling-jacket-main">
// //         <h1 className="cooling-camera-enclosure-with-cooling-jacket-title">
// //           {t("CameraEnclosure.title")}
// //         </h1>

// //         <div className="cooling-image-container">
// //           <img
// //             src={cameravisionenclosureImage}
// //             alt={t("CameraEnclosure.mainImageAlt")}
// //             className="cooling-main-image"
// //             draggable={false}
// //             loading="eager"
// //           />
// //         </div>

// //         <div className="cooling-information-container">
// //           <p className="cooling-information-text">
// //             {t("CameraEnclosure.description")}
// //           </p>
// //         </div>

// //         <nav id="cooling-navbar" ref={navbarRef} className="cooling-product-nav reveal-on-scroll">
// //           <div className="cooling-nav-button-wrapper">
// //             <button
// //               onClick={() => handleNavClick("key-features")}
// //               aria-current={activeSection === "key-features" ? "page" : undefined}
// //               className={`cooling-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
// //             >
// //               {t("CameraEnclosure.nav.keyFeatures")}
// //             </button>
// //             <button
// //               onClick={() => handleNavClick("product")}
// //               aria-current={activeSection === "product" ? "page" : undefined}
// //               className={`cooling-nav-tab ${activeSection === "product" ? "active" : ""}`}
// //             >
// //               {t("CameraEnclosure.nav.product")}
// //             </button>
// //             <button
// //               onClick={() => handleNavClick("technical")}
// //               aria-current={activeSection === "technical" ? "page" : undefined}
// //               className={`cooling-nav-tab ${activeSection === "technical" ? "active" : ""}`}
// //             >
// //               {t("CameraEnclosure.nav.technical")}
// //             </button>
// //             <button
// //               onClick={() => handleNavClick("accessories")}
// //               aria-current={activeSection === "accessories" ? "page" : undefined}
// //               className={`cooling-nav-tab ${activeSection === "accessories" ? "active" : ""}`}
// //             >
// //               {t("CameraEnclosure.nav.accessories")}
// //             </button>
// //             <button
// //               onClick={() => handleNavClick("gallery")}
// //               aria-current={activeSection === "gallery" ? "page" : undefined}
// //               className={`cooling-nav-tab ${activeSection === "gallery" ? "active" : ""}`}
// //             >
// //               {t("CameraEnclosure.nav.gallery")}
// //             </button>
// //           </div>
// //         </nav>

// //         <section ref={keyFeaturesSectionRef} className="cooling-section reveal-on-scroll">
// //           <h2 className="cooling-key-features-title">
// //             {t("CameraEnclosure.sectionTitles.keyFeatures")}
// //           </h2>
// //           <div className="cooling-key-features-container">
// //             <ul className="cooling-key-features-list">
// //               {[
// //                 t("CameraEnclosure.features.supportSizes"),
// //                 t("CameraEnclosure.features.compatibleBrands"),
// //                 t("CameraEnclosure.features.highTemp"),
// //                 t("CameraEnclosure.features.airCurtain"),
// //                 t("CameraEnclosure.features.ip68Cable"),
// //                 t("CameraEnclosure.features.finish"),
// //                 t("CameraEnclosure.features.mountingIncluded"),
// //                 t("CameraEnclosure.features.xlOption"),
// //               ].map((feature, i) => (
// //                 <li key={i} className="cooling-key-feature-item">
// //                   {feature}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </section>

// //         <hr className="cooling-section-divider" />

// //         <section ref={ProductSectionRef} className="cooling-section reveal-on-scroll" id="cooling-product">
// //           <h3 className="cooling-model-structure-title">
// //             {t("CameraEnclosure.sectionTitles.product")}
// //           </h3>

// //           <div className="cooling-model-structure-table-container">
// //             <table className="cooling-product-table">
// //               <colgroup>
// //                 <col style={{ width: "100px" }} />
// //                 <col style={{ width: "80px" }} />
// //                 <col style={{ width: "100px" }} />
// //                 <col style={{ width: "70px" }} />
// //                 <col style={{ width: "70px" }} />
// //                 <col style={{ width: "65px" }} />
// //                 <col style={{ width: "30px" }} />
// //                 <col style={{ width: "30px" }} />
// //                 <col style={{ width: "30px" }} />
// //                 <col style={{ width: "30px" }} />
// //               </colgroup>

// //               <thead>
// //                 <tr>
// //                   <th>{t("CameraEnclosure.tableHeaders.modelNo")}</th>
// //                   <th>{t("CameraEnclosure.tableHeaders.compatibleCameraSize")}</th>
// //                   <th colSpan="3">{t("CameraEnclosure.tableHeaders.lensHousing")}</th>
// //                   <th>{t("CameraEnclosure.tableHeaders.totalWeight")}</th>
// //                   <th>A</th>
// //                   <th>B</th>
// //                   <th>C</th>
// //                   <th>D</th>
// //                 </tr>
// //                 <tr>
// //                   <th></th>
// //                   <th></th>
// //                   <th>{t("CameraEnclosure.tableHeaders.housingSize")}</th>
// //                   <th>{t("CameraEnclosure.tableHeaders.maxAllowableOD")}</th>
// //                   <th>{t("CameraEnclosure.tableHeaders.maxAllowableLength")}</th>
// //                   <th></th>
// //                   <th></th>
// //                   <th></th>
// //                   <th></th>
// //                   <th></th>
// //                 </tr>
// //               </thead>

// //               {/* MVCEWC29X29.V2 Group */}
// //               <tbody className="cooling-group-peach">
// //                 <tr>
// //                   <td rowSpan="7" className="cooling-model-bold">MVCEWC29X29.V2</td>
// //                   <td rowSpan="7">29mm X 29mm</td>
// //                   <td className="cooling-housing-size">78 mm x 45 mm</td>
// //                   <td className="cooling-max-od">70 mm</td>
// //                   <td className="cooling-max-length">42 mm</td>
// //                   <td rowSpan="7" className="cooling-weight-bold">5 to 7 Kg</td>
// //                   <td className="cooling-dim-a">100</td>
// //                   <td className="cooling-dim-b">80</td>
// //                   <td className="cooling-dim-c">78</td>
// //                   <td className="cooling-dim-d">150</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">78 mm x 55 mm</td>
// //                   <td className="cooling-max-od">70 mm</td>
// //                   <td className="cooling-max-length">52 mm</td>
// //                   <td className="cooling-dim-a">100</td>
// //                   <td className="cooling-dim-b">80</td>
// //                   <td className="cooling-dim-c">78</td>
// //                   <td className="cooling-dim-d">160</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">78 mm x 65 mm</td>
// //                   <td className="cooling-max-od">70 mm</td>
// //                   <td className="cooling-max-length">62 mm</td>
// //                   <td className="cooling-dim-a">100</td>
// //                   <td className="cooling-dim-b">80</td>
// //                   <td className="cooling-dim-c">78</td>
// //                   <td className="cooling-dim-d">170</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">78 mm x 75 mm</td>
// //                   <td className="cooling-max-od">70 mm</td>
// //                   <td className="cooling-max-length">72 mm</td>
// //                   <td className="cooling-dim-a">100</td>
// //                   <td className="cooling-dim-b">80</td>
// //                   <td className="cooling-dim-c">78</td>
// //                   <td className="cooling-dim-d">180</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">78 mm x 85 mm</td>
// //                   <td className="cooling-max-od">70 mm</td>
// //                   <td className="cooling-max-length">82 mm</td>
// //                   <td className="cooling-dim-a">100</td>
// //                   <td className="cooling-dim-b">80</td>
// //                   <td className="cooling-dim-c">78</td>
// //                   <td className="cooling-dim-d">190</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">78 mm x 95 mm</td>
// //                   <td className="cooling-max-od">70 mm</td>
// //                   <td className="cooling-max-length">92 mm</td>
// //                   <td className="cooling-dim-a">100</td>
// //                   <td className="cooling-dim-b">80</td>
// //                   <td className="cooling-dim-c">78</td>
// //                   <td className="cooling-dim-d">200</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">78 mm x 105 mm</td>
// //                   <td className="cooling-max-od">70 mm</td>
// //                   <td className="cooling-max-length">102 mm</td>
// //                   <td className="cooling-dim-a">100</td>
// //                   <td className="cooling-dim-b">80</td>
// //                   <td className="cooling-dim-c">78</td>
// //                   <td className="cooling-dim-d">210</td>
// //                 </tr>
// //               </tbody>

// //               {/* MVCEWC40X30.V1 Group */}
// //               <tbody className="cooling-group-white">
// //                 <tr>
// //                   <td rowSpan="7" className="cooling-model-bold">MVCEWC40X30.V1</td>
// //                   <td rowSpan="7">40mm X 30mm</td>
// //                   <td className="cooling-housing-size">100 mm x 45 mm</td>
// //                   <td className="cooling-max-od">85 mm</td>
// //                   <td className="cooling-max-length">-</td>
// //                   <td rowSpan="7" className="cooling-weight-bold">6 to 9 Kg</td>
// //                   <td className="cooling-dim-a">110</td>
// //                   <td className="cooling-dim-b">95</td>
// //                   <td className="cooling-dim-c">88</td>
// //                   <td className="cooling-dim-d">150</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">100 mm x 55 mm</td>
// //                   <td className="cooling-max-od">85 mm</td>
// //                   <td className="cooling-max-length">-</td>
// //                   <td className="cooling-dim-a">110</td>
// //                   <td className="cooling-dim-b">95</td>
// //                   <td className="cooling-dim-c">88</td>
// //                   <td className="cooling-dim-d">160</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">100 mm x 65 mm</td>
// //                   <td className="cooling-max-od">85 mm</td>
// //                   <td className="cooling-max-length">-</td>
// //                   <td className="cooling-dim-a">110</td>
// //                   <td className="cooling-dim-b">95</td>
// //                   <td className="cooling-dim-c">88</td>
// //                   <td className="cooling-dim-d">170</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">100 mm x 75 mm</td>
// //                   <td className="cooling-max-od">85 mm</td>
// //                   <td className="cooling-max-length">-</td>
// //                   <td className="cooling-dim-a">110</td>
// //                   <td className="cooling-dim-b">95</td>
// //                   <td className="cooling-dim-c">88</td>
// //                   <td className="cooling-dim-d">180</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">100 mm x 85 mm</td>
// //                   <td className="cooling-max-od">85 mm</td>
// //                   <td className="cooling-max-length">-</td>
// //                   <td className="cooling-dim-a">110</td>
// //                   <td className="cooling-dim-b">95</td>
// //                   <td className="cooling-dim-c">88</td>
// //                   <td className="cooling-dim-d">190</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">100 mm x 95 mm</td>
// //                   <td className="cooling-max-od">85 mm</td>
// //                   <td className="cooling-max-length">-</td>
// //                   <td className="cooling-dim-a">110</td>
// //                   <td className="cooling-dim-b">95</td>
// //                   <td className="cooling-dim-c">88</td>
// //                   <td className="cooling-dim-d">200</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">100 mm x 105 mm</td>
// //                   <td className="cooling-max-od">85 mm</td>
// //                   <td className="cooling-max-length">-</td>
// //                   <td className="cooling-dim-a">110</td>
// //                   <td className="cooling-dim-b">95</td>
// //                   <td className="cooling-dim-c">88</td>
// //                   <td className="cooling-dim-d">210</td>
// //                 </tr>
// //               </tbody>

// //               {/* MVCEWC60X60.V2 Group */}
// //               <tbody className="cooling-group-peach">
// //                 <tr>
// //                   <td rowSpan="7" className="cooling-model-bold">MVCEWC60X60.V2</td>
// //                   <td rowSpan="7">60mm X 60mm</td>
// //                   <td className="cooling-housing-size">140 mm x 75 mm</td>
// //                   <td className="cooling-max-od">100 mm</td>
// //                   <td className="cooling-max-length">50 mm</td>
// //                   <td rowSpan="7" className="cooling-weight-bold">12 to 15 Kg</td>
// //                   <td className="cooling-dim-a">194</td>
// //                   <td className="cooling-dim-b">130</td>
// //                   <td className="cooling-dim-c">140</td>
// //                   <td className="cooling-dim-d">325</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">140 mm x 85 mm</td>
// //                   <td className="cooling-max-od">100 mm</td>
// //                   <td className="cooling-max-length">60 mm</td>
// //                   <td className="cooling-dim-a">194</td>
// //                   <td className="cooling-dim-b">130</td>
// //                   <td className="cooling-dim-c">140</td>
// //                   <td className="cooling-dim-d">335</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">140 mm x 95 mm</td>
// //                   <td className="cooling-max-od">100 mm</td>
// //                   <td className="cooling-max-length">70 mm</td>
// //                   <td className="cooling-dim-a">194</td>
// //                   <td className="cooling-dim-b">130</td>
// //                   <td className="cooling-dim-c">140</td>
// //                   <td className="cooling-dim-d">345</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">140 mm x 105 mm</td>
// //                   <td className="cooling-max-od">100 mm</td>
// //                   <td className="cooling-max-length">80 mm</td>
// //                   <td className="cooling-dim-a">194</td>
// //                   <td className="cooling-dim-b">130</td>
// //                   <td className="cooling-dim-c">140</td>
// //                   <td className="cooling-dim-d">355</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">140 mm x 115 mm</td>
// //                   <td className="cooling-max-od">100 mm</td>
// //                   <td className="cooling-max-length">90 mm</td>
// //                   <td className="cooling-dim-a">194</td>
// //                   <td className="cooling-dim-b">130</td>
// //                   <td className="cooling-dim-c">140</td>
// //                   <td className="cooling-dim-d">365</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">140 mm x 125 mm</td>
// //                   <td className="cooling-max-od">100 mm</td>
// //                   <td className="cooling-max-length">100 mm</td>
// //                   <td className="cooling-dim-a">194</td>
// //                   <td className="cooling-dim-b">130</td>
// //                   <td className="cooling-dim-c">140</td>
// //                   <td className="cooling-dim-d">375</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="cooling-housing-size">140 mm x 135 mm</td>
// //                   <td className="cooling-max-od">100 mm</td>
// //                   <td className="cooling-max-length">110 mm</td>
// //                   <td className="cooling-dim-a">194</td>
// //                   <td className="cooling-dim-b">130</td>
// //                   <td className="cooling-dim-c">140</td>
// //                   <td className="cooling-dim-d">385</td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //         </section>

// //         <hr className="cooling-section-divider" />

// //         <section ref={technicalInfoSectionRef} className="cooling-section reveal-on-scroll">
// //           <h2 className="cooling-technical-info-title">
// //             {t("CameraEnclosure.sectionTitles.technical")}
// //           </h2>
// //           <div className="cooling-model-structure-table-container">
// //             <table className="cooling-model-structure-table">
// //               <tbody>
// //                 {technicalSpecs.map((spec, i) => (
// //                   <tr key={i}>
// //                     <td>{spec.label}</td>
// //                     <td>{spec.value}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           <div className="cooling-dimension-overview reveal-on-scroll">
// //             <h3>{t("CameraEnclosure.sectionTitles.dimension")}</h3>
// //             <div className="cooling-dimension-image-container cooling-fixed-dimension-single">
// //               <img
// //                 src={CameraEnclosureWithCoolingJacketDimension}
// //                 alt={t("CameraEnclosure.dimensionAlt")}
// //                 loading="lazy"
// //                 draggable={false}
// //               />
// //             </div>
// //           </div>
// //         </section>

// //         <hr className="cooling-section-divider" />

// //         <section ref={accessoriesSectionRef} className="cooling-section reveal-on-scroll">
// //           <h2 className="cooling-section-title">
// //             {t("CameraEnclosure.sectionTitles.accessories")}
// //           </h2>
// //           <div className="cooling-model-structure-table-container">
// //             <table className="cooling-model-structure-table">
// //               <thead>
// //                 <tr>
// //                   <th>{t("CameraEnclosure.tableHeaders.accessory")}</th>
// //                   <th>{t("CameraEnclosure.tableHeaders.moreDetails")}</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {accessories.map((acc, i) => (
// //                   <tr key={i}>
// //                     <td>{acc.name}</td>
// //                     <td className="cooling-detail-cell">
// //                       <div className="cooling-detail-button-wrapper">
// //                         <button
// //                           className="cooling-detail-button"
// //                           onClick={handleAccessoryClick}
// //                           aria-label={t("CameraEnclosure.accessoryAriaLabel", { name: acc.name })}
// //                         >
// //                           <img src={info} alt={t("CameraEnclosure.moreInfoAlt")} />
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </section>

// //         <hr className="cooling-section-divider" />

// //         <section
// //           ref={gallerySectionRef}
// //           id="cooling-gallery"
// //           className="cooling-gallery-section reveal-on-scroll"
// //           tabIndex={-1}
// //           aria-label={t("CameraEnclosure.galleryAriaLabel")}
// //         >
// //           <h2 className="cooling-section-title-3">
// //             {t("CameraEnclosure.sectionTitles.gallery")}
// //           </h2>
// //           <div className={`cooling-gallery-container ${loadGallery ? "loaded" : ""}`}>
// //             <Gallery
// //               galleryImages={galleryImages}
// //               loadGallery={loadGallery}
// //               onImageClick={handleImageClick}
// //             />
// //           </div>
// //         </section>

// //         {selectedImage && (
// //           <ImageZoomModal
// //             selectedImage={selectedImage}
// //             zoomLevel={zoomLevel}
// //             position={position}
// //             isDragging={isDragging}
// //             zoomContainerRef={zoomContainerRef}
// //             onClose={handleCloseModal}
// //             onZoomIn={handleZoomIn}
// //             onZoomOut={handleZoomOut}
// //             onMouseDown={handleMouseDown}
// //             onMouseMove={handleMouseMove}
// //             onMouseUp={handleMouseUp}
// //             onTouchStart={handleTouchStart}
// //             onTouchMove={handleTouchMove}
// //             onTouchEnd={handleTouchEnd}
// //           />
// //         )}

// //         {showComingSoon && <ComingSoon onClose={() => setShowComingSoon(false)} />}

// //         <SideBar navigate={navigate} />

// //         <div className="cooling-back-to-products-container">
// //           <button
// //             onClick={() => navigate("/dashboardTwo")}
// //             className="cooling-premium-btn cooling-action-btn cooling-pulse"
// //           >
// //             {t("CameraEnclosure.backToProducts")}
// //           </button>
// //         </div>
// //       </main>
// //     </>
// //   );
// // };

// // export default CameraEnclosureWithCoolingJacket;

// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar";
// import Gallery from "./Gallery";
// import ImageZoomModal from "./ImageZoomModal";
// import SideBar from "./Sidebar";
// import "../Styles/CameraVisionEnclosureWithCoolingJacket.css";
// import info from "../assets/CameraVisionEnclosure/info_2.png";
// import cameravisionenclosureImage from "../assets/CameraVisionEnclosure/camera-vision-enclosure-with-cooling-jacket.jpg";
// import CameraEnclosureWithCoolingJacketDimension from "../assets/Dimension/camera-vision-enclosure-with-cooling-jacket-dimension.jpg";
// import WithCoolingjacketGallery1 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(1).png";
// import WithCoolingjacketGallery2 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(15).png";
// import WithCoolingjacketGallery3 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(3).png";
// import WithCoolingjacketGallery4 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(4).png";
// import WithCoolingjacketGallery5 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(5).png";
// import WithCoolingjacketGallery6 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(6).png";
// import WithCoolingjacketGallery7 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(7).png";
// import WithCoolingjacketGallery8 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(8).png";
// import WithCoolingjacketGallery9 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(9).png";
// import WithCoolingjacketGallery10 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(10).png";

// // Not Available Component
// const NotAvailable = ({ onClose }) => {
//   return (
//     <div className="cooling-coming-soon-overlay">
//       <div className="cooling-coming-soon-modal">
//         <button className="cooling-coming-soon-close" onClick={onClose}>×</button>
//         <div className="cooling-coming-soon-content">
//           <h2>Not Available</h2>
//           <p>This accessory page is currently not available.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CameraEnclosureWithCoolingJacket = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//   const [loadGallery, setLoadGallery] = useState(false);
//   const [activeSection, setActiveSection] = useState("key-features");
//   const [showComingSoon, setShowComingSoon] = useState(false);

//   const zoomContainerRef = useRef(null);
//   const keyFeaturesSectionRef = useRef(null);
//   const ProductSectionRef = useRef(null);
//   const technicalInfoSectionRef = useRef(null);
//   const accessoriesSectionRef = useRef(null);
//   const gallerySectionRef = useRef(null);
//   const navbarRef = useRef(null);
//   const hasScrolledToProduct = useRef(false);

//   const galleryImages = [
//     WithCoolingjacketGallery1, WithCoolingjacketGallery2, WithCoolingjacketGallery3,
//     WithCoolingjacketGallery4, WithCoolingjacketGallery5, WithCoolingjacketGallery6,
//     WithCoolingjacketGallery7, WithCoolingjacketGallery8, WithCoolingjacketGallery9,
//     WithCoolingjacketGallery10
//   ];

//   const technicalSpecs = [
//     { label: t("CameraEnclosure.specs.operatingTemp"), value: t("CameraEnclosure.specs.operatingTempValue") },
//     { label: t("CameraEnclosure.specs.finish"), value: t("CameraEnclosure.specs.finishValue") },
//     { label: t("CameraEnclosure.specs.cableEntries"), value: t("CameraEnclosure.specs.cableEntriesValue") },
//     { label: t("CameraEnclosure.specs.windowCleaning"), value: t("CameraEnclosure.specs.windowCleaningValue") },
//   ];

//   const accessories = [
//     { name: t("CameraEnclosure.accessories.mountingBracket"), route: "/product/with-cooling-jacket/mounting-bracket" },
//     { name: t("CameraEnclosure.accessories.airCurtain"), route: "/product/with-cooling-jacket/air-curtain" },
//     { name: t("CameraEnclosure.accessories.waterChiller"), route: "/product/with-cooling-jacket/water-chiller" },
//   ];

//   useEffect(() => {
//     const preload = async () => {
//       await Promise.all(
//         galleryImages.map((src) => {
//           return new Promise((resolve) => {
//             const img = new Image();
//             img.src = src;
//             img.onload = img.onerror = resolve;
//           });
//         })
//       );
//       setLoadGallery(true);
//     };
//     preload();
//   }, []);

//   useEffect(() => {
//     const nav = document.getElementById("cooling-navbar");
//     if (!nav) return;
//     const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const shouldScrollToProduct =
//       (location.state?.scrollTo === "product" || location.hash === "#product") &&
//       ProductSectionRef.current &&
//       !hasScrolledToProduct.current;

//     if (shouldScrollToProduct) {
//       hasScrolledToProduct.current = true;
//       setTimeout(() => {
//         const navHeight = document.getElementById("cooling-navbar")?.offsetHeight || 80;
//         const top =
//           ProductSectionRef.current.getBoundingClientRect().top +
//           window.pageYOffset -
//           navHeight -
//           30;
//         window.scrollTo({ top, behavior: "smooth" });
//         navigate(location.pathname, { replace: true, state: {} });
//       }, 300);
//     }
//   }, [location, navigate]);

//   const calculateScrollOffset = () => {
//     const width = window.innerWidth;
//     if (width <= 319) return 75;
//     if (width <= 479) return 80;
//     if (width <= 779) return 85;
//     if (width <= 979) return 95;
//     return 80;
//   };

//   const handleNavClick = (section) => {
//     setActiveSection(section);
//     const refs = {
//       "key-features": keyFeaturesSectionRef,
//       product: ProductSectionRef,
//       technical: technicalInfoSectionRef,
//       accessories: accessoriesSectionRef,
//       gallery: gallerySectionRef,
//     };
//     const targetRef = refs[section];
//     if (!targetRef?.current) return;
//     const scrollOffset = calculateScrollOffset();
//     const top = targetRef.current.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
//     window.scrollTo({ top, behavior: "smooth" });
//   };

//   const handleImageClick = (imgSrc) => {
//     setSelectedImage(imgSrc);
//     setZoomLevel(1);
//     setPosition({ x: 0, y: 0 });
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

//   const handleAccessoryClick = () => {
//     setShowComingSoon(true);
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="cooling-camera-enclosure-with-cooling-jacket-main">
//         <h1 className="cooling-camera-enclosure-with-cooling-jacket-title">
//           {t("CameraEnclosure.title")}
//         </h1>

//         <div className="cooling-image-container">
//           <img
//             src={cameravisionenclosureImage}
//             alt={t("CameraEnclosure.mainImageAlt")}
//             className="cooling-main-image"
//             draggable={false}
//             loading="eager"
//           />
//         </div>

//         <div className="cooling-information-container">
//           <p className="cooling-information-text">
//             {t("CameraEnclosure.description")}
//           </p>
//         </div>

//         <nav id="cooling-navbar" ref={navbarRef} className="cooling-product-nav reveal-on-scroll">
//           <div className="cooling-nav-button-wrapper">
//             <button
//               onClick={() => handleNavClick("key-features")}
//               aria-current={activeSection === "key-features" ? "page" : undefined}
//               className={`cooling-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
//             >
//               {t("CameraEnclosure.nav.keyFeatures")}
//             </button>
//             <button
//               onClick={() => handleNavClick("product")}
//               aria-current={activeSection === "product" ? "page" : undefined}
//               className={`cooling-nav-tab ${activeSection === "product" ? "active" : ""}`}
//             >
//               {t("CameraEnclosure.nav.product")}
//             </button>
//             <button
//               onClick={() => handleNavClick("technical")}
//               aria-current={activeSection === "technical" ? "page" : undefined}
//               className={`cooling-nav-tab ${activeSection === "technical" ? "active" : ""}`}
//             >
//               {t("CameraEnclosure.nav.technical")}
//             </button>
//             <button
//               onClick={() => handleNavClick("accessories")}
//               aria-current={activeSection === "accessories" ? "page" : undefined}
//               className={`cooling-nav-tab ${activeSection === "accessories" ? "active" : ""}`}
//             >
//               {t("CameraEnclosure.nav.accessories")}
//             </button>
//             <button
//               onClick={() => handleNavClick("gallery")}
//               aria-current={activeSection === "gallery" ? "page" : undefined}
//               className={`cooling-nav-tab ${activeSection === "gallery" ? "active" : ""}`}
//             >
//               {t("CameraEnclosure.nav.gallery")}
//             </button>
//           </div>
//         </nav>

//         <section ref={keyFeaturesSectionRef} className="cooling-section reveal-on-scroll">
//           <h2 className="cooling-key-features-title">
//             {t("CameraEnclosure.sectionTitles.keyFeatures")}
//           </h2>
//           <div className="cooling-key-features-container">
//             <ul className="cooling-key-features-list">
//               {[
//                 t("CameraEnclosure.features.supportSizes"),
//                 t("CameraEnclosure.features.compatibleBrands"),
//                 t("CameraEnclosure.features.highTemp"),
//                 t("CameraEnclosure.features.airCurtain"),
//                 t("CameraEnclosure.features.ip68Cable"),
//                 t("CameraEnclosure.features.finish"),
//                 t("CameraEnclosure.features.mountingIncluded"),
//                 t("CameraEnclosure.features.xlOption"),
//               ].map((feature, i) => (
//                 <li key={i} className="cooling-key-feature-item">
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         <hr className="cooling-section-divider" />

//         <section ref={ProductSectionRef} className="cooling-section reveal-on-scroll" id="cooling-product">
//           <h3 className="cooling-model-structure-title">
//             {t("CameraEnclosure.sectionTitles.product")}
//           </h3>

//           <div className="cooling-model-structure-table-container">
//             <table className="cooling-product-table">
//               <colgroup>
//                 <col style={{ width: "100px" }} />
//                 <col style={{ width: "80px" }} />
//                 <col style={{ width: "100px" }} />
//                 <col style={{ width: "70px" }} />
//                 <col style={{ width: "70px" }} />
//                 <col style={{ width: "65px" }} />
//                 <col style={{ width: "30px" }} />
//                 <col style={{ width: "30px" }} />
//                 <col style={{ width: "30px" }} />
//                 <col style={{ width: "30px" }} />
//               </colgroup>

//               <thead>
//                 <tr>
//                   <th>{t("CameraEnclosure.tableHeaders.modelNo")}</th>
//                   <th>{t("CameraEnclosure.tableHeaders.compatibleCameraSize")}</th>
//                   <th colSpan="3">{t("CameraEnclosure.tableHeaders.lensHousing")}</th>
//                   <th>{t("CameraEnclosure.tableHeaders.totalWeight")}</th>
//                   <th>A</th>
//                   <th>B</th>
//                   <th>C</th>
//                   <th>D</th>
//                 </tr>
//                 <tr>
//                   <th></th>
//                   <th></th>
//                   <th>{t("CameraEnclosure.tableHeaders.housingSize")}</th>
//                   <th>{t("CameraEnclosure.tableHeaders.maxAllowableOD")}</th>
//                   <th>{t("CameraEnclosure.tableHeaders.maxAllowableLength")}</th>
//                   <th></th>
//                   <th></th>
//                   <th></th>
//                   <th></th>
//                   <th></th>
//                 </tr>
//               </thead>

//               {/* MVCEWC29X29.V2 Group */}
//               <tbody className="cooling-group-peach">
//                 <tr>
//                   <td rowSpan="7" className="cooling-model-bold">MVCEWC29X29.V2</td>
//                   <td rowSpan="7">29mm X 29mm</td>
//                   <td className="cooling-housing-size">78 mm x 45 mm</td>
//                   <td className="cooling-max-od">70 mm</td>
//                   <td className="cooling-max-length">42 mm</td>
//                   <td rowSpan="7" className="cooling-weight-bold">5 to 7 Kg</td>
//                   <td className="cooling-dim-a">100</td>
//                   <td className="cooling-dim-b">80</td>
//                   <td className="cooling-dim-c">78</td>
//                   <td className="cooling-dim-d">150</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">78 mm x 55 mm</td>
//                   <td className="cooling-max-od">70 mm</td>
//                   <td className="cooling-max-length">52 mm</td>
//                   <td className="cooling-dim-a">100</td>
//                   <td className="cooling-dim-b">80</td>
//                   <td className="cooling-dim-c">78</td>
//                   <td className="cooling-dim-d">160</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">78 mm x 65 mm</td>
//                   <td className="cooling-max-od">70 mm</td>
//                   <td className="cooling-max-length">62 mm</td>
//                   <td className="cooling-dim-a">100</td>
//                   <td className="cooling-dim-b">80</td>
//                   <td className="cooling-dim-c">78</td>
//                   <td className="cooling-dim-d">170</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">78 mm x 75 mm</td>
//                   <td className="cooling-max-od">70 mm</td>
//                   <td className="cooling-max-length">72 mm</td>
//                   <td className="cooling-dim-a">100</td>
//                   <td className="cooling-dim-b">80</td>
//                   <td className="cooling-dim-c">78</td>
//                   <td className="cooling-dim-d">180</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">78 mm x 85 mm</td>
//                   <td className="cooling-max-od">70 mm</td>
//                   <td className="cooling-max-length">82 mm</td>
//                   <td className="cooling-dim-a">100</td>
//                   <td className="cooling-dim-b">80</td>
//                   <td className="cooling-dim-c">78</td>
//                   <td className="cooling-dim-d">190</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">78 mm x 95 mm</td>
//                   <td className="cooling-max-od">70 mm</td>
//                   <td className="cooling-max-length">92 mm</td>
//                   <td className="cooling-dim-a">100</td>
//                   <td className="cooling-dim-b">80</td>
//                   <td className="cooling-dim-c">78</td>
//                   <td className="cooling-dim-d">200</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">78 mm x 105 mm</td>
//                   <td className="cooling-max-od">70 mm</td>
//                   <td className="cooling-max-length">102 mm</td>
//                   <td className="cooling-dim-a">100</td>
//                   <td className="cooling-dim-b">80</td>
//                   <td className="cooling-dim-c">78</td>
//                   <td className="cooling-dim-d">210</td>
//                 </tr>
//               </tbody>

//               {/* MVCEWC40X30.V1 Group */}
//               <tbody className="cooling-group-white">
//                 <tr>
//                   <td rowSpan="7" className="cooling-model-bold">MVCEWC40X30.V1</td>
//                   <td rowSpan="7">40mm X 30mm</td>
//                   <td className="cooling-housing-size">100 mm x 45 mm</td>
//                   <td className="cooling-max-od">85 mm</td>
//                   <td className="cooling-max-length">-</td>
//                   <td rowSpan="7" className="cooling-weight-bold">6 to 9 Kg</td>
//                   <td className="cooling-dim-a">110</td>
//                   <td className="cooling-dim-b">95</td>
//                   <td className="cooling-dim-c">88</td>
//                   <td className="cooling-dim-d">150</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">100 mm x 55 mm</td>
//                   <td className="cooling-max-od">85 mm</td>
//                   <td className="cooling-max-length">-</td>
//                   <td className="cooling-dim-a">110</td>
//                   <td className="cooling-dim-b">95</td>
//                   <td className="cooling-dim-c">88</td>
//                   <td className="cooling-dim-d">160</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">100 mm x 65 mm</td>
//                   <td className="cooling-max-od">85 mm</td>
//                   <td className="cooling-max-length">-</td>
//                   <td className="cooling-dim-a">110</td>
//                   <td className="cooling-dim-b">95</td>
//                   <td className="cooling-dim-c">88</td>
//                   <td className="cooling-dim-d">170</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">100 mm x 75 mm</td>
//                   <td className="cooling-max-od">85 mm</td>
//                   <td className="cooling-max-length">-</td>
//                   <td className="cooling-dim-a">110</td>
//                   <td className="cooling-dim-b">95</td>
//                   <td className="cooling-dim-c">88</td>
//                   <td className="cooling-dim-d">180</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">100 mm x 85 mm</td>
//                   <td className="cooling-max-od">85 mm</td>
//                   <td className="cooling-max-length">-</td>
//                   <td className="cooling-dim-a">110</td>
//                   <td className="cooling-dim-b">95</td>
//                   <td className="cooling-dim-c">88</td>
//                   <td className="cooling-dim-d">190</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">100 mm x 95 mm</td>
//                   <td className="cooling-max-od">85 mm</td>
//                   <td className="cooling-max-length">-</td>
//                   <td className="cooling-dim-a">110</td>
//                   <td className="cooling-dim-b">95</td>
//                   <td className="cooling-dim-c">88</td>
//                   <td className="cooling-dim-d">200</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">100 mm x 105 mm</td>
//                   <td className="cooling-max-od">85 mm</td>
//                   <td className="cooling-max-length">-</td>
//                   <td className="cooling-dim-a">110</td>
//                   <td className="cooling-dim-b">95</td>
//                   <td className="cooling-dim-c">88</td>
//                   <td className="cooling-dim-d">210</td>
//                 </tr>
//               </tbody>

//               {/* MVCEWC60X60.V2 Group */}
//               <tbody className="cooling-group-peach">
//                 <tr>
//                   <td rowSpan="7" className="cooling-model-bold">MVCEWC60X60.V2</td>
//                   <td rowSpan="7">60mm X 60mm</td>
//                   <td className="cooling-housing-size">140 mm x 75 mm</td>
//                   <td className="cooling-max-od">100 mm</td>
//                   <td className="cooling-max-length">50 mm</td>
//                   <td rowSpan="7" className="cooling-weight-bold">12 to 15 Kg</td>
//                   <td className="cooling-dim-a">194</td>
//                   <td className="cooling-dim-b">130</td>
//                   <td className="cooling-dim-c">140</td>
//                   <td className="cooling-dim-d">325</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">140 mm x 85 mm</td>
//                   <td className="cooling-max-od">100 mm</td>
//                   <td className="cooling-max-length">60 mm</td>
//                   <td className="cooling-dim-a">194</td>
//                   <td className="cooling-dim-b">130</td>
//                   <td className="cooling-dim-c">140</td>
//                   <td className="cooling-dim-d">335</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">140 mm x 95 mm</td>
//                   <td className="cooling-max-od">100 mm</td>
//                   <td className="cooling-max-length">70 mm</td>
//                   <td className="cooling-dim-a">194</td>
//                   <td className="cooling-dim-b">130</td>
//                   <td className="cooling-dim-c">140</td>
//                   <td className="cooling-dim-d">345</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">140 mm x 105 mm</td>
//                   <td className="cooling-max-od">100 mm</td>
//                   <td className="cooling-max-length">80 mm</td>
//                   <td className="cooling-dim-a">194</td>
//                   <td className="cooling-dim-b">130</td>
//                   <td className="cooling-dim-c">140</td>
//                   <td className="cooling-dim-d">355</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">140 mm x 115 mm</td>
//                   <td className="cooling-max-od">100 mm</td>
//                   <td className="cooling-max-length">90 mm</td>
//                   <td className="cooling-dim-a">194</td>
//                   <td className="cooling-dim-b">130</td>
//                   <td className="cooling-dim-c">140</td>
//                   <td className="cooling-dim-d">365</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">140 mm x 125 mm</td>
//                   <td className="cooling-max-od">100 mm</td>
//                   <td className="cooling-max-length">100 mm</td>
//                   <td className="cooling-dim-a">194</td>
//                   <td className="cooling-dim-b">130</td>
//                   <td className="cooling-dim-c">140</td>
//                   <td className="cooling-dim-d">375</td>
//                 </tr>
//                 <tr>
//                   <td className="cooling-housing-size">140 mm x 135 mm</td>
//                   <td className="cooling-max-od">100 mm</td>
//                   <td className="cooling-max-length">110 mm</td>
//                   <td className="cooling-dim-a">194</td>
//                   <td className="cooling-dim-b">130</td>
//                   <td className="cooling-dim-c">140</td>
//                   <td className="cooling-dim-d">385</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <hr className="cooling-section-divider" />

//         <section ref={technicalInfoSectionRef} className="cooling-section reveal-on-scroll">
//           <h2 className="cooling-technical-info-title">
//             {t("CameraEnclosure.sectionTitles.technical")}
//           </h2>
//           <div className="cooling-model-structure-table-container">
//             <table className="cooling-model-structure-table">
//               <tbody>
//                 {technicalSpecs.map((spec, i) => (
//                   <tr key={i}>
//                     <td>{spec.label}</td>
//                     <td>{spec.value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="cooling-dimension-overview reveal-on-scroll">
//             <h3>{t("CameraEnclosure.sectionTitles.dimension")}</h3>
//             <div className="cooling-dimension-image-container cooling-fixed-dimension-single">
//               <img
//                 src={CameraEnclosureWithCoolingJacketDimension}
//                 alt={t("CameraEnclosure.dimensionAlt")}
//                 loading="lazy"
//                 draggable={false}
//               />
//             </div>
//           </div>
//         </section>

//         <hr className="cooling-section-divider" />

//         <section ref={accessoriesSectionRef} className="cooling-section reveal-on-scroll">
//           <h2 className="cooling-section-title">
//             {t("CameraEnclosure.sectionTitles.accessories")}
//           </h2>
//           <div className="cooling-model-structure-table-container">
//             <table className="cooling-model-structure-table">
//               <thead>
//                 <tr>
//                   <th>{t("CameraEnclosure.tableHeaders.accessory")}</th>
//                   <th>{t("CameraEnclosure.tableHeaders.moreDetails")}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {accessories.map((acc, i) => (
//                   <tr key={i}>
//                     <td>{acc.name}</td>
//                     <td className="cooling-detail-cell">
//                       <div className="cooling-detail-button-wrapper">
//                         <button
//                           className="cooling-detail-button"
//                           onClick={handleAccessoryClick}
//                           aria-label={t("CameraEnclosure.accessoryAriaLabel", { name: acc.name })}
//                         >
//                           <img src={info} alt={t("CameraEnclosure.moreInfoAlt")} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <hr className="cooling-section-divider" />

//         <section
//           ref={gallerySectionRef}
//           id="cooling-gallery"
//           className="cooling-gallery-section reveal-on-scroll"
//           tabIndex={-1}
//           aria-label={t("CameraEnclosure.galleryAriaLabel")}
//         >
//           <h2 className="cooling-section-title-3">
//             {t("CameraEnclosure.sectionTitles.gallery")}
//           </h2>
//           <div className={`cooling-gallery-container ${loadGallery ? "loaded" : ""}`}>
//             <Gallery
//               galleryImages={galleryImages}
//               loadGallery={loadGallery}
//               onImageClick={handleImageClick}
//             />
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

//         {showComingSoon && <NotAvailable onClose={() => setShowComingSoon(false)} />}

//         <SideBar navigate={navigate} />

//         <div className="cooling-back-to-products-container">
//           <button
//             onClick={() => navigate("/dashboardTwo")}
//             className="cooling-premium-btn cooling-action-btn cooling-pulse"
//           >
//             {t("CameraEnclosure.backToProducts")}
//           </button>
//         </div>
//       </main>
//     </>
//   );
// };

// export default CameraEnclosureWithCoolingJacket;



import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import ImageZoomModal from "./ImageZoomModal";
import SideBar from "./Sidebar";
import "../Styles/CameraVisionEnclosureWithCoolingJacket.css";
import info from "../assets/CameraVisionEnclosure/info_2.png";
import cameravisionenclosureImage from "../assets/CameraVisionEnclosure/camera-vision-enclosure-with-cooling-jacket.jpg";
import CameraEnclosureWithCoolingJacketDimension from "../assets/Dimension/camera-vision-enclosure-with-cooling-jacket-dimension.jpg";
import WithCoolingjacketGallery1 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(1).png";
import WithCoolingjacketGallery2 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(15).png";
import WithCoolingjacketGallery3 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(3).png";
import WithCoolingjacketGallery4 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(4).png";
import WithCoolingjacketGallery5 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(5).png";
import WithCoolingjacketGallery6 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(6).png";
import WithCoolingjacketGallery7 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(7).png";
import WithCoolingjacketGallery8 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(8).png";
import WithCoolingjacketGallery9 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(9).png";
import WithCoolingjacketGallery10 from "../assets/EnclosureWithCoolingJacketGallery/Cooling-Jacket(10).png";

// Not Available Component
const NotAvailable = ({ onClose }) => {
  return (
    <div className="cooling-coming-soon-overlay">
      <div className="cooling-coming-soon-modal">
        <button className="cooling-coming-soon-close" onClick={onClose}>×</button>
        <div className="cooling-coming-soon-content">
          <h2>Not Available</h2>
          <p>This accessory page is currently not available.</p>
        </div>
      </div>
    </div>
  );
};

const CameraEnclosureWithCoolingJacket = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [loadGallery, setLoadGallery] = useState(false);
  const [activeSection, setActiveSection] = useState("key-features");
  const [showComingSoon, setShowComingSoon] = useState(false);

  const zoomContainerRef = useRef(null);
  const keyFeaturesSectionRef = useRef(null);
  const ProductSectionRef = useRef(null);
  const technicalInfoSectionRef = useRef(null);
  const accessoriesSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const navbarRef = useRef(null);
  const hasScrolledToProduct = useRef(false);

  const galleryImages = [
    WithCoolingjacketGallery1, WithCoolingjacketGallery2, WithCoolingjacketGallery3,
    WithCoolingjacketGallery4, WithCoolingjacketGallery5, WithCoolingjacketGallery6,
    WithCoolingjacketGallery7, WithCoolingjacketGallery8, WithCoolingjacketGallery9,
    WithCoolingjacketGallery10
  ];

  const technicalSpecs = [
    { label: t("CameraEnclosure.specs.operatingTemp"), value: t("CameraEnclosure.specs.operatingTempValue") },
    { label: t("CameraEnclosure.specs.finish"), value: t("CameraEnclosure.specs.finishValue") },
    { label: t("CameraEnclosure.specs.cableEntries"), value: t("CameraEnclosure.specs.cableEntriesValue") },
    { label: t("CameraEnclosure.specs.windowCleaning"), value: t("CameraEnclosure.specs.windowCleaningValue") },
  ];

  const accessories = [
    { name: t("CameraEnclosure.accessories.mountingBracket"), route: "/product/with-cooling-jacket/mounting-bracket" },
    { name: t("CameraEnclosure.accessories.airCurtain"), route: "/product/with-cooling-jacket/air-curtain" },
    { name: t("CameraEnclosure.accessories.waterChiller"), route: "/product/with-cooling-jacket/water-chiller" },
  ];

  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        galleryImages.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = resolve;
          });
        })
      );
      setLoadGallery(true);
    };
    preload();
  }, []);

  useEffect(() => {
    const nav = document.getElementById("cooling-navbar");
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const shouldScrollToProduct =
      (location.state?.scrollTo === "product" || location.hash === "#product") &&
      ProductSectionRef.current &&
      !hasScrolledToProduct.current;

    if (shouldScrollToProduct) {
      hasScrolledToProduct.current = true;
      setTimeout(() => {
        const navHeight = document.getElementById("cooling-navbar")?.offsetHeight || 80;
        const top =
          ProductSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight -
          30;
        window.scrollTo({ top, behavior: "smooth" });
        navigate(location.pathname, { replace: true, state: {} });
      }, 300);
    }
  }, [location, navigate]);

  const calculateScrollOffset = () => {
    const width = window.innerWidth;
    if (width <= 319) return 75;
    if (width <= 479) return 80;
    if (width <= 779) return 85;
    if (width <= 979) return 95;
    return 80;
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    const refs = {
      "key-features": keyFeaturesSectionRef,
      product: ProductSectionRef,
      technical: technicalInfoSectionRef,
      accessories: accessoriesSectionRef,
      gallery: gallerySectionRef,
    };
    const targetRef = refs[section];
    if (!targetRef?.current) return;
    const scrollOffset = calculateScrollOffset();
    const top = targetRef.current.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
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

  const handleAccessoryClick = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <Navbar />

      <main className="cooling-camera-enclosure-with-cooling-jacket-main">
        <h1 className="cooling-camera-enclosure-with-cooling-jacket-title">
          {t("CameraEnclosure.title")}
        </h1>

        <div className="cooling-image-container">
          <img
            src={cameravisionenclosureImage}
            alt={t("CameraEnclosure.mainImageAlt")}
            className="cooling-main-image"
            draggable={false}
            loading="eager"
          />
        </div>

        <div className="cooling-information-container">
          <p className="cooling-information-text">
            {t("CameraEnclosure.description")}
          </p>
        </div>

        <nav id="cooling-navbar" ref={navbarRef} className="cooling-product-nav reveal-on-scroll">
          <div className="cooling-nav-button-wrapper">
            <button
              onClick={() => handleNavClick("key-features")}
              aria-current={activeSection === "key-features" ? "page" : undefined}
              className={`cooling-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
            >
              {t("CameraEnclosure.nav.keyFeatures")}
            </button>
            <button
              onClick={() => handleNavClick("product")}
              aria-current={activeSection === "product" ? "page" : undefined}
              className={`cooling-nav-tab ${activeSection === "product" ? "active" : ""}`}
            >
              {t("CameraEnclosure.nav.product")}
            </button>
            <button
              onClick={() => handleNavClick("technical")}
              aria-current={activeSection === "technical" ? "page" : undefined}
              className={`cooling-nav-tab ${activeSection === "technical" ? "active" : ""}`}
            >
              {t("CameraEnclosure.nav.technical")}
            </button>
            <button
              onClick={() => handleNavClick("accessories")}
              aria-current={activeSection === "accessories" ? "page" : undefined}
              className={`cooling-nav-tab ${activeSection === "accessories" ? "active" : ""}`}
            >
              {t("CameraEnclosure.nav.accessories")}
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              aria-current={activeSection === "gallery" ? "page" : undefined}
              className={`cooling-nav-tab ${activeSection === "gallery" ? "active" : ""}`}
            >
              {t("CameraEnclosure.nav.gallery")}
            </button>
          </div>
        </nav>

        <section ref={keyFeaturesSectionRef} className="cooling-section reveal-on-scroll">
          <h2 className="cooling-key-features-title">
            {t("CameraEnclosure.sectionTitles.keyFeatures")}
          </h2>
          <div className="cooling-key-features-container">
            <ul className="cooling-key-features-list">
              {[
                t("CameraEnclosure.features.supportSizes"),
                t("CameraEnclosure.features.compatibleBrands"),
                t("CameraEnclosure.features.highTemp"),
                t("CameraEnclosure.features.airCurtain"),
                t("CameraEnclosure.features.ip68Cable"),
                t("CameraEnclosure.features.finish"),
                t("CameraEnclosure.features.mountingIncluded"),
                t("CameraEnclosure.features.xlOption"),
              ].map((feature, i) => (
                <li key={i} className="cooling-key-feature-item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="cooling-section-divider" />

        <section ref={ProductSectionRef} className="cooling-section reveal-on-scroll" id="cooling-product">
          <h3 className="cooling-model-structure-title">
            {t("CameraEnclosure.sectionTitles.product")}
          </h3>

          <div className="cooling-model-structure-table-container">
            <table className="cooling-product-table">
              <colgroup>
                <col style={{ width: "100px" }} />
                <col style={{ width: "80px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "65px" }} />
                <col style={{ width: "30px" }} />
                <col style={{ width: "30px" }} />
                <col style={{ width: "30px" }} />
                <col style={{ width: "30px" }} />
              </colgroup>

              <thead>
                <tr>
                  {/* These cells span both header rows */}
                  <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                    {t("CameraEnclosure.tableHeaders.modelNo")}
                  </th>
                  <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                    {t("CameraEnclosure.tableHeaders.compatibleCameraSize")}
                  </th>
                  {/* Lens Housing spans 3 sub-columns in row 1 only */}
                  <th colSpan={3}>
                    {t("CameraEnclosure.tableHeaders.lensHousing")}
                  </th>
                  <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                    {t("CameraEnclosure.tableHeaders.totalWeight")}
                  </th>
                  <th rowSpan={2} style={{ verticalAlign: "middle" }}>A</th>
                  <th rowSpan={2} style={{ verticalAlign: "middle" }}>B</th>
                  <th rowSpan={2} style={{ verticalAlign: "middle" }}>C</th>
                  <th rowSpan={2} style={{ verticalAlign: "middle" }}>D</th>
                </tr>
                <tr>
                  {/* Only the 3 Lens Housing sub-columns go here */}
                  <th>{t("CameraEnclosure.tableHeaders.housingSize")}</th>
                  <th>{t("CameraEnclosure.tableHeaders.maxAllowableOD")}</th>
                  <th>{t("CameraEnclosure.tableHeaders.maxAllowableLength")}</th>
                </tr>
              </thead>

              {/* MVCEWC29X29.V2 Group */}
              <tbody className="cooling-group-peach">
                <tr>
                  <td rowSpan="7" className="cooling-model-bold">MVCEWC29X29.V2</td>
                  <td rowSpan="7">29mm X 29mm</td>
                  <td className="cooling-housing-size">78 mm x 45 mm</td>
                  <td className="cooling-max-od">70 mm</td>
                  <td className="cooling-max-length">42 mm</td>
                  <td rowSpan="7" className="cooling-weight-bold">5 to 7 Kg</td>
                  <td className="cooling-dim-a">100</td>
                  <td className="cooling-dim-b">80</td>
                  <td className="cooling-dim-c">78</td>
                  <td className="cooling-dim-d">150</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">78 mm x 55 mm</td>
                  <td className="cooling-max-od">70 mm</td>
                  <td className="cooling-max-length">52 mm</td>
                  <td className="cooling-dim-a">100</td>
                  <td className="cooling-dim-b">80</td>
                  <td className="cooling-dim-c">78</td>
                  <td className="cooling-dim-d">160</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">78 mm x 65 mm</td>
                  <td className="cooling-max-od">70 mm</td>
                  <td className="cooling-max-length">62 mm</td>
                  <td className="cooling-dim-a">100</td>
                  <td className="cooling-dim-b">80</td>
                  <td className="cooling-dim-c">78</td>
                  <td className="cooling-dim-d">170</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">78 mm x 75 mm</td>
                  <td className="cooling-max-od">70 mm</td>
                  <td className="cooling-max-length">72 mm</td>
                  <td className="cooling-dim-a">100</td>
                  <td className="cooling-dim-b">80</td>
                  <td className="cooling-dim-c">78</td>
                  <td className="cooling-dim-d">180</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">78 mm x 85 mm</td>
                  <td className="cooling-max-od">70 mm</td>
                  <td className="cooling-max-length">82 mm</td>
                  <td className="cooling-dim-a">100</td>
                  <td className="cooling-dim-b">80</td>
                  <td className="cooling-dim-c">78</td>
                  <td className="cooling-dim-d">190</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">78 mm x 95 mm</td>
                  <td className="cooling-max-od">70 mm</td>
                  <td className="cooling-max-length">92 mm</td>
                  <td className="cooling-dim-a">100</td>
                  <td className="cooling-dim-b">80</td>
                  <td className="cooling-dim-c">78</td>
                  <td className="cooling-dim-d">200</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">78 mm x 105 mm</td>
                  <td className="cooling-max-od">70 mm</td>
                  <td className="cooling-max-length">102 mm</td>
                  <td className="cooling-dim-a">100</td>
                  <td className="cooling-dim-b">80</td>
                  <td className="cooling-dim-c">78</td>
                  <td className="cooling-dim-d">210</td>
                </tr>
              </tbody>

              {/* MVCEWC40X30.V1 Group */}
              <tbody className="cooling-group-white">
                <tr>
                  <td rowSpan="7" className="cooling-model-bold">MVCEWC40X30.V1</td>
                  <td rowSpan="7">40mm X 30mm</td>
                  <td className="cooling-housing-size">100 mm x 45 mm</td>
                  <td className="cooling-max-od">85 mm</td>
                  <td className="cooling-max-length">-</td>
                  <td rowSpan="7" className="cooling-weight-bold">6 to 9 Kg</td>
                  <td className="cooling-dim-a">110</td>
                  <td className="cooling-dim-b">95</td>
                  <td className="cooling-dim-c">88</td>
                  <td className="cooling-dim-d">150</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">100 mm x 55 mm</td>
                  <td className="cooling-max-od">85 mm</td>
                  <td className="cooling-max-length">-</td>
                  <td className="cooling-dim-a">110</td>
                  <td className="cooling-dim-b">95</td>
                  <td className="cooling-dim-c">88</td>
                  <td className="cooling-dim-d">160</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">100 mm x 65 mm</td>
                  <td className="cooling-max-od">85 mm</td>
                  <td className="cooling-max-length">-</td>
                  <td className="cooling-dim-a">110</td>
                  <td className="cooling-dim-b">95</td>
                  <td className="cooling-dim-c">88</td>
                  <td className="cooling-dim-d">170</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">100 mm x 75 mm</td>
                  <td className="cooling-max-od">85 mm</td>
                  <td className="cooling-max-length">-</td>
                  <td className="cooling-dim-a">110</td>
                  <td className="cooling-dim-b">95</td>
                  <td className="cooling-dim-c">88</td>
                  <td className="cooling-dim-d">180</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">100 mm x 85 mm</td>
                  <td className="cooling-max-od">85 mm</td>
                  <td className="cooling-max-length">-</td>
                  <td className="cooling-dim-a">110</td>
                  <td className="cooling-dim-b">95</td>
                  <td className="cooling-dim-c">88</td>
                  <td className="cooling-dim-d">190</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">100 mm x 95 mm</td>
                  <td className="cooling-max-od">85 mm</td>
                  <td className="cooling-max-length">-</td>
                  <td className="cooling-dim-a">110</td>
                  <td className="cooling-dim-b">95</td>
                  <td className="cooling-dim-c">88</td>
                  <td className="cooling-dim-d">200</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">100 mm x 105 mm</td>
                  <td className="cooling-max-od">85 mm</td>
                  <td className="cooling-max-length">-</td>
                  <td className="cooling-dim-a">110</td>
                  <td className="cooling-dim-b">95</td>
                  <td className="cooling-dim-c">88</td>
                  <td className="cooling-dim-d">210</td>
                </tr>
              </tbody>

              {/* MVCEWC60X60.V2 Group */}
              <tbody className="cooling-group-peach">
                <tr>
                  <td rowSpan="7" className="cooling-model-bold">MVCEWC60X60.V2</td>
                  <td rowSpan="7">60mm X 60mm</td>
                  <td className="cooling-housing-size">140 mm x 75 mm</td>
                  <td className="cooling-max-od">100 mm</td>
                  <td className="cooling-max-length">50 mm</td>
                  <td rowSpan="7" className="cooling-weight-bold">12 to 15 Kg</td>
                  <td className="cooling-dim-a">194</td>
                  <td className="cooling-dim-b">130</td>
                  <td className="cooling-dim-c">140</td>
                  <td className="cooling-dim-d">325</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">140 mm x 85 mm</td>
                  <td className="cooling-max-od">100 mm</td>
                  <td className="cooling-max-length">60 mm</td>
                  <td className="cooling-dim-a">194</td>
                  <td className="cooling-dim-b">130</td>
                  <td className="cooling-dim-c">140</td>
                  <td className="cooling-dim-d">335</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">140 mm x 95 mm</td>
                  <td className="cooling-max-od">100 mm</td>
                  <td className="cooling-max-length">70 mm</td>
                  <td className="cooling-dim-a">194</td>
                  <td className="cooling-dim-b">130</td>
                  <td className="cooling-dim-c">140</td>
                  <td className="cooling-dim-d">345</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">140 mm x 105 mm</td>
                  <td className="cooling-max-od">100 mm</td>
                  <td className="cooling-max-length">80 mm</td>
                  <td className="cooling-dim-a">194</td>
                  <td className="cooling-dim-b">130</td>
                  <td className="cooling-dim-c">140</td>
                  <td className="cooling-dim-d">355</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">140 mm x 115 mm</td>
                  <td className="cooling-max-od">100 mm</td>
                  <td className="cooling-max-length">90 mm</td>
                  <td className="cooling-dim-a">194</td>
                  <td className="cooling-dim-b">130</td>
                  <td className="cooling-dim-c">140</td>
                  <td className="cooling-dim-d">365</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">140 mm x 125 mm</td>
                  <td className="cooling-max-od">100 mm</td>
                  <td className="cooling-max-length">100 mm</td>
                  <td className="cooling-dim-a">194</td>
                  <td className="cooling-dim-b">130</td>
                  <td className="cooling-dim-c">140</td>
                  <td className="cooling-dim-d">375</td>
                </tr>
                <tr>
                  <td className="cooling-housing-size">140 mm x 135 mm</td>
                  <td className="cooling-max-od">100 mm</td>
                  <td className="cooling-max-length">110 mm</td>
                  <td className="cooling-dim-a">194</td>
                  <td className="cooling-dim-b">130</td>
                  <td className="cooling-dim-c">140</td>
                  <td className="cooling-dim-d">385</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="cooling-section-divider" />

        <section ref={technicalInfoSectionRef} className="cooling-section reveal-on-scroll">
          <h2 className="cooling-technical-info-title">
            {t("CameraEnclosure.sectionTitles.technical")}
          </h2>
          <div className="cooling-model-structure-table-container">
            <table className="cooling-model-structure-table">
              <tbody>
                {technicalSpecs.map((spec, i) => (
                  <tr key={i}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cooling-dimension-overview reveal-on-scroll">
            <h3>{t("CameraEnclosure.sectionTitles.dimension")}</h3>
            <div className="cooling-dimension-image-container cooling-fixed-dimension-single">
              <img
                src={CameraEnclosureWithCoolingJacketDimension}
                alt={t("CameraEnclosure.dimensionAlt")}
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <hr className="cooling-section-divider" />

        <section ref={accessoriesSectionRef} className="cooling-section reveal-on-scroll">
          <h2 className="cooling-section-title">
            {t("CameraEnclosure.sectionTitles.accessories")}
          </h2>
          <div className="cooling-model-structure-table-container">
            <table className="cooling-model-structure-table">
              <thead>
                <tr>
                  <th>{t("CameraEnclosure.tableHeaders.accessory")}</th>
                  <th>{t("CameraEnclosure.tableHeaders.moreDetails")}</th>
                </tr>
              </thead>
              <tbody>
                {accessories.map((acc, i) => (
                  <tr key={i}>
                    <td>{acc.name}</td>
                    <td className="cooling-detail-cell">
                      <div className="cooling-detail-button-wrapper">
                        <button
                          className="cooling-detail-button"
                          onClick={handleAccessoryClick}
                          aria-label={t("CameraEnclosure.accessoryAriaLabel", { name: acc.name })}
                        >
                          <img src={info} alt={t("CameraEnclosure.moreInfoAlt")} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="cooling-section-divider" />

        <section
          ref={gallerySectionRef}
          id="cooling-gallery"
          className="cooling-gallery-section reveal-on-scroll"
          tabIndex={-1}
          aria-label={t("CameraEnclosure.galleryAriaLabel")}
        >
          <h2 className="cooling-section-title-3">
            {t("CameraEnclosure.sectionTitles.gallery")}
          </h2>
          <div className={`cooling-gallery-container ${loadGallery ? "loaded" : ""}`}>
            <Gallery
              galleryImages={galleryImages}
              loadGallery={loadGallery}
              onImageClick={handleImageClick}
            />
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

        {showComingSoon && <NotAvailable onClose={() => setShowComingSoon(false)} />}

        <SideBar navigate={navigate} />

        <div className="cooling-back-to-products-container">
          <button
            onClick={() => navigate("/dashboardTwo")}
            className="cooling-premium-btn cooling-action-btn cooling-pulse"
          >
            {t("CameraEnclosure.backToProducts")}
          </button>
        </div>
      </main>
    </>
  );
};

export default CameraEnclosureWithCoolingJacket;