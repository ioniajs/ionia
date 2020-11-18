import { ProColumns } from '@ant-design/pro-table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { BizTable, BizTree } from '@ionia/libs';
import { Button, Pagination, Modal } from 'antd';
import React, { useState } from 'react';
import UserForm from './Form';
import { BizPage } from '@ionia/libs';
import { UserPageVO } from '@ionia/libs';
import { useHistory } from 'react-router-dom';
import './index.less';
export interface TableListItem {
	key: number;
	name: string;
}

const columns: ProColumns<UserPageVO>[] = [
	{
		title: '用户名',
		key: 'username',
		dataIndex: 'username',
	},
	{
		title: '姓名',
		key: 'realname',
		dataIndex: 'realName',
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
		filters: [
			{
				value: '启用',
				text: '启用',
			},
			{
				text: '禁用',
				value: '禁用',
			},
		],
	},
	{
		title: '操作',
		key: 'operation',
		// dataIndex: 'operation',
	},
];

const { confirm } = Modal;

function showConfirm() {
	confirm({
		title: '你确定删除所选用户吗?',
		icon: <ExclamationCircleOutlined />,
		content: '删除后无法恢复，请谨慎操作',
		okText: '确定',
		cancelText: '取消',
		onOk() {
			console.log('OK');
		},
		onCancel() {
			console.log('Cancel');
		},
	});
}

export default () => {
	const history = useHistory();
	return (
		<div className='io-cms-user'>
			<BizPage
				showActions={false}
				tips='操作说明的文字 ：设置系统所使用的验证码模板，提供邮件或短信两种方式'
			>
				<BizTable
					renderActions={() => (
						<>
							<div className='io-space-item'>
								<UserForm />
							</div>
							<div className='io-space-item'>
								<Button
									onClick={() => history.push('/user/userbatchadd')}
									type='default'
								>
									批量新建
								</Button>
							</div>
							<div className='io-space-item'>
								<Button onClick={showConfirm} type='default'>
									批量删除
								</Button>
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
			</BizPage>
		</div>
	);
};
