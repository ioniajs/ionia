import React from 'react';
import { Button, message, Cascader, Form, Input } from 'antd';
import ProForm, {
	ModalForm,
	ProFormText,
	ProFormSelect,
	ProFormSwitch,
} from '@ant-design/pro-form';
import './index.less';
import { validateMessages } from './rule';

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

// //确认密码校验一致
// function handleCfmPwd(rules:any, value:string, callback:any) {
// 	let loginpass = ModalForm.getFieldValue('cfmloginpass');
// 	if (loginpass && loginpass !== value) {
// 		callback(new Error('两次密码输入不一致'));
// 	} else {
// 		// Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
// 		callback();
// 	}
// }

export default () => {
	const [form] = Form.useForm();

	form.getFieldValue;

	return (
		<ModalForm
			form={form}
			layout='horizontal'
			title='新建用户'
			width='530px'
			trigger={<Button type='primary'>新建</Button>}
			onFinish={async values => {
				await waitTime(2000);
				console.log(values);
				message.success('提交成功！');
				return true;
			}}
			validateMessages={validateMessages}
			submitter={{
				// 完全自定义整个区域
				render: (props, doms) => {
					return (
						<div className='btn-submitter'>
							<Button type='default'>取消</Button>
							<Button type='primary'>保存并分配权限</Button>
							<Button type='primary'>保存并继续新建</Button>
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
						validator: (rule: any, value: string, callback: any) => {
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
			<ProFormText name='telephone' label='联系方式' placeholder='请输入联系方式' />
			<ProFormText name='email' label='电子邮箱' placeholder='请输入电子邮箱' />
			<ProFormSwitch
				name='status'
				label='用户状态'
				tooltip='禁用状态下的用户无法登录系统'
				initialValue={true}
			/>
		</ModalForm>
	);
};
