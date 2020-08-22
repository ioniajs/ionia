import React from "react";
import BasicLayout from "./layouts/BasicLayout";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BasicLayout>
      <div id="slave-container"></div>
    </BasicLayout>
  );
};

export default App;
