import create from 'zustand';
import { MicroAppStateActions } from 'qiankun';

type globalStore = {
	state?: Record<string, any>;
	actions?: MicroAppStateActions;
	setState: (state: Record<string, any>) => void;
	setActions: (actions: MicroAppStateActions) => void;
};

const globalStore = create<globalStore>(set => ({
	setState: (nextState: Record<string, any>) =>
		set(store => {
			const state = { ...store.state, ...nextState };
			return { state };
		}),
	setActions: (actions: MicroAppStateActions) => set(() => ({ actions })),
}));

export default globalStore;
