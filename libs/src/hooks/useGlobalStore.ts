import { useContext } from "react";
import { StoresContext } from "../stores";

export const useGlobalStore = () => {
  const { globalStore } = useContext(StoresContext);
  return globalStore;
};
