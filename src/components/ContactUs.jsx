import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Building2,
  Mail,
  Phone,
} from "lucide-react";
import "../Styles/ContactUs.css";

const ContactUs = () => {
  const { t } = useTranslation();
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    const cleanEmail = email.trim();
    
    if (cleanEmail === "") return "Email is required";
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(cleanEmail)) {
      return "Please enter a valid email address";
    }
    
    return "";
  };

  // Phone validation function (accepts various formats)
  const validatePhone = (phone) => {
    const cleanPhone = phone.trim();
    
    // Phone is optional, but if provided must match pattern
    if (cleanPhone === "") return "";
    
    const regex = /^[\d\s\-+()]+$/;
    if (!regex.test(cleanPhone)) {
      return "Please enter a valid phone number";
    }
    
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailError(validateEmail(value));
    } else if (name === "phone") {
      setPhoneError(validatePhone(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const phone = formData.get("phone");
    
    // Validate all fields
    const emailValidationError = validateEmail(email);
    const phoneValidationError = validatePhone(phone);
    
    setEmailError(emailValidationError);
    setPhoneError(phoneValidationError);
    
    // If there are errors, don't submit
    if (emailValidationError || phoneValidationError) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjkakzab", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setToast({ visible: true, message: t("ContactUsPage.toastSuccess"), type: "success" });
        e.target.reset();
        // Clear errors
        setEmailError("");
        setPhoneError("");
      } else {
        setToast({ visible: true, message: t("ContactUsPage.toastError"), type: "error" });
      }
    } catch (error) {
      setToast({ visible: true, message: t("ContactUsPage.toastNetworkError"), type: "error" });
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setToast({ visible: false, message: "", type: "" }), 3000);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Form Section */}
        <div className="contact-form">
          <h2>{t("ContactUsPage.formHeading")}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder={t("ContactUsPage.formNamePlaceholder")}
                required
              />
              <div className="input-with-error">
                <input
                  type="email"
                  name="email"
                  placeholder={t("ContactUsPage.formEmailPlaceholder")}
                  required
                  onChange={handleChange}
                  className={`contact-form-input ${emailError ? 'contact-input-error' : ''}`}
                />
                {emailError && <p className="contact-error-text">{emailError}</p>}
              </div>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="subject"
                placeholder={t("ContactUsPage.formSubjectPlaceholder")}
                required
              />
              <div className="input-with-error">
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("ContactUsPage.formPhonePlaceholder")}
                  onChange={handleChange}
                  className={`contact-form-input ${phoneError ? 'contact-input-error' : ''}`}
                />
                {phoneError && <p className="contact-error-text">{phoneError}</p>}
              </div>
            </div>
            <textarea
              name="message"
              placeholder={t("ContactUsPage.formMessagePlaceholder")}
              required
            ></textarea>
            
            {/* New Checkbox Section */}
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="terms-checkbox"
                required
              />
              <label htmlFor="terms" className="checkbox-label">
                By clicking Checkbox, you agree to use our 'Form' terms and consent to cookie usage in browser.
              </label>
            </div>

            <div className="submit-wrapper">
              <button 
                type="submit" 
                className={`send-button ${emailError || phoneError || isSubmitting ? 'contact-disabled' : ''}`} 
                disabled={!!emailError || !!phoneError || isSubmitting}
              >
                {isSubmitting 
                  ? "Submitting..." 
                  : (emailError || phoneError 
                      ? "Please check the highlighted fields before proceeding" 
                      : t("ContactUsPage.formSubmitButton"))}
              </button>
            </div>
            
            {/* WhatsApp Contact Option */}
            <div className="whatsapp-contact">
              <p className="or-text">OR</p>
              <a 
                href="https://api.whatsapp.com/send?phone=7507149084" 
                rel="nofollow" 
                target="_blank" 
                aria-label={t('WhatsApp')} 
                className="whatsapp-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.991 21.781a9.9 9.9 0 0 1-5.034-1.38l-.36-.216-3.741.981.999-3.649-.234-.376a9.84 9.84 0 0 1-1.511-5.258c0-5.439 4.436-9.876 9.887-9.876a9.84 9.84 0 0 1 6.99 2.897 9.84 9.84 0 0 1 2.892 6.99c-.006 5.459-4.442 9.888-9.888 9.888m5.423-7.401c-.296-.149-1.755-.867-2.03-.969-.273-.098-.473-.149-.667.149-.2.296-.77.969-.941 1.163-.171.199-.348.222-.645.075-.296-.15-1.254-.462-2.388-1.478-.885-.787-1.478-1.763-1.655-2.058-.171-.297-.016-.456.132-.604.131-.132.296-.348.444-.519.15-.171.199-.297.297-.495.098-.201.051-.372-.022-.52-.075-.149-.667-1.614-.918-2.205-.24-.583-.484-.502-.667-.51-.171-.01-.37-.01-.57-.01a1.095 1.095 0 0 0-.794.37c-.273.297-1.037 1.016-1.037 2.482s1.065 2.874 1.215 3.074c.147.199 2.091 3.198 5.075 4.488.705.307 1.26.489 1.694.627.713.228 1.356.193 1.869.12.57-.087 1.757-.72 2.007-1.414.246-.696.246-1.29.171-1.414-.073-.126-.273-.199-.57-.348"/>
                </svg>
                <span>{t('Contact Us on WhatsApp')}</span>
              </a>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="contact-info">
          <h2>{t("ContactUsPage.infoHeading")}</h2>

          <div className="info-block">
            <div className="info-icon">
              <MapPin size={18.76} strokeWidth={1.34} color="white" />
            </div>
            <div className="info-content">
              <h4>{t("ContactUsPage.officeAddressTitle")}</h4>
              <p>{t("ContactUsPage.officeAddress")}</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <Building2 size={18.76} strokeWidth={1.34} color="white" />
            </div>
            <div className="info-content">
              <h4>{t("ContactUsPage.registeredAddressTitle")}</h4>
              <p>{t("ContactUsPage.registeredAddress")}</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.76"
                height="18.76"
                viewBox="0 0 1024 1024"
                preserveAspectRatio="xMidYMid meet"
                fill="white"
              >
                <path d="M914.29 219.43c0-80.66-65.62-146.29-146.29-146.29H274.29c-84.57 0-155.45 64.11-164.57 146.29v475.43h146.29v256h585.14V346.08c43.69-25.34 73.14-72.62 73.14-126.65z m-585.14 73.14c0-19.55 15.43-35.57 34.75-36.53a90.403 90.403 0 0 1-16.44 36.53h-18.31zM182.87 621.71v-384c0-50.41 41.02-91.43 91.43-91.43 30.46 0 57.48 14.97 74.1 37.94-52.3 8.33-92.39 53.74-92.39 108.34v329.15h-73.14z m585.14 256H329.15V365.72h438.86v511.99z m0-585.14H429.54c6.12-17.37 9.32-35.86 9.32-54.86 0-33.81-10.25-65.26-27.8-91.43H768c40.34 0 73.14 32.8 73.14 73.14s-32.79 73.15-73.13 73.15z" />
                <path d="M416.392 762.75L635.83 449.3l44.933 31.456-219.438 313.45zM457.15 588.27c42.34 0 76.8-34.46 76.8-76.8s-34.46-76.8-76.8-76.8c-42.34 0-76.8 34.46-76.8 76.8s34.46 76.8 76.8 76.8z m0-109.72c18.14 0 32.91 14.77 32.91 32.91 0 18.14-14.77 32.91-32.91 32.91-18.14 0-32.91-14.77-32.91-32.91 0-18.14 14.77-32.91 32.91-32.91zM563.2 731.46c0 42.34 34.46 76.8 76.8 76.8s76.8-34.46 76.8-76.8-34.46-76.8-76.8-76.8-76.8 34.46-76.8 76.8z m109.72 0c0 18.14-14.77 32.91-32.91 32.91s-32.91-14.77-32.91-32.91c0-18.14 14.77-32.91 32.91-32.91s32.91 14.77 32.91 32.91z" />
              </svg>
            </div>
            <div className="info-content">
              <h4>{t("ContactUsPage.gstNumberTitle")}</h4>
              <p>{t("ContactUsPage.gstNumber")}</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <Mail size={18.76} strokeWidth={1.34} color="white" />
            </div>
            <div className="info-content">
              <h4>{t("ContactUsPage.emailAddressTitle")}</h4>
              <p>{t("ContactUsPage.emailAddress")}</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <Phone size={18.76} strokeWidth={1.34} color="white" />
            </div>
            <div className="info-content">
              <h4>{t("ContactUsPage.phoneNumberTitle")}</h4>
              <p>{t("ContactUsPage.phoneNumber")}</p>
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