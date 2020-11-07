import React, { useState } from 'react';
import { Button, Form, Input, Select, Tooltip, Switch } from 'antd';
import { LeftOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard, { ProCardTabsProps } from '@ant-design/pro-card';
import { BizForm } from '../BizForm';
import './index.less';

interface IoArray {
	key: string;
	tab: string;
}
interface BizPageProps {
	tableList?: Array<IoArray>;
	tabpanels?: [];
}

export const BizPage: React.FC<BizPageProps> = props => {
	const { tabpanels, tableList } = props;
	const ta = tableList && tableList[0]?.tab;
	const [tab, setTab] = useState<string>('tab1');
	const [tabPosition, setTabPosition] = useState<ProCardTabsProps['tabPosition']>('top');
	return (
		<div className='io-biz-page-container'>
			<PageContainer
				header={{
					className: 'io-bizpage-header',
					onBack: () => history.back(),
					title: <span style={{ display: 'none' }}>详情</span>,
					backIcon: (
						<Button className='cms-detail-back_but' size='small'>
							<LeftOutlined />
							返回
						</Button>
					),
					breadcrumb: {
						routes: [
							{ path: '/', breadcrumbName: '用户管理' },
							{ path: '/agricultureSchool', breadcrumbName: '编辑' },
						],
						className: 'io-bizpage-breadcrumb',
					},
				}}
			>
				<div className='io-bizpage-content'>
					<ProCard
						tabs={{
							tabPosition,
							activeKey: tab,
							onChange: key => {
								setTab(key);
							},
						}}
					>
						<ProCard.TabPane key='tab1' tab='产品一'>
							内容一
						</ProCard.TabPane>
						<ProCard.TabPane key='tab2' tab='产品二'>
							内容二
						</ProCard.TabPane>
					</ProCard>
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
				</div>
			</PageContainer>
		</div>
	);
};
