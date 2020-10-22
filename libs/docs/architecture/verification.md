---
title: 参数校验
group:
  title: 基础架构
order: 9
---

# 参数校验

## class-transformer

### class-transformer是什么？

简单来说，class-transformer是一个方便的json对象转化成class的工具。

在我们日常web开发中经常碰到需要json 到类的处理，因为json 就是普通的数据，没有处理能力，class 具有业务处理能力， 
但是需要数据的支持，class-transformer 刚好做为了一个桥接的工具 ，我们可以通过rest api 获取rest数据，然后通过类库 
转换为class，直接就具有的业务操作能力，简化我们的开发。

例如，您有一个users.json正在加载的用户列表：

[ 
  { “ id ”：1，
     “ firstName ”：“ Johny ”，
     “ lastName ”：“笼”，
     “年龄”：27 
  }，
  { “ id ”：2，
     “ firstName ”：“ Ismoil ”，
     “ lastName ”：”索莫尼“，
     ”
    
    age “：50 
  }，
  { ” id “：3，
     ” firstName “：” Luke “，
     ” lastName “：” Dacascos “，
     ” age “：12 
  } 
]

并且有一个User类：

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

您假设User要从users.json文件下载类型的用户，并且可能要编写以下代码：

```js
fetch('users.json').then((users: User[]) => {
  // 您可以在此处使用users，类型提示也将对您可用
  // 但user实际上不是User类的实例
  // 这意味着您不能使用User类的方法
});
```

在此代码中users[0].id，您可以使用users[0].firstName和users[0].lastName。但是，您不能使用，users[0].getName()或者users[0].isAdult()因为“用户”实际上是普通javascript对象而不是User对象实例的数组。

如何使对象users实例数组User代替普通的javascript对象？解决方案是创建User对象的新实例，然后将所有属性手动复制到新对象。但是，一旦您拥有更复杂的对象层次结构，事情可能很快就会出错。

是的，您可以使用class-transformer。该库的目的是帮助您将简单的javascript对象映射到您拥有的类的实例。

该库还非常适合您的API中公开的模型，因为它提供了出色的工具来控制您的模型在API中公开的内容。这是示例：

```js
fetch('users.json').then((users: Object[]) => {
  const realUsers = plainToClass(User, users);
  // 现在realUsers中的每个用户都是User类的实例
});
```

现在您可以使用users[0].getName()和users[0].isAdult()方法。

### 安装步骤

1.安装模块：

$ npm install class-transformer --save

2.安装 reflect-metadata

$ npm install reflect-metadata --save

并确保将其导入到全球范围内，例如app.ts：

```js
import 'reflect-metadata';
```

3.使用了ES6功能，如果您使用的是旧版本的node.js，则可能需要安装es6-shim：

$ npm install es6-shim --save

并将其导入到app.ts等全球位置：

```js
import 'es6-shim';
```

### 方法

具体方法请参考文档，在此不一一叙述： https://github.com/typestack/class-transformer

## class-validator

### 背景和介绍

class-validator是一个方便的数据校验工具。

访问 https://zhuanlan.zhihu.com/p/87039375

### 安装

$ npm install class-validator --save

注意：使用class-validator时，请至少使用npm @ 6。从npm @ 6起，依赖关系树被展平，这是class-validator正常运行所必需的。

### 方法

参考文档： 

https://segmentfault.com/a/1190000025123187

https://github.com/typestack/class-validator

## class-transformer-validator

### class-transformer-validator介绍

class-transformer-validator是一个简单的用于class-transformer和class-validator的插件，将它们组合成一个美观且对程序员友好的API。

### 安装

$ npm install class-transformer-validator --save

这个软件包只是一个简单的插件/包装器，因此您也必须安装所需的模块，即class-transformer和class-validator，因为没有它们就无法工作。请参阅上述文档安装class-transformer和class-validator。

### 用法

```js
import { IsEmail } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";

// declare the class using class-validator decorators
class User {
  @IsEmail()
  public email: string;

  public hello(): string {
    return "World!";
  }
}

// then load the JSON string from any part of your app
const userJson: string = loadJsonFromSomething();

// transform the JSON to class instance and validate it correctness
transformAndValidate(User, userJson)
  .then((userObject: User) => {
    // now you can access all your class prototype method
    console.log(`Hello ${userObject.hello()}`); // prints "Hello World!" on console
  })
  .catch(err => {
    // here you can handle error on transformation (invalid JSON)
    // or validation error (e.g. invalid email property)
    console.error(err);
  });
```

您还可以转换和验证普通的JS对象（例如，来自express req.body）。使用ES7 async / await语法：

```js
async (req, res) => {
  try {
    // transform and validate request body
    const userObject = await transformAndValidate(User, req.body);
    // infered type of userObject is User, you can access all class prototype properties and methods
  } catch (err) {
    // your error handling
    console.error(err);
  }
};
```

自发布以来，0.3.0您还可以传递对象数组-所有对象都将使用给定的类验证约束进行验证：

```js
async (req, res) => {
  try {
    // transform and validate request body - array of User objects
    const userObjects = await transformAndValidate(User, req.body);
    userObjects.forEach(user => console.log(`Hello ${user.hello()}`));
  } catch (err) {
    // your error handling
  }
};
```

### API参考

该transformAndValidate函数具有三个重载：

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

请注意，如果您验证json字符串，则返回类型为Promiseof T，T[]因此，如果您知道json的形状，则需要声明返回的类型：

```js
const users = (await transformAndValidate(
  User,
  JSON.stringify([{ email: "test@test.test" }]),
)) as User[];
```

或者，您可以使用Array.isArray方法在运行时检查类型。

### 参数和类型

classType -类符号，可以使用调用的构造函数 new。

```js
type ClassType<T> = {
  new (...args: any[]): T;
};
```

jsonString -包含JSON的普通字符串。

object-类型为普通的JS对象object（在TypeScript 2.2中引入），在尝试传递数字，布尔值，空值或未定义时会出现编译时错误，但在传递函数时会出现运行时错误。

array -如上所述的普通JS对象数组。

options -可选选项对象，它具有两个可选属性。

```js
interface TransformValidationOptions {
  validator?: ValidatorOptions;
  transformer?: ClassTransformOptions;
}
```

