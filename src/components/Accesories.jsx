import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import ImageZoomModal from "./ImageZoomModal";
import SideBar from "./Sidebar";
import "../Styles/Accesories.css";
import mainImage from "../assets/Accesories/mounting-bracket.jpg";
import dimensionImage from "../assets/Dimension/mounting-bracket-dimension.jpg";
import MountingBracketImage1 from "../assets/MountingBracket/mounting_bracket (1).png";
import MountingBracketImage3 from "../assets/MountingBracket/mounting_bracket (3).png";
import MountingBracketImage4 from "../assets/MountingBracket/mounting_bracket (4).png";
import MountingBracketImage5 from "../assets/MountingBracket/mounting_bracket (5).png";

const Accesories = () => {
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

  const zoomContainerRef = useRef(null);
  const keyFeaturesSectionRef = useRef(null);
  const technicalInfoSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const navbarRef = useRef(null);

  // Translated title and description
  const title = t("Accesories.title");
  const information = t("Accesories.description");

  // Translated key features
  const keyFeatures = [
    t("Accesories.features.customFit"),
    t("Accesories.features.adjustableAngle"),
    t("Accesories.features.quickIntegration"),
    t("Accesories.features.durableBuild"),
  ];

  // Gallery images (assets unchanged)
  const galleryImages = [
    MountingBracketImage1,
    MountingBracketImage3,
    MountingBracketImage4,
    MountingBracketImage5,
  ];

  // Preload gallery images
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

  // Sticky navbar scroll effect
  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      "technical-info": technicalInfoSectionRef,
      gallery: gallerySectionRef,
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

  return (
    <>
      <Navbar />

      <main className="camera-enclosure-without-cooling-jacket-main">
        <h1 className="camera-enclosure-without-cooling-jacket-title">{title}</h1>

        <div className="dual-image-container">
          <div className="product-image-wrapper">
            <img
              src={mainImage}
              alt={t("Accesories.mainImageAlt")}
              className="product-main-image"
              draggable={false}
              loading="eager"
              onClick={() => handleImageClick(mainImage)}
            />
          </div>

          <div className="dimension-image-wrapper">
            <img
              src={dimensionImage}
              alt={t("Accesories.dimensionImageAlt")}
              className="dimension-diagram-image"
              draggable={false}
              loading="eager"
              onClick={() => handleImageClick(dimensionImage)}
            />
          </div>
        </div>

        <div className="information-container">
          <p className="information-text">{information}</p>
        </div>

        <nav id="navbar" ref={navbarRef} className="product-nav reveal-on-scroll">
          <div className="nav-button-wrapper">
            <button
              onClick={() => handleNavClick("key-features")}
              aria-current={activeSection === "key-features" ? "page" : undefined}
              className={`nav-tab ${activeSection === "key-features" ? "active" : ""}`}
            >
              {t("Accesories.nav.keyFeatures")}
            </button>
            <button
              onClick={() => handleNavClick("technical-info")}
              aria-current={activeSection === "technical-info" ? "page" : undefined}
              className={`nav-tab ${activeSection === "technical-info" ? "active" : ""}`}
            >
              {t("Accesories.nav.technicalInfo")}
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              aria-current={activeSection === "gallery" ? "page" : undefined}
              className={`nav-tab ${activeSection === "gallery" ? "active" : ""}`}
            >
              {t("Accesories.nav.gallery")}
            </button>
          </div>
        </nav>

        <section ref={keyFeaturesSectionRef} className="section reveal-on-scroll">
          <h2 className="key-features-title">
            {t("Accesories.sectionTitles.keyFeatures")}
          </h2>
          <div className="key-features-container">
            <ul className="key-features-list">
              {keyFeatures.map((f, i) => (
                <li key={i} className="key-feature-item">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="section-divider" />

        <section ref={technicalInfoSectionRef} className="section reveal-on-scroll">
          <h2 className="technical-info-title">
            {t("Accesories.sectionTitles.technicalInfo")}
          </h2>

          <div className="model-structure-table-container">
            <table className="model-structure-table">
              <tbody>
                <tr>
                  <td>{t("Accesories.tableHeaders.modelNumber")}</td>
                  <td>MVCE29X29V2.68MB</td>
                </tr>
                <tr>
                  <td>{t("Accesories.tableHeaders.type")}</td>
                  <td>{t("Accesories.tableValues.housingAccessory")}</td>
                </tr>
                <tr>
                  <td>{t("Accesories.tableHeaders.housingAccessoriesType")}</td>
                  <td>{t("Accesories.tableValues.bracket")}</td>
                </tr>
                <tr>
                  <td>{t("Accesories.tableHeaders.bracketMaterial")}</td>
                  <td>SS 304</td>
                </tr>
                <tr>
                  <td>{t("Accesories.tableHeaders.manufacturer")}</td>
                  <td>CVIT SOLUTION PVT LTD</td>
                </tr>
                <tr>
                  <td>{t("Accesories.tableHeaders.compatibleWith")}</td>
                  <td>MVCE29X29V2.68.LH1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="section-divider" />

        <section
          ref={gallerySectionRef}
          id="gallery"
          className="gallery-section reveal-on-scroll"
          tabIndex={-1}
          aria-label={t("Accesories.ariaLabels.gallery")}
        >
          <h2 className="section-title-3">
            {t("Accesories.sectionTitles.gallery")}
          </h2>
          <div className={`gallery-container ${loadGallery ? "loaded" : ""}`}>
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

        <SideBar navigate={navigate} />

        <div className="back-to-products-container">
          <button
            onClick={() =>
              navigate("/product/without-cooling-jacket", {
                state: { scrollTo: "product" },
              })
            }
            className="premium-btn action-btn pulse"
          >
            {t("Accesories.backToProducts")}
          </button>
        </div>
      </main>
    </>
  );
};

export default Accesories;