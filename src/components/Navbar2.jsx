
// import React, { useState, useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
// import machineVisionSolutionPDF from "../assets/Broucher/Machine_Vision_System.pdf";
// import machineVisionLightPDF from "../assets/Broucher/Machine_Vision_Lights.pdf";
// import { FiDownload, FiPhone } from "react-icons/fi";
// import "../Styles/Navbar.css";

// const navbarData = {
//   Products: {
//     "Navbar.Products.MachineVisionLight.title": [
//       { name: "Navbar.Products.MachineVisionLight.BarLight" },
//       { name: "Navbar.Products.MachineVisionLight.RingLight" },
//       { name: "Navbar.Products.MachineVisionLight.DomeLight" },
//       { name: "Navbar.Products.MachineVisionLight.FlatDiffusedLightWithCenterHole" },
//       { name: "Navbar.Products.MachineVisionLight.FlatDiffusedLight" },
//       { name: "Navbar.Products.MachineVisionLight.IndirectFlatLight" },
//       { name: "Navbar.Products.MachineVisionLight.BackLight" },
//       { name: "Navbar.Products.MachineVisionLight.SpotLight" },
//       { name: "Navbar.Products.MachineVisionLight.TunnelLight" },
//     ],
//     "Navbar.Products.MachineVisionCamerasEnclosure.title": [
//       { name: "Navbar.Products.MachineVisionCamerasEnclosure.WithCoolingJacket" },
//       { name: "Navbar.Products.MachineVisionCamerasEnclosure.WithoutCoolingJacket" },
//     ],
//     "Navbar.Products.MachineVisionLensExtensionTube.title": [
//       { name: "Navbar.Products.MachineVisionLensExtensionTube.AdjustableLength" },
//       { name: "Navbar.Products.MachineVisionLensExtensionTube.FixLength" },
//     ],
//     "Navbar.Products.MachineVisionDemoStand.title": [
//       { name: "Navbar.Products.MachineVisionDemoStand.V1" },
//       { name: "Navbar.Products.MachineVisionDemoStand.V2" },
//       { name: "Navbar.Products.MachineVisionDemoStand.V3" },
//     ],
//   },
//   Industries: [
//     "Navbar.Industries.Automobile",
//     "Navbar.Industries.MetalMiningCement",
//     "Navbar.Industries.PharmaFmcg",
//     "Navbar.Industries.PlasticRubberIndustry",
//     "Navbar.Industries.WarehouseDistribution",
//     "Navbar.Industries.WireIndustry",
//     "Navbar.Industries.Aerospace",
//   ],
//   CaseStudies: [
//     "Navbar.CaseStudies.VialAdapterInspection",
//     "Navbar.CaseStudies.AdapterPacketInspection",
//     "Navbar.CaseStudies.GapMeasurement",
//     "Navbar.CaseStudies.PunchedNumberDetection",
//     "Navbar.CaseStudies.TracingAndTracking",
//     "Navbar.CaseStudies.DoorSealantAbsence",
//     "Navbar.CaseStudies.WindowGlass",
//   ],
//   AboutUs: [
//     "Navbar.AboutUsMissionVision.about.title",
//     "Navbar.AboutUsMissionVision.mission.title",
//     "Navbar.AboutUsMissionVision.vision.title",
//   ],
// };

// const Navbar2 = () => {
//   const { t } = useTranslation();
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [toggledSubmenu, setToggledSubmenu] = useState({});
//   const navRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine which PDF to download based on the current route
//   const brochurePDF = location.pathname === "/" ? machineVisionSolutionPDF : machineVisionLightPDF;

//   // Mapping case study keys to IDs for navigation
//   const caseStudyKeyToId = {
//     "Navbar.CaseStudies.VialAdapterInspection": 1,
//     "Navbar.CaseStudies.AdapterPacketInspection": 2,
//     "Navbar.CaseStudies.GapMeasurement": 3,
//     "Navbar.CaseStudies.PunchedNumberDetection": 4,
//     "Navbar.CaseStudies.TracingAndTracking": 5,
//     "Navbar.CaseStudies.DoorSealantAbsence": 6,
//     "Navbar.CaseStudies.WindowGlass": 7,
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//         setToggledSubmenu({});
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown((prev) => (prev === menu ? null : menu));
//   };

//   const toggleSubmenu = (path, e) => {
//     e.stopPropagation();
//     setToggledSubmenu((prev) => ({
//       ...prev,
//       [path]: !prev[path],
//     }));
//   };

//   const toSlug = (name) => {
//     if (!name) return "";
//     return t(name).toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
//   };

//   const formatProductName = (name) => {
//     if (!name) return "";
//     return t(name);
//   };

//   const handleProductClick = (name) => {
//     const slug = toSlug(name);
//     navigate(`/product/${slug}`);
//     setOpenDropdown(null);
//     setToggledSubmenu({});
//   };

