import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Placeholder images (low-resolution versions for faster initial load)
import aerospacePlaceholder from "../assets/aerospace_placeholder.png";
import fmcgPlaceholder from "../assets/fmcg_placeholder.jpg";
import wirePlaceholder from "../assets/wire_placeholder.png";
import metalandminingPlaceholder from "../assets/metals_mining_placeholder.jpg";
import warehousePlaceholder from "../assets/warehouse-2_placeholder.jpg";
import plasticAndRubberPlaceholder from "../assets/plastic_rubber_placeholder.png";

// High-resolution images
import aerospaceImg from "../assets/aerospace.png";
import FMCGImg from "../assets/fmcg.jpg";
import wireImg from "../assets/wire.png";
import metalandminingImg from "../assets/Metals_Mining.jpg";
import WareHouseImg from "../assets/warehouse-2.jpg";
import PlasticAndRubberImg from "../assets/plastic_rubber.png";

const automobileVideo = "https://res.cloudinary.com/dpsdxf2bc/video/upload/q_auto/Expo_uxojqx.mp4";

const industryApplications = {
  automobile: {
    title: "Machine Vision Applications for Automobile Industry",
    video: automobileVideo,
    description:
      "The automobile industry focuses on vehicle design, manufacturing, inspection, and automation. Machine vision plays a vital role in quality assurance and safety.",
    applications: [
      "Part Inspection presence/absence",
      "Assembly Verification",
      "Robotic Guidance",
      "Paint Quality Inspection",
      "VIN (Vehicle Identification Number) Reading",
      "Tire Inspection",
      "Welding Inspection",
      "Dimension Measurement",
      "Pre-Dispatch Engine Inspection",
      "OCR (Optical Character Recognition) punch numbers",
      "Human action recognition",
      "Restricted area person detection",
      "Customise vision solution",
    ],
  },
  "metal-mining-cement": {
    title: "Machine Vision Applications for Metal, Mining and Cement Industry",
    image: metalandminingImg,
    placeholder: metalandminingPlaceholder,
    description:
      "Machine vision in metal, mining and cement industry ensures safe, efficient, and quality-driven processes through real-time inspection, analysis and monitoring.",
    applications: [
      "Surface Defect Detection",
      "Ore size classification",
      "Blast fragmentation analysis",
      "Belt misalignment detection",
      "Rock volume estimation",
      "Kiln and raw material monitoring",
      "Crack and void detection in cement structures",
      "Dust and emissions monitoring",
      "Safety & environment monitoring",
      "Customised vision solution",
    ],
  },
  "pharma-fmcg": {
    title: "Machine Vision Applications for Pharma and FMCG Industry",
    image: FMCGImg,
    placeholder: fmcgPlaceholder,
    description:
      "Pharma and FMCG industries rely on machine vision for fast, consistent quality control in high-speed production lines, ensuring brand integrity and compliance.",
    applications: [
      "Packaging Inspection",
      "Label Verification",
      "Product Counting",
      "Surface Defect Detection",
      "Code Reading and Verification",
      "Fill Level Inspection",
      "Colour Inspection",
      "Shape and Size Inspection",
      "Barcode and QR Code Reading",
      "Seal Integrity Verification",
      "Production Line Monitoring",
      "Customised vision solution",
    ],
  },
  "plastic-rubber": {
    title: "Machine Vision Applications for Plastic and Rubber Industry",
    image: PlasticAndRubberImg,
    placeholder: plasticAndRubberPlaceholder,
    description:
      "In plastic and rubber manufacturing, machine vision improves inspection speed, detects inconsistencies, and supports automation in molding and extrusion lines.",
    applications: [
      "Mold defect detection",
      "Edge and flash inspection",
      "Surface finish validation",
      "Color consistency monitoring",
      "Part geometry verification",
      "Burr and sink mark detection",
      "Shape and size classification",
      "Barcode and label validation",
      "Seal and joint verification",
      "Customised vision solution",
    ],
  },
  "warehouse-distribution": {
    title: "Machine Vision Applications for Warehouse and Distribution",
    image: WareHouseImg,
    placeholder: warehousePlaceholder,
    description:
      "Warehouse and distribution systems use machine vision for automation, inventory accuracy, package inspection, and workflow optimization.",
    applications: [
      "Barcode & QR code scanning",
      "Parcel dimensioning and sorting",
      "Damaged package detection",
      "Label verification",
      "Stacking & unstacking validation",
      "Inventory counting",
      "Dock safety monitoring",
      "Automated vehicle guidance",
      "Conveyor inspection",
      "Customised vision solution",
    ],
  },
  wire: {
    title: "Machine Vision Applications for Wire Industry",
    image: wireImg,
    placeholder: wirePlaceholder,
    description:
      "The wire industry uses machine vision for real-time monitoring, accurate measurements, and defect detection to maintain high production standards.",
    applications: [
      "Quality inspection",
      "Surface defect detection",
      "Wire alignment and positioning",
      "Dimension Inspection",
      "Wire counting/sorting",
      "Character Recognition",
      "Fault detection in wire drawing process",
    ],
  },
  aerospace: {
    title: "Machine Vision Applications for Aerospace Manufacturing Industry",
    image: aerospaceImg,
    placeholder: aerospacePlaceholder,
    description:
      "Machine vision in aerospace manufacturing ensures precision, safety, and compliance through automated visual inspection and tracking systems.",
    applications: [
      "Surface Defect Detection",
      "Manhour’s calculation",
      "Surface finishing inspection",
      "Part sequencing inspection",
      "Part orientation/pre-Fit check",
      "Dimension accuracy inspection",
      "Human action recognition",
      "Optical character",
      "Foreign Particles / Object Detection",
      "Safety & Security Checking",
      "Pre-Dispatch inspection",
      "Fire detection",
      "BIW inspection",
      "Customised vision solution",
    ],
  },
};

