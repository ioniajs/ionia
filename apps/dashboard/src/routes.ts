import Area from "./pages/Area";
import Bar from "./pages/Bar";

export default [
  { exact: true, key: "/", path: "/", name: "面积图", component: Area },
  { exact: true, key: "/bar", path: "/bar", name: "条形图", component: Bar },
];
