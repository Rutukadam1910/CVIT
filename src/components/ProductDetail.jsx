import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import barLight from "../assets/Lights/BarLight.png";
import domeLight from "../assets/Lights/DomeLight.png";
import ringLight from "../assets/Lights/RingLight.png";
import angledRingLight from "../assets/Lights/AngledRingLight.png";
import tunnelLight from "../assets/Lights/TunnelLight.png";
import spotLight from "../assets/Lights/SpotLight.png";
import flatLightCenterHole from "../assets/Lights/DirectDiffusedLight.png";
import flatLight from "../assets/Lights/DiffusedLight.png";
import indirectFlatLight from "../assets/Lights/IndirectFlatLight.png";
import backLight from "../assets/Lights/BackLight.png";

const products = [
  {
    id: "machine-vision-bar-light",
    title: "Machine Vision Bar Light",
    fullDescription:
      "The Machine Vision Bar Light provides uniform illumination ideal for linear inspections. It features a robust design that ensures consistent lighting over extended lengths, perfect for conveyor-based or linear object inspection tasks. It supports multiple wavelengths and intensities for flexible application.",
    image: barLight,
  },
  {
    id: "machine-vision-dome-light",
    title: "Machine Vision Dome Light",
    fullDescription:
      "The Machine Vision Dome Light offers shadow-free lighting, making it ideal for inspecting curved and reflective objects. Its dome shape diffuses the light uniformly across the surface, reducing glare and enhancing image clarity for reliable machine vision inspections.",
    image: domeLight,
  },
  {
    id: "machine-vision-ring-light",
    title: "Machine Vision Ring Light",
    fullDescription:
      "This economical Machine Vision Ring Light provides bright, uniform lighting for surface and edge inspections. It is easy to mount around cameras and offers versatile illumination options suitable for various object types and inspection environments.",
    image: ringLight,
  },
  {
    id: "machine-vision-angled-ring-light",
    title: "Machine Vision Angled Ring Light",
    fullDescription:
      "The Angled Ring Light is designed to provide angled illumination, which highlights fine surface details and texture variations. It is perfect for enhancing contrast in surface inspection and defect detection applications.",
    image: angledRingLight,
  },
  {
    id: "machine-vision-indirect-tunnel-light",
    title: "Machine Vision Indirect Tunnel Light",
    fullDescription:
      "The Indirect Tunnel Light provides distinctive tunnel illumination ideal for cylindrical or complex shaped parts. This lighting minimizes direct reflections and enhances edge and shape inspection accuracy.",
    image: tunnelLight,
  },
  {
    id: "machine-vision-spot-light",
    title: "Machine Vision Spot Light",
    fullDescription:
      "This high-intensity Machine Vision Spot Light offers concentrated illumination focused on small areas, suitable for precise applications requiring high brightness and detail visibility.",
    image: spotLight,
  },
  {
    id: "machine-vision-flat-direct-diffused-light-center-hole",
    title: "Machine Vision Flat Direct Diffused Light (With Center Hole)",
    fullDescription:
      "The Flat Direct Diffused Light with a Center Hole provides even, flat illumination while allowing space in the center for camera lenses or sensors. It's effective in preventing shadows and ensuring uniform lighting.",
    image: flatLightCenterHole,
  },
  {
    id: "machine-vision-flat-direct-diffused-light",
    title: "Machine Vision Flat Direct Diffused Light",
    fullDescription:
      "The Flat Direct Diffused Light offers uniform, direct illumination that covers large areas uniformly. It is suitable for surface inspection across broad or flat surfaces with minimal shadows.",
    image: flatLight,
  },
  {
    id: "machine-vision-indirect-flat-light",
    title: "Machine Vision Indirect Flat Light",
    fullDescription:
      "Indirect Flat Light reduces glare and reflections by bouncing light indirectly onto the inspection object. This creates softer shadows and improves contrast, especially for shiny or reflective surfaces.",
    image: indirectFlatLight,
  },
  {
    id: "machine-vision-back-light",
    title: "Machine Vision Back Light",
    fullDescription:
      "The Machine Vision Back Light provides a bright and even backlight suitable for silhouette inspections, edge detection, and measurement applications. It ensures clear contrast between the object and background.",
    image: backLight,
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h2>Product Not Found</h2>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "1.5rem",
            padding: "0.6rem 1.2rem",
            backgroundColor: "#3e2723",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            fontFamily: `'Georgia', serif`,
          }}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .back-button-container {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
          margin-bottom: 3rem;
        }
        .back-button {
          background-color: #3e2723;
          border: none;
          color: white;
          padding: 0.85rem 2.2rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 1.1rem;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(62, 39, 35, 0.35);
          font-family: 'Georgia', serif;
          letter-spacing: 0.1em;
          transition: background-color 0.3s ease;
          user-select: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          max-width: 160px;
          justify-content: center;
        }
        .back-button:hover {
          background-color: #5d4037;
        }
        .detail-container {
          max-width: 2000px;
          height : 1000px;
          margin: 0 auto 4rem auto;
          background: #faf7f1;
          border-radius: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          color: #1a1a1a;
          font-family: 'Georgia', serif;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 2.5rem 3rem 3rem;
          align-items: center;
        }
        .detail-image {
          flex: 1 1 1000px;
          max-width: 800px;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .detail-image:hover {
          transform: scale(1.02);
        }
        .detail-content {
          flex: 1 1 500px;
          padding: 1rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .detail-title {
          color: #3e2723;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          line-height: 1.1;
          font-style: normal;
        }
        .detail-description {
          font-size: 1.2rem;
          color: #4a4a4a;
          font-style: italic;
          line-height: 1.8;
          font-weight: 400;
          max-width: 620px;
          border-left: 3px solid #3e2723;
          padding-left: 1.5rem;
          letter-spacing: 0.02em;
        }
        @media (max-width: 768px) {
          .detail-container {
            flex-direction: column;
            max-width: 90vw;
            padding: 2rem 1.5rem 2rem;
          }
          .detail-image,
          .detail-content {
            flex: 1 1 100%;
            max-width: 100%;
            padding: 0;
          }
          .detail-title {
            font-size: 2.4rem;
            text-align: center;
          }
          .detail-description {
            max-width: 100%;
            border-left: none;
            padding-left: 0;
            font-size: 1rem;
            text-align: center;
            font-style: normal;
          }
          .back-button-container {
            margin-top: 1.5rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      <article className="detail-container">
        <img src={product.image} alt={product.title} className="detail-image" />
        <div className="detail-content">
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-description">{product.fullDescription}</p>
        </div>
      </article>
    </>
  );
};

export default ProductDetail;


