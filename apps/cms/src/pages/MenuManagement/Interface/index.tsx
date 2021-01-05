import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { BizTable, apiDelete, BizPage, ApiIdsDTO, apiUpdate, apiFind } from '@ionia/libs';
import { Button, Modal, message, Form, Input, Select, Space } from 'antd';
import React, { useRef, useState } from 'react';
import InterfaceForm from './InterfaceForm';
import { ApiItemVO, apiPage } from '@ionia/libs/src/services';
import './index.less';
export interface TableListItem {
	key: number;
	name: string;
}
const { TextArea } = Input;

/**
 *  删除用户
 */
const userRemove = async (ids: ApiIdsDTO) => {
	const removeRes = await apiDelete(ids);
	return removeRes.code;
};

const { confirm } = Modal;

const InterfaceIndex = () => {
	const params = {
		pageSize: 10,
		current: 1,
		keyWord: '',
		apiName: '',
		apiUrl: '',
	};
	const [form] = Form.useForm();
	const [searchForm] = Form.useForm();
	const [searchUrlForm] = Form.useForm();
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
	const [visible, setVisible] = React.useState(false);
	const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [id, setId] = useState('');
	const [formParams, setFormParams] = useState(params);
	const showModal = async (id: string) => {
		const { data } = await apiFind(id);
		setId(id);
		data.requestMethod = String(data.requestMethod);
		form.setFieldsValue({ ...data });
		setVisible(true);
	};

	const onFinish = async (values: any) => {
		console.log(values);
		const { code } = await apiUpdate({ ...values, id: id });
		if (code == 200) {
			message.success('更新成功');
			setVisible(false);
			reload();
			setConfirmLoading(false);
			setId('');
		}
	};

	const handleOk = () => {
		form.submit();
		setConfirmLoading(true);
	};

	const handleCancel = () => {
		setVisible(false);
		setId('');
	};
	const reload = () => {
		if (actionRef.current) {
			actionRef.current.reload();
		}
	};

	function showConfirm() {
		confirm({
			title: '你确定删除所选接口吗?',
			icon: <ExclamationCircleOutlined />,
			content: '删除后无法恢复，请谨慎操作',
			okText: '确定',
			cancelText: '取消',
			onOk: async () => {
				const success = await userRemove({
					ids: selectedRowKeys,
				});
				if (success === 200 && actionRef.current) {
					message.success('删除成功');
					actionRef.current.reload();
					setSelectedRowKeys([]);
				}
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}

	const handleSearch = (confirm: any) => {
		let value = searchForm.getFieldValue('apiName');
		params.apiName = value;
		setFormParams(params);
		confirm();
	};

	const handleReset = (clearFilters: any) => {
		clearFilters();
		params.apiName = '';
		searchForm.setFieldsValue({ apiName: '' });
		setFormParams(params);
	};

	const handleUrlSearch = (confirm: any) => {
		let value = searchUrlForm.getFieldValue('apiUrl');
		params.apiUrl = value;
		setFormParams(params);
		confirm();
	};

	const handleUrlReset = (clearFilters: any) => {
		clearFilters();
		params.apiUrl = '';
		searchUrlForm.setFieldsValue({ apiUrl: '' });
		setFormParams(params);
	};
	const columns: ProColumns<ApiItemVO>[] = [
		{
			title: '接口名称',
			key: 'apiName',
			dataIndex: 'apiName',
			render: (_, row) => (
				<a
					onClick={event => {
						showModal(row.id);
						event.stopPropagation();
					}}
				>
					{row.apiName}
				</a>
			),
			filterDropdown: ({ confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={searchForm} className='io-cms-menu_form'>
						<Form.Item name='apiName'>
							<Input
								style={{ width: 188, marginBottom: 8, display: 'block' }}
								placeholder='请输入接口名称'
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
			title: '接口地址',
			key: 'apiUrl',
			dataIndex: 'apiUrl',
			filterDropdown: ({ confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={searchUrlForm} className='io-cms-menu_form'>
						<Form.Item name='apiUrl'>
							<Input
								style={{ width: 188, marginBottom: 8, display: 'block' }}
								placeholder='请输入接口名称'
							/>
						</Form.Item>
					</Form>
					<Space>
						<Button
							type='primary'
							onClick={() => {
								handleUrlSearch(confirm);
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 90 }}
						>
							搜索
						</Button>
						<Button
							onClick={() => {
								handleUrlReset(clearFilters);
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
			title: '请求方式',
			key: 'requestMethod',
			dataIndex: 'requestMethod',
			render: text => (text == 1 ? 'GET' : 'POST'),
		},
		{
			title: '使用场景',
			key: 'useScene',
			dataIndex: 'useScene',
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
									const success = await userRemove({
										ids: [row.id],
									});
									if (success === 200 && actionRef.current) {
										message.success('删除成功');
										actionRef.current.reload();
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
	return (
		<BizPage>
			<div className='io-cms-menu-interface_list'>
				<div className='io-cms-menu-interface_button'>
					<div className='io-space-item'>
						<InterfaceForm reload={reload} />
					</div>
					<div className='io-space-item'>
						<Button onClick={showConfirm} type='default'>
							批量删除
						</Button>
					</div>
				</div>
				<ProTable
					rowKey='id'
					actionRef={actionRef}
					search={false}
					toolBarRender={false}
					columns={columns}
					pagination={{
						current: params.current,
						pageSize: params.pageSize,
					}}
					rowSelection={{
						selectedRowKeys,
						onChange: (selectedRowKeys: any) => {
							setSelectedRowKeys(selectedRowKeys);
						},
					}}
					onRow={record => {
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
						console.log('params', params, filter);
						return apiPage({
							apiName: params.apiName,
							apiUrl: params.apiUrl,
							pageNo: params.current,
							pageSize: params.pageSize,
						}).then(data => ({
							data: data.data.content,
							total: data.data.total,
						}));
					}}
				/>
			</div>

			<Modal
				title='编辑'
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
			>
				<Form form={form} onFinish={onFinish}>
					<Form.Item
						name='apiName'
						label='接口名称'
						rules={[{ required: true }, { max: 120 }]}
					>
						<Input placeholder='请输入接口名称' />
					</Form.Item>
					<Form.Item
						name='apiUrl'
						label='接口地址'
						rules={[{ required: true }, { max: 120 }]}
					>
						<Input placeholder='请输入接口地址' />
					</Form.Item>
					<Form.Item
						name='requestMethod'
						label='请求方式'
						rules={[{ required: true, message: '请选择请求方式!' }]}
					>
						<Select>
							<Select.Option value='1'>GET</Select.Option>
							<Select.Option value='2'>POST</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item name='useScene' label='使用场景'>
						<TextArea placeholder='请输入使用场景' />
					</Form.Item>
				</Form>
			</Modal>
		</BizPage>
	);
};

export default InterfaceIndex;
