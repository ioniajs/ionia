import create from 'zustand';
import { MicroAppStateActions } from 'qiankun';

interface InitialState {
  state?: Record<string, any>,  
  actions?: MicroAppStateActions,  
  setState: (state: Record<string, any>) => void;
  setActions: (actions: MicroAppStateActions) => void;
}

export default create<InitialState>(set => ({
  setState: (nextState: Record<string, any>) => set(store => { 
    const state = { ...store.state, ...nextState };
    return ({ state });
  }),
  setActions: (actions: MicroAppStateActions) => set(() => ({ actions }))
}));