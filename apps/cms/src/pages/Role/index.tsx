import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable, BizTree, deleteUser } from '@ionia/libs';
import { RolePageVO, rolePaging } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import { Button, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserForm from './Add';
import './index.less';
export interface TableListItem {
	key: number;
	name: string;
}

/**
 *  删除角色
 */
const userRemove = async (ids: IdsDTO) => {
	const removeRes = await deleteUser(ids);
	return removeRes.code;
};

const { confirm } = Modal;

function showConfirm() {
	confirm({
		title: '你确定删除所选角色吗?',
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
	const params = {
		pageSize: 10,
		current: 1,
		keyWord: '',
	};
	const history = useHistory();
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
	const columns: ProColumns<RolePageVO>[] = [
		{
			title: '角色名称',
			key: 'name',
			dataIndex: 'name',
			render: (_, row) => (
				<a
					onClick={e => {
						e.stopPropagation();
						history.push(`/system-management/role/detail/${row.id}`);
					}}
				>
					{row.name}
				</a>
			),
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
		<BizPage>
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
									onClick={() =>
										history.push('/system-management/role/batch-add')
									}
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
					pagination={{
						current: params.current,
						pageSize: params.pageSize,
					}}
					rowSelection={{
						selectedRowKeys,
						onChange: (selectedRowKeys: any) => {
							setSelectedRowKeys(selectedRowKeys);
						},
					}}
					onRow={record => {
						return {
							onClick: () => {
								const RowKeys = [...selectedRowKeys];
								if (RowKeys.indexOf(record.id) >= 0) {
									RowKeys.splice(selectedRowKeys.indexOf(record.id), 1);
								} else {
									RowKeys.push(record.id);
								}
								setSelectedRowKeys(RowKeys);
							},
						};
					}}
					// pagination
					request={(params: any, sort: any, filter: any) => {
						return rolePaging({
							pageNo: params.current,
							pageSize: params.pageSize,
						}).then(data => ({
							data: data.data.content,
							total: data.data.total,
						}));
					}}
				/>
			</div>
		</BizPage>
	);
};
