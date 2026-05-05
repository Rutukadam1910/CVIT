import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import ImageZoomModal from "./ImageZoomModal";
import SideBar from "./Sidebar";
import "../Styles/CameraVisionEnclosureWithoutCoolingJacket.css";
import info from "../assets/CameraVisionEnclosure/info_2.png";
import cameravisionenclosureImage from "../assets/CameraVisionEnclosure/camera-vision-enclosure.jpg";
import WithoutCoolingjacketGallery1 from "../assets/EnclosureWithoutCoolingJacketGallery/without-cooling-jacket(1).jpg";
import WithoutCoolingjacketGallery2 from "../assets/EnclosureWithoutCoolingJacketGallery/without-cooling-jacket(2).jpg";
import WithoutCoolingjacketGallery3 from "../assets/EnclosureWithoutCoolingJacketGallery/without-cooling-jacket(3).jpg";
import WithoutCoolingjacketGallery4 from "../assets/EnclosureWithoutCoolingJacketGallery/without-cooling-jacket(4).jpg";
import WithoutCoolingjacketGallery5 from "../assets/EnclosureWithoutCoolingJacketGallery/without-cooling-jacket(5).jpg";

// Coming Soon Component (translated)
const ComingSoon = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <div className="without-coming-soon-overlay">
      <div className="without-coming-soon-modal">
        <button className="without-coming-soon-close" onClick={onClose}>×</button>
        <div className="without-coming-soon-content">
          <h2>{t("CameraEnclosureWithoutCooling.comingSoonTitle")}</h2>
          <p>{t("CameraEnclosureWithoutCooling.comingSoonText")}</p>
        </div>
      </div>
    </div>
  );
};

