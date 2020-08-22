import React from "react";
import { useLocation } from "react-use";
import BasicLayout from "./layouts/BasicLayout";
import AuthLayout from "./layouts/AuthLayout";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname?.startsWith("/auth") ? (
        <AuthLayout>Auth</AuthLayout>
      ) : (
        <BasicLayout>
          <div id="slave-container"></div>
        </BasicLayout>
      )}
    </>
  );
};

export default App;
