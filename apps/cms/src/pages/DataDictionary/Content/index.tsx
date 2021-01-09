import React, { useRef, useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { Divider, Button, Switch } from 'antd';
import {
	DataDictionaryPageVO,
	dataDictionaryPaging,
	operatingDataDictionary,
} from '@ionia/libs/src/services';
import { useHistory } from 'react-router-dom';
import './index.less';

export default () => {
	const history = useHistory();
	const { location } = history;
	const { state }: any = location;
	console.log(state, 'ssss');
	const actionRef = useRef<ActionType>();
	const [searchParams, setSearchParams] = useState<any>({
		pageNo: 1,
		pageSize: 10,
		typeId: state.typeId,
	});
	const columns: ProColumns<DataDictionaryPageVO>[] = [
		{
			title: '字典标签',
			key: 'label',
			dataIndex: 'label',
			width: 400,
			render: (_, row) => (
				<span
					style={{
						display: 'inline-block',
						minWidth: '200px',
						maxWidth: '400px',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}
				>
					{row.label}
				</span>
			),
		},
		{
			title: '字典键值',
			key: 'key',
			dataIndex: 'key',
		},
		{
			title: '字典图片',
			key: 'pictureId',
			dataIndex: 'pictureId',
		},
		{
			title: '排序值',
			key: 'sortNum',
			dataIndex: 'sortNum',
		},
		{
			title: '是否启用',
			key: 'status',
			dataIndex: 'status',
			render: (_, row) => (
				<Switch
					checked={row.status === 1}
					checkedChildren='开启'
					unCheckedChildren='禁用'
					onChange={async value => {
						const success = await operatingDataDictionary({
							id: row.id,
							status: value ? 1 : 0,
						});
						if (success.code === 200 && actionRef.current) {
							actionRef.current.reload();
						}
					}}
				/>
			),
		},
		{
			title: '更新时间',
			key: 'updateTime',
			dataIndex: 'updateTime',
		},
		{
			title: '备注',
			key: 'remark',
			dataIndex: 'remark',
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			render: (_, row) => (
				<>
					<a>新增下级</a>
					<Divider type='vertical' />
					<a>编辑</a>
					<Divider type='vertical' />
					<a>删除</a>
				</>
			),
		},
	];

	return (
		<BizPage breadcrumbs={[{ name: '数据字典' }, { name: '字典数据' }]}>
			<div className='io-cms-system-data-dictionary-container'>
				<BizTable
					rowKey='id'
					columns={columns}
					params={searchParams}
					actionRef={actionRef}
					renderActions={() => (
						<>
							<div className='io-space-item'>
								<Button
									onClick={() => {
										history.goBack();
									}}
								>
									<i className='iconfont icon-left' />
									&nbsp;返回
								</Button>
							</div>
							<div className='io-space-item'>
								<Button type='primary'>
									<i className='iconfont icon-plus1' />
									&nbsp;新建
								</Button>
							</div>
						</>
					)}
					request={(params: any, sort: any, filter: any) => {
						return dataDictionaryPaging({
							...params,
							pageNo: params.current,
							pageSize: params.pageSize,
						}).then(data => ({
							data: data.data.content,
							total: data.data.total,
						}));
					}}
				/>
			</div>
		</BizPage>
	);
};
