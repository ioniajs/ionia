import React, { useState, useRef } from 'react';
import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable, BizTree } from '@ionia/libs';
import { Button, Divider, Modal, Switch } from 'antd';
import Edit from './Edit';
import Move from './Move';

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
			width: 250,
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
									title: '确定删除所选题目吗？',
									content: '删除后无法恢复,请谨慎操作.',
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
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const [move, setMove] = useState<boolean>(false);
	const actionRef = useRef<ActionType>();
	return (
		<BizPage>
			<BizTable
				rowKey='id'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Edit />
						</div>
						<div className='io-space-item'>
							<Button>导入题目</Button>
						</div>
						<div className='io-space-item'>
							<Button onClick={() => setMove(true)}>批量移动</Button>
						</div>
						<div className='io-space-item'>
							<Button
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.confirm({
										title: '你确定删除选中试卷吗？',
										content: '删除后无法恢复,请谨慎操作.',
										okText: '删除',
										cancelText: '取消',
									});
								}}
							>
								批量删除
							</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'请输入题目名称'}
				columns={columns}
				dataSource={dataSource}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
				}}
				renderSider={() => <BizTree />}
			/>
			<Move move={move} setMove={setMove} />
		</BizPage>
	);
};
