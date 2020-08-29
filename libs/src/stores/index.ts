import React from "react";
import { GlobalStore } from "./GlobalStore";

export const StoresContext = React.createContext({
  globalStore: new GlobalStore(),
});
