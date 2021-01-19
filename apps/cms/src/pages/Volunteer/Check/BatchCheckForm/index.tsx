import React, { useState, useEffect } from 'react';
import { BizTable } from '@ionia/libs';
import { Radio, Input, Form } from 'antd';

interface SelectedInfos {
	id: string;
	avatar?: string;
	username?: string;
	phone?: string;
	checkStatus: number;
	notPassReason?: string;
}
interface RowsValueProps {
	id: string;
	checkStatus: number;
	notPassReason?: string;
}
interface BatchCheckFormProps {
	selectedInfos: SelectedInfos[];
	onConfirm?: () => void;
	form?: any;
	onGetValues?: (value: RowsValueProps[]) => void;
}

export default ({ selectedInfos, form, onGetValues }: BatchCheckFormProps) => {
	// const [form] = Form.useForm();
	const [checkStatusValue, setCheckStatusValue] = useState<number>(1);
	const [notPassReasonValue, setNotPassReasonValue] = useState<string>('');
	const [rowsValue, setRowsValue] = useState<RowsValueProps[]>(selectedInfos);
	useEffect(() => {
		if (rowsValue) {
			const tempVal = rowsValue.map((r: any) => ({
				id: r.id,
				checkStatus: r.checkStatus,
				notPassReason: r.notPassReason,
			}));
			onGetValues && onGetValues(tempVal);
		}
	}, [rowsValue, checkStatusValue, notPassReasonValue]);
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
					<Form form={form}>
						<Form.Item
							name={`checkStatus_${index}`}
							label=''
							initialValue={1}
							style={{ display: 'inline-block', marginBottom: '0px' }}
						>
							<Radio.Group
								style={{ display: 'inline-block' }}
								onChange={e => {
									const tempCheckStatus = e.target.value;
									rowsValue[index].checkStatus = tempCheckStatus;
									rowsValue[index].id = row.id;
									rowsValue[index].notPassReason = '';
									setCheckStatusValue(tempCheckStatus);
									setRowsValue(rowsValue);
									form.setFieldsValue({ [`notPassReason_${index}`]: '' });
								}}
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
									onChange={e => {
										const tempNotPassValue = e.target.value;
										rowsValue[index].notPassReason = tempNotPassValue;
										rowsValue[index].id = row.id;
										setNotPassReasonValue(tempNotPassValue);
										setRowsValue(rowsValue);
									}}
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
			rowKey='id'
			toolBarRender={false}
			dataSource={selectedInfos}
			columns={columns}
			pagination={false}
		/>
	);
};
