import { logger, roleMenuShow } from '@ionia/libs';
import { useSet, useRequest } from 'ahooks';
import { Affix, Button, Checkbox, Col, Collapse, Row } from 'antd';
import React, { useState } from 'react';
import './index.less';

const { Panel } = Collapse;

function callback(key: any) {
	console.log(key);
}

interface treeItem {
	title: string;
	key: string;
	children: treeItem[];
	permissionFlag: number;
}

export default ({ roleId }: any) => {
	const [, setActiveKey] = useState<string[]>([]);
	const [checkedKeys, { add, has, remove }] = useSet<string>([]);

	const [treeData, setTreeData] = useState([]);
	const { data } = useRequest(() => roleMenuShow(roleId), {
		onSuccess: data => {
			getDefaultList(data?.data);
			const tree = getParent(data?.data);
			setTreeData(tree);
		},
	});
	// const treeData = data?.data ?? [];

	/**
	 * 获取初始选中的值
	 */

	const getDefaultList = (data: any) => {
		data?.map(({ permissionFlag, key, children }: any) => {
			if (permissionFlag == 1) {
				add(key);
			}
			if (children.length > 0) {
				getDefaultList(children);
			}
		});
	};
	/**
	 * 获取父级
	 */
	const getParent = (data: any, parent?: any) => {
		return (
			data &&
			data.map((n: any) => {
				if (n && n.children) {
					n.children = getParent(n.children, n);
				}
				return {
					...n,
					parent,
				};
			})
		);
	};

	/**
	 * 修改选中
	 *先判断是否存在set中   存在 移除自己和子级         判断兄弟节点是否存在 全部存在 就存  不然就移除父级
                          不存在 添加自己+子级        判断兄弟节点是否存在 全部存在 就存  不然就移除父级
	 */
	const changeCheck = (item: any, e?: any, data?: any) => {
		logger.debug('item', item);
		logger.debug('checkedKeys', checkedKeys);
		let flag;
		if (has(item.key)) {
			remove(item.key);
			flag = false;
			if (item.children && item.children.length > 0) {
				checkAll(flag, item.children);
			}
		} else {
			add(item.key);
			flag = true;
			if (item.children && item.children.length > 0) {
				checkAll(flag, item.children);
			}
		}
		if (item.parent && item.parent.children) {
			let selArr = item.parent.children.filter((t: any) => has(t.key));
			logger.debug('selArr', selArr);
			if (selArr.length == item.parent.children.length) {
				// 全选
				logger.debug('selArrLength', selArr.length === item.parent.children.length);
				add(item.parent.key);
			} else if (selArr.length) {
				// 半选
				logger.debug('selArrLength2', checkedKeys);
				// add(item.parent.key);
			} else {
				logger.debug('selArrLength3', has(item.parent.key));
				if (has(item.parent.key)) {
					remove(item.parent.key);
				}
			}
		}
	};

	/**
	 * @param data
	 * @param ids
	 * 获取数组中的KEY
	 */
	const loop = (data: any, ids: string[] = []) => {
		data?.forEach(({ key, children }: any) => {
			if (key) {
				ids.push(key);
			}
			if (children && children.length > 0) {
				loop(children, ids);
			}
		});
		return ids;
	};

	/**
	 * 全选
	 */
	const checkAll = (flag: any, data: any) => {
		const ids: string[] = loop(data);
		ids.map(item => {
			if (flag) {
				add(item);
			} else {
				remove(item);
			}
		});
		// logger.debug('checkedKeys', checkedKeys);
	};

	//全部伸缩和展开
	const onSelect = (e: any) => {
		logger.debug(e.target.checked);
		let activeKey: string[] = [];
		treeData?.map((item: any) => {
			activeKey.push(item.key);
		});
		logger.debug('activeKeys', activeKey);
		setActiveKey(['0']);
		logger.debug(activeKey);
	};

	return (
		<>
			<Affix offsetTop={100}>
				<Button type='primary'>保存</Button>
			</Affix>
			<div className='io_cms_role_authority-site_check'>
				<Checkbox
					onChange={e => {
						checkAll(e.target.checked, treeData);
					}}
					indeterminate={
						checkedKeys.size != loop(treeData).length && checkedKeys.size > 0
					}
					checked={checkedKeys.size == loop(treeData).length && checkedKeys.size > 0}
				>
					全选
				</Checkbox>
				<Checkbox onChange={onSelect}>全部展开</Checkbox>
			</div>
			<Collapse
				onChange={callback}
				className='io_cms_role_authority-menu_collapse'
				// activeKey={activeKey}
			>
				{treeData?.map((item: any) => {
					return (
						<Panel
							header={
								<div
									onClick={e => {
										if (e.stopPropagation) e.stopPropagation();
									}}
								>
									<Checkbox
										key={item.key}
										onChange={e => {
											changeCheck(item, e);
										}}
										checked={has(item.key)}
										// indeterminate={!has(item.key)}
									>
										{item.title}
									</Checkbox>
								</div>
							}
							showArrow={item.children?.length > 0}
							key={item.key}
						>
							<Row gutter={[24, 24]}>
								{item.children?.map((i: any) => {
									return (
										<Col
											span={8}
											className='io_cms_role_authority-menu_collapse-panel'
											key={i.key}
										>
											<div className='io_cms_role_authority-menu_collapse-panel_title'>
												<Checkbox
													checked={has(i.key)}
													// indeterminate={!has(i.key)}
													onChange={e => {
														changeCheck(i, e, item.children);
													}}
												>
													{i.title}
												</Checkbox>
											</div>
											<Row>
												{i.children?.map((o: any) => {
													return (
														<Col span={8}>
															<Checkbox
																checked={has(o.key)}
																onChange={e => {
																	changeCheck(o, e, i.children);
																}}
																key={o.key}
															>
																{o.title}
															</Checkbox>
														</Col>
													);
												})}
											</Row>
										</Col>
									);
								})}
							</Row>
						</Panel>
					);
				})}
			</Collapse>
		</>
	);
};
