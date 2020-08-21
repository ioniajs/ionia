import React from "react";
import { GlobalStore } from "./GlobalStore";

export const storesContext = React.createContext({
  globalStore: new GlobalStore(),
});
