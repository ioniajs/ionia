import {
	BizModalForm,
	BizModalFormRef,
	ImageUpload,
	RichTextEditor,
	OrgResourceDTO,
	addPositionResource,
} from '@ionia/libs';
import { Button, Form, message, Input } from 'antd';
import { fromPairs, values } from 'lodash';
import React, { useRef, useState } from 'react';
import './index.less';

const CreateResource = async (filed: OrgResourceDTO) => {
	const CreateRef = await addPositionResource(filed);
	if (CreateRef.code === 200) {
		message.success('新建成功');
	} else {
		message.error('新建失败');
	}
	return CreateRef;
};

export default () => {
	const onCreate = () => {
		form.resetFields();
	};
	const ref = useRef<BizModalFormRef>();
	const [editorState, setEditorState] = useState(); // 获取富文本编辑内容
	const [form] = Form.useForm();
	return (
		<BizModalForm
			ref={ref}
			title='新建资源'
			className='io-cms-resource-create'
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button type='default' onClick={() => ref.current?.close()}>
						取消
					</Button>
					<Button type='primary' onClick={onCreate}>
						保存并继续新建
					</Button>
					<Button
						type='primary'
						htmlType='submit'
						onClick={async () => {
							form.validateFields().then(async values => {
								const param = {
									title: values.title,
									picId: values.picId || '',
									introduce: editorState,
								};
								const success = await CreateResource(param);
								if (success.code === 200) {
									form.setFieldsValue({ title: '' });
									ref.current?.close();
								}
							});
						}}
					>
						保存
					</Button>
				</div>
			)}
		>
			<Form form={form}>
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
						<RichTextEditor onGet={editorState => setEditorState(editorState)} />
					</div>
				</Form.Item>
			</Form>
		</BizModalForm>
	);
};
