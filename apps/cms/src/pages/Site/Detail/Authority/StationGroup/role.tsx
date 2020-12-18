import React, { useState } from 'react';
import { Table, Checkbox } from 'antd';
const columns = [
	{
		title: '阵地',
		dataIndex: 'orgName',
		key: 'orgName',
	},
	{
		title: '角色',
		key: 'age',
		width: '12%',
		render: (row: any) => {
			if (row.roleName) {
				return <Checkbox>{row.roleName}</Checkbox>;
			} else {
				return null;
			}
		},
	},
];
const data = [
	{
		key: 1,
		orgName: 'John Brown sr.',
		roleName: null,
		children: [
			{
				key: 11,
				orgName: 'John Brown',
				roleName: null,
			},
			{
				key: 13,
				orgName: null,
				roleName: 'test',
			},
			{
				key: 14,
				orgName: null,
				roleName: 'test2',
			},
			{
				key: 15,
				orgName: 'John Brown jr.',
				roleName: null,
				children: [
					{
						key: 151,
						orgName: 'Jimmy Brown',
						roleName: null,
					},
				],
			},
		],
	},
];
export default () => {
	const [load, setLoad] = useState<boolean>(false);
	const rowSelection = {
		renderCell: (checked: any, record: any) => {
			console.log('record', record);
			if (record.children) {
				return <Checkbox onChange={e => {}} />;
			} else {
				return null;
			}
		},
		checkStrictly: true,
	};
	return (
		<div>
			<Table
				columns={columns}
				dataSource={data}
				rowSelection={{ ...rowSelection }}
				pagination={false}
				loading={load}
			/>
		</div>
	);
};
