import React, { useRef } from 'react';
import { BizTable } from '@ionia/libs';
import { ActionType, ProColumns } from '@ant-design/pro-table';

const dataSource = [
	{
		id: '001',
		reportName: 'system',
		reportTime: '2019-11-29 19:17:52',
	},
	{
		id: '222',
		reportName: 'systemqqqq',
		reportTime: '2020-11-29 19:17:52',
	},
];
export default () => {
	const actionRef = useRef<ActionType>();
	const columns = [
		{
			title: '举报人',
			key: 'reportName',
			dataIndex: 'reportName',
		},
		{
			title: '举报时间',
			key: 'reportTime',
			dataIndex: 'reportTime',
		},
	];
	return (
		<BizTable
			actionRef={actionRef}
			columns={columns}
			dataSource={dataSource}
			toolBarRender={false}
			pagination={{
				total: 300,
				showSizeChanger: true,
				showQuickJumper: true,
				showTotal: total => '',
				defaultPageSize: 10,
			}}
		/>
	);
};
