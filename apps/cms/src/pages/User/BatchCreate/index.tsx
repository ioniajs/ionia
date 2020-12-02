import {
	BizPage,
	GobackButton,
	SaveButton,
	EditableTable,
	bacthAddUser,
	UserSaveDTO,
} from '@ionia/libs';
import { Button, Switch, TreeSelect, Form, Input, message, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import shortid from 'shortid';
import React, { useState } from 'react';
import './index.less';

const handleUserSave = async (fileds: UserSaveDTO[]) => {
	const res = await bacthAddUser(fileds);
	return res;
};

export default () => {
	const [saveData, setSaveData] = useState<any>([]);
	const [count, setCount] = useState<number>(1);

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

	const baseTypeTree: any = [
		{
			title: '实践中心',
			value: '4',
		},
		{
			title: '实践所',
			value: '5',
		},
		{
			title: '实践站',
			value: '6',
		},
	];
	const columns: any = [
		{
			title: (
				<span>
					<span className='io-cms-user-batch-create-columns__span'>*</span>用户名
				</span>
			),
			key: 'username',
			dataIndex: 'username',
			width: 164,
			editable: true,
		},
		{
			title: (
				<span>
					<span className='io-cms-user-batch-create-columns__span'>*</span>密码
				</span>
			),
			key: 'cipher',
			dataIndex: 'cipher',
			width: 164,
			editable: true,
			// formItemRender: ({ dataIndex, editing, save, toggleEdit, children, ref }: any) => {
			// 	return editing ? (
			// 		<Form.Item
			// 			style={{ margin: 0 }}
			// 			name={dataIndex}
			// 			rules={[{ required: true, message: '请输入密码' }]}
			// 		>
			// 			<Input ref={ref} onPressEnter={save} onBlur={save} />
			// 		</Form.Item>
			// 	) : (
			// 		<div onClick={toggleEdit}>{children}</div>
			// 	);
			// },
		},
		{
			title: (
				<span>
					<span className='io-cms-user-batch-create-columns__span'>*</span>确认密码
				</span>
			),
			key: 'confirm',
			dataIndex: 'confirm',
			width: 164,
			editable: true,
			// formItemRender: ({ dataIndex, editing, save, toggleEdit, children, ref }: any) => {
			// 	return editing ? (
			// 		<Form.Item
			// 			style={{ margin: 0 }}
			// 			name={dataIndex}
			// 			rules={[
			// 				{ required: true, message: '请输入确认密码' },
			// 				{
			// 					validator: (_rule: any, value: string, callback: any) => {
			// 						const oldVal = form.getFieldValue('cipher');
			// 						if (oldVal !== value) {
			// 							callback(new Error('两次密码输入不一致'));
			// 						} else {
			// 							callback();
			// 						}
			// 					},
			// 				},
			// 			]}
			// 		>
			// 			<Input ref={ref} onPressEnter={save} onBlur={save} />
			// 		</Form.Item>
			// 	) : (
			// 		<div onClick={toggleEdit}>{children}</div>
			// 	);
			// },
		},
		{
			title: (
				<span>
					<span className='io-cms-user-batch-create-columns__span'>*</span>所属阵地
				</span>
			),
			key: 'orgId',
			dataIndex: 'orgId',
			width: 164,
			editable: true,
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
						// rules={[
						// 	{
						// 		required: true,
						// 		message: `${title}是必填项`,
						// 	},
						// ]}
					>
						{/* <Input ref={ref} onPressEnter={save} onBlur={save} /> */}
						<TreeSelect
							// value={uservalue}
							treeData={treeData}
							treeDefaultExpandAll
							// onChange={() => setUserValue(uservalue)}
							// onBlur={save}
						></TreeSelect>
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '所属角色',
			key: 'roleIds',
			dataIndex: 'roleIds',
			width: 165,
			editable: true,
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
					<Form.Item style={{ margin: 0 }} name={dataIndex}>
						<TreeSelect
							// value={uservalue}
							treeData={baseTypeTree}
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
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
			width: 163,
			editable: true,
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
					<Form.Item style={{ margin: 0 }} name={dataIndex}>
						<Input ref={ref} onPressEnter={save} onBlur={save} />
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '联系方式',
			key: 'telephone',
			dataIndex: 'telephone',
			width: 165,
			editable: true,
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
					<Form.Item style={{ margin: 0 }} name={dataIndex}>
						<Input ref={ref} onPressEnter={save} onBlur={save} />
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '电子邮箱',
			key: 'email',
			dataIndex: 'email',
			width: 205,
			editable: true,
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
					<Form.Item style={{ margin: 0 }} name={dataIndex}>
						<Input ref={ref} onPressEnter={save} onBlur={save} />
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 135,
			render: (_: any, row: any) => (
				<Switch checkedChildren='开启' unCheckedChildren='禁用' />
			),
		},
	];
	const [form] = Form.useForm();
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '用户管理' }, { name: '批量新建' }]}
			renderActions={() => {
				return (
					<>
						<GobackButton />
						<SaveButton
							onSave={async () => {
								form.validateFields().then(async values => {
									const saveRes = await handleUserSave(saveData);
									if (saveRes.code === 200) {
										message.success('批量新建成功');
										history.back();
									}
								});
							}}
						/>
					</>
				);
			}}
		>
			<EditableTable
				style={{ marginTop: 24 }}
				operationRender={({ dataSource, setDataSource, changeData, deleteData }) => ({
					title: '操作',
					dataIndex: 'operation',
					render: (_: any, row: any, index: number) => (
						<a
							onClick={() => {
								setDataSource([...deleteData(dataSource, row.key)]);
							}}
						>
							删除
						</a>
					),
				})}
				footerRender={({ dataSource, setDataSource }) => (
					<div className='io-cms-user-batch-create-footer__div'>
						<Button
							onClick={() => {
								const data = [];
								for (let i = 0; i < count; i++) {
									data.push({
										key: shortid.generate(),
										username: '江西赵四',
										cipher: '123456',
										confirm: '123456',
										orgId: '0',
										roleIds: '实践中心',
										realName: '江西吴彦祖',
										telephone: 18707062315,
										email: '2829656235@qq.com',
										status: 1,
									});
								}
								setDataSource([...dataSource, ...data]);
							}}
						>
							添加
						</Button>
						<div className='io-cms-user-batch-create-footer__div-add'>
							<span>添加</span>
							<Input onChange={e => setCount(Number(e.target.value))} />
							<span>条数据</span>
						</div>
						<Form.Item
							name='orgId'
							label={
								<span>
									阵地&nbsp;
									<Tooltip title='添加用户时将默认选中右侧设置的阵地'>
										<InfoCircleOutlined />
									</Tooltip>
								</span>
							}
						>
							<TreeSelect
								className='io-cms-user-batch-create__treeselect'
								// value={uservalue}
								treeData={treeData}
								treeDefaultExpandAll
								// onChange={() => setUserValue(uservalue)}
							/>
						</Form.Item>
						<Form.Item
							name='roleIds'
							label={
								<span>
									角色&nbsp;
									<Tooltip title='添加用户时将默认选中右侧设置的角色'>
										<InfoCircleOutlined />
									</Tooltip>
								</span>
							}
						>
							<TreeSelect
								className='io-cms-user-batch-create__treeselect'
								// value={uservalue}
								treeData={baseTypeTree}
								treeDefaultExpandAll
								// onChange={() => setUserValue(uservalue)}
							></TreeSelect>
						</Form.Item>
					</div>
				)}
				onChange={(data: any) => setSaveData(data)}
				columns={columns}
			/>
		</BizPage>
	);
};
