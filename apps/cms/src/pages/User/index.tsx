import { ProColumns } from '@ant-design/pro-table';
import { BizTable, PageContainer, BizTree } from '@ionia/libs';
import { Button, Switch } from 'antd';
import React, { useState } from 'react';
import { BizForm } from './components/Form';
export interface TableListItem {
	username: string;
	realName?: string;
	roleNames?: string;
	org: string;
	lastLoginTime: any;
	status: number;
}

export interface TableListParams {
	pageNo: number;
	pageSize: number;
}

const columns: ProColumns<TableListItem>[] = [
	{
		title: '用户名',
		key: 'since',
		dataIndex: 'username',
	},
	{
		title: '姓名',
		key: 'since',
		dataIndex: 'realName',
	},
	{
		title: '所属阵地',
		dataIndex: 'org',
		key: 'keyword',
	},
	{
		title: '所属角色',
		dataIndex: 'roleNames',
		key: 'keyword',
		filters: true,
		valueEnum: {
			all: { text: '全部', status: 'Default' },
			open: {
				text: '系统管理员',
				status: 'Error',
			},
			closed: {
				text: '信息录入员',
				status: 'Success',
			},
		},
	},
	{
		title: '最后登录时间',
		dataIndex: 'lastLoginTime',
		key: 'keyword',
		valueType: 'date',
		sorter: (a, b) => Number(new Date(a.lastLoginTime)) - Number(new Date(b.lastLoginTime)),
	},
	{
		title: '最后登录IP',
		dataIndex: 'lastLoginIp',
		key: 'keyword',
	},
	{
		title: '状态',
		dataIndex: 'status',
		key: 'status',
	},
];

const data: TableListItem[] = [
	{
		username: 'test1',
		realName: '111',
		lastLoginTime: '2020-01-01',
		status: 1,
		roleNames: '系统管理员',
		org: 'test',
	},
	{
		username: 'test1',
		realName: '111',
		lastLoginTime: '2020-01-01',
		status: 1,
		roleNames: '系统管理员',
		org: 'test',
	},
	{
		username: 'test1',
		realName: '111',
		lastLoginTime: '2020-01-01',
		status: 1,
		org: 'test',
	},
];

export default () => {
	const [title] = useState('新建用户');
	return (
		<PageContainer>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<BizForm title={title} />
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
				renderSider={() => <BizTree></BizTree>}
				columns={columns}
				defaultData={data}
				request={(params: any, sort, filter) => {
					console.log(params);
					return new Promise(resolve => resolve());
				}}
			/>
		</PageContainer>
	);
};
