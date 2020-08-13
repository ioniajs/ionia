import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
  initGlobalState,
} from "qiankun";
import "./index.less";

import render from "./render/react-render";

/**
 * Step1 Initialize app (optional)
 */
render({ loading: true });

const loader = (loading: boolean) => render({ loading });

/**
 * Step2 Register subapp
 */
registerMicroApps(
  [
    {
      name: "react16",
      entry: "//localhost:7100",
      container: "#subapp-viewport",
      loader,
      activeRule: "/react16",
    },
    {
      name: "react15",
      entry: "//localhost:7102",
      container: "#subapp-viewport",
      loader,
      activeRule: "/react15",
    },
    {
      name: "vue",
      entry: "//localhost:7101",
      container: "#subapp-viewport",
      loader,
      activeRule: "/vue",
    },
    {
      name: "angular9",
      entry: "//localhost:7103",
      container: "#subapp-viewport",
      loader,
      activeRule: "/angular9",
    },
    {
      name: "purehtml",
      entry: "//localhost:7104",
      container: "#subapp-viewport",
      loader,
      activeRule: "/purehtml",
    },
  ],
  {
    beforeLoad: [
      (app): any => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
      },
    ],
    beforeMount: [
      (app): any => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      },
    ],
    afterUnmount: [
      (app): any => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
      },
    ],
  }
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: "ionia",
});

onGlobalStateChange((value, prev) =>
  console.log("[onGlobalStateChange - master]:", value, prev)
);

setGlobalState({
  ignore: "master",
  user: {
    name: "master",
  },
});

/**
 * Step3 Set the default entry subapp
 */
setDefaultMountApp("/react16");

/**
 * Step4 Start framework
 */
start();

runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
