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

```js
// src/mocks.js
import { setupWorker, rest } from 'msw'
const worker = setupWorker(
  rest.post('/login', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('username')
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authenticated',
        }),
      )
    }
    return res(
      ctx.json({
        firstName: 'John',
      }),
    )
  }),
)
// 
worker.start()
```

## msw安装

在项目的根目录中运行以下命令：

$ npm install msw --save-dev

或者

$ yarn add msw --dev

## 模拟REST API

### 请求处理程序

要处理REST API请求，我们需要指定其method，path和一个将返回模拟响应的函数。

在本教程中，我们将为用户模拟基本的登录流程。此流程意味着处理两个请求：

POST /login，以允许我们的用户登录；

GET /user，以返回有关已登录用户的信息。

通过调用rest[METHOD]。

```js
// src/mocks/handlers.js
import { rest } from 'msw'
export const handlers = [
  // 处理POST /登录请求
  rest.post('/login', null),
  // 处理GET /用户请求
  rest.get('/user', null),
]
```

### 响应解析器

为了响应被拦截的请求，我们必须使用响应解析器函数指定模拟响应。

响应解析器是一个接受以下参数的函数：

req，有关匹配请求的信息；

res，用于创建模拟响应的功能实用程序；

ctx，一组有助于设置模拟响应的状态码，标题，正文等的函数。

提供对先前定义的请求处理程序的响应解析器：

```js
// src/mocks/handlers.js
import { rest } from 'msw'
export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // 在会话中坚持用户的身份验证
    sessionStorage.setItem('is-authenticated', true)
    return res(
      // 回应200状态码
      ctx.status(200),
    )
  }),
  rest.get('/user', (req, res, ctx) => {
    // 检查用户是否在此会话中通过了身份验证
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      // 如果未通过身份验证，则返回403错误
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }
    // 如果通过身份验证，则返回模拟的用户详细信息
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]
```

## 模拟GraphQL API

### 请求处理程序

要处理GraphQL请求，我们需要指定其操作类型（查询/变异）。

在本教程中，我们将为用户模拟基本的登录流程。此流程意味着要处理两个操作：

Login 突变，以允许用户登录，

GetUserInfo 查询，以返回有关已登录用户的信息。

通过调用graphql[OPERATION_KIND]并提供操作名称来创建请求处理程序：

```js
// src/mocks/handlers.js
import { graphql } from 'msw'
export const handlers = [
  // 处理“登录”突变
  graphql.mutation('Login', null),
  // 处理“ GetUserInfo”查询
  graphql.query('GetUserInfo', null),
]
```

### 响应解析器

为了使用模拟响应来响应操作，我们必须使用响应解析器函数来指定它。

响应解析器是一个接受以下参数的函数：

req，有关匹配请求的信息；

res，用于创建模拟响应的功能实用程序；

ctx，一组有助于在模拟响应中设置状态代码，标头，数据等的函数。

在GraphQL中，我们在查询/变异声明本身中描述了预期的响应。让我们设计两个操作的响应形状：

```js
// 使用给定的用户名进行身份验证
mutation Login($username: String!) {
  login(username: $username) {
    username
  }
}

// 返回有关已认证用户的信息
query GetUserInfo() {
  user {
    username
    firstName
  }
}
```

提供对先前定义的请求处理程序的响应解析器：

```js
// src/mocks/handlers.js
import { graphql } from 'msw'
export const handlers = [
  // 处理“登录”突变
  graphql.mutation('Login', (req, res, ctx) => {
    const { username } = req.variables
    sessionStorage.setItem('is-authenticated', username)
    return res(
      ctx.data({
        login: {
          username,
        },
      }),
    )
  }),
  // 处理“ GetUserInfo”查询
  graphql.query('GetUserInfo', (req, res, ctx) => {
    const authenticatedUser = sessionStorage.getItem('is-authenticated')
    if (!authenticatedUser) {
      // 如果未通过身份验证，则返回错误
      return res(
        ctx.errors([
          {
            message: 'Not authenticated',
            errorType: 'AuthenticationError',
          },
        ]),
      )
    }
    // 通过身份验证后，使用查询有效负载进行响应
    return res(
      ctx.data({
        user: {
          username: authenticatedUser,
          firstName: 'John',
        },
      }),
    )
  }),
]
```

## 相关文档

访问  https://github.com/mswjs/msw