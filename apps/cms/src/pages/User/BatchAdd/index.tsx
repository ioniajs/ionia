import { BizPage, BizTable } from '@ionia/libs';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { UserSaveDTO } from '@ionia/libs/src/services';

import React from 'react';
import './index.less';

export default () => {
	const columns: ProColumns<UserSaveDTO>[] = [
		{
			title: '用户名',
			key: 'username',
			dataIndex: 'username',
			width: 164,
		},
		{
			title: '密码',
			key: 'cipher',
			dataIndex: 'cipher',
			width: 164,
		},
		{
			title: '确认密码',
			key: 'confirm',
			dataIndex: 'confirm',
			width: 164,
		},
		{
			title: '所属阵地',
			key: 'orgId',
			dataIndex: 'orgId',
			width: 164,
		},
		{
			title: '所属角色',
			key: 'roleIds',
			dataIndex: 'roleIds',
			width: 165,
		},
		{
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
			width: 163,
		},
		{
			title: '联系方式',
			key: 'telephone',
			dataIndex: 'telephone',
			width: 165,
		},
		{
			title: '电子邮箱',
			key: 'email',
			dataIndex: 'email',
			width: 224,
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 135,
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
		},
	];
	return (
		<BizPage showActions breadcrumbs={[{ name: '用户管理' }, { name: '批量新建' }]}>
			<BizTable columns={columns} />
		</BizPage>
	);
};
