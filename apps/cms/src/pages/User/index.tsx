import { ProColumns } from '@ant-design/pro-table';
import { BizTable, BizTree, PageContainer } from '@ionia/libs';
import { Button } from 'antd';
import React from 'react';
import UserForm from './Form';

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
		title: '最后登录时间',
		key: 'lastlogintime',
		dataIndex: 'lastLoginTime',
	},
	{
		title: '最后登录IP',
		key: 'lastloginip',
		dataIndex: 'lastLoginIp',
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
							<Button type='default'>批量新建</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>批量删除</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>导入</Button>
						</div>
					</>
				)}
				renderSider={() => <BizTree />}
				columns={columns}
				request={params => {
					console.log(params);
					return new Promise(resolve => resolve());
				}}
			/>
		</PageContainer>
	);
};
