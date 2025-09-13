import React, { useState } from "react";
import {
  MapPin,
  Building2,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import "../Styles/ContactUs.css";

const ContactUs = () => {
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mwpnzwor", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setToast({ visible: true, message: "Message sent successfully!", type: "success" });
        e.target.reset();
      } else {
        setToast({ visible: true, message: "Something went wrong. Please try again.", type: "error" });
      }
    } catch (error) {
      setToast({ visible: true, message: "Network error. Please try again.", type: "error" });
    }

    setTimeout(() => setToast({ visible: false, message: "", type: "" }), 3000);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Form Section */}
        <div className="contact-form">
          <h2>DISCUSS YOUR PROJECT</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Full name" required />
              <input type="email" name="email" placeholder="Email address" required />
            </div>
            <div className="form-row">
              <input type="text" name="subject" placeholder="Subject" required />
              <input type="tel" name="phone" placeholder="Phone number" />
            </div>
            <textarea name="message" placeholder="Message" required></textarea>
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
            <div className="info-icon"><MapPin size={18.76} strokeWidth={1.34} color="white" /></div>
            <div className="info-content">
              <h4>Office Address</h4>
              <p>Office 206. Xion Mall, Near D-Mart, Wakad-Hinjewadi Road, Hinjewadi Pune, Maharashtra, 411057</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon"><Building2 size={18.76} strokeWidth={1.34} color="white" /></div>
            <div className="info-content">
              <h4>Registered Address</h4>
              <p>S.NO. 176/1/9/1 FL-203, Sadguru CL-03, Manjoba Mandir, Pune, Maharashtra, 411057</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon"><FileText size={18.76} strokeWidth={1.34} color="white" /></div>
            <div className="info-content">
              <h4>GST Number</h4>
              <p>27AALCC1717A1Z3</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon"><Mail size={18.76} strokeWidth={1.34} color="white" /></div>
            <div className="info-content">
              <h4>Email Address</h4>
              <p>sales@cvit.in</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon"><Phone size={18.76} strokeWidth={1.34} color="white" /></div>
            <div className="info-content">
              <h4>Phone Number</h4>
              <p>+91 7507149084</p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className={`toast ${toast.visible ? "show" : ""} ${toast.type}`}>
        {toast.message}
      </div>
    </div>
  );
};

export default ContactUs;
