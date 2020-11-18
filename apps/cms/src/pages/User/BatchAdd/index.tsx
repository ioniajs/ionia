import { BizPage } from '@ionia/libs';
import React from 'react';
import './index.less';

export default () => {
	return <BizPage breadcrumbs={[{ name: '用户管理' }, { name: '批量新建' }]}></BizPage>;
};
