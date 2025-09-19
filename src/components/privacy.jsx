// src/components/Privacy.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import "../Styles/Privacy.css";

const Privacy = () => {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location]);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-subtitle">
          Last Updated: September 19, 2025
        </p>
      </div>

      <div className="privacy-content">
        <div className="privacy-policy-text">
          <p className="intro-text">
            <strong>Thank you for visiting CVIT Solution's website. Your privacy is important to us.</strong> This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Site and any related services.
          </p>

          <section className="policy-section">
            <h2 className="section-title">1. Information We Collect</h2>
            <p>We may collect information in the following ways:</p>
            
            <div className="subsection">
              <h3 className="subsection-title">Information You Provide Voluntarily:</h3>
              <p>When you submit forms (contact us, inquiries, demos, quotes, etc.), you may provide personal information such as your name, email address, phone number, company name, job title, project requirements.</p>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">Automatically Collected Information:</h3>
              <p>When you visit or navigate the Site, we automatically collect certain technical/usage data, including but not limited to your IP address, browser type and version, operating system, pages visited, time spent on those pages, referring / exit pages, and click-stream data.</p>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">Cookies and Tracking Technologies:</h3>
              <p>We may use cookies, web beacons, tracking pixels, and similar technologies to collect information about how you use the Site, to improve functionality, for analytics, and to personalize your experience.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="section-title">2. Use of Information</h2>
            <p>We use the collected information for various purposes, including:</p>
            <ul className="policy-list">
              <li>To respond to your inquiries or requests (for information, quotes, support).</li>
              <li>To provide, maintain, and improve our services and Site.</li>
              <li>To send you updates, newsletters, marketing communications (if you have opted in).</li>
              <li>To understand usage patterns, analyze traffic and Site performance.</li>
              <li>To enhance security and detect/prevent fraud or misuse.</li>
              <li>To fulfill legal or regulatory obligations, if any.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">3. Sharing of Information</h2>
            <p>We do not sell your personal information to third parties. However, we may share your information in the following circumstances:</p>
            <ul className="policy-list">
              <li>With Service Providers who help us with hosting, website analytics, email communication, customer relationship management, security, etc., under agreement to protect your data.</li>
              <li>For legal reasons: if required by law, regulation, legal process or enforceable governmental request.</li>
              <li>To protect rights, safety, or property of CVIT Solution, our users, or the public.</li>
              <li>In case of a corporate transaction (merger, acquisition, sale of assets), provided the acquiring party agrees to protect the information consistent with this policy.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">4. Cookies and Tracking Technologies</h2>
            <ul className="policy-list">
              <li>We use cookies and similar tools to track Site usage and improve your experience.</li>
              <li>You may control or disable cookies via your browser settings. However, disabling cookies may affect certain features or functionality of the Site.</li>
              <li>Types of cookies used may include: essential cookies, performance/analytics cookies, functional cookies, and advertising cookies (if applicable).</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-title">5. Data Retention</h2>
            <p>We will retain your personal information only for as long as needed to fulfill the purposes stated in this policy (e.g. to respond to requests, provide services, comply with legal obligations). After that, we securely delete or anonymize your data.</p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">6. Security</h2>
            <p>We adopt reasonable technical, administrative, and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no system is perfectly secure; transmission of data over the internet is inherently risky.</p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">7. International Data Transfer</h2>
            <p>Since the Site is hosted on internet and potentially uses service providers in various jurisdictions, your data may be stored or transferred to countries other than your own. We will take steps to ensure that such transfers comply with applicable data protection laws.</p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="policy-list">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data under certain conditions</li>
              <li><strong>Objection:</strong> Object to processing of your data for specific purposes</li>
              <li><strong>Portability:</strong> Receive your data in a structured, commonly used format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing (where consent is the legal basis)</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided below.</p>
          </section>

          <section className="policy-section">
            <h2 className="section-title">9. Children's Privacy</h2>
            <p>Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
          </section>

          
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`} 
        onClick={handleScrollToTop}
        aria-label="Scroll to top of page"
        title="Back to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Privacy;