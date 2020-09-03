import Area from "./pages/Area";
import Bar from "./pages/Bar";

export default [
  { exact: true, path: "/", name: "面积图", component: Area },
  { exact: true, path: "/bar", name: "条形图", component: Bar },
];
