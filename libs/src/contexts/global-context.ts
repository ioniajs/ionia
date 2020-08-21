import React from "react";
import { MicroAppStateActions } from "qiankun";

interface InitialState {
  actions?: MicroAppStateActions;
}

const initialState: InitialState = {};

export const GlobalContext = React.createContext(initialState);
