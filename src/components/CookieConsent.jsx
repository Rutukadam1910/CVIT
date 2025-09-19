// src/components/CookieConsent.jsx
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaCheck, FaTimesCircle } from "react-icons/fa";
import "../Styles/CookieConsent.css";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies([
    "userConsent", 
    "essentialConsent", 
    "analyticsConsent", 
    "functionalConsent", 
    "advertisingConsent"
  ]);
  const [showBanner, setShowBanner] = useState(false);
  const [showDetailedModal, setShowDetailedModal] = useState(false);
  const [selectedCookies, setSelectedCookies] = useState({
    essential: true,
    analytics: false,
    functional: false,
    advertising: false
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
      maxAge: 60 * 60 * 24 * 365 
    });
    setCookie("analyticsConsent", selectedCookies.analytics ? "accepted" : "declined", { 
      path: "/", 
      maxAge: 60 * 60 * 24 * 365 
    });
    setCookie("functionalConsent", selectedCookies.functional ? "accepted" : "declined", { 
      path: "/", 
      maxAge: 60 * 60 * 24 * 365 
    });
    setCookie("advertisingConsent", selectedCookies.advertising ? "accepted" : "declined", { 
      path: "/", 
      maxAge: 60 * 60 * 24 * 365 
    });
    setCookie("userConsent", "custom", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    
    setShowDetailedModal(false);
    setShowBanner(false);
  };

  // Toggle individual cookie type
  const toggleCookieType = (type) => {
    setSelectedCookies(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Reset to defaults
  const resetToDefaults = () => {
    setSelectedCookies({
      essential: true,
      analytics: false,
      functional: false,
      advertising: false
    });
  };

  // Navigate to privacy policy
  const handlePrivacyPolicyClick = (e) => {
    e.preventDefault();
    setShowBanner(false);
    setShowDetailedModal(false);
    navigate('/privacy');
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div className="cookie-banner">
        <div className="cookie-text">
          <h4>🍪 Cookie Consent</h4>
          <p>
            We use cookies to improve your browsing experience and provide personalized content.{" "}
            <button 
              onClick={(e) => {
                e.preventDefault();
                setShowDetailedModal(true);
              }}
              className="cookie-settings-btn"
            >
              Cookie Settings
            </button>{" "}
            • Read our{" "}
            <button 
              onClick={handlePrivacyPolicyClick}
              className="privacy-link-inline"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn accept" onClick={acceptAllCookies}>
            Accept All
          </button>
          <button className="btn decline" onClick={declineAllCookies}>
            Decline All
          </button>
        </div>
      </div>

      {/* Detailed Cookie Settings Modal */}
      {showDetailedModal && (
        <div className="cookie-modal-overlay" onClick={() => setShowDetailedModal(false)}>
          <div className="cookie-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cookie-modal-header">
              <h3>Cookie Settings</h3>
              <button 
                className="cookie-modal-close" 
                onClick={() => setShowDetailedModal(false)}
                aria-label="Close cookie settings"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="cookie-modal-content">
              <p className="cookie-modal-description">
                We use different types of cookies to ensure the best experience on our website. 
                Essential cookies are required for basic functionality. Manage your preferences below:
              </p>

              {/* Cookie Categories */}
              <div className="cookie-categories">
                {/* Essential Cookies */}
                <div className="cookie-category essential">
                  <div className="cookie-category-header">
                    <div className="cookie-category-info">
                      <h4>Essential Cookies</h4>
                      <p>Necessary for the website to function properly. These cookies ensure basic functionalities and security features of the website.</p>
                    </div>
                    <div className="cookie-toggle">
                      <span className="toggle-label">Enabled</span>
                      <div className="toggle-switch">
                        <input 
                          type="checkbox" 
                          id="essential-toggle" 
                          checked={selectedCookies.essential}
                          onChange={() => toggleCookieType('essential')}
                          disabled 
                        />
                        <label htmlFor="essential-toggle" className="toggle-slider"></label>
                      </div>
                    </div>
                  </div>
                  <div className="cookie-examples">
                    <strong>Examples:</strong> Session cookies, authentication cookies, security cookies
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div className="cookie-category-info">
                      <h4>Analytics Cookies</h4>
                      <p>Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </div>
                    <div className="cookie-toggle">
                      <span className="toggle-label">
                        {selectedCookies.analytics ? 'Enabled' : 'Disabled'}
                      </span>
                      <div className="toggle-switch">
                        <input 
                          type="checkbox" 
                          id="analytics-toggle" 
                          checked={selectedCookies.analytics}
                          onChange={() => toggleCookieType('analytics')}
                        />
                        <label htmlFor="analytics-toggle" className="toggle-slider"></label>
                      </div>
                    </div>
                  </div>
                  <div className="cookie-examples">
                    <strong>Examples:</strong> Google Analytics, website usage statistics, visitor behavior tracking
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div className="cookie-category-info">
                      <h4>Functional Cookies</h4>
                      <p>Enable website features and services you have requested, such as remembering your preferences or login information.</p>
                    </div>
                    <div className="cookie-toggle">
                      <span className="toggle-label">
                        {selectedCookies.functional ? 'Enabled' : 'Disabled'}
                      </span>
                      <div className="toggle-switch">
                        <input 
                          type="checkbox" 
                          id="functional-toggle" 
                          checked={selectedCookies.functional}
                          onChange={() => toggleCookieType('functional')}
                        />
                        <label htmlFor="functional-toggle" className="toggle-slider"></label>
                      </div>
                    </div>
                  </div>
                  <div className="cookie-examples">
                    <strong>Examples:</strong> Language preference, login session management, shopping cart functionality
                  </div>
                </div>

                {/* Advertising Cookies */}
                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div className="cookie-category-info">
                      <h4>Advertising Cookies</h4>
                      <p>Deliver relevant advertisements and measure their effectiveness by tracking your browsing behavior across websites.</p>
                    </div>
                    <div className="cookie-toggle">
                      <span className="toggle-label">
                        {selectedCookies.advertising ? 'Enabled' : 'Disabled'}
                      </span>
                      <div className="toggle-switch">
                        <input 
                          type="checkbox" 
                          id="advertising-toggle" 
                          checked={selectedCookies.advertising}
                          onChange={() => toggleCookieType('advertising')}
                        />
                        <label htmlFor="advertising-toggle" className="toggle-slider"></label>
                      </div>
                    </div>
                  </div>
                  <div className="cookie-examples">
                    <strong>Examples:</strong> Google AdSense, Facebook Pixel, targeted advertising, ad performance tracking
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="cookie-modal-actions">
                <button 
                  className="btn btn-secondary" 
                  onClick={resetToDefaults}
                >
                  Reset to Defaults
                </button>
                <div className="modal-action-buttons">
                  <button 
                    className="btn btn-decline" 
                    onClick={() => setShowDetailedModal(false)}
                  >
                    <FaTimesCircle /> Cancel
                  </button>
                  <button 
                    className="btn btn-accept" 
                    onClick={saveCustomSelection}
                  >
                    <FaCheck /> Save Settings
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