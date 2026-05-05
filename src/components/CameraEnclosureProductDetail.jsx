// // CameraEnclosureProductDetail.js
// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar";
// import SideBar from "./Sidebar";
// import "../Styles/CameraEnclosureProductDetail.css";
// import buyIcon from "../assets/icons/buy-icon.png";
// import cameravisionenclosureImage1 from "../assets/CameraVisionEnclosure/MVCE29X29V2.68.jpg";
// import cameravisionenclosureImage2 from "../assets/CameraVisionEnclosure/MVCE40X30V1.80.jpg";
// import cameravisionenclosureImage1Dimension from "../assets/Dimension/camera-vision-enclosure-68-dimension.jpg";
// import cameravisionenclosureImage2Dimension from "../assets/Dimension/camera-vision-enclosure-80-dimension.jpg";
// import CameraHousingWithCameraMounting from "../assets/CameraVisionEnclosure/camera-mounting.jpg";
// import CameraHousingWithCameraMounting80 from "../assets/CameraVisionEnclosure/camera-mounting-80.jpg";
// import lensHousing68 from "../assets/CameraVisionEnclosure/Lens-Housing.jpg";
// import lensHousing80 from "../assets/CameraVisionEnclosure/Lens-Housing-80.jpg";

// const CameraEnclosureProductDetail = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [activeSection, setActiveSection] = useState("camera-housing");

//   const productsSectionRef = useRef(null);
//   const cameraHousingSectionRef = useRef(null);
//   const lensHousingSectionRef = useRef(null);
//   const navbarRef = useRef(null);
//   const hasScrolledToProduct = useRef(false);

//   const modelType = location.state?.modelType || "MVCE29X29V2.68";

//   // Translated title (dynamic based on model)
//   const title = t(`CameraEnclosureProductDetail.models.${modelType.replace(/\./g, "_")}`, { defaultValue: modelType });

