import { isDev } from '@ionia/libs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
	en: {
		translation: {
			cms: 'CMS',
			ide: 'IDE',
		},
	},
	zh: {
		translation: {
			cms: '内容',
			ide: 'IDE',
		},
	},
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'zh',
		debug: isDev,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
