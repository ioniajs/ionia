import { BizPage } from '@ionia/libs';
import React from 'react';
import { Divider } from 'antd';

export default () => {
	return (
		<>
			<BizPage
				tips='操作说明的文字 ：设置系统所使用的验证码模板，提供邮件或短信两种方式'
				showBreadCrumbs
				breadcrumbs={[{ name: '组件演示' }, { name: '详情页' }]}
			>
				<h1>111</h1>
			</BizPage>
			<Divider />
			<BizPage
				tips='操作说明的文字 ：设置系统所使用的验证码模板，提供邮件或短信两种方式'
				showBreadCrumbs
				breadcrumbs={[{ name: '组件演示' }, { name: '详情页' }]}
				tabList={[
					{ tabKey: '1', tab: '1', children: <div>111</div> },
					{ tabKey: '2', tab: '2', children: <div>222</div> },
					{ tabKey: '3', tab: '3', children: <div>333</div> },
				]}
			/>
		</>
	);
};
