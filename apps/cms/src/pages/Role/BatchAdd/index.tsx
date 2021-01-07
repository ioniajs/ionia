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
			value: 'Node1',
			children: [
				{
					title: 'Child Node1',
					value: 'Child Node1',
				},
				{
					title: 'Child Node2',
					value: 'Child Node2',
				},
			],
		},
		{
			title: 'Node2',
			value: 'Node2',
		},
	];
	const columns: any = [
		{
			title: (
				<span>
					<span className='io-cms-user-batch-create-columns__span'>*</span>角色名称
				</span>
			),
			dataIndex: 'name',
			editable: true,
		},
		{
			title: (
				<span>
					<span className='io-cms-user-batch-create-columns__span'>*</span>所属阵地
				</span>
			),
			key: 'orgId',
			dataIndex: 'orgId',
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
						{/* <Input ref={ref} onPressEnter={save} onBlur={save} /> */}
						<TreeSelect
							// value={uservalue}
							treeData={treeData}
							treeDefaultExpandAll
							// onChange={() => setUserValue(uservalue)}
							onBlur={save}
						></TreeSelect>
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: (
				<span>
					<span className='io-cms-user-batch-create-columns__span'>*</span>描述
				</span>
			),
			dataIndex: 'description',
			editable: true,
		},
	];
	const [form] = Form.useForm();
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '角色' }, { name: '批量新建' }]}
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
										name: '',
										orgId: '0',
										description: '',
									});
								}
								setDataSource([...dataSource, ...data]);
							}}
						>
							添加
						</Button>
						<div className='io-cms-user-batch-create-footer__div-add'>
							<span>添加</span>
							<Input onChange={e => setCount(Number(e.target.value))} value={count} />
							<span>条数据</span>
						</div>
						<Form.Item
							name='orgId'
							style={{ width: '500px' }}
							label={
								<span>
									阵地&nbsp;
									<Tooltip title='添加角色时将默认选中右侧设置的阵地'>
										<InfoCircleOutlined />
									</Tooltip>
								</span>
							}
						>
							<TreeSelect
								className='io-cms-user-batch-create__treeselect'
								placeholder='请选择角色所属阵地'
								// value={uservalue}
								treeData={treeData}
								treeDefaultExpandAll
								// onChange={() => setUserValue(uservalue)}
							/>
						</Form.Item>
					</div>
				)}
				onChange={(data: any) => setSaveData(data)}
				columns={columns}
			/>
		</BizPage>
	);
};
