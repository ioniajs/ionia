import React, { useState } from 'react';
import { Button, Form, Input, Switch, Tooltip, Select } from 'antd';
import { LeftOutlined, InfoCircleOutlined } from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import { PageContainer, PageHeaderWrapper } from '@ant-design/pro-layout';
import { BizForm, BizPage } from '@ionia/libs';
import './index.less';

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
};

export default () => {
	const [tab, setTab] = useState<string>('basic');
	const [form] = Form.useForm();
	return (
		<BizPage
			tableList={[
				{
					key: 'basic',
					tab: '基本信息',
				},
				{
					key: 'permission',
					tab: '用户权限',
				},
			]}
		/>
		// <PageContainer
		// 	className='cms-detail-wrap'
		// 	header={{
		// 		className: 'cms-detail-header',
		// 		onBack: () => history.back(),
		// 		title: <span style={{ display: 'none' }}>详情</span>,
		// 		backIcon: (
		// 			<Button className='cms-detail-back_but' size='small'>
		// 				<LeftOutlined />
		// 				返回
		// 			</Button>
		// 		),
		// 		breadcrumb: {
		// 			routes: [
		// 				{ path: '/', breadcrumbName: '用户管理' },
		// 				{ path: '/agricultureSchool', breadcrumbName: '编辑' },
		// 			],
		// 			className: 'cms-detail-breadcrumb',
		// 		},
		// 	}}
		// 	tabActiveKey={tab}
		// 	tabList={[
		// 		{
		// 			key: 'basic',
		// 			tab: '基本信息',
		// 		},
		// 		{
		// 			key: 'permission',
		// 			tab: '用户权限',
		// 		},
		// 	]}
		// 	onTabChange={key => {
		// 		setTab(key);
		// 	}}
		// >
		// 	<BizForm form={form}>
		// 		<Form.Item
		// 			name='userName'
		// 			label='用户名'
		// 			rules={[{ required: true, message: '请选择用户名' }]}
		// 		>
		// 			<Select placeholder='请选择用户名' allowClear>
		// 				<Select.Option value={1}>测试部</Select.Option>
		// 			</Select>
		// 		</Form.Item>
		// 		<Form.Item name='no' label='所属角色'>
		// 			<Input placeholder='请输入组织编号' />
		// 		</Form.Item>
		// 		<Form.Item
		// 			name='status'
		// 			label={
		// 				<span>
		// 					用户状态&nbsp;
		// 					<Tooltip title='禁用状态的用户无法登录系统'>
		// 						<InfoCircleOutlined />
		// 					</Tooltip>
		// 				</span>
		// 			}
		// 		>
		// 			<Switch />
		// 		</Form.Item>
		// 		<Form.Item label='最后登录IP'>
		// 			<span>192.168.255.255</span>
		// 		</Form.Item>
		// 	</BizForm>
		// </PageContainer>
	);
};
