import { Tree, Input } from 'antd';
import React from 'react';
import './index.less';

interface TreeProps {
	treeData?: any;
	onTreeSearch?: (value: any) => void;
	searchPlaceHolder?: string;
	onSelectTree?: (value: any) => void;
}

const { Search } = Input;

const treeDatas = [
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

export function BizTree({
	treeData = treeDatas,
	onTreeSearch,
	searchPlaceHolder = 'Search',
	onSelectTree,
}: TreeProps) {
	const onSelect = (selectedKeys: any, info: any) => {
		onSelectTree && onSelectTree(selectedKeys);
		console.log('selected', selectedKeys, info);
	};

	const onCheck = (checkedKeys: any, info: any) => {
		console.log('onCheck', checkedKeys, info);
	};
	return (
		<div>
			<Search
				style={{ marginBottom: 8 }}
				placeholder={searchPlaceHolder}
				onSearch={value => onTreeSearch && onTreeSearch(value)}
			/>
			<Tree
				defaultExpandedKeys={['1']}
				// defaultSelectedKeys={['0-0-0', '0-0-1']}
				// defaultCheckedKeys={['0-0-0', '0-0-1']}
				onSelect={onSelect}
				onCheck={onCheck}
				treeData={treeData}
			/>
		</div>
	);
}
