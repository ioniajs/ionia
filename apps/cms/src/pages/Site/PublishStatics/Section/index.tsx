import React, { useState } from 'react';
import { Button, Modal, Progress, Checkbox } from 'antd';
import { BizPage, BizTable, logger } from '@ionia/libs';
import './index.less';

const dataSource = [
	{
		id: 1,
		name: '一级栏目',
		mark: true,
		children: [
			{
				name: '二级栏目11',
				id: 11,
				mark: true,
				children: [
					{
						name: '二级栏目111',
						id: 111,
						mark: true,
						children: [
							{
								name: '二级栏目1111',
								id: 1111,
								mark: true,
							},
						],
					},
				],
			},
			{
				name: '二级栏目12',
				id: 12,
				mark: true,
				children: [
					{
						id: 121,
						name: '三级栏目121',
						mark: true,
					},
				],
			},
		],
	},
];

export const Section = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const columns = [
		{
			title: '栏目名称',
			key: 'name',
			dataIndex: 'name',
			render: (_: any, row: any) => (
				<span>
					{row.children && row.children.length > 0 && (
						<i
							className='iconfont icon-cluster'
							onClick={() => {
								if (row.children && row.children.length > 0) {
									if (selectedRowKeys.indexOf(row.id) === -1) {
										const arr: any = [];
										const loop = function (data: any) {
											return (data || []).map((r: any) => {
												if (r.children) {
													r.children = loop(r.children);
												}
												arr.push(r.id);
												return {
													...r,
													children: r.children,
												};
											});
										};
										const temp = loop(row.children);
										arr.push(row.id);
										const tempArrs = selectedRowKeys.concat(arr);
										const tempArr = Array.from(new Set(tempArrs));
										setSelectedRowKeys(tempArr);
									} else if (selectedRowKeys.indexOf(row.id) > -1) {
										const loop = function (data: any) {
											return (data || []).map((r: any) => {
												if (r.children) {
													r.children = loop(r.children);
												}
												selectedRowKeys.splice(
													selectedRowKeys.findIndex(
														(item: any) => item === r.id
													),
													1
												);
												return {
													...r,
													children: r.children,
												};
											});
										};
										const temp = loop(row.children);
										selectedRowKeys.splice(
											selectedRowKeys.findIndex(
												(item: any) => item === row.id
											),
											1
										);
										console.log(selectedRowKeys, '操作后的sele');
										const a: number[] = [];
										setSelectedRowKeys(a.concat(selectedRowKeys));
									}
								}
							}}
						/>
					)}
					&nbsp;
					{row.name}
				</span>
			),
		},
		{
			title: '静态页',
			key: 'mark',
			dataIndex: 'mark',
			render: (_: any, row: any) => <i className='iconfont icon-select' />,
		},
	];
	return (
		<div className='io-cms-site-publish-section'>
			<BizPage
				showActions={true}
				renderActions={() => (
					<>
						<Button
							type='primary'
							onClick={() => {
								const precent = 30;
								Modal.info({
									title: (
										<span className='io-cms-site-publish-section-title__modal'>
											生成静态页
										</span>
									),
									content: <Progress percent={precent} />,
									okText: '后台运行',
									icon: '',
								});
							}}
							className='io-cms-site-publish-section-generate_but'
						>
							生成栏目静态页
						</Button>
						<Button>取消栏目静态页</Button>
					</>
				)}
			>
				<BizTable
					rowKey='id'
					toolBarRender={false}
					columns={columns}
					rowSelection={{
						checkStrictly: true,
						selectedRowKeys,
						onChange: selectedRowKeys => {
							setSelectedRowKeys(selectedRowKeys as number[]);
						},
					}}
					dataSource={dataSource}
				/>
			</BizPage>
		</div>
	);
};
