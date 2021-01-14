import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import {
	AdminGoodsPageItemVO,
	goodsParamsDTO,
	BizPage,
	goodsPage,
	goodsInfo,
	goodsDelete,
	goodsOffShelf,
	goodsShelf,
	goodsResetStint,
	logger,
	goodsCategoryList,
} from '@ionia/libs';
import { Button, Form, Input, Modal, Space, DatePicker, message, Image } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment';
import './index.less';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useRequest } from 'ahooks';

interface categoryItem {
	text: string;
	value: string;
}
const { confirm } = Modal;
const { RangePicker } = DatePicker;
const CommodityManagementList = () => {
	const history = useHistory();

	useEffect(() => {
		if (ref.current) {
			ref.current.reload();
		}
	}, [history.location]);
	const ref = useRef<ActionType>();
	const [form] = Form.useForm();
	const [dateForm] = Form.useForm();
	const params: goodsParamsDTO = {
		pageNo: 1,
		pageSize: 10,
		name: '',
		pageSort: '',
		beginUpdateTime: '',
		endUpdateTime: '',
		categoryId: [],
		status: [],
		stint: [],
	};
	const [value, setValue] = useState('');
	const [id, setId] = useState<string>('');
	const [goodsParams, setGoodsParams] = useState(params);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [categoryList, setCategoryList] = useState<categoryItem[]>([]);
	useEffect(() => {
		if (id) {
			console.log(id);
			goodsInfo(id).then((res: any) => {
				form.setFieldsValue({ ...res.data });
			});
		}
	}, [id]);
	useRequest(() => goodsCategoryList(), {
		onSuccess: data => {
			let arr: categoryItem[] = [];
			data.data.map((item: any) => {
				arr.push({ text: item.name, value: item.id });
			});
			setCategoryList([...arr]);
		},
	});
	const columns: ProColumns<AdminGoodsPageItemVO>[] = [
		{
			title: '商品名称',
			dataIndex: 'name',
			render: (_: any, row: any) => (
				<div>
					<Image width={72} src={row.coverResId} />
					<a
						className='io-cms-commdity-management-good_name'
						onClick={() => {
							history.push(`/point-mall/commodity-management/detail/${row.id}`);
						}}
					>
						{_}
					</a>
				</div>
			),
		},
		{
			title: '商品类目',
			dataIndex: 'categoryName',
			filters: categoryList,
			sorter: true,
		},
		{
			title: '积分价格',
			dataIndex: 'integral',
			sorter: true,
		},
		{
			title: '库存',
			dataIndex: 'inventory',
			sorter: true,
		},
		{
			title: '累计兑换量',
			dataIndex: 'totalConvertNum',
			sorter: true,
		},
		{
			title: '状态',
			dataIndex: 'status',
			render: (row: any, record: any) => (record.status == 1 ? '上架中 ' : '已下架'),
			filters: [
				{
					text: '上架中',
					value: 1,
				},
				{
					text: '已下架',
					value: 2,
				},
			],
			sorter: true,
		},

		{
			title: '兑换限制',
			dataIndex: 'stint',
			render: (row: any, record: any) => {
				return (
					<div>
						<p>{record.stint == 0 ? `无限制` : `单人限兑 ${record.stintNum}`}</p>
						{record.stint == 1 && <p>已于{record.resetTime}重置</p>}
					</div>
				);
			},
			filters: [
				{
					text: '无限制',
					value: 0,
				},
				{
					text: '单人限量',
					value: 1,
				},
			],
			sorter: true,
		},

		{
			title: '更新时间',
			dataIndex: 'updateTime',
			sorter: (a, b, order) => {
				let sort = order == 'ascend' ? 'asc' : 'desc';
				setGoodsParams({ ...goodsParams, pageSort: `updateTime  ${sort}` });
				return new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime();
			},
			filterDropdown: ({}) => (
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
				record.status == 1 ? (
					<span key='1'>上架</span>
				) : (
					<a
						key='shelf'
						onClick={() => {
							showTypeConfirm(
								'确认是否需要上架',
								'上架后的商品将提供用户进行兑换，确认是否执行',
								'shelf',
								'single',
								record.id
							);
						}}
					>
						上架
					</a>
				),
				record.status == 2 ? (
					<span key='2'>下架</span>
				) : (
					<a
						key='offshelf'
						onClick={() => {
							showTypeConfirm(
								'确认是否需要下架',
								'下架后的商品无法显示在前台，用户也无法进行兑换，确认是否执行',
								'offshelf',
								'single',
								record.id
							);
						}}
					>
						下架
					</a>
				),
				record.stint == 1 ? (
					<a
						key='reset'
						onClick={() => {
							showTypeConfirm(
								'确认是否充值兑换限制？',
								'重置兑换限制，将对用户兑换商品的次数清零，兑换限制将重新计算',
								'reset',
								'single',
								record.id
							);
						}}
					>
						重置兑换限制
					</a>
				) : (
					<span>重置兑换限制</span>
				),
				<a
					key='delete'
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
		setGoodsParams({
			...goodsParams,
			beginUpdateTime: startTime,
			endUpdateTime: endTime,
		});
	};

	/**
	 *
	 * @param type
	 * @param singleId
	 * 上架
	 */
	const showTypeConfirm = (
		title: string,
		content: string,
		type: string,
		idType: string,
		singleId?: string
	) => {
		confirm({
			title: title,
			icon: <ExclamationCircleOutlined />,
			content: content,
			okText: '确认',
			cancelText: '取消',
			onOk() {
				let ids: any[] = [];
				if (idType == 'single') {
					ids.push(singleId);
				} else {
					ids = [...selectedRowKeys];
				}
				return new Promise<void>(async resolve => {
					if (type == 'shelf') {
						const { code } = await goodsShelf({ ids });
						if (code == 200) {
							resolve();
							setSelectedRowKeys([]);
							message.success('修改成功');
							ref.current?.reload();
						}
					} else if (type == 'offshelf') {
						const { code } = await goodsOffShelf({ ids });
						if (code == 200) {
							resolve();
							setSelectedRowKeys([]);
							message.success('修改成功');
							ref.current?.reload();
						}
					} else if (type == 'reset') {
						const { code } = await goodsResetStint({ ids });
						if (code == 200) {
							resolve();
							setSelectedRowKeys([]);
							message.success('修改成功');
							ref.current?.reload();
						}
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
	 * @param type
	 * @param singleId
	 * 删除
	 */
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
				return new Promise<void>(async resolve => {
					const { code } = await goodsDelete({ ids });
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
				<ProTable<AdminGoodsPageItemVO>
					actionRef={ref}
					columns={columns}
					pagination={{
						pageSize: 10,
						showQuickJumper: true,
						onChange: (page: any, pageSize: any) => {
							setGoodsParams({
								...goodsParams,
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
					// scroll={{ x: 1300 }}
					params={goodsParams}
					request={(params: any, sort: any, filter: any) => {
						let sortkey =
							Object.keys(sort)[0] == 'categoryName'
								? 'categoryId'
								: Object.keys(sort)[0];
						let sortValue = Object.values(sort)[0] == 'ascend' ? 'asc' : 'desc';
						let pageSort = Object.keys(sort)[0] ? `${sortkey} ${sortValue}` : '';
						const { categoryName, status, stint } = filter;
						return goodsPage({
							...goodsParams,
							status,
							categoryId: categoryName,
							stint,
							pageSort,
							// sorted,
						}).then((data: any) => ({
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
									className='io-cms-commodity-category_container-button'
									onClick={() => {
										history.push('/point-mall/commodity-management/add');
									}}
								>
									新建
								</Button>
								<Button
									type='default'
									className='io-cms-commodity-category_container-button'
									onClick={() => {
										showTypeConfirm(
											'确认是否需要上架',
											'上架后的商品将提供用户进行兑换，确认是否执行',
											'shelf',
											'arr'
										);
									}}
								>
									上架
								</Button>
								<Button
									type='default'
									className='io-cms-commodity-category_container-button'
									onClick={() => {
										showTypeConfirm(
											'确认是否需要下架',
											'下架后的商品无法显示在前台，用户也无法进行兑换，确认是否执行',
											'offshelf',
											'arr'
										);
									}}
								>
									下架
								</Button>
								<Button
									type='default'
									className='io-cms-commodity-category_container-button'
									onClick={() => {
										showTypeConfirm(
											'确认是否充值兑换限制？',
											'重置兑换限制，将对用户兑换商品的次数清零，兑换限制将重新计算',
											'reset',
											'arr'
										);
									}}
								>
									重置兑换限制
								</Button>
								<Button
									type='default'
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
								placeholder='请输入商品名称'
								onChange={e => {
									setValue(e.target.value);
								}}
							/>,
							<Button
								key='search-button'
								type='primary'
								onClick={() => {
									setGoodsParams({ ...goodsParams, name: value });
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

export default CommodityManagementList;
