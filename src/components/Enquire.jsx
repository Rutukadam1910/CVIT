// Enquire.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "react-icons/ri"; // Import dropdown icon
import Navbar from "./Navbar";
import "../Styles/Enquire.css";

const Enquire = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // List of light product slugs
  const lightProducts = [
    "bar-light",
    "ring-light",
    "dome-light",
    "flat-diffused-light-with-center-hole",
    "flat-diffused-light",
    "indirect-flat-light",
    "back-light",
    "spot-light",
    "tunnel-light"
  ];

  // Check if the enquiry form was opened from a light product page
  const isFromLightProduct = () => {
    const fromPath = location.state?.from || "";
    const pathParts = fromPath.split("/");
    const slug = pathParts[pathParts.length - 1];
    return lightProducts.includes(slug);
  };

  const [formData, setFormData] = useState({
    model: "",
    color: "",
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

  const [gstError, setGstError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // GSTIN Validation
  const validateGSTIN = (gst) => {
    const trimmed = gst.trim().toUpperCase();

    if (trimmed.length !== 15) {
      return t("Enquire.errors.gstLength");
    }

    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!regex.test(trimmed)) {
      return t("Enquire.errors.gstFormat");
    }

    const codes = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sum = 0;
    const multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

    for (let i = 0; i < 14; i++) {
      const digit = codes.indexOf(trimmed[i]);
      const product = digit * multipliers[i];
      sum += Math.floor(product / 36) + (product % 36);
    }

    const checkDigit = (36 - (sum % 36)) % 36;
    if (codes[checkDigit] !== trimmed[14]) {
      return t("Enquire.errors.gstChecksum");
    }

    return "";
  };

  // Phone Validation
  const validatePhoneNumber = (phone) => {
    const cleanPhone = phone.trim().replace(/\s/g, "");
    
    if (cleanPhone === "") return t("Enquire.errors.phoneRequired");
    if (cleanPhone.length !== 10) return t("Enquire.errors.phoneLength");
    
    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(cleanPhone)) {
      return t("Enquire.errors.phoneInvalid");
    }
    
    return "";
  };

  // Email Validation
  const validateEmail = (email) => {
    const cleanEmail = email.trim();
    
    if (cleanEmail === "") return t("Enquire.errors.emailRequired");
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(cleanEmail)) {
      return t("Enquire.errors.emailInvalid");
    }
    
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "gstNumber") {
      const upperValue = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: upperValue }));
      setGstError(validateGSTIN(upperValue));
    } else if (name === "phoneNumber") {
      const cleanValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phoneNumber: cleanValue }));
      setPhoneError(validatePhoneNumber(cleanValue));
    } else if (name === "emailAddress") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setEmailError(validateEmail(value));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const redirectBack = () => {
    const state = location.state || {};

    if (state.from) {
      // === Board Camera Housing special case ===
      if (state.scrollToEnquire || state.productName === "board-camera-housing") {
        navigate(state.from, {
          replace: true,
          state: { scrollToEnquire: true },
        });
      }
      // === Other product detail pages (with products table) ===
      else {
        navigate(state.from, {
          replace: true,
          state: { scrollTo: "product" },
        });
      }
      return;
    }

    // Fallback when no from path is available
    navigate("/dashboardTwo", { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gstValidationError = validateGSTIN(formData.gstNumber);
    const phoneValidationError = validatePhoneNumber(formData.phoneNumber);
    const emailValidationError = validateEmail(formData.emailAddress);

    setGstError(gstValidationError);
    setPhoneError(phoneValidationError);
    setEmailError(emailValidationError);

    if (gstValidationError || phoneValidationError || emailValidationError) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach(key => {
        formDataObj.append(key, formData[key]);
      });

      const response = await fetch("https://formspree.io/f/maqnrawb", {
        method: "POST",
        body: formDataObj,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setToast({ visible: true, message: t("Enquire.toast.success"), type: "success" });
        
        // Reset form
        setFormData({
          model: "",
          color: "",
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
        setGstError("");
        setPhoneError("");
        setEmailError("");

        setTimeout(() => redirectBack(), 1800); // Give time to see success message
      } else {
        setToast({ visible: true, message: t("Enquire.toast.error"), type: "error" });
      }
    } catch (error) {
      setToast({ visible: true, message: t("Enquire.toast.networkError"), type: "error" });
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setToast({ visible: false, message: "", type: "" }), 3000);
  };

  const handleClose = () => {
    redirectBack();
  };

  const showColorDropdown = isFromLightProduct();

  return (
    <div className="enquire-page">
      <div className="enquire-form-container">
        <button className="enquire-close-button" onClick={handleClose} aria-label={t("Enquire.aria.close")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <h1 className="enquire-form-title">
          {t("Enquire.title")}
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Product Information */}
          <div className="enquire-form-section">
            <div className="enquire-section-title">{t("Enquire.sections.productInfo")}</div>

            <label className="enquire-form-label">
              {t("Enquire.labels.customProductName")}<span className="enquire-required">*</span>
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="enquire-form-input"
              required
              placeholder={t("Enquire.placeholders.customProduct")}
            />

            {/* Conditionally render color dropdown */}
            {showColorDropdown && (
              <>
                <label className="enquire-form-label">
                  {t("Enquire.labels.color")}<span className="enquire-required">*</span>
                </label>
                <div className="enquire-select-wrapper">
                  <select
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="enquire-form-input enquire-select-input"
                    required={showColorDropdown}
                  >
                    <option value="">{t("Enquire.placeholders.selectColor")}</option>
                    <option value="Red">{t("Enquire.options.color.red")}</option>
                    <option value="White">{t("Enquire.options.color.white")}</option>
                    <option value="Green">{t("Enquire.options.color.green")}</option>
                    <option value="Blue">{t("Enquire.options.color.blue")}</option>
                    <option value="RGB">{t("Enquire.options.color.rgb")}</option>
                  </select>
                  <div className="enquire-select-icon">
                    <RiArrowDownSLine size={24} color="#6b7280" />
                  </div>
                </div>
              </>
            )}

            <label className="enquire-form-label">
              {t("Enquire.labels.quantity")}<span className="enquire-required">*</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="enquire-form-input"
              min="1"
              placeholder={t("Enquire.placeholders.quantity")}
              required
            />
          </div>

          {/* Personal Details */}
          <div className="enquire-form-section">
            <div className="enquire-section-title">{t("Enquire.sections.personalDetails")}</div>

            <label className="enquire-form-label">
              {t("Enquire.labels.contactName")}<span className="enquire-required">*</span>
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="enquire-form-input"
              required
            />

            <label className="enquire-form-label">
              {t("Enquire.labels.phoneNumber")}<span className="enquire-required">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`enquire-form-input ${phoneError ? 'enquire-input-error' : ''}`}
              placeholder={t("Enquire.placeholders.phone")}
              maxLength="10"
              required
            />
            {phoneError && <p className="enquire-error-text">{phoneError}</p>}

            <label className="enquire-form-label">
              {t("Enquire.labels.emailAddress")}<span className="enquire-required">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className={`enquire-form-input ${emailError ? 'enquire-input-error' : ''}`}
              placeholder={t("Enquire.placeholders.email")}
              required
            />
            {emailError && <p className="enquire-error-text">{emailError}</p>}
          </div>

          {/* Address Details */}
          <div className="enquire-form-section">
            <div className="enquire-section-title">{t("Enquire.sections.addressDetails")}</div>

            <label className="enquire-form-label">
              {t("Enquire.labels.companyName")}<span className="enquire-required">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="enquire-form-input"
              required
            />

            <label className="enquire-form-label">
              {t("Enquire.labels.gstNumber")}<span className="enquire-required">*</span>
            </label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              className={`enquire-form-input ${gstError ? 'enquire-input-error' : ''}`}
              placeholder={t("Enquire.placeholders.gst")}
              maxLength="15"
              required
            />
            {gstError && <p className="enquire-error-text">{gstError}</p>}

            <label className="enquire-form-label">
              {t("Enquire.labels.billingAddress")}<span className="enquire-required">*</span>
            </label>
            <textarea
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className="enquire-form-textarea"
              required
            />

            <label className="enquire-form-label">
              {t("Enquire.labels.shippingAddress")}<span className="enquire-required">*</span>
            </label>
            <textarea
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              className="enquire-form-textarea"
              required
            />
          </div>

          {/* Additional Notes */}
          <div className="enquire-form-section">
            <label className="enquire-form-label">{t("Enquire.labels.additionalNotes")}</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="enquire-form-textarea"
              placeholder={t("Enquire.placeholders.notes")}
            />
          </div>

          <button 
            type="submit" 
            className={`enquire-submit-button ${gstError || phoneError || emailError || isSubmitting ? 'enquire-disabled' : ''}`} 
            disabled={!!gstError || !!phoneError || !!emailError || isSubmitting}
          >
            {isSubmitting 
              ? t("Enquire.buttons.submitting") 
              : (gstError || phoneError || emailError 
                  ? t("Enquire.buttons.fixErrors") 
                  : t("Enquire.buttons.submit"))}
          </button>
        </form>
      </div>

      {/* Toast Notification */}
      <div 
        className={`toast ${toast.visible ? 'show' : ''} ${toast.type}`}
      >
        {toast.message}
      </div>
    </div>
  );
};

export default Enquire;