import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import az from '../../locales/az/translation.json';
import en from '../../locales/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    az: { translation: az }
  },
  lng: 'en', // İlkin dil
  fallbackLng: 'en', // Əsas dil
  interpolation: { escapeValue: false }
});

export default i18n;
