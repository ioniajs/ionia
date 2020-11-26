import React, { useState } from 'react';
import { Table, Checkbox } from 'antd';

const columns = [
	{
		title: '站点名称',
		dataIndex: 'operation',
		key: 'name',
	},
	{
		title: <Checkbox onChange={onChange}>查看</Checkbox>,
		dataIndex: 'operation1',
		key: 'age',
		// render: () => {
		// 	return <Checkbox onChange={onChange}></Checkbox>;
		// },
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={onChange}
					defaultChecked={row.datas.operation1.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox onChange={onChange}>新建</Checkbox>,
		dataIndex: 'operation2',
		key: 'address',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={onChange}
					defaultChecked={row.datas.operation2.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox onChange={onChange}>编辑</Checkbox>,
		dataIndex: 'operation3',
		key: 'age',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={onChange}
					defaultChecked={row.datas.operation3.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox onChange={onChange}>删除</Checkbox>,
		dataIndex: 'operation4',
		key: 'address',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={onChange}
					defaultChecked={row.datas.operation4.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox onChange={onChange}>复制</Checkbox>,
		dataIndex: 'operation5',
		key: 'age',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={onChange}
					defaultChecked={row.datas.operation5.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox onChange={onChange}>权限分配</Checkbox>,
		dataIndex: 'operation6',
		key: 'address',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={onChange}
					defaultChecked={row.datas.operation6.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
	{
		title: <Checkbox onChange={onChange}>发布静态页</Checkbox>,
		dataIndex: 'operation7',
		key: 'address',
		render: (text: any, row: any, index: any) => {
			console.log(row.datas);
			return (
				<Checkbox
					onChange={onChange}
					defaultChecked={row.datas.operation7.selected == 1 ? true : false}
				></Checkbox>
			);
		},
	},
];

const data = [
	{
		datas: {
			operation1: {
				optional: 1,
				selected: 1,
			},

			operation2: {
				optional: 1,
				selected: 1,
			},

			operation3: {
				optional: 1,
				selected: 1,
			},

			operation4: {
				optional: 1,
				selected: 1,
			},

			operation5: {
				optional: 1,
				selected: 1,
			},

			operation6: {
				optional: 1,
				selected: 1,
			},

			operation7: {
				optional: 1,
				selected: 1,
			},
		},
		siteId: 1,
	},
	{
		datas: {
			operation1: {
				optional: 1,
				selected: 1,
			},

			operation2: {
				optional: 1,
				selected: 1,
			},

			operation3: {
				optional: 1,
				selected: 1,
			},

			operation4: {
				optional: 1,
				selected: 1,
			},

			operation5: {
				optional: 1,
				selected: 1,
			},

			operation6: {
				optional: 1,
				selected: 1,
			},

			operation7: {
				optional: 1,
				selected: 1,
			},
		},
		siteId: '1324944027546599425',
	},
	{
		datas: {
			operation1: {
				optional: 1,
				selected: 1,
			},

			operation2: {
				optional: 1,
				selected: 1,
			},

			operation3: {
				optional: 1,
				selected: 1,
			},

			operation4: {
				optional: 1,
				selected: 1,
			},

			operation5: {
				optional: 1,
				selected: 1,
			},

			operation6: {
				optional: 1,
				selected: 1,
			},

			operation7: {
				optional: 1,
				selected: 1,
			},
		},
		siteId: '1325688865397215233',
	},
	{
		datas: {
			operation1: {
				optional: 1,
				selected: 1,
			},

			operation2: {
				optional: 1,
				selected: 1,
			},

			operation3: {
				optional: 1,
				selected: 1,
			},

			operation4: {
				optional: 1,
				selected: 1,
			},

			operation5: {
				optional: 1,
				selected: 1,
			},

			operation6: {
				optional: 1,
				selected: 1,
			},

			operation7: {
				optional: 1,
				selected: 1,
			},
		},
		siteId: '1325689734125645826',
	},
	{
		datas: {
			operation1: {
				optional: 1,
				selected: 1,
			},

			operation2: {
				optional: 1,
				selected: 1,
			},

			operation3: {
				optional: 1,
				selected: 1,
			},

			operation4: {
				optional: 1,
				selected: 1,
			},

			operation5: {
				optional: 1,
				selected: 1,
			},

			operation6: {
				optional: 1,
				selected: 1,
			},

			operation7: {
				optional: 1,
				selected: 1,
			},
		},
		siteId: '1325688962101088257',
	},
	{
		datas: {
			operation1: {
				optional: 1,
				selected: 1,
			},

			operation2: {
				optional: 1,
				selected: 1,
			},

			operation3: {
				optional: 1,
				selected: 1,
			},

			operation4: {
				optional: 1,
				selected: 1,
			},

			operation5: {
				optional: 1,
				selected: 1,
			},

			operation6: {
				optional: 1,
				selected: 1,
			},

			operation7: {
				optional: 1,
				selected: 1,
			},
		},
		siteId: '1325689429627564033',
	},
	{
		datas: {
			operation1: {
				optional: 1,
				selected: 1,
			},

			operation2: {
				optional: 1,
				selected: 1,
			},

			operation3: {
				optional: 1,
				selected: 1,
			},

			operation4: {
				optional: 1,
				selected: 1,
			},

			operation5: {
				optional: 1,
				selected: 1,
			},

			operation6: {
				optional: 1,
				selected: 1,
			},

			operation7: {
				optional: 1,
				selected: 1,
			},
		},
		siteId: '1326361764857733121',
	},
];

function onChange(e) {
	console.log(e);
	console.log(`checked = ${e.target.checked}`);
}
const getValue = () => {};

// rowSelection objects indicates the need for row selection
const rowSelection = {
	onSelect: (record, selected, selectedRows) => {
		console.log(record, selected, selectedRows);
	},
	onSelectAll: (selected, selectedRows, changeRows) => {
		console.log(selected, selectedRows, changeRows);
	},
};

export default ({ roleId }: any) => {
	return (
		<>
			<Table
				columns={columns}
				rowSelection={{ ...rowSelection, checkStrictly: true }}
				dataSource={data}
			/>
		</>
	);
};
