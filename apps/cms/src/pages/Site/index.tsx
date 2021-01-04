import React, { useRef, useState } from 'react';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button, Switch, Divider, Modal, Tooltip, message, InputNumber } from 'antd';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useHistory } from 'react-router-dom';
// import update from 'immutability-helper';
import {
	BizTable,
	disableSite,
	enableSite,
	batchDetailSite,
	BizPage,
	BizModalForm,
	BizModalFormRef,
	gainSiteTreeAuth,
	sortAdminSite,
} from '@ionia/libs';
import { AdminSiteTreeVO, AdminSiteRecycleSummaryVo } from '@ionia/libs/src/services/kernel';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import CopyForm from './CopySite';
import RecycleSite from './Recycle';
import './index.less';

/**
 * 启用、禁用
 * @param fields
 */
const handleUpdate = async (id: string, status: number) => {
	// 启用
	if (status === 1) {
		const enableRes = await enableSite(id);
		return enableRes;
	}
	const disableRes = await disableSite(id);
	return disableRes;
};

// 删除
const handleRemove = async (ids: IdsDTO) => {
	const removeRes = await batchDetailSite(ids);
	if (removeRes.code !== 200) {
		message.error('删除失败');
	} else {
		message.success('删除成功');
	}
	return removeRes.code;
};

export default () => {
	const history = useHistory();
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const modalRef = useRef<BizModalFormRef>();
	const columns: ProColumns<AdminSiteTreeVO>[] = [
		{
			title: '站点名称',
			key: 'name',
			dataIndex: 'name',
			ellipsis: true,
			render: (_, row) => {
				return (
					<Tooltip title={`${row.name}`}>
						<a
							onClick={() => {
								// history.push(`/system-management/site/detail/${row.id}`);
								history.push({
									pathname: `/system-management/site/detail/${row.id}`,
									state: {
										parentId: row.parentId,
									},
								});
							}}
						>
							{row.name}
						</a>
					</Tooltip>
				);
			},
			width: 400,
		},
		{
			title: '域名',
			key: 'domain',
			dataIndex: 'domain',
			render: (_, row) => {
				return (row.domain || []).map((item: any) => {
					return (
						<Tooltip title={`${row.domain}`}>
							<span>{item ? `${item},` : '-'}</span>
						</Tooltip>
					);
				});
			},
			width: 300,
		},
		{
			title: '模板路径',
			key: 'modelPath',
			dataIndex: 'modelPath',
			render: (_, row) => {
				return (
					<Tooltip title={`${row?.modelPath}`}>
						<span>{row?.modelPath || '-'}</span>
					</Tooltip>
				);
			},
			width: 300,
		},
		{
			title: '排序值',
			key: 'sortNo',
			dataIndex: 'sortNO',
			render: (_, row) => (
				<InputNumber
					onBlur={async e => {
						console.log(!!e.target.value, 'sort');
						if (!!e.target.value) {
							const success = await sortAdminSite({
								sorts: [{ id: row.id, sortNum: Number(e.target.value) }],
							}).then(res => res.code);
							if (success === 200) {
								message.success('排序成功');
								actionRef.current?.reload();
							}
						}
					}}
				/>
			),
			width: 200,
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			render: (_, row) => (
				<Switch
					checked={row.status === 1}
					checkedChildren='开启'
					unCheckedChildren='禁用'
					onChange={async (value: any) => {
						const success = await handleUpdate(row.id.toString(), value ? 1 : 0);
						if (success.code === 200) {
							if (success.code === 200 && actionRef.current) {
								actionRef.current.reload();
							}
						}
					}}
				/>
			),
			width: 200,
		},
		{
			title: '操作',
			key: 'operation',
			dataIndex: 'operation',
			render: (_, row, i) => (
				<>
					<a
						onClick={() => {
							history.push('/system-management/site/publish-statics');
						}}
					>
						发布静态页
					</a>
					<Divider type='vertical' />
					<a>预览</a>
					<Divider type='vertical' />
					<a>浏览</a>
					<Divider type='vertical' />
					<div style={{ display: 'inline-block' }}>
						<CopyForm siteId={row.id} source='list' parentId={row.parentId} />
					</div>
					{/* <a>复制</a> */}
					<Divider type='vertical' />
					{!!row.parentId && (
						<a
							onClick={async () => {
								Modal.confirm({
									title: '你确定删除选中站点吗？',
									content:
										'删除站点会同时删除其下级站点，删除可在站点回收站中恢复。',
									okText: '删除',
									cancelText: '取消',
									onOk: async () => {
										const success = await handleRemove({
											ids: [row.id.toString()],
										});
										if (success === 200) {
											if (success === 200 && actionRef.current) {
												actionRef.current.reload();
											}
										}
									},
								});
							}}
						>
							删除
						</a>
					)}
					{!row.parentId && <span style={{ color: '#BFBFBF' }}>删除</span>}
				</>
			),
			width: 300,
		},
	];

	return (
		<BizPage>
			<BizTable
				rowKey='id'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Button
								type='primary'
								onClick={() => {
									history.push('/system-management/site/create');
								}}
							>
								<i
									className='iconfont icon-plus1'
									style={{ fontSize: '14px', lineHeight: '21px' }}
								/>
								新建
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								onClick={() => {
									history.push('/system-management/site/batch-create');
								}}
							>
								批量新建
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								// disabled={selectedRowKeys.length === 0}
								onClick={() => {
									if (selectedRowKeys.length === 0) {
										message.error('请勾选需要删除的站点');
										return;
									}
									Modal.confirm({
										title: '你确定删除选中站点吗？',
										content:
											'删除站点会同时删除其下级站点，删除可在站点回收站中恢复。',
										okText: '删除',
										cancelText: '取消',
										onOk: async () => {
											const tempSelRowKeys = selectedRowKeys.map((s: any) =>
												s.toString()
											);
											const batchDelRes = await handleRemove({
												ids: tempSelRowKeys,
											});
											if (batchDelRes === 200) {
												if (batchDelRes === 200 && actionRef.current) {
													actionRef.current.reload();
												}
											}
										},
									});
								}}
							>
								批量删除
							</Button>
						</div>
						<BizModalForm
							ref={modalRef}
							title='站点回收站'
							triggerRender={() => (
								<Button
									onClick={() => {
										modalRef.current?.open();
									}}
								>
									站点回收站
								</Button>
							)}
							submitterRender={() => (
								<Button
									onClick={() => {
										modalRef.current?.close();
									}}
								>
									取消
								</Button>
							)}
							width={1200}
							className='io-cms-site-cycle-modal__table'
						>
							<RecycleSite
								onClose={() => {
									modalRef.current?.close();
								}}
							/>
						</BizModalForm>
					</>
				)}
				inputPlaceholderText={'请输入站点名称/目录'}
				columns={columns}
				request={params => gainSiteTreeAuth(params.keyword || '')}
				rowSelection={{
					selectedRowKeys,
					onChange: selectedRowKeys => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
					checkStrictly: false,
					// getCheckboxProps: (record) => ({
					//   // 在整个详情为部分发货状态下，并且，商品信息为已发货状态下，该条商品信息不可勾选
					//   disabled: record.Status === 1 && data.Status === 2,
					//   ProductName: record.ProductName,
					// }),
				}}
				pagination={false}
			/>
		</BizPage>
	);
};
