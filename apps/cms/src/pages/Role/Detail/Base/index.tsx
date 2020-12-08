import { logger, roleDetail, modRole, positionList, RoleViewVO } from '@ionia/libs';
import { useRequest } from 'ahooks';
import { Button, Form, Input, TreeSelect, message } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

const { TextArea } = Input;
const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
};

function filterData(data: any) {
	return data.map((item: any) => {
		if (item.children && item.children.length > 0) {
			item.children = filterData(item.children);
		} else {
			return { title: item.name, value: item.id };
		}
		return { title: item.name, value: item.id, children: item.children };
	});
}

export default ({ id }: any) => {
	const [value, setValue] = useState('');
	const [treeData, setTreeData] = useState([]);
	const onChange = (value: any) => {
		console.log(value);
		setValue(value);
	};

	const firstRequest = useRequest(() => roleDetail(id));
	const secondRequest = useRequest(() => positionList({ ...formData }), {
		onSuccess: data => {
			const tree = filterData(data?.data);
			setTreeData(tree);
			logger.debug(tree);
		},
	});
	// logger.debug('secondRequest', secondRequest.data?.data);
	const formData = firstRequest.data?.data ?? {};
	const [form] = Form.useForm();
	useEffect(() => {
		form.setFieldsValue({ ...formData });
	}, [formData]);

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
							id,
						});
						if (code == 200) {
							message.success('修改成功');
						}
					}}
				>
					保存
				</Button>
			</div>
			<Form name='basic' {...layout} form={form} className='io-cms-role-base_form'>
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
						// value={value}
						dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
						treeData={treeData}
						placeholder='请选择所属的阵地'
						treeDefaultExpandAll
						onChange={onChange}
					/>
				</Form.Item>
				<Form.Item name='description' label='角色描述' style={{ marginBottom: '14px' }}>
					<TextArea rows={4} placeholder='请输入角色描述' maxLength={500} showCount />
				</Form.Item>
				<Form.Item label='创建人' name='createUser' className='io-cms-role-base-form_item'>
					<span>{firstRequest.data?.data.createUser}</span>
				</Form.Item>
				<Form.Item
					label='创建时间'
					name='createTime'
					className='io-cms-role-base-form_item'
				>
					<span>{firstRequest.data?.data.createTime}</span>
				</Form.Item>
				<Form.Item
					label='最后更新人'
					name='updateUser'
					className='io-cms-role-base-form_item'
				>
					<span>{firstRequest.data?.data.updateUser}</span>
				</Form.Item>
				<Form.Item
					label='最后更新时间'
					name='updateTime'
					className='io-cms-role-base-form_item'
				>
					<span>{firstRequest.data?.data.updateTime}</span>
				</Form.Item>
			</Form>
		</>
	);
};
