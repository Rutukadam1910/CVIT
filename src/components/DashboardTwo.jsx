// 

import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const backgroundVideo = "https://res.cloudinary.com/dpsdxf2bc/video/upload/q_auto/background_cimxfk.mp4";

import Bar_Light from "../assets/Bar_Light.png";
import Ring_Light from "../assets/Ring_Light.png";
import Dome_Light from "../assets/Dome_Light.png";
import Flat_Diffused_Light_With_Center_Hole from "../assets/Flat_Direct_Diffused_Light_With_Center_Hole.png";
import Flat_Diffused_Light from "../assets/Flat_Direct_Diffused_Light.png";
import Indirect_Flat_Light from "../assets/Indirect_Flat_Light.png";
import Back_Light from "../assets/Back_Light.png";
import Spot_Light from "../assets/Spot_Light.png";
import Tunnel_Light from "../assets/Tunnel_Light.png";

const products = [
  { name: "Bar Light", image: Bar_Light },
  { name: "Ring Light", image: Ring_Light },
  { name: "Dome Light", image: Dome_Light },
  { name: "Flat Diffused Light With Center Hole", image: Flat_Diffused_Light_With_Center_Hole },
  { name: "Flat Diffused Light", image: Flat_Diffused_Light },
  { name: "Indirect Flat Light", image: Indirect_Flat_Light },
  { name: "Back Light", image: Back_Light },
  { name: "Spot Light", image: Spot_Light },
  { name: "Tunnel Light", image: Tunnel_Light },
];

const toSlug = (name) =>
  name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const DashboardTwo = () => {
  const [toggleState, setToggleState] = useState("dashboardTwo");
  const [isSliding, setIsSliding] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    // Restore video time from localStorage
    const savedTime = localStorage.getItem("videoCurrentTime");
    if (videoRef.current && savedTime) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }

    // Update video time in localStorage on timeupdate
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        localStorage.setItem("videoCurrentTime", videoRef.current.currentTime);
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Reset isSliding to ensure slide-in animation
    setIsSliding(false);

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handleToggle = () => {
    setIsSliding(true);
    const newState = toggleState === "dashboardTwo" ? "dashboardOne" : "dashboardTwo";
    setToggleState(newState);

    setTimeout(() => {
      setIsSliding(false);
      if (newState === "dashboardOne") {
        if (videoRef.current) {
          localStorage.setItem("videoCurrentTime", videoRef.current.currentTime);
        }
        navigate("/", { state: { showRestContent: true } });
      }
    }, 500); // Maintain 500ms as requested
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background: #000;
        }
        .dashboard-container {
          width: 100%;
          color: white;
          overflow-x: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }
        .video-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 102vw;
          height: 102vh;
          z-index: 0;
        }
        .video-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15,15,15, 0.75);
        }
        .content-wrapper {
          width: 100%;
          max-width: 2000px;
          padding: 3rem;
          margin: 40.6px auto;
          box-sizing: border-box;
          position: relative;
          z-index: 2;
        }
        .heading-section {
          text-align: center;
          margin-bottom: 1.68rem;
        }
        .heading-section h1 {
          font-family: "Special Gothic Expanded One", sans-serif;
          font-weight: 700;
          font-size: 4.35vw;
          color: #EF3A3A;
          text-shadow: 0 0 5.36px rgba(239, 58, 58, 0.5);
        }
        .heading-section h2 {
          font-size: 2vw;
          color: white;
          font-weight: 700;
        }
        .slider-toggle-container {
          display: flex;
          justify-content: center;
          margin: 2.01rem 0 2.68rem;
          cursor: pointer;
        }
        .slider-toggle {
          position: relative;
          width: 40.2%;
          max-width: 402px;
          height: 68px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(4.02px);
          border: 0.67px solid rgba(255, 255, 255, 0.08);
          border-radius: 33.5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5.36px;
          box-shadow: 0 4.02px 12.06px rgba(0, 0, 0, 0.35);
          cursor: pointer;
          user-select: none;
            cursor: pointer;
        }
        .toggle-option {
          width: 50%;
          text-align: center;
          font-size: 0.938rem;
          font-weight: 700;
          z-index: 2;
          color: white;
           cursor: pointer;
        }
        .slider-indicator {
          position: absolute;
          width: 49%;
          height: 87%;
          background: #EF3A3A;
          border-radius: 30.8px;
          top: 7%;
          left: 5.36px;
          transition: transform 0.5s ease-in-out;
          z-index: 1;
          cursor: pointer;
        }
        .slider-toggle.right .slider-indicator {
          transform: translateX(99%);
            cursor: pointer;
        }
        .industries-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.8rem;
        }
        .industry-card {
          width: 130px;
          height: 190.9px;
          background: rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(4.02px);
          border-radius: 20.1px;
          box-shadow: 0 4.02px 12.06px rgba(0, 0, 0, 0.35);
          color: white;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 1rem;
          transition: transform 0.3s ease;
          text-align: center;
          user-select: none;
          z-index: 2;
        }
        .industry-card:hover {
          background-color: #f2f2f2;
          color: #222;
          transform: translateY(-4.02px);
        }
        .industry-name {
          font-size: 1rem;
          font-weight: 600;
          margin-top: 20px;
          word-break: break-word;
        }
        .industry-card:hover .industry-name {
          color: #EF3A3A;
        }
        .industry-logo {
          width: 70px;
          height: 70px;
          object-fit: contain;
          border-radius: 12px;
          user-select: none;
          pointer-events: none;
          filter: drop-shadow(0 0 2px rgba(0,0,0,0.7));
        }
        .dashboard-content {
          transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        }
        .dashboard-content.slide-out {
          transform: translateX(-100%);
          opacity: 0;
        }
        .dashboard-content.slide-in {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>

      <Navbar />

      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={backgroundVideo}
          crossOrigin="anonymous"
          aria-hidden="true"
          onError={(e) => console.error("Background video error:", e)}
        >
          <source src={backgroundVideo} type="video/mp4" />
          <img src="/path/to/fallback-image.jpg" alt="Video unavailable" />
        </video>
        <div className="video-overlay" />
      </div>


      <div className="dashboard-container" aria-label="Dashboard Two - Products">
        <div className="content-wrapper">
          <div className="heading-section">
            <h1>The Future Of AI Is Here !</h1>
            <h2>CVIT Solution Pvt Ltd</h2>
          </div>

          <div className="slider-toggle-container">
            <div
              className={`slider-toggle ${toggleState === "dashboardOne" ? "left" : "right"}`}
              onClick={handleToggle}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggle();
                }
              }}
              aria-pressed={toggleState === "dashboardTwo"}
              aria-label="Toggle dashboard view"
            >
              <div className="toggle-option">Solutions</div>
              <div className="toggle-option">Machine Vision Light</div>
              <div className="slider-indicator" />
            </div>
          </div>

          <div className={`dashboard-content ${isSliding ? "slide-out" : "slide-in"}`}>
            {toggleState === "dashboardTwo" && (
              <section>
                <div className="industries-grid" role="list">
                  {products.map(({ name, image }) => {
                    const slug = toSlug(name);
                    return (
                      <div
                        key={slug}
                        className="industry-card"
                        onClick={() => navigate(`/product/${slug}`)}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            navigate(`/product/${slug}`);
                          }
                        }}
                        role="listitem"
                        aria-label={`Go to details for product ${name}`}
                      >
                        <img
                          src={image}
                          alt={`${name} logo`}
                          className="industry-logo"
                          draggable={false}
                          loading="lazy"
                        />
                        <div className="industry-name">{name}</div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTwo;