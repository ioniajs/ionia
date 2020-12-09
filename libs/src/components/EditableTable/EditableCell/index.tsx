import { Form, Input } from 'antd';
import React, { MutableRefObject, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import EditableContext from '../EditableContext';

interface EditableCellProps {
	title: ReactNode;
	editable: boolean;
	children: any;
	dataIndex: string;
	record: any;
	formItemRender?: (params: any) => ReactNode;
	onCellEditing?: (ref: MutableRefObject<any>) => void;
	handleSave: (record: any) => void;
}

const EditableCell = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	formItemRender,
	onCellEditing,
	handleSave,
	...restProps
}: EditableCellProps) => {
	const [editing, setEditing] = useState(false);
	const ref = useRef<any>();
	const form = useContext(EditableContext);

	useEffect(() => {
		if (editing) {
			onCellEditing ? onCellEditing(ref) : ref.current?.focus();
		}
	}, [editing]);

	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({ [dataIndex]: record[dataIndex] });
	};

	const save = async (e: any) => {
		try {
			const values = await form.validateFields();
			toggleEdit();
			handleSave({ ...record, ...values });
		} catch (errInfo) {
			console.log('Save failed:', errInfo);
		}
	};

	const defaultFormItemRender = () => {
		return editing ? (
			<Form.Item
				style={{ margin: 0 }}
				name={dataIndex}
				rules={[
					{
						required: true,
						message: `${title}是必填项`,
					},
				]}
			>
				<Input ref={ref} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : children && !children[1] ? (
			<div onClick={toggleEdit}>请输入{title}</div>
		) : (
			<div onClick={toggleEdit}>{children}</div>
		);
	};

	return (
		<td {...restProps}>
			{editable
				? formItemRender
					? formItemRender({
							editing,
							title,
							dataIndex,
							save,
							toggleEdit,
							children,
							ref,
					  })
					: defaultFormItemRender()
				: children}
		</td>
	);
};

export default EditableCell;
