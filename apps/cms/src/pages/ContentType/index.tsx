import React from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Modal } from 'antd';
import Create from './Create';

export default () => {
	const columns: any = [
		{
			title: '内容类型名称',
			key: 'name',
			dataIndex: 'name',
			width: 590,
		},
		{
			title: '编号',
			key: 'number',
			dataIndex: 'number',
			width: 350,
		},
		{
			title: '图标',
			key: 'icon',
			dataIndex: 'icon',
			width: 350,
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
								title: '你确定删除选中内容类型吗?',
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
	const dataSource: any = [{ name: '假设内容很长很长', number: 1, icon: 1 }];
	return (
		<BizPage>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Create />
						</div>
						<div className='io-space-item'>
							<Button>批量删除</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'请输入内容类型名称/编号'}
				columns={columns}
				rowSelection={{}}
				dataSource={dataSource}
			/>
		</BizPage>
	);
};
