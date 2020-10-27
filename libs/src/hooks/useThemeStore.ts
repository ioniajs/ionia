import create from 'zustand';
import { changeAntdTheme, generateThemeColor } from './utils';

interface ThemeMenuStyles {
	collapse: boolean;
}

type ThemeStore = {
	menuStyles: ThemeMenuStyles;
	setMenuStyles: (styles: ThemeMenuStyles) => void;
	changeTheme: (themColor: string) => void;
};

const themeStore = create<ThemeStore>(set => ({
	menuStyles: {
		collapse: false,
	},
	setMenuStyles: (styles: ThemeMenuStyles) =>
		set(state => ({
			menuStyles: { ...state.menuStyles, ...styles },
		})),
	changeTheme: (themColor: string) => {
		changeAntdTheme(generateThemeColor(themColor));
	},
}));

export default themeStore;
