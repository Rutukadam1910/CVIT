import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import aboutImg from "../assets/About/aboutus.jpg";
import visionImg from "../assets/About/ourvision.png";
import missionImg from "../assets/About/mission.png";
import "../Styles/Aboutus_Mission_Vision.css";

const sections = [
  {
    id: "about",
    translationKey: "AboutUsMissionVision.about",
  },
  {
    id: "vision",
    translationKey: "AboutUsMissionVision.vision",
  },
  {
    id: "mission",
    translationKey: "AboutUsMissionVision.mission",
  },
];

export default function Aboutus_Mission_Vision({ initialTab }) {
  const { t } = useTranslation();
  const [active, setActive] = useState("about");
  const [loadedImages, setLoadedImages] = useState({});

  // Set initial active tab if provided
  useEffect(() => {
    if (initialTab && sections.some((s) => s.id === initialTab)) {
      setActive(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    const section = sections.find((s) => s.id === active);
    if (section && !loadedImages[section.id]) {
      const img = new Image();
      img.src = section.id === "about" ? aboutImg : section.id === "vision" ? visionImg : missionImg;
      img.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [section.id]: true }));
    }
  }, [active, loadedImages]);

  const fadeSlide = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.97,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="page-wrapper">
      <div className="tab-container">
        {sections.map((sec) => (
          <div
            key={sec.id}
            className={`tab ${active === sec.id ? "active" : ""}`}
            onClick={() => setActive(sec.id)}
            tabIndex={0}
            role="tab"
            aria-selected={active === sec.id}
            aria-label={t(`${sec.translationKey}.ariaLabel`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(sec.id);
              }
            }}
          >
            {t(`${sec.translationKey}.title`)}
          </div>
        ))}
      </div>

      <div className="content-area">
        <AnimatePresence mode="wait">
          <motion.div
            className="text-section"
            key={active}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeSlide}
          >
            <div className="text-wrapper">
              <h2 className="content-heading">
                {t(`${sections.find((s) => s.id === active)?.translationKey}.heading`)}
              </h2>
              <p className="content-text">
                {t(`${sections.find((s) => s.id === active)?.translationKey}.text`)}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="image-section">
          {sections.map((sec) => {
            const isActive = sec.id === active;
            const isLoaded = loadedImages[sec.id] || false;
            const imgSrc = sec.id === "about" ? aboutImg : sec.id === "vision" ? visionImg : missionImg;
            return (
              <motion.img
                key={sec.id}
                src={imgSrc}
                alt={t(`${sec.translationKey}.imageAlt`)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: isActive && isLoaded ? 1 : 0,
                  scale: isActive && isLoaded ? 1 : 0.95,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ zIndex: isActive ? 2 : 1 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}