import React, { useState } from 'react';
import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable, UserPageVO, userPaging } from '@ionia/libs';
import { Button, Modal, TreeSelect, Form, Switch, Tooltip } from 'antd';
import { ProFormSelect } from '@ant-design/pro-form';
import './index.less';
import RemoveUser from './RemoveUser';
import UserForm from '../../../User/Form';
interface BaseMemberPorps {
	id: string;
}

export const BaseMember = ({ id }: BaseMemberPorps) => {
	const treeData: any = [
		{
			value: 'zhejiang',
			label: 'Zhejiang',
			children: [
				{
					value: 'hangzhou',
					label: 'Hangzhou',
					children: [
						{
							value: 'xihu',
							label: 'West Lake',
						},
					],
				},
			],
		},
		{
			value: 'jiangsu',
			label: 'Jiangsu',
			children: [
				{
					value: 'nanjing',
					label: 'Nanjing',
					children: [
						{
							value: 'zhonghuamen',
							label: 'Zhong Hua Men',
						},
					],
				},
			],
		},
	];
	const columns: ProColumns<UserPageVO>[] = [
		{
			title: '用户名',
			key: 'username',
			dataIndex: 'username',
			width: 150,
			render: (_: any, row: any) => (
				<Tooltip title={row.username}>
					<span className='io-cms-practice-base-detail__member-span'>{row.username}</span>
				</Tooltip>
			),
		},
		{
			title: '真实姓名',
			key: 'realName',
			dataIndex: 'realName',
			width: 150,
			render: (_: any, row: any) => (
				<Tooltip title={row.realName}>
					<span className='io-cms-practice-base-detail__member-span'>{row.realName}</span>
				</Tooltip>
			),
		},
		{
			title: '所属阵地',
			key: 'org',
			dataIndex: 'org',
			width: 190,
			render: (_: any, row: any) => (
				<Tooltip title={row.org}>
					<span className='io-cms-practice-base-detail__member-span'>{row.org}</span>
				</Tooltip>
			),
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
			onFilter: (value, record) => record.roleNames.indexOf(value.toString()) === 0,
		},
		{
			title: '联系方式',
			key: 'telephone',
			dataIndex: 'telephone',
			width: 210,
		},
		{
			title: '电子邮箱',
			key: 'email',
			dataIndex: 'email',
			width: 170,
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
					<a
						onClick={async () => {
							setShow(true);
						}}
					>
						移除
					</a>
				</>
			),
		},
	];
	const [show, setShow] = useState(false);
	const [removeuser, setRemoveuser] = useState(false);
	const [form] = Form.useForm();
	const handOk = () => {
		form.submit();
	};
	const handOnCancal = () => {
		form.resetFields();
		setShow(false);
	};
	return (
		<div className='io-cms-practice-base-detail-member__div'>
			<BizPage>
				<BizTable
					rowKey='id'
					renderActions={() => (
						<>
							<div className='io-space-item'>
								<UserForm />
							</div>
							<div className='io-space-item'>
								<Button onClick={() => setRemoveuser(true)}>移入用户</Button>
							</div>
							<div className='io-space-item'>
								<Button
									onClick={() => {
										setShow(true);
									}}
								>
									批量移除
								</Button>
							</div>
						</>
					)}
					rowSelection={{}}
					columns={columns}
					request={(params: any, sort: any, filter: any) => {
						return userPaging({}).then((data: any) => ({ data: data.data.content }));
					}}
				></BizTable>
			</BizPage>
			<Modal
				width={615}
				title='移除用户'
				onOk={handOk}
				onCancel={handOnCancal}
				visible={show}
				className='io-cms-practice-base__member-delete'
			>
				<Form form={form}>
					<Form.Item
						label='选择移除后的所属阵地'
						rules={[{ required: true }, { message: '请选择所属阵地' }]}
						name='userIds'
					>
						<TreeSelect
							allowClear
							treeData={treeData}
							placeholder='请选择所属阵地'
						></TreeSelect>
					</Form.Item>
				</Form>
			</Modal>
			<RemoveUser removeuser={removeuser} setRemoveuser={setRemoveuser} />
		</div>
	);
};
