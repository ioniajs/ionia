import React, { useRef, useState } from 'react';
import { BizTable, positionalListPaging, deletePositionResource } from '@ionia/libs';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import { Button, Modal, message } from 'antd';
import { ActionType } from '@ant-design/pro-table';
import './index.less';
import CreateForm from './Create';

interface BaseResourceProps {
	id: string;
}

const ResourceRemove = async (ids: IdsDTO) => {
	const ResourceRes = await deletePositionResource(ids);
	if (ResourceRes.code == 200) {
		message.success('删除成功');
	} else {
		message.error('删除失败');
	}
	return ResourceRes.code;
};

export const BaseResource = ({ id }: BaseResourceProps) => {
	const columns = [
		{
			title: '标题',
			key: 'title',
			dataIndex: 'title',
			width: 800,
		},
		{
			title: '图片',
			key: 'url',
			dataIndex: 'url',
			width: 660,
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 50,
			render: (_: any, row: any) => (
				<a
					onClick={async () => {
						if (row) {
							Modal.confirm({
								title: '你确定删除所选阵地资源吗？',
								content: '删除后无法恢复，请谨慎操作.',
								okText: '确定',
								cancelText: '取消',
								onOk: async () => {
									const success = await deletePositionResource({
										ids: [row.id],
									});
									if (success.code === 200) {
										if (success.code === 200 && actionRef.current) {
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
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	return (
		<div className='io-cms-practice-base-resource__div'>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<CreateForm />
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.confirm({
										title: '你确定删除所阵地资源吗？',
										content: '删除后无法恢复，请谨慎操作.',
										okText: '确定',
										cancelText: '取消',
										onOk: async () => {
											const ListSelRowKeys: any[] = selectedRowKeys.map(
												(s: any) => s
											);
											const listDelRes = await ResourceRemove({
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
								删除
							</Button>
						</div>
					</>
				)}
				rowKey='id'
				actionRef={actionRef}
				inputPlaceholderText={'请输入标题'}
				columns={columns}
				rowSelection={{
					selectedRowKeys,
					onChange: selectedRowKeys => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
					checkStrictly: false,
				}}
				request={async params => {
					return positionalListPaging({}).then(data => ({ data: data.data.content }));
				}}
			></BizTable>
		</div>
	);
};
