import { BizPage, GobackButton, SaveButton, EditableTable } from '@ionia/libs';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { UserSaveDTO } from '@ionia/libs/src/services';
import { Button, Switch } from 'antd';
import shortid from 'shortid';
import React from 'react';
import './index.less';

export default () => {
	const columns: any = [
		{
			title: '用户名',
			key: 'username',
			dataIndex: 'username',
			width: 164,
			editable: true,
		},
		{
			title: '密码',
			key: 'cipher',
			dataIndex: 'cipher',
			width: 164,
			editable: true,
		},
		{
			title: '确认密码',
			key: 'confirm',
			dataIndex: 'confirm',
			width: 164,
			editable: true,
		},
		{
			title: '所属阵地',
			key: 'orgId',
			dataIndex: 'orgId',
			width: 164,
			editable: true,
		},
		{
			title: '所属角色',
			key: 'roleIds',
			dataIndex: 'roleIds',
			width: 165,
			editable: true,
		},
		{
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
			width: 163,
			editable: true,
		},
		{
			title: '联系方式',
			key: 'telephone',
			dataIndex: 'telephone',
			width: 165,
			editable: true,
		},
		{
			title: '电子邮箱',
			key: 'email',
			dataIndex: 'email',
			width: 205,
			editable: true,
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 135,
			render: (_: any, row: any) => (
				<Switch checkedChildren='开启' unCheckedChildren='禁用' />
			),
		},
	];
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '用户管理' }, { name: '批量新建' }]}
			renderActions={() => {
				return (
					<>
						<GobackButton />
						<SaveButton />
					</>
				);
			}}
		>
			<EditableTable
				style={{ marginTop: 24 }}
				operationRender={({ dataSource, setDataSource, changeData, deleteData }) => ({
					title: '操作',
					dataIndex: 'operation',
					render: (_: any, row: any, index: number) => (
						<a
							onClick={() => {
								setDataSource([...deleteData(dataSource, row.key)]);
							}}
						>
							删除
						</a>
					),
				})}
				footerRender={({ dataSource, setDataSource }) => (
					<Button
						type='dashed'
						onClick={() => {
							const key = shortid.generate();
							setDataSource([
								...dataSource,
								{
									key: shortid.generate(),
									username: '江西赵四',
									cipher: '123456',
									confirm: '123456',
									orgId: '0',
									roleIds: '0',
									realName: '江西吴彦祖',
									telephone: 18707062315,
									email: '2829656235@qq.com',
									status: 1,
								},
							]);
						}}
					>
						<i className='iconfont icon-plus1' style={{ fontSize: '16px' }} />
						添加
					</Button>
				)}
				onChange={() => {}}
				columns={columns}
			/>
		</BizPage>
	);
};
