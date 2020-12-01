import React, { useState } from 'react';
import { BizPage, BizTable, BizTree } from '@ionia/libs';
import { Button, Switch, Divider, Modal } from 'antd';
import Create from './Create';
import Move from './Move';

export default () => {
	const [create, setCreate] = useState(false);
	const [move, setMove] = useState(false);
	const columns: any = [
		{
			title: '友情链接名称',
			key: 'name',
			dataIndex: 'name',
			width: 220,
		},
		{
			title: '编号',
			key: 'number',
			dataIndex: 'number',
			width: 110,
		},
		{
			title: '链接URL',
			key: 'url',
			dataIndex: 'url',
			width: 200,
		},
		{
			title: '图片',
			key: 'image',
			dataIndex: 'image',
			width: 165,
		},
		{
			title: '所属分类',
			key: 'classify',
			dataIndex: 'classify',
			width: 140,
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 145,
			render: (_: any, row: any) => (
				<Switch
					checked={row.status === 1}
					checkedChildren='开启'
					unCheckedChildren='禁用'
				/>
			),
		},
		{
			title: '创建时间',
			key: 'createTime',
			dataIndex: 'createTime',
			width: 210,
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 100,
			render: (_: any, row: any) => (
				<>
					<a onClick={() => setMove(true)}>移动</a>
					<Divider type='vertical' />
					<a
						onClick={async () => {
							if (row) {
								Modal.confirm({
									title: '你确定删除选中分类吗？',
									content:
										'删除分类会同时删除分类中的友情链接，删除后无法恢复，请谨慎操作。',
									okText: '删除',
									cancelText: '取消',
								});
							}
						}}
					>
						删除
					</a>
				</>
			),
		},
	];
	const dataSource: any = [
		{
			name: '名字很长很长',
			number: 1001,
			url: 'http://baidu.com',
			image: 111,
			classify: '分类一',
			status: false,
			createTime: '2020-11-30 21:35:05',
		},
	];
	return (
		<BizPage showActions={false}>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Create />
						</div>
						<div className='io-space-item'>
							<Button>批量移动</Button>
						</div>
						<div className='io-space-item'>
							<Button>批量删除</Button>
						</div>
					</>
				)}
				renderSider={() => <BizTree />}
				inputPlaceholderText={'请输入友情链接名称/编号'}
				rowSelection={{}}
				columns={columns}
				dataSource={dataSource}
			/>
			<Move move={move} setMove={setMove} />
		</BizPage>
	);
};
