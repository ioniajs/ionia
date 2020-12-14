import React, { useState } from 'react';
import { Form, TreeSelect, Select, Checkbox, Button, Pagination, Tooltip } from 'antd';
import { BizPage } from '@ionia/libs';
import {
	QueryFilter,
	ProFormSelect,
	ProFormDateTimeRangePicker,
	ProFormText,
} from '@ant-design/pro-form';
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
const treeData = [
	{
		title: 'Node1',
		value: '0-0',
		children: [
			{
				title: 'Child Node1',
				value: '0-0-1',
			},
			{
				title: 'Child Node2',
				value: '0-0-2',
			},
		],
	},
	{
		title: 'Node2',
		value: '0-1',
	},
];
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
		<BizPage>
			<div className='io-cms-comment-container'>
				<div className='io-cms-content-top-actions__div'>
					<span className='top-actions-mute__span'>禁言列表</span>
					<span className='top-actions-report__span'>举报列表</span>
				</div>
				<div className='io-cms-comment-search__div'>
					<QueryFilter
						span={6}
						defaultCollapsed={false}
						onFinish={async values => {
							console.log(values);
						}}
					>
						<ProFormSelect
							name='sortWay'
							label='排序方式'
							valueEnum={sortWay}
							labelCol={{ span: 5 }}
							wrapperCol={{ span: 16 }}
						/>
						<ProFormSelect
							name='approvalStatus'
							label='审核状态'
							valueEnum={approvalStatus}
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 16 }}
						/>
						<Form.Item
							name='section'
							label='所属栏目'
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 16 }}
						>
							<TreeSelect treeData={treeData} placeholder='请选择' allowClear />
						</Form.Item>
						<ProFormSelect
							name='replyStatus'
							label='回复状态'
							valueEnum={replyStatus}
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 16 }}
						/>
						<ProFormDateTimeRangePicker
							name='commentTime'
							label='评论时间'
							labelCol={{ span: 5 }}
							wrapperCol={{ span: 22 }}
						/>
						<ProFormDateTimeRangePicker
							name='replyTime'
							label='回复时间'
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 22 }}
						/>
						<ProFormText
							name='searchKeyWord'
							fieldProps={{
								addonBefore: selectBefore,
								placeholder: `搜素${inputPlaceHolder[searchTypesValue]}`,
							}}
						/>
					</QueryFilter>
				</div>
				<div className='io-cms-comment-header-between-content__div' />
				<div className='io-cms-comment-content-selectAll__div'>
					<Checkbox>全选</Checkbox>
					<Button
						type='primary'
						className='io-cms-comment-content-selectAll-check__button'
					>
						审核
					</Button>
					<Button className='io-cms-comment-content-selectAll-actions__button'>
						取消审核
					</Button>
					<Button className='io-cms-comment-content-selectAll-actions__button'>
						批量删除
					</Button>
				</div>
				<div className='io-cms-comment-content-items__div'>
					<div className='io-cms-comment-content-item__div'>
						<div className='io-cms-comment-content-item-top__div'>
							<Checkbox />
							<i className='iconfont icon-user1 item-top-user' />
							<a className='item-top-username'>systemsuperAdmin</a>
							<p className='item-top-ip-location-name'>
								【IP: <a>192.168.0.140</a>江西省南昌市】
							</p>
							<p className='item-top-time'>2019-11-29 19:17:52</p>
							<p className='item-top-action-status'>
								<span className='each-action-status'>已置顶</span>
								<span>已审核</span>
							</p>
						</div>
						<div className='io-cms-comment-content-item-middle__div'>
							<div className='item-middle-each-comments-or-replycomment__div'>
								<div className='comments-or-replycomment-detail'>
									<p className='detail-comment-type'>回复内容：</p>
									<i className='iconfont icon-like detail-comment-icon-like' />
									<p className='detail-comment-like-counts'>56</p>
									<p className='detail-comment-reply-user'>回复人：system</p>
									<p className='detail-comment-reply-time'>
										回复时间：2019-11-29 19:17:52
									</p>
								</div>
								<p>
									这里是回复内容这里是回复内容这里是回复内容这里是回复内容这里是回复内容
									这里是回复内容这里是回复内容这里是回复内容这里是回复内容这里是回复内容
									这里是回复内容这里是回复内容这里是回复内容这里是回复内容这里是回复内容
									这里是回复内容这里是回复内容这里是回复内容这里是回复内容，显示全部字数
								</p>
							</div>
							<div className='item-middle-each-comments-or-replycomment__div'>
								<div className='comments-or-replycomment-detail'>
									<p className='detail-comment-type'>评论内容：</p>
									<i className='iconfont icon-like detail-comment-icon-like' />
									<p className='detail-comment-like-counts'>56</p>
								</div>
								<p className='comments-or-replycomment-content-description'>
									这里是回复内容这里是回复内容这里是回复内容这里是回复内容这里是回复内容
									这里是回复内容这里是回复内容这里是回复内容这里是回复内容这里是回复内容
									这里是回复内容这里是回复内容这里是回复内容这里是回复内容这里是回复内容
									这里是回复内容这里是回复内容这里是回复内容这里是回复内容，显示全部字数
								</p>
							</div>
						</div>
						<div className='io-cms-comment-content-item-bottom__div'>
							<p className='item-bottom-section-title'>【栏目】</p>
							<a className='item-bottom-section-content'>
								昌北机场T1航站楼改造力争月底完工昌北所发表的和德国人他
							</a>
							<i className='iconfont icon-message item-bottom-all-messages' />
							<a className='item-bottom-check-all-comments'>查看全部评论</a>
							【全部&nbsp;1（待审核&nbsp;0&nbsp;|&nbsp;已审核&nbsp;1）】
							<div className='item-bottom-function-operation'>
								<Tooltip title='置顶'>
									<i className='iconfont icon-zhiding' />
								</Tooltip>
								<Tooltip title='取消置顶'>
									<i className='iconfont icon-quxiaozhiding' />
								</Tooltip>
								<Tooltip title='取消审核'>
									<i className='iconfont icon-quxiaoshenhe' />
								</Tooltip>
								<Tooltip title='审核'>
									<i className='iconfont icon-shenhe' />
								</Tooltip>
								<Tooltip title='禁止用户评论'>
									<i className='iconfont icon-jinzhiyonghu' />
								</Tooltip>
								<Tooltip title='取消用户评论'>
									<i className='iconfont icon-quxiaoyonghu' />
								</Tooltip>
								<Tooltip title='禁止IP评论'>
									<i className='iconfont icon-jinzhiip' />
								</Tooltip>
								<Tooltip title='取消IP评论'>
									<i className='iconfont icon-quxiaoip' />
								</Tooltip>
								<Tooltip title='回复'>
									<i className='iconfont icon-message' />
								</Tooltip>
								<Tooltip title='编辑回复'>
									<i className='iconfont icon-edit-square' />
								</Tooltip>
								<Tooltip title='删除'>
									<i className='iconfont icon-delete' />
								</Tooltip>
								<Tooltip title='取消举报'>
									<i className='iconfont icon-quxiaojubao' />
								</Tooltip>
							</div>
						</div>
					</div>
				</div>
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
