---
title: 参数校验
group:
  title: 基础架构
order: 9
---

# 参数校验

## class-transformer

### class-transformer 是什么？

简单来说，class-transformer 是一个把 json 对象转化成 class 的工具。

在我们日常 web 开发中经常碰到需要处理 json 数据，因为 json 就是普通的数据，没有处理能力，class 具有业务处理能力，但是需要数据的支持，class-transformer 刚好做为了一个桥接的工具 ，我们可以通过 rest api 获取 rest 数据，然后通过类库转换为 class，直接就具有业务操作能力，简化我们的开发。

例如，您有一个 users.json 正在加载用户列表：

```js
[
  {
    "id": 1,
    "firstName": "Johny",
    "lastName": "Cage",
    "age": 27
  },
  {
    "id": 2,
    "firstName": "Ismoil",
    "lastName": "Somoni",
    "age": 50
  },
  {
    "id": 3,
    "firstName": "Luke",
    "lastName": "Dacascos",
    "age": 12
  }
]
```

并且有一个 User 类：

```js
export class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;

  getName() {
    return this.firstName + ' ' + this.lastName;
  }

  isAdult() {
    return this.age > 36 && this.age < 60;
  }
}
```

您假设 User 要从 users.json 文件下载类型的用户，并且可能要编写以下代码：

```js
fetch('users.json').then((users: User[]) => {
  // 您可以在此处使用users，类型提示也将对您可用
  // 但user实际上不是User类的实例
  // 这意味着您不能使用User类的方法
});
```

在此代码中 users[0].id，您可以使用 users[0].firstName 和 users[0].lastName。但是，您不能使用，users[0].getName() 或者 users[0].isAdult() 因为“用户”实际上是普通 javascript 对象而不是 User 对象实例的数组。

如何使对象 users 实例数组 User 代替普通的 javascript 对象？解决方案是创建 User 对象的新实例，然后将所有属性手动复制到新对象。但是，一旦您拥有更复杂的对象层次结构，事情可能很快就会出错。

是的，您可以使用 class-transformer。该库的目的是帮助您将简单的 javascript 对象映射到您拥有的类的实例。

该库还非常适合您的 API 中公开的模型，因为它提供了出色的工具来控制您的模型在API中公开的内容，这是示例：

```js
fetch('users.json').then((users: Object[]) => {
  const realUsers = plainToClass(User, users);
  // 现在realUsers中的每个用户都是User类的实例
});
```

现在您可以使用 users[0].getName() 和 users[0].isAdult() 方法。

### 安装步骤

1.安装模块：

$ npm install class-transformer --save

2.安装 reflect-metadata

$ npm install reflect-metadata --save

并确保将其导入到全球范围内，例如 app.ts：

```js
import 'reflect-metadata';
```

3.使用了 ES6 功能，如果您使用的是旧版本的 node.js，则可能需要安装 es6-shim：

$ npm install es6-shim --save

并将其导入到 app.ts 等全球位置：

```js
import 'es6-shim';
```

### 方法

具体方法请参考文档，在此不一一叙述： https://github.com/typestack/class-transformer

## class-validator

### 背景和介绍

class-validator 是一个方便的数据校验工具。

访问 https://zhuanlan.zhihu.com/p/87039375

### 安装

$ npm install class-validator --save

注意：使用 class-validator 时，请至少使用npm @ 6。从npm @ 6起，依赖关系树被展平，这是 class-validator 正常运行所必需的。

### 方法

参考文档： 

https://segmentfault.com/a/1190000025123187

https://github.com/typestack/class-validator

## class-transformer-validator

### class-transformer-validator 介绍

class-transformer-validator 是一个简单的用于 class-transformer 和 class-validator 的插件，将它们组合成一个美观且对程序员友好的 API。

### 安装

$ npm install class-transformer-validator --save

这个软件包只是一个简单的插件/包装器，因此您也必须安装所需的模块，即 class-transformer 和 class-validator，因为没有它们就无法工作。请参阅上述文档安装 class-transformer 和 class-validator。

### 用法

```js
import { IsEmail } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";

// 使用class-validator修饰符声明类。
class User {
  @IsEmail()
  public email: string;

  public hello(): string {
    return "World!";
  }
}

// 然后从应用程序中加载JSON字符串
const userJson: string = loadJsonFromSomething();

// 将JSON转换为类实例并验证其正确性
transformAndValidate(User, userJson)
  .then((userObject: User) => {
    // 现在您可以访问所有的类原型方法
    console.log(`Hello ${userObject.hello()}`); // 在控制台打印“Hello World!
  })
  .catch(err => {
    // 处理转换错误(无效JSON)
    // 或验证错误(例如无效的电子邮件属性)
    console.error(err);
  });
```

您还可以转换和验证普通的 JS 对象（例如，来自 express req.body）。使用 ES7 async / await 语法：

```js
async (req, res) => {
  try {
    // 验证请求
    const userObject = await transformAndValidate(User, req.body);
    // 推断的userObject类型为User，您可以访问所有类原型属性和方法
  } catch (err) {
    // 错误请求
    console.error(err);
  }
};
```

自发布以来，0.3.0 还可以传递对象数组-所有对象都将使用给定的类验证约束进行验证：

```js
async (req, res) => {
  try {
    // 转换验证用户对象的数组
    const userObjects = await transformAndValidate(User, req.body);
    userObjects.forEach(user => console.log(`Hello ${user.hello()}`));
  } catch (err) {
    // 错误请求
  }
};
```

### API参考

该 transformAndValidate 函数具有三个重载：

```js
function transformAndValidate<T extends object>(
  classType: ClassType<T>,
  jsonString: string,
  options?: TransformValidationOptions,
): Promise<T | T[]>;
function transformAndValidate<T extends object>(
  classType: ClassType<T>,
  object: object,
  options?: TransformValidationOptions,
): Promise<T>;
function transformAndValidate<T extends object>(
  classType: ClassType<T>,
  array: object[],
  options?: TransformValidationOptions,
): Promise<T[]>;
```

请注意，如果您验证 json 字符串，则返回类型为 Promiseof T，T[] 因此，如果您知道 json 的形状，则需要声明返回的类型：

```js
const users = (await transformAndValidate(
  User,
  JSON.stringify([{ email: "test@test.test" }]),
)) as User[];
```

或者，您可以使用 Array.isArray 方法在运行时检查类型。

### 参数和类型

classType -类符号，可以使用调用的构造函数 new。

```js
type ClassType<T> = {
  new (...args: any[]): T;
};
```

jsonString -包含 JSON 的普通字符串。

object -类型为普通的 JS 对象 object（在TypeScript 2.2中引入），在尝试传递数字，布尔值，空值或未定义时会出现编译时错误，但在传递函数时会出现运行时错误。

array -如上所述的普通JS对象数组。

options -可选选项对象，它具有两个可选属性。

```js
interface TransformValidationOptions {
  validator?: ValidatorOptions;
  transformer?: ClassTransformOptions;
}
```

