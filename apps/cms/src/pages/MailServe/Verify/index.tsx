import React from 'react';
import './index.less';
import { Modal, Form, Input } from 'antd';

export default (props: any) => {
	const { email, setEmail } = props;
	return (
		<Modal
			className='io-cms-mail-serve__modal'
			visible={email}
			title='邮箱校验'
			onOk={() => setEmail(false)}
		>
			<Form>
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
	);
};
