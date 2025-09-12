import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImg from "../assets/About/aboutus.jpg";
import visionImg from "../assets/About/ourvision.png";
import missionImg from "../assets/About/mission.png";

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
    <>
      <style>{`
        * {
          font-family: 'Inter', sans-serif !important;
          cursor: url('https://cdn-icons-png.flaticon.com/512/25/25694.png'), auto;
        }
        .page-wrapper {
          width: 100%;
          background: #000;
          padding: 4rem 1rem;
          color: white;
          box-sizing: border-box;
        }
        .tab-container {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          background: #151515;
          padding: 0.7rem 0;
          border-radius: 10px;
          position: relative;
          box-shadow: 0 3px 15px rgba(0,0,0,0.6);
        }
        .tab {
          font-size: 1.2rem;
          font-weight: 600;
          padding: 0.7rem 1rem;
          color: #aaa;
          cursor: pointer;
          transition: color 0.3s ease;
          text-align: center;
          user-select: none;
          flex: 1;
          position: relative;
        }
        .tab:hover, .tab.active {
          color: #fff;
        }
        .tab::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: #ef3a3a;
          border-radius: 2px;
          transition: width 0.3s ease-out;
        }
        .tab.active::after {
          width: 180px;
        }
        .content-area {
          max-width: 1140px;
          margin: 2rem auto 0;
          padding: 3rem 2rem;
          background: #111;
          border-radius: 14px;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          gap: 2rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.08);
          box-sizing: border-box;
          min-height: 420px;
        }
        .text-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: center;
          padding: 0 2rem;
          box-sizing: border-box;
          height: 100%;
        }
        .text-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }
        .content-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: #fff;
        }
        .content-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ccc;
          max-width: 100%;
          white-space: pre-line;
          text-align: justify;
        }
        .image-section {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          max-width: 400px;
          height: 100%;
        }
        .image-section img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.4);
          user-select: none;
          pointer-events: none;
        }
        @media (max-width: 1100px) {
          .content-area {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1rem;
          }
          .content-heading {
            font-size: 1.6rem;
          }
          .content-text {
            font-size: 1rem;
          }
          .tab {
            font-size: 0.9rem;
            padding: 0.5rem;
          }
          .tab::after {
            height: 2px;
          }
          .tab.active::after {
            width: 60px;
          }
          .text-section {
            padding: 0 1rem;
          }
          .image-section {
            max-width: 100%;
            min-height: 250px;
          }
        }
      `}</style>

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
    </>
  );
}