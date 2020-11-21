import { AMap, BizModal, BizPage } from '@ionia/libs';
import React from 'react';
import { Button } from 'antd';
import './amap.less';
export default () => {
	return (
		<BizPage>
			<BizModal
				className='io-amap__content'
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
