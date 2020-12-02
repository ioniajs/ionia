import React, { useRef } from 'react';
import { ProFormText } from '@ant-design/pro-form';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { Form, Button } from 'antd';
import './index.less';

export default () => {
	const [form] = Form.useForm();
	const ref = useRef<BizModalFormRef>();

	return (
		<BizModalForm
			form={form}
			ref={ref}
			className='io-cms-blogroll-create__bizmodalform'
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
				name='classify'
				label='分类名称'
				placeholder='请输入分类名称'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='number'
				label='编号'
				placeholder='请输入编号'
				rules={[{ required: true }]}
			/>
		</BizModalForm>
	);
};
