import { ExclamationCircleOutlined } from '@ant-design/icons';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import {
	AdminGoodsCategoryItemVO,
	BizPage,
	goodsOrdersDelete,
	goodsOrdersPage,
	logger,
} from '@ionia/libs';
import { Button, DatePicker, Form, Image, Input, message, Modal, Space } from 'antd';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import './index.less';
import { useHistory } from 'react-router-dom';
const { confirm } = Modal;
const { RangePicker } = DatePicker;
const ExchangeRecordList = () => {
	const history = useHistory();
	const ref = useRef<ActionType>();
	const [form] = Form.useForm();
	const [dateForm] = Form.useForm();
	const params = {
		pageNo: 1,
		pageSize: 10,
		code: '',
		pageSort: '',
		beginCashTime: '',
		beginCreateTime: '',
		endCashTime: '',
		endCreateTime: '',
	};
	const [value, setValue] = useState('');
	const [orderParams, setCategoryParams] = useState(params);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const columns: ProColumns<AdminGoodsCategoryItemVO>[] = [
		{
			title: '订单号',
			dataIndex: 'code',
			render: (_: any, row: any) => (
				<a
					onClick={() => {
						history.push(`/point-mall/commodity-order/detail/${row.id}`);
					}}
				>
					{_}
				</a>
			),
		},
		{
			title: '兑换用户',
			dataIndex: 'username',
			render: (_: any, row: any) => (
				<div>
					<p>{row.username}</p>
					<p>{row.fullName}</p>
				</div>
			),
		},
		{
			title: '商品信息',
			dataIndex: 'goodsName',
			render: (_: any, row: any) => (
				<div className='io-cms-commdity-management-good_image'>
					<Image width={72} src={row.coverResId} />
					<span>{_}</span>
				</div>
			),
		},
		{
			title: '积分价格',
			dataIndex: 'realIntegral',
			sorter: true,
		},
		{
			title: '兑换量',
			dataIndex: 'num',
			sorter: true,
		},
		{
			title: '状态',
			dataIndex: 'num',
			render: (_, row) => {
				return _ == 1 ? '待兑现' : '兑现成功';
			},
		},

		{
			title: '兑换时间',
			dataIndex: 'createTime',
			sorter: (a, b, order) => {
				let sort = order == 'ascend' ? 'asc' : 'desc';
				setCategoryParams({ ...orderParams, pageSort: `updateTime  ${sort}` });
				return new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime();
			},
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={dateForm}>
						<Form.Item name='date'>
							<RangePicker format='YYYY-MM-DD' allowClear />
						</Form.Item>
					</Form>
					<Space />
					<div className='io-cms-commodity-category-container_search'>
						<Button type='primary' onClick={onSearch}>
							查询
						</Button>
						<Button
							onClick={() => {
								dateForm.resetFields();
							}}
						>
							重置
						</Button>
					</div>
				</div>
			),
		},
		{
			title: '兑现时间',
			dataIndex: 'cashTime',
			sorter: (a, b, order) => {
				let sort = order == 'ascend' ? 'asc' : 'desc';
				setCategoryParams({ ...orderParams, pageSort: `updateTime  ${sort}` });
				return new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime();
			},
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={dateForm}>
						<Form.Item name='date'>
							<RangePicker format='YYYY-MM-DD' allowClear />
						</Form.Item>
					</Form>
					<Space />
					<div className='io-cms-commodity-category-container_search'>
						<Button type='primary' onClick={onSearch}>
							查询
						</Button>
						<Button
							onClick={() => {
								dateForm.resetFields();
							}}
						>
							重置
						</Button>
					</div>
				</div>
			),
		},
		{
			title: '操作',
			key: 'option',
			valueType: 'option',
			render: (row: any, record: any) => [
				row.status == 1 ? (
					<span>兑现</span>
				) : (
					<a
						key='cash'
						onClick={() => {
							showDeleteConfirm('single', record.id);
						}}
					>
						兑现
					</a>
				),
				<a
					key='link'
					onClick={() => {
						showDeleteConfirm('single', record.id);
					}}
				>
					删除
				</a>,
			],
		},
	];

	const onSearch = () => {
		const date = dateForm.getFieldValue('date');
		const startTime = moment(date[0]).format('YYYY-MM-DD') + ' 00:00:00';
		const endTime = moment(date[1]).format('YYYY-MM-DD') + ' 00:00:00';
		logger.debug('startTime', startTime, 'endTime', endTime);
		setCategoryParams({
			...orderParams,
			beginCashTime: startTime,
			endCreateTime: endTime,
		});
	};

	const showDeleteConfirm = (type: string, singleId?: string) => {
		confirm({
			title: '确认是否需要删除？',
			icon: <ExclamationCircleOutlined />,
			content: '删除操作将连同挂载的商品也一并删除，确认是否执行',
			okText: '确认',
			okType: 'danger',
			cancelText: '取消',
			onOk() {
				let ids: any[] = [];
				if (type == 'single') {
					ids.push(singleId);
				} else {
					ids = [...selectedRowKeys];
				}
				return new Promise<void>(async (resolve, reject) => {
					// setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
					const { code } = await goodsOrdersDelete({ ids });
					if (code == 200) {
						resolve();
						setSelectedRowKeys([]);
						message.success('删除成功');
						ref.current?.reload();
					}
				}).catch(() => console.log('Oops errors!'));
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	return (
		<div className='io-cms-commodity-category_container'>
			<BizPage>
				<ProTable<AdminGoodsCategoryItemVO>
					actionRef={ref}
					columns={columns}
					pagination={{
						pageSize: 10,
						showQuickJumper: true,
						onChange: (page: any, pageSize: any) => {
							setCategoryParams({
								...orderParams,
								pageNo: page,
								pageSize,
							});
						},
					}}
					rowSelection={{
						selectedRowKeys,
						onChange: (selectedRowKeys: any) => {
							setSelectedRowKeys(selectedRowKeys);
						},
					}}
					params={orderParams}
					request={(params: any, sort: any, filter: any) => {
						console.log('sort', sort);
						console.log('filter', filter);
						// let sortkey =
						// 	Object.keys(sort)[0] == 'categoryName'
						// 		? 'categoryId'
						// 		: Object.keys(sort)[0];
						// let sortValue = Object.values(sort)[0] == 'ascend' ? 'asc' : 'desc';
						// let pageSort = Object.keys(sort)[0] ? `${sortkey} ${sortValue}` : '';
						// const { categoryName, status, stint } = filter;
						return goodsOrdersPage({ ...orderParams }).then((data: any) => ({
							data: data.data.content,
							total: data.data.total,
						}));
					}}
					search={false}
					rowKey='id'
					options={{
						reload: true,
						density: false,
						setting: true,
						fullScreen: true,
					}}
					toolbar={{
						search: (
							<div className='io-biz-table__action-container'>
								<Button
									type='primary'
									onClick={() => {
										showDeleteConfirm('multiple');
									}}
								>
									删除
								</Button>
							</div>
						),
						actions: [
							<Input
								key='search'
								style={{ width: 208 }}
								allowClear
								placeholder='请输入订单号'
								onChange={e => {
									setValue(e.target.value);
								}}
							/>,
							<Button
								key='search-button'
								type='primary'
								onClick={() => {
									setCategoryParams({ ...orderParams, code: value });
								}}
							>
								查询
							</Button>,
							<Button key='reset-button' type='default'>
								重置
							</Button>,
						],
					}}
				/>
			</BizPage>
		</div>
	);
};

export default ExchangeRecordList;
