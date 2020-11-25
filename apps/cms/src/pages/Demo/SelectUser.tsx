import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable } from '@ionia/libs';
import { UserPageVO, userPaging } from '@ionia/libs/src/services';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
	const history = useHistory();
	const actionRef = useRef<ActionType>();
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const columns: ProColumns<UserPageVO>[] = [
		{
			title: '用户名',
			key: 'username',
			dataIndex: 'username',
			width: 150,
			render: (_, row) => {
				return <a onClick={() => history.push(`/user/detail/${row.id}`)}>{row.username}</a>;
			},
		},
		{
			title: '姓名',
			key: 'realName',
			dataIndex: 'realName',
			width: 150,
		},
		{
			title: '所属阵地',
			key: 'org',
			dataIndex: 'org',
			width: 190,
		},
	];
	return (
		<div className='io-cms-user'>
			<BizPage
				showActions={false}
				tips='操作说明的文字 ：设置系统所使用的验证码模板，提供邮件或短信两种方式'
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
						return userPaging({}).then(data => ({ data: data.data.content }));
					}}
				/>
			</BizPage>
		</div>
	);
};
