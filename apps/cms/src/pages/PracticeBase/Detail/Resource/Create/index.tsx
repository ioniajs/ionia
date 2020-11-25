import { BizModalForm, ModalFormRef, ImageUpload, RichTextEditor } from '@ionia/libs';
import { Button, Form, message, Input } from 'antd';
import React, { useRef, useState } from 'react';
import './index.less';

export default () => {
	const ref = useRef<ModalFormRef>();
	const [form] = Form.useForm();
	return (
		<BizModalForm
			ref={ref}
			form={form}
			title='新建资源'
			className='io-cms-resource-create'
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button type='default' onClick={() => ref.current?.close()}>
						取消
					</Button>
					<Button type='primary' htmlType='submit'>
						保存
					</Button>
				</div>
			)}
		>
			<Form>
				<Form.Item
					name='title'
					label='标题'
					rules={[{ required: true }, { message: '请输入标题' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name='picId' label='资源图片'>
					<ImageUpload />
				</Form.Item>
				<Form.Item name='introduce' label='阵地介绍'>
					<div className='io-cms-resource-create-from-item__rich-text-editor'>
						<RichTextEditor />
					</div>
				</Form.Item>
			</Form>
		</BizModalForm>
	);
};
