import React, { useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Switch, Modal, Input, InputNumber } from 'antd';
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
	const [visible, setVisible] = useState(false);
	return (
		<>
			<BizPage showActions={false}>
				<BizTable
					renderActions={() => (
						<>
							<div className='io-space-item'>
								<Button type='primary' onClick={() => setVisible(true)}>
									<i
										className='iconfont icon-plus1'
										style={{ fontSize: '16px' }}
									/>
									新建
								</Button>
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
			<AreaModal visible={visible} setVisible={setVisible} />
		</>
	);
};
