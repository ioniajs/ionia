import { ProColumns, ActionType } from '@ant-design/pro-table';
import { BizTable, deleteUser, logger, roleDetail } from '@ionia/libs';
import { Button, Modal, Switch, message, Divider } from 'antd';
import React, { useRef, useState } from 'react';
import { UserPageVO, userPaging, modUserStatus } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/reuse.dto';
import { useHistory } from 'react-router-dom';
import './index.less';
import Form from './Form';
import { useRequest } from 'ahooks';
import Move from './Move';

export interface TableListItem {
	key: number;
	name: string;
}

const userRemove = async (ids: IdsDTO) => {
	const removeRes = await deleteUser(ids);
	if (removeRes.code !== 200) {
		message.error('删除失败');
	} else {
		message.success('删除成功');
	}
	return removeRes.code;
};
export default ({ id }: any) => {
	const roleId = id;
	const { data } = useRequest(() => roleDetail(roleId));
	logger.debug(data);
	const orgId = data?.data.orgId;
	// const roleId = data?.data.id;
	const history = useHistory();
	const [visible, setVisible] = useState<boolean>(false);
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
			render: username => <a onClick={() => history.push('/user/detail')}>{username}</a>,
		},
		{
			title: '姓名',
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
			title: '最后登录时间',
			key: 'lastLoginTime',
			dataIndex: 'lastLoginTime',
			sorter: true,
			width: 210,
			// render: lastLoginTime => `${lastLoginTime.first} ${lastLoginTime.last}`,
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
									title: '是否确定删除',
									okText: '确定',
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
		<div className='io-cms-user'>
			<BizTable
				rowKey='id'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<Move visible={visible} setVisible={setVisible} />
						<div className='io-space-item'>
							<Form roleId={roleId} orgId={orgId} />
						</div>
						<div className='io-space-item'>
							<Button onClick={() => setVisible(true)} type='default'>
								移入用户
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.info({
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
				columns={columns}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
				}}
				// pagination
				request={(params: any, sort: any, filter: any) => {
					return userPaging({
						roleId,
					}).then(data => ({ data: data.data.content }));
				}}
			/>
		</div>
	);
};
