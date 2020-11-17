import React from 'react';
import './index.less';
import { Button } from 'antd';
import { BizPage } from '@ionia/libs';

export default () => {
	return (
		<div className='io-cms-userbatchadd'>
			<BizPage
				showBreadCrumbs
				breadcrumbs={[{ name: '用户管理' }, { name: '批量新建' }]}
			></BizPage>
		</div>
	);
};
