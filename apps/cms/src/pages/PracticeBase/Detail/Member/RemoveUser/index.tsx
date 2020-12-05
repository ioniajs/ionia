import { logger, positionalUserListPaging } from '@ionia/libs';
import { Input, Modal, Table, Tag, Transfer, TreeSelect } from 'antd';
import difference from 'lodash/difference';
import React, { useState } from 'react';
import './index.less';

export default (props: any) => {
	const { removeuser, setRemoveuser } = props;
	const [originTargetKeys, setOriginTargetKeys] = useState<string[]>([]);
	const [value, setValue] = useState<string>();
	const { Search } = Input;
	const handleOk = () => {
		setRemoveuser(false);
	};
	const treeData = [
		{
			title: 'Node1',
			value: '0-0',
			children: [
				{
					title: 'Child Node1',
					value: '0-0-1',
				},
				{
					title: 'Child Node2',
					value: '0-0-2',
				},
			],
		},
		{
			title: 'Node2',
			value: '0-1',
		},
	];
	const TableTransfer = ({ leftColumns, rightColumns, ...restProps }: any) => (
		<Transfer {...restProps} showSelectAll={false}>
			{({
				direction,
				filteredItems,
				onItemSelectAll,
				onItemSelect,
				selectedKeys: listSelectedKeys,
			}) => {
				const columns = direction === 'left' ? leftColumns : rightColumns;

				const rowSelection = {
					// getCheckboxProps: (item: any) => logger.debug(item),
					onSelectAll(selected: any, selectedRows: any) {
						const treeSelectedKeys = selectedRows.map(({ key }: any) => key);
						const diffKeys = selected
							? difference(treeSelectedKeys, listSelectedKeys)
							: difference(listSelectedKeys, treeSelectedKeys);
						onItemSelectAll(diffKeys, selected);
					},
					onSelect({ key }: any, selected: any) {
						onItemSelect(key, selected);
					},
					selectedRowKeys: listSelectedKeys,
				};

				return (
					<Table
						rowSelection={rowSelection}
						columns={columns}
						dataSource={filteredItems}
						// rowSelection={{}}
						size='small'
						// request={(params: any, sort: any, filter: any) => {
						// 	return positionalUserListPaging({}).then(data => ({
						// 		data: data.data.content,
						// 	}));
						// }}
						onRow={({ key, disabled: itemDisabled }) => ({
							onClick: () => {
								onItemSelect(key, !listSelectedKeys.includes(key));
							},
						})}
					/>
				);
			}}
		</Transfer>
	);

	const onChange = (nextTargetKeys: any) => {
		setOriginTargetKeys(nextTargetKeys);
		logger.debug(nextTargetKeys);
	};

	//下拉菜单选择
	const onSelect = (value: string) => {
		console.log(value);
		setValue(value);
	};

	//搜索框
	const onSearch = (value: string) => console.log(value);
	const leftTableColumns = [
		{
			dataIndex: 'title',
			title: '用户名',
			width: 130,
		},
		{
			dataIndex: 'tag',
			title: '真实姓名',
			width: 130,
			render: (tag: any) => <Tag>{tag}</Tag>,
		},
		{
			dataIndex: 'description',
			title: '所属阵地',
			width: 115,
		},
	];
	const rightTableColumns = [
		{
			dataIndex: 'title',
			title: '用户名',
			width: 130,
		},
		{
			dataIndex: 'tag',
			title: '真实姓名',
			width: 130,
			render: (tag: any) => <Tag>{tag}</Tag>,
		},
		{
			dataIndex: 'description',
			title: '所属阵地',
			width: 140,
		},
		{
			title: '操作',
			width: 50,
			render: (_: any, row: any) => <a>移除</a>,
		},
	];
	const mockTags = ['cat', 'dog', 'bird'];
	const mockData = [];
	for (let i = 0; i < 20; i++) {
		mockData.push({
			key: i.toString(),
			title: `content${i + 1}`,
			description: `content${i + 1}`,
			tag: mockTags[i % 3],
		});
	}
	return (
		<Modal
			visible={removeuser}
			title='移入用户'
			className='io-cms-practice-base-member-remove-user__modal'
			onOk={handleOk}
		>
			<div className='io-cms-practice-base-member-modal__select'>
				<TreeSelect
					style={{ width: '224px' }}
					dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
					treeData={treeData}
					placeholder='请选择所属阵地'
					treeDefaultExpandAll
					value={value}
					onChange={onSelect}
				/>
				<Search
					placeholder='请输入用户名/真实姓名'
					style={{ width: 220 }}
					onSearch={onSearch}
				/>
			</div>
			<TableTransfer
				dataSource={mockData}
				targetKeys={originTargetKeys}
				onChange={onChange}
				filterOption={(inputValue: any, item: any) =>
					item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
				}
				leftColumns={leftTableColumns}
				rightColumns={rightTableColumns}
				showSelectAll={false}
			/>
		</Modal>
	);
};
