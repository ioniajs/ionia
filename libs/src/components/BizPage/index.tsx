import React, { useState } from 'react';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard, { ProCardTabsProps } from '@ant-design/pro-card';
import './index.less';

interface IoTabListArray {
	key: string;
	tab: string;
	component?: React.ReactNode;
}
interface IoRoutesArray {
	path: string;
	breadcrumbName: string;
}
interface IoBreadCrumbObj {
	routes?: Array<IoRoutesArray>;
	className?: string;
}
interface BizPageProps {
	tableList?: Array<IoTabListArray>;
	commonComponent?: React.ReactNode;
	headerBreadCrumb?: IoBreadCrumbObj;
	showBackBut?: boolean;
}

export const BizPage: React.FC<BizPageProps> = props => {
	const { commonComponent, tableList, headerBreadCrumb, showBackBut = true } = props;
	const ta = tableList && tableList[0]?.key;
	const [tab, setTab] = useState<string | undefined>(ta);
	const [tabPosition, setTabPosition] = useState<ProCardTabsProps['tabPosition']>('top');
	return (
		<div className='io-biz-page-container'>
			<PageContainer
				header={{
					className: 'io-bizpage-header',
					onBack: () => history.back(),
					title: <span style={{ display: 'none' }}>详情</span>,
					backIcon: showBackBut ? (
						<Button className='cms-detail-back_but' size='small'>
							<LeftOutlined />
							返回
						</Button>
					) : (
						<span />
					),
					// breadcrumb: {
					// 	routes: [
					// 		{ path: '/', breadcrumbName: '用户管理' },
					// 		{ path: '/agricultureSchool', breadcrumbName: '编辑' },
					// 	],
					// 	className: 'io-bizpage-breadcrumb',
					// },
					breadcrumb: headerBreadCrumb,
				}}
			>
				<div className='io-bizpage-content'>
					{tableList && (
						<ProCard
							tabs={{
								tabPosition,
								activeKey: tab,
								onChange: key => {
									setTab(key);
								},
							}}
						>
							{(tableList || []).map((item: IoTabListArray, index: number) => {
								return (
									<ProCard.TabPane key={item.key} tab={item.tab}>
										{item.component}
										{/* <BizForm>
										<Form.Item
											name='userName'
											label='用户名'
											rules={[{ required: true, message: '请选择用户名' }]}
										>
											<Select placeholder='请选择用户名' allowClear>
												<Select.Option value={1}>测试部</Select.Option>
											</Select>
										</Form.Item>
										<Form.Item name='no' label='所属角色'>
											<Input placeholder='请输入组织编号' />
										</Form.Item>
										<Form.Item
											name='status'
											label={
												<span>
													用户状态&nbsp;
													<Tooltip title='禁用状态的用户无法登录系统'>
														<InfoCircleOutlined />
													</Tooltip>
												</span>
											}
										>
											<Switch />
										</Form.Item>
										<Form.Item label='最后登录IP'>
											<span>192.168.255.255</span>
										</Form.Item>
									</BizForm> */}
									</ProCard.TabPane>
								);
							})}
						</ProCard>
					)}
					{!tableList && commonComponent}
				</div>
			</PageContainer>
		</div>
	);
};
