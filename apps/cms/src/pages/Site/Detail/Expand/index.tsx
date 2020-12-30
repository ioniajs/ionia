import { InfoCircleOutlined } from '@ant-design/icons';
import {
	BizPage,
	BizSection,
	ColorsPicker,
	ImageUpload,
	saveUpdateSite,
	siteConfigDetail,
	Watermark,
} from '@ionia/libs';
import { useMount, useRequest } from '@umijs/hooks';
import {
	Anchor,
	Button,
	Checkbox,
	Form,
	Input,
	message,
	Radio,
	Select,
	Switch,
	Tooltip,
} from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

interface ExpandChildrenProps {
	id?: string;
}

const { Option } = Select;
const { Link } = Anchor;
const watermarkWordSize = [
	{
		label: '12',
		value: '12',
	},
	{
		label: '14',
		value: '14',
	},
	{
		label: '16',
		value: '16',
	},
	{
		label: '18',
		value: '18',
	},
	{
		label: '20',
		value: '20',
	},
	{
		label: '24',
		value: '24',
	},
	{
		label: '30',
		value: '30',
	},
];

// const handleSaveUpdateSite = async (fileds: SiteCfgDTO) => {
const handleSaveUpdateSite = async (fileds: any) => {
	const updateRes = await saveUpdateSite(fileds);
	if (updateRes.code === 200) {
		message.success('修改成功');
	} else {
		message.error('修改失败');
	}
	return updateRes;
};

