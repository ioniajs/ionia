import { useContext } from "react";
import { storesContext } from "../stores";

export const useGlobalStore = () => {
  const { globalStore } = useContext(storesContext);
  return globalStore;
};
