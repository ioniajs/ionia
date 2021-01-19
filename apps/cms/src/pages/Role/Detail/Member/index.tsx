import { ProColumns, ActionType } from '@ant-design/pro-table';
import { ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { BizTable, deleteUser, logger, roleDetail } from '@ionia/libs';
import { Button, Modal, Switch, message, Divider, Form, Space, Input } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import { UserPageVO, userPaging, modUserStatus } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import { useHistory } from 'react-router-dom';
import './index.less';
import MemberForm from './Form';
import { useRequest } from 'ahooks';
import Move from './Move';

export interface TableListItem {
	key: number;
	name: string;
}

const userRemove = async (ids: IdsDTO) => {
	const removeRes = await deleteUser(ids);
	if (removeRes.code !== 200) {
		message.error('删除失败');
	} else {
		message.success('删除成功');
	}
	return removeRes.code;
};
export default ({ id }: any) => {
	const roleId = id;
	const Params = {
		pageNo: 1,
		pageSize: 10,
		roleId: [id],
		status: [],
		telephone: '',
		updateUser: '',
		email: '',
	};
	const { data } = useRequest(() => roleDetail(roleId));
	logger.debug(data);
	const orgId = data?.data.orgId;
	const name = data?.data.name;
	// const roleId = data?.data.id;
	const history = useHistory();
	const [searchForm] = Form.useForm();
	const [searchEmailForm] = Form.useForm();
	const [visible, setVisible] = useState<boolean>(false);
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const [userParams, setUserParams] = useState(Params);
	const columns: ProColumns<UserPageVO>[] = [
		{
			title: '用户名',
			key: 'username',
			dataIndex: 'username',
			width: 150,
			render: username => <a onClick={() => history.push('/user/detail')}>{username}</a>,
		},
		{
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
			width: 150,
		},
		{
			title: '所属阵地',
			key: 'org',
			dataIndex: 'org',
			width: 190,
		},
		{
			title: '所属角色',
			key: 'roleNames',
			dataIndex: 'roleNames',
			width: 150,
			filters: [
				{
					text: '系统管理员',
					value: '系统管理员',
				},
				{
					text: '信息录入员',
					value: '信息录入员',
				},
			],
		},
		{
			title: '联系方式',
			dataIndex: 'telephone',
			sorter: true,
			width: 210,
			filterDropdown: ({ confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={searchForm} className='io-cms-menu_form'>
						<Form.Item name='telephone'>
							<Input
								style={{ width: 188, marginBottom: 8, display: 'block' }}
								placeholder='请输入联系方式'
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
			title: '电子邮箱',
			dataIndex: 'email',
			width: 170,
			filterDropdown: ({ confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Form form={searchEmailForm} className='io-cms-menu_form'>
						<Form.Item name='email'>
							<Input
								style={{ width: 188, marginBottom: 8, display: 'block' }}
								placeholder='请输入邮箱'
							/>
						</Form.Item>
					</Form>
					<Space>
						<Button
							type='primary'
							onClick={() => {
								handleEmailSearch(confirm);
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 90 }}
						>
							搜索
						</Button>
						<Button
							onClick={() => {
								handleEmailReset(clearFilters);
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
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			width: 135,
			render: (_, row) => (
				<Switch
					checked={row.status === 1}
					checkedChildren='开启'
					unCheckedChildren='禁用'
					onChange={async value => {
						const success = await modUserStatus({
							id: row.id.toString(),
							status: value ? 1 : 0,
						});
						if (success.code === 200 && actionRef.current) {
							reload();
						}
					}}
				/>
			),
			filters: [
				{
					value: '1',
					text: '启用',
				},
				{
					text: '禁用',
					value: '0',
				},
			],
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			width: 130,
			render: (_, row) => (
				<>
					<Divider type='vertical' />
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
										if (success === 200) {
											if (success === 200 && actionRef.current) {
												reload();
											}
										}
									},
								});
							}
						}}
					>
						删除
					</a>
				</>
			),
		},
	];
	const handleSearch = (confirm: any) => {
		let value = searchForm.getFieldValue('telephone');
		console.log('value', value);
		// userParams.telephone = value;
		setUserParams({ ...userParams, telephone: value });
		confirm();
	};

	const handleReset = (clearFilters: any) => {
		clearFilters();
		setUserParams({ ...userParams, telephone: '' });
	};

	const handleEmailSearch = (confirm: any) => {
		let value = searchEmailForm.getFieldValue('email');
		console.log('value', value);
		// userParams.telephone = value;
		setUserParams({ ...userParams, email: value });
		confirm();
	};

	const handleEmailReset = (clearFilters: any) => {
		clearFilters();
		setUserParams({ ...userParams, email: '' });
	};
	const reload = () => {
		actionRef?.current?.reload();
	};
	return (
		<div className='io-cms-role_detail_member'>
			<BizTable
				inputPlaceholderText='请输入用户名/姓名'
				rowKey='id'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<Move visible={visible} setVisible={setVisible} />
						<div className='io-space-item'>
							<MemberForm roleId={roleId} orgId={orgId} reload={reload} name={name} />
						</div>
						<div className='io-space-item'>
							<Button onClick={() => setVisible(true)} type='default'>
								移入用户
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.info({
										title: '你确定删除所选用户吗？',
										content: '删除后无法恢复，请谨慎操作。',
										okText: '删除',
										cancelText: '取消',
										onOk: async () => {
											const ListSelRowKeys: any[] = selectedRowKeys.map(
												(s: any) => s
											);
											const listDelRes = await userRemove({
												ids: ListSelRowKeys,
											});
											if (listDelRes === 200) {
												if (listDelRes === 200 && actionRef.current) {
													reload();
												}
											}
										},
									});
								}}
							>
								批量删除
							</Button>
						</div>
					</>
				)}
				columns={columns}
				pagination={{
					pageSize: 10,
					showQuickJumper: true,
					onChange: (page: any, pageSize: any) => {
						setUserParams({
							...userParams,
							pageNo: page,
							pageSize,
						});
					},
				}}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
				}}
				// pagination
				params={userParams}
				request={(params: any, sort: any, filter: any) => {
					logger.debug('sort', sort);
					logger.debug('filter', filter);
					return userPaging({
						...userParams,
						...filter,
					}).then(data => ({ data: data.data.content, total: data.data.total }));
				}}
			/>
		</div>
	);
};
