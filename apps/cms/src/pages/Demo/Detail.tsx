import { BizPage } from '@ionia/libs';
import React from 'react';

export default () => {
	return (
		<>
			<BizPage
				tips='操作说明的文字 ：设置系统所使用的验证码模板，提供邮件或短信两种方式'
				breadcrumbs={[{ name: '组件演示' }, { name: '详情页' }]}
			>
				<h1>111</h1>
			</BizPage>
			<BizPage
				tips='操作说明的文字 ：设置系统所使用的验证码模板，提供邮件或短信两种方式'
				breadcrumbs={[{ name: '组件演示' }, { name: '详情页' }]}
			>
				<h1>111</h1>
			</BizPage>
		</>
	);
};
