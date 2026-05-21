// // src/components/Navbar.js
// import React, { useState, useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
// import machineVisionSolutionPDF from "../assets/Broucher/Machine_Vision_System.pdf";
// import machineVisionLightPDF from "../assets/Broucher/Machine_Vision_Lights.pdf";
// import { FiDownload, FiPhone, FiMenu, FiX } from "react-icons/fi";
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
//     { slug: "automobile",              name: "Navbar.Industries.Automobile" },
//     { slug: "metal-mining-cement",     name: "Navbar.Industries.MetalMiningCement" },
//     { slug: "pharma-fmcg",             name: "Navbar.Industries.PharmaFmcg" },
//     { slug: "plastic-rubber",          name: "Navbar.Industries.PlasticRubberIndustry" },
//     { slug: "warehouse-distribution",  name: "Navbar.Industries.WarehouseDistribution" },
//     { slug: "wire",                    name: "Navbar.Industries.WireIndustry" },
//     { slug: "aerospace",               name: "Navbar.Industries.Aerospace" },
//   ],
//   CaseStudies: [
//     { key: "Navbar.CaseStudies.VialAdapterInspection",    id: 1  },
//     { key: "Navbar.CaseStudies.AdapterPacketInspection",  id: 2  },
//     { key: "Navbar.CaseStudies.GapMeasurement",           id: 3  },
//     { key: "Navbar.CaseStudies.PunchedNumberDetection",   id: 4  },
//     { key: "Navbar.CaseStudies.TracingAndTracking",       id: 5  },
//     { key: "Navbar.CaseStudies.DoorSealantAbsence",       id: 6  },
//     { key: "Navbar.CaseStudies.WindowGlass",              id: 7  },
//     { key: "Navbar.CaseStudies.TubTyvekInspection",       id: 8  },
//     { key: "Navbar.CaseStudies.HandBrakeCableInspection", id: 9  },
//     { key: "Navbar.CaseStudies.VINInspection",            id: 10 },
//     { key: "Navbar.CaseStudies.LadleHookInspection",      id: 11 },
//     { key: "Navbar.CaseStudies.CylinderHeadInspection",   id: 12 },
//     { key: "Navbar.CaseStudies.BagSealWrinkleInspection", id: 13 },
//     { key: "Navbar.CaseStudies.AndroidBarcodeScanning",   id: 14 },
//   ],
//   AboutUs: [
//     { name: "Navbar.AboutUsMissionVision.about.title",   scrollTo: "about"   },
//     { name: "Navbar.AboutUsMissionVision.mission.title", scrollTo: "mission" },
//     { name: "Navbar.AboutUsMissionVision.vision.title",  scrollTo: "vision"  },
//   ],
//   Careers: [
//     { name: "Navbar.Careers", path: "/careers" },
//   ],
// };

// const Navbar = () => {
//   const { t } = useTranslation();
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openSubmenu, setOpenSubmenu] = useState(null); // ← single key, not a map
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const brochurePDF = location.pathname === "/" ? machineVisionSolutionPDF : machineVisionLightPDF;

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//         setOpenSubmenu(null);
//         setIsMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Set navbar height for scroll padding
//   useEffect(() => {
//     const setNavHeight = () => {
//       const height = navRef.current?.offsetHeight || 80;
//       document.documentElement.style.setProperty("--nav-height", `${height}px`);
//     };
//     setNavHeight();
//     window.addEventListener("resize", setNavHeight);
//     return () => window.removeEventListener("resize", setNavHeight);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
//   }, [isMobileMenuOpen]);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown((prev) => (prev === menu ? null : menu));
//     setOpenSubmenu(null); // close any open subcategory when switching top-level menu
//   };

//   // Exclusive toggle: clicking a path opens it and closes all others;
//   // clicking the already-open path closes it.
//   const toggleSubmenu = (path, e) => {
//     e.stopPropagation();
//     setOpenSubmenu((prev) => (prev === path ? null : path));
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//     setOpenDropdown(null);
//     setOpenSubmenu(null);
//   };

//   const toSlug = (key) => {
//     if (!key) return "";
//     const last = key.split(".").pop();
//     return last.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
//   };

