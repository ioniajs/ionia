import { ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable } from '@ionia/libs';
import { Button } from 'antd';
import React from 'react';
import UserForm from '../User/Form';

export interface TableListItem {
	key: number;
	name: string;
}

const columns: ProColumns<TableListItem>[] = [
	{
		title: '阵地名称',
		key: 'username',
		dataIndex: 'username',
	},
	{
		title: '阵地编号',
		key: 'name',
		dataIndex: 'name',
	},
	{
		title: '阵地类型',
		key: 'belongposition',
		dataIndex: 'belongPosition',
	},
	{
		title: '地址',
	},
	{
		title: '操作',
	},
];

export default () => {
	return (
		<BizPage showActions={false}>
			<BizTable
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<UserForm />
						</div>
						<div className='io-space-item'>
							<Button type='default'>批量新建</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>批量删除</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>排序</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>导入</Button>
						</div>
					</>
				)}
				columns={columns}
				request={params => {
					console.log(params);
					return new Promise(resolve => resolve());
				}}
			/>
		</BizPage>
	);
};
