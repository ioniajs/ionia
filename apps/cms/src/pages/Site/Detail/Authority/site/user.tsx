import { ActionType, ProColumns } from '@ant-design/pro-table';
import {
	saveSitepermGroupUser,
	BizTable,
	logger,
	sitepermSitePage,
	SiteAuthUserVO,
	saveSitepermSiteUser,
} from '@ionia/libs';
import { Button, Checkbox, message } from 'antd';
import React, { useRef, useState } from 'react';
export interface TableListItem {
	key: number;
	name: string;
}

export default ({ siteId }: { siteId: string }) => {
	const params = {
		pageSize: 10,
		current: 1,
		keyWord: '',
	};
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
	const [userList, setUserList] = useState<any[]>([]);

	/**
	 *
	 * @param type
	 * @param data
	 * 递归获取该类型下的所有选择
	 * @param ids
	 */

	const getAllCheck = (type: any, ids: string[] = []) => {
		userList?.map((item: any) => {
			if (item.datas[type].optional == 1) {
				ids.push(item.datas[type].selected);
			}
		});
		return ids;
	};

	/**
	 *
	 * @param data
	 * @param type
	 * 是否半选
	 */
	const checkAll = (type: any) => {
		const ids = getAllCheck(type);
		const flag = ids.findIndex(value => value == '0');
		const flag1 = ids.findIndex(value => value == '1');
		return flag != -1 && flag1 != -1;
	};

	/**
	 *
	 * @param data
	 * @param type
	 * 是否全选
	 */
	const isCheckAll = (type: any) => {
		const ids = getAllCheck(type);
		console.log('ids', ids);
		const flag = ids.findIndex(value => value == '0');
		return flag == -1 && ids.length > 0;
	};

	const changeDataOne = (data: any, flag: boolean, type: string) => {
		if (type == 'key0') {
			let arr = [];
			for (const key in data.datas) {
				if (data.datas[key].optional == 1) {
					arr.push(data.datas[key].selected);
				}
			}
			if (arr.filter(t => t == 1).length == 1) {
				//只有查看勾选
				flag ? (data.datas[type].selected = 1) : (data.datas[type].selected = 0);
			} else {
				data.datas[type].selected = 1;
			}
		} else {
			flag ? (data.datas[type].selected = 1) : (data.datas[type].selected = 0);
			data.datas.key0.selected = 1;
		}
		setUserList([...userList]);
	};

	/**
	 * 修改该列
	 */

	const changeAll = (type: any, data: any, flag: any) => {
		data.map((item: any) => {
			if (type == 'key0') {
				data.map((item: any) => {
					let ids: number[] = [];
					for (const key in item.datas) {
						if (item.datas[key].optional == 1) {
							ids.push(item.datas[key].selected);
						}
					}
					//点击勾选 则勾选
					//取消时 判断其他功能的权限是否存在 如果在就取消 不在 就不取消
					if (flag) {
						item.datas[type].selected = 1;
					} else {
						if (ids.filter(t => t == 1).length < 2) {
							item.datas[type].selected = 0;
						}
					}
				});
			} else {
				if (item.datas[type].optional == 1) {
					flag ? (item.datas[type].selected = 1) : (item.datas[type].selected = 0);
				}
				item.datas.key0.selected = 1;
			}
		});
		setUserList([...userList]);
	};

	const rowCheckAll = (list: any) => {
		let isSelect: boolean = false;
		Object.keys(list.datas).forEach(t => {
			if (list.datas[t].optional == 1) {
				if (list.datas[t].selected == 1) {
					isSelect = true;
				}
			}
		});
		return isSelect;
	};
	const columns: ProColumns<SiteAuthUserVO>[] = [
		{
			title: '用户名',
			key: 'userName',
			dataIndex: 'userName',
		},
		{
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
		},
		{
			title: '所属阵地',
			key: 'orgName',
			dataIndex: 'orgName',
		},
		{
			title: '所属角色',
			key: 'roleName',
			dataIndex: 'roleName',
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key0', userList, e.target.checked);
					}}
					indeterminate={checkAll('key0')}
					checked={isCheckAll('key0')}
				>
					查看详情
				</Checkbox>
			),
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key0.selected == 1}
						disabled={row.datas.key0.optional == 0}
						onChange={e => {
							changeDataOne(row, e.target.checked, 'key0');
						}}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key1', userList, e.target.checked);
					}}
					indeterminate={checkAll('key1')}
					checked={isCheckAll('key1')}
				>
					新建
				</Checkbox>
			),
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key1.selected == 1}
						disabled={row.datas.key1.optional == 0}
						onChange={e => {
							changeDataOne(row, e.target.checked, 'key1');
						}}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key2', userList, e.target.checked);
					}}
					indeterminate={checkAll('key2')}
					checked={isCheckAll('key2')}
				>
					编辑
				</Checkbox>
			),
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key2.selected == 1}
						disabled={row.datas.key2.optional == 0}
						onChange={e => {
							changeDataOne(row, e.target.checked, 'key2');
						}}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key3', userList, e.target.checked);
					}}
					indeterminate={checkAll('key3')}
					checked={isCheckAll('key3')}
				>
					删除
				</Checkbox>
			),
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key3.selected == 1}
						disabled={row.datas.key3.optional == 0}
						onChange={e => {
							changeDataOne(row, e.target.checked, 'key3');
						}}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key4', userList, e.target.checked);
					}}
					indeterminate={checkAll('key4')}
					checked={isCheckAll('key4')}
				>
					复制
				</Checkbox>
			),
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key4.selected == 1}
						disabled={row.datas.key4.optional == 0}
						onChange={e => {
							changeDataOne(row, e.target.checked, 'key4');
						}}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key5', userList, e.target.checked);
					}}
					indeterminate={checkAll('key5')}
					checked={isCheckAll('key5')}
				>
					权限分配
				</Checkbox>
			),
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key5.selected == 1}
						disabled={row.datas.key5.optional == 0}
						onChange={e => {
							changeDataOne(row, e.target.checked, 'key5');
						}}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key6', userList, e.target.checked);
					}}
					indeterminate={checkAll('key6')}
					checked={isCheckAll('key6')}
				>
					发布静态页
				</Checkbox>
			),
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key6.selected == 1}
						disabled={row.datas.key6.optional == 0}
						onChange={e => {
							changeDataOne(row, e.target.checked, 'key6');
						}}
					/>
				);
			},
		},
	];

	const rowSelection = {
		renderCell: (checked: any, record: any) => {
			return (
				<Checkbox
					checked={rowCheckAll(record)}
					onChange={e => {
						Object.keys(record.datas).forEach(t => {
							if (record.datas[t].optional == 1) {
								e.target.checked
									? (record.datas[t].selected = 1)
									: (record.datas[t].selected = 0);
							}
						});
						setUserList([...userList]);
					}}
				/>
			);
		},
		checkStrictly: true,
		/**
		 * 全选
		 */
		onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
			userList.map((item: any) => {
				Object.keys(item.datas).forEach(t => {
					if (item.datas[t].optional == 1) {
						selected ? (item.datas[t].selected = 1) : (item.datas[t].selected = 0);
					}
				});
			});
			setUserList([...userList]);
		},
	};
	return (
		<div className='io-cms-user'>
			<BizTable
				rowKey='userId'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Button
								type='primary'
								onClick={async () => {
									let users: any[] = [];
									userList.map((item: any) => {
										users.push({
											selected: item.selected,
											userId: item.userId,
											datas: item.datas,
										});
									});
									const { code } = await saveSitepermSiteUser({ users, siteId });
									if (code == 200) {
										message.success('保存成功');
									}
								}}
							>
								保存
							</Button>
						</div>
					</>
				)}
				columns={columns}
				pagination={{
					current: params.current,
					pageSize: params.pageSize,
				}}
				rowSelection={{ ...rowSelection }}
				tableAlertRender={false}
				tableAlertOptionRender={false}
				// onRow={record => {
				// 	return {
				// 		onClick: () => {
				// 			const RowKeys = [...selectedRowKeys];
				// 			if (RowKeys.indexOf(record.userId) >= 0) {
				// 				RowKeys.splice(selectedRowKeys.indexOf(record.userId), 1);
				// 			} else {
				// 				RowKeys.push(record.userId);
				// 			}
				// 			setSelectedRowKeys(RowKeys);
				// 		},
				// 	};
				// }}
				// pagination
				request={async (params: any, sort: any, filter: any) => {
					const { data } = await sitepermSitePage({
						pageNo: params.current,
						pageSize: params.pageSize,
						siteId,
					});
					setUserList(data.content);
					return {
						data: data.content,
						// success 请返回 true，
						// 不然 table 会停止解析数据，即使有数据
						success: true,
						// 不传会使用 data 的长度，如果是分页一定要传
						total: data.total,
					};
				}}
			/>
		</div>
	);
};