//   // Close-all helper used by every nav action
//   const closeAll = () => {
//     setOpenDropdown(null);
//     setOpenSubmenu(null);
//     setIsMobileMenuOpen(false);
//   };

//   const handleCareersClick     = () => { navigate("/careers");                           closeAll(); };
//   const handleProductClick     = (name) => { navigate(`/product/${toSlug(name)}`);       closeAll(); };
//   const handleIndustryClick    = (slug) => { navigate(`/industry/${slug}`);              closeAll(); };
//   const handleCaseStudyClick   = (id)   => { navigate(`/case-study/${id}`);             closeAll(); };
//   const handleAboutUsClick     = (scrollTo) => { navigate("/", { state: { scrollTo } }); closeAll(); };
//   const handleBrochureClick    = () => closeAll();

//   const handleContactClick = () => {
//     if (location.pathname === "/") {
//       navigate("/", { state: { scrollTo: "Contact Us" } });
//     } else {
//       navigate("/contact-us");
//     }
//     closeAll();
//   };

//   const renderNestedMenu = (items) => {
//     return items.map((item, index) => {
//       if (item.path === "/careers") {
//         return (
//           <li key="careers" className="sub-sub-item" role="menuitem" tabIndex={0}
//             onClick={handleCareersClick}
//             onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCareersClick(); } }}
//           >
//             {t("Navbar.Careers")}
//           </li>
//         );
//       }
//       if (item.slug) {
//         return (
//           <li key={item.slug} className="sub-sub-item" role="menuitem" tabIndex={0}
//             onClick={() => handleIndustryClick(item.slug)}
//             onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleIndustryClick(item.slug); } }}
//           >
//             {t(item.name)}
//           </li>
//         );
//       }
//       if (item.key && item.id) {
//         return (
//           <li key={item.id} className="sub-sub-item" role="menuitem" tabIndex={0}
//             onClick={() => handleCaseStudyClick(item.id)}
//             onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCaseStudyClick(item.id); } }}
//           >
//             {t(item.key)}
//           </li>
//         );
//       }
//       if (item.scrollTo) {
//         return (
//           <li key={item.scrollTo} className="sub-sub-item" role="menuitem" tabIndex={0}
//             onClick={() => handleAboutUsClick(item.scrollTo)}
//             onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleAboutUsClick(item.scrollTo); } }}
//           >
//             {t(item.name)}
//           </li>
//         );
//       }
//       if (item.name) {
//         return (
//           <li key={item.name} className="sub-sub-item" role="menuitem" tabIndex={0}
//             onClick={() => handleProductClick(item.name)}
//             onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleProductClick(item.name); } }}
//           >
//             {t(item.name)}
//           </li>
//         );
//       }
//       return null;
//     });
//   };

//   return (
//     <nav ref={navRef} role="navigation" aria-label={t("Navbar.ariaLabel.primaryNavigation")}>
//       {/* Logo */}
//       <div
//         className="logo-container"
//         onClick={() => navigate("/")}
//         role="button"
//         tabIndex={0}
//         aria-label={t("Navbar.ariaLabel.homeLink")}
//         onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/"); } }}
//       >
//         <img src={logo} alt={t("Navbar.CVITLogo")} />
//       </div>

//       {/* Mobile Toggle */}
//       <button
//         className="mobile-menu-toggle mobile-only"
//         onClick={toggleMobileMenu}
//         aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//         aria-expanded={isMobileMenuOpen}
//       >
//         {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//       </button>

//       {/* Main Navigation */}
//       <ul className={`menu ${isMobileMenuOpen ? "mobile-open" : ""}`} role="menubar">
//         <li
//           className="home-link"
//           onClick={() => navigate("/")}
//           role="menuitem"
//           tabIndex={0}
//           onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/"); } }}
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
//               aria-haspopup="true"
//               aria-expanded={isOpen}
//               tabIndex={0}
//               onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown(menu); } }}
//             >
//               {t(`Navbar.Menu.${menu}`)}
//               <span className="plus" aria-hidden="true">+</span>

