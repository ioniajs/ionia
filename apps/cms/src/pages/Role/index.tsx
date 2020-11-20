import { ProColumns, ActionType } from '@ant-design/pro-table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { BizTable, BizTree, deleteUser } from '@ionia/libs';
import { Button, Modal, Switch } from 'antd';
import React, { useRef, useState } from 'react';
import UserForm from './compontent/Form';
import { RolePageVO, rolePaging, modUserStatus } from '@ionia/libs/src/services';
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
	const columns: ProColumns<RolePageVO>[] = [
		{
			title: '角色名称',
			key: 'name',
			dataIndex: 'name',
		},
		{
			title: '所属阵地',
			key: 'orgName',
			dataIndex: 'orgName',
		},
		{
			title: '最后更新人',
			key: 'updateUser',
			dataIndex: 'updateUser',
		},
		{
			title: '最后更新时间',
			key: 'updateTime',
			dataIndex: 'updateTime',
			sorter: true,
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
					return rolePaging({}).then(data => ({ data: data.data.content }));
				}}
			/>
		</div>
	);
};
