import { AMap, BizModalForm, BizPage } from '@ionia/libs';
import { Button } from 'antd';
import React from 'react';

export default () => {
	return (
		<BizPage>
			<BizModalForm
				title='选择地点'
				triggerRender={({ open }) => (
					<Button type='primary' onClick={open}>
						选择地点
					</Button>
				)}
				width={1000}
			>
				<AMap />
			</BizModalForm>
		</BizPage>
	);
};
