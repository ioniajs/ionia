<h1 align="center">艾欧尼亚（Ionia）</h1>

<div align="center">
微前端快速开发框架
</div>
<br/>

[English](./README.md) | 简体中文

## 特性

- 全局状态同步
- 公共组件库
- 国际化
- 接口 Mock
- 权限控制
- 依赖注入
- 面向切面编程

## 使用

```bash
$ git clone git@github.com:ioniajs/ionia.git --depth=1 && cd ionia

$ yarn && yarn start
```

## 架构

![架构](./architecture.png)

## 主应用

```ts
import { isDev, MasterApplication } from "@ionia/libs";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./i18n";

if (isDev) {
  require("./mocks/index").default.start();
}

const apps = [
  {
    name: "Dashboard",
    entry: "//localhost:7001",
    activeRule: "/dashboard",
  },
  {
    name: "CMS",
    entry: "//localhost:7002",
    activeRule: "/cms",
  },
  {
    name: "User",
    entry: "//localhost:7003",
    activeRule: "/user",
  },
  {
    name: "Auth",
    entry: "//localhost:7004",
    activeRule: "/auth",
  },
];

const lifeCycles = {
  beforeLoad: [
    (app: any): any => {
      console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
    },
  ],
  beforeMount: [
    (app: any): any => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app: any): any => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
};

const initGlobalState = {
  title: "Ionia",
};

new MasterApplication(
  (
    <Router>
      <App />
    </Router>
  ),
  apps,
  "/dashboard",
  lifeCycles,
  initGlobalState
).start();
```

## 从应用

```ts
import { Application, isSlave } from "@ionia/libs";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const app = new Application(
  (
    <Router basename={isSlave ? "/dashboard" : "/"}>
      <App />
    </Router>
  )
);

app.start();

export async function bootstrap() {
  await app.bootstrap();
}

export async function mount(props: any) {
  await app.mount(props);
}

export async function unmount(props: any) {
  await app.unmount(props);
}
```

## 支持

诚邀您参与 ionia 的生态建设（比如：star）
