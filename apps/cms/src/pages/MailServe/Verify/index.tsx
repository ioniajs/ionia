import React, { useRef } from 'react';
import './index.less';
import { Form, Input, Button, Modal } from 'antd';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { ProFormText } from '@ant-design/pro-form';

export default (props: any) => {
	const { email, setEmail } = props;
	const [form] = Form.useForm();
	const ref = useRef<BizModalFormRef>();
	const handleOk = () => {
		form.submit();
	};
	const handleCancel = () => {
		setEmail(false);
		form.resetFields();
	};
	return (
		<Modal
			className='io-cms-mail-serve__modal'
			visible={email}
			title='邮箱校验'
			onOk={handleOk}
			onCancel={handleCancel}
		>
			<Form form={form}>
				<Form.Item
					name='recipients'
					label='收件人'
					rules={[{ required: true }, { message: '请输入收件人邮箱' }]}
				>
					<Input placeholder='请输入收件人邮箱' />
				</Form.Item>
				<Form.Item
					name='title'
					label='标题'
					rules={[{ required: true }, { message: '请输入标题' }]}
				>
					<Input placeholder='请输入邮箱标题' />
				</Form.Item>
				<Form.Item
					name='content'
					label='正文'
					rules={[{ required: true }, { message: '请输入正文' }]}
				>
					<Input.TextArea
						placeholder='请输入邮箱正文'
						showCount={true}
						allowClear={true}
						maxLength={500}
					/>
				</Form.Item>
			</Form>
		</Modal>
		// <BizModalForm
		// 	form={form}
		// 	ref={ref}
		// 	className='io-cms-area-management__bizmodalform'
		// 	title='新建区域'
		// 	submitterRender={() => (
		// 		<div className='btn-submitter'>
		// 			<Button>取消</Button>
		// 			<Button htmlType='submit' type='primary'>
		// 				发送
		// 			</Button>
		// 		</div>
		// 	)}
		// ></BizModalForm>
	);
};
