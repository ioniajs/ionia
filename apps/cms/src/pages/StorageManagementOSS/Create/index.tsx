import React, { useRef } from 'react';
import { BizModalForm, BizModalFormRef, ImageUpload } from '@ionia/libs';
import { ProFormText } from '@ant-design/pro-form';
import { Form, Button, TreeSelect } from 'antd';
import './index.less';

export default () => {
	const [form] = Form.useForm();
	const ref = useRef<BizModalFormRef>();
	return (
		<BizModalForm
			form={form}
			ref={ref}
			className='io-cms-storage-managment-oss__bizmodalform'
			title='新建OSS'
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button>取消</Button>
					<Button htmlType='submit' type='primary'>
						保存并继续新建
					</Button>
					<Button htmlType='submit' type='primary'>
						保存
					</Button>
				</div>
			)}
		>
			<Form.Item name='orgId' label='储存类型' rules={[{ required: true }]}>
				<TreeSelect
					style={{ width: '100%' }}
					// value={value}
					dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
					// treeData={treeData}
					placeholder='请选择所属的阵地'
					treeDefaultExpandAll
					// onChange={onChange}
				/>
			</Form.Item>
			<ProFormText
				name='bucket'
				label='Bucket名'
				placeholder='请输入Bucket名'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='secretld'
				label='secretld'
				placeholder='请输入secretld'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='endPoint'
				label='endPoint'
				placeholder='请输入endPoint'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='domain'
				label='访问域名'
				placeholder='请输入访问域名'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='appKey'
				label='appKey'
				placeholder='请输入appKey'
				rules={[{ required: true }]}
			/>
		</BizModalForm>
	);
};
