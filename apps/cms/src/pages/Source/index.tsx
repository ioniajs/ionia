import React, { useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Modal } from 'antd';
import Create from './Create';

export default () => {
	const columns: any = [
		{
			title: '内容类型名称',
			key: 'name',
			dataIndex: 'name',
			width: 520,
		},
		{
			title: '来源链接',
			key: 'url',
			dataIndex: 'url',
			width: 390,
		},
		{
			title: '默认来源',
			key: 'default',
			dataIndex: 'default',
			width: 270,
		},
		{
			title: '新窗口打开',
			key: 'open',
			dataIndex: 'open',
			width: 290,
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
								title: '你确定删除所选来源吗?',
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
		{ name: '假设名字很长很长', url: 'www.baidu.com', default: '是', open: '否' },
	];
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);

	return (
		<BizPage showActions={false}>
			<BizTable
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
				inputPlaceholderText={'请输入来源名称'}
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
