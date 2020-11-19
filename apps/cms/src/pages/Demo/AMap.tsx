import { AMap, BizModal, BizPage } from '@ionia/libs';
import React from 'react';
import { Button } from 'antd';

export default () => {
	return (
		<BizPage>
			<BizModal
				renderTrigger={({ open }) => (
					<Button type='primary' onClick={open}>
						选择地点
					</Button>
				)}
			>
				<AMap />
			</BizModal>
		</BizPage>
	);
};
