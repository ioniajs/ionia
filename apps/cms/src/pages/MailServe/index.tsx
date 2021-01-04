import React, { useState } from 'react';
import { BizPage, SaveButton } from '@ionia/libs';
import { Form, Switch, Tooltip, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './index.less';
import Verify from './Verify';
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 12 },
};

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

export default () => {
	const [email, setEmail] = useState(false);
	const [form] = Form.useForm();

	return (
		<div className='io-cms-mail-serve__div'>
			<BizPage
				showActions={true}
				renderActions={() => {
					return (
						<SaveButton
							onSave={() => {
								form.submit();
							}}
						/>
					);
				}}
			>
				<Form form={form} style={{ marginTop: 24 }} {...layout}>
					<Form.Item label='邮件服务'>
						<Switch checkedChildren='开启' unCheckedChildren='关闭' />
					</Form.Item>
					<Form.Item
						label={
							<span>
								站群统一使用&nbsp;
								<Tooltip
									title='选择统一使用后，需要填写统一的配置信息，在“站点扩展配置>邮件服务配置”
                            处只能查看此配置信息不可再编辑；选择否，不需要填写配置信息，
                            在“站点扩展配置>邮件服务配置”处需要用户去填写站点自身的配置。'
								>
									<InfoCircleOutlined />
								</Tooltip>
							</span>
						}
						initialValue={true}
						valuePropName='checked'
					>
						<Switch checkedChildren='开启' unCheckedChildren='关闭' />
					</Form.Item>
					<Form.Item
						name='smtpserve'
						rules={[{ required: true, message: '请输入SMTP服务器' }]}
						label={
							<span>
								SMTP服务器 &nbsp;
								<Tooltip title='设置SMTP邮件服务器主机地址，不推荐使用QQ个人邮箱'>
									<InfoCircleOutlined />
								</Tooltip>
							</span>
						}
					>
						<Input width={664} placeholder='请输入SMTP服务器' />
					</Form.Item>
					<Form.Item
						name='smtpport'
						rules={[{ required: true, message: '请输入SMTP端口号', whitespace: true }]}
						// label='端口号'
						label={
							<span>
								SMTP端口 &nbsp;
								<Tooltip title='邮件服务器端口，25默认http协议，465默认为https协议，推荐使用465'>
									<InfoCircleOutlined />
								</Tooltip>
							</span>
						}
					>
						<Input placeholder='请输入SMTP端口' />
					</Form.Item>
					<Form.Item name='accpunt' rules={[{ required: true }]} label='发件账号'>
						<Input placeholder='请输入发件账号' />
					</Form.Item>
					<Form.Item
						name='emailpassword'
						label={
							<span>
								邮箱密码&nbsp;
								<Tooltip title='一般为验证邮箱密码，如果使用网易邮箱，请填写授权码'>
									<InfoCircleOutlined />
								</Tooltip>
							</span>
						}
						rules={[{ required: true, message: '请输入邮箱密码' }]}
					>
						<Input placeholder='请输入邮箱密码' />
					</Form.Item>
					<Form.Item label='使用SSL协议'>
						<Switch checkedChildren='开启' unCheckedChildren='关闭' />
					</Form.Item>
					<Form.Item {...tailLayout}>
						<Button onClick={() => setEmail(true)}>邮箱校验</Button>
					</Form.Item>
				</Form>
			</BizPage>
			<Verify email={email} setEmail={setEmail} />
		</div>
	);
};