//   const handleCaseStudyClick = (key) => {
//     const id = caseStudyKeyToId[key];
//     if (id) {
//       navigate(`/case-study/${id}`);
//       setOpenDropdown(null);
//       setToggledSubmenu({});
//     }
//   };

//   const handleAboutUsClick = (item) => {
//     const scrollTo =
//       item === "Navbar.AboutUsMissionVision.about.title"
//         ? "about"
//         : item === "Navbar.AboutUsMissionVision.mission.title"
//         ? "mission"
//         : "vision";
//     navigate("/", { state: { scrollTo, freshNavigation: true } });
//     setOpenDropdown(null);
//     setToggledSubmenu({});
//   };

//   const renderNestedMenu = (items, level = 0, parentPath = "") => {
//     return items.map((item, index) => {
//       const currentPath = `${parentPath}-${index}`;
//       if (typeof item === "string") {
//         const displayName = formatProductName(item);
//         const isIndustry = navbarData.Industries.includes(item);
//         const isCaseStudy = navbarData.CaseStudies.includes(item);
//         const isAboutUs = navbarData.AboutUs.includes(item);
//         const isProductLight = Object.values(navbarData.Products).some((subitems) =>
//           subitems.some((p) => p.name === item)
//         );
//         return (
//           <li
//             key={item}
//             className={`sub-sub-item${isProductLight ? " product-light-item" : ""}`}
//             role="menuitem"
//             tabIndex={0}
//             aria-label={t("Navbar.ariaLabel.item", { name: displayName })}
//             onClick={() => {
//               if (isIndustry) {
//                 navigate(`/industry/${toSlug(item)}`);
//                 setOpenDropdown(null);
//                 setToggledSubmenu({});
//               } else if (isProductLight) {
//                 handleProductClick(item);
//               } else if (isCaseStudy) {
//                 handleCaseStudyClick(item);
//               } else if (isAboutUs) {
//                 handleAboutUsClick(item);
//               }
//             }}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" || e.key === " ") {
//                 e.preventDefault();
//                 if (isIndustry) {
//                   navigate(`/industry/${toSlug(item)}`);
//                   setOpenDropdown(null);
//                   setToggledSubmenu({});
//                 } else if (isProductLight) {
//                   handleProductClick(item);
//                 } else if (isCaseStudy) {
//                   handleCaseStudyClick(item);
//                 } else if (isAboutUs) {
//                   handleAboutUsClick(item);
//                 }
//               }
//             }}
//           >
//             {displayName}
//           </li>
//         );
//       } else if (item.name && item.submenu) {
//         const isSubmenuOpen = toggledSubmenu[currentPath] || false;
//         return (
//           <li key={item.name} className="nested-dropdown-item" role="menuitem" tabIndex={0}>
//             <div
//               className="subcategory-heading"
//               onClick={(e) => toggleSubmenu(currentPath, e)}
//               aria-label={t("Navbar.ariaLabel.submenuToggle", { name: t(item.name) })}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   toggleSubmenu(currentPath, e);
//                 }
//               }}
//             >
//               {t(item.name)}
//               <span className={`arrow ${isSubmenuOpen ? "rotated" : ""}`}>▼</span>
//             </div>
//             {isSubmenuOpen && (
//               <ul
//                 className="nested-submenu"
//                 style={{ paddingLeft: `${(level + 1) * 0.7}rem`, display: "block" }}
//                 role="menu"
//                 aria-label={t("Navbar.ariaLabel.submenu", { name: t(item.name) })}
//               >
//                 {renderNestedMenu(item.submenu, level + 1, currentPath)}
//               </ul>
//             )}
//           </li>
//         );
//       } else if (item.name) {
//         const displayName = formatProductName(item.name);
//         const isProductLight = Object.values(navbarData.Products).some((subitems) =>
//           subitems.some((p) => p.name === item.name)
//         );
//         return (
//           <li
//             key={item.name}
//             className={`sub-sub-item${isProductLight ? " product-light-item" : ""}`}
//             role="menuitem"
//             tabIndex={0}
//             aria-label={t("Navbar.ariaLabel.item", { name: displayName })}
//             onClick={() => {
//               if (isProductLight) {
//                 handleProductClick(item.name);
//               }
//             }}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" || e.key === " ") {
//                 e.preventDefault();
//                 if (isProductLight) {
//                   handleProductClick(item.name);
//                 }
//               }
//             }}
//           >
//             {displayName}
//           </li>
//         );
//       }
//       return null;
//     });
//   };

//   return (
//     <nav ref={navRef} role="navigation" aria-label={t("Navbar.ariaLabel.primaryNavigation")}>
//       <div
//         className="logo-container"
//         onClick={() => navigate("/", { state: { scrollTo: "Home", freshNavigation: true } })}
//         tabIndex={0}
//         role="link"
//         aria-label={t("Navbar.ariaLabel.homeLink")}
//         onKeyDown={(e) => {
//           if (e.key === "Enter" || e.key === " ") {
//             e.preventDefault();
//             navigate("/", { state: { scrollTo: "Home", freshNavigation: true } });
//           }
//         }}
//       >
//         <img src={logo} alt={t("Navbar.CVITLogo")} />
//       </div>

