import { ParamsType } from '@ant-design/pro-provider';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { Button, Input } from 'antd';
import React from 'react';
import './index.less';

export interface BizTableProps<T, U extends ParamsType> extends ProTableProps<T, U> {}

export function BizTable<T, U extends ParamsType>(props: BizTableProps<T, U>) {
	return (
		<ProTable<T, U>
			className='io-biz-table'
			options={{
				reload: true,
				density: false,
				setting: true,
				fullScreen: true,
			}}
			search={false}
			toolbar={{
				search: (
					<div className='io-biz-table__action-container'>
						<div className='io-space-item'>
							<Button type='primary'>新建</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>启用</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>禁用</Button>
						</div>
						<div className='io-space-item'>
							<Button type='default'>删除</Button>
						</div>
					</div>
				),
				actions: [
					<Input
						key='search'
						style={{ width: 208 }}
						allowClear
						placeholder='请输入用户名/真实姓名'
					/>,
					<Button key='search-button' type='primary'>
						查询
					</Button>,
					<Button key='reset-button' type='default'>
						重置
					</Button>,
				],
			}}
			{...props}
		/>
	);
}
