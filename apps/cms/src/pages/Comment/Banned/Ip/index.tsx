import React, { useState, useRef } from 'react';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button, DatePicker, Form, Space, Cascader } from 'antd';
import { SortOrder } from 'antd/lib/table/interface';
import { BizTable } from '@ionia/libs';
import { useHistory } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import './index.less';

const sortDirections: SortOrder[] = ['descend', 'ascend'];

const dataSource = [
	{
		id: '001',
		Ip: '192.168.0.140',
		area: '江西省南昌市',
		prohibitedTime: '2020-03-11 08:46:05',
		operationUser: 'system',
	},
	{
		id: '002',
		Ip: '192.168.0.145',
		area: '浙江省杭州市',
		prohibitedTime: '2019-09-03 14:13:33',
		operationUser: '珠穆朗玛峰001',
	},
];

const options = [
	{
		value: 'zhejiang',
		label: '浙江省',
		children: [
			{
				value: 'Hangzhou',
				label: '杭州市',
				children: [
					{
						value: 'xihu',
						label: '西湖区',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: '江西省',
		children: [
			{
				value: 'nanjing',
				label: '南昌市',
				children: [
					{
						value: 'zhonghuamen',
						label: '西湖区',
					},
				],
			},
		],
	},
];

export const IpChildren = () => {
	const history = useHistory();
	const [form] = Form.useForm();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const actionRef = useRef<ActionType>();
	const columns = [
		{
			title: 'IP地址',
			key: 'Ip',
			dataIndex: 'Ip',
			render: (_: any, row: any) => (
				<a
					onClick={() => {
						history.push('/content-operation/comment/single-ip');
					}}
				>
					{row.Ip}
				</a>
			),
		},
		{
			title: '所在地区',
			key: 'area',
			dataIndex: 'area',
			filterDropdown: () => (
				<Cascader
					options={options}
					// showSearch
					changeOnSelect
					onChange={(value, selectedOptions) => {
						console.log(value, selectedOptions);
					}}
					style={{ width: '240px', margin: '8px' }}
					popupPlacement='bottomLeft'
				/>
			),
		},
		{
			title: '禁止时间',
			key: 'prohibitedTime',
			dataIndex: 'prohibitedTime',
			sorter: (a: any, b: any, order: any) => {
				let atime = new Date(a.prohibitedTime.replace(/-/g, '/')).getTime();
				let btime = new Date(b.prohibitedTime.replace(/-/g, '/')).getTime();
				return atime - btime;
			},
			sortDirections: sortDirections,
			filterDropdown: () => (
				<div className='io-cms-comment-banned-user-table-prohibitedTime-filterDropDown'>
					<Form form={form}>
						<Form.Item
							name='prohibitedTime'
							className='prohibitedTime-filterDropDown_formItem'
						>
							<DatePicker.RangePicker showTime />
						</Form.Item>
					</Form>
					<Space className='prohibitedTime-filterDropDown__space' size={40}>
						<Button
							className='prohibitedTime-filterDropDown-search__button'
							type='primary'
							onClick={() => {
								const prohibitedTime = form.getFieldValue('prohibitedTime');
								const startTime =
									prohibitedTime &&
									moment(prohibitedTime[0]).format('YYYY-MM-DD HH:mm:ss');
								const endTime =
									prohibitedTime &&
									moment(prohibitedTime[1]).format('YYYY-MM-DD HH:mm:ss');
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
								form.resetFields();
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
			title: '操作人',
			key: 'operationUser',
			dataIndex: 'operationUser',
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			render: () => <a>取消IP禁止</a>,
		},
	];
	return (
		<BizTable
			rowKey='id'
			actionRef={actionRef}
			renderActions={() => <Button type='primary'>取消IP禁止</Button>}
			inputPlaceholderText='请输入IP地址/操作人'
			columns={columns}
			dataSource={dataSource}
			// request={() => {}}
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
	);
};
