import React, { useRef } from 'react';
import { BizModalForm, BizModalFormRef, ImageUpload } from '@ionia/libs';
import { ProFormText } from '@ant-design/pro-form';
import { Form, Button } from 'antd';
import './index.less';

export default () => {
	const [form] = Form.useForm();
	const ref = useRef<BizModalFormRef>();
	return (
		<BizModalForm
			form={form}
			ref={ref}
			className='io-cms-source-content-type__bizmodalform'
			title='新建/编辑内容类型'
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button>取消</Button>
					<Button htmlType='submit' type='primary'>
						保存
					</Button>
				</div>
			)}
		>
			<ProFormText
				name='name'
				label='内容类型名称名称'
				placeholder='请输入内容类型名称'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='number'
				label='编号'
				placeholder='请输入编号'
				rules={[{ required: true }]}
			/>
			<Form.Item name='favicon' label='图标' rules={[{ required: true }]}>
				<ImageUpload />
			</Form.Item>
		</BizModalForm>
	);
};