//               {isOpen && (
//                 <ul className="dropdown" role="menu">
//                   {menu === "Products" && typeof items === "object" ? (
//                     Object.entries(items).map(([subcat, subitems], index) => {
//                       const path = `products-${toSlug(subcat)}-${index}`;
//                       const isSubOpen = openSubmenu === path; // ← compare to single key
//                       return (
//                         <li key={subcat} className="nested-dropdown-item">
//                           <div
//                             className="subcategory-heading"
//                             onClick={(e) => toggleSubmenu(path, e)}
//                             role="button"
//                             tabIndex={0}
//                             aria-expanded={isSubOpen}
//                             onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSubmenu(path, e); } }}
//                           >
//                             {t(subcat)}
//                             <span className={`arrow ${isSubOpen ? "rotated" : ""}`}>▼</span>
//                           </div>
//                           {isSubOpen && (
//                             <ul className="nested-submenu">
//                               {renderNestedMenu(subitems)}
//                             </ul>
//                           )}
//                         </li>
//                       );
//                     })
//                   ) : (
//                     renderNestedMenu(items)
//                   )}
//                 </ul>
//               )}
//             </li>
//           );
//         })}

//         {/* Mobile Buttons */}
//         <li className="mobile-only">
//           <a href={brochurePDF} download className="contact-button broucher" onClick={handleBrochureClick}>
//             {t("Navbar.Brochure")} <FiDownload className="icon-right" />
//           </a>
//         </li>
//         <li className="mobile-only">
//           <button className="contact-button" onClick={handleContactClick}>
//             {t("Navbar.ContactUs")} <FiPhone className="icon-right" />
//           </button>
//         </li>
//       </ul>

//       {/* Desktop Buttons */}
//       <div className="button-group desktop-only">
//         <a href={brochurePDF} download className="contact-button broucher" onClick={handleBrochureClick}>
//           {t("Navbar.Brochure")} <FiDownload className="icon-right" />
//         </a>
//         <button className="contact-button" onClick={handleContactClick}>
//           {t("Navbar.ContactUs")} <FiPhone className="icon-right" />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import machineVisionSolutionPDF from "../assets/Broucher/Machine_Vision_System.pdf";
import machineVisionLightPDF from "../assets/Broucher/Machine_Vision_Lights.pdf";
import { FiDownload, FiPhone, FiMenu, FiX } from "react-icons/fi";
import "../Styles/Navbar.css";

