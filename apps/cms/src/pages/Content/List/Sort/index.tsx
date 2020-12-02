import React, { useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { ActionType, ProColumns } from '@ant-design/pro-table';
import './index.less';

export default () => {
	const [rowId, setRowId] = useState<string | number>();
	const dataSource = [
		{
			id: 1,
			title: '机场机场集合IC',
			contentType: ['top', 'fire', 'toutiao', 'tuijian', 'dianzan'],
			status: 1,
			publishTime: '2019-11-29 19:17:52',
		},
		{
			id: 2,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 3,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 4,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 5,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 6,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 7,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 8,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 9,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 10,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'tuijian'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
		{
			id: 11,
			title: '高铁站zzz',
			contentType: ['top', 'fire', 'toutiao', 'like'],
			status: 1,
			publishTime: '2019-11-30 12:12:12',
		},
	];
	const columns = [
		{
			title: '标题',
			key: 'title',
			dataIndex: 'title',
		},
		{
			title: '内容类型',
			key: 'contentType',
			dataIndex: 'contentType',
			render: (_: any, row: any) => {
				// return <i className='iconfont icon-toutiao' />
				(row?.contentType || []).map((item: string) => {
					// return <i className='iconfont' />
					if (item === 'top') {
						return <i className='iconfont icon-vertical-align-top' />;
					}
					if (item === 'fire') {
						return <i className='iconfont icon-fire' />;
					}
					if (item === 'toutiao') {
						return <i className='iconfont icon-toutiao' />;
					}
					if (item === 'tuijian') {
						return <i className='iconfont icon-like' />;
					}
					return '';
				});
				return '';
			},
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
		},
		{
			title: '发布时间',
			key: 'publishTime',
			dataIndex: 'publishTime',
		},
	];
	return (
		<BizTable
			rowKey='id'
			columns={columns}
			dataSource={dataSource}
			toolBarRender={false}
			onRow={record => {
				return {
					onClick: event => {
						setRowId(record?.id);
					},
				};
			}}
			rowClassName={record => {
				return record.id === rowId ? 'clickRowStyle' : '';
			}}
			pagination={{
				showQuickJumper: true,
				defaultCurrent: 1,
				defaultPageSize: 10,
				total: 50,
				showTotal: () => '',
			}}
			scroll={{ y: 240 }}
		/>
	);
};
