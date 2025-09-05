// 

import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

const backgroundVideo = "https://res.cloudinary.com/dpsdxf2bc/video/upload/q_auto/background_cimxfk.mp4";

// Lazy load heavy components
const CustomerBenefits = lazy(() => import("./CustomerBenefits"));
const Client = lazy(() => import("./Client"));
const CaseStudy = lazy(() => import("./CaseStudy"));
const Aboutus_Mission_Vision = lazy(() => import("./Aboutus_Mission_Vision"));
const CoreValues = lazy(() => import("./CoreValues"));
const Implementation = lazy(() => import("./Implementation"));
const OurExpertises = lazy(() => import("./OurExpertise"));
const SupportingPartners = lazy(() => import("./SupportingParteners"));
const Review = lazy(() => import("./Review"));
const ContactUs = lazy(() => import("./ContactUs"));
const Footer = lazy(() => import("./Footer"));

const IconCircle = ({ children, active }) => (
  <div
    style={{
      borderRadius: "50%",
      border: active ? "2.68px solid #49c4c4" : "1.675px solid white",
      width: "67px",
      height: "67px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: active ? "rgba(73, 196, 196, 0.1)" : "transparent",
      transition: "border-color 0.3s ease, background-color 0.3s ease",
    }}
    className="icon-circle"
  >
    <div className="icon-wrapper">{children}</div>
  </div>
);

