import { logger } from '@ionia/libs';
import { Checkbox, Collapse, Row, Col, Affix, Button } from 'antd';
import React from 'react';
import './index.less';

const { Panel } = Collapse;

function callback(key: any) {
	console.log(key);
}

const tree = [
	{
		children: [
			{
				children: [
					{
						key: 1331776990746841089,
						title: '四级1',
						permissionFlag: 1,
						children: [],
					},
					{
						key: 1331776990746841081,
						title: '四级2',
						permissionFlag: 1,
						children: [],
					},
					{
						key: 1331776990746841082,
						title: '四级3',
						permissionFlag: 0,
						children: [],
					},
					{
						key: 1331776990746841083,
						title: '四级4',
						permissionFlag: 0,
						children: [],
					},
				],
				key: 1331773069462675457,
				title: '二级4-三级1',
				permissionFlag: 0,
			},
			{
				key: 1331129374329577473,
				title: '二级3',
				permissionFlag: 0,
				children: [],
			},
			{
				key: 1331129362661023745,
				title: '二级2',
				permissionFlag: 0,
				children: [],
			},
			{
				key: 1331129325021339650,
				title: '二级1',
				permissionFlag: 0,
				children: [],
			},
		],
		key: 1329720712180531202,
		title: '顶级',
		permissionFlag: 0,
	},
	{
		key: 0,
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

function changeFlag(arr: any) {
	arr.forEach((item: any) => {
		item.permissionFlag = 1;
		if (item.children.length > 0) {
			changeFlag(item.children);
		}
	});
}
/**
 *
 * @param node
 * 递归循环获取想要的数据
 */
interface treeItem {
	title: string;
	key: number;
	children: treeItem[];
	permissionFlag: number;
}
const treeData: treeItem[] = tree;

export default ({ rolekey }: any) => {
	//改变每个功能的按钮的值
	function onChange(row: any, data: number) {
		console.log(row, data);
		data == 1 ? (row.permissionFlag = 0) : (row.permissionFlag = 1);
	}
	const submitData = () => {
		logger.debug(treeData);
	};
	return (
		<>
			<Affix offsetTop={100}>
				<Button type='primary' onClick={submitData}>
					保存
				</Button>
			</Affix>
			<Collapse
				defaultActiveKey={['1']}
				onChange={callback}
				className='io_cms_role_authority-menu_collapse'
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
									<Checkbox>{item.title}</Checkbox>
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
													onChange={() => {
														// const keys = getKey(i.children);
														// logger.debug(keys);
														if (i.children.length > 0) {
															changeFlag(i.children);
														} else {
															i.permissionFlag = 1;
														}
													}}
												>
													{i.title}
												</Checkbox>
											</div>
											<Row gutter={[24, 24]}>
												{i.children?.map((o: any) => {
													return (
														<Col span={8}>
															<Checkbox
																onChange={() => {
																	onChange(o, o.permissionFlag);
																}}
																key={o.key}
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
