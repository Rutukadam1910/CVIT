import React from "react";
import TidesLogo from "../assets/TIDES.png";
import HIKROBOTLogo from "../assets/HIKROBOT.jpg";
import BAUMERLogo from "../assets/baumer.png";

const SupportingPartners = () => {
  return (
    <div className="supporting-partners-section">
      <style>{`
        * {
          font-family: 'Inter', sans-serif !important;
        }
        .supporting-partners-section {
          padding: 2.68rem 1.34rem; /* Scaled from 4rem 2rem */
          background-color: #ffffff;
          color: #000000;
          text-align: center;
        }

        .supporting-partners-section h2 {
          font-size: 2.6rem; /* Scaled from 4.5rem */
          margin-bottom: 1.675rem; /* Scaled from 2.5rem */
          font-weight: 600;
          color: #EF3A3A;
          text-shadow: 0 0 4.02px rgba(239, 58, 58, 0.3); /* Scaled from 6px */
        }

        .partners-grid {
          display: flex;
          justify-content: center;
          gap: 2.01rem; /* Scaled from 3rem */
          flex-wrap: wrap;
          align-items: center;
        }

        .partner-card {
          background: #ffffff;
         
          border-radius: 13.4px; /* Scaled from 20px */
          padding: 1.005rem 1.34rem; /* Scaled from 1.5rem 2rem */
          width: 268px; /* Scaled from 400px */
          height: 134px; /* Scaled from 200px */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          
        }

     
        .partner-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      `}</style>

      <h2>OUR SUPPORTING PARTNERS</h2>

      <div className="partners-grid">
        <div className="partner-card">
          <img src={TidesLogo} alt="Tides" className="partner-logo" />
        </div>
        <div className="partner-card">
          <img src={HIKROBOTLogo} alt="HIKROBOT" className="partner-logo" />
        </div>
        <div className="partner-card">
          <img src={BAUMERLogo} alt="BAUMER INDIA" className="partner-logo" />
        </div>
      </div>
    </div>
  );
};

export default SupportingPartners;