//   const productData = {
//     "MVCE29X29V2.68": {
//       mainImage: cameravisionenclosureImage1,
//       dimensionImage: cameravisionenclosureImage1Dimension,
//       mountingImage: CameraHousingWithCameraMounting,
//       mountingInfo: t("CameraEnclosureProductDetail.mountingInfo.68"),
//       specs: [
//         { label: t("CameraEnclosureProductDetail.specs.modelNumber"), value: "MVCE29X29V2.68" },
//         { label: t("CameraEnclosureProductDetail.specs.type"), value: t("CameraEnclosureProductDetail.specsValues.housingAccessory") },
//         { label: t("CameraEnclosureProductDetail.specs.housingSize"), value: "114 mm x 65 mm x 65 mm" },
//         { label: t("CameraEnclosureProductDetail.specs.weight"), value: "0.548 kg" },
//         { label: t("CameraEnclosureProductDetail.specs.operatingTemp"), value: "0 °C - 60 °C" },
//         { label: t("CameraEnclosureProductDetail.specs.protectionClass"), value: "IP67" },
//         { label: t("CameraEnclosureProductDetail.specs.housingType"), value: t("CameraEnclosureProductDetail.specsValues.machineVisionHousing") },
//         { label: t("CameraEnclosureProductDetail.specs.housingMaterial"), value: t("CameraEnclosureProductDetail.specsValues.anodizedAluminum") },
//         { label: t("CameraEnclosureProductDetail.specs.sealMaterial"), value: "EPDM / Silicone" },
//         { label: t("CameraEnclosureProductDetail.specs.maxLensOD"), value: "65 mm" },
//       ],
//       lensHousingImage: lensHousing68,
//       lensInfo: t("CameraEnclosureProductDetail.lensInfo.68"),
//       lensCompatibility: t("CameraEnclosureProductDetail.lensCompatibility.68"),
//       lensSolution: t("CameraEnclosureProductDetail.lensSolution"),
//       cameraHousingModel: "MVCE29X29V2.68",
//       lensVariantSpecs: [
//         { model: "MVCELH68.055", size: "68 mm x 55 mm", weight: "0.128 kg", maxOD: "50 mm", maxLength: "25 mm" },
//         { model: "MVCELH68.065", size: "68 mm x 65 mm", weight: "0.141 kg", maxOD: "50 mm", maxLength: "35 mm" },
//         { model: "MVCELH68.075", size: "68 mm x 75 mm", weight: "0.154 kg", maxOD: "50 mm", maxLength: "45 mm" },
//         { model: "MVCELH68.085", size: "68 mm x 85 mm", weight: "0.167 kg", maxOD: "50 mm", maxLength: "55 mm" },
//         { model: "MVCELH68.095", size: "68 mm x 95 mm", weight: "0.181 kg", maxOD: "50 mm", maxLength: "65 mm" },
//         { model: "MVCELH68.105", size: "68 mm x 105 mm", weight: "0.194 kg", maxOD: "50 mm", maxLength: "75 mm" },
//         { model: "MVCELH68.115", size: "68 mm x 115 mm", weight: "0.207 kg", maxOD: "50 mm", maxLength: "85 mm" },
//         { model: "MVCELH68.125", size: "68 mm x 125 mm", weight: "0.220 kg", maxOD: "50 mm", maxLength: "95 mm" },
//       ],
//       lensCommonSpecs: [
//         { label: t("CameraEnclosureProductDetail.specs.type"), value: t("CameraEnclosureProductDetail.specsValues.housingAccessory") },
//         { label: t("CameraEnclosureProductDetail.specs.operatingTemp"), value: "0 °C - 60 °C" },
//         { label: t("CameraEnclosureProductDetail.specs.protectionClass"), value: "IP67" },
//         { label: t("CameraEnclosureProductDetail.specs.housingType"), value: t("CameraEnclosureProductDetail.specsValues.lensHousing") },
//         { label: t("CameraEnclosureProductDetail.specs.housingMaterial"), value: t("CameraEnclosureProductDetail.specsValues.anodizedAluminum") },
//         { label: t("CameraEnclosureProductDetail.specs.sealMaterial"), value: "EPDM / Silicone" },
//         { label: t("CameraEnclosureProductDetail.specs.windowMaterial"), value: t("CameraEnclosureProductDetail.specsValues.glass") },
//       ],
//     },
//     "MVCE40X30V1.80": {
//       mainImage: cameravisionenclosureImage2,
//       dimensionImage: cameravisionenclosureImage2Dimension,
//       mountingImage: CameraHousingWithCameraMounting80,
//       mountingInfo: t("CameraEnclosureProductDetail.mountingInfo.80"),
//       specs: [
//         { label: t("CameraEnclosureProductDetail.specs.modelNumber"), value: "MVCE40X30V1.80" },
//         { label: t("CameraEnclosureProductDetail.specs.type"), value: t("CameraEnclosureProductDetail.specsValues.housingAccessory") },
//         { label: t("CameraEnclosureProductDetail.specs.housingSize"), value: t("CameraEnclosureProductDetail.tbd") },
//         { label: t("CameraEnclosureProductDetail.specs.weight"), value: t("CameraEnclosureProductDetail.tbd") },
//         { label: t("CameraEnclosureProductDetail.specs.operatingTemp"), value: "0 °C - 60 °C" },
//         { label: t("CameraEnclosureProductDetail.specs.protectionClass"), value: "IP67" },
//         { label: t("CameraEnclosureProductDetail.specs.housingType"), value: t("CameraEnclosureProductDetail.specsValues.machineVisionHousing") },
//         { label: t("CameraEnclosureProductDetail.specs.housingMaterial"), value: t("CameraEnclosureProductDetail.specsValues.anodizedAluminum") },
//         { label: t("CameraEnclosureProductDetail.specs.sealMaterial"), value: "EPDM / Silicone" },
//         { label: t("CameraEnclosureProductDetail.specs.maxLensOD"), value: "80 mm" },
//       ],
//       lensHousingImage: lensHousing80,
//       lensInfo: t("CameraEnclosureProductDetail.lensInfo.80"),
//       lensCompatibility: t("CameraEnclosureProductDetail.lensCompatibility.80"),
//       lensSolution: t("CameraEnclosureProductDetail.lensSolution"),
//       cameraHousingModel: "MVCE40X30V1.80",
//       lensVariantSpecs: [
//         { model: "MVCELH80.055", size: "80 mm x 55 mm", weight: "0.189 kg", maxOD: "62 mm", maxLength: "25 mm" },
//         { model: "MVCELH80.065", size: "80 mm x 65 mm", weight: "0.205 kg", maxOD: "62 mm", maxLength: "35 mm" },
//         { model: "MVCELH80.075", size: "80 mm x 75 mm", weight: "0.214 kg", maxOD: "62 mm", maxLength: "45 mm" },
//         { model: "MVCELH80.085", size: "80 mm x 85 mm", weight: "0.228 kg", maxOD: "62 mm", maxLength: "55 mm" },
//         { model: "MVCELH80.095", size: "80 mm x 95 mm", weight: "0.268 kg", maxOD: "62 mm", maxLength: "65 mm" },
//         { model: "MVCELH80.105", size: "80 mm x 105 mm", weight: "0.282 kg", maxOD: "62 mm", maxLength: "75 mm" },
//         { model: "MVCELH80.115", size: "80 mm x 115 mm", weight: "0.312 kg", maxOD: "62 mm", maxLength: "85 mm" },
//         { model: "MVCELH80.125", size: "80 mm x 125 mm", weight: "0.328 kg", maxOD: "62 mm", maxLength: "95 mm" },
//       ],
//       lensCommonSpecs: [
//         { label: t("CameraEnclosureProductDetail.specs.type"), value: t("CameraEnclosureProductDetail.specsValues.housingAccessory") },
//         { label: t("CameraEnclosureProductDetail.specs.operatingTemp"), value: "0 °C - 60 °C" },
//         { label: t("CameraEnclosureProductDetail.specs.protectionClass"), value: "IP67" },
//         { label: t("CameraEnclosureProductDetail.specs.housingType"), value: t("CameraEnclosureProductDetail.specsValues.lensHousing") },
//         { label: t("CameraEnclosureProductDetail.specs.housingMaterial"), value: t("CameraEnclosureProductDetail.specsValues.anodizedAluminum") },
//         { label: t("CameraEnclosureProductDetail.specs.sealMaterial"), value: "EPDM / Silicone" },
//         { label: t("CameraEnclosureProductDetail.specs.windowMaterial"), value: t("CameraEnclosureProductDetail.specsValues.glass") },
//       ],
//     },
//   };

