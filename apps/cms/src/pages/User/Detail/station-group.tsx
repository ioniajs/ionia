import { DownOutlined } from '@ant-design/icons';
import { logger, userDetailTree, userAddModJurisdiction } from '@ionia/libs';
import { Affix, Button, Checkbox, message, Modal, Tree } from 'antd';
import React, { useEffect, useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';

const { confirm } = Modal;

export default ({ id }: { id: string }) => {
	useRequest(() => userDetailTree(id), {
		onSuccess: data => {
			const treeData = filterData(data.data.vos);
			setData(treeData);
		},
	});
	const { run } = useRequest(() => userAddModJurisdiction({ userId: id, siteIds: checkedKeys }), {
		manual: true,
	});
	const [data, setData] = useState([]);
	const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
	const [checkedKeys, setCheckedKeys] = useState<any[]>([]);
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
	const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
	const [checked, setChecked] = useState<boolean>(false);
	const [selectChecked, setSelectChecked] = useState<boolean>(true);
	const [top, setTop] = useState(100);

	useEffect(() => {
		setExpandedKeys(getKey(data));
		getDefaultValue(data);
	}, [data]);

	const s = new Set<string[]>();
	//点击复选框触发
	const onCheck = (value: any, info: any) => {
		console.log(value);
		// let arr = value.checked;
		value.forEach((item: any) => {
			if (s.has(item)) {
				s.delete(item);
			} else {
				s.add(item);
			}
		});
		let arr1 = Array.from(s);
		setCheckedKeys(arr1);
	};

	/*
	 * 处理数据结构
	 * */

	const filterData = (list: any) => {
		return list.map((item: any) => {
			item.title = item.name;
			item.key = item.id;
			item.disableCheckbox = !item.optional;
			if (item.children && item.children.length > 0) {
				item.children = filterData(item.children);
			}
			return item;
		});
	};

	/*
	 * 获取初始选中的值
	 * */
	const getDefaultValue = (list: any) => {
		// checkedKeys
		list.map((item: any) => {
			if (item.selected == true) {
				checkedKeys.push(item.id);
			}
			if (item.children && item.children.length > 0) {
				getDefaultValue(item.children);
			}
		});
	};

	//获取数据下的子级节点
	function getKey(arr: any, ids: string[] = []) {
		arr.forEach(({ key, children, optional }: any) => {
			if (key && optional) {
				ids.push(key);
			}
			if (children && children.length > 0) {
				getKey(children, ids);
			}
		});
		return ids;
	}

	//展开
	const onExpand = (expandedKeys: any) => {
		setExpandedKeys(expandedKeys);
		setAutoExpandParent(false);
	};
	/**
	 * 全选
	 */
	const changeAll = () => {
		const allIds = getKey(data);
		if (!checked) {
			setCheckedKeys(allIds);
			setChecked(true);
		} else {
			setCheckedKeys([]);
			setChecked(false);
		}
	};
	/**
	 * 全部展开
	 */
	const selectAll = () => {
		const allIds = getKey(data);
		if (!selectChecked) {
			setExpandedKeys(allIds);
			setSelectChecked(true);
		} else {
			setExpandedKeys([]);
			setSelectChecked(false);
		}
	};

	/**
	 * 确认框
	 */
	const showConfirm = () => {
		confirm({
			title: '提示',
			icon: <ExclamationCircleOutlined />,
			content: '保存后可能会影响当前登录用户的权限，是否确认保存？',
			onOk() {
				return new Promise((resolve, reject) => {
					run().then(res => {
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
	return (
		<div className='io-cms-role-authority_site-group'>
			<Affix offsetTop={top}>
				<Button type='primary' onClick={showConfirm}>
					保存
				</Button>
			</Affix>
			<div className='io-cms-role-authority-site_check'>
				<Checkbox onChange={changeAll} checked={checked}>
					全选
				</Checkbox>
				<Checkbox onChange={selectAll} checked={selectChecked}>
					全部展开
				</Checkbox>
			</div>
			<Tree
				checkable
				expandedKeys={expandedKeys}
				selectedKeys={selectedKeys}
				checkedKeys={checkedKeys}
				onExpand={onExpand}
				onCheck={onCheck}
				treeData={data}
				switcherIcon={<DownOutlined />}
				showIcon
				selectable={false}
				autoExpandParent={autoExpandParent}
				blockNode
				titleRender={(nodeData: any) => {
					if (nodeData.children && nodeData.children.length > 0) {
						return (
							<div
								onClick={e => e.stopPropagation()}
								className='io-cms-role-authority-site_title'
							>
								<i
									className={`iconfont icon-apartment ${
										nodeData.isCheck ? 'active' : ''
									}`}
									title='选中下级'
									onClick={() => {
										const keys = getKey(nodeData.children);
										// if (keys.length > 0) {
										// 	keys.push(String(nodeData.key));
										// }
										if (!nodeData.isCheck) {
											setCheckedKeys(checkedKeys.concat(keys));
											s.add(keys);
											nodeData.isCheck = true;
										} else {
											const newKey = checkedKeys.filter(function (item) {
												return keys.indexOf(item) < 0;
											});
											s.clear();
											s.add(newKey);
											logger.debug('s', s);
											setCheckedKeys(newKey);
											nodeData.isCheck = false;
										}

										logger.debug(nodeData);
									}}
								/>
								<span>{nodeData.title}</span>
							</div>
						);
					} else {
						return (
							<div>
								{nodeData.title}{' '}
								{nodeData.id == 0 && (
									<i
										className='iconfont icon-info-circle'
										title='增量站点指当前设置 保存后新增加的站点'
										style={{ cursor: 'pointer' }}
									/>
								)}
							</div>
						);
					}
				}}
			/>
		</div>
	);
};
