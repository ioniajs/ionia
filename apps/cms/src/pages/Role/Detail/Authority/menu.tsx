import { logger } from '@ionia/libs';
import { useMount, useSet } from 'ahooks';
import { Checkbox, Collapse, Row, Col, Affix, Button } from 'antd';
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

const treeData: treeItem[] = [
	{
		children: [
			{
				children: [
					{
						key: '141',
						title: '四级1',
						permissionFlag: 1,
						children: [],
					},
					{
						key: '142',
						title: '四级2',
						permissionFlag: 1,
						children: [],
					},
					{
						key: '143',
						title: '四级3',
						permissionFlag: 0,
						children: [],
					},
					{
						key: '144',
						title: '四级4',
						permissionFlag: 0,
						children: [],
					},
				],
				key: '14',
				title: '二级4-三级1',
				permissionFlag: 0,
			},
			{
				key: '13',
				title: '二级3',
				permissionFlag: 0,
				children: [
					{
						key: '131',
						title: '三级1',
						permissionFlag: 1,
						children: [],
					},
					{
						key: '132',
						title: '三级2',
						permissionFlag: 0,
						children: [],
					},
				],
			},
			{
				key: '12',
				title: '二级2',
				permissionFlag: 1,
				children: [],
			},
			{
				key: '11',
				title: '二级1',
				permissionFlag: 0,
				children: [],
			},
		],
		key: '1',
		title: '顶级',
		permissionFlag: 0,
	},
	{
		key: '2',
		title: '系统设置',
		permissionFlag: 0,
		children: [
			{
				key: '21',
				title: '系统设置二级2',
				permissionFlag: 0,
				children: [
					{
						key: '211',
						title: '系统设置三级2',
						permissionFlag: 1,
						children: [],
					},
					{
						key: '212',
						title: '系统设置三级1',
						permissionFlag: 0,
						children: [],
					},
				],
			},
			{
				key: '22',
				title: '系统设置二级1',
				permissionFlag: 0,
				children: [],
			},
		],
	},
	{
		key: '0',
		title: '增量菜单',
		permissionFlag: 1,
		children: [],
	},
];

export default ({ rolekey }: any) => {
	const [activeKey, setActiveKey] = useState<string[]>([]);
	const [checkedKeys, { add, has, remove, reset }] = useSet<string>([]);

	useMount(() => {
		getDefaultList(treeData);
	});

	/**
	 * 获取初始选中的值
	 */

	const getDefaultList = (data: any) => {
		data.map(({ permissionFlag, key, children }: any) => {
			if (permissionFlag == 1) {
				add(key);
			}
			if (children.length > 0) {
				getDefaultList(children);
			}
		});
	};

	/**
	 * 修改选中
	 *
	 */
	const changeCheck = (item: any, e: any, parent?: any) => {
		let flag;
		if (has(item.key)) {
			remove(item.key);
			flag = false;
		} else {
			add(item.key);
			flag = true;
		}
		if (item.children.length > 0) {
			checkAll(flag, item.children);
		} else {
			let isTrue = isParentCheck(parent);
			logger.debug('isTrue', isTrue);
			if (isTrue) {
				add(parent.key);
			}
		}
	};

	/**
	 *
	 * @param data
	 * @param ids
	 *
	 * 判断兄弟节点是否已选 上级是否为已选
	 */

	const isParentCheck = (data: any) => {
		let isFlag = true;
		const isHasKey = (list: any) => {
			list.forEach((element: any) => {
				if (!has(element.key)) {
					console.log('element.key', element.key);
					isFlag = false;
				}
				if (element.children && element.children.length) {
					isHasKey(element.children);
				}
			});
		};
		isHasKey(data);
		return isFlag;
	};

	/**
	 * @param data
	 * @param ids
	 * 获取数组中的KEY
	 */
	const loop = (data: any, ids: string[] = []) => {
		data.forEach(({ key, children }: any) => {
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

	/**
	 *
	 * @param data
	 *  判断是否是全选
	 */

	const isAll = () => {
		logger.debug('Array1', checkedKeys);
		logger.debug('Array', Array.from(checkedKeys).length == loop(treeData).length);
		return true;
	};

	//全部伸缩和展开
	const onSelect = (e: any) => {
		logger.debug(e.target.checked);
		let activeKey: string[] = [];
		treeData.map((item: any) => {
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
						checkAll(e, treeData);
					}}
					indeterminate={Array.from(checkedKeys).length != loop(treeData).length}
					checked={isAll()}
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
				{treeData.map(item => {
					return (
						<Panel
							header={
								<div
									onClick={e => {
										if (e.stopPropagation) e.stopPropagation();
									}}
								>
									<Checkbox
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
								{item.children?.map(i => {
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
												{i.children?.map((o: any, index: any) => {
													return (
														<Col span={8}>
															<Checkbox
																checked={has(o.key)}
																onChange={e => {
																	changeCheck(o, e, i.children);
																}}
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