//   const data = productData[modelType] || productData["MVCE29X29V2.68"];

//   const {
//     mainImage,
//     dimensionImage,
//     mountingImage,
//     mountingInfo,
//     specs,
//     lensHousingImage,
//     lensInfo,
//     lensCompatibility,
//     lensSolution,
//     cameraHousingModel,
//     lensVariantSpecs = [],
//     lensCommonSpecs = [],
//   } = data;

//   const calculateScrollOffset = () => {
//     const width = window.innerWidth;
//     if (width <= 319) return 75;
//     if (width <= 479) return 80;
//     if (width <= 779) return 85;
//     if (width <= 979) return 95;
//     return 80;
//   };

//   useEffect(() => {
//     const nav = document.getElementById("detail-navbar");
//     if (!nav) return;
//     const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Add this useEffect to handle scrolling to product section when returning from buy/enquire forms
//   useEffect(() => {
//     const shouldScrollToProduct =
//       (location.state?.scrollTo === "product" || location.hash === "#product") &&
//       productsSectionRef.current &&
//       !hasScrolledToProduct.current;

//     if (shouldScrollToProduct) {
//       hasScrolledToProduct.current = true;

//       setTimeout(() => {
//         const navHeight = document.getElementById("detail-navbar")?.offsetHeight || 80;
//         const top =
//           productsSectionRef.current.getBoundingClientRect().top +
//           window.pageYOffset -
//           navHeight -
//           30;

//         window.scrollTo({ top, behavior: "smooth" });

//         navigate(location.pathname, { replace: true, state: {} });
//       }, 500); // Increased timeout to ensure the DOM is fully rendered
//     }
//   }, [location, navigate]);

//   // Fallback for hash only (in case state is lost)
//   useEffect(() => {
//     if (location.hash === "#product" && productsSectionRef.current && !hasScrolledToProduct.current) {
//       hasScrolledToProduct.current = true;
//       setTimeout(() => {
//         const navHeight = document.getElementById("detail-navbar")?.offsetHeight || 80;
//         const top =
//           productsSectionRef.current.getBoundingClientRect().top +
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
//       "camera-housing": cameraHousingSectionRef,
//       "lens-housing": lensHousingSectionRef,
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

//   return (
//     <>
//       <Navbar />

//       <main className="detail-camera-enclosure-without-cooling-jacket-main-product">
//         <h1 className="detail-camera-enclosure-without-cooling-jacket-title-product">{title}</h1>

//         <div className="detail-dual-image-container">
//           <div className="detail-product-image-wrapper">
//             <img
//               src={mainImage}
//               alt={t("CameraEnclosureProductDetail.mainImageAlt", { model: modelType })}
//               className="detail-product-main-image"
//               draggable={false}
//               loading="eager"
//             />
//           </div>
//           <div className="detail-dimension-image-wrapper">
//             <img
//               src={dimensionImage}
//               alt={t("CameraEnclosureProductDetail.dimensionImageAlt", { model: modelType })}
//               className="detail-dimension-diagram-image"
//               draggable={false}
//               loading="eager"
//             />
//           </div>
//         </div>

//         {/* Sticky Navigation */}
//         <nav id="detail-navbar" ref={navbarRef} className="detail-product-nav reveal-on-scroll">
//           <div className="detail-nav-button-wrapper">
//             <button
//               onClick={() => handleNavClick("camera-housing")}
//               aria-current={activeSection === "camera-housing" ? "page" : undefined}
//               className={`detail-nav-tab ${activeSection === "camera-housing" ? "active" : ""}`}
//             >
//               {t("CameraEnclosureProductDetail.nav.cameraHousing")}
//             </button>
//             <button
//               onClick={() => handleNavClick("lens-housing")}
//               aria-current={activeSection === "lens-housing" ? "page" : undefined}
//               className={`detail-nav-tab ${activeSection === "lens-housing" ? "active" : ""}`}
//             >
//               {t("CameraEnclosureProductDetail.nav.lensHousing")}
//             </button>
//           </div>
//         </nav>

