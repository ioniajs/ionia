import React from 'react';
import { BizPage, GobackButton, SaveButton, EditableTable } from '@ionia/libs';
import { Form, TreeSelect, Tooltip, message, Input, Button } from 'antd';
import shortid from 'shortid';

export default () => {
	const treeData: any = [
		{
			title: 'Node1',
			value: '0',
			children: [
				{
					title: 'Child Node1',
					value: '1',
				},
				{
					title: 'Child Node2',
					value: '2',
				},
			],
		},
		{
			title: 'Node2',
			value: '3',
		},
	];
	const treeBatchCreateData: any = [
		{
			title: '实践中心',
			value: '4',
		},
		{
			title: '实践所',
			value: '4',
		},
		{
			title: '实践站',
			value: '4',
		},
	];
	const columns = [
		{
			title: '阵地名称',
			key: 'name',
			dataIndex: 'name',
			editable: true,
			width: 635,
		},
		{
			title: '所属地区',
			key: 'area',
			dataIndex: 'area',
			editable: true,
			width: 240,
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
								message: `${title}是必填项`,
							},
						]}
					>
						{/* <Input ref={ref} onPressEnter={save} onBlur={save} /> */}
						<TreeSelect
							// value={uservalue}
							treeData={treeData}
							treeDefaultExpandAll
							// onChange={() => setUserValue(uservalue)}
						></TreeSelect>
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '阵地类型',
			key: 'type',
			dataIndex: 'type',
			editable: true,
			width: 240,
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
								message: `${title}是必填项`,
							},
						]}
					>
						{/* <Input ref={ref} onPressEnter={save} onBlur={save} /> */}
						<TreeSelect
							// value={uservalue}
							treeData={treeBatchCreateData}
							treeDefaultExpandAll
							// onChange={() => setUserValue(uservalue)}
						></TreeSelect>
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '阵地编号',
			key: 'code',
			dataIndex: 'code',
			editable: true,
			width: 240,
			formItemRender: ({ dataIndex, editing, save, toggleEdit, children, ref }: any) => {
				return editing ? (
					<Form.Item style={{ margin: 0 }} name={dataIndex}>
						<Input ref={ref} onPressEnter={save} onBlur={save} />
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '排序',
			key: 'sortNo',
			dataIndex: 'sortNo',
			editable: true,
			formItemRender: ({ dataIndex, editing, save, toggleEdit, children, ref }: any) => {
				return editing ? (
					<Form.Item style={{ margin: 0 }} name={dataIndex}>
						<Input ref={ref} onPressEnter={save} onBlur={save} />
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
	];

	const [form] = Form.useForm();
	return (
		<BizPage
			showActions={true}
			breadcrumbs={[{ name: '实践阵地' }, { name: '批量新建' }]}
			renderActions={() => {
				return (
					<>
						<GobackButton />
						<SaveButton />
					</>
				);
			}}
		>
			<div className='io-cms-practice-base-batch-create__div'>
				<Form form={form} style={{ marginTop: 24 }}>
					<Form.Item
						label='上级阵地'
						name='parentId'
						rules={[{ required: true, message: '请选择上级阵地' }]}
					>
						<TreeSelect
							placeholder='请选择上级阵地'
							// treeData={baseTypeTree}
							showSearch={true}
							style={{ width: 224, height: 32 }}
						/>
					</Form.Item>
				</Form>
			</div>
			<EditableTable
				operationRender={({ dataSource, setDataSource, changeData, deleteData }) => ({
					title: '操作',
					dataIndex: 'operation',
					render: (_: any, row: any, index: number) => (
						<>
							<Tooltip title='新建同级' placement='bottomRight'>
								<i
									className='iconfont icon-plus1'
									onClick={() => {
										if (!row?.parentId) {
											const a = [
												...changeData(dataSource, row.key, {
													key: shortid.generate(),
													name: `阵地名称同级${shortid.generate()}`,
													area: '西湖区万达',
													type: '实践所',
													code: 123,
													sortNo: 0,
												}),
											];
											const obj: any = {};
											const temp = dataSource.concat(a);
											const temps = temp.reduce((cur, next: any) => {
												obj[next.key]
													? ''
													: (obj[next.key] = true && cur.push(next));
												return cur;
											}, []);
											setDataSource(temps);
										}
									}}
								/>
							</Tooltip>
							&nbsp;
							<Tooltip title='新建下级' placement='bottomRight'>
								<i
									className='iconfont icon-plus1'
									onClick={() => {
										setDataSource([
											...changeData(
												dataSource,
												row.key,
												{
													key: shortid.generate(),
													name: '阵地名称下级',
													area: '西湖万达',
													type: '实践所',
													code: 321,
													sortNo: 0,
													parentId: index + 1,
												},
												true
											),
										]);
									}}
								/>
							</Tooltip>
							&nbsp;
							<Tooltip title='删除' placement='bottomRight'>
								<i
									className='iconfont icon-delete'
									onClick={() => {
										if (dataSource.length === 1) {
											message.error('无法删除，请最少填写一个站点数据');
											return;
										}
										setDataSource([...deleteData(dataSource, row.key)]);
									}}
								/>
							</Tooltip>
							&nbsp;
						</>
					),
				})}
				columns={columns}
				// dataSource={[
				// 	{
				// 		key: '0',
				// 		name: '阵地名称',
				// 		area: '西湖万达',
				// 		type: '实践所',
				// 		code: 321,
				// 		sortNo: 0,
				// 	},
				// ]}
				footerRender={({ dataSource, setDataSource }) => (
					<Button
						type='dashed'
						onClick={() => {
							const key = shortid.generate();
							setDataSource([
								...dataSource,
								{
									key: shortid.generate(),
									name: `阵地名称同级${shortid.generate()}`,
									area: '西湖区万达',
									type: '实践所',
									code: 123,
									sortNo: 0,
								},
							]);
						}}
					>
						<i className='iconfont icon-plus1' style={{ fontSize: '16px' }} />
						添加
					</Button>
				)}
			/>
		</BizPage>
	);
};
