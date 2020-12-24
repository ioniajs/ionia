import React, { useState } from 'react';
import { BizPage } from '@ionia/libs';
import { Select, Pagination } from 'antd';
import {
	QueryFilter,
	ProFormSelect,
	ProFormDateTimeRangePicker,
	ProFormText,
} from '@ant-design/pro-form';
import { CommentItems } from '../Component/Items';
import { Search } from '../Component/Search';
import './index.less';

const sortWay = {
	0: '默认排序',
	1: '评论时间降序',
	2: '评论时间升序',
	3: '点赞数降序',
	4: '点赞数升序',
};
const approvalStatus = {
	0: '全部',
	1: '未审核',
	2: '已审核',
};
const replyStatus = {
	0: '全部',
	1: '已回复',
	2: '未回复',
};

// 搜索类型
const searchTypes = [
	{
		label: '评论内容',
		value: 1,
	},
	{
		label: '评论人',
		value: 2,
	},
	{
		label: '评论IP',
		value: 3,
	},
	{
		label: '回复内容',
		value: 4,
	},
	{
		label: '文章标题',
		value: 5,
	},
];
const inputPlaceHolder = ['', '评论内容', '评论人', '评论IP', '回复内容', '文章标题'];

export default () => {
	const [collapsed, SetCollapsed] = useState<boolean>(true); // 查询条件面板是否折叠
	const [searchTypesValue, setSearchTypes] = useState<number>(1);
	const selectBefore = (
		<Select
			defaultValue={1}
			className='select-before'
			options={searchTypes}
			onChange={e => {
				setSearchTypes(Number(e));
			}}
		/>
	);
	return (
		<BizPage
			showActions={true}
			goBackAction={true}
			renderActions={() => <></>}
			breadcrumbs={[{ name: '评论管理' }, { name: '内容全部评论' }]}
		>
			<div className='io-cms-comment-single-content-container'>
				<div className='io-cms-comment-single-content-setion__div'>
					<p>内容：【栏目】</p>
					<a>昌北机场T1航站楼改造力争月底完工昌北的第三个对手</a>
					<p>【&nbsp;全部&nbsp;1（待审核&nbsp;0&nbsp;|&nbsp;已审核&nbsp;1）】</p>
				</div>
				<Search type='singleContent' />
				{/* <div className='io-cms-comment-single-content-search__div'>
					<QueryFilter
						span={6}
						defaultCollapsed={true}
						onFinish={async values => {
							console.log(values);
						}}
						onCollapse={collapsed => SetCollapsed(collapsed)}
					>
						<ProFormSelect name='sortWay' label='排序方式' valueEnum={sortWay} />
						<ProFormSelect
							name='approvalStatus'
							label='审核状态'
							valueEnum={approvalStatus}
						/>
						{!!collapsed && (
							<ProFormText
								name='keyWord'
								placeholder='评论人/IP/评论内容/回复内容/文章标题'
							/>
						)}
						<ProFormSelect
							name='replyStatus'
							label='回复状态'
							valueEnum={replyStatus}
						/>
						<ProFormText
							name='searchKeyWord'
							fieldProps={{
								addonBefore: selectBefore,
								placeholder: `搜素${inputPlaceHolder[searchTypesValue]}`,
							}}
						/>
						<ProFormDateTimeRangePicker
							name='commentTime'
							label='评论时间'
							colSize={1.1}
						/>
						<ProFormDateTimeRangePicker
							name='replyTime'
							label='回复时间'
							colSize={1.1}
						/>
					</QueryFilter>
				</div> */}
				<div className='io-cms-comment-single-content-header-between-content__div' />
				{/* <div className='io-cms-comment-single-content-items__div'> */}
				<CommentItems />
				{/* </div> */}
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
