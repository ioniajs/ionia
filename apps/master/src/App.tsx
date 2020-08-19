import React from "react";
import BasicLayout from "@/layouts/BasicLayout";

const App: React.FC = () => {
  const push = React.useCallback((slave) => {
    history.pushState(null, slave, slave);
  }, []);

  return (
    <BasicLayout>
      <div id="slave-container"></div>
    </BasicLayout>
  );
};

export default App;
