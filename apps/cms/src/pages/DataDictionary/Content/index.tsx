import React, { useRef, useState } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { SortOrder } from 'antd/lib/table/interface';
import { Divider, Button, Switch, Modal, message } from 'antd';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import {
	DataDictionaryPageVO,
	dataDictionaryPaging,
	operatingDataDictionary,
	deleteDataDiactionary
} from '@ionia/libs/src/services';
import { useHistory } from 'react-router-dom';
import DetailForm from './Detail';
import './index.less';

/**
 * 删除数据字典
 * @param ids 
 */
const handleDeleteDictionary = async (ids: IdsDTO) => {
	const deleteRes = await deleteDataDiactionary(ids);
	if (deleteRes.code !== 200) {
		message.error('删除失败');
	} else {
		message.success('删除成功');
	}
	return deleteRes.code;
};
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
					{/* <a>新增下级</a> */}
					<div style={{ display: 'inline-block' }}>
						<DetailForm id={row.id} reloadTableData={() => { actionRef.current?.reload() }} source='createSub' typeId={state.typeId} />
					</div>
					<Divider type='vertical' />
					<div style={{ display: 'inline-block' }}>
						<DetailForm id={row.id} reloadTableData={() => { actionRef.current?.reload() }} source='edit' typeId={state.typeId} />
					</div>
					{/* <a>编辑</a> */}
					<Divider type='vertical' />
					<a
						onClick={async () => {
							Modal.confirm({
								title: '是否确定删除？',
								content: '删除操作将连同下级字典数据一同删除，确认是否执行？',
								okText: '确定',
								cancelText: '取消',
								onOk: async () => {
									const success = await handleDeleteDictionary({
										ids: [row.id.toString()],
									});
									if (success === 200) {
										if (success === 200 && actionRef.current) {
											actionRef.current.reload();
										}
									}
								},
							})
						}}
					>
						删除
					</a>
				</>
			),
		},
	];

	return (
		<BizPage breadcrumbs={[{ name: '数据字典' }, { name: '字典数据' }]} showActions renderActions={() => (
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
					<DetailForm reloadTableData={() => { actionRef.current?.reload() }} source='create' typeId={state.typeId} />
					{/* <Button type='primary'>
									<i className='iconfont icon-plus1' />
									&nbsp;新建
								</Button> */}
				</div>
			</>
		)}>
			<div className='io-cms-system-data-dictionary-container'>
				<BizTable
					rowKey='id'
					columns={columns}
					params={searchParams}
					actionRef={actionRef}
					inputPlaceholderText='请输入字典标签'
					toolBarRender={false}

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
					pagination={false}
				/>
			</div>
		</BizPage>
	);
};
