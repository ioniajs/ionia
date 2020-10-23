import React from 'react';
import './index.less';

export interface MasterNavTabProps {}

const MasterNavTab = () => {
	return (
		<div className='io-master__nav-tab'>
			<div className='extra'>
				<i className='iconfont icon-doubleleft' />
			</div>
			<div className='tabs'>
				<div className='tab'>1</div>
				<div className='tab'>2</div>
				<div className='tab'>3</div>
			</div>
			<div className='extra'>
				<i className='iconfont icon-doubleright' />
			</div>
		</div>
	);
};

export default MasterNavTab;
