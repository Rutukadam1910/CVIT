
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import machineVisionSolutionPDF from "../assets/Machine_Vision_System.pdf";
import machineVisionLightPDF from "../assets/Machine_Vision_Lights.pdf";
import { FiDownload, FiPhone } from "react-icons/fi";

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
    <>
      <style>{`
        :root {
          --black: #121212;
          --red: #EF3A3A;
          --white: #f5f5f5;
          --red-light: #ff4c4c;
          --red-dark: #C11111;
          --shadow: rgba(0, 0, 0, 0.6);
          --font-family: 'Inter', sans-serif;
        }
        nav {
          background: var(--black);
          box-shadow: 0 4.02px 12.06px rgba(0, 0, 0, 0.15);
          border-bottom: 0.67px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          height: 67px;
          font-family: var(--font-family);
          user-select: none;
          position: sticky;
          top: 0;
          z-index: 1100;
          transition: background 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
          max-width: 100vw;
          margin: 0;
          box-sizing: border-box;
        }
        .logo-container {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .logo-container img {
          height: 67px;
          width: auto;
          margin-right: 0.5rem;
        }
        .nested-dropdown-item {
          position: relative;
          outline: none;
        }
        .nested-dropdown-item:hover > .nested-submenu,
        .nested-dropdown-item:focus-within > .nested-submenu {
          display: block;
        }
        .subcategory-heading {
          display: flex;
          align-items: center;
          padding: 0.2rem 0.7rem;
          font-weight: 600;
          color: #ffffff;
          cursor: pointer;
          transition: background-color 0.3s ease;
          white-space: nowrap;
          user-select: none;
          outline: none;
        }
        .subcategory-heading:hover,
        .subcategory-heading:focus {
          background-color: var(--red);
          font-weight: bold;
          outline: none;
        }
        .subcategory-heading .arrow {
          margin-left: 0.3rem;
          font-size: 0.5rem;
          color: #ffffff;
          transition: transform 0.2s ease;
          cursor: pointer;
          user-select: none;
        }
        .subcategory-heading .arrow.rotated {
          transform: rotate(180deg);
        }
        .nested-submenu {
          position: absolute;
          left: 100%;
          top: 0;
          background-color: #1c1c1c;
          padding: 0.1rem 0;
          min-width: 220px;
          max-width: 350px;
          border-radius: 4.02px;
          z-index: 1000;
          display: none;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          visibility: visible;
        }
        .sub-sub-item {
          padding: 0.6rem 0.8rem;
          font-size: 0.75rem;
          color: #fff;
          cursor: pointer;
          white-space: normal;
          transition: background-color 0.3s ease, font-weight 0.3s ease, border-radius 0.3s ease;
          overflow: visible;
          text-overflow: clip;
          display: block;
          visibility: visible;
          user-select: none;
          outline: none;
          line-height: 1.3rem;
          border-radius: 2px;
        }
        .sub-sub-item:hover,
        .sub-sub-item:focus {
          background-color: var(--red);
          font-weight: bold;
          border-radius: 2px;
          outline: none;
        }
        .product-light-item {
          padding: 0.6rem 0.8rem;
          font-size: 0.75rem;
          line-height: 1.3rem;
        }
        ul.menu {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--white);
          width: auto;
          max-width: calc(100vw - 100px);
        }
        ul.menu > li {
          position: relative;
          cursor: pointer;
          padding: 0.6rem 0;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.2rem;
          user-select: none;
          outline: none;
        }
        ul.menu > li:hover,
        ul.menu > li.active,
        ul.menu > li.open,
        ul.menu > li:focus-within {
          color: var(--red);
        }
        ul.menu > li:hover::after,
        ul.menu > li.open::after,
        ul.menu > li:focus-within::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--red);
          border-radius: 1px;
          transition: width 0.3s ease;
        }
        ul.menu > li.hasDropdown > span.plus {
          font-weight: 900;
          color: var(--red);
          user-select: none;
          font-size: 1rem;
          line-height: 1;
          margin-left: 0.15rem;
          transition: transform 0.25s ease;
        }
        ul.menu > li.hasDropdown.open > span.plus,
        ul.menu > li.hasDropdown:hover > span.plus {
          transform: rotate(45deg);
        }
        .home-link {
          display: flex;
          align-items: center;
          padding: 0.6rem 0.8rem;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          color: white;
          user-select: none;
          outline: none;
        }
        .home-link:hover,
        .home-link:focus {
          color: #ff4c4c;
          outline: none;
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          transform: none;
          background: var(--black);
          border-radius: 4.02px;
          min-width: 180px;
          max-width: 300px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          padding: 0.3rem 0;
          z-index: 1500;
          display: none;
          visibility: visible;
        }
        ul.menu > li:hover .dropdown,
        ul.menu > li.open .dropdown {
          display: block;
        }
        .dropdown li {
          list-style: none;
          padding: 0.3rem 0.7rem;
          font-weight: 500;
          color: #ffffff;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.3s ease, font-weight 0.3s ease, border-radius 0.3s ease;
          user-select: none;
          font-size: 0.6rem;
          overflow: visible;
          text-overflow: clip;
          display: block;
          visibility: visible;
          outline: none;
        }
        .dropdown li:hover,
        .dropdown li:focus-visible {
          background-color: var(--red);
          font-weight: 700;
          outline: none;
          border-radius: 2px;
        }
        .contact-button {
          padding: 0.4rem 1.2rem;
          background: #146ef5;
          color: var(--white);
          font-weight: 800;
          font-size: 0.8rem;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select: none;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-button:hover {
          background: #00316e;
          outline: none;
        }
        .button-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .broucher {
          background: #ef3a3a;
        }
        .broucher:hover,
        .broucher:focus {
          background: #c11111;
          outline: none;
        }
        .icon-right {
          margin-left: 6px;
          font-size: 1rem;
        }
        @media (max-width: 900px) {
          nav {
            padding: 0 0.5rem;
            height: 50px;
          }
          ul.menu {
            gap: 1rem;
            font-size: 0.7rem;
          }
          .logo-container img {
            height: 25px;
          }
          ul.menu > li.hasDropdown > span.plus {
            font-size: 0.8rem;
          }
          .dropdown {
            min-width: 150px;
            max-width: 250px;
            left: auto;
            right: 0;
            transform: translateY(2px);
          }
          .nested-submenu {
            min-width: 150px;
            max-width: 250px;
          }
          .subcategory-heading {
            padding: 0.15rem 0.6rem;
            font-size: 0.5rem;
          }
          .sub-sub-item {
            padding: 0.4rem 0.5rem;
            font-size: 0.65rem;
            line-height: 1.2rem;
          }
          .product-light-item {
            padding: 0.4rem 0.5rem;
            font-size: 0.65rem;
            line-height: 1.2rem;
          }
          .contact-button {
            font-size: 0.7rem;
            padding: 0.3rem 1rem;
            height: 22px;
          }
        }
      `}</style>
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
    </>
  );
};

export default Navbar;