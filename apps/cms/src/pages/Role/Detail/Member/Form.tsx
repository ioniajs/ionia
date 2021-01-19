import { ProFormSelect, ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import {
	BizModalForm,
	logger,
	addUser,
	BizModalFormRef,
	UserSaveDTO,
	roleVerifyName,
	positionList,
} from '@ionia/libs';
import { Button, TreeSelect, Form, message } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { useRequest } from 'ahooks';
import './index.less';

interface optionItem {
	value: string;
	label: string;
}

export default ({ roleId, orgId, reload, name }: any) => {
	useRequest(() => positionList({ crux: '', isAll: true, parentId: '' }), {
		onSuccess: data => {
			console.log('data', data);
			console.log(loop(data.data));
			if (data.data) {
				setTreeData([...loop(data.data)]);
			}
		},
	});
	const [form] = Form.useForm();
	const [value, setValue] = useState(undefined);
	const [treeData, setTreeData] = useState<any[]>([]);
	const [options, setoptions] = useState<optionItem[]>([]);
	const ref = useRef<BizModalFormRef>();
	useEffect(() => {
		if (roleId && orgId) {
			form.setFieldsValue({ orgId: orgId, roleIds: roleId });

			options.push({ value: roleId, label: name });
			setoptions([...options]);
		}
	}, [roleId, orgId]);

	const loop = (data: any) => {
		return data.map((item: any) => {
			return { title: item.name, value: item.id, children: loop(item.children) };
		});
	};
	const onreload = () => {
		ref.current?.close();
		form.resetFields();
		form.setFieldsValue({ orgId: orgId, roleIds: roleId });
		reload();
	};

	return (
		<BizModalForm
			form={form}
			title='新建用户'
			ref={ref}
			modalProps={{
				onCancel: () => ref.current?.close(),
			}}
			submitterRender={({ close }: any) => (
				<div className='btn-submitter'>
					<Button type='default' onClick={onreload}>
						取消
					</Button>
					<Button
						type='default'
						onClick={async () => {
							const formData = await form.validateFields();
							logger.debug(formData);
							const { code } = await addUser(formData as UserSaveDTO);
							if (code == 200) {
								message.success('提交成功！');
								form.resetFields();
								form.setFieldsValue({ orgId: orgId, roleIds: roleId });
								reload();
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
							const { code } = await addUser(formData as UserSaveDTO);
							if (code == 200) {
								message.success('提交成功！');
								onreload();
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
