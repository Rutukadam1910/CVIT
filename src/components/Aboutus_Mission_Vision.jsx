import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImg from "../assets/About/aboutus.jpg";
import visionImg from "../assets/About/ourvision.png";
import missionImg from "../assets/About/mission.png";
import "../Styles/Aboutus_Mission_Vision.css";

const sections = [
  {
    id: "about",
    title: "ABOUT US",
    heading: "Pushing the Boundaries",
    text: `At CVIT Solution, we are dedicated to pushing the boundaries of computer vision to address critical challenges across various industries. We specialize in developing cutting-edge computer vision applications. Harnessing the power of Artificial Intelligence, we enable businesses to automate tasks, gain valuable insights from visual data, and create innovative applications that were once considered impossible.`,
    img: aboutImg,
  },
  {
    id: "vision",
    title: "OUR VISION",
    heading: "Create Safer, More Efficient, and Intelligent Systems",
    text: `Our vision is to be at the forefront of innovation, leveraging the potential of computer vision to solve complex problems. We believe that computer vision has the capacity to transform industries and create safer, more efficient, and intelligent systems.`,
    img: visionImg,
  },
  {
    id: "mission",
    title: "OUR MISSION",
    heading: "Make a Defect-Free Industry",
    text: `Our mission is to make a defect-free industry through our advanced machine vision systems.`,
    img: missionImg,
  },
];

export default function Aboutus_Mission_Vision({ initialTab }) {
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
      img.src = section.img;
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
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(sec.id);
              }
            }}
          >
            {sec.title}
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
                {sections.find((s) => s.id === active)?.heading}
              </h2>
              <p className="content-text">
                {sections.find((s) => s.id === active)?.text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="image-section">
          {sections.map((sec) => {
            const isActive = sec.id === active;
            const isLoaded = loadedImages[sec.id] || false;
            return (
              <motion.img
                key={sec.id}
                src={sec.img}
                alt={sec.title}
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