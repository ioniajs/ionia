import { ParamsType } from '@ant-design/pro-provider';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { Button, Input } from 'antd';
import React, { ReactNode } from 'react';
import './index.less';

export interface BizTableProps<T, U extends ParamsType> extends ProTableProps<T, U> {
	renderActions?: () => ReactNode;
	renderSider?: () => ReactNode;
}

export function BizTable<T, U extends ParamsType>({
	renderActions,
	renderSider,
	...reset
}: BizTableProps<T, U>) {
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
						{renderActions && renderActions()}
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
			tableRender={(_, dom) => (
				<div className='io-table-container'>
					{renderSider && (
						<div className='io-table-container__sider'>{renderSider()}</div>
					)}
					<div className='io-table-container__content'>{dom}</div>
				</div>
			)}
			{...reset}
		/>
	);
}
