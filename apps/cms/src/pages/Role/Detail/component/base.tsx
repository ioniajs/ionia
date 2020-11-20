import React from 'react';
import { Button, Form, Input } from 'antd';
import './base.less';
import { useRequest } from 'ahooks';
import { roleDetail, logger } from '@ionia/libs';
const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
};
export const Base = ({ id }: any) => {
	const { data } = useRequest(() => roleDetail(id));
	// Object.keys(form.getFieldsValue()).forEach(key => {
	// 	const obj = {};
	// 	if (data[key]) {
	// 	  obj[key] = data[key] || null;
	// 	}
	// 	form.setFieldsValue(obj);
	//   });
	// };
	logger.debug(data);
	return (
		<>
			<div className='base-button'>
				<Button type='primary'>保存</Button>
				<Button>删除</Button>
			</div>
			<Form name='basic' {...layout}>
				<Form.Item
					label='所属组织'
					name='username'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='角色名称'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item label='创建人' name='password'>
					<Input bordered={false} />
				</Form.Item>
				<Form.Item label='创建时间' name='password'>
					<Input bordered={false} />
				</Form.Item>
			</Form>
		</>
	);
};
