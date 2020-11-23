import { ProFormSelect, ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import { BizModalForm, logger, addUser } from '@ionia/libs';
import { Button, TreeSelect, Form, message } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

const options = [
	{
		value: '1',
		label: '审核员',
	},
	{
		value: '1326402331541061633',
		label: '系统管理员',
	},
	{
		value: '3',
		label: '信息录入员',
	},
];

const treeData = [
	{
		title: 'Node1',
		value: '1',
		children: [
			{
				title: 'Child Node1',
				value: '11',
			},
			{
				title: 'Child Node2',
				value: '12',
			},
		],
	},
	{
		title: 'Node2',
		value: '2',
	},
	{
		title: 'Node1',
		value: '3',
		children: [
			{
				title: 'Child Node1',
				value: '31',
			},
			{
				title: 'Child Node2',
				value: '32',
			},
		],
	},
];

export default (props: any) => {
	logger.debug(props);
	const { roleId, orgId } = props;
	const [form] = Form.useForm();
	const [value, setValue] = useState(undefined);
	useEffect(() => {
		if (roleId && orgId) {
			form.setFieldsValue({ orgId: orgId, roleIds: roleId });
		}
	}, [roleId, orgId]);
	return (
		<BizModalForm
			form={form}
			title='新建用户'
			renderSubmitter={({ close }: any) => (
				<div className='btn-submitter'>
					<Button
						type='default'
						onClick={() => {
							close();
							form.resetFields();
							form.setFieldsValue({ orgId: orgId, roleIds: roleId });
						}}
					>
						取消
					</Button>
					<Button
						type='default'
						onClick={async () => {
							const formData = await form.validateFields();
							logger.debug(formData);
							const { code } = await addUser(formData);
							if (code == 200) {
								message.success('提交成功！');
								form.resetFields();
								form.setFieldsValue({ orgId: orgId, roleIds: roleId });
							}
						}}
					>
						保存并继续新建
					</Button>
					<Button
						type='primary'
						onClick={async () => {
							const formData = await form.validateFields();
							logger.debug(formData);
							const { code } = await addUser(formData);
							if (code == 200) {
								message.success('提交成功！');
								form.resetFields();
								form.setFieldsValue({ orgId: orgId, roleIds: roleId });
								close();
							}
						}}
					>
						保存
					</Button>
				</div>
			)}
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
								return Promise.reject(new Error('两次密码输入不一致'));
							} else {
								return Promise.resolve();
							}
						},
					},
				]}
			/>
			<Form.Item name='orgId' label='所属阵地' rules={[{ required: true }]}>
				<TreeSelect
					style={{ width: '100%' }}
					value={value}
					dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
					treeData={treeData}
					placeholder='请选择所属的阵地'
					treeDefaultExpandAll
					disabled
				/>
			</Form.Item>
			<ProFormSelect
				options={options}
				width='xs'
				name='roleIds'
				label='所属角色'
				placeholder='请选择所属角色'
				disabled
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
								return Promise.resolve();
							} else {
								return Promise.reject('请输入正确的手机号码！');
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
								return Promise.resolve();
							} else {
								return Promise.reject('请输入正确的邮箱！');
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
		</BizModalForm>
	);
};
