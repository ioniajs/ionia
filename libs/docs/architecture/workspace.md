---
title: 工作区
group:
  title: 基础架构
order: 1
---

# 工作区

如下图所示，各个模块功能下面会详细介绍。

![GitFlow](./workspace-img/main.png)

## apps

apps是存放项目应用的地方，分为主应用和子应用。

子应用项目结构主要包括：

node_modules:项目所需依赖。

src源码目录中包括：

pages(页面文件)，pages中包含App.less、App.tsx(App主界面)和index.tsx(入口文件)。

package.json(package配置文件)。

tsconfig.json(ts配置文件)。

webpack.dev.js、webpack.prod.js(项目中webpack的开发和生产版本)。

如下图所示：

![GitFlow](./workspace-img/apps.png)

主应用项目相对于子应用多了一些模块：

mocks(用来模拟http协议接口)。

plugins(插件模块)。

如下图所示：

![GitFlow](./workspace-img/apps2.png)

## libs

libs为项目的公共库。

docs存放文档，包括项目开发文档，资料描述等。

node_modules为项目所需依赖。

src中包含components(组件模块)，configs(系统配置)，core(核心模块)，hooks(钩子模块)等。

如下图所示。

![GitFlow](./workspace-img/libs.png)