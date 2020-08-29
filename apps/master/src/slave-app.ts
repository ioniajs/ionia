export default [
  {
    name: "Dashboard",
    entry: "//localhost:7001",
    container: "#slave-container",
    activeRule: "/dashboard",
  },
  {
    name: "CMS",
    entry: "//localhost:7004",
    container: "#slave-container",
    activeRule: "/cms",
  },
  {
    name: "User",
    entry: "//localhost:7002",
    container: "#slave-container",
    activeRule: "/user",
  },
  {
    name: "Auth",
    entry: "//localhost:7003",
    container: "#slave-container",
    activeRule: "/auth",
  },
];
