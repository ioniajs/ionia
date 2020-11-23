import React, { useState } from 'react';
import { Modal, Transfer, Table, Tag } from 'antd';
import difference from 'lodash/difference';
import { logger } from '@ionia/libs';

export default (props: any) => {
	const { visible, setVisible } = props;
	const [originTargetKeys, setOriginTargetKeys] = useState<string[]>([]);
	const TableTransfer = ({ leftColumns, rightColumns, ...restProps }: any) => (
		<Transfer {...restProps} showSelectAll={false}>
			{({
				direction,
				filteredItems,
				onItemSelectAll,
				onItemSelect,
				selectedKeys: listSelectedKeys,
				disabled: listDisabled,
			}) => {
				const columns = direction === 'left' ? leftColumns : rightColumns;

				const rowSelection = {
					getCheckboxProps: (item: any) => ({ disabled: listDisabled || item.disabled }),
					onSelectAll(selected: any, selectedRows: any) {
						const treeSelectedKeys = selectedRows
							.filter((item: any) => !item.disabled)
							.map(({ key }: any) => key);
						const diffKeys = selected
							? difference(treeSelectedKeys, listSelectedKeys)
							: difference(listSelectedKeys, treeSelectedKeys);
						onItemSelectAll(diffKeys, selected);
					},
					onSelect({ key }, selected) {
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
						style={{ pointerEvents: listDisabled ? 'none' : null }}
						onRow={({ key, disabled: itemDisabled }) => ({
							onClick: () => {
								if (itemDisabled || listDisabled) return;
								onItemSelect(key, !listSelectedKeys.includes(key));
							},
						})}
					/>
				);
			}}
		</Transfer>
	);

	const onChange = (nextTargetKeys: any) => {
		logger.debug(nextTargetKeys);
		// this.setState({ targetKeys: nextTargetKeys });
	};

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
				onCancel={() => setVisible(false)}
				width={1088}
			>
				<TableTransfer
					dataSource={mockData}
					targetKeys={originTargetKeys}
					showSearch
					onChange={onChange}
					filterOption={(inputValue, item) =>
						item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
					}
					leftColumns={leftTableColumns}
					rightColumns={rightTableColumns}
				/>
			</Modal>
		</>
	);
};
