import React from 'react';
import { Map } from 'react-amap';
import './index.less';

interface AMapProps {}

export const AMap = ({}: AMapProps) => {
	return (
		<div className='io-amap'>
			<Map plugins={['ControlBar']} />
		</div>
	);
};
