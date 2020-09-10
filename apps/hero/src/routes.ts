import Detail from "./pages/Detail";
import List from "./pages/List";

export default [
  { key: "/", path: "/", name: "英雄列表", component: List },
  {
    key: "/detail/:id",
    path: "/detail/:id",
    name: "英雄",
    hideInMenu: true,
    component: Detail,
  },
];
