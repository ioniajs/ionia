import React from 'react';
import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable, UserPageVO } from '@ionia/libs';
import { Button } from 'antd';

interface BaseMemberPorps {
	id: string;
}

export const BaseMember = ({ id }: BaseMemberPorps) => {
	const columns: ProColumns<UserPageVO>[] = [
		{
			title: '用户名',
			key: 'username',
			dataIndex: 'username',
			width: 150,
		},
		{
			title: '真实姓名',
			key: 'realName',
			dataIndex: 'realName',
			width: 150,
		},
		{
			title: '所属阵地',
			key: 'org',
			dataIndex: 'org',
			width: 190,
		},
		{
			title: '所属角色',
			key: 'roleNames',
			dataIndex: 'roleNames',
			width: 150,
			filters: [
				{
					text: '系统管理员',
					value: '系统管理员',
				},
				{
					text: '信息录入员',
					value: '信息录入员',
				},
			],
		},
		{
			title: '联系方式',
			key: 'telephone',
			dataIndex: 'telephone',
			sorter: true,
			width: 210,
			// render: lastLoginTime => `${lastLoginTime.first} ${lastLoginTime.last}`,
		},
		{
			title: '电子邮箱',
			key: 'email',
			dataIndex: 'email',
			width: 170,
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 135,
			filters: [
				{
					value: '1',
					text: '启用',
				},
				{
					text: '禁用',
					value: '0',
				},
			],
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 130,
			render: (_, row) => (
				<>
					<a>删除</a>
				</>
			),
		},
	];
	return (
		<div>
			<BizPage>
				<BizTable
					renderActions={() => (
						<>
							<Button type='primary'>
								<i className='iconfont icon-plus1' style={{ fontSize: '16px' }} />
								新建用户
							</Button>
							<Button style={{ marginLeft: 8 }}>移入用户</Button>
							<Button style={{ marginLeft: 8 }}>批量删除</Button>
						</>
					)}
					rowSelection={{}}
					columns={columns}
				></BizTable>
			</BizPage>
		</div>
	);
};
