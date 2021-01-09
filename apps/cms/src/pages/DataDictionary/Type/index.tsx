import React, { useRef, useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { SortOrder } from 'antd/lib/table/interface';
import { Button, Form, Space, DatePicker, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { DataDictionaryTypePageVO, dictionaryTypePaing } from '@ionia/libs';
import moment from 'moment';
import './index.less';

const sortDirections: SortOrder[] = ['descend', 'ascend'];
export default () => {
	const actionRef = useRef<ActionType>();
	const [searchParams, setSearchParams] = useState<any>({ pageNo: 1, pageSize: 10 });
	const [form] = Form.useForm();
	const columns: ProColumns<DataDictionaryTypePageVO>[] = [
		{
			title: '字典类型',
			key: 'type',
			dataIndex: 'type',
		},
		{
			title: '字典名称',
			key: 'name',
			dataIndex: 'name',
		},
		{
			title: '更新时间',
			key: 'updateTime',
			dataIndex: 'updateTime',
			sorter: (a: any, b: any, order: any) => {
				let atime = new Date(a.birthday.replace(/-/g, '/')).getTime();
				let btime = new Date(b.birthday.replace(/-/g, '/')).getTime();
				console.log(atime, btime, order, 'dd');
				setSearchParams({ ...searchParams, updateTime: order });
				return atime - btime;
			},
			sortDirections: sortDirections,
			filterDropdown: () => (
				<div className='io-cms-data-dictionary-filterDropDown'>
					<Form form={form}>
						<Form.Item name='updateTime' className='data-dictionary-filterDropDown_formItem'>
							<DatePicker.RangePicker />
						</Form.Item>
					</Form>
					<Space className='data-dictionary-filterDropDown__space' size={40}>
						<Button
							className='data-dictionary-filterDropDown-search__button'
							type='primary'
							onClick={() => {
								const time = form.getFieldValue('updateTime');
								console.log(time, 'timeme');
								const beginUpdateTime =
									moment(time[0]).format('YYYY-MM-DD') + ' 00:00:00';
								const endUpdateTime =
									moment(time[1]).format('YYYY-MM-DD') + ' 00:00:00';
								console.log(beginUpdateTime, endUpdateTime);
								setSearchParams({
									...searchParams,
									beginUpdateTime,
									endUpdateTime,
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
								form.setFieldsValue({ updateTime: '' });
								setSearchParams({
									...searchParams,
									beginUpdateTime: '',
									endUpdateTime: '',
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
			title: '备注',
			key: 'remake',
			dataIndex: 'remake',
		},
		{
			title: '操作',
			key: 'opeartion',
			dataIndex: 'operation',
			render: (_, row) => {
				return (
					<>
						<a>字典数据</a>
						<Divider type='vertical' />
						<a>编辑</a>
						<Divider type='vertical' />
						<a>删除</a>
					</>
				);
			},
		},
	];
	return (
		<BizPage>
			<div className='io-cms-system-data-dictionary-type'>
				<BizTable
					rowKey='id'
					columns={columns}
					params={searchParams}
					actionRef={actionRef}
					renderActions={() => (
						<div className='io-space-item'>
							<Button type='primary'>
								<i className='iconfont icon-plus1' />
								新建
							</Button>
						</div>
					)}
					inputPlaceholderText='请输入字典名称/字典类型'
					request={(params: any, sort: any, filter: any) => {
						return dictionaryTypePaing({
							...params,
							pageNo: params.current,
							pageSize: params.pageSize,
						}).then(data => ({
							data: data.data.content,
							total: data.data.total,
						}));
					}}
					pagination={{
						// total: 85,
						showSizeChanger: true,
						showQuickJumper: true,
						defaultPageSize: 10,
						// showTotal: total => `共${total}条`,
						onChange: (page, pageSize) =>
							setSearchParams({ ...searchParams, pageNo: page, pageSize: pageSize }),
					}}
				/>
			</div>
		</BizPage>
	);
};
