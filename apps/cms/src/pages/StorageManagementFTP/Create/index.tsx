import React, { useRef } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
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
			className='io-cms-storage-managment-ftp__bizmodalform'
			title='新建FTP'
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
			<ProFormText
				name='name'
				label='FTP名称'
				placeholder='请输入FTP名称'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='Ip'
				label='服务器Ip'
				placeholder='请输入服务器Ip'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='port'
				label='端口号'
				placeholder='请输入端口号'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='catalogue'
				label='远程目录'
				placeholder='请输入远程目录'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='admin'
				label='登录名'
				placeholder='登录名'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='password'
				label='密码'
				placeholder='密码'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='coding'
				label='编码'
				placeholder='编码'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='domain'
				label='资源访问域名'
				placeholder='资源访问域名'
				rules={[{ required: true }]}
			/>
		</BizModalForm>
	);
};
