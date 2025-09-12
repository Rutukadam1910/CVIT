import React from "react";

import logo1 from "../assets/logo/logo1.png";
import logo2 from "../assets/logo/logo2.png";
import logo3 from "../assets/logo/logo3.jpg";
import logo4 from "../assets/logo/logo4.png";
import logo5 from "../assets/logo/logo5.png";
import logo6 from "../assets/logo/logo6.png";
import logo7 from "../assets/logo/logo7.png";
import logo8 from "../assets/logo/logo8.png";
import logo9 from "../assets/logo/logo9.png";
import logo10 from "../assets/logo/logo10.png";
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,logo10];

const Client = () => {
  return (
    <>
      <style>{`
        .client-section {
          background-color: #fff;
          padding: 3rem 0;
          overflow: hidden;
        }

        .client-heading {
          text-align: center;
          font-weight: 600;
          font-size: 2.8rem;
          color: #ef3a3a;
          font-family: 'Inter', sans-serif;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .scroll-container {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 15%,
            rgba(0, 0, 0, 1) 85%,
            rgba(0, 0, 0, 0)
          );
        }

        .marquee-wrapper {
          display: flex;
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }

        .marquee-wrapper:hover {
          animation-play-state: paused;
        }

        .marquee__item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 170px;
          margin: 0 40px;
          background-color: transparent;
          border-radius: 20px;
          padding: 1rem;
          transition: transform 0.3s ease;
        }

        .marquee__item:hover {
          transform: scale(1.08);
        }

        .marquee__item img {
          max-height: 140px;
          width: auto;
          mix-blend-mode: normal;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .client-heading {
            font-size: 2.2rem;
          }

          .marquee__item {
            width: 140px;
            height: 90px;
            margin: 0 20px;
          }

          .marquee__item img {
            max-height: 60px;
          }
        }
      `}</style>

      <section className="client-section">
        <h2 className="client-heading">OUR CLIENTS</h2>
        <div className="scroll-container">
          <div className="marquee-wrapper">
            {/* Duplicate once for seamless infinite scroll */}
            {[...logos, ...logos].map((logo, idx) => (
              <div className="marquee__item" key={idx}>
                <img src={logo} alt={`Client ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