const CameraEnclosureWithoutCoolingJacket = () => {
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
  const gallerySectionRef = useRef(null);
  const keyFeaturesSectionRef = useRef(null);
  const technicalInfoSectionRef = useRef(null);
  const productSectionRef = useRef(null);
  const navbarRef = useRef(null);
  const hasScrolledToProduct = useRef(false);

  // Gallery images array
  const galleryImages = [
    WithoutCoolingjacketGallery1,
    WithoutCoolingjacketGallery2,
    WithoutCoolingjacketGallery3,
    WithoutCoolingjacketGallery4,
    WithoutCoolingjacketGallery5,
  ];

  // Translated key features
  const keyFeatures = [
    t("CameraEnclosureWithoutCooling.features.highQuality"),
    t("CameraEnclosureWithoutCooling.features.protection"),
    t("CameraEnclosureWithoutCooling.features.compatibleModels"),
    t("CameraEnclosureWithoutCooling.features.coolingFeatures"),
    t("CameraEnclosureWithoutCooling.features.flexibleConfig"),
    t("CameraEnclosureWithoutCooling.features.toolFreeMounting"),
    t("CameraEnclosureWithoutCooling.features.durableBuild"),
    t("CameraEnclosureWithoutCooling.features.extendedLife"),
  ];

  // Product models (names translated, routes remain the same)
  const productModels = [
    { type: t("CameraEnclosureWithoutCooling.models.MVCE29X29V2"), route: "/product/without-cooling-jacket/MVCE29X29V2.68" },
    { type: t("CameraEnclosureWithoutCooling.models.MVCE40X30V1"), route: "/product/without-cooling-jacket/MVCE40X30V1.80" },
    { type: t("CameraEnclosureWithoutCooling.models.bordCameraHousing"), route: "/product/without-cooling-jacket/bord-camera-housing" },
    { type: t("CameraEnclosureWithoutCooling.models.accessories"), route: "/product/without-cooling-jacket/accessories" },
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

  // Sticky navbar effect
  useEffect(() => {
    const nav = document.getElementById("without-navbar");
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (
      location.state?.scrollTo === "product" &&
      productSectionRef.current &&
      !hasScrolledToProduct.current
    ) {
      hasScrolledToProduct.current = true;

      setTimeout(() => {
        const navHeight = document.getElementById("without-navbar")?.offsetHeight || 80;
        const top =
          productSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight -
          30;

        window.scrollTo({
          top,
          behavior: "smooth",
        });

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
      product: productSectionRef,
      gallery: gallerySectionRef,
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

      <main className="without-camera-enclosure-without-cooling-jacket-main">
        <h1 className="without-camera-enclosure-without-cooling-jacket-title">
          {t("CameraEnclosureWithoutCooling.title")}
        </h1>

        <div className="without-image-container">
          <img
            src={cameravisionenclosureImage}
            alt={t("CameraEnclosureWithoutCooling.mainImageAlt")}
            className="without-main-image"
            draggable={false}
            loading="eager"
            onClick={() => handleImageClick(cameravisionenclosureImage)}
          />
        </div>

        <div className="without-information-container">
          <p className="without-information-text">
            {t("CameraEnclosureWithoutCooling.description")}
          </p>
        </div>

        <nav id="without-navbar" ref={navbarRef} className="without-product-nav reveal-on-scroll">
          <div className="without-nav-button-wrapper">
            <button
              onClick={() => handleNavClick("key-features")}
              aria-current={activeSection === "key-features" ? "page" : undefined}
              className={`without-nav-tab ${activeSection === "key-features" ? "active" : ""}`}
            >
              {t("CameraEnclosureWithoutCooling.nav.keyFeatures")}
            </button>

            <button
              onClick={() => handleNavClick("product")}
              aria-current={activeSection === "product" ? "page" : undefined}
              className={`without-nav-tab ${activeSection === "product" ? "active" : ""}`}
            >
              {t("CameraEnclosureWithoutCooling.nav.product")}
            </button>

            <button
              onClick={() => handleNavClick("gallery")}
              aria-current={activeSection === "gallery" ? "page" : undefined}
              className={`without-nav-tab ${activeSection === "gallery" ? "active" : ""}`}
            >
              {t("CameraEnclosureWithoutCooling.nav.gallery")}
            </button>
          </div>
        </nav>

        <section ref={keyFeaturesSectionRef} className="without-section reveal-on-scroll">
          <h2 className="without-key-features-title">
            {t("CameraEnclosureWithoutCooling.sectionTitles.keyFeatures")}
          </h2>

          <div className="without-key-features-container">
            <ul className="without-key-features-list">
              {keyFeatures.map((f, i) => (
                <li key={i} className="without-key-feature-item">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="without-section-divider" />

        <section ref={productSectionRef} className="without-section reveal-on-scroll">
          <h2 className="without-section-title">
            {t("CameraEnclosureWithoutCooling.sectionTitles.product")}
          </h2>

          <div className="without-model-structure-table-container">
            <table className="without-model-structure-table">
              <thead>
                <tr>
                  <th>{t("CameraEnclosureWithoutCooling.tableHeaders.type")}</th>
                  <th>{t("CameraEnclosureWithoutCooling.tableHeaders.moreDetails")}</th>
                </tr>
              </thead>
              <tbody>
                {productModels.map((m, i) => (
                  <tr key={i}>
                    <td>{m.type}</td>
                    <td className="without-detail-cell">
                      <div className="without-detail-button-wrapper">
                        <button
                          className="without-detail-button"
                          onClick={() =>
                            navigate(m.route, {
                              state: { from: location.pathname, modelType: m.type },
                            })
                          }
                          aria-label={t("CameraEnclosureWithoutCooling.accessoryAriaLabel", { name: m.type })}
                        >
                          <img src={info} alt={t("CameraEnclosureWithoutCooling.moreInfoAlt")} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="without-section-divider" />

        <section
          ref={gallerySectionRef}
          id="without-gallery"
          className="without-gallery-section reveal-on-scroll"
          tabIndex={-1}
          aria-label={t("CameraEnclosureWithoutCooling.galleryAriaLabel")}
        >
          <h2 className="without-section-title-3">
            {t("CameraEnclosureWithoutCooling.sectionTitles.gallery")}
          </h2>

          <div className={`without-gallery-container ${loadGallery ? "loaded" : ""}`}>
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

        <div className="without-back-to-products-container">
          <button
            onClick={() => navigate("/dashboardTwo")}
            className="without-premium-btn without-action-btn without-pulse"
          >
            {t("CameraEnclosureWithoutCooling.backToProducts")}
          </button>
        </div>
      </main>
    </>
  );
};

export default CameraEnclosureWithoutCoolingJacket;