import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "./Navbar";
import CommonSpec from "./CommonSpec";
import ModelStructureTable from "./ModelStructureTable";
import TechnicalInfo from "./TechnicalInfoModal";
import Gallery from "./Gallery";
import ImageZoomModal from "./ImageZoomModal";
import SideBar from "./Sidebar";

import {
  productsData,
  galleryImagesMap,
  dimensionImages,
  COMMON_SPECIFICATIONS,
} from "../data/productsData";

import "../Styles/ProductDetail.css";

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const { slug } = useParams();

  const product = productsData[slug];
  const galleryImages = galleryImagesMap[slug] || [];
  const dimensionImage = dimensionImages[slug];

  const [activeSection, setActiveSection] = useState("product");
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [loadGallery, setLoadGallery] = useState(false);

  const zoomContainerRef = useRef(null);
  const productSectionRef = useRef(null);
  const techInfoSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const rootRef = useRef(null);
  const isProgrammaticScroll = useRef(false);
  const hasScrolledToProduct = useRef(false); // Add this flag

  useEffect(() => {
    setActiveSection("product");
    setSelectedImage(null);
  }, [slug]);

  // Scroll reveal animation
  useEffect(() => {
    const node = rootRef.current || document;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      const els = node.querySelectorAll(".reveal-on-scroll");
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (isProgrammaticScroll.current) return;
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    const els = node.querySelectorAll(".reveal-on-scroll");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle #top hash scroll
  useEffect(() => {
    if (window.location.hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [slug]);

  // Navbar scroll effect
  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Preload gallery images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = galleryImages.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
          })
      );

      try {
        await Promise.all(imagePromises);
        setLoadGallery(true);
      } catch (error) {
        console.error("Image preloading failed:", error);
        setLoadGallery(true); // still show gallery even if some failed
      }
    };

    if (galleryImages.length > 0) {
      preloadImages();
    }
  }, [galleryImages]);

  // Handle scroll to product section when returning from Buy/Enquire
  useEffect(() => {
    const shouldScrollToProduct =
      (location.state?.scrollTo === "product" || location.hash === "#product") &&
      productSectionRef.current &&
      !hasScrolledToProduct.current;

    if (shouldScrollToProduct) {
      hasScrolledToProduct.current = true;

      setTimeout(() => {
        const navbarHeight = document.getElementById("navbar")?.offsetHeight || 80;
        const extraPadding = 40;

        const elementTop = productSectionRef.current.getBoundingClientRect().top;
        const scrollPosition = window.pageYOffset + elementTop - navbarHeight - extraPadding;

        window.scrollTo({
          top: scrollPosition,
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
        const navbarHeight = document.getElementById("navbar")?.offsetHeight || 80;
        const extraPadding = 40;

        const elementTop = productSectionRef.current.getBoundingClientRect().top;
        const scrollPosition = window.pageYOffset + elementTop - navbarHeight - extraPadding;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }, 600);
    }
  }, [location.hash]);

  // Check if it's a demo stand product that's coming soon
  const isDemoStandComingSoon = slug === 'v1' || slug === 'v2' || slug === 'v3';

  if (!product) {
    if (isDemoStandComingSoon) {
      // Show coming soon message for demo stands
      return (
        <div className="product-coming-soon">
          <Navbar />
          <div className="coming-soon-content">
            <h2>{t("ProductDetail.comingSoon.title", "Coming Soon")}</h2>
            <p>{t("ProductDetail.comingSoon.message", "This demo stand product is currently under development. Please check back later.")}</p>
            <button
              onClick={() => navigate("/dashboardTwo")}
              className="premium-btn action-btn pulse"
              style={{ minWidth: "280px" }}
            >
              {t("ProductDetail.comingSoon.backButton", "Back to Products")}
            </button>
          </div>
        </div>
      );
    } else {
      // Show regular not found message for other products
      return (
        <div className="product-not-found">
          <Navbar />
          <h2>{t("ProductDetail.notFound.title")}</h2>
          <button
            onClick={() => navigate("/dashboardTwo")}
            className="premium-btn action-btn pulse"
            style={{ minWidth: "280px" }}
          >
            {t("ProductDetail.notFound.backButton")}
          </button>
        </div>
      );
    }
  }

  const handleNavClick = (section) => {
    setActiveSection(section);
    let targetRef;

    switch (section) {
      case "product":
        targetRef = productSectionRef;
        break;
      case "technical":
        targetRef = techInfoSectionRef;
        break;
      case "gallery":
        targetRef = gallerySectionRef;
        break;
      default:
        return;
    }

    if (!targetRef?.current) return;

    const desiredGap = 40;
    const top = targetRef.current.getBoundingClientRect().top + window.pageYOffset - desiredGap;

    isProgrammaticScroll.current = true;
    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 800);
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

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - startPos.x;
      const newY = e.clientY - startPos.y;

      const container = zoomContainerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const imgWidth = rect.width * zoomLevel;
        const imgHeight = rect.height * zoomLevel;
        const maxX = (imgWidth - rect.width) / 2;
        const maxY = (imgHeight - rect.height) / 2;

        setPosition({
          x: Math.max(-maxX, Math.min(maxX, newX)),
          y: Math.max(-maxY, Math.min(maxY, newY)),
        });
      }
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setStartPos({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
      e.preventDefault();
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
      const newX = e.touches[0].clientX - startPos.x;
      const newY = e.touches[0].clientY - startPos.y;

      const container = zoomContainerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const imgWidth = rect.width * zoomLevel;
        const imgHeight = rect.height * zoomLevel;
        const maxX = (imgWidth - rect.width) / 2;
        const maxY = (imgHeight - rect.height) / 2;

        setPosition({
          x: Math.max(-maxX, Math.min(maxX, newX)),
          y: Math.max(-maxY, Math.min(maxY, newY)),
        });
      }
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Get product title from translation with fallback
  const productTitle = t(`Products.${slug}.title`, { 
    defaultValue: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) 
  });

  return (
    <>
      <Navbar />

      <main ref={rootRef} className="product-detail-main">
        <h1 className="product-title reveal-on-scroll">{productTitle}</h1>

        <div className="header-stack reveal-on-scroll">
          <img
            src={product.image}
            alt={t("ProductDetail.headerImageAlt", { title: productTitle })}
            className="header-image left"
            draggable={false}
            loading="eager"
          />

          {product.image2 ? (
            <img
              src={product.image2}
              alt={t("ProductDetail.headerInfoImageAlt", { title: productTitle })}
              className="header-image right"
              draggable={false}
              loading="lazy"
            />
          ) : (
            <div className="header-image-placeholder" />
          )}
        </div>

        <div className="description-common-spec-container reveal-on-scroll">
          <div className="description-container">
            <p>{t(`Products.${slug}.description.intro`, { 
              defaultValue: "Product description not available. Please check back later." 
            })}</p>
          </div>

          <CommonSpec
            commonSpecs={{
              typeOfIllumination: t('CommonSpec.typeOfIllumination_value'),
              manufacturer: t('CommonSpec.manufacturer_value'),
              warranty: t('CommonSpec.warranty_value'),
              illuminationMode: t('CommonSpec.illuminationMode_value'),
              inputVoltage: t('CommonSpec.inputVoltage_value'),
              operatingTemperature: t('CommonSpec.operatingTemperature_value'),
              ipRating: t('CommonSpec.ipRating_value'),
              
              // This one is already translated because it's product title
              geometry: productTitle  
            }}
          />
        </div>

        <nav
          id="navbar"
          aria-label={t("ProductDetail.navigation.ariaLabel")}
          className="product-nav reveal-on-scroll"
        >
          <div className="nav-button-wrapper">
            <button
              onClick={() => handleNavClick("product")}
              aria-current={activeSection === "product" ? "page" : undefined}
              className={`nav-tab ${activeSection === "product" ? "active" : ""}`}
            >
              {t("ProductDetail.navigation.products")}
            </button>

            <button
              onClick={() => handleNavClick("technical")}
              aria-current={activeSection === "technical" ? "page" : undefined}
              className={`nav-tab ${activeSection === "technical" ? "active" : ""}`}
            >
              {t("ProductDetail.navigation.technical")}
            </button>

            <button
              onClick={() => handleNavClick("gallery")}
              aria-current={activeSection === "gallery" ? "page" : undefined}
              className={`nav-tab ${activeSection === "gallery" ? "active" : ""}`}
            >
              {t("ProductDetail.navigation.gallery")}
            </button>
          </div>
        </nav>

        <section
          ref={productSectionRef}
          id="product"
          className="section reveal-on-scroll"
          tabIndex={-1}
          aria-label={t("ProductDetail.navigation.products")}
        >
          <h2 className="section-title">{t("ProductDetail.section.products")}</h2>

          <ModelStructureTable product={product} slug={slug} navigate={navigate} />

          <div className="enquire-container reveal-on-scroll">
            <span>{t("ProductDetail.enquire.text")}</span>
            <button
              onClick={() =>
                navigate("/enquire", {
                  state: { 
                    productName: slug, 
                    from: location.pathname,
                    scrollTo: "product" // Add this to enable scroll back to product section
                  },
                })
              }
              className="enquire-btn"
            >
              {t("ProductDetail.enquire.button")}
            </button>
          </div>

          <div className="dimension-overview">
            <h3>{t("ProductDetail.dimension.title")}</h3>
            <div className="dimension-image-container reveal-on-scroll">
              <img
                src={dimensionImage}
                alt={t("ProductDetail.dimension.alt", { title: productTitle })}
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section
          ref={techInfoSectionRef}
          id="technical"
          className="section reveal-on-scroll"
          tabIndex={-1}
          aria-label={t("ProductDetail.navigation.technical")}
        >
          <h2 className="section-title-2">{t("ProductDetail.section.technical")}</h2>
          <TechnicalInfo product={product} />
        </section>

        <hr className="section-divider" />

        <section
          ref={gallerySectionRef}
          id="gallery"
          className="gallery-section reveal-on-scroll"
          tabIndex={-1}
          aria-label={t("ProductDetail.navigation.gallery")}
        >
          <h2 className="section-title-3">{t("ProductDetail.section.gallery")}</h2>

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

        <div className="back-to-products-container reveal-on-scroll">
          <button
            onClick={() => navigate("/dashboardTwo")}
            className="premium-btn action-btn pulse"
          >
            {t("ProductDetail.backToProducts")}
          </button>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;