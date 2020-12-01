import React from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Switch, InputNumber, Modal } from 'antd';
import AreaModal from './Detail';

export default () => {
	const columns: any = [
		{
			title: '区域名称',
			key: 'areaName',
			dataIndex: 'areaName',
			width: 540,
		},
		{
			title: '编号',
			key: 'number',
			dataIndex: 'number',
			width: 232,
		},
		{
			title: '排序值',
			key: 'sortNo',
			dataIndex: 'sortNo',
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
			areaName: '江西金磊科技',
			number: '1001',
			sortNo: '1',
			status: 'false',
		},
	];
	return (
		<BizPage>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<AreaModal />
						</div>
						<div className='io-space-item'>
							<Button>批量删除</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'请输入区域名称/编号'}
				columns={columns}
				dataSource={dataSource}
				rowSelection={{}}
			/>
		</BizPage>
	);
};
