import { ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable, BizTree, deleteRole, logger } from '@ionia/libs';
import { RolePageVO, rolePaging } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import { Button, Modal, Input, Space, Form, message, DatePicker } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RoleForm from './Add';
import moment from 'moment';
import './index.less';
export interface TableListItem {
	key: number;
	name: string;
}

const { confirm } = Modal;
const { RangePicker } = DatePicker;
export default () => {
	const history = useHistory();
	const actionRef = useRef<ActionType>();
	const params = {
		pageSize: 10,
		pageNo: 1,
		updateUser: '',
		beginUpdateTime: '',
		endUpdateTime: '',
		name: '',
		orgId: '',
	};
	const [searchForm] = Form.useForm();
	const [dateForm] = Form.useForm();
	useEffect(() => {
		// 刷新
		actionRef?.current?.reload();
	}, [history.location]);
	const [formParams, setFormParams] = useState(params);
	const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
	const columns: ProColumns<RolePageVO>[] = [
		{
			title: '角色名称',
			key: 'name',
			dataIndex: 'name',
			render: (_, row) => (
				<a
					onClick={e => {
						e.stopPropagation();
						history.push(`/system-management/role/detail/${row.id}`);
					}}
				>
					{row.name}
				</a>
			),
		},
		{
			title: '所属阵地',
			key: 'orgName',
			dataIndex: 'orgName',
		},
		{
			title: '最后更新人',
			key: 'updateUser',
			dataIndex: 'updateUser',
			filterDropdown: ({ confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={searchForm} className='io-cms-menu_form'>
						<Form.Item name='apiName'>
							<Input
								style={{ width: 188, marginBottom: 8, display: 'block' }}
								placeholder='请输入更新人名称'
							/>
						</Form.Item>
					</Form>
					<Space>
						<Button
							type='primary'
							onClick={() => {
								handleSearch(confirm);
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 90 }}
						>
							搜索
						</Button>
						<Button
							onClick={() => {
								handleReset(clearFilters);
							}}
							size='small'
							style={{ width: 90 }}
						>
							重置
						</Button>
					</Space>
				</div>
			),
			filterIcon: filtered => (
				<SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
			),
		},
		{
			title: '最后更新时间',
			key: 'updateTime',
			dataIndex: 'updateTime',
			sorter: true,
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
								setFormParams({
									...formParams,
									beginUpdateTime: '',
									endUpdateTime: '',
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
			key: 'operation',
			dataIndex: 'operation',
			render: (_, row) => (
				<a
					onClick={async () => {
						if (row) {
							Modal.confirm({
								title: '是否确定删除',
								okText: '确定',
								cancelText: '取消',
								onOk: async () => {
									const { code } = await deleteRole({
										ids: [row.id],
									});
									if (code === 200) {
										if (code === 200 && actionRef.current) {
											message.success('删除成功');
											actionRef.current.reload();
											setSelectedRowKeys([]);
										}
									}
								},
							});
						}
					}}
				>
					删除
				</a>
			),
		},
	];

	/**
	 * 批量删除
	 */
	const showConfirm = () => {
		confirm({
			title: '你确定删除所选角色吗?',
			icon: <ExclamationCircleOutlined />,
			content: '删除后无法恢复，请谨慎操作',
			okText: '确定',
			cancelText: '取消',
			onOk: async () => {
				const { code } = await deleteRole({
					ids: [...selectedRowKeys],
				});
				if (code === 200) {
					if (code === 200 && actionRef.current) {
						message.success('删除成功');
						actionRef.current.reload();
						setSelectedRowKeys([]);
					}
				}
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	const onSearch = () => {
		const date = dateForm.getFieldValue('date');
		const startTime = moment(date[0]).format('YYYY-MM-DD') + ' 00:00:00';
		const endTime = moment(date[1]).format('YYYY-MM-DD') + ' 00:00:00';
		logger.debug('startTime', startTime, 'endTime', endTime);
		setFormParams({
			...formParams,
			beginUpdateTime: startTime,
			endUpdateTime: endTime,
		});
	};

	const handleSearch = (confirm: any) => {
		let value = searchForm.getFieldValue('apiName');
		params.updateUser = value;
		setFormParams(params);
		confirm();
	};

	const handleReset = (clearFilters: any) => {
		clearFilters();
		params.updateUser = '';
		searchForm.setFieldsValue({ updateUser: '' });
		setFormParams(params);
	};
	/**
	 * 刷新列表
	 */
	const reload = () => {
		if (actionRef.current) {
			actionRef.current.reload();
		}
	};
	return (
		<BizPage>
			<div className='io-cms-role'>
				<BizTable
					rowKey='id'
					actionRef={actionRef}
					inputPlaceholderText='请输入角色名称'
					renderActions={() => (
						<>
							<div className='io-space-item'>
								<RoleForm reload={reload} />
							</div>
							<div className='io-space-item'>
								<Button
									onClick={() =>
										history.push('/system-management/role/batch-add')
									}
									type='default'
								>
									批量新建
								</Button>
							</div>
							<div className='io-space-item'>
								<Button
									onClick={showConfirm}
									type='default'
									disabled={selectedRowKeys.length < 1}
								>
									批量删除
								</Button>
							</div>
						</>
					)}
					renderSider={() => <BizTree />}
					columns={columns}
					pagination={{
						pageSize: 10,
						showQuickJumper: true,
						onChange: (page: any, pageSize: any) => {
							setFormParams({
								...formParams,
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
					onRow={(record: any) => {
						return {
							onClick: () => {
								const RowKeys = [...selectedRowKeys];
								if (RowKeys.indexOf(record.id) >= 0) {
									RowKeys.splice(selectedRowKeys.indexOf(record.id), 1);
								} else {
									RowKeys.push(record.id);
								}
								setSelectedRowKeys(RowKeys);
							},
						};
					}}
					// pagination
					params={formParams}
					request={(params: any, sort: any, filter: any) => {
						console.log('filter', filter);
						logger.debug('sort', sort);
						let sortkey = Object.keys(sort)[0];
						let sortValue = Object.values(sort)[0] == 'ascend' ? 'asc' : 'desc';
						let pageSort = Object.keys(sort)[0] ? `${sortkey} ${sortValue}` : '';
						return rolePaging({
							...formParams,
							pageSort,
						}).then(data => ({
							data: data.data.content,
							total: data.data.total,
						}));
					}}
				/>
			</div>
		</BizPage>
	);
};
