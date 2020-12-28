import { ActionType, ProColumns } from '@ant-design/pro-table';
import {
	saveSitepermGroupUser,
	BizTable,
	logger,
	sitepermSitePage,
	SiteAuthUserVO,
} from '@ionia/libs';
import { Button, Checkbox, message } from 'antd';
import React, { useRef, useState } from 'react';
export interface TableListItem {
	key: number;
	name: string;
}

export default ({ siteId }: { siteId: string }) => {
	const params = {
		pageSize: 10,
		current: 1,
		keyWord: '',
	};
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
	const [userList, setUserList] = useState<any[]>([]);
	const columns: ProColumns<SiteAuthUserVO>[] = [
		{
			title: '用户名',
			key: 'userName',
			dataIndex: 'userName',
		},
		{
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
		},
		{
			title: '所属阵地',
			key: 'orgName',
			dataIndex: 'orgName',
		},
		{
			title: '所属角色',
			key: 'roleName',
			dataIndex: 'roleName',
		},
		{
			title: <Checkbox>查看详情</Checkbox>,
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key0.selected == 1}
						disabled={row.datas.key0.optional == 0}
					/>
				);
			},
		},
		{
			title: <Checkbox>新建</Checkbox>,
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key1.selected == 1}
						disabled={row.datas.key1.optional == 0}
					/>
				);
			},
		},
		{
			title: <Checkbox>编辑</Checkbox>,
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key2.selected == 1}
						disabled={row.datas.key2.optional == 0}
					/>
				);
			},
		},
		{
			title: <Checkbox>删除</Checkbox>,
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key3.selected == 1}
						disabled={row.datas.key3.optional == 0}
					/>
				);
			},
		},
		{
			title: <Checkbox>复制</Checkbox>,
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key4.selected == 1}
						disabled={row.datas.key4.optional == 0}
					/>
				);
			},
		},
		{
			title: <Checkbox>权限分配</Checkbox>,
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key5.selected == 1}
						disabled={row.datas.key5.optional == 0}
					/>
				);
			},
		},
		{
			title: <Checkbox>发布静态页</Checkbox>,
			render: (row: any) => {
				return (
					<Checkbox
						checked={row.datas.key6.selected == 1}
						disabled={row.datas.key6.optional == 0}
					/>
				);
			},
		},
	];

	const rowSelection = {
		renderCell: (checked: any, record: any) => {
			return (
				<Checkbox
					checked={record.selected == 1}
					disabled={record.optional == 0}
					onChange={e => {
						e.target.checked ? (record.selected = 1) : (record.selected = 0);
					}}
				/>
			);
		},
		checkStrictly: false,
		/**
		 * 全选
		 */
		onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
			userList.map((item: any) => {
				selected ? (item.selected = 1) : (item.selected = 0);
			});
		},
	};
	return (
		<div className='io-cms-user'>
			<BizTable
				rowKey='userId'
				actionRef={actionRef}
				renderActions={() => (
					<>
						<div className='io-space-item'>
							<Button
								type='primary'
								onClick={async () => {
									let users: any[] = [];
									userList.map((item: any) => {
										users.push({
											selected: item.selected,
											userId: item.userId,
										});
									});
									const { code } = await saveSitepermGroupUser({ users, siteId });
									if (code == 200) {
										message.success('保存成功');
									}
								}}
							>
								保存
							</Button>
						</div>
					</>
				)}
				columns={columns}
				pagination={{
					current: params.current,
					pageSize: params.pageSize,
				}}
				rowSelection={{ ...rowSelection }}
				tableAlertRender={false}
				tableAlertOptionRender={false}
				// onRow={record => {
				// 	return {
				// 		onClick: () => {
				// 			const RowKeys = [...selectedRowKeys];
				// 			if (RowKeys.indexOf(record.userId) >= 0) {
				// 				RowKeys.splice(selectedRowKeys.indexOf(record.userId), 1);
				// 			} else {
				// 				RowKeys.push(record.userId);
				// 			}
				// 			setSelectedRowKeys(RowKeys);
				// 		},
				// 	};
				// }}
				// pagination
				request={async (params: any, sort: any, filter: any) => {
					const { data } = await sitepermSitePage({
						pageNo: params.current,
						pageSize: params.pageSize,
						siteId,
					});
					// setUserList(data.content);
					return {
						data: data.content,
						// success 请返回 true，
						// 不然 table 会停止解析数据，即使有数据
						success: true,
						// 不传会使用 data 的长度，如果是分页一定要传
						total: data.total,
					};
				}}
			/>
		</div>
	);
};
