---
title: 接口模拟
group:
  title: 基础架构
order: 12
---

# 接口模拟

## msw介绍

Mock Service Worker是一个使用Service Worker API拦截实际请求的API模拟库。

由于Service Worker是所有现代浏览器附带的标准API。将Mock Service Worker集成到您的应用程序或测试设置中，不需要任何额外的配置，而是放置一个worker文件并声明模拟。

## msw的工作原理

借助Mock Service Worker，您可以使用声明式请求处理程序根据URL，RegExp或自定义条件捕获请求，并提供一个响应解析器函数，该函数返回模拟的响应。

这是模拟POST /login请求的模拟定义文件的示例：

![GitFlow](./mock-img/principle.png)

## msw安装

在项目的根目录中运行以下命令：

![GitFlow](./mock-img/install.png)

## 模拟REST API

### 请求处理程序

要处理REST API请求，我们需要指定其method，path和一个将返回模拟响应的函数。

在本教程中，我们将为用户模拟基本的登录流程。此流程意味着处理两个请求：

POST /login，以允许我们的用户登录；

GET /user，以返回有关已登录用户的信息。

通过调用rest[METHOD]。

![GitFlow](./mock-img/request.png)

### 响应解析器

为了响应被拦截的请求，我们必须使用响应解析器函数指定模拟响应。

响应解析器是一个接受以下参数的函数：

req，有关匹配请求的信息；

res，用于创建模拟响应的功能实用程序；

ctx，一组有助于设置模拟响应的状态码，标题，正文等的函数。

提供对先前定义的请求处理程序的响应解析器：

![GitFlow](./mock-img/response.png)

## 模拟GraphQL API

### 请求处理程序

要处理GraphQL请求，我们需要指定其操作类型（查询/变异）。

在本教程中，我们将为用户模拟基本的登录流程。此流程意味着要处理两个操作：

Login 突变，以允许用户登录，

GetUserInfo 查询，以返回有关已登录用户的信息。

通过调用graphql[OPERATION_KIND]并提供操作名称来创建请求处理程序：

![GitFlow](./mock-img/request2.png)

### 响应解析器

为了使用模拟响应来响应操作，我们必须使用响应解析器函数来指定它。

响应解析器是一个接受以下参数的函数：

req，有关匹配请求的信息；

res，用于创建模拟响应的功能实用程序；

ctx，一组有助于在模拟响应中设置状态代码，标头，数据等的函数。

在GraphQL中，我们在查询/变异声明本身中描述了预期的响应。让我们设计两个操作的响应形状：

![GitFlow](./mock-img/response2.png)

![GitFlow](./mock-img/response3.png)

提供对先前定义的请求处理程序的响应解析器：

![GitFlow](./mock-img/response4.png)

## 相关文档

访问  https://github.com/mswjs/msw