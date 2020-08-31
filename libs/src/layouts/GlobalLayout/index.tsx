import { useMount } from "ahooks";
import React from "react";
import { MicroAppStateActions } from 'qiankun';
import { Auth } from "../../components";
import { useGlobalStore } from "../../hooks";

const { AccessProvider } = Auth;

interface GlobalLayoutProps {
  globalProps: MicroAppStateActions
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, globalProps }) => {
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
