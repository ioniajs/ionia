import { BizPage } from '@ionia/libs';
import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default () => {
	const onFinish = (values: any) => {
		console.log('Received values of form:', values);
	};

	return (
		<BizPage>
			<Form name='dynamic_form_nest_item' onFinish={onFinish} autoComplete='off'>
				<Form.List name='users'>
					{(fields, { add, remove }) => (
						<>
							{fields.map(field => (
								<Space
									key={field.key}
									style={{ display: 'flex', marginBottom: 8 }}
									align='baseline'
								>
									<Form.Item
										{...field}
										name={[field.name, 'first']}
										fieldKey={[field.fieldKey, 'first']}
										rules={[{ required: true, message: 'Missing first name' }]}
									>
										<Input placeholder='First Name' />
									</Form.Item>
									<Form.Item
										{...field}
										name={[field.name, 'last']}
										fieldKey={[field.fieldKey, 'last']}
										rules={[{ required: true, message: 'Missing last name' }]}
									>
										<Input placeholder='Last Name' />
									</Form.Item>
									<MinusCircleOutlined onClick={() => remove(field.name)} />
								</Space>
							))}
							<Form.Item>
								<Button
									type='dashed'
									onClick={() => add()}
									block
									icon={<PlusOutlined />}
								>
									Add field
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</BizPage>
	);
};
