import React, { useState } from 'react';
import { Table, Checkbox, Button } from 'antd';
import { logger } from '@ionia/libs/src';
const data = [
	{
		key: 1,
		orgName: 'John Brown sr.',
		roleName: null,
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
			key3: {
				operation: 3,
				optional: 0,
				selected: 0,
			},
			key4: {
				operation: 4,
				optional: 1,
				selected: 0,
			},
		},
		children: [
			{
				key: 11,
				orgName: 'John Brown',
				roleName: null,
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
					key3: {
						operation: 3,
						optional: 0,
						selected: 0,
					},
					key4: {
						operation: 4,
						optional: 1,
						selected: 0,
					},
				},
			},
			{
				key: 13,
				orgName: null,
				roleName: 'test',
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
					key3: {
						operation: 3,
						optional: 0,
						selected: 0,
					},
					key4: {
						operation: 4,
						optional: 1,
						selected: 0,
					},
				},
			},
			{
				key: 14,
				orgName: null,
				roleName: 'test2',
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
					key3: {
						operation: 3,
						optional: 0,
						selected: 0,
					},
					key4: {
						operation: 4,
						optional: 1,
						selected: 0,
					},
				},
			},
			{
				key: 15,
				orgName: 'John Brown jr.',
				roleName: null,
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
					key3: {
						operation: 3,
						optional: 0,
						selected: 0,
					},
					key4: {
						operation: 4,
						optional: 1,
						selected: 0,
					},
				},
				children: [
					{
						key: 151,
						orgName: 'Jimmy Brown',
						roleName: null,
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
							key3: {
								operation: 3,
								optional: 0,
								selected: 0,
							},
							key4: {
								operation: 4,
								optional: 1,
								selected: 0,
							},
						},
					},
				],
			},
		],
	},
];
export default () => {
	const [load, setLoad] = useState<boolean>(false);
	const [tree, setTree] = useState(data);
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
		{
			title: <Checkbox>查看详情</Checkbox>,
			render: (row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key0, row.datas.key0.selected, row.datas, 'key0');
						}}
						checked={row.datas.key0.selected == 1}
						disabled={row.datas.key0.optional == 0}
					></Checkbox>
				);
			},
		},
		{
			title: <Checkbox>新建</Checkbox>,
			render: (row: any) => {
				return <Checkbox></Checkbox>;
			},
		},
		{
			title: <Checkbox>编辑</Checkbox>,
			render: (row: any) => {
				return <Checkbox></Checkbox>;
			},
		},
		{
			title: <Checkbox>删除</Checkbox>,
			render: (row: any) => {
				return <Checkbox></Checkbox>;
			},
		},
		{
			title: <Checkbox>复制</Checkbox>,
			render: (row: any) => {
				return <Checkbox></Checkbox>;
			},
		},
		{
			title: <Checkbox>权限分配</Checkbox>,
			render: (row: any) => {
				return <Checkbox></Checkbox>;
			},
		},
	];

	/**
	 * 改变每个功能的按钮的值
	 * @param row
	 * @param data0
	 * @param parent
	 * 1.判断是否是查看按钮 如果是查看 就点击并且可取消 ，如果不是 就给查看赋值1
	 * 2.如果其他的存在 不可取消查看 得先取消其他的才能取消查看
	 * @param type
	 */
	const changeData = (row: any, data0: number, parent: any, type: string) => {
		const { key0 } = parent;
		if (type == 'key0') {
			let arr = [];
			for (const key in parent) {
				if (parent[key].optional == 1) {
					arr.push(parent[key].selected);
				}
			}
			if (arr.filter(t => t == 1).length == 1) {
				//只有查看勾选
				data0 == 1 ? (row.selected = 0) : (row.selected = 1);
			} else {
				row.selected = 1;
			}
		} else {
			data0 == 1 ? (row.selected = 0) : (row.selected = 1);
			if (key0.selected == 0) {
				key0.selected = 1;
			}
		}
		setTree([...tree]);
	};
	const rowSelection = {
		renderCell: (checked: any, record: any) => {
			if (record.orgName) {
				return <Checkbox onChange={e => {}} />;
			} else {
				return null;
			}
		},
		checkStrictly: true,
	};

	const submitData = () => {
		logger.debug('tree', tree);
	};
	return (
		<div>
			<Button onClick={submitData} type='primary'>
				保存
			</Button>
			<Table
				columns={columns}
				dataSource={tree}
				rowSelection={{ ...rowSelection }}
				pagination={false}
				loading={load}
			/>
		</div>
	);
};
