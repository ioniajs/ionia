import React, { useState } from 'react';
import ProTable, { ProColumns, ColumnsState } from '@ant-design/pro-table';
import { Button, Input } from 'antd';

const valueEnum = {
	0: 'close',
	1: 'running',
};

export interface TableListItem {
	key: number;
	name: string;
	username: string;
	orgName: string;
	roleName: string;
}
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 100; i += 1) {
	tableListDataSource.push({
		key: i,
		username: `TradeCode ${i}`,
		name: `TradeCode ${i}`,
		orgName: `TradeCode ${i}`,
		roleName: valueEnum[Math.floor(Math.random() * 10) % 2],
	});
}

const columns: ProColumns<TableListItem>[] = [
	{
		title: '用户名',
		dataIndex: 'username',
		key: 'username',
	},
	{
		title: '姓名',
		dataIndex: 'name',
	},
	{
		title: '所属阵地',
		key: 'orgName',
		dataIndex: 'orgName',
	},
	{
		title: '所属角色',
		key: 'roleName',
		dataIndex: 'roleName',
		initialValue: 'all',
		filters: true,
		valueType: 'select',
		valueEnum: {
			close: {
				text: '系统管理员',
			},
			running: {
				text: '信息录入员',
			},
		},
	},
];

export default () => {
	const [columnsStateMap, setColumnsStateMap] = useState<{
		[key: string]: ColumnsState;
	}>({
		name: {
			show: false,
		},
	});
	const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
	return (
		<ProTable<TableListItem, { keyWord?: string }>
			columns={columns}
			request={params =>
				Promise.resolve({
					data: tableListDataSource.filter(item => {
						if (!params?.keyWord) {
							return true;
						}
						if (item.name.includes(params?.keyWord)) {
							return true;
						}
						return false;
					}),
					success: true,
				})
			}
			rowKey='key'
			columnsStateMap={columnsStateMap}
			onColumnsStateChange={map => setColumnsStateMap(map)}
			search={false}
			rowSelection={{
				selectedRowKeys,
				onChange(selectedRowKeys) {
					console.log(selectedRowKeys);
					setSelectedRowKeys(selectedRowKeys);
				},
			}}
			toolbar={{
				search: (
					<div className='io-biz-table__action-container'>
						<Button type='primary'>保存</Button>
					</div>
				),
				actions: [
					<Input
						key='search'
						style={{ width: 208 }}
						allowClear
						placeholder='请输入用户名/姓名'
						onChange={e => {
							// setSearchStr(e.target.value);
						}}
					/>,
					<Button key='search-button' type='primary' onClick={() => {}}>
						查询
					</Button>,
					<Button key='reset-button' type='default'>
						重置
					</Button>,
				],
				settings: [],
			}}
		/>
	);
};
