import {
	BizModalForm,
	BizModalFormRef,
	ImageUpload,
	RichTextEditor,
	OrgResourceDTO,
	modPositionResource,
} from '@ionia/libs';
import { Button, Form, message, Input } from 'antd';
import { fromPairs, values } from 'lodash';
import React, { useRef, useState } from 'react';

export default (props: any) => {
	const { setTitleShow, titleShow, title } = props;
	const ref = useRef<BizModalFormRef>();
	const [editorState, setEditorState] = useState(); // 获取富文本编辑内容
	const [form] = Form.useForm();
	const onFinish = async (values: OrgResourceDTO) => {
		const { data, code } = await modPositionResource(values);
		if (code == 200) {
			message.success('修改成功');
			setTitleShow(false);
			form.resetFields();
		}
	};
	form.setFieldsValue({ title: title });
	return (
		<BizModalForm
			visible={titleShow}
			ref={ref}
			title='编辑资源'
			className='io-cms-resource-create'
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button type='default' onClick={() => setTitleShow(false)}>
						取消
					</Button>
					<Button
						type='primary'
						htmlType='submit'
						onClick={async () => {
							form.validateFields().then(async values => {
								const param = {
									title: values.title,
									introduce: editorState,
									picId: values.picId || '',
								};
								const success = await onFinish(param);
								// if (success.code === 200) {
								// 	form.setFieldsValue({ title: '' });
								// 	ref.current?.close();
								// }
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
