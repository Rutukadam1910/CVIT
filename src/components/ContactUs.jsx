import React, { useState } from "react";
import {
  MapPin,
  Building2,
  Mail,
  Phone,
  BadgePercent,
} from "lucide-react";

const ContactUs = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2010); /* Scaled from 3000ms */
    e.target.reset();
  };

  return (
    <>
      <style>{`
        * {
          font-family: 'Inter', sans-serif !important;
        }
        .contact-section {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          padding: 4.02rem 0.67rem; /* Scaled from 6rem 1rem */
          color: white;
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(239, 58, 58, 0.1) 0%, transparent 50%);
          z-index: 0;
        }
        .contact-container {
          max-width: 1340px; /* Scaled from 2000px */
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 2.68rem; /* Scaled from 4rem */
          background: rgba(20, 20, 20, 0.7);
          border-radius: 16.08px; /* Scaled from 24px */
          padding: 2.68rem; /* Scaled from 4rem */
          backdrop-filter: blur(13.4px); /* Scaled from 20px */
          box-shadow: 0 13.4px 26.8px rgba(0, 0, 0, 0.4); /* Scaled from 20px 40px */
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: fadeInScale 0.8s ease-out both;
          position: relative;
          z-index: 1;
        }
        .contact-form,
        .contact-info {
          flex: 1 1 45%;
          min-width: 201px; /* Scaled from 300px */
        }
        .contact-form h2,
        .contact-info h2 {
          font-size: 2rem; /* Scaled from 4rem */
          margin-bottom: 1.3rem; /* Scaled from 2rem */
          font-weight: 600;
          position: relative;
          display: inline-block;
        }
        .contact-form h2::after {
          content: "";
          position: absolute;
          bottom: -6.7px; /* Scaled from -10px */
          left: 0;
          width: 445px; /* Scaled from 820px */
          height: 2.68px; /* Scaled from 4px */
          background: #ef3a3a;
          border-radius: 1.34px; /* Scaled from 2px */
        }
        .contact-info h2::after {
          content: "";
          position: absolute;
          bottom: -6.7px; /* Scaled from -10px */
          left: 0;
          width: 170px; /* Scaled from 270px */
          height: 2.68px; /* Scaled from 4px */
          background: #ef3a3a;
          border-radius: 1.34px; /* Scaled from 2px */
        }
        .form-row {
          display: flex;
          gap: 1.005rem; /* Scaled from 1.5rem */
          margin-top: 2.68rem; /* Scaled from 4rem */
          margin-bottom: 2.68rem; /* Scaled from 4rem */
          flex-wrap: wrap;
        }
        input,
        textarea {
          flex: 1;
          padding: 0.804rem 1.005rem; /* Scaled from 1.2rem 1.5rem */
          border-radius: 8.04px; /* Scaled from 12px */
          background: rgba(30, 30, 30, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1.34rem; /* Scaled from 2rem */
          width: 100%;
          transition: all 0.3s ease;
        }
        input::placeholder,
        textarea::placeholder {
          color: #999;
          font-size: 0.9782rem; /* Scaled from 1.46rem */
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #ef3a3a;
          background: rgba(40, 40, 40, 0.8);
          box-shadow: 0 0 0 2.01px rgba(239, 58, 58, 0.2); /* Scaled from 3px */
        }
        textarea {
          resize: none;
          margin-bottom: 1.675rem; /* Scaled from 2.5rem */
          min-height: 187.6px; /* Scaled from 280px */
        }
        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 0.603rem; /* Scaled from 0.9rem */
          font-size: 0.67rem; /* Scaled from 1rem */
          color: #ccc;
          font-weight: 400;
          margin-bottom: 1.34rem; /* Scaled from 2rem */
          max-width: 70%;
        }
        .checkbox-container input[type="checkbox"] {
          appearance: none;
          width: 12.06px; /* Scaled from 18px */
          height: 12.06px; /* Scaled from 18px */
          border: 1.34px solid #ef3a3a; /* Scaled from 2px */
          background: transparent;
          cursor: pointer;
          position: relative;
          border-radius: 2.68px; /* Scaled from 4px */
          margin-top: 1.34px; /* Scaled from 2px */
        }
        .checkbox-container input[type="checkbox"]::after {
          content: "";
          position: absolute;
          top: 6.34px; /* Scaled from 2px */
          left: 11.02px; /* Scaled from 6px */
          width: 5.68px; /* Scaled from 4px */
          height: 13.03px; /* Scaled from 9px */
          border: solid white;
          border-width: 0 2.34px 2.34px 0; /* Scaled from 2px */
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .checkbox-container input[type="checkbox"]:checked {
          background-color: #ef3a3a;
        }
        .checkbox-container input[type="checkbox"]:checked::after {
          opacity: 1;
        }
        .submit-wrapper {
          display: flex;
          justify-content: flex-start;
        }
        .send-button {
          background-color: #ef3a3a;
          border: none;
          color: white;
          padding: 0.67rem 1.675rem; /* Scaled from 1rem 2.5rem */
          font-size: 0.871rem; /* Scaled from 1.3rem */
          font-weight: 600;
          border-radius: 8.04px; /* Scaled from 12px */
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .send-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .send-button:hover::before {
          transform: translateX(0);
        }
        .send-button:hover {
          background-color: #c82c2c;
          transform: translateY(-1.34px); /* Scaled from 2px */
          box-shadow: 0 3.35px 10.05px rgba(239, 58, 58, 0.3); /* Scaled from 5px 15px */
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.005rem; /* Scaled from 1.5rem */
        }
        .info-block {
          display: flex;
          gap: 1.005rem; /* Scaled from 1.5rem */
          align-items: flex-start;
          padding: 1.005rem; /* Scaled from 1.5rem */
          background: rgba(30, 30, 30, 0.5);
          border-radius: 10.72px; /* Scaled from 16px */
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .info-block:hover {
          background: rgba(40, 40, 40, 0.5);
          border-color: rgba(239, 58, 58, 0.3);
          transform: translateY(-2.01px); /* Scaled from 3px */
        }
        .info-icon {
          width: 33.5px; /* Scaled from 50px */
          height: 33.5px; /* Scaled from 50px */
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info-block h4 {
          font-size: 0.938rem; /* Scaled from 1.4rem */
          margin: 0 0 0.335rem 0; /* Scaled from 0.5rem */
          color: #efefef;
          font-weight: 600;
        }
        .info-block p {
          margin: 0;
          color: #aaa;
          font-size: 0.938rem; /* Scaled from 1.4rem */
          line-height: 1.6;
        }
        .toast {
          position: fixed;
          bottom: 20.1px; /* Scaled from 30px */
          right: 20.1px; /* Scaled from 30px */
          background-color: #28a745;
          color: white;
          padding: 0.67rem 1.005rem; /* Scaled from 1rem 1.5rem */
          border-radius: 6.7px; /* Scaled from 10px */
          font-weight: 600;
          opacity: 0;
          transform: translateY(6.7px); /* Scaled from 10px */
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 9999;
          box-shadow: 0 3.35px 10.05px rgba(0, 0, 0, 0.3); /* Scaled from 5px 15px */
        }
        .toast.show {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 1024px) {
          .contact-container {
            max-width: 95%;
            padding: 2.01rem; /* Scaled from 3rem */
            gap: 2.01rem; /* Scaled from 3rem */
          }
        }
        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
            padding: 1.34rem; /* Scaled from 2rem */
            gap: 1.34rem; /* Scaled from 2rem */
          }
          .info-block {
            flex-direction: column;
            gap: 0.67rem; /* Scaled from 1rem */
          }
          .info-icon {
            width: 24.12px; /* Scaled from 36px */
            height: 24.12px; /* Scaled from 36px */
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20.1px); /* Scaled from 30px */
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <div className="contact-section">
        <div className="contact-container">
          {/* Form Section */}
          <div className="contact-form">
            <h2>DISCUSS YOUR PROJECT</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" placeholder="Full name" required />
                <input type="email" placeholder="Email address" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Subject" required />
                <input type="tel" placeholder="Phone number" />
              </div>
              <textarea placeholder="Message" required></textarea>
              <div className="checkbox-container">
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">
                  By clicking Checkbox, you agree to use our 'Form' terms and consent to cookie usage in browser.
                </label>
              </div>
              <div className="submit-wrapper">
                <button type="submit" className="send-button">Send Message</button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="contact-info">
            <h2>FIND US</h2>

            <div className="info-block">
              <div className="info-icon"><MapPin size={18.76} strokeWidth={1.34} color="white" /></div> {/* Scaled from 28, 2 */}
              <div className="info-content">
                <h4>Office Address</h4>
                <p>Office 206. Xion Mall, Near D-Mart, Wakad-Hinjewadi Road, Hinjewadi Pune, Maharashtra, 411057</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon"><Building2 size={18.76} strokeWidth={1.34} color="white" /></div> {/* Scaled from 28, 2 */}
              <div className="info-content">
                <h4>Registered Address</h4>
                <p>S.NO. 176/1/9/1 FL-203, Sadguru CL-03, Manjoba Mandir, Pune, Maharashtra, 411057</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon"><BadgePercent size={18.76} strokeWidth={1.34} color="white" /></div> {/* Scaled from 28, 2 */}
              <div className="info-content">
                <h4>GST No.</h4>
                <p>27AALCC1717A1Z3</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon"><Mail size={18.76} strokeWidth={1.34} color="white" /></div> {/* Scaled from 28, 2 */}
              <div className="info-content">
                <h4>Email Address</h4>
                <p>sales@cvit.in</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon"><Phone size={18.76} strokeWidth={1.34} color="white" /></div> {/* Scaled from 28, 2 */}
              <div className="info-content">
                <h4>Phone Number</h4>
                <p>+91 7507149084</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`toast ${toastVisible ? "show" : ""}`}>
        Message sent successfully!
      </div>
    </>
  );
};

export default ContactUs;