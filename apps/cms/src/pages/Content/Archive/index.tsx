import React, { useState, useRef } from 'react';
import { BizTable, BizModalForm, BizModalFormRef } from '@ionia/libs';
import { SortOrder } from 'antd/lib/table/interface';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Button, Form, Input, Space, DatePicker, Tooltip, Modal, Tree } from 'antd';
import OutForm from './Out';
import './index.less';

const sortDirections: SortOrder[] = ['descend', 'ascend'];
const dataSource = [
	{
		id: 11111111,
		title: '【栏目】银保监会：上半年保险消费投诉同比增0.61%',
		contentType: ['top', 'fire', 'toutiao', 'like'],
		deleteName: 'Jim',
		deletePreStatus: 1,
		deleteTime: '2020-3-11 08:46:05',
	},
	{
		id: 2222222,
		title: '【栏目】上交所：上半年保险消费投诉同比增0.61%',
		contentType: ['top', 'fire', 'toutiao'],
		deleteName: 'Black',
		deletePreStatus: 0,
		deleteTime: '2020-3-31 09:10:45',
	},
	{
		id: 333333333,
		title: '【栏目】CBD交易：上半年保险消费投诉同比增0.61%',
		contentType: ['top', 'fire', 'toutiao', 'like', 'bad'],
		deleteName: 'Jim Green',
		deletePreStatus: 2,
		deleteTime: '2020-3-13 07:12:46',
	},
];

