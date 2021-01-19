import React, { useState, useRef } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { Form, Radio, Input, Button, message } from 'antd';
import { checkVolunteers, VolunteerCheckDTO } from '@ionia/libs/src/services';

interface CheckFormProps {
	id: string;
	reloadData?: () => void;
}

const handleCheck = async (filed: VolunteerCheckDTO[]) => {
	const checkRes = await checkVolunteers(filed);
	if (checkRes.code === 200) {
		message.success('审核成功');
	} else {
		message.error('审核失败');
	}
	return checkRes.code;
};

export default ({ id, reloadData }: CheckFormProps) => {
	const modalRef = useRef<BizModalFormRef>();
	const [checkStatusValue, setCheckStatusValue] = useState<number>(1);
	const [form] = Form.useForm();
	return (
		<BizModalForm
			ref={modalRef}
			title='志愿者审核'
			triggerRender={() => (
				<a
					onClick={() => {
						modalRef.current?.open();
					}}
				>
					审核
				</a>
			)}
			submitterRender={() => (
				<>
					<Button onClick={() => modalRef.current?.close()}>取消</Button>
					<Button
						type='primary'
						onClick={() => {
							form.validateFields().then(async values => {
								const param = {
									id: id,
									checkStatus: values.checkStatus,
									notPassReason:
										values.checkStatus === 3 ? values.notPassReason : '',
								};
								const success = await handleCheck([param]);
								if (success === 200) {
									modalRef.current?.close();
									reloadData && reloadData();
								}
							});
						}}
					>
						确定
					</Button>
				</>
			)}
		>
			<Form form={form}>
				<Form.Item
					name='checkStatus'
					label='审核结果'
					rules={[{ required: true }]}
					initialValue={1}
				>
					<Radio.Group onChange={e => setCheckStatusValue(e.target.value)}>
						<Radio value={1}>通过</Radio>
						<Radio value={3}>未通过</Radio>
					</Radio.Group>
				</Form.Item>
				{checkStatusValue === 3 && (
					<Form.Item name='notPassReason' label='未通过原因' rules={[{ required: true }]}>
						<Input maxLength={50} placeholder='请输入未通过原因' />
					</Form.Item>
				)}
			</Form>
		</BizModalForm>
	);
};
