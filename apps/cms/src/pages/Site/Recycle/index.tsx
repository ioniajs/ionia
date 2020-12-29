import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable } from '@ionia/libs';
import { useMount, useRequest } from '@umijs/hooks';
import {
	recycleSiteList,
	recycleSiteDetail,
	recycleSiteRestore,
	SiteRevertDTO,
	gainSiteTree,
	recycleRestoreVerify,
} from '@ionia/libs/src/services';
import { AdminSiteRecycleSummaryVo, AdminSiteTreeVO } from '@ionia/libs/src/services/kernel';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import { message, Modal, Radio, Button, TreeSelect, Form } from 'antd';
import React, { useRef, useState } from 'react';
import './index.less';

interface RecycleProps {
	onClose?: () => void;
}

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

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 12 },
};

export default ({ onClose }: RecycleProps) => {
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const [siteTree, setSiteTree] = useState<AdminSiteTreeVO[]>();
	const [recycleForm] = Form.useForm();
	const [revertRadio, setRevertRadio] = useState<number>(1);
	const [visible, setVisible] = useState<boolean>(false);
	const [checkData, setCheckData] = useState<any>();

	// 获取站点树
	const { run: runsiteTree } = useRequest(gainSiteTree, {
		manual: true,
		onSuccess: result => {
			const loop = function (data: any) {
				return data.map((r: any) => {
					if (r.children) {
						r.children = loop(r.children);
					}
					return {
						value: r.id,
						title: r.name,
						key: r.id,
						children: r.children,
						...r,
					};
				});
			};
			const tempSiteTree = loop(result.data.list);
			setSiteTree(tempSiteTree);
		},
	});
	useMount(() => {
		runsiteTree();
	});
	const columns: ProColumns<AdminSiteRecycleSummaryVo>[] = [
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
		<div className='io-cms-site-recycle'>
			<BizPage
				showActions={true}
				renderActions={() => (
					<>
						<Button
							type='primary'
							onClick={async () => {
								if (selectedRowKeys.length === 0) {
									message.error('请勾选需要删除的站点');
									return;
								}
								const tempSelRowKeys = selectedRowKeys.map((s: any) =>
									s.toString()
								);
								const deleteRes = await handleDeleteRecycle({
									ids: tempSelRowKeys,
								});
								if (deleteRes === 200 && actionRef.current) {
									actionRef.current?.reload();
								}
							}}
							// disabled={selectedRowKeys.length === 0}
							className='io-cms-site-recycle-delete__but'
						>
							删除
						</Button>
						<Button
							type='default'
							onClick={async () => {
								if (selectedRowKeys.length === 0) {
									message.error('请勾选需要恢复的站点');
									return;
								}
								const tempSelRowKeys = selectedRowKeys.map((s: any) =>
									s.toString()
								);
								// 校验是否存在已删除的上级站点
								const checkRes = await recycleRestoreVerify({
									ids: tempSelRowKeys,
								});
								setCheckData(checkRes.data);
								if (checkRes.data.length !== 0) {
									const params: SiteRevertDTO = {
										siteIds: selectedRowKeys,
										type: 0,
									};
									const revertRes = await handleRecycleRevert(params);
									if (revertRes === 200) {
										onClose && onClose();
									}
								} else {
									setVisible(true);
									// onClose && onClose();
								}
							}}
						>
							恢复
						</Button>
					</>
				)}
			>
				<BizTable
					rowKey='id'
					actionRef={actionRef}
					columns={columns}
					rowSelection={{
						selectedRowKeys,
						onChange: selectedRowKeys => {
							setSelectedRowKeys(selectedRowKeys as number[]);
						},
					}}
					request={(params, sort, filter) => {
						return recycleSiteList().then(data => ({ data: data.data }));
					}}
					pagination={false}
					toolBarRender={false}
				/>
			</BizPage>
			<Modal
				title='恢复站点'
				visible={visible}
				onOk={async () => {
					// const ids = selectedRowKeys.map(s => Number(s));
					if (revertRadio === 2) {
						recycleForm.validateFields().then(async values => {
							const params: SiteRevertDTO = {
								parentId: values.parentId,
								siteIds: selectedRowKeys,
								type: revertRadio,
							};
							const revertRes = await handleRecycleRevert(params);
							if (revertRes === 200) {
								setVisible(false);
							}
						});
					} else {
						const params: SiteRevertDTO = {
							siteIds: selectedRowKeys,
							type: revertRadio,
						};
						const revertRes = await handleRecycleRevert(params);
						if (revertRes === 200) {
							setVisible(false);
						}
					}
				}}
				onCancel={() => {
					setVisible(false);
				}}
				className='io-cms-site-recycle__modal'
			>
				<p>以下站点的上级站点已被删除，无法正常恢复，请选择处理方式：</p>
				<p>{(checkData || []).map((c: any) => {
					return (
						<span>[{c.name}]</span>
					)
				})}</p>
				{/* <p>[站点1]</p> */}
				<Radio.Group onChange={e => setRevertRadio(e.target.value)} defaultValue={1} style={{ marginBottom: '20px' }}>
					<Radio value={1}>同时恢复所有上级站点</Radio>
					<Radio value={2}>恢复到其他站点下</Radio>
				</Radio.Group>
				{revertRadio === 2 && (
					<Form form={recycleForm} {...layout} className='io-cms-site-recycle-modal_form'>
						<Form.Item
							name='parentId'
							label='上级站点'
							rules={[{ required: true, message: '上级站点为必填项' }]}
						>
							<TreeSelect
								showSearch={true}
								treeData={siteTree}
								onSearch={e => {
									runsiteTree(e);
								}}
								placeholder='请选择上级站点'
								className='io-cms-site-detail-basic-form__item'
							/>
						</Form.Item>
					</Form>
				)}
			</Modal>
		</div>
	);
};
