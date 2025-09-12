import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import machineVisionSolutionPDF from "../assets/Broucher/Machine_Vision_System.pdf";
import machineVisionLightPDF from "../assets/Broucher/Machine_Vision_Lights.pdf";
import { FiDownload, FiPhone } from "react-icons/fi";
import "../Styles/Navbar.css";

const navbarData = {
  Products: {
    "Machine Vision Lights": [
      { name: "Bar Light" },
      { name: "Ring Light" },
      { name: "Dome Light" },
      { name: "Flat Diffused Light With Center Hole" },
      { name: "Flat Diffused Light" },
      { name: "Indirect Flat Light" },
      { name: "Back Light" },
      { name: "Spot Light" },
      { name: "Tunnel Light" },
    ],
    "Machine Vision Cameras Enclosure": [
      { name: "With Cooling Jacket" },
      { name: "Without Cooling Jacket" },
    ],
    "Machine Vision Lens Extension Tube": [{ name: "Adjustable Length" }, { name: "Fix Length" }],
    "Machine Vision Demo Stand": [{ name: "V1" }, { name: "V2" }, { name: "V3" }],
  },
  Industries: [
    "automobile",
    "metal-mining-cement",
    "pharma-fmcg",
    "plastic-rubber",
    "warehouse-distribution",
    "wire",
    "aerospace",
  ],
  "Case Studies": [
    { id: 1, title: "Vial Adopter Inspection" },
    { id: 2, title: "Adpter Packet Inspection" },
    { id: 3, title: "Gap Measurement" },
    { id: 4, title: "Punched Number Detection" },
    { id: 5, title: "Tracing and Tracking" },
    { id: 6, title: "Door Sealent Absence" },
    { id: 7, title: "SpRocket Wheel Inspection" },
    { id: 8, title: "Window Glass" },
  ],
  "About Us": ["About Us", "Our Mission", "Our Vision"],
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [toggledSubmenu, setToggledSubmenu] = useState({});
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine which PDF to download based on the current route
  const brochurePDF = location.pathname === "/" ? machineVisionSolutionPDF : machineVisionLightPDF;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setToggledSubmenu({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleSubmenu = (path, e) => {
    e.stopPropagation();
    setToggledSubmenu((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const toSlug = (name) => {
    if (!name) return "";
    return name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
  };

  const formatProductName = (name) => {
    if (!name) return "";
    return name;
  };

  const handleProductClick = (name) => {
    const slug = toSlug(name);
    navigate(`/product/${slug}`);
    setOpenDropdown(null);
    setToggledSubmenu({});
  };

  const handleCaseStudyClick = (id) => {
    navigate(`/case-study/${id}`);
    setOpenDropdown(null);
    setToggledSubmenu({});
  };

  const handleAboutUsClick = (item) => {
    const scrollTo = item === "About Us" ? "about" : item === "Our Mission" ? "mission" : "vision";
    navigate("/", { state: { scrollTo, freshNavigation: true } });
    setOpenDropdown(null);
    setToggledSubmenu({});
  };

  const renderNestedMenu = (items, level = 0, parentPath = "") => {
    return items.map((item, index) => {
      const currentPath = `${parentPath}-${index}`;
      if (typeof item === "string") {
        const displayName = formatProductName(item);
        const isIndustry = navbarData.Industries.includes(item);
        const isProductLight = navbarData.Products["Machine Vision Lights"].some(
          (p) => p.name === item
        );
        return (
          <li
            key={item}
            className={`sub-sub-item${isProductLight ? " product-light-item" : ""}`}
            role="menuitem"
            tabIndex={0}
            aria-label={displayName}
            onClick={() => {
              if (isIndustry) {
                navigate(`/industry/${item}`);
                setOpenDropdown(null);
                setToggledSubmenu({});
              } else if (isProductLight) {
                handleProductClick(item);
              } else if (navbarData["About Us"].includes(item)) {
                handleAboutUsClick(item);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (isIndustry) {
                  navigate(`/industry/${item}`);
                  setOpenDropdown(null);
                  setToggledSubmenu({});
                } else if (isProductLight) {
                  handleProductClick(item);
                } else if (navbarData["About Us"].includes(item)) {
                  handleAboutUsClick(item);
                }
              }
            }}
          >
            {displayName}
          </li>
        );
      } else if (item.name && item.submenu) {
        const isSubmenuOpen = toggledSubmenu[currentPath] || false;
        return (
          <li key={item.name} className="nested-dropdown-item" role="menuitem" tabIndex={0}>
            <div
              className="subcategory-heading"
              onClick={(e) => toggleSubmenu(currentPath, e)}
              aria-label={`Toggle ${item.name} submenu`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSubmenu(currentPath, e);
                }
              }}
            >
              {item.name}
              <span className={`arrow ${isSubmenuOpen ? "rotated" : ""}`}>▼</span>
            </div>
            {isSubmenuOpen && (
              <ul
                className="nested-submenu"
                style={{ paddingLeft: `${(level + 1) * 0.7}rem`, display: "block" }}
                role="menu"
                aria-label={`${item.name} submenu`}
              >
                {renderNestedMenu(item.submenu, level + 1, currentPath)}
              </ul>
            )}
          </li>
        );
      } else if (item.name) {
        const displayName = formatProductName(item.name);
        const isProductLight = navbarData.Products["Machine Vision Lights"].some(
          (p) => p.name === item.name
        );
        return (
          <li
            key={item.name}
            className={`sub-sub-item${isProductLight ? " product-light-item" : ""}`}
            role="menuitem"
            tabIndex={0}
            aria-label={displayName}
            onClick={() => {
              if (isProductLight) {
                handleProductClick(item.name);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (isProductLight) {
                  handleProductClick(item.name);
                }
              }
            }}
          >
            {displayName}
          </li>
        );
      } else if (item.id && item.title) {
        const displayName = formatProductName(item.title);
        return (
          <li
            key={item.id}
            className="sub-sub-item"
            role="menuitem"
            tabIndex={0}
            aria-label={displayName}
            onClick={() => handleCaseStudyClick(item.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCaseStudyClick(item.id);
              }
            }}
          >
            {displayName}
          </li>
        );
      }
      return null;
    });
  };

  return (
    <nav ref={navRef} role="navigation" aria-label="Primary Navigation">
      <div
        className="logo-container"
        onClick={() => navigate("/", { state: { scrollTo: "Home", freshNavigation: true } })}
        tabIndex={0}
        role="link"
        aria-label="Navigate to Home page"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate("/", { state: { scrollTo: "Home", freshNavigation: true } });
          }
        }}
      >
        <img src={logo} alt="CVIT Logo" />
      </div>

      <ul className="menu" role="menubar" aria-label="Main menu">
        <li
          className="home-link"
          onClick={() => navigate("/", { state: { scrollTo: "Home", freshNavigation: true } })}
          role="menuitem"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate("/", { state: { scrollTo: "Home", freshNavigation: true } });
            }
          }}
        >
          Home
        </li>

        {Object.entries(navbarData).map(([menu, items]) => {
          const isOpen = openDropdown === menu;
          return (
            <li
              key={menu}
              className={`hasDropdown ${isOpen ? "open" : ""}`}
              onClick={() => toggleDropdown(menu)}
              role="menuitem"
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={isOpen}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleDropdown(menu);
                }
              }}
            >
              {menu}
              <span className="plus" aria-hidden="true">+</span>
              <ul className="dropdown" role="menu" aria-label={`${menu} submenu`}>
                {menu === "Products" && typeof items === "object" ? (
                  Object.entries(items).map(([subcat, subitems], index) => {
                    const path = `products-${subcat}-${index}`;
                    const isSubOpen = toggledSubmenu[path];
                    return (
                      <li key={subcat} className="nested-dropdown-item" role="menuitem" tabIndex={0}>
                        <div
                          className="subcategory-heading"
                          onClick={(e) => toggleSubmenu(path, e)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Toggle ${subcat} submenu`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleSubmenu(path, e);
                            }
                          }}
                        >
                          {subcat}
                          <span className={`arrow ${isSubOpen ? "rotated" : ""}`} aria-hidden="true">▼</span>
                        </div>
                        {isSubOpen && (
                          <ul
                            className="nested-submenu"
                            style={{ paddingLeft: `0.7rem`, display: "block" }}
                            role="menu"
                            aria-label={`${subcat} submenu`}
                          >
                            {renderNestedMenu(subitems, 1, path)}
                          </ul>
                        )}
                      </li>
                    );
                  })
                ) : Array.isArray(items) ? (
                  items.map((item) => (
                    <li
                      key={typeof item === "string" ? item : item.id}
                      className="sub-sub-item"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => {
                        if (menu === "Industries") {
                          navigate(`/industry/${item}`);
                          setOpenDropdown(null);
                          setToggledSubmenu({});
                        } else if (menu === "Case Studies") {
                          handleCaseStudyClick(item.id);
                        } else if (menu === "About Us") {
                          handleAboutUsClick(item);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          if (menu === "Industries") {
                            navigate(`/industry/${item}`);
                            setOpenDropdown(null);
                            setToggledSubmenu({});
                          } else if (menu === "Case Studies") {
                            handleCaseStudyClick(item.id);
                          } else if (menu === "About Us") {
                            handleAboutUsClick(item);
                          }
                        }
                      }}
                    >
                      {typeof item === "string" ? item : item.title}
                    </li>
                  ))
                ) : null}
              </ul>
            </li>
          );
        })}
      </ul>

      <div className="button-group">
        <a
          href={brochurePDF}
          download
          className="contact-button broucher"
          title="Download Brochure"
          aria-label="Download brochure PDF"
        >
          Brochure
          <FiDownload className="icon-right" aria-hidden="true" />
        </a>
        <button
          className="contact-button"
          onClick={() => navigate("/", { state: { scrollTo: "Contact Us", freshNavigation: true } })}
          title="Contact Us"
          aria-label="Navigate to Contact Us section"
        >
          Contact Us
          <FiPhone className="icon-right" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;