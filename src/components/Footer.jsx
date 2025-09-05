import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";
import iso from "../assets/iso.jpeg";
import rohs from "../assets/rohs.jpeg";
import ce from "../assets/ce.jpg";
import iso9001 from "../assets/ISO_14001.jpeg";
import MachineVisionSystem from "../assets/Machine_Vision_System.pdf";
import MachineVisionLights from "../assets/Machine_Vision_Lights.pdf";

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
      <style>{`
        * {
          font-family: 'Inter', sans-serif !important;
        }

        .footer {
          background-color: #0c0e1b;
          color: #ffffff;
          padding: 2.34rem 2.34rem;
        }

        .footer-top {
          max-width: 1941px;
          margin: 0 1.4rem 2.01rem;
          display: flex;
          gap: 0.2rem;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .footer-map {
          flex: 2 1 600px;
          min-height: 250px;
        }

        .footer-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
          border-radius: 8.04px;
        }

        .footer-certs {
          flex: 1 1 320px;
          min-height: 234.5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .cert-title {
          font-size: 1.34rem;
          font-weight: bold;
          margin-bottom: 1.005rem;
          color: #fff;
        }

        .certifications {
          display: flex;
          gap: 1.34rem;
          overflow-x: auto;
          padding: 0.67rem 1.34rem;
        }

        .cert-box {
          background-color: white;
          width: 100.5px;
          height: 100.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5.36px;
          box-shadow: 0 2.68px 8.04px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
          flex: 0 0 auto;
        }

        .cert-box:hover {
          transform: scale(1.05);
        }

        .cert-box img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .footer-container {
          max-width: 1340px;
          margin: 13.4px 53.6px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(147.4px, 1fr));
          gap: 1.742rem;
        }

        .footer-logo img {
          width: 127.3px;
          height: auto;
        }

        .footer-logo h3 {
          margin-top: 0.67rem;
          font-size: 1.34rem;
          font-weight: 600;
        }

        .footer-logo p {
          margin-top: 0.67rem;
          margin-left: 0.335rem;
          font-size: 0.804rem;
          color: #ccc;
        }

        .footer-heading {
          font-size: 1.206rem;
          font-weight: 600;
          margin-bottom: 0.67rem;
        }

        .footer-links a {
          display: block;
          color: #aaa;
          text-decoration: none;
          margin-bottom: 0.402rem;
          font-size: 0.871rem;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-newsletter p {
          font-size: 0.804rem;
          margin-bottom: 0.536rem;
          color: #ccc;
        }

        .newsletter-input {
          display: flex;
          border: 1px solid #444;
          border-radius: 20.1px;
          overflow: hidden;
        }

        .newsletter-input input {
          flex: 1;
          padding: 0.536rem 1.072rem;
          background: transparent;
          border: none;
          color: #fff;
          outline: none;
        }

        .newsletter-input button {
          padding: 0 0.67rem;
          background-color: #EF3A3A;
          border: none;
          color: white;
          cursor: pointer;
          width: 40.2px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.34rem;
          padding-top: 1.34rem;
          border-top: 1px solid #333;
          flex-wrap: wrap;
          font-size: 0.938rem;
          color: #aaa;
        }

        .footer-bottom .left,
        .footer-bottom .center,
        .footer-bottom .right {
          display: flex;
          align-items: center;
          gap: 0.67rem;
        }

        .footer-socials {
          display: flex;
          gap: 1rem;
        }

        .footer-socials a {
          display: inline-block;
          color: white;
        }

        .footer-socials svg {
          width: 25px;
          height: 25px;
          fill: #fff;
          pointer-events: auto;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 1rem;
          }

          .footer-container {
            margin: 0;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 0.67rem;
            text-align: center;
          }

          .footer-bottom .left,
          .footer-bottom .center,
          .footer-bottom .right {
            justify-content: center;
          }
        }
      `}</style>

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
          <h3>CVIT Solution</h3>
          <p>
            CONTACT <br />
            sales@cvit.in
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
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
        {/* Brochure PDF */}
        <a href={MachineVisionSystem} download="Machine_Vision_System.pdf">
          Brochure
        </a>

        {/* MV Lights PDF */}
        <a href={MachineVisionLights} download="Machine_Vision_Lights.pdf">
          MV Lights
        </a>
      </div>
    </div>


        <div className="footer-newsletter">
          <h4 className="footer-heading">Newsletter</h4>
          <p>Subscribe to receive future updates</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Email address" />
            <button>&#9658;</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="left">
          English&nbsp;&nbsp;|&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Support
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
