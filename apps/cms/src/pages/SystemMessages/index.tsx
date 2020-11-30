import React, { useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Button, Modal } from 'antd';
import './index.less';

export default () => {
	const [title, setTitle] = useState(false);
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const columns: any = [
		{
			title: '标题',
			key: 'title',
			dataIndex: 'title',
			width: 520,
			// render: (_: any, row: any) => {
			// 	<a onClick={() => setTitle(true)}>{row.title}</a>;
			// },
		},
		{
			title: '内容',
			key: 'content',
			dataIndex: 'content',
			width: 340,
		},
		{
			title: '消息状态',
			key: 'status',
			dataIndex: 'status',
			width: 215,
		},
		{
			title: '收件时间',
			key: 'time',
			dataIndex: 'time',
			width: 300,
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 150,
			// render: (_: any, row: any) => {
			// 	<>
			// 		<a>删除</a>
			// 	</>;
			// },
		},
	];
	const dataSource: any = [
		{
			title: '金磊科技',
			content: '金磊科技',
			status: '未读',
			time: '2020-10-20',
			operation: '删除',
		},
		{
			title: '金磊科技',
			content: '金磊科技',
			status: '未读',
			time: '2020-10-20',
			operation: '删除',
		},
	];
	return (
		<BizPage showActions={false}>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Button type='primary'>批量标记为已读</Button>
						</div>
						<div className='io-space-item'>
							<Button onClick={() => setTitle(true)}>批量标记为未读</Button>
						</div>
						<div className='io-space-item'>
							<Button>全部标记为未读</Button>
						</div>
						<div className='io-space-item'>
							<Button
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.confirm({
										title: '你确定删除所选中的信息吗？',
										content: '删除后无法恢复,请谨慎操作.',
										okText: '删除',
										cancelText: '取消',
									});
								}}
							>
								删除
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								onClick={() => {
									Modal.confirm({
										title: '你确定清空全部信息吗？',
										content: '清空后无法恢复,请谨慎操作',
										okText: '清空',
										cancelText: '取消',
									});
								}}
							>
								清空
							</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'请输入标题/内容'}
				columns={columns}
				rowSelection={{
					selectedRowKeys,
					onChange: selectedRowKeys => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
				}}
				dataSource={dataSource}
			></BizTable>
			<Modal
				visible={title}
				title='信息详情'
				onOk={() => setTitle(false)}
				className='io-cms-system-messages__modal'
			>
				<div className='io-cms-system-messages__content'>
					<div className='io-cms-system-messages__content-header'>
						<p>您有1条待办事项</p>
						<p>收件时间：2020-11-02 13:51:44</p>
					</div>
					<div className='io-cms-system-messages__content-content'>
						<span>
							消息详情假设内容文字很长很长很长很长很长很长
							很长很长很长很长很长很长很长很长
							很长很长很长很长很长很长很长很长很长很长很长很长 很长很长很长很长
						</span>
					</div>
				</div>
			</Modal>
		</BizPage>
	);
};
