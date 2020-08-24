import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Dashboard: "数据中心",
      CMS: "CMS",
      User: "User",
      Auth: "Auth",
    },
  },
  zh: {
    translation: {
      Dashboard: "数据中心",
      CMS: "内容管理",
      User: "用户中心",
      Auth: "认证中心",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "zh",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
