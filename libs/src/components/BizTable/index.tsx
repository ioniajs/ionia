import { ParamsType } from '@ant-design/pro-provider';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
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
			{...props}
		/>
	);
}
