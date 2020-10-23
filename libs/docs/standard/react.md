---
title: React 规范
group:
    title: 开发规范
order: 4
---

# React 规范

React 作为一个库，不会决定你如何组织项目的结构。这是件好事，因为这样我们有了充分的自由去尝试不同的组织方式并且选取最适合我们的方式。但是从另一个角度讲，这可能会让刚刚上手 React 的开发者产生些许困惑。

我将会在本文为大家展示我已经使用过一段时间并且效果不错的方式，这些方式没有通过重新造轮子来实现，而是通过将社区中的方案组合和提炼得到。

> 注意：这里没有什么是绝对正确的！你可以选择你认为容易理解，并且可以适应或可以改造成适应你的情景的方式。

## 目录结构

我最常见到的一个问题就是如何组织文件和目录结构。在本文中，我们假设你有一个 `create-react-app` 生成的最简单的目录结构。

`create-react-app` 为我们生成了一个基础的项目，包含根目录还有诸如`.gitignore`, `package.json`, `README.md`, `yarn.lock` 的文件。

它还生成了 `public` 和 `src` 目录，`src` 目录就是我们存放源代码的目录。

看一下下面图片所描述的结构：

![structure](https://img.alicdn.com/tfs/TB1GhuvdZfpK1RjSZFOXXa6nFXa-400-479.png)

本文我们只会关注 `src` 目录，所有在它之外的都会保持不变。

## 容器和组件

我们可以看到在 `src` 目录下有 containers 目录和 components 目录：

```
src
├─ components
└─ containers
```

但是这个方式会导致下面这些问题：

-   **主观的规则** 你不清楚什么是容器而什么是组件，这两者的差异是主观定义的。如果在你的团队里去推行，让所有的开发者能够相同地赞成和评判这两者是非常困难的。
-   **没有考虑组件的变化** 即使你决定了一个组件适用于某种特定的种类，在项目的周期内很容易发生变化，最终迫使你把它从 `components` 挪到 `containers` 目录下，反之亦然。
-   **允许两个组件使用同一个名字** 组件在应用中的命名应该是声明式且唯一的，从而避免对相同命名组件的职责产生困惑。但上面的方式为两个组件可以拥有相同命名打开了一个缺口，一个可以是容器，另一个可以是展示型组件。
-   **效率低下** 即使你在实现一个独立特性时，也不得不经常在 containers 和 components 目录下来回切换，因为一个独立特性有两种不同类型的组件是再正常不过的事情了。

有一种基于这种方式的变种方式，在模块的目录下保持着两个目录的分离。

想象一下在你的应用中有一个 User 模块，在此模块下，你有两个目录去分离你的组件：

```
src
└─ User
  ├─ components
  └─ containers
```

上述方式最小化了在两个遥远目录下不断切换的的问题，但是同样增加了很多烦恼。当你的应用有非常多模块的时候，你最终会可能会创建几十个 `containers` 和 `components` 目录。

所以我们讨论如何组织目录和文件的时候，和组件是否被拆分为展示型和容器型是无关的。也就是说，我们会把所有的组件都放在 `components` 目录下，除了页面。

> 即使在目录上拆分它们是不必要的，了解它们之间的差异性依然是有必要的。如果你对这个话题还有疑问，建议阅读这篇文章：[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)。

## 拆分和组合代码

在 `components` 目录下，我们通过模块/特性(module/feature)的结构来组织文件。

在对用户进行增删改查的过程中，我们只会有一个 User 模块。所以我们的目录结构会像下面这样：

```
src
└─ components
  └─ User
    ├─ Form.jsx
    └─ List.jsx
```

每当一个组件会有不止一个文件的时候，我们会将这个组件和它对应的文件放在同一个文件夹下，并且使用同一个名字来命名。举个例子：现在我们有一个 `Form.css` 文件包含了 `Form.jsx` 的样式，这时我们的目录结构会像这样：

```
src
└─ components
  └─ User
    ├─ Form
    │ ├─ Form.jsx
    │ └─ Form.css
    └─ List.jsx
```

> 测试用的文件和被测试的文件放在一起，在上面这个例子中，`Form.jsx` 的测试文件会放在同一个文件夹下并且命名为 `Form.spec.jsx`

## UI 组件

除了通过模块拆分组件，我们还会在 `src/components` 放置一个 `UI` 目录，用于存放所有通用的组件。

UI 组件不属于任何一个模块，需要足够通用。它们应该可以直接放在开源库中，因为它们不包含任何特定应用的业务逻辑。常见的这类组件有：按钮，输入框，复选框，下拉选择，模态框，数据可视化组件等等。

# 组件命名

以上我们了解了如何组织目录结构和如何通过模块来拆分我们的组件，但是还有一个问题：如何命名它们？

这里我们说的是如何命名我们的 class 或者定义组件的常量。

```
class MyComponent extends Component {}
const MyComponent = () => {};
```

组件的命名在应用中应当清晰且唯一，这样可以让它们可以轻松被找到并且避免可能的困惑。

当应用在运行时发生错误或者通过 React 开发者工具调试时，组件的名字是非常方便易用的，因为错误发生的地方往往都伴随着组件的名字。

我们采用基于路径的组件命名方式，即根据相对于 `components` 文件目录的相对路径来命名，如果在此文件夹以外，则使用相对于 `src` 目录的路径。举个例子，组件的路径如果是 `components/User/List.jsx`，那么它就被命名为 `UserList`。

如果文件名和文件目录名相同，我们不需要重复这个名字。也就是说，`components/User/Form/Form.jsx` 会命名为 `UserForm` 而不是 `UserFormForm`。

这样的命名方式有以下几点好处：

## 便于在项目中搜索文件

如果你的编辑器支持模糊搜索，只需要搜索 `UserForm` 就可以让你找到对应的文件：

![](https://img.alicdn.com/tfs/TB1Y7Kwd5rpK1RjSZFhXXXSdXXa-1600-455.png)

如果你想要在目录树中搜索文件，可以很容易地通过组件的名字定位到它：

![](https://img.alicdn.com/tfs/TB15F9vdYvpK1RjSZPiXXbmwXXa-400-528.png)

## 可以避免在引入时重复名称

遵循这种方式，你可以根据组件的上下文环境来命名文件。想一下上面的 form 组件，我们知道它是一个 User 模块下的 form 组件，但是既然我们已经把 form 组件放在了 User 模块的目录下，我们就不需要在 form 组件的文件名上重复 user 这个单词，使用 `Form.jsx` 就可以了。

我最初使用 React 的时候喜欢用完整的名字来命名文件，但是这样会导致相同的部分重复太多次，同时引入时的路径太长。来看看这两种方式的区别：

```js
import ScreensUserForm from './screens/User/UserForm';
// vs
import ScreensUserForm from './screens/User/Form';
```

在上面的例子中，我们看不出来明显的优势。但是应用复杂度上升一点时就能够看到区别了。我们来看看下面这个我实际项目中的例子：

```js
import MediaPlanViewChannel from '/MediaPlan/MediaPlanView/MediaPlanViewChannel.jsx';
// vs
import MediaPlanViewChannel from './MediaPlan/View/Channel';
```

现在想象一下一个文件名中重复五到十次。

出于这样的原因，我们认为根据组件文件的上下文环境以及它的相对路径来命名是更好的方式。

## 页面（Screen）

如果要对一个用户做增删改查的操作，我们需要有用户列表页面，创建新用户的页面以及编辑已有用户的页面。

在应用中，通过使用组件相互组合的结果，就是一个页面。理想状态下，页面应该不包含任何逻辑，而仅仅是一个函数式组件。

我们以 `src` 目录为根目录，将不同页面分散在不同文件夹中。因为它们是根据路由定义而不是模块来划分成组的。

```
src
├─ components
└─ screens
  └─ User
    ├─ Form.jsx
    └─ List.jsx
```

假设我们项目中在使用 react-router，我们在 screens 目录下放置 Root.jsx 文件，并且在其中定义我们应用所有的路由。

Root.jsx 的代码可能像下面这样：

```js
import React, { Component } from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import ScreensUserForm from './User/Form';
import ScreensUserList from './User/List';

const ScreensRoot = () => (
	<Router>
		<Switch>
			<Route path='/user/list' component={ScreensUserList} />
			<Route path='/user/create' component={ScreensUserForm} />
			<Route path='/user/:id' component={ScreensUserForm} />
		</Switch>
	</Router>
);

export default ScreensRoot;
```

注意我们将所有页面都放在同一个目录下，这个目录以路由名称命名。尝试为每个父级路由建立一个目录，在这个目录中组织子路由。在这个示例中，我们创建了 User 目录并且将 List 页面和 Form 页面放在里面。这种方式使你看一眼 url 就能够轻松定位当前路由渲染的页面。

像上面的例子中的创建和编辑一个用户的路由一样，一个页面可能会被两个不同的路由渲染使用。

你可能注意到了所有的组件都包含 Screen 作为名称的前缀。当组件在组件目录外使用时，我们需要使用它们相对于 src 目录的路径来命名。位于 `src/screens/User/List.jsx` 的组件应该被命名为 ScreensUserList。

包括 Root.jsx 在内，我们的目录结构如下：

```
src
├─ components
└─ screens
  ├─ User
  │ ├─ Form.jsx
  │ └─ List.jsx
  └─ Root.jsx
```

> 别忘了在 index.js 中引入作为应用根组件的 Root.jsx 。

如果你对一个页面长什么样子还有疑问，看看下面的示例，它就是用户表单的页面。

```js
import React from 'react';
import UserForm from '../../components/User/Form/Form';

const ScreensUserForm = ({ match: { params } }) => (
	<div>
		<h1>{`${!params.id ? 'Create' : 'Update'}`} User</h1>
		<UserForm id={params.id} />
	</div>
);

export default ScreensUserForm;
```

最终，我们应用的目录结构会像下面这样：

```
src
├─ components
│  ├─ User
│  │ ├─ Form
│  │ │ ├─ Form.jsx
│  │ │ └─ Form.css
│  │ └─ List.jsx
│  └─ UI
│
└─ screens
  ├─ User
  │ ├─ Form.jsx
  │ └─ List.jsx
  └─ Root.jsx
```

## Basic Rules 基本规范

-   每个文件只写一个模块.
    -   但是多个[无状态模块](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)可以放在单个文件中. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
-   推荐使用 JSX 语法.
-   不要使用 `React.createElement`，除非从一个非 JSX 的文件中初始化你的 app.

## 创建模块

Class vs React.createClass vs stateless

-   如果你的模块有内部状态或者是`refs`, 推荐使用 `class extends React.Component` 而不是 `React.createClass`.
    eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

```js
// bad
const Listing = React.createClass({
	// ...
	render() {
		return <div>{this.state.hello}</div>;
	},
});

// good
class Listing extends React.Component {
	// ...
	render() {
		return <div>{this.state.hello}</div>;
	}
}
```

如果你的模块没有状态或是没有引用`refs`， 推荐使用普通函数（非箭头函数）而不是类:

```js
// bad
class Listing extends React.Component {
	render() {
		return <div>{this.props.hello}</div>;
	}
}

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => <div>{hello}</div>;

// good
function Listing({ hello }) {
	return <div>{hello}</div>;
}
```

## Mixins

-   [不要使用 mixins](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html).

> 为什么? Mixins 会增加隐式的依赖，导致命名冲突，并且会以雪球式增加复杂度。在大多数情况下 Mixins 可以被更好的方法替代，如：组件化，高阶组件，工具模块等。

## Naming 命名

-   **扩展名**: React 模块使用 `.jsx` 扩展名.

-   **文件名**: 文件名使用帕斯卡命名. 如, `ReservationCard.jsx`.

-   **引用命名**: React 模块名使用帕斯卡命名，实例使用骆驼式命名. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```js
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

-   **模块命名**: 模块使用当前文件名一样的名称. 比如 `ReservationCard.jsx` 应该包含名为 `ReservationCard`的模块. 但是，如果整个文件夹是一个模块，使用 `index.js`作为入口文件，然后直接使用 `index.js` 或者文件夹名作为模块的名称:

```js
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

-   **高阶模块命名**: 对于生成一个新的模块，其中的模块名 `displayName` 应该为高阶模块名和传入模块名的组合. 例如, 高阶模块 `withFoo()`, 当传入一个 `Bar` 模块的时候， 生成的模块名 `displayName` 应该为 `withFoo(Bar)`.

    > 为什么？一个模块的 `displayName` 可能会在开发者工具或者错误信息中使用到，因此有一个能清楚的表达这层关系的值能帮助我们更好的理解模块发生了什么，更好的 Debug.

```js
// bad
export default function withFoo(WrappedComponent) {
	return function WithFoo(props) {
		return <WrappedComponent {...props} foo />;
	};
}

// good
export default function withFoo(WrappedComponent) {
	function WithFoo(props) {
		return <WrappedComponent {...props} foo />;
	}

	const wrappedComponentName =
		WrappedComponent.displayName || WrappedComponent.name || 'Component';

	WithFoo.displayName = `withFoo(${wrappedComponentName})`;
	return WithFoo;
}
```

-   **属性命名**: 避免使用 DOM 相关的属性来用作其他的用途。

    > 为什么？对于`style` 和 `className`这样的属性名，我们都会默认它们代表一些特殊的含义，如元素的样式，CSS class 的名称。在你的应用中使用这些属性来表示其他的含义会使你的代码更难阅读，更难维护，并且可能会引起 bug。

```js
  // bad
  <MyComponent style="fancy" />

  // good
  <MyComponent variant="fancy" />
```

## Declaration 声明模块

-   不要使用 `displayName` 来命名 React 模块，而是使用引用来命名模块， 如 class 名称.

```js
// bad
export default React.createClass({
	displayName: 'ReservationCard',
	// stuff goes here
});

// good
export default class ReservationCard extends React.Component {}
```

## Alignment 代码对齐

-   遵循以下的 JSX 语法缩进/格式. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) [`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)

```js
  // bad
  <Foo superLongParam="bar"
       anotherSuperLongParam="baz" />

  // good, 有多行属性的话, 新建一行关闭标签
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
  />

  // 若能在一行中显示, 直接写成一行
  <Foo bar="bar" />

  // 子元素按照常规方式缩进
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
  >
    <Quux />
  </Foo>
```

## Quotes 单引号还是双引号

-   对于 JSX 属性值总是使用双引号(`"`), 其他均使用单引号(`'`). eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

    > 为什么? HTML 属性也是用双引号, 因此 JSX 的属性也遵循此约定.

```js
  // bad
  <Foo bar='bar' />

  // good
  <Foo bar="bar" />

  // bad
  <Foo style={{ left: "20px" }} />

  // good
  <Foo style={{ left: '20px' }} />
```

## Spacing 空格

-   总是在自动关闭的标签前加一个空格，正常情况下也不需要换行. eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

```js
  // bad
  <Foo/>

  // very bad
  <Foo                 />

  // bad
  <Foo
   />

  // good
  <Foo />
```

-   不要在 JSX `{}` 引用括号里两边加空格. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

```js
  // bad
  <Foo bar={ baz } />

  // good
  <Foo bar={baz} />
```

## Props 属性

-   JSX 属性名使用骆驼式风格`camelCase`.

```js
  // bad
  <Foo
    UserName="hello"
    phone_number={12345678}
  />

  // good
  <Foo
    userName="hello"
    phoneNumber={12345678}
  />
```

-   如果属性值为 `true`, 可以直接省略. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

```js
  // bad
  <Foo
    hidden={true}
  />

  // good
  <Foo
    hidden
  />

  // good
  <Foo hidden />
```

-   `<img>` 标签总是添加 `alt` 属性. 如果图片以 presentation(感觉是以类似 PPT 方式显示?)方式显示，`alt` 可为空, 或者`<img>` 要包含`role="presentation"`. eslint: [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

```js
  // bad
  <img src="hello.jpg" />

  // good
  <img src="hello.jpg" alt="Me waving hello" />

  // good
  <img src="hello.jpg" alt="" />

  // good
  <img src="hello.jpg" role="presentation" />
```

-   不要在 `alt` 值里使用如 "image", "photo", or "picture"包括图片含义这样的词， 中文也一样. eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

    > 为什么? 屏幕助读器已经把 `img` 标签标注为图片了, 所以没有必要再在 `alt` 里说明了.

```js
  // bad
  <img src="hello.jpg" alt="Picture of me waving hello" />

  // good
  <img src="hello.jpg" alt="Me waving hello" />
```

-   使用有效正确的 aria `role`属性值 [ARIA roles](https://www.w3.org/TR/wai-aria/roles#usage_intro). eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

```js
  // bad - not an ARIA role
  <div role="datepicker" />

  // bad - abstract ARIA role
  <div role="range" />

  // good
  <div role="button" />
```

-   不要在标签上使用 `accessKey` 属性. eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

> 为什么? 屏幕助读器在键盘快捷键与键盘命令时造成的不统一性会导致阅读性更加复杂.

```js
// bad
<div accessKey="h" />

// good
<div />
```

-   避免使用数组的 index 来作为属性`key`的值，推荐使用唯一 ID. ([为什么?](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

```js
// bad
{
	todos.map((todo, index) => <Todo {...todo} key={index} />);
}

// good
{
	todos.map(todo => <Todo {...todo} key={todo.id} />);
}
```

-   对于所有非必须的属性，总是手动去定义`defaultProps`属性.

> 为什么? propTypes 可以作为模块的文档说明, 并且声明 defaultProps 的话意味着阅读代码的人不需要去假设一些默认值。更重要的是, 显示的声明默认属性可以让你的模块跳过属性类型的检查.

```js
// bad
function SFC({ foo, bar, children }) {
	return (
		<div>
			{foo}
			{bar}
			{children}
		</div>
	);
}
SFC.propTypes = {
	foo: PropTypes.number.isRequired,
	bar: PropTypes.string,
	children: PropTypes.node,
};

// good
function SFC({ foo, bar, children }) {
	return (
		<div>
			{foo}
			{bar}
			{children}
		</div>
	);
}
SFC.propTypes = {
	foo: PropTypes.number.isRequired,
	bar: PropTypes.string,
	children: PropTypes.node,
};
SFC.defaultProps = {
	bar: '',
	children: null,
};
```

-   尽可能少地使用扩展运算符

> 为什么? 除非你很想传递一些不必要的属性。对于 React v15.6.1 和更早的版本，你可以[给 DOM 传递一些无效的 HTML 属性](https://doc.react-china.org/blog/2017/09/08/dom-attributes-in-react-16.html)

例外情况:

-   使用了变量提升的高阶组件

```js
function HOC(WrappedComponent) {
  return class Proxy extends React.Component {
    Proxy.propTypes = {
      text: PropTypes.string,
      isLoading: PropTypes.bool
    };

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
```

-   只有在清楚明白扩展对象时才使用扩展运算符。这非常有用尤其是在使用 Mocha 测试组件的时候。

```js
export default function Foo {
  const props = {
    text: '',
    isPublished: false
  }

  return (<div {...props} />);
}
```

特别提醒：尽可能地筛选出不必要的属性。同时，使用[prop-types-exact](https://www.npmjs.com/package/prop-types-exact)来预防问题出现。

```js
// good
render() {
  const { irrelevantProp, ...relevantProps  } = this.props;
  return <WrappedComponent {...relevantProps} />
}

// bad
render() {
  const { irrelevantProp, ...relevantProps  } = this.props;
  return <WrappedComponent {...this.props} />
}
```

## Refs

-   总是在 Refs 里使用回调函数. eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

```js
  // bad
  <Foo
    ref="myRef"
  />

  // good
  <Foo
    ref={(ref) => { this.myRef = ref; }}
  />
```

## Parentheses 括号

-   将多行的 JSX 标签写在 `()`里. eslint: [`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

```js
  // bad
  render() {
    return <MyComponent className="long body" foo="bar">
             <MyChild />
           </MyComponent>;
  }

  // good
  render() {
    return (
      <MyComponent className="long body" foo="bar">
        <MyChild />
      </MyComponent>
    );
  }

  // good, 单行可以不需要
  render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
  }
```

## Tags 标签

-   对于没有子元素的标签来说总是自己关闭标签. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

```js
  // bad
  <Foo className="stuff"></Foo>

  // good
  <Foo className="stuff" />
```

-   如果模块有多行的属性， 关闭标签时新建一行. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

```js
  // bad
  <Foo
    bar="bar"
    baz="baz" />

  // good
  <Foo
    bar="bar"
    baz="baz"
  />
```

## Methods 函数

-   使用箭头函数来获取本地变量.

```js
function ItemList(props) {
	return (
		<ul>
			{props.items.map((item, index) => (
				<Item key={item.key} onClick={() => doSomethingWith(item.name, index)} />
			))}
		</ul>
	);
}
```

-   当在 `render()` 里使用事件处理方法时，提前在构造函数里把 `this` 绑定上去. eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

    > 为什么? 在每次 `render` 过程中， 再调用 `bind` 都会新建一个新的函数，浪费资源.

```js
  // bad
  class extends React.Component {
    onClickDiv() {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv.bind(this)} />;
    }
  }

  // good
  class extends React.Component {
    constructor(props) {
      super(props);

      this.onClickDiv = this.onClickDiv.bind(this);
    }

    onClickDiv() {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv} />;
    }
  }
```

-   在 React 模块中，不要给所谓的私有函数添加 `_` 前缀，本质上它并不是私有的.

    > 为什么？`_` 下划线前缀在某些语言中通常被用来表示私有变量或者函数。但是不像其他的一些语言，在 JS 中没有原生支持所谓的私有变量，所有的变量函数都是共有的。尽管你的意图是使它私有化，在之前加上下划线并不会使这些变量私有化，并且所有的属性（包括有下划线前缀及没有前缀的）都应该被视为是共有的。了解更多详情请查看 Issue [#1024](https://github.com/airbnb/javascript/issues/1024), 和 [#490](https://github.com/airbnb/javascript/issues/490) 。

```js
  // bad
  React.createClass({
    _onClickSubmit() {
      // do stuff
    },

    // other stuff
  });

  // good
  class extends React.Component {
    onClickSubmit() {
      // do stuff
    }

    // other stuff
  }
```

-   在 `render` 方法中总是确保 `return` 返回值. eslint: [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

```js
  // bad
  render() {
    (<div />);
  }

  // good
  render() {
    return (<div />);
  }
```

## Ordering React 模块生命周期

-   `class extends React.Component` 的生命周期函数:

1. 可选的 `static` 方法
1. `constructor` 构造函数
1. `getChildContext` 获取子元素内容
1. `componentWillMount` 模块渲染前
1. `componentDidMount` 模块渲染后
1. `componentWillReceiveProps` 模块将接受新的数据
1. `shouldComponentUpdate` 判断模块需不需要重新渲染
1. `componentWillUpdate` 上面的方法返回 `true`， 模块将重新渲染
1. `componentDidUpdate` 模块渲染结束
1. `componentWillUnmount` 模块将从 DOM 中清除, 做一些清理任务
1. _点击回调或者事件处理器_ 如 `onClickSubmit()` 或 `onChangeDescription()`
1. _`render` 里的 getter 方法_ 如 `getSelectReason()` 或 `getFooterContent()`
1. _可选的 render 方法_ 如 `renderNavigation()` 或 `renderProfilePicture()`
1. `render` render() 方法

-   如何定义 `propTypes`, `defaultProps`, `contextTypes`, 等等其他属性...

```js
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	id: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired,
	text: PropTypes.string,
};

const defaultProps = {
	text: 'Hello World',
};

class Link extends React.Component {
	static methodsAreOk() {
		return true;
	}

	render() {
		return (
			<a href={this.props.url} data-id={this.props.id}>
				{this.props.text}
			</a>
		);
	}
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
```

-   `React.createClass` 的生命周期函数，与使用 class 稍有不同: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

1. `displayName` 设定模块名称
1. `propTypes` 设置属性的类型
1. `contextTypes` 设置上下文类型
1. `childContextTypes` 设置子元素上下文类型
1. `mixins` 添加一些 mixins
1. `statics`
1. `defaultProps` 设置默认的属性值
1. `getDefaultProps` 获取默认属性值
1. `getInitialState` 或者初始状态
1. `getChildContext`
1. `componentWillMount`
1. `componentDidMount`
1. `componentWillReceiveProps`
1. `shouldComponentUpdate`
1. `componentWillUpdate`
1. `componentDidUpdate`
1. `componentWillUnmount`
1. _clickHandlers or eventHandlers_ like `onClickSubmit()` or `onChangeDescription()`
1. _getter methods for `render`_ like `getSelectReason()` or `getFooterContent()`
1. _Optional render methods_ like `renderNavigation()` or `renderProfilePicture()`
1. `render`

## isMounted

-   不要再使用 `isMounted`. eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

> 为什么? [`isMounted` 反人类设计模式:()][anti-pattern], 在 ES6 classes 中无法使用， 官方将在未来的版本里删除此方法.

[anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

## Hooks

### 返回值

1. 无输出
   允许 Hooks 无输出，一般常见于生命周期类 Hooks。

```js
useMount(() => {});
```

2. value 型
   Hooks 输出仅有一个值。

```js
const documentVisibility = useDocumentVisibility();
```

3. value setValue 型
   输出值为 value 和 setValue 类型的，结构为 [value, setValue] 。

```js
const [state, setState] = useLocalStorageState(...);
```

4.  value actions 型
    输出值为单 value 与多 actions 类型的，结构为 [value, actions] 。

```js
const [current, { inc, dec, set, reset }] = useCounter(...);
```

5. values 型
   输出值为多 value 类型的，结构为 {...values}

```js
const {text, left, right, ...} = useTextSelection();
```

6. values actions 型
   输出值为多 value 与多 actions 类型的，结构为 {...values, ...actions} 。

```js
const {data, error, loading, run} = useRequest(...);
```

### 参数

原则上不允许超过两个参数。

1. 无参数
   允许 Hooks 无参数。

```js
const documentVisibility = useDocumentVisibility();
```

2.  单输入
    单参数无论是否必填直接输入。

```js
const size = useSize(dom);
```

3. 多必选参数
   必选参数小于 2 个，应平级输入。

```js
const ref = useKeyPress(keyFilter, eventHandler);
```

如果多于 2 个，应以 object 形式输入。

4. 多非必选参数
   多非必选参数以 object 形式输入。

```js
const result = useDrop({onText?, onFiles?, onURI?, onDOM?});
const result = useRequest(service, {
manual?,
initialData?,
onSuccess?,
});
```

5. 必选参数 + 非必选参数
   必选参数在前，非必选参数在后。

```js
const result = useTextSelection(items, defaultSelected?);
```
