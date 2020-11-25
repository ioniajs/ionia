import { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { BizModalForm, addRole, RoleOperatingDTO, ModalFormRef } from '@ionia/libs';
import { Button, Form, message, TreeSelect } from 'antd';
import React, { useRef, useState } from 'react';
import './index.less';

// interface roleForm{
// 	description?: string; //描述
// 	id?: string; //id 修改时必传id 新建时不需要
// 	name: string; //角色名称
// 	orgId: string[];
// }
const treeData = [
	{
		title: 'Node1',
		value: 1,
		children: [
			{
				title: 'Child Node1',
				value: 11,
			},
			{
				title: 'Child Node2',
				value: 12,
			},
		],
	},
	{
		title: 'Node2',
		value: 2,
	},
	{
		title: 'Node1',
		value: 3,
		children: [
			{
				title: 'Child Node1',
				value: 31,
			},
			{
				title: 'Child Node2',
				value: 32,
			},
		],
	},
];

export default () => {
	const ref = useRef<ModalFormRef>();
	const [form] = Form.useForm();
	const onCreate = () => {
		form.resetFields();
	};

	const [value, setValue] = useState(undefined);

	const onChange = (value: any) => {
		console.log(value);
		setValue(value);
	};
	return (
		<BizModalForm
			ref={ref}
			form={form}
			title='新建用户'
			className='io-cms-role_form'
			onFinish={async values => {
				console.log(values);
				const { data, code } = await addRole(values as RoleOperatingDTO);
				if (code == 200) {
					message.success('提交成功!');
					form.resetFields();
					// close();
				}
			}}
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button type='default' onClick={() => ref.current?.close()}>
						取消
					</Button>
					<Button type='default'>保存并分配权限</Button>
					<Button type='default' onClick={onCreate}>
						保存并继续新建
					</Button>
					<Button type='primary' htmlType='submit'>
						保存
					</Button>
				</div>
			)}
		>
			<ProFormText
				name='name'
				label='角色名称'
				placeholder='请输入角色名称'
				rules={[{ required: true }]}
			/>
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
			<ProFormTextArea name='description' label='角色描述' placeholder='请输入角色描述' />
		</BizModalForm>
	);
};
