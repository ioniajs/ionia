import React, { useRef } from 'react';
import { Checkbox, Tooltip, Form, Modal, Input, Button } from 'antd';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { useHistory } from 'react-router-dom';
import MoreInformers from '../MoreInformers';
import './index.less';

interface ItemProps {
	type?: string;
	cancelButtonText?: string;
}

export const CommentItems = ({ type, cancelButtonText = '取消审核' }: ItemProps) => {
	const history = useHistory();
	const [replyForm] = Form.useForm();
	const ref = useRef<BizModalFormRef>();
	return (
		<>
			<div className='io-cms-comment-content-selectAll__div'>
				<Checkbox>全选</Checkbox>
				<Button type='primary' className='io-cms-comment-content-selectAll-check__button'>
					审核
				</Button>
				<Button className='io-cms-comment-content-selectAll-actions__button'>
					{cancelButtonText}
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
						<a
							className='item-top-username'
							onClick={() => history.push('/content-operation/comment/single-user')}
						>
							systemsuperAdmin
						</a>
						<p className='item-top-ip-location-name'>
							【IP:{' '}
							<a
								onClick={() => {
									history.push('/content-operation/comment/single-ip');
								}}
							>
								192.168.0.140
							</a>
							&nbsp; 江西省南昌市】
						</p>
						<p className='item-top-time'>2019-11-29 19:17:52</p>
						<p className='item-top-action-status'>
							<span className='each-action-status'>已置顶</span>
							<span>已审核</span>
						</p>
						{/* 举报人列表举报人相关信息 */}
						{type === 'report' && (
							<p className='item-top-report-detail'>
								<span className='report-detail-informer'>举报人：匿名用户</span>
								<span>举报时间：2019-11-29 19:17:52 </span>
							</p>
						)}
						{/* 更多举报人 */}
						{type === 'report' && (
							<p className='item-top-more-informers'>
								<BizModalForm
									ref={ref}
									title='举报人'
									width={538}
									triggerRender={() => (
										<i
											className='iconfont icon-ellipsis'
											onClick={() => {
												ref.current?.open();
											}}
										/>
									)}
									submitterRender={() => (
										<Button
											type='primary'
											onClick={() => {
												ref.current?.close();
											}}
										>
											关闭
										</Button>
									)}
								>
									<MoreInformers />
								</BizModalForm>
								{/* <i className='iconfont icon-ellipsis' /> */}
							</p>
						)}
					</div>
					<div className='io-cms-comment-content-item-middle__div'>
						<div className='item-middle-each-comments-or-replycomment__div'>
							<div className='comments-or-replycomment-detail'>
								<p className='detail-comment-type'>回复内容：</p>
								<Tooltip title='点赞数'>
									<i className='iconfont icon-like detail-comment-icon-like' />
								</Tooltip>
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
								<Tooltip title='点赞数'>
									<i className='iconfont icon-like detail-comment-icon-like' />
								</Tooltip>
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
						<a
							className='item-bottom-check-all-comments'
							onClick={() => {
								history.push('/content-operation/comment/single-content');
							}}
						>
							查看全部评论
						</a>
						【全部&nbsp;1（待审核&nbsp;0&nbsp;|&nbsp;已审核&nbsp;1）】
						<div className='item-bottom-function-operation'>
							<Tooltip title='置顶'>
								<i className='iconfont icon-zhiding' />
							</Tooltip>
							<Tooltip title='取消置顶'>
								<i className='iconfont icon-quxiaozhiding' />
							</Tooltip>
							<Tooltip title='取消审核'>
								<i
									className='iconfont icon-quxiaoshenhe'
									onClick={() => {
										Modal.confirm({
											title: '你确定取消评论的审核状态吗？',
											content: '取消审核后不会显示在网站上。',
											onOk: () => {
												console.log('取消审核');
											},
										});
									}}
								/>
							</Tooltip>
							<Tooltip title='审核'>
								<i
									className='iconfont icon-shenhe'
									onClick={() => {
										Modal.confirm({
											title: '你确定审核选中评论吗？',
											content: '审核后将显示在网站上。',
											okText: '审核',
											onOk: () => {
												console.log('审核');
											},
										});
									}}
								/>
							</Tooltip>
							<Tooltip title='禁止用户评论'>
								<i
									className='iconfont icon-jinzhiyonghu'
									onClick={() => {
										Modal.confirm({
											title: '你确定禁止用户评论吗？',
											content: '禁止后该用户无法再提交评论。',
											okText: '禁止',
											onOk: () => {
												console.log('禁止用户评论');
											},
										});
									}}
								/>
							</Tooltip>
							<Tooltip title='取消用户评论'>
								<i className='iconfont icon-quxiaoyonghu' />
							</Tooltip>
							<Tooltip title='禁止IP评论'>
								<i
									className='iconfont icon-jinzhiip'
									onClick={() => {
										Modal.confirm({
											title: '你确定禁止ip评论吗？',
											content: '禁止后该ip无法再提交评论。',
											okText: '禁止',
											onOk: () => {
												console.log('禁止IP评论');
											},
										});
									}}
								/>
							</Tooltip>
							<Tooltip title='取消IP评论'>
								<i className='iconfont icon-quxiaoip' />
							</Tooltip>
							<Tooltip title='回复'>
								<i
									className='iconfont icon-message'
									onClick={() => {
										Modal.confirm({
											title: '回复',
											icon: '',
											okText: '保存',
											onOk: () => {
												const replyContent = replyForm.getFieldValue(
													'replyContent'
												);
												console.log(replyContent, '回复保存');
											},
											closable: true,
											className: 'io-comment-reply__modal',
											content: (
												<Form form={replyForm}>
													<Form.Item
														name='replyContent'
														label='回复内容'
														className='io-comment-reply__form-item'
														labelCol={{ span: 5 }}
														wrapperCol={{ span: 17 }}
													>
														<Input.TextArea
															maxLength={500}
															placeholder='请输入回复内容'
															showCount
															className='io-comment-reply-modal__input-textarea'
														/>
													</Form.Item>
												</Form>
											),
											width: 550,
										});
									}}
								/>
							</Tooltip>
							<Tooltip title='编辑回复'>
								<i className='iconfont icon-edit-square' />
							</Tooltip>
							<Tooltip title='取消举报'>
								<i className='iconfont icon-quxiaojubao' />
							</Tooltip>
							<Tooltip title='删除'>
								<i
									className='iconfont icon-delete'
									onClick={() => {
										Modal.confirm({
											title: '你确定删除选中评论吗？',
											content: '删除后无法恢复，请谨慎操作。',
											okText: '删除',
											onOk: () => {
												console.log('删除');
											},
										});
									}}
								/>
							</Tooltip>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
