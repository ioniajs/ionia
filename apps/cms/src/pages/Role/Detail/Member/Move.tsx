import { logger } from '@ionia/libs';
import { Input, Modal, Table, Tag, Transfer, TreeSelect } from 'antd';
import difference from 'lodash/difference';
import React, { useState } from 'react';

export default (props: any) => {
	const { visible, setVisible } = props;
	const [originTargetKeys, setOriginTargetKeys] = useState<string[]>([]);
	const [value, setValue] = useState<string>();
	const { Search } = Input;
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
						size='small'
						onRow={({ key, disabled: itemDisabled }) => ({
							onClick: () => {
								onItemSelect(key ?? '', !listSelectedKeys.includes(key ?? ''));
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
		},
		{
			dataIndex: 'tag',
			title: 'Tag',
			render: (tag: any) => <Tag>{tag}</Tag>,
		},
		{
			dataIndex: 'description',
			title: 'Description',
		},
	];
	const rightTableColumns = [
		{
			dataIndex: 'title',
			title: '用户名',
		},
		{
			dataIndex: 'tag',
			title: 'Tag',
			render: (tag: any) => <Tag>{tag}</Tag>,
		},
		{
			dataIndex: 'description',
			title: 'Description',
		},
	];
	const mockTags = ['cat', 'dog', 'bird'];
	const mockData = [];
	for (let i = 0; i < 20; i++) {
		mockData.push({
			key: i.toString(),
			title: `content${i + 1}`,
			description: `description of content${i + 1}`,
			tag: mockTags[i % 3],
		});
	}
	return (
		<>
			<Modal
				title='移入用户'
				centered
				visible={visible}
				onOk={() => setVisible(false)}
				onCancel={() => {
					setVisible(false);
					setValue('');
				}}
				width={1088}
				className='io_cms_role_member-modal'
			>
				<div className='io_cms_role_member-modal_select'>
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
				/>
			</Modal>
		</>
	);
};
