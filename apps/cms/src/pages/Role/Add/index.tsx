import { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import {
	BizModalForm,
	addRole,
	RoleOperatingDTO,
	BizModalFormRef,
	positionList,
	roleVerifyName,
} from '@ionia/libs';
import { Button, Form, message, TreeSelect } from 'antd';
import React, { useRef, useState } from 'react';
import './index.less';
import { useRequest } from 'ahooks';

// interface roleForm{
// 	description?: string; //描述
// 	id?: string; //id 修改时必传id 新建时不需要
// 	name: string; //角色名称
// 	orgId: string[];
// }

export default ({ reload }: any) => {
	useRequest(() => positionList({ crux: '', isAll: true, parentId: '' }), {
		onSuccess: data => {
			console.log('data', data);
			console.log(loop(data.data));
			if (data.data) {
				setTreeData([...loop(data.data)]);
			}
		},
	});
	const ref = useRef<BizModalFormRef>();
	const [form] = Form.useForm();

	const [value, setValue] = useState(undefined);
	const [treeData, setTreeData] = useState<any[]>([]);
	const onChange = (value: any) => {
		console.log(value);
		setValue(value);
	};

	const loop = (data: any) => {
		return data.map((item: any) => {
			return { title: item.name, value: item.id, children: loop(item.children) };
		});
	};
	/**
	 *
	 * @param values
	 * 保存
	 */
	const onFinish = async (values: any) => {
		const { data, code } = await addRole({ ...values });
		if (code == 200) {
			message.success('提交成功!');
			form.resetFields();
			ref.current?.close();
			reload();
		}
	};
	/**
	 * 保存并新建
	 */
	const onCreate = () => {
		form.validateFields().then(async (values: any) => {
			const { code } = await addRole({ ...values });
			if (code == 200) {
				message.success('提交成功!');
				form.resetFields();
				reload();
			}
		});
	};
	return (
		<BizModalForm
			ref={ref}
			form={form}
			title='新建用户'
			className='io-cms-role_form'
			onFinish={onFinish}
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
				rules={[
					{
						required: true,
					},
					({ getFieldValue }) => ({
						async validator(_, value) {
							if (value) {
								const { data } = await roleVerifyName({ name: value });
								if (data == true) {
									return Promise.resolve();
								} else {
									return Promise.reject('该角色名称已存在!');
								}
							}
						},
					}),
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
					onChange={onChange}
				/>
			</Form.Item>
			<ProFormTextArea name='description' label='角色描述' placeholder='请输入角色描述' />
		</BizModalForm>
	);
};
