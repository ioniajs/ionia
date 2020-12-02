import { BizPage, EditableTable } from '@ionia/libs';
import { Button, Divider, Form, Input } from 'antd';
import React, { MutableRefObject } from 'react';
import shortid from 'shortid';

export default () => {
	const columns = [
		{
			title: 'name',
			dataIndex: 'name',
			width: '30%',
			editable: true,
		},
		{
			title: 'age',
			dataIndex: 'age',
			editable: true,
			onCellEditing: (ref: MutableRefObject<any>) => {
				ref.current?.focus();
			},
			formItemRender: ({
				title,
				dataIndex,
				editing,
				save,
				toggleEdit,
				children,
				ref,
			}: any) => {
				return editing ? (
					<Form.Item
						style={{ margin: 0 }}
						name={dataIndex}
						rules={[
							{
								required: true,
								message: `${title} is required.`,
							},
						]}
					>
						<Input type='number' ref={ref} onPressEnter={save} onBlur={save} />
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
	];

	const dataSource = [
		{
			key: '0',
			name: '',
			age: 32,
			children: [
				{
					key: '00',
					name: 'Edward King 0',
					age: 32,
				},
			],
		},
		{
			key: '1',
			name: 'Edward King 1',
			age: 32,
		},
	];

	return (
		<BizPage>
			<EditableTable
				columns={columns}
				dataSource={dataSource}
				onChange={() => {}}
				operationRender={({ dataSource, setDataSource, changeData, deleteData }) => ({
					title: '操作',
					dataIndex: 'operation',
					render: (_: any, row: any) => (
						<>
							<a
								onClick={() => {
									setDataSource([
										...changeData(
											dataSource,
											row.key,
											{
												key: shortid.generate(),
												name: shortid.generate(),
												age: 0,
											},
											true
										),
									]);
								}}
							>
								新增子节点
							</a>
							<Divider type='vertical' />
							<a
								onClick={() => {
									setDataSource([...deleteData(dataSource, row.key)]);
								}}
							>
								删除
							</a>
						</>
					),
				})}
				footerRender={({ dataSource, setDataSource }) => (
					<Button
						onClick={() => {
							const key = shortid.generate();
							setDataSource([
								...dataSource,
								{
									key,
									name: key,
									age: 0,
								},
							]);
						}}
					>
						添加
					</Button>
				)}
			/>
		</BizPage>
	);
};
