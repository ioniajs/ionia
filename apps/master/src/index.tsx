import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  initGlobalState,
  MicroAppStateActions,
  registerMicroApps,
  setDefaultMountApp,
  start,
} from "qiankun";
import "./index.less";

const globalState = { application: "ionia" };
const actions: MicroAppStateActions = initGlobalState(globalState);

actions.onGlobalStateChange((state, prev) => {
  console.log("【Master】", state, prev);
});

const apps = [
  {
    name: "dashboard",
    entry: "//localhost:7001",
    container: "#slave-container",
    activeRule: "/dashboard",
  },
  {
    name: "theia",
    entry: "//localhost:7002",
    container: "#slave-container",
    activeRule: "/theia",
  },
];

const lifeCycles = {
  beforeLoad: [
    (app: any): any => {
      console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
    },
  ],
  beforeMount: [
    (app: any): any => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app: any): any => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
};

registerMicroApps(apps, lifeCycles);

setDefaultMountApp("/dashboard");

start();

const App = () => {
  const push = React.useCallback((slave) => {
    history.pushState(null, slave, slave);
  }, []);

  return (
    <main>
      <ul className="master-sidemenu">
        <li onClick={() => push("/dashboard")}>Dashboard</li>
        <li onClick={() => push("/theia")}>Theia</li>
      </ul>
      <section id="slave-container"></section>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("master-container"));
