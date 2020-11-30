import { logger } from '@ionia/libs';
import { Checkbox, Collapse, Row, Col, Affix, Button } from 'antd';
import React, { useState } from 'react';
import './index.less';

const { Panel } = Collapse;

function callback(key: any) {
	console.log(key);
}

const treeData = [
	{
		children: [
			{
				children: [
					{
						key: '1331776990746841089',
						title: '四级1',
						permissionFlag: 1,
						children: [],
					},
					{
						key: '1331776990746841081',
						title: '四级2',
						permissionFlag: 1,
						children: [],
					},
					{
						key: '1331776990746841082',
						title: '四级3',
						permissionFlag: 0,
						children: [],
					},
					{
						key: '1331776990746841083',
						title: '四级4',
						permissionFlag: 0,
						children: [],
					},
				],
				key: '1331773069462675457',
				title: '二级4-三级1',
				permissionFlag: 0,
			},
			{
				key: '1331129374329577473',
				title: '二级3',
				permissionFlag: 0,
				children: [
					{
						key: '1331129374329577411',
						title: '三级1',
						permissionFlag: 0,
						children: [],
					},
					{
						key: '1331129374329577412',
						title: '三级2',
						permissionFlag: 0,
						children: [],
					},
				],
			},
			{
				key: '1331129362661023745',
				title: '二级2',
				permissionFlag: 0,
				children: [],
			},
			{
				key: '1331129325021339650',
				title: '二级1',
				permissionFlag: 0,
				children: [],
			},
		],
		key: '1329720712180531202',
		title: '顶级',
		permissionFlag: 0,
	},
	{
		key: '0',
		title: '增量菜单',
		permissionFlag: 1,
		children: [],
	},
];

//获取选中的子级节点
function getKey(arr: any, ids: string[] = []) {
	arr.forEach(({ key, children }: any) => {
		if (key) {
			ids.push(key);
		}
		if (children && children.length > 0) {
			getKey(children, ids);
		}
	});
	return ids;
}

/**
 * 改变子级的复选框
 */

function changeFlag(arr: any, e?: any) {
	console.log(e.target.checked);
	arr.forEach((item: any) => {
		e.target.checked ? (item.permissionFlag = 1) : (item.permissionFlag = 0);
		if (item.children.length > 0) {
			changeFlag(item.children);
		}
	});
}

/**
 * 一级判断子级是否选中
 * 全选或者全部没选 则是false 有个别则是半选
 */

function isChecked(arr: any) {}

/**
 * 二级判断子级是否选中
 * 全选或者全部没选 则是false 有个别则是半选
 */

function isCheck(arr: any) {
	let obj = arr.find((t: any) => t.permissionFlag == 0);
	let a = arr.find((t: any) => t.permissionFlag == 1);
	return obj && a ? true : false;
}

/**
 *
 * @param arr
 * @param item
 * 二级判断是否全选
 */

function isCheckAll(arr: any, item: any) {
	if (arr.length > 0) {
		let a = arr.find((t: any) => t.permissionFlag == 0);
		return a ? false : true;
	} else {
		if (item.permissionFlag == 1) {
			return true;
		} else {
			return false;
		}
	}
}

function Check(data: any) {
	let arr: any[] = [];
	if (data.children.length > 0) {
		// data.children.map((item: any) => {
		// 	arr.push(item.permissionFlag == 0);
		// 	if (item.children.length > 0) {
		// 		item.children.map((i: any) => {
		// 			arr.push(i.permissionFlag == 0);
		// 		});
		// 	}
		// });
		// console.log(arr);
		// let flag = arr.findIndex(value => value == true);
		// if (flag == -1) {
		// 	return true;
		// }
		// if (arr.findIndex(value => value == false)) {
		// 	return false;
		// }
		return false;
	} else {
		if (data.permissionFlag == 1) {
			return true;
		} else {
			return false;
		}
	}
}

