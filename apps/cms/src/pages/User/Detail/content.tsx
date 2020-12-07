import { logger, roleGainCloumn, RoleChannelVO, gainSiteTree } from '@ionia/libs';
import { Affix, Button, Checkbox, Table, TreeSelect } from 'antd';
import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';

export default ({ roleId }: any) => {
	const { data, run } = useRequest(() => roleGainCloumn({ id: roleId, siteId: value }), {
		manual: true,
	});
	const siteTree = useRequest(() => gainSiteTree(), {
		onSuccess: data => {
			logger.debug('data?.data.list', data?.data.list);
			const siteData = filterData(data?.data.list);
			setSite(siteData);
			logger.debug(siteData);
		},
	});
	const treeData: any = data?.data ?? [];
	logger.debug('data', data);
	const submitData = () => {
		logger.debug(treeData);
	};
	const [tree, setTree] = useState<RoleChannelVO[]>(treeData);
	const [value, setValue] = useState(undefined);
	const [site, setSite] = useState([]);

	useEffect(() => {
		if (value) {
			run();
		}
	}, [value]);

	/*
	 * 获取站点树结构
	 * */
	const filterData = (data: any) => {
		return data.map((item: any) => {
			if (item.children && item.children.length > 0) {
				item.children = filterData(item.children);
			} else {
				return { title: item.name, value: item.id };
			}
			return { title: item.name, value: item.id, children: item.children };
		});
	};

	/*
	 * 切换站点
	 * */
	const changeColumnData = (val: any) => {
		setValue(val);
	};

	/**
	 * 改变每个功能的按钮的值
	 * @param row
	 * @param data0
	 * @param parent
	 * 1.判断是否是查看按钮 如果是查看 就点击并且可取消 ，如果不是 就给查看赋值1
	 * 2.如果其他的存在 不可取消查看 得先取消其他的才能取消查看
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
		setTree([...treeData]);
	};

	/**
	 * 修改该列
	 */

	const changeAll = (type: any, data: any, flag: any) => {
		if (type == 'key0') {
			logger.debug('data', data);
			const loop = (list: any) => {
				list.map((item: any) => {
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
					logger.debug('ids', ids);
					if (item.children && item.children.length) {
						loop(item.children);
					}
				});
			};
			loop(data);
		} else {
			data.map((item: any) => {
				if (item.datas[type].optional == 1) {
					flag ? (item.datas[type].selected = 1) : (item.datas[type].selected = 0);
				}

				if (item.children && item.children.length) {
					changeAll(type, item.children, flag);
				}
			});
		}
		setTree([...treeData]);
	};

	/**
	 *
	 * @param type
	 * @param data
	 * 递归获取可选的数据
	 */

	const getData = (list: any, type: any, items: any[] = []) => {
		list.map((item: any) => {
			if (item.datas[type].optional == 1) {
				items.push(item);
			}
			if (item.children && item.children.length) {
				getData(item.children, type, items);
			}
		});
		return items;
	};
	/**
	 *
	 * @param type
	 * @param data
	 * 递归获取该类型下的所有选择
	 */

	const getAllCheck = (data: any, type: any, ids: string[] = []) => {
		data?.map((item: any) => {
			if (item.datas[type].optional == 1) {
				ids.push(item.datas[type].selected);
			}
			if (item.children && item.children.length) {
				getAllCheck(item.children, type, ids);
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
	const checkAll = (data: any, type: any) => {
		const ids = getAllCheck(data, type);
		const flag = ids.findIndex(value => value == '0');
		const flag1 = ids.findIndex(value => value == '1');
		if (flag != -1 && flag1 != -1) {
			return true;
		} else {
			return false;
		}
	};

	/**
	 *
	 * @param data
	 * @param type
	 * 是否全选
	 */
	const isCheckAll = (data: any, type: any) => {
		const ids = getAllCheck(data, type);
		const flag = ids.findIndex(value => value == '0');
		if (flag == -1 && ids.length > 0) {
			return true;
		} else {
			return false;
		}
	};

	// rowSelection objects indicates the need for row selection
	const rowSelection = {
		onChange: () => {
			// console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		onSelect: (record: any, selected: any) => {
			for (const key in record.datas) {
				console.log(record.datas[key]);
				if (selected && record.datas[key].optional == 1) {
					record.datas[key].selected = 1;
				} else {
					record.datas[key].selected = 0;
				}
			}
			setTree([...treeData]);
		},
		/**
		 * 全选
		 */
		onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
			console.log(selected, selectedRows, changeRows);
			const loop = (data: any) => {
				data.map((item: any) => {
					for (const key in item.datas) {
						if (item.datas[key].optional == 1) {
							selected
								? (item.datas[key].selected = 1)
								: (item.datas[key].selected = 0);
						}
					}
					if (item.children && item.children.length) {
						loop(item.children);
					}
				});
			};
			loop(tree);
			setTree([...treeData]);
		},
	};

	const columns = [
		{
			title: '全选',
			render: (text: any, row: any) => {
				logger.debug(row.channelId);
				if (row.children && row.children.length) {
					return (
						<i
							className={`iconfont icon-apartment ${row.flag ? 'active' : ''}`}
							title='选中下级'
							style={{ cursor: 'pointer' }}
							onClick={() => {
								console.log('row', row.flag);
								row.flag = !row.flag;
								const loop = (data: any) => {
									data.map((item: any) => {
										for (const key in item.datas) {
											if (item.datas[key].optional == 1) {
												row.flag
													? (item.datas[key].selected = 1)
													: (item.datas[key].selected = 0);
											}
										}
										if (item.children && item.children.length) {
											loop(item.children);
										}
									});
								};
								loop(row.children);
								setTree([...treeData]);
							}}
						></i>
					);
				} else {
					return '';
				}
			},
		},
		{
			title: '站点名称',
			dataIndex: 'channelName',
			key: 'channelName',
			width: 240,
			ellipsis: true,
			render: (text: any, row: any) => {
				return row.channelId == 0 ? (
					<p>
						<span style={{ marginRight: '8px' }}>{row.channelName}</span>
						<i
							className='iconfont icon-info-circle'
							title='增量栏目指当前设置 保存后新增加的栏目'
							style={{ cursor: 'pointer' }}
						></i>
					</p>
				) : (
					<p>{row.channelName}</p>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key0', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key0')}
					checked={isCheckAll(treeData, 'key0')}
				>
					查看
				</Checkbox>
			),
			dataIndex: 'key0',
			key: 'key0',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key0, row.datas.key0.selected, row.datas, 'key0');
						}}
						checked={row.datas.key0.selected == 1 ? true : false}
						disabled={row.datas.key0.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key1', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key1')}
					checked={isCheckAll(treeData, 'key1')}
				>
					新建
				</Checkbox>
			),
			dataIndex: 'key1',
			key: 'key1',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key1, row.datas.key1.selected, row.datas, 'key1');
						}}
						checked={row.datas.key1.selected == 1 ? true : false}
						disabled={row.datas.key1.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key2', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key2')}
					checked={isCheckAll(treeData, 'key2')}
				>
					发布
				</Checkbox>
			),
			dataIndex: 'key2',
			key: 'key2',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key2, row.datas.key2.selected, row.datas, 'key2');
						}}
						checked={row.datas.key2.selected == 1 ? true : false}
						disabled={row.datas.key2.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key3', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key3')}
					checked={isCheckAll(treeData, 'key3')}
				>
					编辑
				</Checkbox>
			),
			dataIndex: 'key3',
			key: 'key3',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key3, row.datas.key3.selected, row.datas, 'key3');
						}}
						checked={row.datas.key3.selected == 1 ? true : false}
						disabled={row.datas.key3.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key4', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key4')}
					checked={isCheckAll(treeData, 'key4')}
				>
					删除
				</Checkbox>
			),
			dataIndex: 'key4',
			key: 'key4',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key4, row.datas.key4.selected, row.datas, 'key4');
						}}
						checked={row.datas.key4.selected == 1 ? true : false}
						disabled={row.datas.key4.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key5', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key5')}
					checked={isCheckAll(treeData, 'key5')}
				>
					下线
				</Checkbox>
			),
			dataIndex: 'key5',
			key: 'key5',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key5, row.datas.key5.selected, row.datas, 'key5');
						}}
						checked={row.datas.key5.selected == 1 ? true : false}
						disabled={row.datas.key5.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key6', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key6')}
					checked={isCheckAll(treeData, 'key6')}
				>
					复制
				</Checkbox>
			),
			dataIndex: 'key6',
			key: 'key6',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key6, row.datas.key6.selected, row.datas, 'key6');
						}}
						checked={row.datas.key6.selected == 1 ? true : false}
						disabled={row.datas.key6.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key7', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key7')}
					checked={isCheckAll(treeData, 'key7')}
				>
					归档
				</Checkbox>
			),
			dataIndex: 'key7',
			key: 'key7',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key7, row.datas.key7.selected, row.datas, 'key7');
						}}
						checked={row.datas.key7.selected == 1 ? true : false}
						disabled={row.datas.key7.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key8', treeData, e.target.checked);
					}}
					indeterminate={checkAll(treeData, 'key8')}
					checked={isCheckAll(treeData, 'key8')}
				>
					站群推送
				</Checkbox>
			),
			dataIndex: 'key8',
			key: 'key8',
			render: (text: any, row: any) => {
				return (
					<Checkbox
						onChange={() => {
							changeData(row.datas.key8, row.datas.key8.selected, row.datas, 'key8');
						}}
						checked={row.datas.key8.selected == 1 ? true : false}
						disabled={row.datas.key8.optional == 0 ? true : false}
					></Checkbox>
				);
			},
		},
	];

	return (
		<>
			<div className='io-cms-role-authority-column_header'>
				<Affix offsetTop={100}>
					<Button type='primary' onClick={submitData}>
						保存
					</Button>
				</Affix>
				<div className='io-cms-role-authority-column_tree'>
					<span>选择站点:</span>
					<TreeSelect
						style={{ width: '220px', display: 'inline-block' }}
						value={value}
						dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
						treeData={site}
						placeholder='请选择站点'
						treeDefaultExpandAll
						onChange={changeColumnData}
					/>
				</div>
			</div>
			<Table
				columns={columns}
				rowSelection={{ ...rowSelection, checkStrictly: true }}
				dataSource={treeData}
				pagination={false}
				rowKey={record => record.channelId}
			/>
		</>
	);
};
