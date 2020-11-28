import React, { useState } from 'react';
import { Table, Checkbox, Affix, Button } from 'antd';
import { logger } from '@ionia/libs';

const columns = [
	{
		title: '站点名称',
		dataIndex: 'siteName',
		key: 'siteName',
	},
	{
		title: <Checkbox>查看</Checkbox>,
		dataIndex: 'key1',
		key: 'key1',
		render: (text: any, row: any, index: any) => {
			return (
				<Checkbox
					onChange={() => {
						onChange(row.datas.key0, row.datas.key0.selected);
					}}
					defaultChecked={row.datas.key0.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox>新建</Checkbox>,
		dataIndex: 'key2',
		key: 'key2',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={() => {
						onChange(row.datas.key1, row.datas.key1.selected);
					}}
					defaultChecked={row.datas.key1.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox>编辑</Checkbox>,
		dataIndex: 'key3',
		key: 'key3',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={() => {
						onChange(row.datas.key2, row.datas.key2.selected);
					}}
					defaultChecked={row.datas.key2.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox>删除</Checkbox>,
		dataIndex: 'key4',
		key: 'key4',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={() => {
						onChange(row.datas.key3, row.datas.key3.selected);
					}}
					defaultChecked={row.datas.key3.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox>复制</Checkbox>,
		dataIndex: 'key5',
		key: 'key5',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={() => {
						onChange(row.datas.key4, row.datas.key4.selected);
					}}
					defaultChecked={row.datas.key4.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox>权限分配</Checkbox>,
		dataIndex: 'key6',
		key: 'key6',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={() => {
						onChange(row.datas.key5, row.datas.key5.selected);
					}}
					defaultChecked={row.datas.key5.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox>发布静态页</Checkbox>,
		dataIndex: 'key7',
		key: 'key7',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={() => {
						onChange(row.datas.key6, row.datas.key6.selected);
					}}
					defaultChecked={row.datas.key6.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
];

const data = [
	{
		children: [
			{
				children: [
					{
						children: [
							{
								datas: {
									key1: {
										operation: 1,
										optional: 1,
										selected: 1,
									},
									key2: {
										operation: 2,
										optional: 1,
										selected: 0,
									},
									key0: {
										operation: 0,
										optional: 1,
										selected: 1,
									},
									key5: {
										operation: 5,
										optional: 1,
										selected: 0,
									},
									key6: {
										operation: 6,
										optional: 1,
										selected: 0,
									},
									key3: {
										operation: 3,
										optional: 1,
										selected: 0,
									},
									key4: {
										operation: 4,
										optional: 1,
										selected: 0,
									},
								},
								parentId: '1325688865397215233',
								siteId: '1325689734125645826',
								siteName: '金磊科技1-1-1',
							},
						],
						datas: {
							key1: {
								operation: 1,
								optional: 1,
								selected: 0,
							},
							key2: {
								operation: 2,
								optional: 1,
								selected: 0,
							},
							key0: {
								operation: 0,
								optional: 1,
								selected: 1,
							},
							key5: {
								operation: 5,
								optional: 1,
								selected: 0,
							},
							key6: {
								operation: 6,
								optional: 1,
								selected: 0,
							},
							key3: {
								operation: 3,
								optional: 1,
								selected: 0,
							},
							key4: {
								operation: 4,
								optional: 1,
								selected: 0,
							},
						},
						parentId: '1324944027546599425',
						siteId: '1325688865397215233',
						siteName: '金磊科技1-1',
					},
					{
						datas: {
							key1: {
								operation: 1,
								optional: 1,
								selected: 0,
							},
							key2: {
								operation: 2,
								optional: 1,
								selected: 0,
							},
							key0: {
								operation: 0,
								optional: 1,
								selected: 0,
							},
							key5: {
								operation: 5,
								optional: 1,
								selected: 0,
							},
							key6: {
								operation: 6,
								optional: 1,
								selected: 0,
							},
							key3: {
								operation: 3,
								optional: 1,
								selected: 0,
							},
							key4: {
								operation: 4,
								optional: 1,
								selected: 0,
							},
						},
						parentId: '1324944027546599425',
						siteId: '1325688962101088257',
						siteName: '金磊科技1-2',
					},
				],
				datas: {
					key1: {
						operation: 1,
						optional: 1,
						selected: 0,
					},
					key2: {
						operation: 2,
						optional: 1,
						selected: 0,
					},
					key0: {
						operation: 0,
						optional: 1,
						selected: 1,
					},
					key5: {
						operation: 5,
						optional: 1,
						selected: 1,
					},
					key6: {
						operation: 6,
						optional: 1,
						selected: 0,
					},
					key3: {
						operation: 3,
						optional: 1,
						selected: 0,
					},
					key4: {
						operation: 4,
						optional: 1,
						selected: 0,
					},
				},
				parentId: 1,
				siteId: '1324944027546599425',
				siteName: '金磊科技1',
			},
			{
				datas: {
					key1: {
						operation: 1,
						optional: 1,
						selected: 0,
					},
					key2: {
						operation: 2,
						optional: 1,
						selected: 0,
					},
					key0: {
						operation: 0,
						optional: 1,
						selected: 0,
					},
					key5: {
						operation: 5,
						optional: 1,
						selected: 0,
					},
					key6: {
						operation: 6,
						optional: 1,
						selected: 0,
					},
					key3: {
						operation: 3,
						optional: 1,
						selected: 0,
					},
					key4: {
						operation: 4,
						optional: 1,
						selected: 0,
					},
				},
				parentId: 1,
				siteId: '1325689429627564033',
				siteName: '金磊科技2',
			},
			{
				datas: {
					key1: {
						operation: 1,
						optional: 1,
						selected: 0,
					},
					key2: {
						operation: 2,
						optional: 1,
						selected: 0,
					},
					key0: {
						operation: 0,
						optional: 1,
						selected: 0,
					},
					key5: {
						operation: 5,
						optional: 1,
						selected: 0,
					},
					key6: {
						operation: 6,
						optional: 1,
						selected: 0,
					},
					key3: {
						operation: 3,
						optional: 1,
						selected: 0,
					},
					key4: {
						operation: 4,
						optional: 1,
						selected: 0,
					},
				},
				parentId: 1,
				siteId: '1326361764857733121',
				siteName: '复制站点',
			},
		],
		datas: {
			key1: {
				operation: 1,
				optional: 1,
				selected: 1,
			},
			key2: {
				operation: 2,
				optional: 1,
				selected: 1,
			},
			key0: {
				operation: 0,
				optional: 1,
				selected: 1,
			},
			key5: {
				operation: 5,
				optional: 1,
				selected: 1,
			},
			key6: {
				operation: 6,
				optional: 1,
				selected: 1,
			},
			key3: {
				operation: 3,
				optional: 1,
				selected: 1,
			},
			key4: {
				operation: 4,
				optional: 1,
				selected: 1,
			},
		},
		parentId: '',
		siteId: 1,
		siteName: '江西金磊科技',
	},
];

//改变每个功能的按钮的值
function onChange(row: any, data: number) {
	console.log(row, data);
	data == 1 ? (row.selected = 0) : (row.selected = 1);
}
// const getValue = () => {};

//控制全部的

// rowSelection objects indicates the need for row selection
const rowSelection = {
	onSelect: (record: any, selected: any, selectedRows: any) => {
		console.log(record, selected, selectedRows);
	},
	onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
		console.log(selected, selectedRows, changeRows);
	},
};

export default ({ roleId }: any) => {
	const submitData = () => {
		logger.debug(data);
	};
	return (
		<>
			<Affix offsetTop={100}>
				<Button type='primary' onClick={submitData}>
					保存
				</Button>
			</Affix>
			<Table
				columns={columns}
				rowSelection={{ ...rowSelection, checkStrictly: true }}
				dataSource={data}
				pagination={false}
			/>
		</>
	);
};
