import React, { useState } from 'react';
import { Select, Checkbox, Form, Dropdown, Menu } from 'antd';
import {
	QueryFilter,
	ProFormSelect,
	ProFormCheckbox,
	ProFormText,
	ProFormDateTimeRangePicker,
} from '@ant-design/pro-form';
import ProList from '@ant-design/pro-list';
import './index.less';

// 排序方式
const sortWay = {
	0: '默认排序',
	1: '创建时间降序',
	2: '创建时间升序',
	3: '发布时间降序',
	4: '发布时间升序',
	5: '总阅读量降序',
	6: '总阅读量升序',
	7: '总阅读人数降序',
	8: '总阅读人数升序',
	9: '总评论数降序',
	10: '总评论数升序',
	11: '总点赞数降序',
	12: '总点赞数升序',
};
// 内容状态
const contentStatus = {
	0: '全部',
	1: '已发布',
	2: '初稿',
	3: '已下线',
};
// 内容类型
const contentType = {
	0: '全部',
	1: '置顶',
	2: '头条',
	3: '热点',
	4: '推荐',
};
// 内容模型
const contentModal = {
	1: '新闻',
	2: '图库',
	3: '视频',
};
// 创建方式
const createWay = {
	0: '全部',
	1: '新建',
	2: '复制',
	3: '站群推送',
};
// 搜索类型
const searchTypes = [
	{
		label: '标题',
		value: 1,
	},
	{
		label: '作者',
		value: 2,
	},
	{
		label: '来源',
		value: 3,
	},
	{
		label: '描述',
		value: 4,
	},
	{
		label: '创建人',
		value: 5,
	},
];

const inputPlaceHolder = ['', '标题', '作者', '来源', '描述', '创建人'];
// 选择列改变内容状态
const changeContentStatus = [
	{ value: 1, label: '发布' },
	{ value: 2, label: '存为初稿' },
	{ value: 3, label: '下线' },
];
// 选择列的其他操作
const changeOtherActions = [
	{ value: 1, label: '删除' },
	{ value: 2, label: '移动' },
	{ value: 3, label: '排序' },
	{ value: 4, label: '复制' },
	{ value: 5, label: '归档' },
	{ value: 6, label: '站群推送' },
];
// 选择列改变内容状态
const changeContentTypes = [
	{ value: 1, label: '设置置顶' },
	{ value: 2, label: '取消置顶' },
	{ value: 3, label: '设置热点' },
	{ value: 4, label: '取消热点' },
	{ value: 5, label: '设置头条' },
	{ value: 6, label: '取消头条' },
	{ value: 7, label: '设置推荐' },
	{ value: 8, label: '取消推荐' },
];

const dataSource = [
	{
		title: '【栏目】昌北机场T1航站楼改造力争月底完工昌北机场T1航站楼改造力争月底完工昌北机场',
		user: 'HHHHH',
	},
	{
		title: '【栏目】昌北机场T1航站楼改造力争月底完工昌北机场T1航站楼改造力争月底完工昌北机场',
		user: 'MMMMM',
	},
];