//         <section ref={cameraHousingSectionRef} id="detail-mount" className="detail-mounting-section reveal-on-scroll">
//           <h3 className="detail-mounting-title">
//             {t("CameraEnclosureProductDetail.sectionTitles.cameraHousing")}
//           </h3>
//           <div className="detail-information-container">
//             <p className="detail-information-text">{mountingInfo}</p>
//           </div>
//           <div className="detail-mounting-image-container">
//             <img
//               src={mountingImage}
//               alt={t("CameraEnclosureProductDetail.mountingImageAlt", { model: modelType })}
//               className="detail-product-mounting-image"
//               draggable={false}
//               loading="eager"
//             />
//           </div>

//           <div className="detail-tech-specs-container">
//             <h4 className="detail-tech-specs-title">
//               {t("CameraEnclosureProductDetail.sectionTitles.technicalSpecs")}
//             </h4>
//             <table className="detail-specs-table">
//               <tbody>
//                 {specs.map((item, index) => (
//                   <tr key={index}>
//                     <td className="detail-spec-label">{item.label}</td>
//                     <td className="detail-spec-value">{item.value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <hr className="detail-section-divider" />

//         <section ref={lensHousingSectionRef} id="detail-lens" className="detail-lens-section reveal-on-scroll">
//           <h3 className="detail-lens-title">
//             {t(`CameraEnclosureProductDetail.lensHousingTitle.${modelType.replace(/\./g, "_")}`)}
//           </h3>

//           <div className="detail-information-container">
//             <p className="detail-information-text">{lensInfo}</p>
//             <p className="detail-information-text detail-lens-highlight">{lensCompatibility}</p>
//             <p className="detail-information-text detail-lens-highlight">{lensSolution}</p>
//           </div>

//           <div className="detail-lens-image-container">
//             <img
//               src={lensHousingImage}
//               alt={t("CameraEnclosureProductDetail.lensHousingImageAlt")}
//               className="detail-lens-housing-image"
//               draggable={false}
//               loading="eager"
//             />
//           </div>

//           {/* PRODUCTS Table */}
//           <div ref={productsSectionRef} className="detail-tech-specs-container detail-wide-table" id="product">
//             <h4 className="detail-tech-specs-title">
//               {t("CameraEnclosureProductDetail.sectionTitles.products")}
//             </h4>
//             <div className="detail-table-wrapper">
//               <table className="detail-product-table">
//                 <thead>
//                   <tr>
//                     <th>{t("CameraEnclosureProductDetail.tableHeaders.cameraHousingModel")}</th>
//                     <th>{t("CameraEnclosureProductDetail.tableHeaders.lensHousingModel")}</th>
//                     <th>{t("CameraEnclosureProductDetail.tableHeaders.housingSize")}</th>
//                     <th>{t("CameraEnclosureProductDetail.tableHeaders.weight")}</th>
//                     <th>{t("CameraEnclosureProductDetail.tableHeaders.maxLensOD")}</th>
//                     <th>{t("CameraEnclosureProductDetail.tableHeaders.maxLensLength")}</th>
//                     <th>{t("CameraEnclosureProductDetail.tableHeaders.buyNow")}</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {lensVariantSpecs.length > 0 ? (
//                     lensVariantSpecs.map((item, i) => {
//                       const combinedModel = `${cameraHousingModel}--${item.model}`;
//                       return (
//                         <tr key={i}>
//                           <td>{cameraHousingModel}</td>
//                           <td>{item.model}</td>
//                           <td>{item.size}</td>
//                           <td>{item.weight}</td>
//                           <td>{item.maxOD}</td>
//                           <td>{item.maxLength}</td>
//                           <td>
//                             <button
//                               className="detail-buy-button"
//                               onClick={() =>
//                                 navigate(`/buy/${combinedModel}`, {
//                                   state: { 
//                                     from: location.pathname,
//                                     scrollTo: "product" // Add this to enable scroll back to product section
//                                   },
//                                 })
//                               }
//                               aria-label={t("CameraEnclosureProductDetail.buyAriaLabel", { model: item.model })}
//                             >
//                               <img src={buyIcon} alt={t("CameraEnclosureProductDetail.buyAlt")} className="buy-icon" />
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })
//                   ) : (
//                     <tr>
//                       <td colSpan="7" style={{ textAlign: "center", fontStyle: "italic", padding: "2rem" }}>
//                         {t("CameraEnclosureProductDetail.comingSoon")}
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Enquire Container */}
//           <div className="detail-enquire-container reveal-on-scroll">
//             <span>{t("CameraEnclosureProductDetail.enquireText")}</span>
//             <button
//               onClick={() => navigate("/enquire", { 
//                 state: { 
//                   productName: modelType, 
//                   from: location.pathname,
//                   scrollTo: "product" // Add this to enable scroll back to product section
//                 } 
//               })}
//               className="detail-enquire-btn"
//             >
//               {t("CameraEnclosureProductDetail.enquireButton")}
//             </button>
//           </div>