const IndustryDetail = () => {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const industry = industryApplications[industryId];
  const [fadeIn, setFadeIn] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    setFadeIn(true);
    // Only attempt to preload image if industry exists and has an image property
    if (industry && industry.image) {
      const img = new Image();
      img.src = industry.image;
      img.onload = () => setImageLoaded(true);
    }

    // Handle browser back navigation
    const handlePopstate = () => {
      if (!isNavigatingRef.current) {
        isNavigatingRef.current = true;
        setIsExiting(true);
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 200); // Match exit animation duration
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [industry]);

  const handleBackClick = () => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      navigate("/", { state: { isExiting: true } });
      isNavigatingRef.current = false;
    }, 200); // Match exit animation duration
  };

  // Redirect to a fallback route or handle invalid industryId
  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-2xl font-semibold text-red-600 bg-gray-100">
        <h2>Industry not found</h2>
        <button
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          onClick={handleBackClick}
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className={`industry-wrapper ${fadeIn ? "fade-in" : ""} ${isExiting ? "fade-out" : ""}`}>
      <div className="industry-container">
        <h1>{industry.title}</h1>

        <div className="media-section">
          {industryId === "automobile" ? (
            <video
              src={industry.video}
              autoPlay
              muted
              loop
              playsInline
              className="media-video"
              crossOrigin="anonymous"
              onError={(e) => console.error("Automobile video error:", e)}
            >
              <source src={industry.video} type="video/mp4" />
              <img src="/path/to/fallback-image.jpg" alt="Video unavailable" />
            </video>
          ) : (
            <div className="image-container">
              <img
                src={industry.placeholder}
                alt={`${industry.title} placeholder`}
                className={`media-image ${imageLoaded ? "hidden" : "visible"}`}
              />
              <img
                src={industry.image}
                alt={industry.title}
                className={`media-image ${imageLoaded ? "visible" : "hidden"}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          )}
        </div>

        <p className="industry-description">{industry.description}</p>

        <h2>Machine Vision Applications</h2>
        <ul className="applications-list">
          {industry.applications.map((app, idx) => (
            <li key={idx}>
              <span>{idx + 1}.</span> {app}
            </li>
          ))}
        </ul>

        <button
          className="back-btn"
          onClick={handleBackClick}
          aria-label="Go back to home"
        >
          ← Back to Home
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