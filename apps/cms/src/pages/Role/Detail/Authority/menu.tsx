import { logger, roleMenuShow } from '@ionia/libs';
import { useSet, useRequest } from 'ahooks';
import { Affix, Button, Checkbox, Col, Collapse, Row, Tooltip } from 'antd';
import React, { useState } from 'react';
import './index.less';

const { Panel } = Collapse;

// const dataList: any[] = [];

export default ({ roleId }: any) => {
	// const [checkedKeys, setCheckedKeys] = useState<Set<string>>(new Set());
	const [checkedKeys, { add, has, remove, reset }] = useSet<string[]>([]);
	const [allKeys, setAllKeys] = useState<string[]>([]);
	const { data } = useRequest(() => roleMenuShow({ roleId }), {
		onSuccess: data => {
			const ids = getDefaultData(data.data);
			setAllKeys(ids);
		},
	});

	//过滤数据 获取可选的数据
	const getAvailableData = (list: any) => {
		return list
			.filter((u: any) => u.operatingFlag == 1)
			.map((item: any) => {
				if (item.children) {
					item.children = getAvailableData(item.children);
				}
				return item;
			});
	};

	// 一级判断子级是否全部选中

	//二级判断子级是否全部选中 ==>半选
	const isChildrenAll = (data: any) => {
		if (data.children && data.children.length > 0) {
			let flag1;
			let flag2;
			let list = data.children.filter((t: any) => t.operatingFlag == 1);
			list.map((o: any) => {
				if (!has(o.key)) {
					flag1 = true;
				} else {
					flag2 = true;
				}
			});
			return !!(flag2 && flag1);
		} else {
			return false;
		}
	};

	//判断选中子级
	const childrenAll = (data: any) => {
		if (data.children && data.children.length > 0) {
			let flag: boolean = true;
			const loop = (data: any) => {
				let list = data.children.filter((t: any) => t.operatingFlag == 1);
				list.map((o: any) => {
					if (!has(o.key)) {
						flag = false;
					}
				});
				if (list.children && list.children.length) {
					list.children.map((item: any) => {
						loop(item);
					});
				}
			};

			loop(data);
			return flag;
		} else {
			return has(data.key);
		}
	};

	// 初始加载数据
	const getDefaultData = (data: any, ids: string[] = []) => {
		data.forEach((item: any) => {
			if (item.permissionFlag == 1) {
				add(item.key);
			}
			if (item.operatingFlag == 1) {
				ids.push(item.key);
			}
			if (item.children && item.children.length > 0) {
				getDefaultData(item.children, ids);
			}
		});
		return ids;
	};

	const selectSelf = (self: any, parent: any, ancestor: any) => {
		logger.debug('self', self);
		// logger.debug('parent', parent);
		// logger.debug('ancestor', ancestor);
		if (has(self)) {
			remove(self);
		} else {
			add(self);
		}
		const flag = decideParent(parent.children);
		console.log('flag', flag, checkedKeys);
	};

	const decideParent = (list: any) => {
		let flag = true;
		const loop = (data: any) => {
			data.map((t: any) => {
				if (!has(t.key)) {
					flag = false;
				}
			});
		};
		loop(list);
		return flag;
	};

	const selectChildren = (list: any) => {
		if (list.children && list.children.length > 0) {
		} else {
			if (has(list.key)) {
				remove(list.key);
			} else {
				add(list.key);
			}
		}
	};

	return (
		<>
			<Affix offsetTop={100}>
				<Button
					type='primary'
					onClick={() => {
						console.log(checkedKeys);
					}}
				>
					保存
				</Button>
			</Affix>
			<div className='io-cms-role-authority-site_check'>
				<Checkbox
					onChange={e => {
						allKeys.map((item: any) => {
							if (e.target.checked) {
								add(item);
							} else {
								remove(item);
							}
						});
					}}
					indeterminate={allKeys.length != checkedKeys.size}
					checked={allKeys.length == checkedKeys.size && checkedKeys.size > 0}
				>
					全选
				</Checkbox>
				<Checkbox onChange={() => {}}>全部展开</Checkbox>
			</div>
			<Collapse className='io_cms_role_authority-menu_collapse'>
				{data?.data?.map((item: any) => {
					return (
						// @ts-ignore
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
											selectChildren(item);
										}}
										disabled={item.operatingFlag == 0}
										// indeterminate={isChildrenAll(item)}
										checked={childrenAll(item)}
									>
										{item.name}
									</Checkbox>
								</div>
							}
							showArrow={item.children?.length > 0}
							key={item.key}
						>
							<Row gutter={[24, 24]}>
								{item.onlyTwo == 0 &&
									item.children?.map((i: any) => {
										return (
											<Col
												span={8}
												className='io_cms_role_authority-menu_collapse-panel'
												key={i.key}
											>
												<div className='io_cms_role_authority-menu_collapse-panel_name'>
													<Checkbox
														onChange={e => {
															selectChildren(i);
														}}
														disabled={i.operatingFlag == 0}
														indeterminate={isChildrenAll(i)}
														checked={childrenAll(i)}
													>
														{i.name}
													</Checkbox>
												</div>
												<Row className='io-cms-role-authority-menu_content'>
													{i.children?.map((o: any) => {
														return (
															<Col
																span={8}
																className='io-cms-role-authority-menu_item'
															>
																<Checkbox
																	checked={has(o.key)}
																	//点击的时候 判断是否有父级 有父级将父级加进去 没有则不加 移除的时候判断其他是否移除 有移除就将父级移除
																	onChange={e => {
																		selectSelf(o.key, i, item);
																		// if (has(o.key)) {
																		// 	remove(o.key);
																		// } else {
																		// 	add(o.key);
																		// }
																	}}
																	key={o.key}
																	disabled={o.operatingFlag == 0}
																>
																	<Tooltip title={o.name}>
																		<span className='io-cms-role-authority-menu_text'>
																			{o.name}
																		</span>
																	</Tooltip>
																</Checkbox>
															</Col>
														);
													})}
												</Row>
											</Col>
										);
									})}
								{item.onlyTwo == 1 &&
									item.children?.map((t: any) => {
										return (
											<Col
												span={3}
												className='io-cms-role-authority-menu_item'
											>
												<Checkbox
													checked={has(t.key)}
													onChange={e => {
														if (has(t.key)) {
															remove(t.key);
														} else {
															add(t.key);
														}
													}}
													key={t.key}
													disabled={t.operatingFlag == 0}
												>
													<Tooltip title={t.name}>
														<span className='io-cms-role-authority-menu_text'>
															{t.name}
														</span>
													</Tooltip>
												</Checkbox>
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
