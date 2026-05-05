// Buy.js
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "react-icons/ri"; // Import dropdown icon
import "../Styles/Buy.css";

const Buy = () => {
  const { t } = useTranslation();
  const { model } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

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

  // Set model from URL and scroll to top
  useEffect(() => {
    if (model) {
      const decodedModel = decodeURIComponent(model);
      setFormData((prev) => ({ ...prev, model: decodedModel }));
    } else {
      redirectBack();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [model]);

  const redirectBack = () => {
    const state = location.state || {};

    if (state.from) {
      navigate(state.from + "#product", { replace: true, state: { scrollTo: "product" } });
      return;
    }

    if (state.productName) {
      navigate(`/product/${state.productName}#product`, { replace: true, state: { scrollTo: "product" } });
      return;
    }

    navigate("/dashboardTwo", { replace: true });
  };

  // GSTIN Validation (unchanged logic, but error messages translated)
  const validateGSTIN = (gst) => {
    const cleanGST = gst.trim().toUpperCase();

    if (cleanGST === "") return t("Buy.errors.gstRequired");
    if (cleanGST.length !== 15) return t("Buy.errors.gstLength");
    
    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!regex.test(cleanGST)) {
      return t("Buy.errors.gstFormat");
    }

    // Checksum (unchanged)
    const codes = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    let sum = 0;

    for (let i = 0; i < 14; i++) {
      const digitValue = codes.indexOf(cleanGST[i]);
      const product = digitValue * multipliers[i];
      sum += Math.floor(product / 36) + (product % 36);
    }

    const checkDigit = (36 - (sum % 36)) % 36;
    if (codes[checkDigit] !== cleanGST[14]) {
      return t("Buy.errors.gstChecksum");
    }

    return "";
  };

  // Phone Validation
  const validatePhoneNumber = (phone) => {
    const cleanPhone = phone.trim().replace(/\s/g, "");
    
    if (cleanPhone === "") return t("Buy.errors.phoneRequired");
    if (cleanPhone.length !== 10) return t("Buy.errors.phoneLength");
    
    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(cleanPhone)) {
      return t("Buy.errors.phoneInvalid");
    }
    
    return "";
  };

  // Email Validation
  const validateEmail = (email) => {
    const cleanEmail = email.trim();
    
    if (cleanEmail === "") return t("Buy.errors.emailRequired");
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(cleanEmail)) {
      return t("Buy.errors.emailInvalid");
    }
    
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "gstNumber") {
      const cleanValue = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
      setFormData((prev) => ({ ...prev, gstNumber: cleanValue }));
      setGstError(validateGSTIN(cleanValue));
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

      const response = await fetch("https://formspree.io/f/mnjnelap", {
        method: "POST",
        body: formDataObj,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setToast({ visible: true, message: t("Buy.toast.success"), type: "success" });
        
        // Reset form
        setFormData({
          model: decodeURIComponent(model),
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

        setTimeout(() => redirectBack(), 2000);
      } else {
        setToast({ visible: true, message: t("Buy.toast.error"), type: "error" });
      }
    } catch (error) {
      setToast({ visible: true, message: t("Buy.toast.networkError"), type: "error" });
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setToast({ visible: false, message: "", type: "" }), 3000);
  };

  const handleClose = () => {
    redirectBack();
  };

  return (
    <div className="buy-page">
      <div className="buy-form-container">
        <button className="buy-close-button" onClick={handleClose} aria-label={t("Buy.aria.close")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <h1 className="buy-form-title">
          {t("Buy.title")}
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Product Information */}
          <div className="buy-form-section">
            <div className="buy-section-title">{t("Buy.sections.productInfo")}</div>

            <label className="buy-form-label">
              {t("Buy.labels.modelNumber")}<span className="buy-required">*</span>
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="buy-form-input"
              readOnly
              placeholder={t("Buy.placeholders.model")}
            />

            <label className="buy-form-label">
              {t("Buy.labels.color")}<span className="buy-required">*</span>
            </label>
            <div className="buy-select-wrapper">
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="buy-form-input buy-select-input"
                required
              >
                <option value="">{t("Buy.placeholders.selectColor")}</option>
                <option value="Red">{t("Buy.options.color.red")}</option>
                <option value="White">{t("Buy.options.color.white")}</option>
                <option value="Green">{t("Buy.options.color.green")}</option>
                <option value="Blue">{t("Buy.options.color.blue")}</option>
                <option value="RGB">{t("Buy.options.color.rgb")}</option>
              </select>
              <div className="buy-select-icon">
                <RiArrowDownSLine size={24} color="#6b7280" />
              </div>
            </div>

            <label className="buy-form-label">
              {t("Buy.labels.quantity")}<span className="buy-required">*</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="buy-form-input"
              min="1"
              placeholder={t("Buy.placeholders.quantity")}
              required
            />
          </div>

          {/* Personal Details */}
          <div className="buy-form-section">
            <div className="buy-section-title">{t("Buy.sections.personalDetails")}</div>

            <label className="buy-form-label">
              {t("Buy.labels.contactName")}<span className="buy-required">*</span>
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="buy-form-input"
              required
            />

            <label className="buy-form-label">
              {t("Buy.labels.phoneNumber")}<span className="buy-required">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`buy-form-input ${phoneError ? 'buy-input-error' : ''}`}
              placeholder={t("Buy.placeholders.phone")}
              maxLength="10"
              required
            />
            {phoneError && <p className="buy-error-text">{phoneError}</p>}

            <label className="buy-form-label">
              {t("Buy.labels.emailAddress")}<span className="buy-required">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className={`buy-form-input ${emailError ? 'buy-input-error' : ''}`}
              placeholder={t("Buy.placeholders.email")}
              required
            />
            {emailError && <p className="buy-error-text">{emailError}</p>}
          </div>

          {/* Company & Billing */}
          <div className="buy-form-section">
            <div className="buy-section-title">{t("Buy.sections.companyBilling")}</div>

            <label className="buy-form-label">
              {t("Buy.labels.companyName")}<span className="buy-required">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="buy-form-input"
              required
            />

            <label className="buy-form-label">
              {t("Buy.labels.gstNumber")}<span className="buy-required">*</span>
            </label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              className={`buy-form-input ${gstError ? 'buy-input-error' : ''}`}
              placeholder={t("Buy.placeholders.gst")}
              maxLength="15"
              required
            />
            {gstError && <p className="buy-error-text">{gstError}</p>}

            <label className="buy-form-label">
              {t("Buy.labels.billingAddress")}<span className="buy-required">*</span>
            </label>
            <textarea
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className="buy-form-textarea"
              required
            />

            <label className="buy-form-label">
              {t("Buy.labels.shippingAddress")}<span className="buy-required">*</span>
            </label>
            <textarea
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              className="buy-form-textarea"
              required
            />
          </div>

          <div className="buy-form-section">
            <label className="buy-form-label">{t("Buy.labels.additionalNotes")}</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="buy-form-textarea"
              placeholder={t("Buy.placeholders.notes")}
            />
          </div>

          <button 
            type="submit" 
            className={`buy-submit-button ${gstError || phoneError || emailError || isSubmitting ? 'buy-disabled' : ''}`} 
            disabled={!!gstError || !!phoneError || !!emailError || isSubmitting}
          >
            {isSubmitting 
              ? t("Buy.buttons.submitting") 
              : (gstError || phoneError || emailError 
                  ? t("Buy.buttons.fixErrors") 
                  : t("Buy.buttons.submit"))}
          </button>
        </form>
      </div>

      {/* Toast */}
      <div className={`toast ${toast.visible ? 'show' : ''} ${toast.type}`}>
        {toast.message}
      </div>
    </div>
  );
};

export default Buy;