import React, { useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Modal } from 'antd';
import Create from './Create';

export default () => {
	const columns: any = [
		{
			title: 'FTP名称',
			key: 'name',
			dataIndex: 'name',
			width: 270,
		},
		{
			title: '服务器IP',
			key: 'ip',
			dataIndex: 'ip',
			width: 210,
		},
		{
			title: '端口',
			key: 'port',
			dataIndex: 'port',
			width: 155,
		},
		{
			title: '远程目录',
			key: 'catalogue',
			dataIndex: 'catalogue',
			width: 180,
		},
		{
			title: '登录名',
			key: 'admin',
			dataIndex: 'admin',
			width: 175,
		},
		{
			title: '编码',
			key: 'coding',
			dataIndex: 'coding',
			width: 170,
		},
		{
			title: '资源访问域名',
			key: 'domain',
			dataIndex: 'domain',
			width: 300,
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
								title: '你确定删除选中FTP吗?',
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
		{
			name: '假设名字很长很长',
			ip: '192.0168.0.144',
			port: 8080,
			catalogue: 'D:/list',
			admin: 'admin',
			coding: 'UTF-8',
			domain: 'http://www.196.168.0.144',
		},
		{
			name: '假设名字很长很长',
			ip: '192.0168.0.144',
			port: 8080,
			catalogue: 'D:/list',
			admin: 'admin',
			coding: 'UTF-8',
			domain: 'http://www.196.168.0.144',
		},
	];
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	return (
		<BizPage>
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
				inputPlaceholderText={'请输入FTP名称'}
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
