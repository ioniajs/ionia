import Detail from "./pages/Detail";
import List from "./pages/List";

export default [
  { exact: true, path: "/", name: "英雄列表", component: List },
  {
    exact: true,
    path: "/detail/:id",
    name: "英雄",
    component: Detail,
  },
];
