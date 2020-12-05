import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable, BizTree, deleteUser } from '@ionia/libs';
import { modUserStatus, UserPageVO, userPaging } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import { Button, Divider, message, Modal, Switch, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SetPassword from './SetPassword';
import UserForm from './Form';
import './index.less';
import { identity } from 'lodash';

const userRemove = async (ids: IdsDTO) => {
	const removeRes = await deleteUser(ids);
	if (removeRes.code !== 200) {
		message.error('删除失败');
	} else {
		message.success('删除成功');
	}
	return removeRes.code;
};

export default () => {
	const history = useHistory();
	const actionRef = useRef<ActionType>();
	const [modalVisble, setModalVisble] = useState<boolean>(false);
	const [userName, setUserName] = useState<string>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const columns: ProColumns<UserPageVO>[] = [
		{
			title: '用户名',
			key: 'username',
			dataIndex: 'username',
			width: 150,
			render: (_, row) => (
				<Tooltip title={`${row.username}`}>
					<a
						className='io-cms-user__biztable-username'
						onClick={() => history.push(`/user/detail/${row.id}`)}
					>
						{row.username}
					</a>
				</Tooltip>
			),
		},
		{
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
			width: 150,
			render: (_: any, row: any) => (
				<Tooltip title={`${row.realName}`}>
					<span className='io-cms-user__biztable-username'>{row.realName}</span>
				</Tooltip>
			),
		},
		{
			title: '所属阵地',
			key: 'org',
			dataIndex: 'org',
			width: 190,
			render: (_: any, row: any) => (
				<Tooltip title={`${row.org}`}>
					<span className='io-cms-user__biztable-username'>{row.org}</span>
				</Tooltip>
			),
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
			onFilter: (value, record) => record.roleNames.indexOf(value.toString()) === 0,
		},
		{
			title: '最后登录时间',
			key: 'lastLoginTime',
			dataIndex: 'lastLoginTime',
			width: 210,
			sorter: (a, b) => {
				let atime = new Date(a.lastLoginTime.replace(/-/g, '/')).getTime();
				let btime = new Date(b.lastLoginTime.replace(/-/g, '/')).getTime();
				return atime - btime;
			},
			sortDirections: ['descend', 'ascend'],
			defaultSortOrder: 'descend',
		},
		{
			title: '最后登录IP',
			key: 'lastLoginIp',
			dataIndex: 'lastLoginIp',
			width: 170,
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 135,
			render: (_, row) => (
				<Switch
					checked={row.status === 1}
					checkedChildren='开启'
					unCheckedChildren='禁用'
					onChange={async value => {
						const success = await modUserStatus({
							id: row.id.toString(),
							status: value ? 1 : 0,
						});
						if (success.code === 200 && actionRef.current) {
							actionRef.current.reload();
						}
					}}
				/>
			),
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
			// onFilter: (value, record) => record.status.toString().indexOf(value.toString()) === 0,
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 130,
			render: (_, row) => (
				<>
					<a
						onClick={() => {
							setModalVisble(true);
							setUserName(row.username);
						}}
					>
						修改密码
					</a>
					<Divider type='vertical' />
					<a
						onClick={async () => {
							if (row) {
								Modal.confirm({
									title: '你确定删除所选用户吗？',
									content: '删除后无法恢复，请谨慎操作。',
									okText: '删除',
									cancelText: '取消',
									onOk: async () => {
										const success = await userRemove({
											ids: [row.id],
										});
										if (success === 200) {
											if (success === 200 && actionRef.current) {
												actionRef.current.reload();
											}
										}
									},
								});
							}
						}}
					>
						删除
					</a>
				</>
			),
		},
	];
	return (
		<BizPage
			showActions={false}
			tips='操作说明的文字 ：设置系统所使用的验证码模板，提供邮件或短信两种方式'
		>
			<BizTable
				rowKey='id'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<UserForm user />
						</div>
						<div className='io-space-item'>
							<Button
								onClick={() => history.push('/user/batch-create')}
								type='default'
							>
								批量新建
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.confirm({
										title: '你确定删除所选用户吗？',
										content: '删除后无法恢复，请谨慎操作。',
										okText: '删除',
										cancelText: '取消',
										onOk: async () => {
											const ListSelRowKeys: any[] = selectedRowKeys.map(
												(s: any) => s
											);
											const listDelRes = await userRemove({
												ids: ListSelRowKeys,
											});
											if (listDelRes === 200) {
												if (listDelRes === 200 && actionRef.current) {
													actionRef.current.reload();
												}
											}
										},
									});
								}}
							>
								批量删除
							</Button>
						</div>
					</>
				)}
				renderSider={() => <BizTree />}
				columns={columns}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
				}}
				request={(params: any, sort: any, filter: any) => {
					return userPaging({}).then(data => ({ data: data.data.content }));
				}}
			/>
			<SetPassword
				modalVisble={modalVisble}
				setModalVisble={setModalVisble}
				userName={userName}
			/>
		</BizPage>
	);
};
