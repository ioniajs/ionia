import Home from "@/pages/Home";
import Column from "@/pages/Column";

export default [
  { exact: true, path: "/", name: "内容管理", component: Home },
  { exact: true, path: "/column", name: "栏目管理", component: Column },
];
