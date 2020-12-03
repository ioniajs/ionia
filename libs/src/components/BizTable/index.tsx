import { ParamsType } from '@ant-design/pro-provider';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { Button, Input } from 'antd';
import React, { ReactNode, useState } from 'react';
import './index.less';

export interface BizTableProps<T, U extends ParamsType> extends ProTableProps<T, U> {
	renderActions?: () => ReactNode;
	renderSider?: () => ReactNode;
	inputPlaceholderText?: string;
	actionRef?: any;
}

export function BizTable<T, U extends ParamsType>({
	renderActions,
	renderSider,
	inputPlaceholderText = '请输入用户名/真实姓名',
	request,
	actionRef,
	...reset
}: BizTableProps<T, U>) {
	const [searchStr, setSearchStr] = useState<string>('');
	return (
		<ProTable<T, U>
			actionRef={actionRef}
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
						placeholder={inputPlaceholderText}
						onChange={e => {
							setSearchStr(e.target.value);
						}}
					/>,
					<Button
						key='search-button'
						type='primary'
						onClick={() => {
							console.log(actionRef.current, 'ssss');
							actionRef?.current?.reload();
						}}
					>
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
			request={
				request
					? (params, sort, filter) => {
						return request(
							{
								...params,
								keyword: searchStr,
							},
							sort,
							filter
						);
					}
					: undefined
			}
			{...reset}
		/>
	);
}
