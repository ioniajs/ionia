import { ProColumns, ActionType } from '@ant-design/pro-table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { BizTable, apiDelete, BizPage, ApiIdsDTO } from '@ionia/libs';
import { Button, Modal, message } from 'antd';
import React, { useRef, useState } from 'react';
import InterfaceForm from './InterfaceForm';
import { ApiItemVO, apiPage } from '@ionia/libs/src/services';
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
const userRemove = async (ids: ApiIdsDTO) => {
	const removeRes = await apiDelete(ids);
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

const InterfaceIndex = () => {
	const params = {
		pageSize: 10,
		current: 1,
		keyWord: '',
	};
	const history = useHistory();
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

	const columns: ProColumns<ApiItemVO>[] = [
		{
			title: '接口名称',
			key: 'apiName',
			dataIndex: 'apiName',
			render: (_, row) => (
				<a
					onClick={() => {
						history.push(`/system-management/role/detail/${row.id}`);
					}}
				>
					{row.apiName}
				</a>
			),
		},
		{
			title: '接口地址',
			key: 'apiUrl',
			dataIndex: 'apiUrl',
		},
		{
			title: '请求方式',
			key: 'requestMethod',
			dataIndex: 'requestMethod',
			render: text => (text == 1 ? 'GET' : 'POST'),
		},
		{
			title: '使用场景',
			key: 'useScene',
			dataIndex: 'useScene',
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
										message.success('删除成功');
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
								<InterfaceForm />
							</div>
							<div className='io-space-item'>
								<Button onClick={showConfirm} type='default'>
									删除
								</Button>
							</div>
						</>
					)}
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
						console.log('params', params);
						return apiPage({
							apiName: '',
							apiUrl: '',
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

export default InterfaceIndex;
