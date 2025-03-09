import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('i18nextLng') || 'bn', // Default language
    fallbackLng: 'en', // Fallback language
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['dashboard', 'profile',],
    defaultNS: 'dashboard',
    detection: {
      order: ['localStorage', 'navigator'], // It checks localStorage first
      caches: ['localStorage'], // Persist language selection in localStorage
    },
  });

export default i18n;