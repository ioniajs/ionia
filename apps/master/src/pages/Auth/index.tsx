import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { getSystemSetting, logger, userLogin } from '@ionia/libs';
import { useLocalStorageState, useMount } from 'ahooks';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';

interface LoginForm {
	cipher: string;
	username: string;
}

const Login = () => {
	const history = useHistory();
	const [loginText, setLoginText] = useState('登录');
	const [status, setStatus] = useState('close');
	const [codeStatus] = useState(false);
	const [loginLogo, setLoginLogo] = useState('');
	const [loginPoster, setLoginPoster] = useState('');
	const [, setConfig] = useLocalStorageState('config', {});

	useMount(async () => {
		const { data } = await getSystemSetting();
		setLoginLogo(data.loginLogo);
		setLoginPoster(data.loginPoster);
		setConfig(data);
		logger.debug(data);
	});

	const onFinish = async (values: LoginForm) => {
		logger.debug('Success:', values);
		setLoginText('登录中');
		setStatus('open');
		const { data, code } = await userLogin({
			...values,
			client_id: 'jeecms_manager',
			client_secret: 'w0EN3jdQrR3Ux0hNZWDaQ2w79mbv3p2eLvbke4GfzibFT5E',
			grant_type: 'password',
		});

		if (code == 200) {
			setTimeout(() => {
				setLoginText('登录成功');
				setStatus('complete');

				location.href = '/';
			}, 2000);
		}
	};

	return (
		<div className='login'>
			<div className='io-page__login'>
				<div className='login-left'>
					<div className='logo'>
						<img src={loginLogo} alt='' />
						<p>金磊软件，稳定压倒一切!</p>
					</div>
					<Form
						className='io-form__login'
						name='basic'
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<Form.Item
							name='username'
							rules={[
								{ required: true, message: '请输入用户名' },
								{ max: 120, message: '不可超过120个字数' },
							]}
						>
							<Input
								size='large'
								allowClear
								prefix={<i className='iconfont icon-user' />}
								placeholder='请输入用户名'
								bordered={false}
							/>
						</Form.Item>

						<Form.Item
							name='cipher'
							rules={[
								{ required: true, message: '请输入密码' },
								{ max: 120, message: '不可超过120个字数' },
							]}
						>
							<Input.Password
								size='large'
								prefix={<i className='iconfont icon-lock' />}
								placeholder='请输入密码'
								bordered={false}
							/>
						</Form.Item>

						{codeStatus && (
							<Form.Item
								name='code'
								rules={[{ required: true, message: '请输入验证码' }]}
								className='code'
							>
								<Input
									size='large'
									prefix={<i className='iconfont icon-safetycertificate' />}
									placeholder='请输入验证码'
									bordered={false}
								/>
								<span className='code-img'>123</span>
							</Form.Item>
						)}

						<Form.Item className='submit-button'>
							<Button type='primary' size='large' block htmlType='submit'>
								{loginText}
								{status === 'open' && <LoadingOutlined />}
								{status === 'complete' && <CheckCircleOutlined />}
							</Button>
						</Form.Item>
					</Form>
				</div>
				<div className='login-right'>
					<img src={loginPoster} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Login;
