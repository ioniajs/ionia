import {
	BizModalForm,
	BizModalFormRef,
	ImageUpload,
	RichTextEditor,
	OrgResourceDTO,
	addPositionResource,
	positionResourceDetail,
	modPositionResource,
} from '@ionia/libs';
import { Button, Form, message, Input } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import { useMount, useRequest } from '@umijs/hooks';

import './index.less';

interface ResourceCreateProps {
	row?: any;
}

const CreateResource = async (filed: OrgResourceDTO) => {
	const CreateRef = await addPositionResource(filed);
	if (CreateRef.code === 200) {
		message.success('新建成功');
	} else {
		message.error('新建失败');
	}
	return CreateRef;
};

export default ({ row }: ResourceCreateProps) => {
	const onFinish = async (values: OrgResourceDTO) => {
		const { data, code } = await modPositionResource(values);
		if (code == 200) {
			message.success('修改成功');
			form.resetFields();
		}
	};
	if (row) {
		const { data, run } = useRequest(positionResourceDetail, {
			manual: true,
		});
		useMount(() => {
			if (row.id !== undefined) {
				run(row.id);
			}
		});
		useEffect(() => {
			if (data?.data) {
				form.setFieldsValue({
					...data?.data,
				});
			}
		}, [data?.data]);
	}

	const onCreate = () => {
		form.resetFields();
	};
	const ref = useRef<BizModalFormRef>();
	const [editorState, setEditorState] = useState(); // 获取富文本编辑内容
	const [form] = Form.useForm();
	return (
		<BizModalForm
			ref={ref}
			title={row ? '编辑资源' : '新建资源'}
			triggerRender={() =>
				row ? (
					<a onClick={() => ref.current?.open()}>{row?.title}</a>
				) : (
					<Button type='primary' onClick={() => ref.current?.open()}>
						{' '}
						<i
							className='iconfont icon-plus1'
							style={{ fontSize: '14px', lineHeight: '21px' }}
						/>{' '}
						新建
					</Button>
				)
			}
			className='io-cms-resource-create'
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button type='default' onClick={() => ref.current?.close()}>
						取消
					</Button>
					{row ? (
						''
					) : (
						<Button type='primary' onClick={onCreate}>
							保存并继续新建
						</Button>
					)}
					<Button
						type='primary'
						htmlType='submit'
						onClick={async () => {
							{
								row
									? form.validateFields().then(async values => {
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
									  })
									: form.validateFields().then(async values => {
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
							}
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
					rules={[{ required: true }, { message: '请输入标题' }, { max: 120 }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name='picId' label='资源图片'>
					<ImageUpload />
				</Form.Item>
				<Form.Item name='introduce' label='阵地介绍'>
					<div className='io-cms-resource-create-from-item__rich-text-editor'>
						<RichTextEditor onGet={(editorState: any) => setEditorState(editorState)} />
					</div>
				</Form.Item>
			</Form>
		</BizModalForm>
	);
};
