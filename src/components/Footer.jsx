import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo/Logo-footer.png";
import iso from "../assets/Certifications/iso.jpeg";
import rohs from "../assets/Certifications/rohs.jpeg";
import ce from "../assets/Certifications/ce.jpg";
import iso9001 from "../assets/Certifications/ISO_14001.jpeg";
import MachineVisionSystem from "../assets/Broucher/Machine_Vision_System.pdf";
import MachineVisionLights from "../assets/Broucher/Machine_Vision_Lights.pdf";
import "../Styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

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

  return (
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
          &nbsp;&nbsp;English&nbsp;&nbsp;|&nbsp;&nbsp;Privacy Policy
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
  );
};

export default Footer;