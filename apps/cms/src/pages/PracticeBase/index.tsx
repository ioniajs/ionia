import { ProColumns, ActionType } from '@ant-design/pro-table';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Input, message, Modal, TreeSelect } from 'antd';
import React, { useRef, useState } from 'react';
import { positionList, deletePosition, OrgVO } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import { useHistory } from 'react-router-dom';

export interface TableListItem {
	key: number;
	name: string;
}

const BaseRemove = async (ids: IdsDTO) => {
	const BaseRes = await deletePosition(ids);
	if (BaseRes.code == 200) {
		message.success('删除成功');
	} else {
		message.error('删除失败');
	}
	return BaseRes.code;
};

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
	const history = useHistory();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const actionRef = useRef<ActionType>();
	const columns: ProColumns<OrgVO>[] = [
		{
			title: '阵地名称',
			key: 'name',
			dataIndex: 'name',
			width: 400,
			render: (_, row) => {
				return (
					<a onClick={() => history.push(`/practice-base/detail/${row.id}`)}>
						{row.name}
					</a>
				);
			},
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
								title: '你确定删除所选中的阵地吗？',
								content:
									'删除阵地同时删除其下级阵地以及阵地内的角色、用户,删除后无法恢复，请谨慎操作.',
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
							<Button
								type='primary'
								onClick={() => history.push('/practice-base/create')}
							>
								<i className='iconfont icon-plus1' style={{ fontSize: '16px' }} />
								新建
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								onClick={() => history.push('/practice-base/batch-create')}
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
										title: '你确定删除所选中的阵地吗？',
										content:
											'删除阵地同时删除其下级阵地以及阵地内的角色、用户,删除后无法恢复，请谨慎操作.',
										okText: '确定',
										cancelText: '取消',
										onOk: async () => {
											const ListSelRowKeys: any[] = selectedRowKeys.map(
												(s: any) => s
											);
											const listDelRes = await BaseRemove({
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
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
					checkStrictly: false,
				}}
				pagination={false}
			/>
		</BizPage>
	);
};
