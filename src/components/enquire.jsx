import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Enquire = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    model: "",
    color:"",
    quantity: "",
    contactName: "",
    phoneNumber: "",
    emailAddress: "",
    companyName: "",
    gstNumber: "",
    billingAddress: "",
    shippingAddress: "",
    additionalNotes: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Enquiry submitted successfully!");

    // Retrieve the product slug from navigation state
    const productName = location.state?.productName || "";
    if (productName) {
      // Navigate back to the ProductDetail2 page, product section, with replace
      navigate(`/product/${productName}#product`, { replace: true });
      // Ensure scroll to product section after a slight delay
      setTimeout(() => {
        const productSection = document.getElementById("product");
        if (productSection) {
          productSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // 300ms delay to allow page rendering
    } else {
      // Navigate to dashboardTwo with replace
      navigate("/dashboardTwo", { replace: true });
    }
  };

  const handleClose = () => {
    // Retrieve the product slug from navigation state
    const productName = location.state?.productName || "";
    if (productName) {
      // Navigate back to the ProductDetail2 page, product section, with replace
      navigate(`/product/${productName}#product`, { replace: true });
      // Ensure scroll to product section after a slight delay
      setTimeout(() => {
        const productSection = document.getElementById("product");
        if (productSection) {
          productSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // 300ms delay to allow page rendering
    } else {
      // Navigate to dashboardTwo with replace
      navigate("/dashboardTwo", { replace: true });
    }
  };

  const formStyle = {
    width: "90%",
    maxWidth: "950px",
    margin: "2rem auto",
    padding: "2.5rem",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#0f172a",
    border: "1px solid #e5e7eb",
    position: "relative", // For positioning the close button
  };

  const sectionStyle = { marginBottom: "2rem" };

  const labelStyle = {
    display: "block",
    fontWeight: 600,
    marginBottom: "0.75rem",
    color: "#666666",
    fontSize: "1rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "1rem",
    transition: "border-color 0.3s",
  };

  const submitButtonStyle = {
    background: "#ef3a3a",
    color: "white",
    border: "none",
    padding: "0.9rem 2rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: 600,
    width: "100%",
    transition: "background 0.3s, transform 0.2s",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "#ef4444",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.2s, opacity 0.2s",
  };

  return (
    <>
      <Navbar />
      <div style={formStyle}>
        <button
          style={closeButtonStyle}
          onClick={handleClose}
          aria-label="Close enquiry form"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <h1
          style={{
            textAlign: "center",
            color: "#ef3a3a",
            marginBottom: "2.5rem",
            fontSize: "1.8rem",
            fontWeight: 700,
          }}
        >
         Customised Machine Vision Light Enquiry Form
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Product Info Section */}
          <div style={sectionStyle}>
            <label style={{ ...labelStyle, marginBottom: "1.5rem", fontSize: "1.3rem", color: "#374151" }}>
              Product Information
            </label>
            <label style={labelStyle}>Customised Machine Vision Light:</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Tell us your customization (e.g Size, Color, Voltage, Material, Type)"
              required
            />
                      <label style={labelStyle}>Color:</label>
<select
  name="color"
  value={formData.color || ""}
  onChange={handleChange}
  style={inputStyle}
  required
>
  <option value="">Select a color</option>
  <option value="Red">Red</option>
  <option value="White">White</option>
  <option value="Green">Green</option>
  <option value="Blue">Blue</option>
</select>
            <label style={labelStyle}>Quantity Required:</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter quantity"
              min="1"
              required
            />
          </div>

          {/* Personal Details Section */}
          <div style={sectionStyle}>
            <label style={{ ...labelStyle, marginBottom: "1.5rem", fontSize: "1.3rem", color: "#374151" }}>
              Personal Details
            </label>
            <label style={labelStyle}>Contact Person Name:</label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter name"
              required
            />
            <label style={labelStyle}>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter phone number"
              required
            />
            <label style={labelStyle}>Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter email"
              required
            />
          </div>

          {/* Address Section */}
          <div style={sectionStyle}>
            <label style={{ ...labelStyle, marginBottom: "1.5rem", fontSize: "1.3rem", color: "#374151" }}>
              Address Details
            </label>
            <label style={labelStyle}>Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter company name"
            />
            <label style={labelStyle}>GST Number:</label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter GST number"
            />
            <label style={labelStyle}>Billing Address:</label>
            <textarea
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter billing address"
              rows="4"
              required
            />
            <label style={labelStyle}>Shipping Address:</label>
            <textarea
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter shipping address"
              rows="4"
              required
            />
          </div>

          {/* Notes */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Additional Notes:</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter any additional notes"
              rows="4"
            />
          </div>

          <button type="submit" style={submitButtonStyle}>
            Submit Enquiry
          </button>
        </form>
      </div>
    </>
  );
};

export default Enquire;