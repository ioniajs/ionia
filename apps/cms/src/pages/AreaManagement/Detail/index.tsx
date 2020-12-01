import React, { useRef } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { ProFormText } from '@ant-design/pro-form';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Form, TreeSelect, Tooltip, Switch, Button } from 'antd';
import './index.less';

export default () => {
	const [form] = Form.useForm();
	const ref = useRef<BizModalFormRef>();
	return (
		<BizModalForm
			form={form}
			ref={ref}
			className='io-cms-area-management__bizmodalform'
			title='新建区域'
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
			<Form.Item
				name='superiorArea'
				label='上级区域'
				rules={[{ required: true }, { message: '请选择上级区域' }]}
			>
				<TreeSelect placeholder='请选择上级区域' />
			</Form.Item>
			<ProFormText
				name='name'
				label='区域名称'
				placeholder='请输入区域名称'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='number'
				label='编号'
				placeholder='请输入编号'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='sort'
				label='排序值'
				placeholder='请输入排序值'
				rules={[{ required: true }]}
			/>
			<Form.Item
				name='status'
				label={
					<span>
						状态&nbsp;
						<Tooltip title='再读取行政区划时不显示禁用状态的区域'>
							<InfoCircleOutlined />
						</Tooltip>
					</span>
				}
			>
				<Switch checkedChildren='开启' unCheckedChildren='关闭' />
			</Form.Item>
		</BizModalForm>
	);
};
