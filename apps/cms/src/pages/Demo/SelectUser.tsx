import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable, deleteUser } from '@ionia/libs';
import { modUserStatus, UserPageVO, userPaging } from '@ionia/libs/src/services';
import { IdsDTO } from '@ionia/libs/src/services/reuse.dto';
import { message, Modal, Switch } from 'antd';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const userRemove = async (ids: IdsDTO) => {
	const removeRes = await deleteUser(ids);
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
