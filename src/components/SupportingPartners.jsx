
import React from "react";
import { useTranslation } from "react-i18next";
import TidesLogo from "../assets/Partners/TIDES.png";
import HIKROBOTLogo from "../assets/Partners/HIKROBOT.jpg";
import BAUMERLogo from "../assets/Partners/baumer.png";
import "../Styles/SupportingPartners.css";

const SupportingPartners = () => {
  const { t } = useTranslation();

  return (
    <div className="supporting-partners-section">
      <h2>{t("SupportingPartners.heading")}</h2>

      <div className="partners-grid">
        <div className="partner-card">
          <img
            src={TidesLogo}
            alt={t("SupportingPartners.tidesLogoAlt")}
            className="partner-logo"
          />
        </div>
        <div className="partner-card">
          <img
            src={HIKROBOTLogo}
            alt={t("SupportingPartners.hikrobotLogoAlt")}
            className="partner-logo"
          />
        </div>
        <div className="partner-card">
          <img
            src={BAUMERLogo}
            alt={t("SupportingPartners.baumerLogoAlt")}
            className="partner-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportingPartners;


// import React from "react";
// import { useTranslation } from "react-i18next";
// import TidesLogo from "../assets/Partners/TIDES.png";
// import HIKROBOTLogo from "../assets/Partners/HIKROBOT.jpg";
// import BAUMERLogo from "../assets/Partners/baumer.png";
// import "../Styles/SupportingPartners.css";

// const SupportingPartners = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="supporting-partners-section">
//       <h2>{t("SupportingPartners.heading")}</h2>
//       <div className="partners-grid">
//         <div className="partner-card">
//           <img
//             src={TidesLogo}
//             alt={t("SupportingPartners.tidesLogoAlt")}
//             className="partner-logo"
//           />
//         </div>
//         <div className="partner-card">
//           <img
//             src={HIKROBOTLogo}
//             alt={t("SupportingPartners.hikrobotLogoAlt")}
//             className="partner-logo"
//           />
//         </div>
//         <div className="partner-card">
//           <img
//             src={BAUMERLogo}
//             alt={t("SupportingPartners.baumerLogoAlt")}
//             className="partner-logo"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupportingPartners;