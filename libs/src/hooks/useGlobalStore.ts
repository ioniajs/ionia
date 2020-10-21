import create from "zustand";
import { MicroAppStateActions } from "qiankun";

interface InitialState {
  state?: Record<string, any>;
  actions?: MicroAppStateActions;
  setState: (state: Record<string, any>) => void;
  setActions: (actions: MicroAppStateActions) => void;
}

const globalStore: any = create((set) => ({
  setState: (nextState: Record<string, any>) =>
    set((store: any) => {
      const state = { ...store.state, ...nextState };
      return { state };
    }),
  setActions: (actions: MicroAppStateActions) => set(() => ({ actions })),
}));

export default globalStore;
