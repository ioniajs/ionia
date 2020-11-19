import { ProColumns, ActionType } from '@ant-design/pro-table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { BizTable, BizTree, deleteUser } from '@ionia/libs';
import { Button, Modal, Switch } from 'antd';
import React, { useRef, useState } from 'react';
import UserForm from './Form';
import { BizPage } from '@ionia/libs';
import { UserPageVO, userPaging, modUserStatus } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/reuse.dto';
import { useHistory } from 'react-router-dom';
import './index.less';
export interface TableListItem {
	key: number;
	name: string;
}

/**
 *
 * @param id 修改用户状态
 */
const userUpdate = async (id: string, status: number) => {};

/**
 *  删除用户
 */
const userRemove = async (ids: IdsDTO) => {
	const removeRes = await deleteUser(ids);
	return removeRes.code;
};

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
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const columns: ProColumns<UserPageVO>[] = [
		{
			title: '用户名',
			key: 'username',
			dataIndex: 'username',
		},
		{
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
		},
		{
			title: '所属阵地',
			key: 'org',
			dataIndex: 'org',
		},
		{
			title: '所属角色',
			key: 'roleNames',
			dataIndex: 'roleNames',
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
		},
		{
			title: '最后登录IP',
			key: 'lastLoginIp',
			dataIndex: 'lastLoginIp',
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
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
			render: (_, row) => (
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
			),
		},
	];
	return (
		<div className='io-cms-user'>
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
					rowSelection={{
						selectedRowKeys,
						onChange: selectedRowKeys => {
							setSelectedRowKeys(selectedRowKeys as number[]);
						},
					}}
					// pagination
					request={(params, sort, filter) => {
						return userPaging({}).then(data => ({ data: data.data.content }));
					}}
				/>
			</BizPage>
		</div>
	);
};