const navbarData = {
  Products: {
    "Navbar.Products.MachineVisionLight.title": [
      { name: "Navbar.Products.MachineVisionLight.BarLight" },
      { name: "Navbar.Products.MachineVisionLight.RingLight" },
      { name: "Navbar.Products.MachineVisionLight.DomeLight" },
      { name: "Navbar.Products.MachineVisionLight.FlatDiffusedLightWithCenterHole" },
      { name: "Navbar.Products.MachineVisionLight.FlatDiffusedLight" },
      { name: "Navbar.Products.MachineVisionLight.IndirectFlatLight" },
      { name: "Navbar.Products.MachineVisionLight.BackLight" },
      { name: "Navbar.Products.MachineVisionLight.SpotLight" },
      { name: "Navbar.Products.MachineVisionLight.TunnelLight" },
    ],
    "Navbar.Products.MachineVisionCamerasEnclosure.title": [
      { name: "Navbar.Products.MachineVisionCamerasEnclosure.WithCoolingJacket" },
      { name: "Navbar.Products.MachineVisionCamerasEnclosure.WithoutCoolingJacket" },
    ],
    "Navbar.Products.MachineVisionLensExtensionTube.title": [
      { name: "Navbar.Products.MachineVisionLensExtensionTube.AdjustableLength" },
      { name: "Navbar.Products.MachineVisionLensExtensionTube.FixLength" },
    ],
    "Navbar.Products.MachineVisionDemoStand.title": [
      { name: "Navbar.Products.MachineVisionDemoStand.V1" },
      { name: "Navbar.Products.MachineVisionDemoStand.V2" },
      { name: "Navbar.Products.MachineVisionDemoStand.V3" },
    ],
  },
  Industries: [
    { slug: "automobile",              name: "Navbar.Industries.Automobile" },
    { slug: "metal-mining-cement",     name: "Navbar.Industries.MetalMiningCement" },
    { slug: "pharma-fmcg",             name: "Navbar.Industries.PharmaFmcg" },
    { slug: "plastic-rubber",          name: "Navbar.Industries.PlasticRubberIndustry" },
    { slug: "warehouse-distribution",  name: "Navbar.Industries.WarehouseDistribution" },
    { slug: "wire",                    name: "Navbar.Industries.WireIndustry" },
    { slug: "aerospace",               name: "Navbar.Industries.Aerospace" },
  ],
  CaseStudies: [
    { key: "Navbar.CaseStudies.VialAdapterInspection",    id: 1  },
    { key: "Navbar.CaseStudies.AdapterPacketInspection",  id: 2  },
    { key: "Navbar.CaseStudies.GapMeasurement",           id: 3  },
    { key: "Navbar.CaseStudies.PunchedNumberDetection",   id: 4  },
    { key: "Navbar.CaseStudies.TyreTracingAndTracking",   id: 5  },
    { key: "Navbar.CaseStudies.DoorSealantAbsence",       id: 6  },
    { key: "Navbar.CaseStudies.WindowGlass",              id: 7  },
    { key: "Navbar.CaseStudies.TubTyvekInspection",       id: 8  },
    { key: "Navbar.CaseStudies.HandBrakeCableInspection", id: 9  },
    { key: "Navbar.CaseStudies.VINInspection",            id: 10 },
    { key: "Navbar.CaseStudies.LadleHookInspection",      id: 11 },
    { key: "Navbar.CaseStudies.CylinderHeadInspection",   id: 12 },
    { key: "Navbar.CaseStudies.BagSealWrinkleInspection", id: 13 },
    { key: "Navbar.CaseStudies.AndroidBarcodeScanning",   id: 14 },
  ],
  AboutUs: [
    { name: "Navbar.AboutUsMissionVision.about.title",   scrollTo: "about"   },
    { name: "Navbar.AboutUsMissionVision.mission.title", scrollTo: "mission" },
    { name: "Navbar.AboutUsMissionVision.vision.title",  scrollTo: "vision"  },
  ],
  Careers: [
    { name: "Navbar.Careers", path: "/careers" },
  ],
};

