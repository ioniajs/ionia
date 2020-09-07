import { isDev } from "@ionia/libs";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Dashboard: "Dashboard",
      CMS: "CMS",
      User: "User",
      Auth: "Auth",
    },
  },
  zh: {
    translation: {
      Dashboard: "仪表盘",
      CMS: "内容",
      User: "用户",
      Auth: "认证",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "zh",
    debug: isDev,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
