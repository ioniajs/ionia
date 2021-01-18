import React, { useRef, useState } from 'react';
import { BizPage, BizTable, BizModalForm, BizModalFormRef } from '@ionia/libs';
import { ActionType, ProColumns, ColumnsState } from '@ant-design/pro-table';
import {
	Button,
	Form,
	Input,
	Space,
	DatePicker,
	Avatar,
	Tooltip,
	Divider,
	TreeSelect,
	Modal,
	message,
	Radio,
} from 'antd';
import {
	checkVolunteerPaging,
	VolunteerPageVO,
	AdminVolunteerTeamTreeVO,
	allTreeTeamsVolunteer,
} from '@ionia/libs/src/services';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { useRequest, useMount } from '@umijs/hooks';
import CheckForm from '../Check/CheckForm';
import BatchCheckForm from '../Check/BatchCheckForm';
import './index.less';

const checkStatusArr = ['', '审核通过', '待审核', '未通过'];
export default () => {
	const actionRef = useRef<ActionType>();
	const modalRef = useRef<BizModalFormRef>();
	const [form] = Form.useForm();
	const history = useHistory();
	const [teamsTreeList, setTeamsTreeList] = useState<AdminVolunteerTeamTreeVO[]>();
	const [searchParams, setSearchParams] = useState<any>({ pageNo: 1, pageSize: 10 });
	const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
	const [selectedRows, setSelectedRows] = useState<any>();
	const [teamIds, setTeamIds] = useState<any>();
	const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
		email: {
			// 邮箱
			show: false,
		},
		clan: {
			// 民族
			show: false,
		},
		birthday: {
			// 出生日期
			show: false,
		},
		domicile: {
			// 籍贯
			show: false,
		},
		education: {
			// 最高学历
			show: false,
		},
		occupation: {
			// 职业
			show: false,
		},
		checkTime: {
			//审核时间
			show: true,
		},
	});
	const { run: runAllTreeTeamsVolunteer } = useRequest(allTreeTeamsVolunteer, {
		manual: true,
		onSuccess: result => {
			const loop = function (data: any) {
				return data.map((r: any) => {
					if (r.children) {
						r.children = loop(r.children);
					}
					return {
						...r,
						value: r.id,
						title: r.name,
						key: r.id.toString(),
						children: r.children,
					};
				});
			};
			const teamsTreeListTemp = loop(result.data);
			setTeamsTreeList(teamsTreeListTemp);
		},
	});

	useMount(() => {
		runAllTreeTeamsVolunteer({});
	});
	const filterDropdown = (filter: string) => {
		return (
			<div className='io-cms-volunteer-manage-table-filterDropDown'>
				<Form form={form}>
					<Form.Item name={filter} className='filterDropDown_formItem'>
						<Input placeholder='Search' />
					</Form.Item>
				</Form>
				<Space>
					<Button
						type='primary'
						onClick={() => {
							const param = form.getFieldValue(filter);
							console.log(param, '志愿者编号筛选');
							searchParams[filter] = param;
							setSearchParams({ ...searchParams });
						}}
						icon={<SearchOutlined />}
						size='small'
						style={{ width: 90 }}
					>
						查询
					</Button>
					<Button
						onClick={() => {
							form.resetFields();
							searchParams[filter] = '';
							setSearchParams({ ...searchParams });
						}}
						size='small'
						style={{ width: 90 }}
					>
						重置
					</Button>
				</Space>
			</div>
		);
	};
	const columns: ProColumns<VolunteerPageVO>[] = [
		{
			key: 'username',
			dataIndex: 'username',
			title: '用户信息',
			width: 300,
			render: (_, row) => (
				<div>
					<Avatar src={row.avatar} />
					<span>
						<a
							className='io-cms-volunteer-table-username'
							style={{
								width: '83px',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								position: 'absolute',
								left: '48px',
								top: '12px',
							}}
							onClick={() => {
								history.push({
									pathname: `/volunteer/check/detail/${row.id}`,
									state: {
										teamsTreeList,
									},
								});
							}}
						>
							{row.username}
						</a>
						<span
							className='io-cms-volunteer-table-phone'
							style={{
								display: 'inline-block',
								position: 'absolute',
								top: '31px',
								left: '45px',
							}}
						>
							{row.phone}
						</span>
					</span>
				</div>
			),
			fixed: true,
		},
		{
			key: 'fullName',
			dataIndex: 'fullName',
			title: '姓名',
			width: 200,
			// filterDropdown: () => filterDropdown('fullName'),
			render: (_, row) => (
				<span
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					{row.fullName}
				</span>
			),
		},
		{
			key: 'email',
			dataIndex: 'email',
			title: '邮箱',
			width: 150,
			filterDropdown: () => filterDropdown('email'),
		},
		{
			key: 'teamName',
			dataIndex: 'teamName',
			title: '所属队伍',
			width: 200,
			render: (_, row) => (
				<span
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					{row.teamName}
				</span>
			),
			filterDropdown: () => (
				<div
					className='io-cms-volunteer-check-team-filterDropDown'
					style={{ width: '300px' }}
				>
					<Form form={form}>
						<Form.Item name='teamIds' className='team-filterDropDown_formItem'>
							<TreeSelect
								// treeDefaultExpandedKeys={[1]}
								treeDefaultExpandAll
								placeholder='请选择'
								treeData={teamsTreeList}
								multiple
								allowClear
								onChange={value => {
									setTeamIds(value);
								}}
								showSearch={true}
								dropdownStyle={{ maxHeight: 400, overflow: 'auto', top: '0px' }}
								// onSearch={value => runAllTreeTeamsVolunteer({ name: value })}
							/>
						</Form.Item>
						<Space className='team-filterDropDown_space' size={40}>
							<Button
								type='primary'
								size='small'
								style={{ width: 120 }}
								onClick={() => {
									setSearchParams({ ...searchParams, teamIds: teamIds });
								}}
							>
								确定
							</Button>
							<Button
								size='small'
								type='link'
								style={{ width: 120 }}
								onClick={() => {
									form.setFieldsValue({ teamIds: [] });
									setSearchParams({ ...searchParams, teamIds: [] });
								}}
							>
								重置
							</Button>
						</Space>
					</Form>
				</div>
			),
		},
		{
			key: 'idCard',
			dataIndex: 'idCard',
			title: '证件号码',
			filterDropdown: () => filterDropdown('idCard'),
			width: 200,
		},
		{
			key: 'gender',
			dataIndex: 'gender',
			title: '性别',
			width: 100,
		},
		{
			key: 'clan',
			dataIndex: 'clan',
			title: '民族',
			filterDropdown: () => filterDropdown('clan'),
			width: 100,
		},
		{
			key: 'birthday',
			dataIndex: 'birthday',
			title: '出生日期',
			sorter: true,
			width: 150,
			filterDropdown: () => (
				<div className='io-cms-cotent-recycle-table-birthday-filterDropDown'>
					<Form form={form}>
						<Form.Item name='birthday' className='birthday-filterDropDown_formItem'>
							<DatePicker.RangePicker />
						</Form.Item>
					</Form>
					<Space className='birthday-filterDropDown__space' size={40}>
						<Button
							className='birthday-filterDropDown-search__button'
							type='primary'
							onClick={() => {
								const time = form.getFieldValue('birthday');
								console.log(time, 'timeme');
								const beginBirthdayTime =
									moment(time[0]).format('YYYY-MM-DD') + ' 00:00:00';
								const endBirthdayTime =
									moment(time[1]).format('YYYY-MM-DD') + ' 00:00:00';
								console.log(beginBirthdayTime, endBirthdayTime);
								setSearchParams({
									...searchParams,
									beginBirthdayTime,
									endBirthdayTime,
								});
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 120 }}
						>
							查询
						</Button>
						<Button
							onClick={() => {
								form.setFieldsValue({ birthday: '' });
								setSearchParams({
									...searchParams,
									beginBirthdayTime: '',
									endBirthdayTime: '',
								});
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
		{
			key: 'domicile',
			dataIndex: 'domicile',
			title: '籍贯',
			width: 100,
		},
		{
			key: 'education',
			dataIndex: 'education',
			title: '最高学历',
			width: 100,
		},
		{
			key: 'politicalLook',
			dataIndex: 'politicalLook',
			title: '政治面貌',
			width: 100,
		},
		{
			key: 'workUnit',
			dataIndex: 'workUnit',
			title: '单位',
			width: 200,
			render: (_, row) => (
				<span
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					{row.teamName}
				</span>
			),
			filterDropdown: () => filterDropdown('workUnit'),
		},
		{
			key: 'occupation',
			dataIndex: 'occupation',
			title: '职业',
			width: 200,
		},
		{
			key: 'createTime',
			dataIndex: 'createTime',
			title: '申请时间',
			sorter: true,
			width: 200,
			filterDropdown: () => (
				<div className='io-cms-cotent-recycle-table-birthday-filterDropDown'>
					<Form form={form}>
						<Form.Item name='createTime' className='birthday-filterDropDown_formItem'>
							<DatePicker.RangePicker />
						</Form.Item>
					</Form>
					<Space className='birthday-filterDropDown__space' size={40}>
						<Button
							className='birthday-filterDropDown-search__button'
							type='primary'
							onClick={() => {
								const time = form.getFieldValue('createTime');
								console.log(time, 'timeme');
								if (time) {
									const beginCreateTime =
										moment(time[0]).format('YYYY-MM-DD') + ' 00:00:00';
									const endCreateTime =
										moment(time[1]).format('YYYY-MM-DD') + ' 00:00:00';
									console.log(beginCreateTime, endCreateTime);
									setSearchParams({
										...searchParams,
										beginCreateTime,
										endCreateTime,
									});
								} else {
									setSearchParams({
										...searchParams,
										beginCreateTime: '',
										endCreateTime: '',
									});
								}
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 120 }}
						>
							查询
						</Button>
						<Button
							onClick={() => {
								form.setFieldsValue({ checkTime: '' });
								setSearchParams({
									...searchParams,
									beginCreateTime: '',
									endCreateTime: '',
								});
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
		{
			key: 'checkTime',
			dataIndex: 'checkTime',
			title: '审核时间',
			sorter: true,
			width: 200,
			filterDropdown: () => (
				<div className='io-cms-cotent-recycle-table-birthday-filterDropDown'>
					<Form form={form}>
						<Form.Item name='checkTime' className='birthday-filterDropDown_formItem'>
							<DatePicker.RangePicker />
						</Form.Item>
					</Form>
					<Space className='birthday-filterDropDown__space' size={40}>
						<Button
							className='birthday-filterDropDown-search__button'
							type='primary'
							onClick={() => {
								const time = form.getFieldValue('checkTime');
								console.log(time, 'timeme');
								const beginCheckTime =
									moment(time[0]).format('YYYY-MM-DD') + ' 00:00:00';
								const endCheckTime =
									moment(time[1]).format('YYYY-MM-DD') + ' 00:00:00';
								console.log(beginCheckTime, endCheckTime);
								setSearchParams({
									...searchParams,
									beginCheckTime,
									endCheckTime,
								});
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 120 }}
						>
							查询
						</Button>
						<Button
							onClick={() => {
								form.setFieldsValue({ checkTime: '' });
								setSearchParams({
									...searchParams,
									beginCheckTime: '',
									endCheckTime: '',
								});
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
		{
			key: 'checkStatus',
			dataIndex: 'checkStatus',
			title: '状态',
			width: 150,
			filters: [
				{
					value: 2,
					text: '待审核',
				},
				{
					value: 3,
					text: '未通过',
				},
			],
			render: (_, row) => (
				<>
					<span style={{ color: row.checkStatus === 2 ? '#FAAD14' : '#FF4D4F' }}>
						{checkStatusArr[row.checkStatus]}
					</span>
					&nbsp;&nbsp;
					{row.checkStatus === 3 ? (
						<Tooltip title={row.notPassReason}>
							<i className='iconfont icon-info-circle' />
						</Tooltip>
					) : (
						<span />
					)}
				</>
			),
		},
		{
			key: 'operation',
			dataIndex: 'operation',
			title: '操作',
			fixed: 'right',
			width: 150,
			render: (_, row) => (
				<>
					{row.checkStatus !== 3 ? (
						<div
							className='io-cms-volunteer-check-bizform'
							style={{ display: 'inline-block' }}
						>
							<CheckForm id={row.id} reloadData={() => actionRef.current?.reload()} />
						</div>
					) : (
						<span style={{ color: '#D9D9D9', cursor: 'default' }}>审核</span>
					)}
					<Divider type='vertical' />
					<a>删除</a>
				</>
			),
		},
	];
	return (
		<BizPage>
			<div className='io-cms-volunteer-check'>
				<BizTable
					rowKey='id'
					actionRef={actionRef}
					renderActions={() => (
						<div className='io-space-item'>
							<BizModalForm
								ref={modalRef}
								title='志愿者审核'
								triggerRender={() => (
									<Button
										type='primary'
										onClick={() => {
											modalRef.current?.open();
										}}
									>
										审核
									</Button>
								)}
								submitterRender={() => (
									<>
										<Button>取消</Button>
										<Button type='primary'>确定</Button>
									</>
								)}
								width={660}
							>
								<BatchCheckForm selectedInfos={selectedRows} />
							</BizModalForm>
						</div>
					)}
					columns={columns}
					columnsStateMap={columnsStateMap}
					onColumnsStateChange={map => setColumnsStateMap(map)}
					params={searchParams}
					rowSelection={{
						selectedRowKeys,
						onChange: (selectedRowKeys: any, selectedRows: any) => {
							setSelectedRowKeys(selectedRowKeys as string[]);
							setSelectedRows(selectedRows);
						},
					}}
					inputPlaceholderText='请输入志愿者用户名/姓名/手机号'
					request={(params: any, sort: any, filter: any) => {
						let tempPageSort = '';
						if (JSON.stringify(sort) !== '{}') {
							const sorterValue =
								Object.values(sort)[0] === 'ascend' ? 'asc' : 'desc';
							tempPageSort = `${Object.keys(sort)[0]} ${sorterValue}`;
						}
						return checkVolunteerPaging({
							...params,
							...filter,
							pageNo: params.current,
							pageSize: params.pageSize,
							pageSort: tempPageSort,
						}).then(data => ({
							data: data.data.content,
							total: data.data.total,
						}));
					}}
					pagination={{
						showSizeChanger: true,
						showQuickJumper: true,
						defaultPageSize: 10,
						onChange: (page, pageSize) =>
							setSearchParams({ ...searchParams, pageNo: page, pageSize: pageSize }),
					}}
					// scroll={{ x: 1500 }}
				/>
			</div>
		</BizPage>
	);
};