/**
 *
 * @param node
 * 递归循环获取想要的数据
 */
interface treeItem {
	title: string;
	key: string;
	children: treeItem[];
	permissionFlag: number;
}
// const treeData: treeItem[] = tree1;

export default ({ rolekey }: any) => {
	const [tree, setTree] = useState<treeItem[]>(treeData);
	//改变每个功能的按钮的值
	function onChange(row: any, data: number, e: any) {
		e.target.checked ? (row.permissionFlag = 1) : (row.permissionFlag = 0);
		console.log(row);
	}
	const submitData = () => {
		logger.debug(tree);
	};

	/**
	 * @param data
	 * 判断是否有子级
	 * 如果没有 直接修改值以及状态
	 */

	function changeAll(data: any, permissionFlag: number) {
		data.map((item: any) => {
			item.permissionFlag = permissionFlag;
			if (item.children && item.children.length > 0) {
				item.children.map((i: any) => {
					i.permissionFlag = permissionFlag;
					if (i.children && i.children.length > 0) {
						i.children.map((o: any) => {
							o.permissionFlag = permissionFlag;
						});
					}
				});
			}
		});
		setTree([...tree]);
	}

	/**
	 *是否已选
	 */
	const isChecked = (list: any, length: number) => {
		const arr = list.flat(length);
		const checkList = list.filter((item: treeItem) => item.permissionFlag == 0);
		if (checkList.length == arr.length) {
			return true;
		} else {
			return false;
		}
	};
	return (
		<>
			<Affix offsetTop={100}>
				<Button type='primary' onClick={submitData}>
					保存
				</Button>
			</Affix>
			<div className='io_cms_role_authority-site_check'>
				<Checkbox
					onChange={e => {
						let permissionFlag = e.target.checked ? 1 : 0;
						changeAll(tree, permissionFlag);
					}}
				>
					全选
				</Checkbox>
				<Checkbox>全部展开</Checkbox>
			</div>
			<Collapse
				defaultActiveKey={['1']}
				onChange={callback}
				className='io_cms_role_authority-menu_collapse'
			>
				{tree.map(item => {
					return (
						<Panel
							header={
								<div
									onClick={e => {
										if (e.stopPropagation) e.stopPropagation();
									}}
								>
									<Checkbox
										checked={Check(item)}
										onChange={() => {
											if (item.permissionFlag == 1) {
												item.permissionFlag = 0;
											} else {
												item.permissionFlag = 1;
											}
											if (item.children.length > 0) {
												changeAll(item.children, item.permissionFlag);
											}
											setTree([...tree]);
										}}
									>
										{item.title}
									</Checkbox>
								</div>
							}
							key='1'
							showArrow={item.children?.length > 0}
						>
							<Row gutter={[24, 24]}>
								{item.children?.map(i => {
									return (
										<Col
											span={8}
											className='io_cms_role_authority-menu_collapse-panel'
											key={i.key}
										>
											<div className='io_cms_role_authority-menu_collapse-panel_title'>
												<Checkbox
													indeterminate={isCheck(i.children)}
													checked={isCheckAll(i.children, i)}
													onChange={e => {
														if (i.children.length > 0) {
															changeFlag(i.children, e);
														} else {
															i.permissionFlag == 1
																? (i.permissionFlag = 0)
																: (i.permissionFlag = 1);
														}
														setTree([...tree]);
													}}
												>
													{i.title}
												</Checkbox>
											</div>
											<Row>
												{i.children?.map((o: any, index: any) => {
													return (
														<Col span={8}>
															<Checkbox
																onChange={e => {
																	onChange(
																		o,
																		o.permissionFlag,
																		e
																	);
																	setTree([...tree]);
																}}
																key={index}
																checked={
																	o.permissionFlag == 1
																		? true
																		: false
																}
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
				{/* <Panel header='This is panel header 1' key='1'>
				<p>{text}</p>
			</Panel> */}
			</Collapse>
		</>
	);
};
