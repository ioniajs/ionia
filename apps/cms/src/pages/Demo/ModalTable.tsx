import { BizModalForm, BizPage } from '@ionia/libs';
import { Button } from 'antd';
import React from 'react';
import SelectUser from './SelectUser';

export default () => {
	return (
		<BizPage>
			<BizModalForm
				title='选择负责人'
				triggerRender={({ open }) => <Button onClick={open}>选择负责人</Button>}
				width={1200}
			>
				<SelectUser />
			</BizModalForm>
		</BizPage>
	);
};
