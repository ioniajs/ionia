import React from 'react';
import { Form } from 'antd';
import EditableContext from '../EditableContext';

interface EditableRowProps {
	index: number;
}

const EditableRow = ({ index, ...props }: EditableRowProps) => {
	const [form] = Form.useForm();
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	);
};

export default EditableRow;
