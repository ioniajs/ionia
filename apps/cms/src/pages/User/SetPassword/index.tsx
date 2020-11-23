import { modPassword, UserUpdateCipherDTO } from '@ionia/libs/src/services';
import { Form, Input, message, Modal } from 'antd';
import React from 'react';
import './index.less';

export default (props: any) => {
	const { modalVisble, setModalVisble, userName } = props;
	const [form] = Form.useForm();
	const handleOk = () => {
		form.submit();
	};
	const onFinish = async (values: UserUpdateCipherDTO) => {
		const { data, code } = await modPassword(values);
		if (code == 200) {
			message.success('修改成功');
			setModalVisble(false);
			form.resetFields();
		}
	};
	const handleCancel = () => {
		setModalVisble(false);
		form.resetFields();
	};
	form.setFieldsValue({ userName: userName });
	return (
		<Modal
			visible={modalVisble}
			title='修改密码'
			onOk={handleOk}
			onCancel={handleCancel}
			cancelText='取消'
			okText='确定'
			className='io-cms__moduserpwd-modal'
		>
			<Form form={form} onFinish={onFinish} className='io-cms__moduserpwd-form'>
				<Form.Item label='用户名' name='userName' rules={[{ required: true }]}>
					<Input disabled />
				</Form.Item>

				<Form.Item
					label='新密码'
					name='cipher'
					rules={[{ required: true, message: '请输入密码!' }]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					label='确认密码'
					name='confirm'
					rules={[
						{ required: true, message: '请再次输入新密码!' },
						{
							validator: (_rule: any, value: string, callback: any) => {
								const oldVal = form.getFieldValue('cipher');
								if (value && oldVal !== value) {
									callback(new Error('两次密码输入不一致'));
								} else {
									callback();
								}
							},
						},
					]}
				>
					<Input.Password />
				</Form.Item>
			</Form>
		</Modal>
	);
};