export const List = () => {
	const [searchTypesValue, setSearchTypes] = useState<number>(1);
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
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
	// 右下角功能区，hover下拉
	const menu = (
		<Menu>
			<Menu.Item>
				<a>归档</a>
			</Menu.Item>
			<Menu.Item>
				<a>置顶</a>
			</Menu.Item>
			<Menu.Item>
				{' '}
				<a>取消热点</a>
			</Menu.Item>
			<Menu.Item>
				<a>取消头条</a>
			</Menu.Item>
			<Menu.Item>
				<a>取消推荐</a>
			</Menu.Item>
			<Menu.Item>
				<a>取消推送</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<div>
			<div className='io-cms-content-list-search'>
				<QueryFilter
					span={6}
					onFinish={async values => {
						console.log(values);
					}}
					defaultCollapsed={true}
				>
					<ProFormSelect
						name='sortWay'
						label='排序方式'
						valueEnum={sortWay}
						style={{ width: '240px' }}
						// colSize={0.75}
					/>
					<ProFormSelect
						name='contentStatus'
						label='内容状态'
						valueEnum={contentStatus}
						// colSize={0.75}
					/>
					<ProFormCheckbox.Group
						name='showSectionContent'
						label=''
						options={['显示子栏目内容']}
						layout='vertical'
					/>
					<ProFormSelect
						name='contentType'
						label='内容类型'
						valueEnum={contentType}
						// colSize={0.75}
					/>
					<ProFormSelect
						name='contentModal'
						label='内容模型'
						valueEnum={contentModal}
						// colSize={0.75}
					/>
					<ProFormDateTimeRangePicker
						name='create'
						label='创建时间'
						// colSize={1}
					/>
					<ProFormDateTimeRangePicker
						name='publish'
						label='发布时间'
						// colSize={1}
					/>
					<ProFormSelect
						name='createWay'
						label='创建方式'
						valueEnum={createWay}
						// colSize={0.75}
					/>
					<ProFormCheckbox.Group
						name='showMineCreate'
						layout='vertical'
						label=''
						options={['我创建的']}
					/>
					<ProFormText
						name='contentTittle'
						placeholder='搜索内容标题'
						// colSize={0.75}
					/>
					<ProFormText
						name='searchKeyWord'
						fieldProps={{
							addonBefore: selectBefore,
							placeholder: `搜素内容${inputPlaceHolder[searchTypesValue]}`,
						}}
						// colSize={0.75}
					/>
				</QueryFilter>
				<div className='io-cms-content-list-search-bottom' />
			</div>

			<ProList
				rowKey='user'
				className='io-cms-content-pro-list-container'
				dataSource={dataSource}
				headerTitle={
					<Form className='io-cms-content-pro-list-header'>
						<Form.Item label='' name='' style={{ display: 'inline-block' }}>
							<Checkbox>全选</Checkbox>
						</Form.Item>
						<Form.Item
							label=''
							name='changeContentStatus'
							style={{ display: 'inline-block', marginLeft: '15px' }}
						>
							<Select
								options={changeContentStatus}
								placeholder='改变内容状态'
								style={{ width: '224px' }}
							/>
						</Form.Item>
						<Form.Item
							label=''
							name='otherOperation'
							style={{ display: 'inline-block', marginLeft: '24px' }}
						>
							<Select
								options={changeOtherActions}
								placeholder='其他操作'
								style={{ width: '224px' }}
							/>
						</Form.Item>
						<Form.Item
							label=''
							name='changeContentTypes'
							style={{ display: 'inline-block', marginLeft: '24px' }}
						>
							<Select
								options={changeContentTypes}
								placeholder='改变内容类型'
								listHeight={200}
								style={{ width: '224px' }}
							/>
						</Form.Item>
					</Form>
				}
				metas={{
					content: {
						render: () => (
							<div className='io-cms-content-list-item-content__div'>
								<div className='io-cms-content-list-item-content-top__div'>
									<p className='io-cms-content-list-item-content-top-section__span'>
										【栏目】昌北机场T1航站楼改造力争月底完工昌北机场T1航站楼改造力争月底完工昌北机场
									</p>
									<p className='io-cms-content-list-item-content-top-actions_span'>
										<i className='iconfont icon-vertical-align-top ' />
										<i className='iconfont icon-fire item-content-top-action' />
										<i className='iconfont icon-toutiao item-content-top-action' />
										<i className='iconfont icon-like item-content-top-action' />
										<i className='iconfont icon-ellipsis item-content-top-action' />
									</p>
									<p className='io-cms-content-list-item-content-top-time__span'>
										2019-11-29 19:17:52
									</p>
								</div>
								<div className='io-cms-content-list-item-content-middle__div'>
									<div className='io-cms-content-list-item-content-middle-desc__div'>
										<span className='io-cms-content-list-content-desc__div'>
											<span className='io-cms-content-list-content-desc-div-text__span'>
												已发布
											</span>
										</span>
										<span className='io-cms-content-list-content-desc-count'>
											<span className='count-icon__span'>
												<i className='iconfont icon-eye1' />
												&nbsp;<span>97</span>
											</span>
											<span className='count-icon__span'>
												<i className='iconfont icon-user1' />
												&nbsp;<span>82</span>
											</span>
											<span className='count-icon__span'>
												<i className='iconfont icon-message' />
												&nbsp;<span>15</span>
											</span>
											<span className='count-icon__span'>
												<i className='iconfont icon-like' />
												&nbsp;<span>36</span>
											</span>
										</span>
									</div>
									<div className='io-cms-content-list-item-content-middle-actions'>
										<a className='content-middle-action'>下载</a>
										<a className='content-middle-action'>预览</a>
										<a className='content-middle-action'>浏览</a>
										<a className='content-middle-action'>删除</a>
										<a className='content-middle-action'>复制</a>
										<a className='content-middle-action'>移动</a>
										<a className='content-middle-action'>排序</a>
										<Dropdown overlay={menu}>
											<i className='iconfont icon-ellipsis content-middle-action' />
										</Dropdown>
									</div>
								</div>
							</div>
						),
					},
				}}
				rowSelection={{
					selectedRowKeys,
					onChange: (selectedRowKeys: any) => {
						setSelectedRowKeys(selectedRowKeys as number[]);
					},
				}}
				pagination={{
					total: 85,
					showSizeChanger: true,
					showQuickJumper: true,
					showTotal: total => `共${total}条`,
					defaultPageSize: 5,
				}}
			/>
		</div>
	);
};
