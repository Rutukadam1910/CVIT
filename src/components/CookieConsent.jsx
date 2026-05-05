import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTimes, FaCheck, FaTimesCircle } from "react-icons/fa";
import "../Styles/CookieConsent.css";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [cookies, setCookie] = useCookies([
    "userConsent",
    "essentialConsent",
    "analyticsConsent",
    "functionalConsent",
    "advertisingConsent",
  ]);
  const [showBanner, setShowBanner] = useState(false);
  const [showDetailedModal, setShowDetailedModal] = useState(false);
  const [selectedCookies, setSelectedCookies] = useState({
    essential: true,
    analytics: false,
    functional: false,
    advertising: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Show banner ONLY if no overall consent cookie set
    if (cookies.userConsent === undefined) {
      setShowBanner(true);
    }
  }, [cookies]);

  // Handle simple accept all
  const acceptAllCookies = () => {
    // Set all cookie consents
    setCookie("essentialConsent", "accepted", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    setCookie("analyticsConsent", "accepted", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    setCookie("functionalConsent", "accepted", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    setCookie("advertisingConsent", "accepted", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    setCookie("userConsent", "accepted", { path: "/", maxAge: 60 * 60 * 24 * 365 });

    setShowBanner(false);
  };

  // Handle decline all (except essential)
  const declineAllCookies = () => {
    // Essential cookies are always required
    setCookie("essentialConsent", "accepted", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    setCookie("analyticsConsent", "declined", { path: "/", maxAge: 60 * 60 * 24 * 30 });
    setCookie("functionalConsent", "declined", { path: "/", maxAge: 60 * 60 * 24 * 30 });
    setCookie("advertisingConsent", "declined", { path: "/", maxAge: 60 * 60 * 24 * 30 });
    setCookie("userConsent", "declined", { path: "/", maxAge: 60 * 60 * 24 * 30 });

    setShowBanner(false);
  };

  // Handle custom selection
  const saveCustomSelection = () => {
    // Save individual cookie consents
    setCookie("essentialConsent", selectedCookies.essential ? "accepted" : "declined", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    setCookie("analyticsConsent", selectedCookies.analytics ? "accepted" : "declined", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    setCookie("functionalConsent", selectedCookies.functional ? "accepted" : "declined", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    setCookie("advertisingConsent", selectedCookies.advertising ? "accepted" : "declined", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    setCookie("userConsent", "custom", { path: "/", maxAge: 60 * 60 * 24 * 365 });

    setShowDetailedModal(false);
    setShowBanner(false);
  };

  // Toggle individual cookie type
  const toggleCookieType = (type) => {
    setSelectedCookies((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Reset to defaults
  const resetToDefaults = () => {
    setSelectedCookies({
      essential: true,
      analytics: false,
      functional: false,
      advertising: false,
    });
  };

  // Navigate to privacy policy
  const handlePrivacyPolicyClick = (e) => {
    e.preventDefault();
    setShowBanner(false);
    setShowDetailedModal(false);
    navigate("/privacy");
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div className="cookie-banner">
        <div className="cookie-text">
          <h4>{t("CookieConsent.title")}</h4>
          <p>
            {t("CookieConsent.description")}{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowDetailedModal(true);
              }}
              className="cookie-settings-btn"
            >
              {t("CookieConsent.settingsButton")}
            </button>{" "}
            • {t("CookieConsent.privacyPolicyText")}{" "}
            <button onClick={handlePrivacyPolicyClick} className="privacy-link-inline">
              {t("CookieConsent.privacyPolicyLink")}
            </button>
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn accept" onClick={acceptAllCookies}>
            {t("CookieConsent.acceptAllButton")}
          </button>
          <button className="btn decline" onClick={declineAllCookies}>
            {t("CookieConsent.declineAllButton")}
          </button>
        </div>
      </div>

      {/* Detailed Cookie Settings Modal */}
      {showDetailedModal && (
        <div className="cookie-modal-overlay" onClick={() => setShowDetailedModal(false)}>
          <div className="cookie-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cookie-modal-header">
              <h3>{t("CookieConsent.modal.title")}</h3>
              <button
                className="cookie-modal-close"
                onClick={() => setShowDetailedModal(false)}
                aria-label={t("CookieConsent.modal.closeAriaLabel")}
              >
                <FaTimes />
              </button>
            </div>

            <div className="cookie-modal-content">
              <p className="cookie-modal-description">{t("CookieConsent.modal.description")}</p>

              {/* Cookie Categories */}
              <div className="cookie-categories">
                {/* Essential Cookies */}
                <div className="cookie-category essential">
                  <div className="cookie-category-header">
                    <div className="cookie-category-info">
                      <h4>{t("CookieConsent.modal.essential.title")}</h4>
                      <p>{t("CookieConsent.modal.essential.description")}</p>
                    </div>
                    <div className="cookie-toggle">
                      <span className="toggle-label">{t("CookieConsent.modal.essential.toggleLabel")}</span>
                      <div className="toggle-switch">
                        <input
                          type="checkbox"
                          id="essential-toggle"
                          checked={selectedCookies.essential}
                          onChange={() => toggleCookieType("essential")}
                          disabled
                        />
                        <label htmlFor="essential-toggle" className="toggle-slider"></label>
                      </div>
                    </div>
                  </div>
                  <div className="cookie-examples">
                    <strong>{t("CookieConsent.modal.essential.examplesLabel")}</strong>{" "}
                    {t("CookieConsent.modal.essential.examples")}
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div className="cookie-category-info">
                      <h4>{t("CookieConsent.modal.analytics.title")}</h4>
                      <p>{t("CookieConsent.modal.analytics.description")}</p>
                    </div>
                    <div className="cookie-toggle">
                      <span className="toggle-label">
                        {selectedCookies.analytics
                          ? t("CookieConsent.modal.toggleEnabled")
                          : t("CookieConsent.modal.toggleDisabled")}
                      </span>
                      <div className="toggle-switch">
                        <input
                          type="checkbox"
                          id="analytics-toggle"
                          checked={selectedCookies.analytics}
                          onChange={() => toggleCookieType("analytics")}
                        />
                        <label htmlFor="analytics-toggle" className="toggle-slider"></label>
                      </div>
                    </div>
                  </div>
                  <div className="cookie-examples">
                    <strong>{t("CookieConsent.modal.analytics.examplesLabel")}</strong>{" "}
                    {t("CookieConsent.modal.analytics.examples")}
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div className="cookie-category-info">
                      <h4>{t("CookieConsent.modal.functional.title")}</h4>
                      <p>{t("CookieConsent.modal.functional.description")}</p>
                    </div>
                    <div className="cookie-toggle">
                      <span className="toggle-label">
                        {selectedCookies.functional
                          ? t("CookieConsent.modal.toggleEnabled")
                          : t("CookieConsent.modal.toggleDisabled")}
                      </span>
                      <div className="toggle-switch">
                        <input
                          type="checkbox"
                          id="functional-toggle"
                          checked={selectedCookies.functional}
                          onChange={() => toggleCookieType("functional")}
                        />
                        <label htmlFor="functional-toggle" className="toggle-slider"></label>
                      </div>
                    </div>
                  </div>
                  <div className="cookie-examples">
                    <strong>{t("CookieConsent.modal.functional.examplesLabel")}</strong>{" "}
                    {t("CookieConsent.modal.functional.examples")}
                  </div>
                </div>

                {/* Advertising Cookies */}
                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div className="cookie-category-info">
                      <h4>{t("CookieConsent.modal.advertising.title")}</h4>
                      <p>{t("CookieConsent.modal.advertising.description")}</p>
                    </div>
                    <div className="cookie-toggle">
                      <span className="toggle-label">
                        {selectedCookies.advertising
                          ? t("CookieConsent.modal.toggleEnabled")
                          : t("CookieConsent.modal.toggleDisabled")}
                      </span>
                      <div className="toggle-switch">
                        <input
                          type="checkbox"
                          id="advertising-toggle"
                          checked={selectedCookies.advertising}
                          onChange={() => toggleCookieType("advertising")}
                        />
                        <label htmlFor="advertising-toggle" className="toggle-slider"></label>
                      </div>
                    </div>
                  </div>
                  <div className="cookie-examples">
                    <strong>{t("CookieConsent.modal.advertising.examplesLabel")}</strong>{" "}
                    {t("CookieConsent.modal.advertising.examples")}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="cookie-modal-actions">
                <button className="btn btn-secondary" onClick={resetToDefaults}>
                  {t("CookieConsent.modal.resetButton")}
                </button>
                <div className="modal-action-buttons">
                  <button className="btn btn-decline" onClick={() => setShowDetailedModal(false)}>
                    <FaTimesCircle /> {t("CookieConsent.modal.cancelButton")}
                  </button>
                  <button className="btn btn-accept" onClick={saveCustomSelection}>
                    <FaCheck /> {t("CookieConsent.modal.saveButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;