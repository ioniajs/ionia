import React, { useRef, useState } from 'react';
import { ProColumns, ActionType, ColumnsState } from '@ant-design/pro-table';
import { BizPage, BizTable, BizTree } from '@ionia/libs';
import { volunteerPaging, allTreeTeamsVolunteer, AdminVolunteerTeamTreeVO, VolunteerPageVO } from '@ionia/libs/src/services';
import { Button, Form, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useMount, useRequest } from '@umijs/hooks';
import './index.less';

export default () => {
	const [form] = Form.useForm();
	const actionRef = useRef<ActionType>();
	const [teamsTreeList, setTeamsTreeList] = useState<AdminVolunteerTeamTreeVO>();
	const [searchParams, setSearchParams] = useState<any>({ pageNo: 1, pageSize: 10 });
	const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
		email: { // 邮箱
			show: false,
		},
		clan: { // 民族
			show: false,
		},
		birthday: { // 出生日期
			show: false
		},
		domicile: { // 籍贯
			show: false,
		},
		education: { // 最高学历
			show: false,
		},
		politicalLook: { // 政治面貌
			show: false,
		},
		workUnit: { // 单位
			show: false,
		},
		occupation: { // 职业
			show: false,
		}
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
						value: r.id.toString(),
						title: r.name,
						key: r.id.toString(),
						children: r.children,
						...r,
					};
				});
			};
			const teamsTreeListTemp = loop(result.data);
			setTeamsTreeList(teamsTreeListTemp)
		}
	});

	useMount(() => {
		runAllTreeTeamsVolunteer({});
	});
	const columns: ProColumns<VolunteerPageVO>[] = [
		{
			key: 'username',
			dataIndex: 'username',
			title: '用户信息',
			render: (_, row) => <span>{row.username}{row.phone}</span>
		},
		{
			key: 'code',
			dataIndex: 'code',
			title: '志愿者编号',
			filterDropdown: () => (
				<div className='io-cms-volunteer-manage-table-filterDropDown'>
					<Form form={form}>
						<Form.Item name='code' className='filterDropDown_formItem'>
							<Input placeholder='请输入志愿者编号' />
						</Form.Item>
					</Form>
					<Space>
						<Button
							type='primary'
							onClick={() => {
								const code = form.getFieldValue('code');
								console.log(code, '志愿者编号筛选');
								setSearchParams({ ...searchParams, code: code })
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 90 }}
						>
							查询
						</Button>
						<Button
							onClick={() => {
								form.setFieldsValue({ code: '' });
								setSearchParams({ ...searchParams, code: '' })
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
			key: 'fullName',
			dataIndex: 'fullName',
			title: '姓名',
			filterDropdown: () => (
				<div className='io-cms-volunteer-manage-table-filterDropDown'>
					<Form form={form}>
						<Form.Item name='fullName' className='filterDropDown_formItem'>
							<Input placeholder='请输入志愿者编号' />
						</Form.Item>
					</Form>
					<Space>
						<Button
							type='primary'
							onClick={() => {
								const fullName = form.getFieldValue('fullName');
								console.log(fullName, '志愿者编号筛选');
								setSearchParams({ ...searchParams, fullName: fullName })
							}}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 90 }}
						>
							查询
						</Button>
						<Button
							onClick={() => {
								form.setFieldsValue({ fullName: '' });
								setSearchParams({ ...searchParams, fullName: '' })
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
			key: 'email',
			dataIndex: 'email',
			title: '邮箱',
		},
		{
			key: 'teamName',
			dataIndex: 'teamName',
			title: '所属队伍',
		},
		{
			key: 'idCard',
			dataIndex: 'idCard',
			title: '证件号码',
		},
		{
			key: 'gender',
			dataIndex: 'gender',
			title: '性别',
		},
		{
			key: 'clan',
			dataIndex: 'clan',
			title: '民族',
		},
		{
			key: 'birthday',
			dataIndex: 'birthday',
			title: '出生日期',
		},
		{
			key: 'domicile',
			dataIndex: 'domicile',
			title: '籍贯',
		},
		{
			key: 'education',
			dataIndex: 'education',
			title: '最高学历',
		},
		{
			key: 'politicalLook',
			dataIndex: 'politicalLook',
			title: '政治面貌',
		},
		{
			key: 'workUnit',
			dataIndex: 'workUnit',
			title: '单位',
		},
		{
			key: 'occupation',
			dataIndex: 'occupation',
			title: '职业',
		},
		{
			key: 'checkTime',
			dataIndex: 'checkTime',
			title: '加入时间',
		},
		{
			key: 'operation',
			dataIndex: 'operation',
			title: '操作',
		},
	];
	return (
		<BizPage>
			<div className='io-cms-volunteer-manage'>
				<BizTable
					rowKey='id'
					actionRef={actionRef}
					renderActions={() => (
						<>
							<div className='io-space-item'>
								<Button type='primary'>
									<i className='iconfont icon-plus1' />
									新建
								</Button>
							</div>
							<div className='io-space-item'>
								<Button>删除</Button>
							</div>
						</>
					)}
					params={searchParams}
					inputPlaceholderText='请输入志愿者用户名/手机号'
					renderSider={() =>
						<BizTree
							treeData={teamsTreeList}
							searchPlaceHolder='请输入队伍名称进行检索'
							onTreeSearch={(value) => runAllTreeTeamsVolunteer({ name: value })}
							onSelectTree={(value) => setSearchParams({ ...searchParams, teamId: value })}
						/>
					}
					columns={columns}
					columnsStateMap={columnsStateMap}
					onColumnsStateChange={(map) => setColumnsStateMap(map)}
					rowSelection={{}}
					request={(params: any, sort: any, filter: any) => {
						return volunteerPaging({
							...params,
							pageNo: params.current,
							pageSize: params.pageSize,
						}).then(data => ({
							data: data.data.content,
							total: data.data.total,
						}));
					}}
					pagination={{
						total: 85,
						showSizeChanger: true,
						showQuickJumper: true,
						defaultPageSize: 10,
						showTotal: total => `共${total}条`,
						onChange: (page, pageSize) => setSearchParams({ ...searchParams, pageNo: page, pageSize: pageSize })
					}}
				/>
			</div>
		</BizPage>
	);
};
