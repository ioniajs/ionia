import React, { useState } from 'react';
import { BizTable } from '@ionia/libs';
import { Radio, Input, Form } from 'antd';

interface SelectedInfos {
	id?: string;
	avatar?: string;
	username?: string;
	phone?: string;
}

interface BatchCheckFormProps {
	selectedInfos?: SelectedInfos[];
}

export default ({ selectedInfos }: BatchCheckFormProps) => {
	const [form] = Form.useForm();
	const [checkStatusValue, setCheckStatusValue] = useState<number>(1);
	const columns = [
		{
			title: '用户信息',
			key: 'username',
			dataIndex: 'username',
		},
		{
			title: '审核结果',
			key: 'operation',
			dataIndex: 'operation',
			render: (_: any, row: any, index: number) => (
				<>
					<Form>
						<Form.Item
							name={`checkStatus_${index}`}
							label=''
							initialValue={1}
							style={{ display: 'inline-block', marginBottom: '0px' }}
						>
							<Radio.Group
								style={{ display: 'inline-block' }}
								onChange={e => setCheckStatusValue(e.target.value)}
							>
								<Radio value={1}>通过</Radio>
								<Radio value={3}>未通过</Radio>
							</Radio.Group>
						</Form.Item>
						{checkStatusValue === 3 && (
							<Form.Item
								name={`notPassReason_${index}`}
								label=''
								rules={[{ required: true }]}
								style={{ display: 'inline-block', marginBottom: '0px' }}
							>
								<Input
									placeholder='请输入未通过原因'
									maxLength={50}
									style={{ display: 'inline-block', width: '200px' }}
								/>
							</Form.Item>
						)}
					</Form>
				</>
			),
		},
	];

	return (
		<BizTable
			toolBarRender={false}
			dataSource={selectedInfos}
			columns={columns}
			pagination={false}
		/>
	);
};
