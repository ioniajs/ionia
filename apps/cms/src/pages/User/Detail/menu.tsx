import { logger, userMenuShow, MenuAuthVO, userMenuMod } from '@ionia/libs';
import { useRequest } from 'ahooks';
import { Affix, Button, Checkbox, Col, Collapse, Row, Tooltip, Spin } from 'antd';
import React, { useState } from 'react';
import './index.less';

const { Panel } = Collapse;

export default ({ userId }: any) => {
	const [tree, setTree] = useState<MenuAuthVO[]>([]);
	const [activeKey, setActiveKey] = useState<string[]>([]);
	const [dataId, setDataId] = useState<string[]>([]);
	const [show, setShow] = useState<boolean>(true);
	useRequest(() => userMenuShow({ userId }), {
		onSuccess: data => {
			data.data ? setTree(data.data) : setTree([]);
			setTree(data.data);
			const ids = allOpen(data.data);
			setActiveKey(ids);
			setShow(false);
		},
	});

	const { run } = useRequest(() => userMenuMod({ dataId, id: userId }), {
		manual: true,
	});

	const submitData = () => {
		const ids = getData(tree);
		setDataId(ids);
		run().then(res => {
			console.log(res);
		});
	};
	const getData = (data: any) => {
		let list = data.filter((u: any) => u.permissionFlag == 1);
		let ids: string[] = [];
		const loop = (list: any) => {
			list.map((item: any) => {
				if (item.permissionFlag == 1) {
					ids.push(item.key);
				}
				if (item.children) {
					loop(item.children);
				}
			});
		};
		loop(list);
		return ids;
	};

	//过滤数据 获取可选的数据
	const getAvailableData = (list: any, ids: number[] = []) => {
		list?.filter((u: any) => u.operatingFlag == 1).map((item: any) => {
			ids.push(item.permissionFlag);
			if (item.children) {
				getAvailableData(item.children, ids);
			}
		});
		return ids;
	};

	//二级判断子级是否全部选中 ==>半选
	const isChildrenAll = (data: any) => {
		let flag: boolean = false;
		if (data.children) {
			const loop = (parent: any) => {
				let ids: any[] = [];
				parent.map((item: any) => {
					if (item.operatingFlag == 1) {
						ids.push(item);
					}
					let flag1 = ids.filter(t => t.permissionFlag == 1);
					let flag2 = ids.filter(t => t.permissionFlag == 0);
					if (flag1.length > 0 && flag2.length > 0) {
						flag = true;
					}
				});
			};
			loop(data.children);
			return flag;
		} else {
			return false;
		}
	};

	//判断是否全部选中子级
	const childrenAll = (data: any) => {
		let flag: boolean = true;
		if (data.children) {
			const loop = (parent: any) => {
				parent.map((item: any) => {
					if (item.operatingFlag == 1 && item.permissionFlag == 0) {
						flag = false;
					}
				});
			};
			loop(data.children);
			return flag;
		} else {
			return data.permissionFlag == 1;
		}
	};

	//最子级选中
	const selectSelf = (self: any, parent: any, ancestor: any, flag: boolean) => {
		flag ? (self.permissionFlag = 1) : (self.permissionFlag = 0);
		if (parent) {
			let flag1 = parent.children
				.filter((t: any) => t.operatingFlag == 1)
				.filter((i: any) => i.permissionFlag == 1);
			if (flag1.length > 0) {
				parent.permissionFlag = 1;
			} else {
				parent.permissionFlag = 0;
			}
		}
		if (ancestor.children) {
			const ids = getAvailableData(ancestor.children);
			let flag2 = ids
				.filter((t: any) => t.operatingFlag == 1)
				.filter((i: any) => i.permissionFlag == 1);
			if (flag2.length > 0) {
				ancestor.permissionFlag = 1;
			} else {
				ancestor.permissionFlag = 0;
			}
		}
		setTree([...tree]);
	};

	//全部展开
	const allOpen = (data: any) => {
		let ids: string[] = [];
		data.map((item: any) => {
			if (item.key != 0) {
				ids.push(item.key);
			}
		});
		return ids;
	};

	const checkedAll = (list: any, flag: boolean) => {
		if (list.children) {
			const loop = (data: any) => {
				data.map((item: any) => {
					if (item.operatingFlag == 1) {
						if (flag) {
							item.permissionFlag = 1;
							list.permissionFlag = 1;
						} else {
							item.permissionFlag = 0;
							list.permissionFlag = 0;
						}
					}
					if (item.children) {
						loop(item.children);
					}
				});
			};
			loop(list.children);
		} else {
			flag ? (list.permissionFlag = 1) : (list.permissionFlag = 0);
		}
		setTree([...tree]);
	};

	const isCheckAllFirst = (data: any) => {
		let flag: boolean = true;
		if (data.children) {
			const ids = getAvailableData(data.children);
			ids.map(item => {
				if (item == 0) {
					flag = false;
				}
			});
			return flag;
		} else {
			return data.permissionFlag == 1;
		}
	};
	const checkNoAllFirst = (data: any) => {
		let flag: boolean = false;
		if (data.children) {
			const ids = getAvailableData(data.children);
			let arr1 = ids.filter(t => t == 1);
			let arr2 = ids.filter(t => t == 0);
			if (arr1.length > 0 && arr2.length > 0) {
				flag = true;
			}
			return flag;
		} else {
			return false;
		}
	};
	const checkAll = (data: any) => {
		let flag: boolean = true;
		const ids = getAvailableData(data);
		ids.map(item => {
			if (item == 0) {
				flag = false;
			}
		});
		return flag;
	};
	const isCheckAll = (data: any) => {
		let flag: boolean = false;
		const ids = getAvailableData(data);
		let arr1 = ids.filter(t => t == 1);
		let arr2 = ids.filter(t => t == 0);
		if (arr1.length > 0 && arr2.length > 0) {
			flag = true;
		}
		return flag;
	};

	const callback = (data: any, flag: boolean) => {
		const ids = allOpen(data);
		flag ? setActiveKey(ids) : setActiveKey([]);
	};
	const changeActiveKey = (key: any) => {
		setActiveKey(key);
	};
	return (
		<>
			<Affix offsetTop={100}>
				<Button type='primary' onClick={submitData}>
					保存
				</Button>
			</Affix>
			<div className='io-cms-role-authority-site_check'>
				<Checkbox checked={checkAll(tree)} indeterminate={isCheckAll(tree)}>
					全选
				</Checkbox>
				<Checkbox
					onChange={e => {
						callback(tree, e.target.checked);
					}}
				>
					全部展开
				</Checkbox>
			</div>
			{show && (
				<div className='io-cms-role-authority_example'>
					<Spin tip='加载中...'></Spin>
				</div>
			)}
			<Collapse
				className='io_cms_role_authority-menu_collapse'
				bordered={false}
				activeKey={activeKey}
				onChange={changeActiveKey}
			>
				{tree.map((item: any) => {
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
										disabled={item.operatingFlag == 0}
										onChange={e => {
											checkedAll(item, e.target.checked);
										}}
										checked={isCheckAllFirst(item)}
										indeterminate={checkNoAllFirst(item)}
									>
										{/* {item.name} */}
										{item.key != 0 ? (
											item.name
										) : (
											<span>
												<span style={{ marginRight: '8px' }}>
													{item.name}
												</span>
												<i
													className='iconfont icon-info-circle'
													title='增量菜单指当前设置 保存后新增加的菜单'
													style={{ cursor: 'pointer' }}
												/>
											</span>
										)}
									</Checkbox>
								</div>
							}
							showArrow={item.children?.length > 0}
							key={item.key}
						>
							<Row gutter={[16, 16]}>
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
														disabled={i.operatingFlag == 0}
														indeterminate={isChildrenAll(i)}
														checked={childrenAll(i)}
														onChange={e => {
															checkedAll(i, e.target.checked);
														}}
													>
														{i.name}
													</Checkbox>
												</div>
												<Row
													className='io-cms-role-authority-menu_content'
													gutter={[16, 16]}
												>
													{i.children?.map((o: any) => {
														return (
															<Col
																span={8}
																key={o.key}
																className='io-cms-role-authority-menu_item'
															>
																<Checkbox
																	checked={o.permissionFlag == 1}
																	//点击的时候 判断是否有父级 有父级将父级加进去 没有则不加 移除的时候判断其他是否移除 有移除就将父级移除
																	onChange={e => {
																		selectSelf(
																			o,
																			i,
																			item,
																			e.target.checked
																		);
																	}}
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
												key={t.key}
												className='io-cms-role-authority-menu_item'
											>
												<Checkbox
													checked={t.permissionFlag == 1}
													onChange={e => {
														selectSelf(t, item, '', e.target.checked);
													}}
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
