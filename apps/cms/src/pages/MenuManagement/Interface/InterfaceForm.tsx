import { ProFormSelect, ProFormTextArea, ProFormText } from '@ant-design/pro-form';
import { BizModalForm, BizModalFormRef, addApi } from '@ionia/libs';
import { Button, Form, message } from 'antd';
import React, { useRef } from 'react';
import './index.less';

export default ({ reload }: any) => {
	const ref = useRef<BizModalFormRef>();
	const [form] = Form.useForm();
	const onCreate = () => {
		form.validateFields().then(async (values: any) => {
			const { code } = await addApi({ ...values });
			if (code == 200) {
				message.success('提交成功!');
				form.resetFields();
				reload();
			}
		});
	};
	const onFinish = async (values: any) => {
		const { code } = await addApi({ ...values });
		if (code == 200) {
			message.success('提交成功!');
			form.resetFields();
			ref.current?.close();
			reload();
		}
	};
	return (
		<BizModalForm
			className='io-cms-user-form__bizmodalform'
			ref={ref}
			form={form}
			title='新建'
			onFinish={onFinish}
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button
						type='default'
						onClick={() => {
							ref.current?.close();
						}}
					>
						取消
					</Button>
					<Button type='default' onClick={onCreate}>
						保存并继续新建
					</Button>
					<Button type='primary' htmlType='submit'>
						保存
					</Button>
				</div>
			)}
		>
			<ProFormText
				name='apiName'
				label='接口名称'
				placeholder='请输入接口名称'
				rules={[{ required: true }, { max: 120 }]}
			/>
			<ProFormText
				name='apiUrl'
				label='接口地址'
				placeholder='请输入接口地址'
				rules={[{ required: true }, { max: 120 }]}
			/>
			<ProFormSelect
				name='requestMethod'
				label='请求方式'
				valueEnum={{
					1: 'GET',
					2: 'POST',
				}}
				placeholder='请选择请求方式'
				rules={[{ required: true, message: '请选择请求方式!' }]}
			/>
			<ProFormTextArea name='useScene' label='使用场景' placeholder='请输入使用场景' />
		</BizModalForm>
	);
};
