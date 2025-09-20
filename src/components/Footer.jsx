import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import logo from "../assets/logo/CVIT_LOGO3.png";
import iso from "../assets/Certifications/iso.jpeg";
import rohs from "../assets/Certifications/rohs.jpeg";
import ce from "../assets/Certifications/ce.jpg";
import iso9001 from "../assets/Certifications/ISO_14001.jpeg";
import MachineVisionSystem from "../assets/Broucher/Machine_Vision_System.pdf";
import MachineVisionLights from "../assets/Broucher/Machine_Vision_Lights.pdf";
import "../Styles/Footer.css";

// Define languages array within Footer.jsx
const languages = [
  { code: 'en', name: 'English', country: 'USA', flag: '🇺🇸' },
  { code: 'en_IN', name: 'English', country: 'India', flag: '🇮🇳' },
  { code: 'es', name: 'Español', country: 'Spain', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', country: 'France', flag: '🇫🇷' },
  { code: 'hi', name: 'हिन्दी', country: 'India', flag: '🇮🇳' },
  { code: 'de', name: 'Deutsch', country: 'Germany', flag: '🇩🇪' },
  { code: 'zh', name: '中文', country: 'China', flag: '🇨🇳' },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Get current language name
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Navigation mapping for quick links (updated to match translation file keys)
  const navigationMap = {
    Home: "Home",
    CustomerBenefits: "CustomerBenefits",
    OurCaseStudies: "OurCaseStudies",
    ImplementationRoadmap: "ImplementationRoadmap",
    OurClients: "OurClients",
    ContactUs: "ContactUs",
  };

  // Function to handle navigation with scrollTo state
  const handleNavigation = (section) => {
    const targetSection = navigationMap[section];
    navigate("/", {
      state: { scrollTo: targetSection, showRestContent: true },
    });
  };

  // Handle Privacy Policy click - Navigate to privacy page with scroll to top
  const handlePrivacyPolicyClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      navigate('/privacy');
    }, 300);
  };

  // Handle language selection
  const handleLanguageSelect = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('selectedLanguage', code);
    setShowModal(false);
  };

  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.592471123413!2d73.74263457496473!3d18.59240288251513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbea4fee3e13%3A0xd4aaec345ec569d8!2sCVIT%20SOLUTION%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1753870745671!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('MapTitle')}
          ></iframe>
        </div>

        <div className="footer-certs">
          <div className="cert-title">{t('CERTIFICATIONS')}</div>
          <div className="certifications">
            <div className="cert-box">
              <img src={iso} alt={t('ISOCertification')} />
            </div>
            <div className="cert-box">
              <img src={rohs} alt={t('RoHSCertification')} />
            </div>
            <div className="cert-box">
              <img src={ce} alt={t('CECertification')} />
            </div>
            <div className="cert-box">
              <img src={iso9001} alt={t('ISO9001Certification')} />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt={t('CVITLogo')} />
        </div>

        <div>
          <h4 className="footer-heading-1">{t('QuickLinks')}</h4>
          <div className="footer-links">
            {Object.keys(navigationMap).map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link);
                }}
              >
                {t(link)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footer-heading">{t('Catalogue')}</h4>
          <div className="footer-links">
            <a href={MachineVisionSystem} download="Machine_Vision_System.pdf">
              {t('Brochure')}
            </a>
            <a href={MachineVisionLights} download="Machine_Vision_Lights.pdf">
              {t('MVLights')}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="left">
          &nbsp;&nbsp;
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className="privacy-link"
            aria-label={t('SelectLanguage')}
          >
            {currentLang.flag} {currentLang.country} - {currentLang.name}
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a 
            href="/privacy" 
            onClick={handlePrivacyPolicyClick} 
            className="privacy-link"
            aria-label={t('PrivacyPolicy')}
          >
            {t('PrivacyPolicy')}
          </a>
        </div>

        <div className="center">© 2025 CVIT. {t('AllRightsReserved')}</div>

        <div className="right">
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/cvit-solution/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('LinkedInAriaLabel')}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <button 
        className="back-to-top" 
        onClick={handleScrollToTop}
        aria-label={t('BackToTopAriaLabel')}
        title={t('BackToTop')}
      >
        <FaArrowUp />
      </button>

      {showModal && (
        <div className="language-modal">
          <div className="language-modal-content">
            <h3>{t('SelectLanguage')}</h3>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={lang.code === i18n.language ? 'active' : ''}
              >
                {lang.flag} {lang.country} - {lang.name}
              </button>
            ))}
            <button onClick={() => setShowModal(false)} className="close-btn">
              {t('Close')}
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;