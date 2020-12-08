import { logger, roleMenuShow } from '@ionia/libs';
import { useSet, useRequest } from 'ahooks';
import { Affix, Button, Checkbox, Col, Collapse, Row, Tooltip } from 'antd';
import { check } from 'prettier';
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

	// 一级判断子级是否全部选中

	//二级判断子级是否全部选中 ==>半选
	const isChildrenAll = (data: any) => {
		if (data.length > 0) {
			let flag1;
			let flag2;
			let list = data.filter((t: any) => t.operatingFlag == 1);
			list.map((o: any) => {
				if (!has(o.key)) {
					flag1 = true;
				} else {
					flag2 = true;
				}
			});
			if (flag2 && flag1) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	//判断选中子级
	const childrenAll = (data: any) => {
		if (data.length > 0) {
			let flag1;
			let flag2;
			let list = data.filter((t: any) => t.operatingFlag == 1);
			list.map((o: any) => {
				if (!has(o.key)) {
					flag1 = true;
				} else {
					flag2 = true;
				}
			});
			if (flag2 && flag1 == false) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
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

	const check = (key: string) => {};

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
											check(item.key);
										}}
										disabled={item.operatingFlag == 0}
										checked={has(item.key)}
										// indeterminate={!has(item.key)}
									>
										{item.name}
									</Checkbox>
								</div>
							}
							showArrow={item.children?.length > 0}
							key={item.key}
							collapsible='header'
						>
							<Row gutter={[24, 24]}>
								{item.children?.map((i: any) => {
									return (
										<Col
											span={8}
											className='io_cms_role_authority-menu_collapse-panel'
											key={i.key}
										>
											<div className='io_cms_role_authority-menu_collapse-panel_name'>
												<Checkbox
													// checked={has(i.key)}

													onChange={e => {}}
													disabled={i.operatingFlag == 0}
													indeterminate={isChildrenAll(i.children)}
													checked={childrenAll(i.children)}
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
																onChange={e => {
																	if (has(o.key)) {
																		remove(o.key);
																	} else {
																		add(o.key);
																	}
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
							</Row>
						</Panel>
					);
				})}
			</Collapse>
		</>
	);
};
