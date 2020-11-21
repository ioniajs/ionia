import React, { useState, useEffect } from 'react';
import { Form, Input, Button, TreeSelect, Tooltip, Switch } from 'antd';
import { useMount, useRequest } from '@umijs/hooks';
import { UserViewVO, userDetail } from '@ionia/libs/src/services/user';
import './index.less';
import { InfoCircleOutlined } from '@ant-design/icons';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 12 },
};

interface UserDetailProps {
	id?: string;
}

export const UserDetail = ({ id }: UserDetailProps) => {
	const [expandForm] = Form.useForm();
	const { data, run } = useRequest(userDetail, {
		manual: true,
	});
	console.log('-------', data);

	const treeData: any = [
		{
			title: 'Node1',
			value: '0-0',
			children: [
				{
					title: 'Child Node1',
					value: '0-0-1',
				},
				{
					title: 'Child Node2',
					value: '0-0-2',
				},
			],
		},
		{
			title: 'Node2',
			value: '0-1',
		},
	];
	const treeUserData: any = [
		{
			title: '审核员',
			value: '0',
		},
		{
			title: '系统管理员',
			value: '1',
		},
		{
			title: '信息录入员',
			value: '2',
		},
	];
	const [value, setValue] = useState('');
	return (
		<div className='io-cms-user-detail'>
			<Button type='primary'>保存</Button>
			<Form
				name='basic'
				initialValues={{ remember: true }}
				// onFinish={onFinish}
				// onFinishFailed={onFinishFailed}
				{...layout}
			>
				<Form.Item label='用户名' name='username' rules={[{ required: true }]}>
					<Input />
				</Form.Item>

				<Form.Item
					label='所属阵地'
					name='belongPosition'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<TreeSelect
						value={value}
						treeData={treeData}
						treeDefaultExpandAll
						onChange={() => setValue(value)}
					></TreeSelect>
				</Form.Item>
				<Form.Item
					label='所属角色'
					name='belongPosition'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<TreeSelect
						value={value}
						treeData={treeUserData}
						treeDefaultExpandAll
						onChange={() => setValue(value)}
					></TreeSelect>
				</Form.Item>
				<Form.Item
					label='真实姓名'
					name='realName'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='联系方式'
					name='telephone'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='电子邮箱'
					name='email'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name='status'
					label={
						<span>
							状态&nbsp;
							<Tooltip title='禁用状态的用户无法登录系统'>
								<InfoCircleOutlined />
							</Tooltip>
						</span>
					}
					initialValue={1}
				>
					<Switch
						checkedChildren='开启'
						unCheckedChildren='关闭'
						// defaultChecked={!!siteDetailData?.status}
					/>
				</Form.Item>
				<Form.Item name='id' label='最后登录IP'>
					<span>192.168.0.144</span>
				</Form.Item>
				<Form.Item name='id' label='最后登录时间'>
					<span>2020-11-20 17:36</span>
				</Form.Item>
				<Form.Item name='id' label='创建人'>
					<span>江西宋小宝</span>
				</Form.Item>
				<Form.Item name='id' label='创建时间'>
					<span>2020-11-19 15:36</span>
				</Form.Item>
				<Form.Item name='id' label='最后更新人'>
					<span>江西赵四</span>
				</Form.Item>
				<Form.Item name='id' label='最后更新时间'>
					<span>2020-11-19 12:00</span>
				</Form.Item>
			</Form>
		</div>
	);
};
