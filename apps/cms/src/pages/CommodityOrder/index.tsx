import { ExclamationCircleOutlined } from '@ant-design/icons';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import {
	AdminGoodsOrderItemVO,
	BizPage,
	goodsOrdersDelete,
	goodsOrdersPage,
	logger,
	AdminGoodsOrderCashDTO,
	goodsOrdersCash,
} from '@ionia/libs';
import { Button, DatePicker, Form, Image, Input, message, Modal, Space } from 'antd';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import './index.less';
import { useHistory } from 'react-router-dom';

const { confirm } = Modal;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const ExchangeRecordList = () => {
	const history = useHistory();
	const ref = useRef<ActionType>();
	const [goodsNameForm] = Form.useForm();
	const [usernameForm] = Form.useForm();
	const [createTimeForm] = Form.useForm();
	const [cashTimeForm] = Form.useForm();
	const [cashForm] = Form.useForm();
	const params = {
		pageNo: 1,
		pageSize: 10,
		code: '',
		pageSort: '',
		beginCashTime: '',
		beginCreateTime: '',
		endCashTime: '',
		endCreateTime: '',
		userInfo: '',
		goodsInfo: '',
	};
	const [value, setValue] = useState('');
	const [orderParams, setCategoryParams] = useState(params);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [cashVisible, setCashVisible] = useState<boolean>(false);
	const [id, setId] = useState<string>('');
	const columns: ProColumns<AdminGoodsOrderItemVO>[] = [
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
			width: 100,
			ellipsis: true,
			render: (_: any, row: any) => (
				<div>
					<p>{row.username}</p>
					<p>{row.fullName}</p>
				</div>
			),
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={usernameForm}>
						<Form.Item name='username'>
							<Input />
						</Form.Item>
					</Form>
					<Space />
					<div className='io-cms-commodity-category-container_search'>
						<Button type='primary' onClick={onUserNameSearch}>
							查询
						</Button>
						<Button
							onClick={() => {
								usernameForm.resetFields();
								setCategoryParams({
									...orderParams,
									userInfo: '',
								});
							}}
						>
							重置
						</Button>
					</div>
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
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={goodsNameForm}>
						<Form.Item name='goodsInfo'>
							<Input />
						</Form.Item>
					</Form>
					<Space />
					<div className='io-cms-commodity-category-container_search'>
						<Button type='primary' onClick={onGoodsInfoSearch}>
							查询
						</Button>
						<Button
							onClick={() => {
								cashTimeForm.resetFields();
								setCategoryParams({
									...orderParams,
									goodsInfo: '',
								});
							}}
						>
							重置
						</Button>
					</div>
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
			dataIndex: 'status',
			render: (_, row) => {
				return _ == 1 ? '待兑现' : '兑现成功';
			},
			sorter: true,
			filters: [
				{
					text: '待兑现',
					value: 1,
				},
				{
					text: '兑现成功',
					value: 2,
				},
			],
		},

		{
			title: '兑换时间',
			dataIndex: 'createTime',
			sorter: true,
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={createTimeForm}>
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
								createTimeForm.resetFields();
								setCategoryParams({
									...orderParams,
									beginCreateTime: '',
									endCreateTime: '',
								});
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
			sorter: true,
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={cashTimeForm}>
						<Form.Item name='date'>
							<RangePicker format='YYYY-MM-DD' allowClear />
						</Form.Item>
					</Form>
					<Space />
					<div className='io-cms-commodity-category-container_search'>
						<Button type='primary' onClick={onSearchCash}>
							查询
						</Button>
						<Button
							onClick={() => {
								cashTimeForm.resetFields();
								setCategoryParams({
									...orderParams,
									beginCashTime: '',
									endCashTime: '',
								});
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
				record.status == 1 ? (
					<a
						key='cash'
						onClick={() => {
							setId(record.id);
							setCashVisible(true);
						}}
					>
						兑现
					</a>
				) : (
					<span>兑现</span>
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
	/**
	 * 用户信息
	 */
	const onUserNameSearch = () => {
		const username = usernameForm.getFieldValue('username');
		setCategoryParams({
			...orderParams,
			userInfo: username,
		});
	};
	/**
	 * 商品信息
	 */
	const onGoodsInfoSearch = () => {
		const goodsInfo = goodsNameForm.getFieldValue('goodsInfo');
		setCategoryParams({
			...orderParams,
			goodsInfo,
		});
	};
	/**
	 * 兑换时间
	 */
	const onSearch = () => {
		const date = cashTimeForm.getFieldValue('date');
		const startTime = moment(date[0]).format('YYYY-MM-DD') + ' 00:00:00';
		const endTime = moment(date[1]).format('YYYY-MM-DD') + ' 00:00:00';
		logger.debug('startTime', startTime, 'endTime', endTime);
		setCategoryParams({
			...orderParams,
			beginCreateTime: startTime,
			endCreateTime: endTime,
		});
	};
	/**
	 * 兑现时间
	 */
	const onSearchCash = () => {
		const date = cashTimeForm.getFieldValue('date');
		const startTime = moment(date[0]).format('YYYY-MM-DD') + ' 00:00:00';
		const endTime = moment(date[1]).format('YYYY-MM-DD') + ' 00:00:00';
		logger.debug('startTime', startTime, 'endTime', endTime);
		setCategoryParams({
			...orderParams,
			beginCashTime: startTime,
			endCashTime: endTime,
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

	/**
	 *
	 * @param values
	 * 兑换
	 */
	const handleCash = async (values: AdminGoodsOrderCashDTO) => {
		const { code } = await goodsOrdersCash({ ...values, id });
		if (code == 200) {
			message.success('兑现成功');
			setId('');
			ref.current?.reload();
			setCashVisible(false);
		}
	};
	return (
		<div className='io-cms-commodity-category_container'>
			<BizPage>
				<ProTable<AdminGoodsOrderItemVO>
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
						let sortkey = Object.keys(sort)[0];
						let sortValue = Object.values(sort)[0] == 'ascend' ? 'asc' : 'desc';
						let pageSort = Object.keys(sort)[0] ? `${sortkey} ${sortValue}` : '';
						const { status } = filter;
						return goodsOrdersPage({ ...orderParams, pageSort, status }).then(
							(data: any) => ({
								data: data.data.content,
								total: data.data.total,
							})
						);
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
				<Modal
					visible={cashVisible}
					title='兑换'
					onOk={() => {
						cashForm.submit();
					}}
					onCancel={() => {
						setId('');
						ref.current?.reload();
						setCashVisible(false);
					}}
				>
					<Form form={cashForm} onFinish={handleCash}>
						<Form.Item
							label='兑换结果'
							name='cashResult'
							rules={[{ required: true, message: '请输入兑换结果' }]}
						>
							<TextArea
								rows={4}
								placeholder='请输入兑现结果，如为实物商品可输入发货物流等信息；反之为虚拟商品，可输入兑换途径'
							/>
						</Form.Item>
					</Form>
				</Modal>
			</BizPage>
		</div>
	);
};

export default ExchangeRecordList;
