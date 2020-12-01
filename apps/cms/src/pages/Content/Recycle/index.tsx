import React, { useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Button } from 'antd';

export const Recycle = () => {
	const columns = [
		{
			title: '标题',
			key: 'title',
			dataIndex: 'title',
		},
		{
			title: '内容类型',
			key: 'contentType',
			dataIndex: 'contentType',
		},
		{
			title: '删除人',
			key: 'deleteName',
			dataIndex: 'deleteName',
		},
		{
			title: '删除前状态',
			key: 'deletePreStatus',
			dataIndex: 'deletePreStatus',
		},
		{
			title: '删除时间',
			key: 'deleteTime',
			dataIndex: 'deleteTime',
		},
	];
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	return (
		<div>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Button type='primary'>删除内容</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>还原内容</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>删除栏目</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>还原栏目</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>清空回收站</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'搜索内容标题'}
				columns={columns}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
					checkStrictly: false,
				}}
			/>
		</div>
	);
};