const industries = [
  {
    id: "automobile",
    name: "Automobile",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <rect x="3" y="11" width="18" height="7" rx="2" />
        <circle cx="7.5" cy="18.5" r="2.5" />
        <circle cx="16.5" cy="18.5" r="2.5" />
        <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      </svg>
    ),
  },
  {
    id: "metal-mining-cement",
    name: "Metal, Mining and Cement",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <rect x="3" y="12" width="18" height="8" />
        <path d="M12 3v9" />
        <path d="M8 7h8" />
      </svg>
    ),
  },
  {
    id: "pharma-fmcg",
    name: "Pharma and FMCG",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <path d="M12 22V2M7 12h10" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    id: "plastic-rubber",
    name: "Plastic and Rubber Industry",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <rect x="3" y="12" width="18" height="8" />
        <path d="M7 12l3-5 3 5 4-8" />
      </svg>
    ),
  },
  {
    id: "warehouse-distribution",
    name: "Warehouse and Distribution",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <path d="M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    id: "wire",
    name: "Wire Industry",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" />
        <path d="M4 12c2 0 2 4 4 4s2-4 4-4 2 4 4 4 2-4 4-4" />
      </svg>
    ),
  },
  {
    id: "aerospace",
    name: "Aerospace",
    icon: (
      <svg width="26.8" height="26.8" fill="none" stroke="#ffffff" strokeWidth="1.005" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="icon">
        <path d="M12 2l3 7-3 13-3-13 3-7z" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
];

const Dashboard = () => {
  const [toggleState, setToggleState] = useState("dashboardOne");
  const [isSliding, setIsSliding] = useState(false);
  const [showRestContent, setShowRestContent] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const homeRef = useRef(null);
  const customerBenefitsRef = useRef(null);
  const caseStudyRef = useRef(null);
  const implementationRef = useRef(null);
  const clientRef = useRef(null);
  const contactUsRef = useRef(null);
  const videoRef = useRef(null);
  const navigateTimeoutRef = useRef(null);

  useEffect(() => {
    console.log("Dashboard mounted, location.state:", location.state);

    // Save video playback time
    const video = videoRef.current;
    if (video) {
      const savedTime = localStorage.getItem("videoCurrentTime");
      if (savedTime) {
        video.currentTime = parseFloat(savedTime);
      }
      video.addEventListener("timeupdate", () => {
        localStorage.setItem("videoCurrentTime", video.currentTime);
      });
    }

    // Handle popstate events (browser back/forward)
    const handlePopstate = () => {
      console.log("Popstate triggered, current location:", location.pathname, location.state);
      if (location.pathname !== "/" && !location.state?.scrollTo) {
        setIsTransitioning(true);
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        navigate("/", { replace: true, state: { scrollTo: "Home" } });
      }
    };

    // Handle scrolling based on navigation state
    const scrollTo = location.state?.scrollTo;
    console.log("ScrollTo value:", scrollTo, "Pathname:", location.pathname);
    if (scrollTo && location.pathname === "/") {
      setIsTransitioning(true);
      switch (scrollTo) {
        case "Home":
          console.log("Scrolling to Home, ref:", homeRef.current);
          homeRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Customer Benefits":
          console.log("Scrolling to Customer Benefits, ref:", customerBenefitsRef.current);
          customerBenefitsRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Our Case Studies":
          console.log("Scrolling to Case Studies, ref:", caseStudyRef.current);
          caseStudyRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Implementation Roadmap":
          console.log("Scrolling to Implementation, ref:", implementationRef.current);
          implementationRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Our Clients":
          console.log("Scrolling to Clients, ref:", clientRef.current);
          clientRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Contact Us":
          console.log("Scrolling to Contact Us, ref:", contactUsRef.current);
          if (contactUsRef.current) {
            contactUsRef.current.scrollIntoView({ behavior: "smooth" });
          } else {
            console.warn("ContactUs ref is null, falling back to ID-based scroll");
            const contactUsElement = document.getElementById("contact-us-section");
            contactUsElement?.scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "About Us":
        case "Our Vision":
        case "Our Mission":
          console.log("Scrolling to Home for About Us/Vision/Mission, ref:", homeRef.current);
          homeRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          console.log("Scrolling to Home (default), ref:", homeRef.current);
          homeRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
      }
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    }

    // Set showRestContent based on navigation state
    if (location.state?.showRestContent === false) {
      setShowRestContent(false);
    } else {
      setShowRestContent(true);
      setIsSliding(false); // Ensure no sliding animation on initial load
    }

    // Add popstate listener
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
      if (navigateTimeoutRef.current) {
        clearTimeout(navigateTimeoutRef.current);
      }
      if (video) {
        video.removeEventListener("timeupdate", () => {});
      }
    };
  }, [location, navigate]);

  const handleToggle = () => {
    if (navigateTimeoutRef.current) return; // Prevent rapid toggling
    setIsSliding(true);
    setShowRestContent(false);

    const newState = toggleState === "dashboardOne" ? "dashboardTwo" : "dashboardOne";
    setToggleState(newState);

    navigateTimeoutRef.current = setTimeout(() => {
      setIsSliding(false);
      if (newState === "dashboardTwo") {
        navigate("/dashboardTwo", { state: { showRestContent: false } });
      } else {
        setShowRestContent(true);
        navigate("/", { replace: true, state: { scrollTo: "Home" } });
      }
      navigateTimeoutRef.current = null;
    }, 500);
  };

  const handleIndustryClick = (id) => {
    if (navigateTimeoutRef.current) return; // Prevent rapid navigation
    console.log("Navigating to industry:", id);
    setIsTransitioning(true);
    navigateTimeoutRef.current = setTimeout(() => {
      navigate(`/industry/${id}`, { state: { scrollTo: null } });
      navigateTimeoutRef.current = null;
    }, 200); // Short delay to allow transition
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }
        .dashboard-container {
          width: 100%;
          color: white;
          overflow-x: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          opacity: ${isTransitioning ? 0 : 1};
          transform: ${isTransitioning ? 'translateY(20px)' : 'translateY(0)'};
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .video-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
        }
        .video-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
        }
        .content-wrapper {
          width: 100%;
          max-width: 2000px;
          padding: 3rem;
          margin: 40.6px auto;
          box-sizing: border-box;
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
          transform: translateX(100%);
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
          width: 170px;
          height: 180.9px;
          background: rgba(255, 255, 255, 0.08);
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
          padding-top: 2.144rem;
          transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
        .industry-card:hover {
          background-color: #f2f2f2;
          color: #222;
          transform: translateY(-4.02px);
        }
        .industry-card:hover .icon {
          stroke: #EF3A3A !important;
        }
        .industry-card:hover .icon-circle {
          border-color: #EF3A3A !important;
        }
        .icon-circle {
          width: 67px;
          height: 67px;
          border-radius: 50%;
          border: 2.68px solid white;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 !important;
        }
        .icon-wrapper svg {
          margin: 0 auto;
          display: block;
          width: 26.8px;
          height: 26.8px;
        }
        .industry-name {
          font-size: 0.938rem;
          font-weight: 600;
          margin-top: 0.67rem;
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 10px;
          box-sizing: border-box;
        }
        .industry-card:hover .industry-name {
          color: #EF3A3A;
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
        .loading-placeholder {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: white;
          font-size: 1.2rem;
          opacity: 0.7;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 12px;
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

      <div className="dashboard-container" ref={homeRef}>
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
                if (e.key === "Enter" || e.key === " ") handleToggle();
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
            {toggleState === "dashboardOne" && (
              <section>
                <div className="industries-grid">
                  {industries.map(({ id, name, icon }) => (
                    <div
                      key={id}
                      className="industry-card"
                      onClick={() => handleIndustryClick(id)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleIndustryClick(id);
                        }
                      }}
                      role="button"
                    >
                      <IconCircle>{icon}</IconCircle>
                      <div className="industry-name">{name}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
        {showRestContent && (
          <Suspense fallback={<div className="loading-placeholder">Loading content...</div>}>
            <section style={{ marginTop: "1.68rem" }} ref={customerBenefitsRef}>
              <CustomerBenefits />
            </section>
            <section ref={clientRef}>
              <Client />
            </section>
            <section ref={caseStudyRef}>
              <CaseStudy />
            </section>
            <section>
              <Aboutus_Mission_Vision />
            </section>
            <section>
              <CoreValues />
            </section>
            <section ref={implementationRef}>
              <Implementation />
            </section>
            <section>
              <OurExpertises />
            </section>
            <section>
              <SupportingPartners />
            </section>
            <section>
              <Review />
            </section>
            <section id="contact-us-section" ref={contactUsRef}>
              {console.log("ContactUs section rendered, ref:", contactUsRef.current)}
              <ContactUs />
            </section>
            <section>
              <Footer />
            </section>
          </Suspense>
        )}
      </div>
    </>
  );
};

export default Dashboard;