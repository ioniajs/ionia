import { ProColumns } from '@ant-design/pro-table';
import { BizTable, PageContainer } from '@ionia/libs';
import React from 'react';

export interface TableListItem {
	key: number;
	name: string;
}
const columns: ProColumns<TableListItem>[] = [
	{
		title: '修改时间',
		key: 'since',
		dataIndex: 'updatedAt',
		valueType: 'dateTime',
	},
	{
		title: '创建时间',
		key: 'since',
		dataIndex: 'createdAt',
		valueType: 'dateTime',
	},
	{
		title: '搜索',
		dataIndex: 'keyword',
		key: 'keyword',
	},
];

export default () => {
	return (
		<PageContainer>
			<BizTable
				columns={columns}
				request={(params, sort, filter) => {
					console.log(params);
					return new Promise(resolve => resolve());
				}}
			/>
		</PageContainer>
	);
};
