---
title: 业务组件
group:
    title: 基础架构
order: 4
---

# 业务组件

## ProComponents 介绍

Ant Design 定义了基础的设计规范，对应也提供了大量的基础组件。但是对于大量的中后台类应用，我们希望提供更高程度的抽象，提供更上层的设计规范，并且对应提供相应的组件使得开发者可以快速搭建出高质量的页面。

在 ProComponents 中我们内置了一系列的设计规范，预设了常用的逻辑。在这个基础上我们同样提供了灵活性的支持，比如对于 ProTable 来说你也可以把它完全当做 antd 的 Table 来用，对于 ProForm 来说你也可以直接使用 antd 的基础组件或者你的自定义组件。我们希望通过 Pro 系列组件提供快速高效大家高质量中后台应用的能力，进一步扩展 Ant Design 的能力。

## ProComponents 安装

\$ npm i @ant-design/pro-table --save

目前 ProComponents 提供了如下组件可直接使用：

```js
@ant-design /pro-form
@ant-design/pro-layout
@ant-design/pro-table
@ant-design/pro-list
@ant-design/pro-descriptions
@ant-design/pro-card
@ant-design/pro-skeleton;
```

示例：

```jsx
import React from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
export default () => {
	return (
		<ProForm
			onFinish={async values => {
				console.log(values);
			}}
		>
			<ProFormText name='name' label='姓名' />
		</ProForm>
	);
};
```

```tsx
import React, { useState, useEffect } from 'react';
import ProLayout, { PageContainer, MenuDataItem } from '@ant-design/pro-layout';
import { Button } from 'antd';
import customMenuDate from './customMenu';

export default () => {
	const [menuData, setMenuData] = useState<MenuDataItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		setMenuData([]);
		setLoading(true);
		setTimeout(() => {
			setMenuData(customMenuDate);
			setLoading(false);
		}, 2000);
	}, [index]);
	return (
		<>
			<Button
				onClick={() => setIndex(index + 1)}
				style={{
					margin: 8,
				}}
			>
				重新加载
			</Button>
			<ProLayout
				style={{
					height: 400,
					border: '1px solid #ddd',
				}}
				menu={{
					loading,
				}}
				location={{
					pathname: '/welcome/welcome',
				}}
				menuDataRender={() => menuData}
			>
				<PageContainer content='欢迎使用'>Hello World</PageContainer>
			</ProLayout>
		</>
	);
};
```

## 相关文档

ProComponents 组件详细使用方法请查阅文档： https://procomponents.ant.design/components/form
