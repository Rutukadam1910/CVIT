import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

const ComingSoon = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="product-coming-soon">
      <Navbar />
      <div className="coming-soon-content">
        <h2>{t("ComingSoon.title")}</h2>
        <p>{t("ComingSoon.message")}</p>
        <button
          onClick={() => navigate("/dashboardTwo")}
          className="premium-btn action-btn pulse"
        >
          {t("ComingSoon.backButton")}
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;