const treeData = [
	{
		title: '0-0',
		key: '0-0',
		children: [
			{
				title: '0-0-0',
				key: '0-0-0',
				children: [
					{ title: '0-0-0-0', key: '0-0-0-0' },
					{ title: '0-0-0-1', key: '0-0-0-1' },
					{
						title: '0-0-0-2',
						key: '0-0-0-2',
						children: [
							{ title: '0-0-0-0-0', key: '0-0-0-0-0' },
							{ title: '0-0-0-0-1', key: '0-0-0-0-1' },
							{
								title: '0-0-0-0-2',
								key: '0-0-0-0-2',
								children: [
									{ title: '0-0-0-0-0-0', key: '0-0-0-0-0-0' },
									{
										title: '0-0-0-0-0-1',
										key: '0-0-0-0-0-1',
										children: [
											{ title: '0-0-0-0-0-0-00', key: '0-0-0-0-0-0-00' },
											{
												title: '0-0-0-0--0-1-1',
												key: '0-0-0-0-0-1-1',
												children: [
													{
														title: '0-0-0-0-0-0-0',
														key: '0-0-0-0-0-0-0',
													},
													{
														title: '0-0-0-0-0-0-1',
														key: '0-0-0-0-0-0-1',
														children: [
															{
																title: '0-0-0-0-0-0-0-0',
																key: '0-0-0-0-0-0-0-0',
																children: [
																	{
																		title: '0-0-0-0-0-0-0-0-0',
																		key: '0-0-0-0-0-0-0-0-0',
																		children: [
																			{
																				title:
																					'0-0-0-0-0-0-0-0-0-00000000',
																				key:
																					'0-0-0-0-0-0-0-0-0-000000000',
																			},
																		],
																	},
																],
															},
														],
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				title: '0-0-1',
				key: '0-0-1',
				children: [
					{ title: '0-0-1-0', key: '0-0-1-0' },
					{ title: '0-0-1-1', key: '0-0-1-1' },
					{ title: '0-0-1-2', key: '0-0-1-2' },
				],
			},
			{
				title: '0-0-2',
				key: '0-0-2',
			},
		],
	},
];

export const Archive = () => {
	const [form] = Form.useForm();
	const modalRef = useRef<BizModalFormRef>();
	const [outSelectRowKeys, setOutSelectRowKeys] = useState<number[]>([]); // 出档弹窗表格选择的rowkeys
	const [outGoOtherVisible, setOutGoOtherVisible] = useState<boolean>(false); // 出档到其他栏目弹窗打开或关闭
	const [outGoOtherCheckedKeys, setOutGoOtherCheckedKeys] = useState<string[]>([]);
	const columns = [
		{
			title: '标题',
			key: 'title',
			dataIndex: 'title',
			render: (_: any, row: any) => (
				<Tooltip title={`${row.title}`}>
					<a className='io-cms-user__biztable-username'>{row.title}</a>
				</Tooltip>
			),
		},
		{
			title: '内容类型',
			key: 'contentType',
			dataIndex: 'contentType',
			filters: [
				{
					text: '置顶',
					value: 'top',
				},
				{
					text: '热点',
					value: 'fire',
				},
				{
					text: '头条',
					value: 'toutiao',
				},
				{
					text: '推荐',
					value: 'like',
				},
			],
			onFilter: (value: any, record: any) => record.contentType.indexOf(value) === 0,
		},
		{
			title: '归档人',
			key: 'deleteName',
			dataIndex: 'deleteName',
			ellipsis: true,
			filterIcon: () => <SearchOutlined />,
			filterDropdown: () => (
				<div className='io-cms-cotent-recycle-table-deleteTime-filterDropDown'>
					<Form form={form}>
						<Form.Item name='deleteName' className='deleteTime-filterDropDown_formItem'>
							<Input placeholder='请输入归档人' />
						</Form.Item>
					</Form>
					<Space>
						<Button
							type='primary'
							onClick={() => {
								const deleteName = form.getFieldValue('deleteName');
								console.log(deleteName, '归档人筛选');
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 90 }}
						>
							查询
						</Button>
						<Button
							onClick={() => {
								form.setFieldsValue({ deleteName: '' });
							}}
							size='small'
							style={{ width: 90 }}
						>
							重置
						</Button>
					</Space>
				</div>
			),
		},
		{
			title: '归档前状态',
			key: 'deletePreStatus',
			dataIndex: 'deletePreStatus',
			filters: [
				{
					text: '初稿',
					value: 1,
				},
				{
					text: '已发布',
					value: 2,
				},
				{
					text: '已删除',
					value: 3,
				},
				{
					text: '已还原',
					value: 4,
				},
			],
			onFilter: (value: any, record: any) => [record.deletePreStatus].indexOf(value) === 0,
		},
		{
			title: '归档时间',
			key: 'deleteTime',
			dataIndex: 'deleteTime',
			sorter: (a: any, b: any, order: any) => {
				let atime = new Date(a.deleteTime.replace(/-/g, '/')).getTime();
				let btime = new Date(b.deleteTime.replace(/-/g, '/')).getTime();
				console.log(order, 'dd');
				return atime - btime;
			},
			sortDirections: sortDirections,
			// defaultSortOrder: 'descend',
			filterIcon: () => <SearchOutlined />,
			filterDropdown: () => (
				<div className='io-cms-cotent-recycle-table-deleteTime-filterDropDown'>
					<Form form={form}>
						<Form.Item name='deleteTime' className='deleteTime-filterDropDown_formItem'>
							<DatePicker.RangePicker />
						</Form.Item>
					</Form>
					<Space className='deleteTime-filterDropDown__space' size={40}>
						<Button
							className='deleteTime-filterDropDown-search__button'
							type='primary'
							onClick={() => {
								const time = form.getFieldValue('deleteTime');
								const startTime =
									moment(time[0]).format('YYYY-MM-DD') + ' 00:00:00';
								const endTime = moment(time[1]).format('YYYY-MM-DD') + ' 00:00:00';
								console.log(startTime, endTime);
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 120 }}
						>
							查询
						</Button>
						<Button
							onClick={() => {
								form.setFieldsValue({ deleteTime: '' });
							}}
							size='small'
							style={{ width: 120 }}
						>
							重置
						</Button>
					</Space>
				</div>
			),
		},
	];
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	console.log(outSelectRowKeys, '出档弹窗表格选择的rowkeys');

	return (
		<div className='io-cms-content-archive-container'>
			<BizTable
				rowKey='id'
				renderActions={() => (
					<>
						<BizModalForm
							ref={modalRef}
							title='出档'
							triggerRender={() => (
								<Button
									type='primary'
									disabled={selectedRowKeys.length === 0}
									onClick={() => modalRef.current?.open()}
								>
									出档
								</Button>
							)}
							submitterRender={() => (
								<>
									<Button
										onClick={() => {
											modalRef.current?.close();
										}}
									>
										取消
									</Button>
									<Button
										type='primary'
										onClick={() => {
											// modalRef.current?.close();
											setOutGoOtherVisible(true);
										}}
									>
										出档到其他栏目
									</Button>
								</>
							)}
							width={1015}
						>
							<OutForm
								onChange={selectedRowKeys => setOutSelectRowKeys(selectedRowKeys)}
							/>
						</BizModalForm>
						{/* <div className='io-space-item'>
                            <Button type='primary' disabled={selectedRowKeys.length === 0}>出档</Button>
                        </div> */}
					</>
				)}
				inputPlaceholderText='搜索内容标题'
				columns={columns}
				dataSource={dataSource}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
					checkStrictly: false,
				}}
				pagination={{
					total: 85,
					showSizeChanger: true,
					showQuickJumper: true,
					showTotal: total => `共${total}条`,
					defaultPageSize: 5,
				}}
			/>
			<Modal
				visible={outGoOtherVisible}
				title='出档'
				onCancel={() => setOutGoOtherVisible(false)}
				footer={[
					<Button key='back' onClick={() => setOutGoOtherVisible(false)}>
						取消
					</Button>,
					<Button
						key='submit'
						type='primary'
						onClick={() => console.log(outGoOtherCheckedKeys, '出档到其他栏目')}
					>
						出档
					</Button>,
				]}
				width={496}
				className='io-cms-content-archive-out-go-other-modal-container'
			>
				<Form>
					<Form.Item
						labelCol={{ span: 24 }}
						name='sectionId'
						label='内容所属栏目已被删除，请重新选择栏目：'
						rules={[{ required: true, message: '栏目为必填项' }]}
					>
						<div className='io-cms-content-archive-out-go-other-modal-tree-container'>
							<Tree
								checkable
								treeData={treeData}
								checkStrictly={true}
								onCheck={checkedKeys =>
									setOutGoOtherCheckedKeys(checkedKeys as string[])
								}
								defaultExpandAll
							/>
						</div>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};
