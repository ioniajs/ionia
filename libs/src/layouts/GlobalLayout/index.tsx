import { useGlobalStore } from "../../hooks";
import { useMount } from "ahooks";
import { Layout } from "antd";
import { MicroAppStateActions } from "qiankun";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Auth, ErrorFallback } from "../../components";
import "./index.less";

const { AccessProvider } = Auth;

interface GlobalLayoutProps {
  globalProps?: MicroAppStateActions;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  children,
  globalProps,
}) => {
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

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => { }}
      resetKeys={[]}
    >
      <AccessProvider>
        <Layout className="io-layout__global">{children}</Layout>
      </AccessProvider>
    </ErrorBoundary>
  );
};
