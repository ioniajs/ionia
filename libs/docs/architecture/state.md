---
title: 状态管理
group:
  title: 基础架构
order: 13
---

# 状态管理

## Zustand 介绍

Zustand 是一个小型，快速且可扩展的功能块状态管理工具。

## Zustand 安装

$ npm install zustand

## Zustand 使用方法

先创建一个 store:

```js
import create from 'zustand';

const useStore = create(set => ({
	bears: 0,
	increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));
```

然后绑定组件，可以在任何地方使用该挂钩，不需要提供程序。选择您的状态，组件将在更改时重新呈现。

```jsx
import React from 'react'
import useStore from './zustand/useStore'

function BearCounter() {
	const bears = useStore(state => state.bears);
	const increasePopulation = useStore(state => state.increasePopulation);
	const removeAllBears = useStore(state => state.removeAllBears);
	return (
		<div>
			<h1>{bears} around here ...</h1>
			<button onClick={increasePopulation}>one up</button>
			<button onClick={removeAllBears}>clear</button>
		</div>
	);
}
export default BearCounter
```

点击 one up 让数字 +1，点击 clear 使数字清零。

请记住，它将导致组件在每次状态更改时进行更新。

```js
const state = useStore();
```

您也可以从多个 store 中获取：

再创建一个 carStore:

```js
import create from 'zustand';

const carStore = create(set => ({
	carNumber: 0,
	increaseNumber: () => set(state => ({ carNumber: state.carNumber + 1 })),
	reduceNumber: () => set(state => ({ carNumber: state.carNumber - 1 })),
	removeNumber: () => set({ carNumber: 0 }),
}));
```

```jsx
import React from 'react'
import useStore from './zustand/useStore'
import carStore from './zustand/carStore'

function BearCounter() {
	const bears = useStore(state => state.bears);
	const increasePopulation = useStore(state => state.increasePopulation);
	const removeAllBears = useStore(state => state.removeAllBears);
	const carNumber = carStore(state => state.carNumber);
	const increaseNumber = carStore(state => state.increaseNumber);
	const reduceNumber = carStore(state => state.reduceNumber);
	const removeNumber = carStore(state => state.removeNumber);
	return (
		<div>
			<div>
				<h1>{bears} around here ...</h1>
				<button onClick={increasePopulation}>one up</button>
				<button onClick={removeAllBears}>clear</button>
			</div>
			<div>
				<h1>{carNumber} Car Number ...</h1>
				<button onClick={increaseNumber}>car up</button>
				<button onClick={reduceNumber}>car down</button>
				<button onClick={removeNumber}>clear</button>
			</div>
		</div>
	);
}
export default BearCounter
```

详细用法请阅读文档： https://github.com/pmndrs/zustand

