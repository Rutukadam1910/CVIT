import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Placeholder images
import aerospacePlaceholder from "../assets/Placeholder/aerospace_placeholder.png";
import fmcgPlaceholder from "../assets/Placeholder/fmcg_placeholder.jpg";
import wirePlaceholder from "../assets/Placeholder/wire_placeholder.png";
import metalandminingPlaceholder from "../assets/Placeholder/Metals_Mining_placeholder.jpg";
import warehousePlaceholder from "../assets/Placeholder/warehouse-2_placeholder.jpg";
import plasticAndRubberPlaceholder from "../assets/Placeholder/plastic_rubber_placeholder.png";

// High-resolution images
import aerospaceImg from "../assets/Industry/aerospace.png";
import FMCGImg from "../assets/Industry/fmcg.jpg";
import wireImg from "../assets/Industry/wire.png";
import metalandminingImg from "../assets/Industry/Metals_Mining.jpg";
import WareHouseImg from "../assets/Industry/warehouse-2.jpg";
import PlasticAndRubberImg from "../assets/Industry/plastic_rubber.png";

const automobileVideo =
  "https://res.cloudinary.com/dpsdxf2bc/video/upload/q_auto/Expo_uxojqx.mp4";

// Map industry keys to media assets
const industryMedia = {
  automobile: { video: automobileVideo },
  metalMiningCement: { image: metalandminingImg, placeholder: metalandminingPlaceholder },
  pharmaFmcg: {
    image: FMCGImg, placeholder: fmcgPlaceholder,
  },
  plasticRubber: { image: PlasticAndRubberImg, placeholder: plasticAndRubberPlaceholder },
  warehouseDistribution: { image: WareHouseImg, placeholder: warehousePlaceholder },
  wire: { image: wireImg, placeholder: wirePlaceholder },
  aerospace: { image: aerospaceImg, placeholder: aerospacePlaceholder },
};

// Utility: Convert slug to camelCase
const slugToCamelCase = (slug) =>
  slug
    .toLowerCase()
    .split("-")
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join("");

// Fallback translations
const fallbackTranslations = {
  title: "Industry Not Found",
  description: "The requested industry is not available. Please try another industry.",
  applications: [],
};

const IndustryDetail = () => {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const industryKey = industryId ? slugToCamelCase(industryId) : "";
  const media = industryMedia[industryKey] || {};

  const [industryData, setIndustryData] = useState(fallbackTranslations);
  const [fadeIn, setFadeIn] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isNavigatingRef = useRef(false);

  // Update translations when language or industryKey changes
  useEffect(() => {
    const data = t(`IndustryDetail.${industryKey}`, { returnObjects: true });
    if (data && data.title && data.description && Array.isArray(data.applications)) {
      setIndustryData(data);
    } else {
      setIndustryData(fallbackTranslations);
      console.error(`Invalid translations for industryKey: ${industryKey}`);
    }
    setFadeIn(true);

    // Preload high-res image if available
    if (media.image && industryKey !== "automobile") {
      const img = new Image();
      img.src = media.image;
      img.onload = () => setImageLoaded(true);
    }

    // Handle back navigation
    const handlePopstate = () => {
      if (!isNavigatingRef.current) {
        isNavigatingRef.current = true;
        setIsExiting(true);
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 200);
      }
    };
    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, [industryKey, i18n.language, t]);

  const handleBackClick = () => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      navigate("/", { state: { isExiting: true } });
      isNavigatingRef.current = false;
    }, 200);
  };

  return (
    <div className={`industry-wrapper ${fadeIn ? "fade-in" : ""} ${isExiting ? "fade-out" : ""}`}>
      <div className="industry-container">
        <h1>{industryData.title}</h1>

        <div className="media-section">
          {industryKey === "automobile" ? (
            <video
              src={media.video}
              autoPlay
              muted
              loop
              playsInline
              className="media-video"
              onError={(e) =>
                console.error("Automobile video error:", {
                  message: e.target.error?.message,
                  code: e.target.error?.code,
                  src: e.target.currentSrc,
                })
              }
            >
              <source src={media.video} type="video/mp4" />
              <img src={media.placeholder} alt={t("VideoUnavailable")} />
            </video>
          ) : (
            <div className="image-container">
              <img
                src={media.placeholder}
                alt={`${industryData.title} placeholder`}
                className={`media-image ${imageLoaded ? "hidden" : "visible"}`}
              />
              <img
                src={media.image}
                alt={industryData.title}
                className={`media-image ${imageLoaded ? "visible" : "hidden"}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          )}
        </div>

        <p className="industry-description">{industryData.description}</p>

        <h2>{t("MachineVisionApplications")}</h2>
        <ul className="applications-list">
          {industryData.applications.length > 0
            ? industryData.applications.map((app, idx) => (
                <li key={idx}>
                  <span>{idx + 1}.</span> {app}
                </li>
              ))
            : <li>{t("NoApplicationsAvailable")}</li>}
        </ul>

        <button className="back-btn" onClick={handleBackClick} aria-label={t("BackToHomeAriaLabel")}>
          ← {t("BackToHome")}
        </button>
      </div>

      <style>{`
        .industry-wrapper {
          min-height: 1400px;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          padding: 0px 16px;
        }

        .industry-container {
          max-width: 1600px;
          margin: 0 auto;
          background: #fff;
          border-radius: 16px;
          padding: 50px;
          font-family: 'Inter', sans-serif;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          will-change: opacity, transform;
          transform: translateZ(0); /* Force GPU acceleration */
        }

        .industry-wrapper.fade-in .industry-container {
          opacity: 1;
          transform: translateY(0);
        }

        .industry-wrapper.fade-out .industry-container {
          opacity: 0;
          transform: translateY(5px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .industry-container h1 {
          font-size: 1.9rem;
          font-weight: 800;
          color: #ef3a3a;
          margin-bottom: 30px;
          letter-spacing: -0.025em;
          transition: color 0.3s ease;
        }

        .back-btn {
          display: block;
          margin: 40px auto 20px;
          background: #ef3a3a;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .back-btn:hover {
          background: #c53030;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .back-btn:focus-visible {
          outline: 2px solid #c53030;
          outline-offset: 2px;
        }

        .back-btn:active {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .media-section {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          margin-bottom: 30px;
          position: relative;
          width: 100%;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 540px;
          background: #f8fafc;
        }

        .media-video {
          width: 100%;
          height: 540px;
          object-fit: cover;
        }

        .media-image {
          width: 100%;
          height: 540px;
          object-fit: cover;
          background: #f8fafc;
          transition: opacity 0.5s ease-in-out;
        }

        .media-image.hidden {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
        }

        .media-image.visible {
          opacity: 1;
        }

        .industry-description {
          font-size: 1.15rem;
          color: #1e293b;
          line-height: 1.8;
          max-width: 900px;
          margin: 0 auto 40px;
          font-weight: 400;
        }

        .industry-container h2 {
          font-size: 2.25rem;
          color: #ef3a3a;
          margin-bottom: 20px;
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        .applications-list {
          text-align: left;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .applications-list li {
          background: #f8fafc;
          border-left: 5px solid #ef3a3a;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 500;
          color: #1e293b;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .applications-list li:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .industry-container {
            padding: 24px;
          }
          .media-video,
          .media-image {
            height: 200px;
          }
          .image-container {
            height: 200px;
          }
          .industry-container h1 {
            font-size: 2rem;
          }
          .industry-description {
            font-size: 1rem;
          }
          .industry-container h2 {
            font-size: 1.75rem;
          }
          .back-btn {
            margin: 30px auto 10px;
            padding: 8px 16px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default IndustryDetail;