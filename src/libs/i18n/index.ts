import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import SpanishTranslation from "./locales/es/translations.json";
import EnglishTranslation from "./locales/en/translations.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: EnglishTranslation },
    es: { translation: SpanishTranslation },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
