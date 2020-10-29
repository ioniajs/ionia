import { Tree, Input } from 'antd';
import React from 'react';
import './index.less';

const { Search } = Input;

const treeData = [
	{
		title: 'parent 1',
		key: '0-0',
		children: [
			{
				title: 'parent 1-0',
				key: '0-0-0',
				disabled: true,
				children: [
					{
						title: 'leaf',
						key: '0-0-0-0',
						disableCheckbox: true,
					},
					{
						title: 'leaf',
						key: '0-0-0-1',
					},
				],
			},
			{
				title: 'parent 1-1',
				key: '0-0-1',
				children: [
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' },
				],
			},
		],
	},
];

export function BizTree() {
	const onSelect = (selectedKeys: any, info: any) => {
		console.log('selected', selectedKeys, info);
	};

	const onCheck = (checkedKeys: any, info: any) => {
		console.log('onCheck', checkedKeys, info);
	};
	return (
		<div>
			<Search style={{ marginBottom: 8 }} placeholder='Search' />
			<Tree
				defaultExpandedKeys={['0-0-0', '0-0-1']}
				defaultSelectedKeys={['0-0-0', '0-0-1']}
				defaultCheckedKeys={['0-0-0', '0-0-1']}
				onSelect={onSelect}
				onCheck={onCheck}
				treeData={treeData}
			/>
		</div>
	);
}
