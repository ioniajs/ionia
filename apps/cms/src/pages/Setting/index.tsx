import { InfoCircleOutlined } from '@ant-design/icons';
import { BizPage, BizSection, ImageUpload } from '@ionia/libs';
import { Button, Form, Input, Select, Switch, Tooltip } from 'antd';
import React, { useState } from 'react';

const selectAfter = (
	<Select defaultValue='MB' className='select-after'>
		<Select.Option value='MB'>MB</Select.Option>
		<Select.Option value='KB'>KB</Select.Option>
	</Select>
);

const colorStyle = [
	{ value: '1', label: '简洁蓝' },
	{ value: '2', label: '科技蓝' },
	{ value: '3', label: '极客蓝' },
	{ value: '4', label: '希望青' },
	{ value: '5', label: '清新绿' },
	{ value: '6', label: '优质紫' },
	{ value: '7', label: '阳光黄' },
	{ value: '8', label: '活力橙' },
	{ value: '9', label: '中国红' },
	{ value: '10', label: '酷炫黑' },
];
const imageTypes = [
	{ value: '1', label: 'jpg' },
	{ value: '2', label: 'jpeg' },
	{ value: '3', label: 'png' },
	{ value: '4', label: 'gif' },
	{ value: '5', label: 'bmp' },
	{ value: '6', label: 'ico' },
];
const videoTypes = [
	{ value: '1', label: 'mp4' },
	{ value: '2', label: 'flv' },
	{ value: '3', label: 'avi' },
	{ value: '4', label: 'wmv' },
	{ value: '5', label: 'rmvb' },
	{ value: '6', label: '3gp' },
	{ value: '7', label: 'mkv' },
	{ value: '8', label: 'mov' },
	{ value: '9', label: 'rm' },
];
const audioTypes = [
	{ value: '1', label: 'mp3' },
	{ value: '2', label: 'wav' },
	{ value: '3', label: 'AIFF' },
	{ value: '4', label: 'wma' },
	{ value: '5', label: 'MPEG' },
	{ value: '6', label: 'ogg' },
	{ value: '7', label: 'aac' },
];
const docTypes = [
	{ value: '1', label: 'doc' },
	{ value: '2', label: 'docx' },
	{ value: '3', label: 'ppt' },
	{ value: '4', label: 'pptx' },
	{ value: '5', label: 'pdf' },
	{ value: '6', label: 'wps' },
	{ value: '7', label: 'txt' },
	{ value: '8', label: 'rtf' },
	{ value: '9', label: 'xls' },
	{ value: '10', label: 'xlsx' },
];
export default () => {
	const [form] = Form.useForm();
	const [attachCtlTypeValue, setAttachCtlTypeValue] = useState<number>(1);
	return (
		<BizPage
			form={form}
			showActions
			renderActions={() => (
				<Button
					type='primary'
					onClick={async () => {
						const val = await form.validateFields().then(async values => {
							return values;
						});
						// 文件类型用中英文逗号分割
						const temp = val.attachCtlTypes
							? val.attachCtlTypes.replace(/[\uff0c]/g, ',').split(',')
							: [];
						const data = {
							...val,
							blockSensitiveWord: !!val.blockSensitiveWord,
							intranetMode: !!val.intranetMode,
							showMode: !!val.showMode,
							loginLogo: '0',
							loginPoster: '0',
							sysFavicon: '0',
							sysHeaderLogo: '0',
							maxAttachSize: Number(val.maxAttachSize) || 0,
							maxAudioSize: Number(val.maxAudioSize) || 0,
							maxDocSize: Number(val.maxDocSize) || 0,
							maxPicSize: Number(val.maxPicSize) || 0,
							maxVideoSize: Number(val.maxVideoSize) || 0,
							attachCtlTypes: [].concat(temp),
						};
						console.log(data, 'dadadad');
						// const success = await handleSubmit(data);
						// console.log(success, 'sss');
					}}
				>
					保存
				</Button>
			)}
		>
			<BizSection title='系统风格设置'>
				<Form.Item
					label='选择默认风格'
					name='defaultStyle'
					initialValue='1'
					rules={[{ required: true, message: '请选择默认风格' }]}
				>
					<Select>
						{colorStyle.map((item: any) => {
							return <Select.Option value={item.value}>{item.label}</Select.Option>;
						})}
					</Select>
				</Form.Item>
				<Form.Item
					name='sysFavicon'
					label={
						<span>
							系统标记&nbsp;
							<Tooltip title='浏览系统后台时，系统标志显示在浏览器页签左侧'>
								<InfoCircleOutlined />
							</Tooltip>
						</span>
					}
				>
					<ImageUpload
						limit={1}
						onAdd={async (file: any) => {
							console.log(file, 'ffffff');
						}}
						onRemove={async (info: any) => {
							console.log(info, 'iiii');
						}}
					/>
				</Form.Item>
				<Form.Item
					className='io-cms-form-item-tips'
					label={<span style={{ display: 'none' }}>不显示</span>}
					colon={false}
				>
					<span>请上传ico格式的图片，建议文件命名为favicon.ico</span>
				</Form.Item>
				<Form.Item
					name='loginLogo'
					label={
						<span>
							登录页logo&nbsp;
							<Tooltip title='设置系统后台登录页的logo图片'>
								<InfoCircleOutlined />
							</Tooltip>
						</span>
					}
				>
					<ImageUpload limit={1} />
				</Form.Item>
				<Form.Item
					name='loginPoster'
					label={
						<span>
							登录页海报&nbsp;
							<Tooltip title='设置系统后台登录页的海报图片'>
								<InfoCircleOutlined />
							</Tooltip>
						</span>
					}
				>
					<ImageUpload limit={1} />
				</Form.Item>
				<Form.Item
					name='sysHeaderLogo'
					label={
						<span>
							页面头部logo&nbsp;
							<Tooltip title='设置系统后台界面左上角的logo图片'>
								<InfoCircleOutlined />
							</Tooltip>
						</span>
					}
				>
					<ImageUpload limit={1} />
				</Form.Item>
			</BizSection>
			<BizSection title='文件上传设置'>
				<Form.Item name='allowPicTypes' label='允许上传的图片类型'>
					<Select placeholder='请选择图片类型' allowClear mode='multiple'>
						{imageTypes.map((item: any) => {
							return <Select.Option value={item.value}>{item.label}</Select.Option>;
						})}
					</Select>
				</Form.Item>
				<Form.Item
					name='maxPicSize'
					label='单张图片文件大小限制'
					rules={[
						() => ({
							validator(rule, value) {
								if (!value || /^[0-9]*$/g.test(value)) return Promise.resolve();
								return Promise.reject('请输入正整数');
							},
						}),
					]}
				>
					<Input placeholder='留空为不限制' addonAfter={selectAfter} />
				</Form.Item>
				<Form.Item name='allowVideoTypes' label='允许上传的视频类型'>
					<Select placeholder='请选择视频类型' allowClear mode='multiple'>
						{videoTypes.map((item: any) => {
							return <Select.Option value={item.value}>{item.label}</Select.Option>;
						})}
					</Select>
				</Form.Item>
				<Form.Item
					name='maxVideoSize'
					label='单个视频文件大小限制'
					rules={[
						() => ({
							validator(rule, value) {
								if (!value || /^[0-9]*$/g.test(value)) return Promise.resolve();
								return Promise.reject('请输入正整数');
							},
						}),
					]}
				>
					<Input placeholder='留空为不限制' addonAfter={selectAfter} />
				</Form.Item>
				<Form.Item name='allowAudioTypes' label='允许上传的音频类型'>
					<Select placeholder='请选择音频类型' allowClear mode='multiple'>
						{audioTypes.map((item: any) => {
							return <Select.Option value={item.value}>{item.label}</Select.Option>;
						})}
					</Select>
				</Form.Item>
				<Form.Item
					name='maxAudioSize'
					label='单个音频文件大小限制'
					rules={[
						() => ({
							validator(rule, value) {
								if (!value || /^[0-9]*$/g.test(value)) return Promise.resolve();
								return Promise.reject('请输入正整数');
							},
						}),
					]}
				>
					<Input placeholder='留空为不限制' addonAfter={selectAfter} />
				</Form.Item>
				<Form.Item name='allowDocTypes' label='允许上传的文档类型'>
					<Select placeholder='请选择文档类型' allowClear mode='multiple'>
						{docTypes.map((item: any) => {
							return <Select.Option value={item.value}>{item.label}</Select.Option>;
						})}
					</Select>
				</Form.Item>
				<Form.Item
					name='maxDocSize'
					label='单个文档大小限制'
					rules={[
						() => ({
							validator(rule, value) {
								if (!value || /^[0-9]*$/g.test(value)) return Promise.resolve();
								return Promise.reject('请输入正整数');
							},
						}),
					]}
				>
					<Input placeholder='留空为不限制' addonAfter={selectAfter} />
				</Form.Item>
				<Form.Item name='attachCtlType' label='允许上传的附件类型' initialValue={1}>
					<Select
						onSelect={(e: number) => {
							setAttachCtlTypeValue(e);
							console.log(e, 'eee');
						}}
					>
						<Select.Option value={0}>不限制</Select.Option>
						<Select.Option value={1}>设置禁止类型</Select.Option>
						<Select.Option value={2}>设置允许类型</Select.Option>
					</Select>
				</Form.Item>
				{/* 附件类型不限制时，不出现文件类型的输入框 */}
				{!!attachCtlTypeValue && (
					<Form.Item
						name='attachCtlTypes'
						label='请输入文件类型'
						rules={[{ required: true, message: '请输入文件类型' }]}
					>
						<Input placeholder='多个文件类型用逗号隔开' />
					</Form.Item>
				)}
				<Form.Item
					name='maxAttachSize'
					label='单个附件大小限制'
					rules={[
						() => ({
							validator(rule, value) {
								if (!value || /^[0-9]*$/g.test(value)) return Promise.resolve();
								return Promise.reject('请输入正整数');
							},
						}),
					]}
				>
					<Input placeholder='留空为不限制' addonAfter={selectAfter} />
				</Form.Item>
			</BizSection>
			<BizSection title='敏感词设置'>
				<Form.Item name='blockSensitiveWord' label='禁止输入敏感词'>
					<Switch checkedChildren='开启' unCheckedChildren='关闭' defaultChecked />
				</Form.Item>
			</BizSection>
			<BizSection title='其他设置'>
				<Form.Item name='showMode' label='演示模式'>
					<Switch checkedChildren='开启' unCheckedChildren='关闭' />
				</Form.Item>
				<Form.Item name='intranetMode' label='内网模式'>
					<Switch checkedChildren='开启' unCheckedChildren='关闭' />
				</Form.Item>
			</BizSection>
		</BizPage>
	);
};
