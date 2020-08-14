import {
  registerMicroApps,
  setDefaultMountApp,
  start,
  initGlobalState,
  MicroAppStateActions,
} from "qiankun";
import "./index.less";

const apps = [
  {
    name: "dashboard",
    entry: "//localhost:7000",
    container: "#slave-container",
    activeRule: "/dashboard",
  },
  {
    name: "vue",
    entry: "//localhost:7001",
    container: "#slave-container",
    activeRule: "/vue",
  },
  {
    name: "ide",
    entry: "//localhost:7002",
    container: "#slave-container",
    activeRule: "/ide",
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

const globalState = { application: "ionia" };
const actions: MicroAppStateActions = initGlobalState(globalState);

actions.onGlobalStateChange((state, prev) => {
  console.log("【Master】", state, prev);
  const el = document.getElementById("application");
  if (el) el.innerText = state.application;
});

actions.setGlobalState(globalState);

start();
