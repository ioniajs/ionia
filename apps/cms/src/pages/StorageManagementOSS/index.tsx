import React, { useState, useRef } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Modal } from 'antd';
import Create from './Create';
import { ActionType, ProColumns } from '@ant-design/pro-table';

export default () => {
	const columns: any = [
		{
			title: 'OSS名称',
			key: 'name',
			dataIndex: 'name',
			width: 920,
		},
		{
			title: '储存类型',
			key: 'type',
			dataIndex: 'type',
			width: 545,
			filters: [
				{
					value: '阿里云',
					text: '阿里云',
				},
				{
					text: '七牛云',
					value: '七牛云',
				},
				{
					text: '腾讯云',
					value: '腾讯云',
				},
			],
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
								title: '你确定删除选中OSS吗?',
								content: '删除后无法恢复，请谨慎操作',
								okText: '删除',
								cancelText: '取消',
							});
						}
					}}
				>
					删除
				</a>
			),
		},
	];
	const dataSource: any = [
		{ name: '假设名字很长很长', type: '腾讯储存' },
		{ name: '假设名字很长很长', type: '阿里储存' },
		{ name: '假设名字很长很长', type: '七牛储存' },
	];
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	return (
		<BizPage showActions={false}>
			<BizTable
				rowKey='id'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Create />
						</div>
						<div className='io-space-item'>
							<Button disabled={selectedRowKeys.length === 0}>批量删除</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'请输入OSS名称'}
				columns={columns}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
				}}
				dataSource={dataSource}
			/>
		</BizPage>
	);
};