const Navbar = () => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const brochurePDF = location.pathname === "/" ? machineVisionSolutionPDF : machineVisionLightPDF;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setOpenSubmenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const setNavHeight = () => {
      const height = navRef.current?.offsetHeight || 80;
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    };
    setNavHeight();
    window.addEventListener("resize", setNavHeight);
    return () => window.removeEventListener("resize", setNavHeight);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (path, e) => {
    e.stopPropagation();
    setOpenSubmenu((prev) => (prev === path ? null : path));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  const toSlug = (key) => {
    if (!key) return "";
    const last = key.split(".").pop();
    return last.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setOpenSubmenu(null);
    setIsMobileMenuOpen(false);
  };

  const handleCareersClick     = () => { navigate("/careers");                            closeAll(); };
  const handleProductClick     = (name) => { navigate(`/product/${toSlug(name)}`);        closeAll(); };
  const handleIndustryClick    = (slug) => { navigate(`/industry/${slug}`);               closeAll(); };
  const handleCaseStudyClick   = (id)   => { navigate(`/case-study/${id}`);              closeAll(); };
  const handleAboutUsClick     = (scrollTo) => { navigate("/", { state: { scrollTo } }); closeAll(); };
  const handleBrochureClick    = () => closeAll();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      navigate("/", { state: { scrollTo: "Contact Us" } });
    } else {
      navigate("/contact-us");
    }
    closeAll();
  };

  const renderNestedMenu = (items) => {
    return items.map((item) => {
      if (item.path === "/careers") {
        return (
          <li key="careers" className="sub-sub-item" role="menuitem" tabIndex={0}
            onClick={handleCareersClick}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCareersClick(); } }}
          >
            {t("Navbar.Careers")}
          </li>
        );
      }
      if (item.slug) {
        return (
          <li key={item.slug} className="sub-sub-item" role="menuitem" tabIndex={0}
            onClick={() => handleIndustryClick(item.slug)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleIndustryClick(item.slug); } }}
          >
            {t(item.name)}
          </li>
        );
      }
      if (item.key && item.id) {
        return (
          <li key={item.id} className="sub-sub-item" role="menuitem" tabIndex={0}
            onClick={() => handleCaseStudyClick(item.id)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCaseStudyClick(item.id); } }}
          >
            {item.id}. {t(item.key)}
          </li>
        );
      }
      if (item.scrollTo) {
        return (
          <li key={item.scrollTo} className="sub-sub-item" role="menuitem" tabIndex={0}
            onClick={() => handleAboutUsClick(item.scrollTo)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleAboutUsClick(item.scrollTo); } }}
          >
            {t(item.name)}
          </li>
        );
      }
      if (item.name) {
        return (
          <li key={item.name} className="sub-sub-item" role="menuitem" tabIndex={0}
            onClick={() => handleProductClick(item.name)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleProductClick(item.name); } }}
          >
            {t(item.name)}
          </li>
        );
      }
      return null;
    });
  };

  return (
    <nav ref={navRef} role="navigation" aria-label={t("Navbar.ariaLabel.primaryNavigation")}>
      {/* Logo */}
      <div
        className="logo-container"
        onClick={() => navigate("/")}
        role="button"
        tabIndex={0}
        aria-label={t("Navbar.ariaLabel.homeLink")}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/"); } }}
      >
        <img src={logo} alt={t("Navbar.CVITLogo")} />
      </div>

      {/* Mobile Toggle */}
      <button
        className="mobile-menu-toggle mobile-only"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Main Navigation */}
      <ul className={`menu ${isMobileMenuOpen ? "mobile-open" : ""}`} role="menubar">
        <li
          className="home-link"
          onClick={() => navigate("/")}
          role="menuitem"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/"); } }}
        >
          {t("Navbar.Home")}
        </li>

        {Object.entries(navbarData).map(([menu, items]) => {
          const isOpen = openDropdown === menu;
          return (
            <li
              key={menu}
              className={`hasDropdown ${isOpen ? "open" : ""}`}
              onClick={() => toggleDropdown(menu)}
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={isOpen}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown(menu); } }}
            >
              {t(`Navbar.Menu.${menu}`)}
              <span className="plus" aria-hidden="true">+</span>

              {isOpen && (
                <ul className="dropdown" role="menu">
                  {menu === "Products" && typeof items === "object" ? (
                    Object.entries(items).map(([subcat, subitems], index) => {
                      const path = `products-${toSlug(subcat)}-${index}`;
                      const isSubOpen = openSubmenu === path;
                      return (
                        <li key={subcat} className="nested-dropdown-item">
                          <div
                            className="subcategory-heading"
                            onClick={(e) => toggleSubmenu(path, e)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isSubOpen}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSubmenu(path, e); } }}
                          >
                            {t(subcat)}
                            <span className={`arrow ${isSubOpen ? "rotated" : ""}`}>▼</span>
                          </div>
                          {isSubOpen && (
                            <ul className="nested-submenu">
                              {renderNestedMenu(subitems)}
                            </ul>
                          )}
                        </li>
                      );
                    })
                  ) : (
                    renderNestedMenu(items)
                  )}
                </ul>
              )}
            </li>
          );
        })}

        {/* Mobile Buttons */}
        <li className="mobile-only">
          <a href={brochurePDF} download className="contact-button broucher" onClick={handleBrochureClick}>
            {t("Navbar.Brochure")} <FiDownload className="icon-right" />
          </a>
        </li>
        <li className="mobile-only">
          <button className="contact-button" onClick={handleContactClick}>
            {t("Navbar.ContactUs")} <FiPhone className="icon-right" />
          </button>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="button-group desktop-only">
        <a href={brochurePDF} download className="contact-button broucher" onClick={handleBrochureClick}>
          {t("Navbar.Brochure")} <FiDownload className="icon-right" />
        </a>
        <button className="contact-button" onClick={handleContactClick}>
          {t("Navbar.ContactUs")} <FiPhone className="icon-right" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;