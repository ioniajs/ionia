import { ProColumns } from '@ant-design/pro-table';
import { BizTable, BizTree, PageContainer } from '@ionia/libs';
import { Button } from 'antd';
import React from 'react';
import UserForm from '../User/Form';

export interface TableListItem {
	key: number;
	name: string;
}

const columns: ProColumns<TableListItem>[] = [
	{
		title: '用户名',
		key: 'username',
		dataIndex: 'username',
	},
	{
		title: '姓名',
		key: 'name',
		dataIndex: 'name',
	},
	{
		title: '所属阵地',
		key: 'belongposition',
		dataIndex: 'belongPosition',
	},
	{
		title: '所属角色',
		key: 'belonguser',
		dataIndex: 'belongUser',
	},
	{
		title: '联系方式',
		key: 'contactway',
		dataIndex: 'contactWay',
	},
	{
		title: '电子邮箱',
		key: 'email',
		dataIndex: 'email',
	},
	{
		title: '状态',
		key: 'status',
		dataIndex: 'status',
	},
	{
		title: '操作',
		key: 'operation',
		dataIndex: 'operation',
	},
	// {
	// 	title: '修改时间',
	// 	key: 'since',
	// 	dataIndex: 'updatedAt',
	// 	valueType: 'dateTime',
	// },
	// {
	// 	title: '创建时间',
	// 	key: 'since',
	// 	dataIndex: 'createdAt',
	// 	valueType: 'dateTime',
	// },
	// {
	// 	title: '搜索',
	// 	dataIndex: 'keyword',
	// 	key: 'keyword',
	// },
];

export default () => {
	return (
		<PageContainer>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<UserForm />
						</div>
						<div className='io-space-item'>
							<Button type='default'>启用</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>禁用</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>删除</Button>
						</div>
					</>
				)}
				columns={columns}
				request={params => {
					console.log(params);
					return new Promise(resolve => resolve());
				}}
			/>
		</PageContainer>
	);
};
