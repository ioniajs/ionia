import React, { useState, useRef } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { areaList, deleteArea, disabledArea, enableArea } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import { Button, Switch, InputNumber, Modal, message } from 'antd';
import { ActionType, ProColumns } from '@ant-design/pro-table';
import AreaModal from './Detail';

const areaRemove = async (ids: IdsDTO) => {
	const areaRemoves = await deleteArea(ids);
	if (areaRemoves.code !== 200) {
		message.error('删除失败');
	} else {
		message.success('删除成功');
	}
	return areaRemoves.code;
};

const handleStatus = async (id: string, status: number) => {
	if (status === 1) {
		const enableRes = await enableArea(id);
		return enableRes;
	} else {
		const disabledRes = await disabledArea(id);
		return disabledRes;
	}
};

export default () => {
	const columns: any = [
		{
			title: '区域名称',
			key: 'areaName',
			dataIndex: 'areaName',
			width: 540,
			render: (_: any, row: any) => {
				return <AreaModal row={row} />;
			},
		},
		{
			title: '编号',
			key: 'areaCode',
			dataIndex: 'areaCode',
			width: 232,
		},
		{
			title: '排序值',
			key: 'sortNum',
			dataIndex: 'sortNum',
			width: 425,
			render: (_: any, row: any) => <InputNumber />,
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 265,
			render: (_: any, row: any) => (
				<Switch
					checked={row.status === 1}
					checkedChildren='开启'
					unCheckedChildren='禁用'
					onChange={async (value: any) => {
						const success = await handleStatus(row.id, value ? 1 : 0);
						if (success.code === 200) {
							if (success.code === 200 && actionRef.current) {
								actionRef.current.reload();
							}
						}
					}}
				/>
			),
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 55,
			render: (_: any, row: any) => (
				<a
					onClick={() => {
						if (row) {
							Modal.confirm({
								title: '你确定删除选中区域吗?',
								content: '删除时会删除所有下级区域,删除后无法恢复，请谨慎操作',
								okText: '删除',
								cancelText: '取消',
								onOk: async () => {
									const success = await areaRemove({
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
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const actionRef = useRef<ActionType>();
	return (
		<BizPage>
			<BizTable
				rowKey='id'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<AreaModal />
						</div>
						<div className='io-space-item'>
							<Button
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.confirm({
										title: '你确定删除选中区域吗？',
										content:
											'删除时会删除所有下级区域，删除后无法恢复,请谨慎操作。',
										okText: '删除',
										cancelText: '取消',
										onOk: async () => {
											const ListSelRowKeys: any[] = selectedRowKeys.map(
												(s: any) => s
											);
											const listDelRes = await areaRemove({
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
				inputPlaceholderText={'请输入区域名称/编号'}
				columns={columns}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
				}}
				request={async (params: any) => {
					return areaList({}).then(data => ({
						data: data.data,
					}));
				}}
				pagination={false}
			/>
		</BizPage>
	);
};
