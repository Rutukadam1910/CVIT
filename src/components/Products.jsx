import React from "react";
import { useNavigate } from "react-router-dom";

import barLight from "../assets/BarLight.png";
import domeLight from "../assets/DomeLight.png";
import ringLight from "../assets/RingLight.png";
import angledRingLight from "../assets/AngledRingLight.png";
import tunnelLight from "../assets/TunnelLight.png";
import spotLight from "../assets/SpotLight.png";
import flatLightCenterHole from "../assets/DirectDiffusedLight.png";
import flatLight from "../assets/DiffusedLight.png";
import indirectFlatLight from "../assets/IndirectFlatLight.png";
import backLight from "../assets/BackLight.png";

const products = [
  {
    id: "machine-vision-bar-light",
    title: "Bar Light",
    description: "Description of Bar Light",
    image: barLight,
  },
  {
    id: "machine-vision-dome-light",
    title: "Dome Light",
    description: "Description of Dome Light",
    image: domeLight,
  },
  {
    id: "machine-vision-ring-light",
    title: "Ring Light",
    description: "Description of Ring Light",
    image: ringLight,
  },
  {
    id: "machine-vision-angled-ring-light",
    title: "Angled Ring Light",
    description: "Description of Angled Ring Light",
    image: angledRingLight,
  },
  {
    id: "machine-vision-indirect-tunnel-light",
    title: "Tunnel Light",
    description: "Description of Tunnel Light",
    image: tunnelLight,
  },
  {
    id: "machine-vision-spot-light",
    title: "Spot Light",
    description: "Description of Spot Light",
    image: spotLight,
  },
  {
    id: "machine-vision-flat-direct-diffused-light-center-hole",
    title: "Flat Light Center Hole",
    description: "Description of Flat Light Center Hole",
    image: flatLightCenterHole,
  },
  {
    id: "machine-vision-flat-direct-diffused-light",
    title: "Flat Light",
    description: "Description of Flat Light",
    image: flatLight,
  },
  {
    id: "machine-vision-indirect-flat-light",
    title: "Indirect Flat Light",
    description: "Description of Indirect Flat Light",
    image: indirectFlatLight,
  },
  {
    id: "machine-vision-back-light",
    title: "Back Light",
    description: "Description of Back Light",
    image: backLight,
  },
];

