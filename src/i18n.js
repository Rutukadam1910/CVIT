// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Initialize i18next with Backend for loading JSON files
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('selectedLanguage') || 'en_IN',
    fallbackLng: 'en_IN',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;