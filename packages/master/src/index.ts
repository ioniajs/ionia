import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
} from "qiankun";
import "./index.less";

registerMicroApps(
  [
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

setDefaultMountApp("/dashboard");

start();

runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