//       <ul className="menu" role="menubar" aria-label={t("Navbar.ariaLabel.mainMenu")}>
//         <li
//           className="home-link"
//           onClick={() => navigate("/", { state: { scrollTo: "Home", freshNavigation: true } })}
//           role="menuitem"
//           tabIndex={0}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" || e.key === " ") {
//               e.preventDefault();
//               navigate("/", { state: { scrollTo: "Home", freshNavigation: true } });
//             }
//           }}
//         >
//           {t("Navbar.Home")}
//         </li>

//         {Object.entries(navbarData).map(([menu, items]) => {
//           const isOpen = openDropdown === menu;
//           return (
//             <li
//               key={menu}
//               className={`hasDropdown ${isOpen ? "open" : ""}`}
//               onClick={() => toggleDropdown(menu)}
//               role="menuitem"
//               tabIndex={0}
//               aria-haspopup="true"
//               aria-expanded={isOpen}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   toggleDropdown(menu);
//                 }
//               }}
//             >
//               {t(`Navbar.Menu.${menu}`)}
//               <span className="plus" aria-hidden="true">+</span>
//               <ul className="dropdown" role="menu" aria-label={t("Navbar.ariaLabel.submenu", { name: t(`Navbar.Menu.${menu}`) })}>
//                 {menu === "Products" && typeof items === "object" ? (
//                   Object.entries(items).map(([subcat, subitems], index) => {
//                     const path = `products-${toSlug(subcat)}-${index}`;
//                     const isSubOpen = toggledSubmenu[path];
//                     return (
//                       <li key={subcat} className="nested-dropdown-item" role="menuitem" tabIndex={0}>
//                         <div
//                           className="subcategory-heading"
//                           onClick={(e) => toggleSubmenu(path, e)}
//                           role="button"
//                           tabIndex={0}
//                           aria-label={t("Navbar.ariaLabel.submenuToggle", { name: t(subcat) })}
//                           onKeyDown={(e) => {
//                             if (e.key === "Enter" || e.key === " ") {
//                               e.preventDefault();
//                               toggleSubmenu(path, e);
//                             }
//                           }}
//                         >
//                           {t(subcat)}
//                           <span className={`arrow ${isSubOpen ? "rotated" : ""}`} aria-hidden="true">▼</span>
//                         </div>
//                         {isSubOpen && (
//                           <ul
//                             className="nested-submenu"
//                             style={{ paddingLeft: `0.7rem`, display: "block" }}
//                             role="menu"
//                             aria-label={t("Navbar.ariaLabel.submenu", { name: t(subcat) })}
//                           >
//                             {renderNestedMenu(subitems, 1, path)}
//                           </ul>
//                         )}
//                       </li>
//                     );
//                   })
//                 ) : Array.isArray(items) ? (
//                   items.map((item) => (
//                     <li
//                       key={item}
//                       className="sub-sub-item"
//                       role="menuitem"
//                       tabIndex={0}
//                       onClick={() => {
//                         if (menu === "Industries") {
//                           navigate(`/industry/${toSlug(item)}`);
//                           setOpenDropdown(null);
//                           setToggledSubmenu({});
//                         } else if (menu === "CaseStudies") {
//                           handleCaseStudyClick(item);
//                         } else if (menu === "AboutUs") {
//                           handleAboutUsClick(item);
//                         }
//                       }}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter" || e.key === " ") {
//                           e.preventDefault();
//                           if (menu === "Industries") {
//                             navigate(`/industry/${toSlug(item)}`);
//                             setOpenDropdown(null);
//                             setToggledSubmenu({});
//                           } else if (menu === "CaseStudies") {
//                             handleCaseStudyClick(item);
//                           } else if (menu === "AboutUs") {
//                             handleAboutUsClick(item);
//                           }
//                         }
//                       }}
//                     >
//                       {t(item)}
//                     </li>
//                   ))
//                 ) : null}
//               </ul>
//             </li>
//           );
//         })}
//       </ul>

//       <div className="button-group">
//         <a
//           href={brochurePDF}
//           download
//           className="contact-button broucher"
//           title={t("Navbar.Brochure")}
//           aria-label={t("Navbar.ariaLabel.downloadBrochure")}
//         >
//           {t("Navbar.Brochure")}
//           <FiDownload className="icon-right" aria-hidden="true" />
//         </a>
//         <button
//           className="contact-button"
//           onClick={() => navigate("/", { state: { scrollTo: "ContactUs", freshNavigation: true } })}
//           title={t("Navbar.ContactUs")}
//           aria-label={t("Navbar.ariaLabel.contactUs")}
//         >
//           {t("Navbar.ContactUs")}
//           <FiPhone className="icon-right" aria-hidden="true" />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar2;
