import { logger, roleMenuShow } from '@ionia/libs';
import { useSet, useRequest } from 'ahooks';
import { Affix, Button, Checkbox, Col, Collapse, Row } from 'antd';
import { check } from 'prettier';
import React, { useState } from 'react';
import './index.less';

const { Panel } = Collapse;

const loop = (data: any, list: any[], path: string = '') => {
	data?.forEach(({ key, children, ...item }: any) => {
		if (key) {
			path = !!path ? path + '-' + key : key;
			list.push({
				key,
				path,
				...item,
			});
		}
		if (children && children.length > 0) {
			loop(children, list, path);
		}
	});
	return list;
};

const dataList: any[] = [];

export default ({ roleId }: any) => {
	const [checkedKeys, setCheckedKeys] = useState<Set<string>>(new Set());

	const { data } = useRequest(() => roleMenuShow({ roleId }), {
		onSuccess: data => {
			if (data.data) {
				loop(data.data, dataList);
				const defaultCheckedKeys = dataList
					.filter(item => item.permissionFlag == 1)
					.map(item => item.key);
				setCheckedKeys(new Set(defaultCheckedKeys));
			}
		},
	});

	console.log('@@----> !!', dataList);
	console.log('@$$@----> !!', checkedKeys);

	const check = (key: string) => {
		const newCheckedKeys = new Set(Array.from(checkedKeys));
		const path = dataList.find(item => item.key === key).path;
		const childrenKeys = dataList
			.filter(item => item.path.startsWith(path))
			.map(item => item.key);

		console.log('key', key, path);

		if (checkedKeys.has(key)) {
			childrenKeys.forEach(cKey => newCheckedKeys.delete(cKey));
		} else {
			childrenKeys.forEach(cKey => newCheckedKeys.add(cKey));
		}
		setCheckedKeys(newCheckedKeys);
	};

	return (
		<>
			<Affix offsetTop={100}>
				<Button type='primary'>保存</Button>
			</Affix>
			<div className='io-cms-role-authority-site_check'>
				<Checkbox
					onChange={e => {
						if (checkedKeys.has('all')) {
							setCheckedKeys(new Set());
						} else {
							setCheckedKeys(new Set(['all', ...dataList.map(item => item.key)]));
						}
					}}
					indeterminate={checkedKeys.size != dataList.length + 1 && checkedKeys.size > 0}
					checked={checkedKeys.size > 0 && checkedKeys.size >= dataList.length + 1}
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
										checked={checkedKeys.has(item.key)}
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
													checked={checkedKeys.has(i.key)}
													// indeterminate={!has(i.key)}
													onChange={e => {
														check(i.key);
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
																checked={checkedKeys.has(o.key)}
																onChange={e => {
																	check(o.key);
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
