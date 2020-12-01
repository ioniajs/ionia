import React, { useRef } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { Form, Button } from 'antd';
import './index.less';

export default () => {
	const [form] = Form.useForm();
	const ref = useRef<BizModalFormRef>();
	return (
		<BizModalForm
			form={form}
			ref={ref}
			className='io-cms-source-create__bizmodalform'
			title='新建/编辑分类'
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
				label='来源名称'
				placeholder='请输入来源名称'
				rules={[{ required: true }]}
			/>
			<ProFormText name='url' label='来源链接' placeholder='请输入来源链接' />
			<ProFormSwitch name='default' label='设为默认来源' initialValue={true} />
			<ProFormSwitch name='open' label='新窗口打开了链接' initialValue={true} />
		</BizModalForm>
	);
};
