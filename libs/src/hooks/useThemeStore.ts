import create from 'zustand';

interface ThemeMenuStyles {
	collapse: boolean;
}

type ThemeStore = {
	menuStyles: ThemeMenuStyles;
	setMenuStyles: (styles: ThemeMenuStyles) => void;
};

const themeStore = create<ThemeStore>(set => ({
	menuStyles: {
		collapse: false,
	},
	setMenuStyles: (styles: ThemeMenuStyles) =>
		set(state => ({
			menuStyles: { ...state.menuStyles, ...styles },
		})),
}));

export default themeStore;
