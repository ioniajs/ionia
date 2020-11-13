import { ModalForm, ProFormSelect, ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import { Button, Cascader, Form, message } from 'antd';
import React, { useState } from 'react';
import './index.less';
import { validateMessages } from './rule';

interface BizFormProps {
	title?: string;
}
const waitTime = (time: number = 100) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
};
const options = [
	{
		value: '1',
		label: '审核员',
	},
	{
		value: '2',
		label: '系统管理员',
	},
	{
		value: '3',
		label: '信息录入员',
	},
];

const residences = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
];

// export default () => {
export const BizForm: React.FC<BizFormProps> = props => {
	const { title } = props;

	const [form] = Form.useForm();
	const [visible, setVisible] = useState(false);
	const onCancel = () => {
		setVisible(false);
	};
	const onCreate = () => {
		form.resetFields();
	};
	return (
		<ModalForm
			form={form}
			layout='horizontal'
			// title='新建用户'
			title={title}
			width='530px'
			visible={visible}
			trigger={
				<Button
					type='primary'
					onClick={() => {
						setVisible(true);
					}}
				>
					新建
				</Button>
			}
			onFinish={async values => {
				await waitTime(2000);
				console.log(values);
				message.success('提交成功！');
				return true;
			}}
			validateMessages={validateMessages}
			modalProps={{
				onCancel,
			}}
			submitter={{
				// 完全自定义整个区域
				render: (_props, _doms) => {
					return (
						<div className='btn-submitter'>
							<Button type='default' onClick={onCancel}>
								取消
							</Button>
							<Button type='primary'>保存并分配权限</Button>
							<Button type='primary' onClick={onCreate}>
								保存并继续新建
							</Button>
							<Button type='primary' htmlType='submit'>
								保存
							</Button>
						</div>
					);
				},
			}}
		>
			<ProFormText
				name='username'
				label='用户名'
				placeholder='请输入用户名'
				rules={[{ required: true }]}
			/>
			<ProFormText.Password
				name='cipher'
				label='登录密码'
				placeholder='请输入登录密码'
				rules={[{ required: true }]}
			/>
			<ProFormText.Password
				name='confirm'
				label='重复密码'
				placeholder='请输入重复密码'
				rules={[
					{ required: true },
					{
						validator: (_rule: any, value: string, callback: any) => {
							const oldVal = form.getFieldValue('cipher');
							if (oldVal !== value) {
								callback(new Error('两次密码输入不一致'));
							} else {
								callback();
							}
						},
					},
				]}
			/>
			<Form.Item name='orgId' label='所属阵地' rules={[{ required: true }]}>
				<Cascader options={residences} placeholder='请选择所属阵地' />
			</Form.Item>
			<ProFormSelect
				options={options}
				width='xs'
				name='roleIds'
				label='所属角色'
				placeholder='请选择所属角色'
			/>
			<ProFormText name='realName' label='真实姓名' placeholder='请输入姓名' />
			<ProFormText
				name='telephone'
				label='联系方式'
				placeholder='请输入联系方式'
				rules={[
					{
						validator: (_rule: any, value: string, callback: any) => {
							const regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;
							if (!value || regex.test(value)) {
								callback();
							} else {
								callback('请输入正确的手机号码！');
							}
						},
					},
				]}
			/>
			<ProFormText
				name='email'
				label='电子邮箱'
				placeholder='请输入电子邮箱'
				rules={[
					{
						validator: (_rule: any, value: string, callback: any) => {
							const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
							if (!value || reg.test(value)) {
								callback();
							} else {
								callback('请输入正确的邮箱！');
							}
						},
					},
				]}
			/>
			<ProFormSwitch
				name='status'
				label='用户状态'
				tooltip='禁用状态下的用户无法登录系统'
				initialValue={true}
			/>
		</ModalForm>
	);
};