const Products = () => {
  const navigate = useNavigate();

  // Navigate immediately on click - no animation
  const handleReadMoreClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="products-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

        .products-wrapper {
          max-width: 2000px;
          margin: 3rem auto;
          padding: 0 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        .products-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #1f1f1f;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          user-select: none;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2.5rem;
          justify-items: center;
        }

        .product-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.12);
          padding: 2.5rem 1.5rem 2rem;
          position: relative;
          width: 100%;
          max-width: 380px;
          min-height: 450px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          text-align: center;

          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .product-number {
          position: absolute;
          top: 8px;
          left: 8px;
          background: #b71c1c;
          color: #fff;
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: bold;
          user-select: none;
        }

        .product-image-wrapper {
          flex-shrink: 0;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #f8f8f8;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.6rem;
          transition: filter 0.3s ease;
          user-select: none;
        }
        .product-card:hover .product-image-wrapper {
          filter: drop-shadow(0 0 6px #b71c1c);
        }

        .product-image {
          max-width: 70%;
          max-height: 70%;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
        }

        .product-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #b71c1c;
          margin: 0;
          margin-bottom: 0.8rem;
          letter-spacing: 0.03em;
          line-height: 1.2;
          user-select: text;
        }

        .product-description {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 1rem;
          color: #555;
          margin: 0;
          margin-bottom: 2.2rem;
          min-height: 65px;
          line-height: 1.4;
          letter-spacing: 0.02em;
          user-select: text;
          padding: 0 0.3rem;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        /* Updated read-more button */
        .read-more {
          --btn-width: 160px;
          --btn-height: 48px;
          --btn-border-radius: 8px;

          position: relative;
          width: var(--btn-width);
          height: var(--btn-height);
          border: none;
          border-radius: var(--btn-border-radius);
          background: #b71c1c;
          cursor: pointer;
          outline-offset: 2px;
          user-select: none;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 1rem;
          overflow: visible;

          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          transition:
            width 0.45s ease,
            height 0.45s ease,
            border-radius 0.45s ease,
            background-color 0.35s ease;
        }

        /* On hover morph to circle WITHOUT arrow morph */
        .product-card:hover .read-more {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          padding: 0;
          background-color: #880e0e;

          font-size: 0; /* hide text on hover gracefully */
          color: transparent;
          letter-spacing: 0;
          gap: 0;
        }

        /* Hide arrow element always (do not morph to arrow on hover or click) */
        .read-more .arrow {
          display: none;
        }

        /* Circular Text Container - visible on hover */
        .product-card:hover .read-more .circular-text {
          opacity: 1;
        }

        .read-more .circular-text {
          --radius: 45px;
          position: absolute;
          top: 50%;
          left: 50%;
          width: calc(var(--radius) * 2);
          height: calc(var(--radius) * 2);
          margin-top: calc(var(--radius) * -1);
          margin-left: calc(var(--radius) * -1);
          pointer-events: none;
          user-select: none;

          opacity: 0;
          transition: opacity 0.4s ease 0.3s; /* delay fade in slightly */
          transform: rotate(-90deg);
        }

        /* SVG styles inside circular text */
        .read-more .circular-text svg {
          width: 100%;
          height: 100%;
          transform-origin: 50% 50%;
        }
        .read-more .circular-text svg text {
          fill: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 1.2px;
        }

        /* Remove animation circle on click related styles if desired */

      `}</style>

      <h1 className="products-heading">Products</h1>

      {/* First 5 products */}
      <main className="products-grid">
        {products.slice(0, 5).map((p, index) => (
          <article className="product-card" key={p.id}>
            <div className="product-number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div
              className="product-image-wrapper"
              aria-label={`${p.title} image`}
            >
              <img src={p.image} alt={p.title} className="product-image" />
            </div>
            <h2 className="product-title">{p.title}</h2>
            <p className="product-description">{p.description}</p>
            <button
              className="read-more"
              onClick={() => handleReadMoreClick(p.id)}
              aria-label={`Read more about ${p.title}`}
              type="button"
            >
              <span className="read-more-text">Read more</span>
              <span className="arrow" aria-hidden="true">→</span>
              <span className="circular-text" aria-hidden="true">
                <svg viewBox="0 0 100 100" role="img" focusable="false">
                  <defs>
                    <path
                      id={`circlePath${p.id}-top`}
                      d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text>
                    <textPath href={`#circlePath${p.id}-top`} startOffset="0%">
                      LEARN MORE — LEARN MORE —
                    </textPath>
                  </text>
                </svg>
              </span>
            </button>
          </article>
        ))}
      </main>

      {/* Next 5 products */}
      <main className="products-grid" style={{ marginTop: "2rem" }}>
        {products.slice(5, 10).map((p, index) => (
          <article className="product-card" key={p.id}>
            <div className="product-number">
              {String(index + 6).padStart(2, "0")}
            </div>
            <div
              className="product-image-wrapper"
              aria-label={`${p.title} image`}
            >
              <img src={p.image} alt={p.title} className="product-image" />
            </div>
            <h2 className="product-title">{p.title}</h2>
            <p className="product-description">{p.description}</p>
            <button
              className="read-more"
              onClick={() => handleReadMoreClick(p.id)}
              aria-label={`Read more about ${p.title}`}
              type="button"
            >
              <span className="read-more-text">Read more</span>
              <span className="arrow" aria-hidden="true">→</span>
              <span className="circular-text" aria-hidden="true">
                <svg viewBox="0 0 100 100" role="img" focusable="false">
                  <defs>
                    <path
                      id={`circlePath${p.id}-bottom`}
                      d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text>
                    <textPath href={`#circlePath${p.id}-bottom`} startOffset="0%">
                      LEARN MORE — LEARN MORE —
                    </textPath>
                  </text>
                </svg>
              </span>
            </button>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Products;
