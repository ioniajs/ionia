import { ProColumns, ActionType } from '@ant-design/pro-table';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Input, message, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import UserForm from '../User/Form';
import { positionList, deletePosition, PositionList, OrgVO } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/reuse.dto';
export interface TableListItem {
	key: number;
	name: string;
}

export default () => {
	const positionRemove = async (ids: IdsDTO) => {
		const removeRes = await deletePosition(ids);
		if (removeRes.code !== 200) {
			message.error('删除失败');
		} else {
			message.success('删除成功');
		}
		return removeRes.code;
	};
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const actionRef = useRef<ActionType>();
	const columns: ProColumns<OrgVO>[] = [
		{
			title: '阵地名称',
			key: 'name',
			dataIndex: 'name',
			width: 400,
		},
		{
			title: '阵地编号',
			key: 'code',
			dataIndex: 'code',
			width: 175,
		},
		{
			title: '阵地类型',
			key: 'type',
			dataIndex: 'type',
			width: 215,
		},
		{
			title: '地址',
			key: 'address',
			dataIndex: 'address',
			width: 350,
		},
		{
			title: '排序值',
			width: 100,
			render: (_, row) => <Input />,
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 50,
			render: (_, row) => (
				<a
					onClick={async () => {
						if (row) {
							Modal.confirm({
								title: '是否确定删除',
								okText: '确定',
								cancelText: '取消',
								onOk: async () => {
									const success = await positionRemove({
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
		<BizPage showActions={false}>
			<BizTable
				rowKey='id'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<UserForm />
						</div>
						<div className='io-space-item'>
							<Button type='default'>批量新建</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>批量删除</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'请输入阵地名称/编号'}
				columns={columns}
				request={async params => {
					return positionList({}).then(data => ({
						data: data.data,
					}));
				}}
				rowSelection={{
					selectedRowKeys,
					onChange: selectedRowKeys => {
						console.log(selectedRowKeys, 'ssss');
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
					checkStrictly: false,
				}}
				pagination={false}
			/>
		</BizPage>
	);
};
