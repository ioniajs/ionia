import { useMount } from "ahooks";
import React from "react";
import { Auth } from "../../components";
import { useGlobalStore } from "../../hooks";

const { AccessProvider } = Auth;

export const GlobalLayout = ({ children, globalProps }: any) => {
  const globalStore = useGlobalStore();

  useMount(() => {
    if (globalProps) {
      globalStore.setActions(globalProps);
      globalProps.onGlobalStateChange(
        (globalState: any) => globalStore.setState(globalState),
        true
      );
    }
  });

  return <AccessProvider>{children}</AccessProvider>;
};
