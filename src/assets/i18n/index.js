import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translations from "./translations";

i18n.use(LanguageDetector).init({
  fallbackLng: "fr",
  debug: false,

  resources: translations,

  defaultNS: "general",
  fallbackNS: "common",

  interpolation: {
    escapeValue: false, // not needed for react
  },

  react: {
    defaultTransParent: "span",
  },

  detection: {
    order: ["navigator", "htmlTag"],

    excludeCacheFor: ["cimode"],
  },

  simplifyPluralSuffix: true,
});

export default i18n;