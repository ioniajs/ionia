import {
	BizPage,
	GobackButton,
	SaveButton,
	EditableTable,
	batchAddRole,
	positionList,
} from '@ionia/libs';
import { Button, Switch, TreeSelect, Form, Input, message, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import shortid from 'shortid';
import React, { useState } from 'react';
import './index.less';
import { useRequest } from 'ahooks';

export default () => {
	useRequest(() => positionList({ crux: '', isAll: true, parentId: '' }), {
		onSuccess: data => {
			setTreeData([...loop(data.data)]);
		},
	});
	const [saveData, setSaveData] = useState<any>([]);
	const [count, setCount] = useState<number>(1);
	const [orgValue, setOrgValue] = useState(undefined);
	const [treeData, setTreeData] = useState<any[]>([]);
	const loop = (data: any) => {
		return data.map((item: any) => {
			return { title: item.name, value: item.id, children: loop(item.children) };
		});
	};
	const columns: any = [
		{
			title: (
				<span>
					<span className='io-cms-user-batch-create-columns__span'>*</span>角色名称
				</span>
			),
			key: 'name',
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
							value={orgValue}
							treeData={treeData}
							treeDefaultExpandAll
							onChange={(value: any) => setOrgValue(value)}
							onBlur={save}
						></TreeSelect>
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '描述',
			key: 'description',
			dataIndex: 'description',
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
									const saveRes = await batchAddRole(saveData);
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
				operationRender={({ dataSource, setDataSource, changeData, deleteData }: any) => ({
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
				footerRender={({ dataSource, setDataSource }: any) => (
					<div className='io-cms-user-batch-create-footer__div'>
						<Button
							onClick={() => {
								const data = [];
								for (let i = 0; i < count; i++) {
									data.push({
										key: shortid.generate(),
										name: '江西金磊科技',
										orgId: orgValue || '0',
										description: '测试',
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
							style={{ width: '300px' }}
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
								value={orgValue}
								treeData={treeData}
								treeDefaultExpandAll
								onChange={(value: any) => setOrgValue(value)}
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
