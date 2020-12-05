import React, { useState } from 'react';
import { BizTable } from '@ionia/libs';
import { SortOrder } from 'antd/lib/table/interface';
import { Button, Input, Space, DatePicker, Form, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import RestoreSectionForm from './RestoreSection';
import './index.less';

const sortDirections: SortOrder[] = ['descend', 'ascend'];

const dataSource = [
	{
		id: 11,
		title: '【栏目】银保监会：上半年保险消费投诉同比增0.61%',
		contentType: ['top', 'fire', 'toutiao', 'like'],
		deleteName: 'Jim',
		deletePreStatus: 1,
		deleteTime: '2020-3-11 08:46:05',
	},
	{
		id: 12,
		title: '【栏目】上交所：上半年保险消费投诉同比增0.61%',
		contentType: ['top', 'fire', 'toutiao'],
		deleteName: 'Black',
		deletePreStatus: 0,
		deleteTime: '2020-3-31 09:10:45',
	},
	{
		id: 13,
		title: '【栏目】CBD交易：上半年保险消费投诉同比增0.61%',
		contentType: ['top', 'fire', 'toutiao', 'like', 'bad'],
		deleteName: 'Jim Green',
		deletePreStatus: 2,
		deleteTime: '2020-3-13 07:12:46',
	},
];

export const Recycle = () => {
	const [form] = Form.useForm();

	const columns = [
		{
			title: '标题',
			key: 'title',
			dataIndex: 'title',
			ellipsis: true,
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
			title: '删除人',
			key: 'deleteName',
			dataIndex: 'deleteName',
			ellipsis: true,
			filterIcon: () => <SearchOutlined />,
			filterDropdown: () => (
				<div className='io-cms-cotent-recycle-table-deleteTime-filterDropDown'>
					<Form form={form}>
						<Form.Item name='deleteName' className='deleteTime-filterDropDown_formItem'>
							<Input placeholder='请输入删除人' />
						</Form.Item>
					</Form>
					<Space>
						<Button
							type='primary'
							onClick={() => {
								const deleteName = form.getFieldValue('deleteName');
								console.log(deleteName, '删除人筛选');
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
			title: '删除前状态',
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
			title: '删除时间',
			key: 'deleteTime',
			dataIndex: 'deleteTime',
			sorter: (a: any, b: any, order: any) => {
				// let atime = new Date(a.deleteTime.replace(/-/g, '/')).getTime();
				// let btime = new Date(b.deleteTime.replace(/-/g, '/')).getTime();
				// return atime - btime;
				console.log(order, 'dd');
			},
			sortDirections: sortDirections,
			defaultSortOrder: 'descend',
			filterIcon: () => <SearchOutlined />,
			filterDropdown: () => (
				<div className='io-cms-cotent-recycle-table-deleteTime-filterDropDown'>
					<Form form={form}>
						<Form.Item name='deleteTime' className='deleteTime-filterDropDown_formItem'>
							<DatePicker.RangePicker showTime />
						</Form.Item>
					</Form>
					<Space className='deleteTime-filterDropDown__space' size={40}>
						<Button
							className='deleteTime-filterDropDown-search__button'
							type='primary'
							onClick={() => {
								const time = form.getFieldValue('deleteTime');
								const startTime = moment(time[0]).format('YYYY-MM-DD HH:mm:ss');
								const endTime = moment(time[1]).format('YYYY-MM-DD HH:mm:ss');
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
	return (
		<div>
			<BizTable
				rowKey='id'
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Button
								type='primary'
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.confirm({
										title: '你确定删除选中内容吗？',
										content: '删除后无法恢复。',
										okText: '删除',
										onOk: () => {
											console.log(selectedRowKeys, '删除的节点');
										},
									});
								}}
							>
								删除内容
							</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default' disabled={selectedRowKeys.length === 0}>
								还原内容
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.confirm({
										title: '你确定删除选中栏目吗？',
										content:
											'删除栏目将同时删除子栏目及栏目中的内容，删除后无法恢复。',
										okText: '删除',
										onOk: () => {},
									});
								}}
							>
								删除栏目
							</Button>
						</div>
						<div className='io-space-item'>
							<RestoreSectionForm />
							{/* <Button type='default'>还原栏目</Button> */}
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								onClick={() => {
									Modal.confirm({
										title: '你确定删除回收站中的全部栏目及内容吗？',
										content: '删除后无法恢复。',
										okText: '删除',
										onOk: () => {},
									});
								}}
							>
								清空回收站
							</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'搜索内容标题'}
				columns={columns}
				dataSource={dataSource}
				// onChange={(pagination, filters, sorter) => { console.log(pagination, filters, sorter, 'onhcangggg') }}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
					checkStrictly: false,
				}}
				pagination={{
					total: 30,
					showSizeChanger: true,
					showQuickJumper: true,
					showTotal: total => `共${total}条`,
					defaultPageSize: 5,
				}}
			/>
		</div>
	);
};
