import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/CVIT_LOGO3.png";
import iso from "../assets/Certifications/iso.jpeg";
import rohs from "../assets/Certifications/rohs.jpeg";
import ce from "../assets/Certifications/ce.jpg";
import iso9001 from "../assets/Certifications/ISO_14001.jpeg";
import MachineVisionSystem from "../assets/Broucher/Machine_Vision_System.pdf";
import MachineVisionLights from "../assets/Broucher/Machine_Vision_Lights.pdf";
import "../Styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Navigation mapping for quick links
  const navigationMap = {
    Home: "Home",
    "Customer Benefits": "Customer Benefits",
    "Our Case Studies": "Our Case Studies",
    "Implementation Roadmap": "Implementation Roadmap",
    "Our Clients": "Our Clients",
    "Contact Us": "Contact Us",
  };

  // Function to handle navigation with scrollTo state
  const handleNavigation = (section) => {
    const targetSection = navigationMap[section];
    navigate("/", {
      state: { scrollTo: targetSection, showRestContent: true },
    });
  };

  // Handle Privacy Policy click
  const handlePrivacyPolicyClick = (e) => {
    e.preventDefault();
    setShowPrivacyModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowPrivacyModal(false);
  };

  // Close modal on outside click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle Escape key press
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      <footer className="footer">
        {/* Top Row: Map and Certifications */}
        <div className="footer-top">
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.592471123413!2d73.74263457496473!3d18.59240288251513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbea4fee3e13%3A0xd4aaec345ec569d8!2sCVIT%20SOLUTION%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1753870745671!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CVIT Office Map Location"
            ></iframe>
          </div>

          <div className="footer-certs">
            <div className="cert-title">CERTIFICATIONS</div>
            <div className="certifications">
              <div className="cert-box">
                <img src={iso} alt="ISO Certification" />
              </div>
              <div className="cert-box">
                <img src={rohs} alt="RoHS Certification" />
              </div>
              <div className="cert-box">
                <img src={ce} alt="CE Certification" />
              </div>
              <div className="cert-box">
                <img src={iso9001} alt="ISO 9001 Certification" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="CVIT Logo" />
          </div>

          <div>
            <h4 className="footer-heading-1">Quick Links</h4>
            <div className="footer-links">
              {[
                "Home",
                "Customer Benefits",
                "Our Case Studies",
                "Implementation Roadmap",
                "Our Clients",
                "Contact Us",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link);
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Catalogue</h4>
            <div className="footer-links">
              <a href={MachineVisionSystem} download="Machine_Vision_System.pdf">
                Brochure
              </a>
              <a href={MachineVisionLights} download="Machine_Vision_Lights.pdf">
                MV Lights
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="left">
            &nbsp;&nbsp;English&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="#" onClick={handlePrivacyPolicyClick} className="privacy-link">
              Privacy Policy
            </a>
          </div>

          <div className="center">© 2025 CVIT. All rights reserved</div>

          <div className="right">
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/company/cvit-solution/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div 
          className="privacy-modal-overlay" 
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          tabIndex="-1"
        >
          <div className="privacy-modal">
            <div className="privacy-modal-header">
              <h3 id="privacy-modal-title">Privacy Policy</h3>
              <button 
                className="privacy-modal-close" 
                onClick={closeModal}
                aria-label="Close privacy policy modal"
              >
                <FaTimes />
              </button>
            </div>
            <div className="privacy-modal-content">
              <div className="privacy-policy-text">
                <p>
                  <strong>Thank you for visiting CVIT Solution's website. Your privacy is important to us.</strong> This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Site and any related services.
                </p>

                <h4>1. Information We Collect</h4>
                <p>We may collect information in the following ways:</p>
                
                <h5>Information You Provide Voluntarily:</h5>
                <p>When you submit forms (contact us, inquiries, demos, quotes, etc.), you may provide personal information such as your name, email address, phone number, company name, job title, project requirements.</p>

                <h5>Automatically Collected Information:</h5>
                <p>When you visit or navigate the Site, we automatically collect certain technical/usage data, including but not limited to your IP address, browser type and version, operating system, pages visited, time spent on those pages, referring / exit pages, and click-stream data.</p>

                <h5>Cookies and Tracking Technologies:</h5>
                <p>We may use cookies, web beacons, tracking pixels, and similar technologies to collect information about how you use the Site, to improve functionality, for analytics, and to personalize your experience.</p>

                <h4>2. Use of Information</h4>
                <p>We use the collected information for various purposes, including:</p>
                <ul>
                  <li>To respond to your inquiries or requests (for information, quotes, support).</li>
                  <li>To provide, maintain, and improve our services and Site.</li>
                  <li>To send you updates, newsletters, marketing communications (if you have opted in).</li>
                  <li>To understand usage patterns, analyze traffic and Site performance.</li>
                  <li>To enhance security and detect/prevent fraud or misuse.</li>
                  <li>To fulfill legal or regulatory obligations, if any.</li>
                </ul>

                <h4>3. Sharing of Information</h4>
                <p>We do not sell your personal information to third parties. However, we may share your information in the following circumstances:</p>
                <ul>
                  <li>With Service Providers who help us with hosting, website analytics, email communication, customer relationship management, security, etc., under agreement to protect your data.</li>
                  <li>For legal reasons: if required by law, regulation, legal process or enforceable governmental request.</li>
                  <li>To protect rights, safety, or property of CVIT Solution, our users, or the public.</li>
                  <li>In case of a corporate transaction (merger, acquisition, sale of assets), provided the acquiring party agrees to protect the information consistent with this policy.</li>
                </ul>

                <h4>4. Cookies and Tracking Technologies</h4>
                <ul>
                  <li>We use cookies and similar tools to track Site usage and improve your experience.</li>
                  <li>You may control or disable cookies via your browser settings. However, disabling cookies may affect certain features or functionality of the Site.</li>
                  <li>Types of cookies used may include: essential cookies, performance/analytics cookies, functional cookies, and advertising cookies (if applicable).</li>
                </ul>

                <h4>5. Data Retention</h4>
                <p>We will retain your personal information only for as long as needed to fulfill the purposes stated in this policy (e.g. to respond to requests, provide services, comply with legal obligations). After that, we securely delete or anonymize your data.</p>

                <h4>6. Security</h4>
                <p>We adopt reasonable technical, administrative, and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no system is perfectly secure; transmission of data over the internet is inherently risky.</p>

                <h4>7. International Data Transfer</h4>
                <p>Since the Site is hosted on internet and potentially uses service providers in various jurisdictions, your data may be stored or transferred to countries other than your own. We will take steps to ensure that such transfers comply with applicable data protection laws.</p>

                <h4>9. Changes to This Privacy Policy</h4>
                <p>We may revise this Privacy Policy from time to time. Your continued use of the Site after changes means you accept the updated policy.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;