export const ExpandChildren = ({ id }: ExpandChildrenProps) => {
	const [expandForm] = Form.useForm();
	const [contentSignValue, setContentSignValue] = useState<boolean>(true); // 新内容标记
	const [contentSignTypeValue, setContentSignTypeValue] = useState<string>('1'); // 新内容标记方式
	const [watermarkTypeValue, setWatermarkTypeValue] = useState<string>('1'); // 水印类型
	const [contentSignColorValue, setContentSignColorValue] = useState<string>(''); // 内容标记文字颜色
	const [waterMarkColorValue, setWaterMarkColorValue] = useState<string>(''); // 水印文字颜色
	const [contentDefinitionType, setContentDefinitionType] = useState<string>('2'); // 新内容定义类型
	const [staticMemoryValue, setStaticMemory] = useState<string>('1'); // 静态文件存储服务器
	const { data, run } = useRequest(siteConfigDetail, {
		manual: true,
	});

	useMount(() => {
		if (id !== undefined) {
			run(id);
		}
	});
	useEffect(() => {
		if (data?.data) {
			expandForm.setFieldsValue({
				...data?.data,
				staticContent: Number(data?.data?.staticContent),
			});
			setContentSignValue(!!data?.data.contentSign);
			setContentSignTypeValue(data?.data.contentSignType);
			setWatermarkTypeValue(data?.data.watermarkType);
		}
	}, [data?.data]);
	return (
		<>
			<div className='io-site-detail-expandchildren__div'>
				<BizPage
					showActions
					renderActions={() => (
						<Button
							type='primary'
							onClick={() => {
								expandForm.validateFields().then(async values => {
									console.log(values, 'vavavavav');
									const param = {
										...values,
										contentLikeLogin: values.contentLikeLogin ? '1' : '0',
										channelNameRep: values.channelNameRep ? '1' : '0',
										commentAudit: values.commentAudit ? '1' : '0',
										commentLink: values.commentLink ? '1' : '0',
										smtpSsl: values.smtpSsl ? '1' : '0',
										staticServer: values.staticServer ? '1' : '0',
										staticContent: values.staticContent ? '1' : '0',
										staticChannel: values.staticChannel ? '1' : '0',
										siteLogin: values.siteLogin ? '1' : '0',
										siteGray: values.siteGray ? '1' : '0',
										siteRelativePath: values.siteRelativePath ? '1' : '0',
										sitePush: values.sitePush ? '1' : '0',
										watermarkLocation: values.watermarkLocation.toString(),
										contentSignColor: contentSignColorValue,
										watermarkColor: waterMarkColorValue,
										siteId: id,
										contentDefinitionType,
									};
									const saveUpdateRes = await handleSaveUpdateSite(param);
									if (saveUpdateRes.code === 200) {
										id !== undefined && run(id);
									}
								});
							}}
						>
							保存
						</Button>
					)}
					layout={{
						labelCol: { span: 11 },
						wrapperCol: { span: 13 },
					}}
				>
					<Form
						form={expandForm}
						scrollToFirstError
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 12 }}
					>
						<BizSection title='内容配置' id='content'>
							<Form.Item
								name='contentTitleCopy'
								label='内容标题重复设置'
								initialValue={'1'}
							>
								<Select>
									<Option value='1'>允许重复</Option>
									<Option value='2'>不允许重复</Option>
									<Option value='3'>同一栏目内不允许重复</Option>
								</Select>
							</Form.Item>
							<Form.Item
								name='contentNotUpdate'
								label={
									<span>
										已发布内容禁止编辑&nbsp;
										<Tooltip title='开启后处于发布状态下的内容不可编辑'>
											<InfoCircleOutlined className='io-site-detail-expand-info__icon' />
										</Tooltip>
									</span>
								}
								initialValue={'0'}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.contentNotUpdate)}
								/>
							</Form.Item>
							<Form.Item
								name='contentSign'
								label={
									<span>
										新内容标记&nbsp;
										<Tooltip title='开启后新发布的内容将显示标记'>
											<InfoCircleOutlined className='io-site-detail-expand-info__icon' />
										</Tooltip>
									</span>
								}
								initialValue={'0'}
							>
								{/* <Radio.Group
									onChange={e => {
										setContentSignValue(e.target.value);
									}}
								>
									<Radio value='1'>开启</Radio>
									<Radio value='0'>不开启</Radio>
								</Radio.Group> */}
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.contentSign)}
									onChange={e => {
										setContentSignValue(e);
									}}
								/>
							</Form.Item>
							{!!contentSignValue && (
								<>
									<Form.Item
										name='contentDefinition'
										label={
											<span>
												新内容定义&nbsp;
												<Tooltip title='若设置为1小时，表示发布时间在前1小时范围内的内容都是新内容'>
													<InfoCircleOutlined className='io-site-detail-expand-info__icon' />
												</Tooltip>
											</span>
										}
										rules={[
											{
												required: contentSignValue,
												message: '请输入新内容定义时间',
											},
										]}
									>
										<Input
											addonAfter={
												// <Form.Item
												// 	name='contentDefinitionType'
												// 	label=''
												// 	colon={false}
												// 	initialValue={'2'}
												// >
												<Select className='select-after' defaultValue={contentDefinitionType} onSelect={(e) => { setContentDefinitionType(e) }}>
													<Option value='1'>分钟</Option>
													<Option value='2'>小时</Option>
													<Option value='3'>天</Option>
												</Select>
												// </Form.Item>
											}
											min={0}
										/>
									</Form.Item>
									<Form.Item
										name='contentSignType'
										label='新内容标记方式'
										initialValue={'1'}
									>
										<Radio.Group
											onChange={e => setContentSignTypeValue(e.target.value)}
										>
											<Radio value='1'>图片</Radio>
											<Radio value='2'>文字</Radio>
										</Radio.Group>
									</Form.Item>
									{contentSignTypeValue === '1' && (
										<Form.Item
											name='contentSignPic'
											label='标记图片'
											rules={[{ required: true, message: '请上传标记图片' }]}
										>
											<ImageUpload />
										</Form.Item>
									)}
									{contentSignTypeValue === '2' && (
										<>
											<Form.Item
												name='contentSignWord'
												label='标记文字'
												rules={[
													{
														required: true,
														message: '请输入新内容标记文字',
													},
												]}
											>
												<Input />
											</Form.Item>
											<Form.Item
												name='contentSignColor'
												label='文字颜色'
												rules={[
													{
														required: true,
														message: '请选择新内容文字颜色',
													},
												]}
											>
												<ColorsPicker
													color={contentSignColorValue}
													onChange={colors => {
														setContentSignColorValue(colors.color);
													}}
												/>
											</Form.Item>
										</>
									)}
								</>
							)}
							<Form.Item
								name='contentLikeLogin'
								label='点赞需要登录'
								initialValue={'0'}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.contentLikeLogin)}
								/>
							</Form.Item>
						</BizSection>
						<BizSection title='栏目配置' id='channel'>
							<Form.Item
								name='channelNameRep'
								label='栏目名称允许重复'
								initialValue={'0'}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.channelNameRep)}
								/>
							</Form.Item>
							<Form.Item
								name='channelPage'
								label='列表每页默认显示内容数'
								initialValue={'20'}
							>
								<Input />
							</Form.Item>
						</BizSection>
						<BizSection title='评论配置' id='comment'>
							<Form.Item name='commentSet' label='评论设置' initialValue={'2'}>
								<Select>
									<Option value='1'>允许游客评论</Option>
									<Option value='2'>登录后才可评论</Option>
									<Option value='3'>不允许评论</Option>
								</Select>
							</Form.Item>
							<Form.Item
								name='commentCycle'
								label={
									<span>
										评论周期（秒）&nbsp;
										<Tooltip title='设置多长时间提交一次评论，留空不限制'>
											<InfoCircleOutlined className='io-site-detail-expand-info__icon' />
										</Tooltip>
									</span>
								}
								initialValue={'20'}
							>
								<Input />
							</Form.Item>
							<Form.Item name='commentAudit' label='评论需要审核' initialValue={1}>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.commentAudit)}
								/>
							</Form.Item>
							<Form.Item name='commentLink' label='允许输入链接' initialValue={0}>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.commentLink)}
								/>
							</Form.Item>
						</BizSection>
						<BizSection title='邮件服务配置' id='mail-service'>
							<Form.Item
								name='smtpServer'
								label='SMTP服务器'
								rules={[{ required: true, message: '请输入SMTP服务器' }]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name='smtpSend'
								label='发件账号'
								rules={[{ required: true, message: '请输入发件账号' }]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name='smtpCryp'
								label='邮箱密码'
								rules={[{ required: true, message: '请输入邮箱密码' }]}
							>
								<Input />
							</Form.Item>
							<Form.Item name='smtpSsl' label='使用SSL协议' initialValue={1}>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.smtpSsl)}
								/>
							</Form.Item>
							<Form.Item
								label={<span style={{ display: 'none' }}>邮箱校验</span>}
								colon={false}
							>
								<Button>邮箱校验</Button>
							</Form.Item>
						</BizSection>
						<BizSection title='水印配置' id='water-mark'>
							<Form.Item name='watermarkType' label='水印类型' initialValue={'1'}>
								<Radio.Group
									onChange={e => {
										setWatermarkTypeValue(e.target.value);
									}}
								>
									<Radio value='1'>图片</Radio>
									<Radio value='2'>文字</Radio>
								</Radio.Group>
							</Form.Item>
							{watermarkTypeValue === '1' && (
								<Form.Item
									name='watermarkPic'
									label='水印图片'
									rules={[{ required: true, message: '请上传水印图片' }]}
								>
									<ImageUpload />
								</Form.Item>
							)}
							{watermarkTypeValue === '2' && (
								<>
									<Form.Item
										name='watermarkWord'
										label='水印文字'
										rules={[{ required: true, message: '请输入水印文字' }]}
									>
										<Input />
									</Form.Item>
									<Form.Item
										name='watermarkWordSize'
										label='文字大小(px)'
										rules={[{ required: true, message: '请选择文字大小' }]}
									>
										<Select options={watermarkWordSize} />
									</Form.Item>
									<Form.Item
										name='watermarkColor'
										label='文字颜色'
										rules={[{ required: true, message: '请选择文字颜色' }]}
									>
										<ColorsPicker
											color={waterMarkColorValue}
											onChange={colors =>
												setWaterMarkColorValue(colors.color)
											}
										/>
									</Form.Item>
								</>
							)}
							<Form.Item
								name='watermarkLocation'
								label='水印位置'
								rules={[{ required: true, message: '请指定水印位置' }]}
							>
								<Watermark />
							</Form.Item>
						</BizSection>
						<BizSection title='静态化服务配置' id='statics'>
							<Form.Item
								name='staticServer'
								label={
									<span>
										静态化服务&nbsp;
										<Tooltip title='此处开启静态化服务后在站点和栏目处才能发布静态页'>
											<InfoCircleOutlined className='io-site-detail-expand-info__icon' />
										</Tooltip>
									</span>
								}
								initialValue={1}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.staticServer)}
								/>
							</Form.Item>
							<Form.Item
								name='staticPlatform'
								label='静态页发布平台'
								rules={[{ required: true, message: '请选择静态化发布平台' }]}
								initialValue={['1', '2']}
							>
								<Checkbox.Group>
									<Checkbox value='1'>PC端</Checkbox>
									<Checkbox value='2'>手机wap端</Checkbox>
								</Checkbox.Group>
							</Form.Item>
							<Form.Item
								name='staticMemory'
								label='静态文件存储服务器'
								initialValue={'1'}
							>
								<Radio.Group onChange={(e) => { setStaticMemory(e.target.value) }}>
									<Radio value='1'>本地服务器</Radio>
									<Radio value='2'>FTP</Radio>
									<Radio value='3'>OSS云存储</Radio>
								</Radio.Group>
							</Form.Item>
							{staticMemoryValue === '2' && <Form.Item name='staticFtp' label='选择FTP'>
								<Select />
							</Form.Item>}
							{staticMemoryValue === '3' && <Form.Item name='staticOss' label='选择OSS'>
								<Select />
							</Form.Item>}
							<Form.Item
								name='staticContent'
								label='发布内容时自动生成首页静态页'
								valuePropName='checked'
								initialValue={true}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
								// defaultChecked={Number(data?.data.staticContent)}
								/>
							</Form.Item>
							<Form.Item
								name='staticChannel'
								label='发布内容时自动生成栏目静态页'
								initialValue={1}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.staticChannel)}
								/>
							</Form.Item>
							<Form.Item
								name='staticSize'
								label={
									<span>
										生成静态内容列表页数&nbsp;
										<Tooltip
											title='若栏目页中提取了内容分页列表，会按照此项配置
                                        决定自动生成静态列表的页数，此项配置仅作用于
                                        自动生成静态页，手动生成静态栏目页时会生成所
                                        有分页页数。'
										>
											<InfoCircleOutlined className='io-site-detail-expand-info__icon' />
										</Tooltip>
									</span>
								}
								initialValue={'10'}
							>
								<Input />
							</Form.Item>
						</BizSection>
						<BizSection title='站点访问配置' id='site-visit'>
							<Form.Item
								name='siteLogin'
								label={
									<span>
										登录后才能访问站点&nbsp;
										<Tooltip title='若设置了访问站点需要登录，栏目和内容中的设置将无效，都需要登录才能访问'>
											<InfoCircleOutlined className='io-site-detail-expand-info__icon' />
										</Tooltip>
									</span>
								}
								initialValue={1}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.siteLogin)}
								/>
							</Form.Item>
							<Form.Item
								name='siteGray'
								label={
									<span>
										网站公祭日灰色风格&nbsp;
										<Tooltip title='开启后网站前台页面将变为灰色'>
											<InfoCircleOutlined className='io-site-detail-expand-info__icon' />
										</Tooltip>
									</span>
								}
								initialValue={0}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.siteGray)}
								/>
							</Form.Item>
							<Form.Item
								name='siteRelativePath'
								label='使用相对路径'
								initialValue={'0'}
							>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.siteRelativePath)}
								/>
							</Form.Item>
						</BizSection>
						<BizSection title='网站群推送配置' id='site-push'>
							<Form.Item name='sitePush' label='允许网站群推送' initialValue={1}>
								<Switch
									checkedChildren='开启'
									unCheckedChildren='关闭'
									defaultChecked={!!Number(data?.data.sitePush)}
								/>
							</Form.Item>
							<Form.Item name='sitePushCryp' label='密钥'>
								<Input placeholder='请输入密钥' />
							</Form.Item>
						</BizSection>
					</Form>
				</BizPage>
			</div>
			<Anchor style={{ position: 'fixed', top: '370px', right: '100px' }} affix>
				<Link href='#content' title='内容配置' />
				<Link href='#channel' title='栏目配置' />
				<Link href='#comment' title='评论配置' />
				<Link href='#mail-service' title='邮件服务配置' />
				<Link href='#water-mark' title='水印配置' />
				<Link href='#statics' title='静态化服务配置' />
				<Link href='#site-visit' title='站点访问配置' />
				<Link href='#site-push' title='网站群推送配置' />
			</Anchor>
		</>
	);
};
