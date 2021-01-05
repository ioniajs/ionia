import React, { useRef } from 'react';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { BizPage, BizTable, BizTree } from '@ionia/libs';
import { volunteerPaging } from '@ionia/libs/src/services';
import { Button } from 'antd';
import './index.less';

export default () => {
	const actionRef = useRef<ActionType>();
	return (
		<BizPage>
			<div className='io-cms-volunteer-manage'>
				<BizTable
					rowKey='id'
					actionRef={actionRef}
					renderActions={() => (
						<>
							<div className='io-space-item'>
								<Button type='primary'>
									<i className='iconfont icon-plus1' />
									新建
								</Button>
							</div>
							<div className='io-space-item'>
								<Button>删除</Button>
							</div>
						</>
					)}
					inputPlaceholderText='请输入志愿者用户名/姓名/手机号'
					renderSider={() => <BizTree />}
					request={(params: any, sort: any, filter: any) => {
						return volunteerPaging({
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
