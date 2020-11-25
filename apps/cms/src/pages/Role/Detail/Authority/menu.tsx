import React from 'react';
import { Tree } from 'antd';

const treeData = [
	{
		title: 'parent 1',
		key: '1',
		parentId: null,
		children: [
			{
				title: 'parent 1-0',
				key: '11',
				disabled: true,
				parentId: '1',
				children: [
					{
						title: 'leaf',
						key: '111',
						disableCheckbox: true,
						parentId: '11',
					},
					{
						title: 'leaf',
						key: '112',
						parentId: '11',
					},
				],
			},
			{
				title: 'parent 1-0',
				key: '12',
				parentId: '1',
				children: [
					{
						title: 'leaf',
						key: '121',
						parentId: '12',
						children: [
							{
								title: 'leaf',
								key: '1211',
								disableCheckbox: true,
								parentId: '121',
							},
							{
								title: 'leaf',
								key: '1212',
								parentId: '121',
							},
						],
					},
					{
						title: 'leaf',
						key: '122',
						parentId: '12',
					},
				],
			},
			{
				title: 'parent 1-1',
				key: '13',
				parentId: '1',
				children: [
					{
						title: <span style={{ color: '#1890ff' }}>sss</span>,
						key: '131',
						parentId: '13',
					},
				],
			},
		],
	},
];
export default () => {
	const onSelect = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info);
	};

	const onCheck = (checkedKeys, info) => {
		console.log('onCheck', checkedKeys, info);
	};

	return (
		<Tree
			checkable
			onSelect={onSelect}
			onCheck={onCheck}
			treeData={treeData}
			autoExpandParent
			titleRender={(nodeData: any) => {
				if (nodeData.parentId != null) {
					return <div> {nodeData.title}</div>;
				} else {
					return <div> {nodeData.title}</div>;
				}
			}}
		/>
	);
};
