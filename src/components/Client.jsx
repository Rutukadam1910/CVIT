import React from "react";
import { useTranslation } from "react-i18next";
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
import "../Styles/Client.css";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

const Client = () => {
  const { t } = useTranslation();

  return (
    <section className="client-section" aria-label={t("ClientTitle")}>
      <h2
        className="client-heading"
        style={{
          fontFamily: "'Inter', 'Noto Sans', 'Noto Sans SC', 'Noto Serif Devanagari', sans-serif",
          whiteSpace: "normal",
          overflow: "visible",
          maxWidth: "100%",
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: 700,
          color: "#333",
          marginBottom: "2rem"
        }}
      >
        {t("ClientTitle")}
      </h2>
      <div className="scroll-container">
        <div className="marquee-wrapper">
          {/* Duplicate once for seamless infinite scroll */}
          {[...logos, ...logos].map((logo, idx) => (
            <div className="marquee__item" key={idx}>
              <img src={logo} alt={`${t("ClientTitle")} ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;