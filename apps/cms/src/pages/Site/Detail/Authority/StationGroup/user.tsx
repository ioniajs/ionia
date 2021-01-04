import { ActionType, ProColumns } from '@ant-design/pro-table';
import {
	saveSitepermGroupUser,
	BizTable,
	logger,
	sitepermGroupPage,
	SitePermUserVO,
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
	const columns: ProColumns<SitePermUserVO>[] = [
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
				onRow={(record: any) => {
					return {
						onClick: () => {
							const RowKeys = [...selectedRowKeys];
							if (RowKeys.indexOf(record.userId) >= 0) {
								RowKeys.splice(selectedRowKeys.indexOf(record.userId), 1);
							} else {
								RowKeys.push(record.userId);
							}
							setSelectedRowKeys(RowKeys);
						},
					};
				}}
				// pagination
				request={async (params: any, sort: any, filter: any) => {
					const { data } = await sitepermGroupPage({
						pageNo: params.current,
						pageSize: params.pageSize,
						siteId,
					});
					setUserList(data.content);
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
