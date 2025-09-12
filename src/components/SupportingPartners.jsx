import React from "react";
import TidesLogo from "../assets/Partners/TIDES.png";
import HIKROBOTLogo from "../assets/Partners/HIKROBOT.jpg";
import BAUMERLogo from "../assets/Partners/baumer.png";
import "../Styles/SupportingPartners.css";

const SupportingPartners = () => {
  return (
    <div className="supporting-partners-section">
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