//           <div className="detail-tech-specs-container detail-wide-table">
//             <h4 className="detail-tech-specs-title">
//               {t("CameraEnclosureProductDetail.sectionTitles.technicalSpecs")}
//             </h4>
//             <table className="detail-specs-table">
//               <tbody>
//                 {lensCommonSpecs.map((item, i) => (
//                   <tr key={i}>
//                     <td className="detail-spec-label">{item.label}</td>
//                     <td className="detail-spec-value">{item.value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <SideBar navigate={navigate} />

//         <button
//           onClick={() =>
//             navigate("/product/without-cooling-jacket", {
//               state: { scrollTo: "product" },
//             })
//           }
//           className="detail-premium-btn detail-action-btn detail-pulse"
//         >
//           {t("CameraEnclosureProductDetail.backToProducts")}
//         </button>
//       </main>
//     </>
//   );
// };

// export default CameraEnclosureProductDetail;


// CameraEnclosureProductDetail.js
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import "../Styles/CameraEnclosureProductDetail.css";
import cameravisionenclosureImage1 from "../assets/CameraVisionEnclosure/MVCE29X29V2.68.jpg";
import cameravisionenclosureImage2 from "../assets/CameraVisionEnclosure/MVCE40X30V1.80.jpg";
import cameravisionenclosureImage1Dimension from "../assets/Dimension/camera-vision-enclosure-68-dimension.jpg";
import cameravisionenclosureImage2Dimension from "../assets/Dimension/camera-vision-enclosure-80-dimension.jpg";
import CameraHousingWithCameraMounting from "../assets/CameraVisionEnclosure/camera-mounting.jpg";
import CameraHousingWithCameraMounting80 from "../assets/CameraVisionEnclosure/camera-mounting-80.jpg";
import lensHousing68 from "../assets/CameraVisionEnclosure/Lens-Housing.jpg";
import lensHousing80 from "../assets/CameraVisionEnclosure/Lens-Housing-80.jpg";

