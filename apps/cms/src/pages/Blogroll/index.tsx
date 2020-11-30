import React from 'react';
import { BizPage, BizTable, BizTree } from '@ionia/libs';
import { Button, Switch } from 'antd';

export default () => {
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
							<Button type='primary'>
								<i className='iconfont icon-plus1' style={{ fontSize: '16px' }} />
								新建
							</Button>
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
		</BizPage>
	);
};
