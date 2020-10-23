---
title: 网络请求
group:
  title: 基础架构
order: 5
---

# 网络请求

## umi-request 介绍

网络请求库基于 fetch 封装，结合了 fetch 和 axios 的功能，为开发人员提供了统一的 api 调用方法，简化了用法，并提供了诸如缓存、超时、字符编码处理和错误处理之类的常用功能。

## 安装

$ npm install --save umi-request

## 示例

### 执行 get 请求

```js
import request from 'umi-request';

request
  .get('/api/v1/xxx?id=1')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
// use options.params
request
  .get('/api/v1/xxx', {
    params: {
      id: 1,
    },
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

### 执行 post 请求

```js
request
  .post('/api/v1/user', {
    data: {
      name: 'Mike',
    },
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

### 创建一个实例

```js
import { extend } from 'umi-request';

const request = extend({
  prefix: '/api/v1',
  timeout: 1000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

request
  .get('/user')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

umi-request 封装使用简单案例：  http://www.siyuweb.com/javascript/3649.html

参数详细介绍请阅读文档：  https://github.com/umijs/umi-request#readme

## 响应模式

请求的响应包含以下信息：

```js
{ 
  //'data'是服务器
  数据提供的响应：{ }，

  //'status'是来自服务器响应
  状态的HTTP状态代码：200，

  //'statusText'是
  来自服务器响应状态的HTTP状态消息服务器响应statusText：'OK'，

  //'headers'服务器响应的标头
  //所有标头名称均为小写
  标头：{ }，
}
```

### 当 options.getResponse === false 时，响应模式将为 'data'

```js
request.get('/api/v1/xxx', { getResponse: false }).then(function(data) {
  console.log(data);
});
```

### 当 options.getResponse === true 时，响应模式为 '{data，response}'

```js
request.get('/api/v1/xxx', { getResponse: true }).then(function({ data, response }) {
  console.log(data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
});
```

可以从 errorerrorHandler 或 request.catch 中的对象获取响应。

## 错误处理

```js
import request, { extend } from 'umi-request';
const errorHandler = function(error) {
  const codeMap = {
    '021': 'An error has occurred',
    '022': 'It’s a big mistake,',
  };
  if (error.response) {
    // 请求已发出，服务器用状态代码响应
    // 超出了2xx的范围
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.data);
    console.log(error.request);
    console.log(codeMap[error.data.status]);
  } else {
    //发出请求，但未收到响应，或者在设置请求时发生错误。
    console.log(error.message);
  }
  throw error;//如果抛出。该错误将继续引发。
  //返回{some：'data'}; 如果返回，则返回该值作为返回值。如果不写，则等于返回undefined，可以在处理结果时判断响应是否具有值。
  //返回{some：'data'}; 
};
// 1.统一处理
const extendRequest = extend({ errorHandler });
// 2.单独的特殊处理
// 如果配置了统一处理，但是api需要特殊处理。当请求时，将errorHandler作为参数传递。
request('/api/v1/xxx', { errorHandler });
// 3.如果未配置errorHandler，则响应将被直接视为promise，并将被捕获。
requestrequest('/api/v1/xxx')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    return errorHandler(error);
  });
```

## 详细文档

访问 https://github.com/umijs/umi-request#readme