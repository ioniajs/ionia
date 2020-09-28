import Category from "@/pages/Category";
import Detail from "@/pages/Detail";
import List from "@/pages/List";

export default [
  { key: "/", path: "/", name: "英雄列表", component: List },
  {
    key: "/category",
    path: "/category",
    name: "英雄分类",
    component: Category,
  },
  {
    key: "/detail/:id",
    path: "/detail/:id",
    name: "英雄",
    hideInMenu: true,
    component: Detail,
  },
];
