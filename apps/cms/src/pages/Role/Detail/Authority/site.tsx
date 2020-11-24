import React, { useState } from 'react';
import { Button, Tree } from 'antd';
import { DownCircleOutlined, DownOutlined } from '@ant-design/icons';
import { divide } from 'lodash';
const treeData = [
	{
		title: 'parent 1',
		key: '0-0',
		children: [
			{
				title: 'parent 1-0',
				key: '0-0-0',
				children: [
					{
						title: 'leaf',
						key: '0-0-0-0',
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
export default () => {
	const onSelect = (selectedKeys: any, info: any) => {
		console.log('selected', selectedKeys, info);
	};

	const onCheck = (checkedKeys: any, info: any) => {
		console.log('onCheck', checkedKeys, info);
	};
	return (
		<div>
			<Button type='primary'>保存</Button>
			<Tree
				checkable
				defaultExpandedKeys={['0-0-0', '0-0-1']}
				defaultSelectedKeys={['0-0-0', '0-0-1']}
				defaultCheckedKeys={['0-0-0', '0-0-1']}
				onSelect={onSelect}
				onCheck={onCheck}
				treeData={treeData}
				switcherIcon={<DownOutlined />}
				showIcon
				checkStrictly
				selectable={false}
				blockNode
				titleRender={nodeData => {
					if (nodeData.children) {
						return (
							<div onClick={e => e.stopPropagation()}>
								<i
									className='iconfont icon-check-circle-fill'
									onClick={() => alert('我是图标')}
								></i>{' '}
								<span onClick={() => alert('我是文字')}>{nodeData.title}</span>
							</div>
						);
					} else {
						return <div>{nodeData.title}</div>;
					}
				}}
			/>
		</div>
	);
};
