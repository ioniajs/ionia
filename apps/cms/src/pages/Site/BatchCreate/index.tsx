import React, { useState, MutableRefObject } from 'react';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { Form, TreeSelect, Tooltip, Switch, message, Input } from 'antd';
import {
	BizPage,
	gainSiteTree,
	EditableTable,
	AdminSiteBatchSaveDTO,
	createAdminSiteBatchSave,
} from '@ionia/libs';
import { AdminSiteTreeVO } from '@ionia/libs/src/services/kernel/admin-site.vo';
import { useRequest, useMount } from '@umijs/hooks';
import shortid from 'shortid';
import './index.less';

// 保存
const handleSave = async (fields: AdminSiteBatchSaveDTO) => {
	const res = await createAdminSiteBatchSave(fields);
	return res;
};
export default () => {
	const [saveData, setSaveData] = useState<any>([]);
	const columns = [
		{
			title: (
				<span>
					<span className='io-cms-site-batch-create-columns__span'>*</span>站点名称
				</span>
			),
			key: 'name',
			dataIndex: 'name',
			editable: true,
		},
		{
			title: (
				<span>
					<span className='io-cms-site-batch-create-columns__span'>*</span>站点目录
				</span>
			),
			key: 'dir',
			dataIndex: 'dir',
			editable: true,
		},
		{
			title: (
				<span>
					<span className='io-cms-site-batch-create-columns__span'>*</span>模板路径
				</span>
			),
			key: 'modalPath',
			dataIndex: 'modalPath',
			editable: true,
		},
		{
			title: (
				<span>
					<span className='io-cms-site-batch-create-columns__span'>*</span>域名
				</span>
			),
			key: 'domain',
			dataIndex: 'domain',
			editable: true,
		},
		{
			title: '排序',
			key: 'sortNo',
			dataIndex: 'sortNo',
			editable: true,
			onCellEditing: (ref: MutableRefObject<any>) => {
				ref.current?.focus();
			},
			formItemRender: ({
				title,
				dataIndex,
				editing,
				save,
				toggleEdit,
				children,
				ref,
			}: any) => {
				return editing ? (
					<Form.Item
						style={{ margin: 0 }}
						name={dataIndex}
						rules={[
							{
								required: true,
								message: `${title}是必填的`,
							},
						]}
					>
						<Input type='number' ref={ref} onPressEnter={save} onBlur={save} />
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			render: (_: any, row: any) => {
				return (
					<Switch checkedChildren='开启' unCheckedChildren='关闭' defaultChecked={true} />
				);
			},
			editable: false,
		},
	];
	const [siteTreeData, setSiteTreeData] = useState<AdminSiteTreeVO[]>();
	const { run: runGainSiteTree } = useRequest(gainSiteTree, {
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
			setSiteTreeData(tempSiteTree);
		},
	});
	useMount(() => {
		runGainSiteTree();
	});
	const [form] = Form.useForm();
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '站点管理' }, { name: '批量新建' }]}
			onSave={async () => {
				form.validateFields().then(async values => {
					const param = {
						parentId: values.parentId,
						children: saveData,
					};
					const saveRes = await handleSave(param);
					if (saveRes.code === 200) {
						history.back();
					}
				});
			}}
			layout={{}}
		>
			<div className='io-cms-site-batch-create__div'>
				<Form
					form={form}
					scrollToFirstError
					labelCol={{ span: 2 }}
					wrapperCol={{ span: 12 }}
				>
					<Form.Item
						name='parentId'
						label='上级站点'
						rules={[{ required: true, message: '请选择上级站点' }]}
					>
						<TreeSelect
							treeData={siteTreeData}
							placeholder='请选择上级站点'
							showSearch
							onSearch={e => {
								runGainSiteTree(e);
							}}
							className='io-cms-site-batch-create__treeselect'
							style={{ width: '224px' }}
							dropdownStyle={{ maxHeight: 520, overflow: 'auto', minWidth: 420 }}
						/>
					</Form.Item>
				</Form>
			</div>
			<EditableTable
				operationRender={({ dataSource, setDataSource, changeData, deleteData }) => ({
					title: '操作',
					dataIndex: 'operation',
					render: (_: any, row: any, index: number) => (
						<>
							<Tooltip title='新建同级' placement='bottomRight'>
								<i
									className='iconfont icon-plus1'
									onClick={() => {
										if (!row?.parentKey) {
											const a = [
												...changeData(
													dataSource,
													row.key,
													{
														key: shortid.generate(),
														name: `站点名称同级${shortid.generate()}`,
														dir: '站点目录同级',
														modalPath: '模板路径同级',
														domain: ['192.168.99.55'],
														sortNo: 0,
														status: 1,
													},
													false
												),
											];
											const obj: any = {};
											const temp = dataSource.concat(a);
											const temps = temp.reduce((cur, next: any) => {
												obj[next.key]
													? ''
													: (obj[next.key] = true && cur.push(next));
												return cur;
											}, []);
											setDataSource(temps);
										} else {
											// 子级同级
											setDataSource([
												...changeData(
													dataSource,
													row.parentKey,
													{
														key: shortid.generate(),
														name: '子级同级站点名称',
														dir: '子级同级站点目录',
														modalPath: '子级同级模板路径',
														domain: ['192.168.99.88'],
														sortNo: 0,
														status: 1,
													},
													true
												),
											]);
										}
									}}
								/>
							</Tooltip>
							&nbsp;
							<Tooltip title='新建下级' placement='bottomRight'>
								<i
									className='iconfont icon-plus1'
									onClick={() => {
										setDataSource([
											...changeData(
												dataSource,
												row.key,
												{
													key: shortid.generate(),
													name: '站点名称1',
													dir: '站点目录1',
													modalPath: '模板路径1',
													domain: ['192.168.99.88'],
													sortNo: 0,
													status: 1,
													parentKey: row.key,
												},
												true
											),
										]);
									}}
								/>
							</Tooltip>
							&nbsp;
							<Tooltip title='删除' placement='bottomRight'>
								<i
									className='iconfont icon-delete'
									onClick={() => {
										if (dataSource.length === 1) {
											message.error('无法删除，请最少填写一个站点数据');
											return;
										}
										setDataSource([...deleteData(dataSource, row.key)]);
									}}
								/>
							</Tooltip>
							&nbsp;
						</>
					),
				})}
				columns={columns}
				dataSource={[
					{
						key: '0',
						name: '站点名称',
						dir: '站点目录',
						modalPath: '模板路径',
						domain: ['11111'],
						sortNo: 0,
						status: 1,
					},
				]}
				onChange={data => setSaveData(data)}
			/>
		</BizPage>
	);
};
