import React from 'react';
import { BizPage } from '@ionia/libs';
import { Home } from './Home';
import { Section } from './Section';
import { Content } from './Content';

export default () => {
	return (
		<BizPage
			breadcrumbs={[{ name: '站点管理' }, { name: '发布静态页' }]}
			showActions={true}
			tabList={[
				{
					tabKey: '1',
					tab: '首页',
					children: <Home />,
				},
				{
					tabKey: '2',
					tab: '栏目页',
					children: <Section />,
				},
				{
					tabKey: '3',
					tab: '内容页',
					children: <Content />,
				},
			]}
		/>
	);
};
