import { Modal, Form, Input, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useState } from 'react';
import './index.less';
import { modMePassword, logger } from '@ionia/libs';

interface updateForm {
	oldCipher: string;
	newCipher: string;
	confirm: string;
}

export default (props: any) => {
	const { modalVisible, setModalVisible } = props;
	const [form] = useForm();
	const handleOk = () => {
		form.submit();
	};

	const handleCancel = () => {
		setModalVisible(false);
		form.resetFields();
	};
	const onFinish = async (values: updateForm) => {
		console.log(values);
		const { data, code } = await modMePassword(values);
		if (code == 200) {
			message.success('修改成功');
			setModalVisible(false);
			form.resetFields();
		}
	};

	return (
		<>
			<Modal
				title='修改密码'
				visible={modalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				cancelText='取消'
				okText='确定'
			>
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
									if (value && oldVal == value) {
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
		</>
	);
};
