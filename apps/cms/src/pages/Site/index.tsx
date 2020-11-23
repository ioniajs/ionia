import React, { useRef, useState } from 'react';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button, Switch, Divider, Modal, Tooltip, message, InputNumber, Radio } from 'antd';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useHistory } from 'react-router-dom';
// import update from 'immutability-helper';
import {
	BizTable,
	gainSiteTree,
	disableSite,
	enableSite,
	batchDetailSite,
	BizPage,
	BizModalTable,
	recycleSiteList,
	recycleSiteDetail,
	recycleSiteRestore,
	SiteRevertDTO,
} from '@ionia/libs';
import {
	AdminSiteTreeVO,
	AdminSiteRecycleSummaryVo,
} from '@ionia/libs/src/services/kernel/admin-site.vo';
import { IdsDTO } from '@ionia/libs/src/services/reuse.dto';
import CopyForm from './CopySite';
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

// 回收站删除
const handleDeleteRecycle = async (ids: IdsDTO) => {
	const deleteRecycleRes = await recycleSiteDetail(ids);
	if (deleteRecycleRes.code !== 200) {
		message.error('删除失败');
	} else {
		message.success('删除成功');
	}
	return deleteRecycleRes.code;
};

// 回收站还原
const handleRecycleRevert = async (fileds: SiteRevertDTO) => {
	const revertRes = await recycleSiteRestore(fileds);
	if (revertRes.code !== 200) {
		message.error('站点恢复失败');
	} else {
		message.success('站点恢复成功');
	}
	return revertRes.code;
};

export default () => {
	const history = useHistory();
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const [recycleVisible, setRecycleVisible] = useState<boolean>(false);
	const [recycleData, setRecycleData] = useState<AdminSiteRecycleSummaryVo[]>();
	const [selectedRecycleRowKeys, setSelectedRecycleRowKeys] = useState<number[]>([]);
	const [revertRadio, setRevertRadio] = useState<number>(1);
	console.log(revertRadio, 'rererer');
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
								history.push(`/site/detail/${row.id}`);
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
				return (
					<Tooltip title={`${row.domain}`}>
						<span>{row.domain || '-'}</span>
					</Tooltip>
				);
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
			render: (_, row) => <InputNumber />,
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
			render: (_, row) => (
				<>
					<a>发布静态页</a>
					<Divider type='vertical' />
					<a>预览</a>
					<Divider type='vertical' />
					<a>浏览</a>
					<Divider type='vertical' />
					<div style={{ display: 'inline-block' }}>
						<CopyForm siteId={row.id} />
					</div>
					{/* <a>复制</a> */}
					<Divider type='vertical' />
					{Number(row.id) !== 0 && (
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
					{Number(row.id) === 0 && <span style={{ color: '#BFBFBF' }}>删除</span>}
				</>
			),
			width: 300,
		},
	];

	const recycleColumns: ProColumns<AdminSiteRecycleSummaryVo>[] = [
		{
			title: '站点名称',
			key: 'name',
			dataIndex: 'name',
		},
		{
			title: '删除人',
			key: 'operatTime',
			dataIndex: 'operatTime',
		},
		{
			title: '删除时间',
			key: 'operator',
			dataIndex: 'operator',
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
									history.push('/site/create');
								}}
							>
								<i className='iconfont icon-plus1' style={{ fontSize: '16px' }} />
								新建
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								onClick={() => {
									history.push('/site/batch-create');
								}}
							>
								批量新建
							</Button>
						</div>
						<div className='io-space-item'>
							<Button
								type='default'
								disabled={selectedRowKeys.length === 0}
								onClick={() => {
									Modal.info({
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
						<div className='io-space-item'>
							<Button
								type='default'
								onClick={async () => {
									const cycleRes = await recycleSiteList();
									if (cycleRes.code === 200) {
										setRecycleData(cycleRes.data);
										setRecycleVisible(true);
									}
								}}
							>
								站点回收
							</Button>
						</div>
					</>
				)}
				inputPlaceholderText={'请输入站点名称/目录'}
				columns={columns}
				request={params => {
					return gainSiteTree(params.keyword || '').then(data => ({
						data: data.data.list,
					}));
				}}
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
			<BizModalTable
				title='站点回收站'
				titleAction={
					<>
						<Button
							type='primary'
							onClick={async () => {
								const tempSelRowKeys = selectedRecycleRowKeys.map((s: any) =>
									s.toString()
								);
								const deleteRes = await handleDeleteRecycle({
									ids: tempSelRowKeys,
								});
								if (deleteRes === 200) {
									setRecycleVisible(false);
								}
							}}
							className='io-cms-site-recycle-delete__but'
						>
							删除
						</Button>
						<Button
							onClick={() => {
								const ids = selectedRecycleRowKeys.map(s => Number(s));
								let revertVal: number;
								Modal.confirm({
									title: '恢复站点',
									content: (
										<>
											<p>
												以下站点的上级站点已被删除，无法正常恢复，请选择处理方式:
											</p>
											<p>站点1</p>
											<Radio.Group
												onChange={e => {
													revertVal = e.target.value;
													setRevertRadio(e.target.value);
												}}
											>
												<Radio value={1}>同时恢复所有上级站点</Radio>
												<Radio value={2}>恢复到其他站点下</Radio>
											</Radio.Group>
										</>
									),
									onOk: async () => {
										const params = {
											type: revertVal,
											siteIds: ids || [],
										};
										const resvertRes = await handleRecycleRevert(params);
										if (resvertRes === 200) {
											setRecycleVisible(false);
										}
									},
								});
							}}
						>
							恢复
						</Button>
					</>
				}
				visible={recycleVisible}
				columns={recycleColumns}
				dataSource={recycleData}
				tableProps={{
					rowSelection: {
						selectedRowKeys: selectedRecycleRowKeys,
						onChange: selectedRowKeys => {
							setSelectedRecycleRowKeys(selectedRowKeys as number[]);
						},
					},
					pagination: false,
					// scroll: {
					// 	y: 200
					// }
				}}
				footer={
					<Button
						onClick={() => {
							setRecycleVisible(false);
						}}
					>
						取消
					</Button>
				}
				onCancel={() => setRecycleVisible(false)}
			/>
		</BizPage>
	);
};
