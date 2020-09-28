import Category from "@/pages/Category";
import Detail from "@/pages/Detail";
import List from "@/pages/List";

export default [
  { key: "/", path: "/", name: "用户列表", component: List },
  {
    key: "/category",
    path: "/category",
    name: "用户分类",
    component: Category,
  },
  {
    key: "/detail/:id",
    path: "/detail/:id",
    name: "用户",
    hideInMenu: true,
    component: Detail,
  },
];
