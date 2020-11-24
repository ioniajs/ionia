import React, { useState, useEffect } from 'react';
import { Form, Input, Button, TreeSelect, Tooltip, Switch, message } from 'antd';
import { useMount, useRequest } from '@umijs/hooks';
import { userDetail, modUser, UserUpdateDTO } from '@ionia/libs/src/services';
import './index.less';
import { InfoCircleOutlined } from '@ant-design/icons';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 12 },
};

interface UserDetailProps {
	id: string;
}

const userUpdate = async (filed: UserUpdateDTO) => {
	const updateUser = await modUser(filed);
	if (updateUser.code === 200) {
		message.success('修改成功');
	} else {
		message.error('修改失败');
	}
	return updateUser;
};

export const UserDetail = ({ id }: UserDetailProps) => {
	const [expandForm] = Form.useForm();
	const [value, setValue] = useState('');
	const [uservalue, setUserValue] = useState('');
	const { data, run } = useRequest(userDetail, {
		manual: true,
	});

	useMount(() => {
		if (id !== undefined) {
			run(id);
		}
	});
	useEffect(() => {
		if (data?.data) {
			expandForm.setFieldsValue({
				...data?.data,
			});
		}
	}, [data?.data]);

	const treeData: any = [
		{
			title: 'Node1',
			value: '0',
			children: [
				{
					title: 'Child Node1',
					value: '1',
				},
				{
					title: 'Child Node2',
					value: '2',
				},
			],
		},
		{
			title: 'Node2',
			value: '3',
		},
	];
	const treeUserData: any = [
		{
			title: '审核员',
			value: '4',
		},
		{
			title: '系统管理员',
			value: '5',
		},
		{
			title: '信息录入员',
			value: '6',
		},
	];
	return (
		<div className='io-cms-user-detail'>
			<Button
				type='primary'
				onClick={async () => {
					expandForm.validateFields().then(async values => {
						const param = {
							id,
							username: values.username,
							orgId: values.orgId,
							roleIds: values.roleIds,
							realName: values.realName || '',
							telephone: values.telephone || '',
							email: values.email || '',
							status: !!values.status ? 1 : 0,
						};
						const saveUpdateRes = await userUpdate(param);
						if (saveUpdateRes) {
							id !== undefined && run(id);
						}
					});
				}}
			>
				保存
			</Button>
			<Form
				form={expandForm}
				name='basic'
				initialValues={{ remember: true }}
				// onFinish={onFinish}
				// onFinishFailed={onFinishFailed}
				{...layout}
			>
				<Form.Item
					label='用户名'
					name='username'
					rules={[{ required: true, message: '请输入用户名' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='所属阵地'
					name='orgId'
					rules={[{ required: true, message: '请选择所属阵地' }]}
				>
					<TreeSelect
						value={value}
						treeData={treeData}
						treeDefaultExpandAll
						onChange={() => setValue(value)}
					></TreeSelect>
				</Form.Item>
				<Form.Item label='所属角色' name='roleIds'>
					<TreeSelect
						value={uservalue}
						treeData={treeUserData}
						treeDefaultExpandAll
						onChange={() => setUserValue(uservalue)}
					></TreeSelect>
				</Form.Item>
				<Form.Item label='真实姓名' name='realName'>
					<Input />
				</Form.Item>
				<Form.Item label='联系方式' name='telephone'>
					<Input />
				</Form.Item>
				<Form.Item label='电子邮箱' name='email'>
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
					initialValue={true}
					valuePropName='checked'
				>
					<Switch
						checkedChildren='开启'
						unCheckedChildren='关闭'

						// defaultChecked={!!Number(data?.data.status)}
					/>
				</Form.Item>
				<Form.Item name='lastLoginIp' label='最后登录IP'>
					<span>{data?.data.lastLoginIp}</span>
				</Form.Item>
				<Form.Item name='lastLoginTime' label='最后登录时间'>
					<span>{data?.data.lastLoginTime}</span>
				</Form.Item>
				<Form.Item name='createUser' label='创建人'>
					<span>{data?.data.createUser}</span>
				</Form.Item>
				<Form.Item name='createTime' label='创建时间'>
					<span>{data?.data.createTime}</span>
				</Form.Item>
				<Form.Item name='updateUser' label='最后更新人'>
					<span>{data?.data.updateUser}</span>
				</Form.Item>
				<Form.Item name='updateTime' label='最后更新时间'>
					<span>{data?.data.updateTime}</span>
				</Form.Item>
			</Form>
		</div>
	);
};
