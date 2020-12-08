import React from 'react';
import { BizPage, BizTable, BizTree } from '@ionia/libs';
import { Button, Divider } from 'antd';
import Edit from './Edit';

export default () => {
	const columns: any = [
		{
			title: '题目名称',
			key: 'topicName',
			dataIndex: 'topicName',
			width: 420,
			// render: (_: any, row: any) => <Edit row={row} />,
		},
		{
			title: '题型',
			key: 'questionTypes',
			dataIndex: 'questionTypes',
			width: 155,
		},
		{
			title: '所属分类',
			key: 'classify',
			dataIndex: 'classify',
			width: 170,
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 180,
		},
		{
			title: '创建时间',
			key: 'createTime',
			dataIndex: 'createTime',
			width: 250,
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 100,
			render: (_: any, row: any) => (
				<>
					<a>移动</a>
					<Divider type='vertical' />
					<a>删除</a>
				</>
			),
		},
	];
	const dataSource: any = [
		{
			topicName: '假设名字很长很长',
			questionTypes: '单选题',
			classify: '分类一',
			status: 'true',
			createTime: '2020-12-07 09:48:56',
		},
		{
			topicName: '假设名字很长很长',
			questionTypes: '单选题',
			classify: '分类一',
			status: 'true',
			createTime: '2020-12-07 09:48:56',
		},
	];
	return (
		<BizPage>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Edit />
						</div>
						<div className='io-space-item'>
							<Button>导入题目</Button>
						</div>
						<div className='io-space-item'>
							<Button>批量移动</Button>
						</div>
						<div className='io-space-item'>
							<Button>批量删除</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'请输入题目名称'}
				columns={columns}
				dataSource={dataSource}
				rowSelection={{}}
				renderSider={() => <BizTree />}
			/>
		</BizPage>
	);
};
