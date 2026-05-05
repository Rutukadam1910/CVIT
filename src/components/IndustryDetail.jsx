import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Styles/IndustryDetail.css";

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

import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Footer from "./Footer";

const automobileVideo =
  "https://res.cloudinary.com/dpsdxf2bc/video/upload/q_auto/Expo_uxojqx.mp4";

// Media mapping - keys match translation keys exactly
const industryMedia = {
  automobile: { video: automobileVideo },
  metalMiningCement: { image: metalandminingImg, placeholder: metalandminingPlaceholder },
  pharmaFmcg: { image: FMCGImg, placeholder: fmcgPlaceholder },
  plasticRubber: { image: PlasticAndRubberImg, placeholder: plasticAndRubberPlaceholder },
  warehouseDistribution: { image: WareHouseImg, placeholder: warehousePlaceholder },
  wire: { image: wireImg, placeholder: wirePlaceholder },
  aerospace: { image: aerospaceImg, placeholder: aerospacePlaceholder },
};

// Reliable slug → translation key mapping
const getIndustryKey = (slug) => {
  if (!slug) return "";

  const lower = slug.toLowerCase().trim();

  const slugMap = {
    // Direct matches & common variations
    "automobile": "automobile",
    "auto": "automobile",
    "car": "automobile",

    "metal-mining-cement": "metalMiningCement",
    "metals-mining-cement": "metalMiningCement",
    "metalminingcement": "metalMiningCement",
    "mining": "metalMiningCement",
    "cement": "metalMiningCement",
    "metal": "metalMiningCement",

    "pharma-fmcg": "pharmaFmcg",
    "pharmafmcg": "pharmaFmcg",
    "fmcg": "pharmaFmcg",
    "pharma": "pharmaFmcg",

    "plastic-rubber": "plasticRubber",
    "rubber-plastic": "plasticRubber",
    "plasticrubber": "plasticRubber",
    "rubberplastic": "plasticRubber",
    "plasticandrubber": "plasticRubber",
    "plastics-rubber": "plasticRubber",
    "plasticsrubber": "plasticRubber",
    "rubber": "plasticRubber",
    "plastic": "plasticRubber",

    "warehouse-distribution": "warehouseDistribution",
    "warehousedistribution": "warehouseDistribution",
    "warehouse": "warehouseDistribution",
    "distribution": "warehouseDistribution",

    "wire": "wire",
    "wire-industry": "wire",
    "cable": "wire",
    "wires": "wire",

    "aerospace": "aerospace",
    "aviation": "aerospace",
  };

  // Return exact match if found
  if (slugMap[lower]) {
    return slugMap[lower];
  }

  // Fallback: convert kebab-case to camelCase
  return lower
    .split(/[-_ ]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
};

// Fallback content
const fallbackTranslations = {
  title: "Industry Not Found",
  description: "The requested industry is not available. Please try another industry.",
  applications: [],
};

const IndustryDetail = () => {
  const { industryId } = useParams();
  const { t, i18n } = useTranslation();

  const industryKey = getIndustryKey(industryId);
  const media = industryMedia[industryKey] || {};

  const [industryData, setIndustryData] = useState(fallbackTranslations);
  const [fadeIn, setFadeIn] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const data = t(`IndustryDetail.${industryKey}`, { returnObjects: true });

    if (data && data.title && data.description && Array.isArray(data.applications)) {
      setIndustryData(data);
    } else {
      setIndustryData(fallbackTranslations);
      console.warn(`No translation data found for key: ${industryKey} (original slug: ${industryId})`);
    }

    setFadeIn(true);

    // Preload high-res image if available
    if (media.image && industryKey !== "automobile") {
      const img = new Image();
      img.src = media.image;
      img.onload = () => setImageLoaded(true);
    }

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
  }, [industryKey, i18n.language, t, media.image]);

  // Debug logging - you can remove this in production
  useEffect(() => {
    console.log({
      urlSlug: industryId,
      resolvedKey: industryKey,
      hasTranslation: !!industryData?.title && industryData.title !== "Industry Not Found",
      hasMedia: !!media.image || !!media.video,
    });
  }, [industryId, industryKey, industryData, media]);

  return (
    <>
      <Navbar />
      <SideBar />

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
                  src={media.placeholder || "/fallback-placeholder.jpg"}
                  alt={`${industryData.title} placeholder`}
                  className={`media-image ${imageLoaded ? "hidden" : "visible"}`}
                />
                {media.image && (
                  <img
                    src={media.image}
                    alt={industryData.title}
                    className={`media-image ${imageLoaded ? "visible" : "hidden"}`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => console.error(`Failed to load high-res image: ${media.image}`)}
                  />
                )}
              </div>
            )}
          </div>

          <p className="industry-description">{industryData.description}</p>

          <h2>{t("MachineVisionApplications")}</h2>
          <ul className="applications-list">
            {industryData.applications?.length > 0 ? (
              industryData.applications.map((app, idx) => (
                <li key={idx}>
                  <span>{idx + 1}.</span> {app}
                </li>
              ))
            ) : (
              <li>{t("NoApplicationsAvailable")}</li>
            )}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IndustryDetail;