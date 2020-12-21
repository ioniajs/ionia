import React from 'react';
import { BizPage } from '@ionia/libs';
import { Pagination } from 'antd';
import { CommentItems } from '../Items';
import './index.less';

export default () => {
	return (
		<BizPage
			showActions={true}
			goBackAction={true}
			renderActions={() => <></>}
			breadcrumbs={[{ name: '评论管理' }, { name: '举报列表' }]}
		>
			<div className='io-cms-comment-report-list-container'>
				<CommentItems type='report' cancelButtonText='取消举报' />
			</div>
			<Pagination
				className='io-cms-comment-list-pagination'
				total={85}
				showSizeChanger={true}
				showQuickJumper={true}
				showTotal={total => `共${total}条`}
				defaultPageSize={5}
				onChange={(page, pageSize) => {
					console.log(page, pageSize, 'pagination');
				}}
			/>
		</BizPage>
	);
};
