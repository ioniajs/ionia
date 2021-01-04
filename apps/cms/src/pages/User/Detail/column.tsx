import { logger, userGainCloumn, RoleChannelVO, gainSiteTree, addColumnUser } from '@ionia/libs';
import { Affix, Button, Checkbox, message, Modal, Table, TreeSelect } from 'antd';
import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
export default ({ userId }: { userId: string }) => {
	const { data, run } = useRequest(() => userGainCloumn({ id: userId, siteId: value }), {
		manual: true,
	});
	const [tree, setTree] = useState<RoleChannelVO[]>([]);
	const [value, setValue] = useState<string | any>(undefined);
	const [site, setSite] = useState([]);
	const siteTree = useRequest(() => gainSiteTree(), {
		onSuccess: data => {
			const siteData = filterData(data?.data.list);
			setSite(siteData);
		},
	});
	const addData = useRequest(() => addColumnUser({ list: tree, siteId: value, id: userId }), {
		manual: true,
	});
	const submitData = () => {
		confirm({
			title: '提示',
			icon: <ExclamationCircleOutlined />,
			content: '保存后可能会影响当前登录用户的权限，是否确认保存？',
			onOk() {
				return new Promise((resolve, reject) => {
					addData.run().then(res => {
						const { code } = res;
						if (code == 200) {
							message.success(res.message);
							resolve();
						}
					});
				}).catch(() => console.log('Oops errors!'));
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	useEffect(() => {
		if (value) {
			run().then(res => {
				setTree(res.data);
			});
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
		setTree([...tree]);
	};

	/**
	 *
	 * @param list
	 * @param list
	 * @param items
	 * @param items
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
	 * @param ids
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
		return flag != -1 && flag1 != -1;
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
		return flag == -1 && ids.length > 0;
	};

	const rowCheckAll = (list: any) => {
		let flag: boolean = true;
		if (list.children) {
			const loop = (data: any) => {
				for (const key in data.datas) {
					if (data.datas[key].optional == 1) {
						if (data.datas[key].selected == 0) {
							flag = false;
						}
					}
				}
				if (data.children) {
					data.children.map((item: any) => {
						loop(item);
						return item;
					});
				}
			};

			loop(list);
			return flag;
		} else {
			let isSelect: boolean = true;
			Object.keys(list.datas).forEach(t => {
				if (list.datas[t].optional == 1) {
					if (list.datas[t].selected !== 1) {
						isSelect = false;
					}
				}
			});
			return isSelect;
		}
	};

	const rowCheck = (list: any) => {
		if (list.children) {
			let ids: number[] = [];
			let flag;
			let flag2;
			const loop = (data: any) => {
				for (const key in data.datas) {
					if (data.datas[key].optional == 1) {
						ids.push(data.datas[key].selected);
					}
				}
				if (data.children) {
					data.children.forEach((item: any) => {
						loop(item);
					});
				}
			};
			loop(list);
			flag = ids.findIndex(t => t == 1) != -1;
			flag2 = ids.findIndex(t => t == 0) != -1;
			return flag && flag2;
		} else {
			let flag;
			let flag2;
			let ids: number[] = [];
			Object.keys(list.datas).forEach(t => {
				if (list.datas[t].optional == 1) {
					ids.push(list.datas[t].selected);
				}
			});
			flag = ids.findIndex(t => t == 1) != -1;
			flag2 = ids.findIndex(t => t == 0) != -1;
			return flag && flag2;
		}
	};

	const selectRow = (list: any, checked: boolean) => {
		console.log(checked);
		const loop = (row: any) => {
			for (const treeKey in row.datas) {
				if (row.datas[treeKey].optional == 1) {
					checked ? (row.datas[treeKey].selected = 1) : (row.datas[treeKey].selected = 0);
				}
			}
			if (row.children) {
				row.children.forEach((item: any) => {
					loop(item);
				});
			}
		};
		loop(list);
		setTree([...tree]);
	};

	// rowSelection objects indicates the need for row selection
	const rowSelection = {
		renderCell: (checked: any, record: any) => {
			return (
				<Checkbox
					checked={rowCheckAll(record)}
					indeterminate={rowCheck(record)}
					onChange={e => {
						selectRow(record, e.target.checked);
					}}
				/>
			);
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
			setTree([...tree]);
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
							className='iconfont icon-apartment'
							title='选中下级/取消下级'
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
								setTree([...tree]);
							}}
						/>
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
						/>
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
						changeAll('key0', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key0')}
					checked={isCheckAll(tree, 'key0')}
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
						checked={row.datas.key0.selected == 1}
						disabled={row.datas.key0.optional == 0}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key1', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key1')}
					checked={isCheckAll(tree, 'key1')}
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
						checked={row.datas.key1.selected == 1}
						disabled={row.datas.key1.optional == 0}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key2', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key2')}
					checked={isCheckAll(tree, 'key2')}
				>
					编辑
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
						checked={row.datas.key2.selected == 1}
						disabled={row.datas.key2.optional == 0}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key3', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key3')}
					checked={isCheckAll(tree, 'key3')}
				>
					删除
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
						checked={row.datas.key3.selected == 1}
						disabled={row.datas.key3.optional == 0}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key4', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key4')}
					checked={isCheckAll(tree, 'key4')}
				>
					复制
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
						checked={row.datas.key4.selected == 1}
						disabled={row.datas.key4.optional == 0}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key5', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key5')}
					checked={isCheckAll(tree, 'key5')}
				>
					类似新建
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
						checked={row.datas.key5.selected == 1}
						disabled={row.datas.key5.optional == 0}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key6', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key6')}
					checked={isCheckAll(tree, 'key6')}
				>
					合并
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
						checked={row.datas.key6.selected == 1}
						disabled={row.datas.key6.optional == 0}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key7', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key7')}
					checked={isCheckAll(tree, 'key7')}
				>
					权限分配
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
						checked={row.datas.key7.selected == 1}
						disabled={row.datas.key7.optional == 0}
					/>
				);
			},
		},
		{
			title: (
				<Checkbox
					onChange={e => {
						changeAll('key8', tree, e.target.checked);
					}}
					indeterminate={checkAll(tree, 'key8')}
					checked={isCheckAll(tree, 'key8')}
				>
					开启/关闭
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
						checked={row.datas.key8.selected == 1}
						disabled={row.datas.key8.optional == 0}
					/>
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
				dataSource={tree}
				pagination={false}
				rowKey={record => record.channelId}
			/>
		</>
	);
};
