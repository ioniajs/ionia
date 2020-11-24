import { logger, roleDetail, modRole } from '@ionia/libs';
import { useRequest } from 'ahooks';
import { Button, Form, Input, TreeSelect, message } from 'antd';
import React, { useState } from 'react';
import './index.less';

const { TextArea } = Input;
const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
};

const treeData = [
	{
		title: 'Node1',
		value: '0',
	},
	{
		title: 'Node2',
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
		title: 'Node3',
		value: '2',
	},
	{
		title: 'Node4',
		value: '3',
		children: [
			{
				title: 'Child Node4',
				value: '31',
			},
			{
				title: 'Child Node5',
				value: '32',
			},
		],
	},
];

export default ({ id }: any) => {
	const [value, setValue] = useState('');

	const onChange = (value: any) => {
		console.log(value);
		setValue(value);
	};
	const { data } = useRequest(() => roleDetail(id));
	const formData = data?.data ?? {};
	const [form] = Form.useForm();
	if (formData) {
		form.setFieldsValue({ ...formData });
	}

	// const { run } = useRequest(()=>modRole(), {manual: true})
	return (
		<>
			<div className='base-button'>
				<Button
					style={{ marginRight: '20px' }}
					type='primary'
					onClick={async () => {
						const editForm = await form.validateFields();
						const { code } = await modRole({
							name: editForm.name,
							orgId: editForm.orgId,
							description: editForm.description,
							id: data?.data.id,
						});
						if (code == 200) {
							message.success('修改成功');
						}
					}}
				>
					保存
				</Button>
			</div>
			<Form name='basic' {...layout} form={form}>
				<Form.Item
					label='角色名称'
					name='name'
					rules={[{ required: true, message: '请填写角色名称' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name='orgId' label='所属阵地' rules={[{ required: true }]}>
					<TreeSelect
						style={{ width: '100%' }}
						value={value}
						dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
						treeData={treeData}
						placeholder='请选择所属的阵地'
						treeDefaultExpandAll
						onChange={onChange}
					/>
				</Form.Item>
				<Form.Item name='description' label='角色描述'>
					<TextArea rows={2} placeholder='请输入角色描述' />
				</Form.Item>
				<Form.Item label='创建人' name='createUser'>
					<span>{data?.data.createUser}</span>
				</Form.Item>
				<Form.Item label='创建时间' name='createTime'>
					<span>{data?.data.createTime}</span>
				</Form.Item>
				<Form.Item label='最后更新人' name='updateUser'>
					<span>{data?.data.updateUser}</span>
				</Form.Item>
				<Form.Item label='最后更新时间' name='updateTime'>
					<span>{data?.data.updateTime}</span>
				</Form.Item>
			</Form>
		</>
	);
};
