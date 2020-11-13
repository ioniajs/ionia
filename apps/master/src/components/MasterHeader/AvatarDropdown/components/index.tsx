import { Modal, Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useState } from 'react';
import './index.less';

export default (props: any) => {
	console.log(props);
	const { modalVisible, setModalVisible } = props;
	const [form] = useForm();
	const handleOk = () => {
		form.submit();
	};

	const handleCancel = () => {
		setModalVisible(false);
	};
	const onFinish = (values: any) => {
		console.log(values);
	};

	return (
		<>
			<Modal title='修改密码' visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
				<Form form={form} onFinish={onFinish} className='io-master_psdform'>
					<Form.Item
						label='原密码'
						name='oldCipher'
						rules={[{ required: true, message: '请输入原密码!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						label='新密码'
						name='newCipher'
						rules={[
							{ required: true, message: '请输入新密码!' },
							{
								validator: (_rule: any, value: string, callback: any) => {
									const oldVal = form.getFieldValue('oldCipher');
									if (oldVal == value) {
										callback(new Error('新密码不得与旧密码相同'));
									} else {
										callback();
									}
								},
							},
						]}
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
									const oldVal = form.getFieldValue('newCipher');
									if (oldVal !== value) {
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
		</>
	);
};