const CameraEnclosureProductDetail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("camera-housing");

  const productsSectionRef = useRef(null);
  const cameraHousingSectionRef = useRef(null);
  const lensHousingSectionRef = useRef(null);
  const navbarRef = useRef(null);
  const hasScrolledToProduct = useRef(false);

  const modelType = location.state?.modelType || "MVCE29X29V2.68";

  // Translated title (dynamic based on model)
  const title = t(`CameraEnclosureProductDetail.models.${modelType.replace(/\./g, "_")}`, { defaultValue: modelType });

  const productData = {
    "MVCE29X29V2.68": {
      mainImage: cameravisionenclosureImage1,
      dimensionImage: cameravisionenclosureImage1Dimension,
      mountingImage: CameraHousingWithCameraMounting,
      mountingInfo: t("CameraEnclosureProductDetail.mountingInfo.68"),
      specs: [
        { label: t("CameraEnclosureProductDetail.specs.modelNumber"), value: "MVCE29X29V2.68" },
        { label: t("CameraEnclosureProductDetail.specs.type"), value: t("CameraEnclosureProductDetail.specsValues.housingAccessory") },
        { label: t("CameraEnclosureProductDetail.specs.housingSize"), value: "114 mm x 65 mm x 65 mm" },
        { label: t("CameraEnclosureProductDetail.specs.weight"), value: "0.548 kg" },
        { label: t("CameraEnclosureProductDetail.specs.operatingTemp"), value: "0 °C - 60 °C" },
        { label: t("CameraEnclosureProductDetail.specs.protectionClass"), value: "IP67" },
        { label: t("CameraEnclosureProductDetail.specs.housingType"), value: t("CameraEnclosureProductDetail.specsValues.machineVisionHousing") },
        { label: t("CameraEnclosureProductDetail.specs.housingMaterial"), value: t("CameraEnclosureProductDetail.specsValues.anodizedAluminum") },
        { label: t("CameraEnclosureProductDetail.specs.sealMaterial"), value: "EPDM / Silicone" },
        { label: t("CameraEnclosureProductDetail.specs.maxLensOD"), value: "65 mm" },
      ],
      lensHousingImage: lensHousing68,
      lensInfo: t("CameraEnclosureProductDetail.lensInfo.68"),
      lensCompatibility: t("CameraEnclosureProductDetail.lensCompatibility.68"),
      lensSolution: t("CameraEnclosureProductDetail.lensSolution"),
      cameraHousingModel: "MVCE29X29V2.68",
      lensVariantSpecs: [
        { model: "MVCELH68.055", size: "68 mm x 55 mm", weight: "0.128 kg", maxOD: "50 mm", maxLength: "25 mm" },
        { model: "MVCELH68.065", size: "68 mm x 65 mm", weight: "0.141 kg", maxOD: "50 mm", maxLength: "35 mm" },
        { model: "MVCELH68.075", size: "68 mm x 75 mm", weight: "0.154 kg", maxOD: "50 mm", maxLength: "45 mm" },
        { model: "MVCELH68.085", size: "68 mm x 85 mm", weight: "0.167 kg", maxOD: "50 mm", maxLength: "55 mm" },
        { model: "MVCELH68.095", size: "68 mm x 95 mm", weight: "0.181 kg", maxOD: "50 mm", maxLength: "65 mm" },
        { model: "MVCELH68.105", size: "68 mm x 105 mm", weight: "0.194 kg", maxOD: "50 mm", maxLength: "75 mm" },
        { model: "MVCELH68.115", size: "68 mm x 115 mm", weight: "0.207 kg", maxOD: "50 mm", maxLength: "85 mm" },
        { model: "MVCELH68.125", size: "68 mm x 125 mm", weight: "0.220 kg", maxOD: "50 mm", maxLength: "95 mm" },
      ],
      lensCommonSpecs: [
        { label: t("CameraEnclosureProductDetail.specs.type"), value: t("CameraEnclosureProductDetail.specsValues.housingAccessory") },
        { label: t("CameraEnclosureProductDetail.specs.operatingTemp"), value: "0 °C - 60 °C" },
        { label: t("CameraEnclosureProductDetail.specs.protectionClass"), value: "IP67" },
        { label: t("CameraEnclosureProductDetail.specs.housingType"), value: t("CameraEnclosureProductDetail.specsValues.lensHousing") },
        { label: t("CameraEnclosureProductDetail.specs.housingMaterial"), value: t("CameraEnclosureProductDetail.specsValues.anodizedAluminum") },
        { label: t("CameraEnclosureProductDetail.specs.sealMaterial"), value: "EPDM / Silicone" },
        { label: t("CameraEnclosureProductDetail.specs.windowMaterial"), value: t("CameraEnclosureProductDetail.specsValues.glass") },
      ],
    },
    "MVCE40X30V1.80": {
      mainImage: cameravisionenclosureImage2,
      dimensionImage: cameravisionenclosureImage2Dimension,
      mountingImage: CameraHousingWithCameraMounting80,
      mountingInfo: t("CameraEnclosureProductDetail.mountingInfo.80"),
      specs: [
        { label: t("CameraEnclosureProductDetail.specs.modelNumber"), value: "MVCE40X30V1.80" },
        { label: t("CameraEnclosureProductDetail.specs.type"), value: t("CameraEnclosureProductDetail.specsValues.housingAccessory") },
        { label: t("CameraEnclosureProductDetail.specs.housingSize"), value: t("CameraEnclosureProductDetail.tbd") },
        { label: t("CameraEnclosureProductDetail.specs.weight"), value: t("CameraEnclosureProductDetail.tbd") },
        { label: t("CameraEnclosureProductDetail.specs.operatingTemp"), value: "0 °C - 60 °C" },
        { label: t("CameraEnclosureProductDetail.specs.protectionClass"), value: "IP67" },
        { label: t("CameraEnclosureProductDetail.specs.housingType"), value: t("CameraEnclosureProductDetail.specsValues.machineVisionHousing") },
        { label: t("CameraEnclosureProductDetail.specs.housingMaterial"), value: t("CameraEnclosureProductDetail.specsValues.anodizedAluminum") },
        { label: t("CameraEnclosureProductDetail.specs.sealMaterial"), value: "EPDM / Silicone" },
        { label: t("CameraEnclosureProductDetail.specs.maxLensOD"), value: "80 mm" },
      ],
      lensHousingImage: lensHousing80,
      lensInfo: t("CameraEnclosureProductDetail.lensInfo.80"),
      lensCompatibility: t("CameraEnclosureProductDetail.lensCompatibility.80"),
      lensSolution: t("CameraEnclosureProductDetail.lensSolution"),
      cameraHousingModel: "MVCE40X30V1.80",
      lensVariantSpecs: [
        { model: "MVCELH80.055", size: "80 mm x 55 mm", weight: "0.189 kg", maxOD: "62 mm", maxLength: "25 mm" },
        { model: "MVCELH80.065", size: "80 mm x 65 mm", weight: "0.205 kg", maxOD: "62 mm", maxLength: "35 mm" },
        { model: "MVCELH80.075", size: "80 mm x 75 mm", weight: "0.214 kg", maxOD: "62 mm", maxLength: "45 mm" },
        { model: "MVCELH80.085", size: "80 mm x 85 mm", weight: "0.228 kg", maxOD: "62 mm", maxLength: "55 mm" },
        { model: "MVCELH80.095", size: "80 mm x 95 mm", weight: "0.268 kg", maxOD: "62 mm", maxLength: "65 mm" },
        { model: "MVCELH80.105", size: "80 mm x 105 mm", weight: "0.282 kg", maxOD: "62 mm", maxLength: "75 mm" },
        { model: "MVCELH80.115", size: "80 mm x 115 mm", weight: "0.312 kg", maxOD: "62 mm", maxLength: "85 mm" },
        { model: "MVCELH80.125", size: "80 mm x 125 mm", weight: "0.328 kg", maxOD: "62 mm", maxLength: "95 mm" },
      ],
      lensCommonSpecs: [
        { label: t("CameraEnclosureProductDetail.specs.type"), value: t("CameraEnclosureProductDetail.specsValues.housingAccessory") },
        { label: t("CameraEnclosureProductDetail.specs.operatingTemp"), value: "0 °C - 60 °C" },
        { label: t("CameraEnclosureProductDetail.specs.protectionClass"), value: "IP67" },
        { label: t("CameraEnclosureProductDetail.specs.housingType"), value: t("CameraEnclosureProductDetail.specsValues.lensHousing") },
        { label: t("CameraEnclosureProductDetail.specs.housingMaterial"), value: t("CameraEnclosureProductDetail.specsValues.anodizedAluminum") },
        { label: t("CameraEnclosureProductDetail.specs.sealMaterial"), value: "EPDM / Silicone" },
        { label: t("CameraEnclosureProductDetail.specs.windowMaterial"), value: t("CameraEnclosureProductDetail.specsValues.glass") },
      ],
    },
  };

  const data = productData[modelType] || productData["MVCE29X29V2.68"];

  const {
    mainImage,
    dimensionImage,
    mountingImage,
    mountingInfo,
    specs,
    lensHousingImage,
    lensInfo,
    lensCompatibility,
    lensSolution,
    cameraHousingModel,
    lensVariantSpecs = [],
    lensCommonSpecs = [],
  } = data;

  const calculateScrollOffset = () => {
    const width = window.innerWidth;
    if (width <= 319) return 75;
    if (width <= 479) return 80;
    if (width <= 779) return 85;
    if (width <= 979) return 95;
    return 80;
  };

  useEffect(() => {
    const nav = document.getElementById("detail-navbar");
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add this useEffect to handle scrolling to product section when returning from buy/enquire forms
  useEffect(() => {
    const shouldScrollToProduct =
      (location.state?.scrollTo === "product" || location.hash === "#product") &&
      productsSectionRef.current &&
      !hasScrolledToProduct.current;

    if (shouldScrollToProduct) {
      hasScrolledToProduct.current = true;

      setTimeout(() => {
        const navHeight = document.getElementById("detail-navbar")?.offsetHeight || 80;
        const top =
          productsSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight -
          30;

        window.scrollTo({ top, behavior: "smooth" });

        navigate(location.pathname, { replace: true, state: {} });
      }, 500); // Increased timeout to ensure the DOM is fully rendered
    }
  }, [location, navigate]);

  // Fallback for hash only (in case state is lost)
  useEffect(() => {
    if (location.hash === "#product" && productsSectionRef.current && !hasScrolledToProduct.current) {
      hasScrolledToProduct.current = true;
      setTimeout(() => {
        const navHeight = document.getElementById("detail-navbar")?.offsetHeight || 80;
        const top =
          productsSectionRef.current.getBoundingClientRect().top +
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
      "camera-housing": cameraHousingSectionRef,
      "lens-housing": lensHousingSectionRef,
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

  return (
    <>
      <Navbar />

      <main className="detail-camera-enclosure-without-cooling-jacket-main-product">
        <h1 className="detail-camera-enclosure-without-cooling-jacket-title-product">{title}</h1>

        <div className="detail-dual-image-container">
          <div className="detail-product-image-wrapper">
            <img
              src={mainImage}
              alt={t("CameraEnclosureProductDetail.mainImageAlt", { model: modelType })}
              className="detail-product-main-image"
              draggable={false}
              loading="eager"
            />
          </div>
          <div className="detail-dimension-image-wrapper">
            <img
              src={dimensionImage}
              alt={t("CameraEnclosureProductDetail.dimensionImageAlt", { model: modelType })}
              className="detail-dimension-diagram-image"
              draggable={false}
              loading="eager"
            />
          </div>
        </div>

        {/* Sticky Navigation */}
        <nav id="detail-navbar" ref={navbarRef} className="detail-product-nav reveal-on-scroll">
          <div className="detail-nav-button-wrapper">
            <button
              onClick={() => handleNavClick("camera-housing")}
              aria-current={activeSection === "camera-housing" ? "page" : undefined}
              className={`detail-nav-tab ${activeSection === "camera-housing" ? "active" : ""}`}
            >
              {t("CameraEnclosureProductDetail.nav.cameraHousing")}
            </button>
            <button
              onClick={() => handleNavClick("lens-housing")}
              aria-current={activeSection === "lens-housing" ? "page" : undefined}
              className={`detail-nav-tab ${activeSection === "lens-housing" ? "active" : ""}`}
            >
              {t("CameraEnclosureProductDetail.nav.lensHousing")}
            </button>
          </div>
        </nav>

        <section ref={cameraHousingSectionRef} id="detail-mount" className="detail-mounting-section reveal-on-scroll">
          <h3 className="detail-mounting-title">
            {t("CameraEnclosureProductDetail.sectionTitles.cameraHousing")}
          </h3>
          <div className="detail-information-container">
            <p className="detail-information-text">{mountingInfo}</p>
          </div>
          <div className="detail-mounting-image-container">
            <img
              src={mountingImage}
              alt={t("CameraEnclosureProductDetail.mountingImageAlt", { model: modelType })}
              className="detail-product-mounting-image"
              draggable={false}
              loading="eager"
            />
          </div>

          <div className="detail-tech-specs-container">
            <h4 className="detail-tech-specs-title">
              {t("CameraEnclosureProductDetail.sectionTitles.technicalSpecs")}
            </h4>
            <table className="detail-specs-table">
              <tbody>
                {specs.map((item, index) => (
                  <tr key={index}>
                    <td className="detail-spec-label">{item.label}</td>
                    <td className="detail-spec-value">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="detail-section-divider" />

        <section ref={lensHousingSectionRef} id="detail-lens" className="detail-lens-section reveal-on-scroll">
          <h3 className="detail-lens-title">
            {t(`CameraEnclosureProductDetail.lensHousingTitle.${modelType.replace(/\./g, "_")}`)}
          </h3>

          <div className="detail-information-container">
            <p className="detail-information-text">{lensInfo}</p>
            <p className="detail-information-text detail-lens-highlight">{lensCompatibility}</p>
            <p className="detail-information-text detail-lens-highlight">{lensSolution}</p>
          </div>

          <div className="detail-lens-image-container">
            <img
              src={lensHousingImage}
              alt={t("CameraEnclosureProductDetail.lensHousingImageAlt")}
              className="detail-lens-housing-image"
              draggable={false}
              loading="eager"
            />
          </div>

          {/* PRODUCTS Table */}
          <div ref={productsSectionRef} className="detail-tech-specs-container detail-wide-table" id="product">
            <h4 className="detail-tech-specs-title">
              {t("CameraEnclosureProductDetail.sectionTitles.products")}
            </h4>
            <div className="detail-table-wrapper">
              <table className="detail-product-table">
                <thead>
                  <tr>
                    <th>{t("CameraEnclosureProductDetail.tableHeaders.cameraHousingModel")}</th>
                    <th>{t("CameraEnclosureProductDetail.tableHeaders.lensHousingModel")}</th>
                    <th>{t("CameraEnclosureProductDetail.tableHeaders.housingSize")}</th>
                    <th>{t("CameraEnclosureProductDetail.tableHeaders.weight")}</th>
                    <th>{t("CameraEnclosureProductDetail.tableHeaders.maxLensOD")}</th>
                    <th>{t("CameraEnclosureProductDetail.tableHeaders.maxLensLength")}</th>
                  </tr>
                </thead>
                <tbody>
                  {lensVariantSpecs.length > 0 ? (
                    lensVariantSpecs.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{cameraHousingModel}</td>
                          <td>{item.model}</td>
                          <td>{item.size}</td>
                          <td>{item.weight}</td>
                          <td>{item.maxOD}</td>
                          <td>{item.maxLength}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: "center", fontStyle: "italic", padding: "2rem" }}>
                        {t("CameraEnclosureProductDetail.comingSoon")}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="detail-tech-specs-container detail-wide-table">
            <h4 className="detail-tech-specs-title">
              {t("CameraEnclosureProductDetail.sectionTitles.technicalSpecs")}
            </h4>
            <table className="detail-specs-table">
              <tbody>
                {lensCommonSpecs.map((item, i) => (
                  <tr key={i}>
                    <td className="detail-spec-label">{item.label}</td>
                    <td className="detail-spec-value">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <SideBar navigate={navigate} />

        <button
          onClick={() =>
            navigate("/product/without-cooling-jacket", {
              state: { scrollTo: "product" },
            })
          }
          className="detail-premium-btn detail-action-btn detail-pulse"
        >
          {t("CameraEnclosureProductDetail.backToProducts")}
        </button>
      </main>
    </>
  );
};

export default CameraEnclosureProductDetail;