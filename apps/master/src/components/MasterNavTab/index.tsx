import React, { useState } from 'react';
import { Tabs } from 'antd';
import './index.less';
import { render } from 'react-dom';

const { TabPane } = Tabs;


export interface MasterNavTabProps {}

const MasterNavTab = () => {
		const tabContent = [
			<span>{`Tab-${1}`}<i  className="iconfont icon-close" /></span>
		]
		
		return (
			<div className='io-master__nav-tab' >
					<Tabs defaultActiveKey='1'>
						{[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
							<TabPane tab={tabContent} key={i} disabled={i === 28}  />
						))}
					</Tabs>
			</div>
		);
	}
{
	/* <div className='io-master__nav-tab'>
			<div className='extra'>
				<i className='iconfont icon-doubleleft' />
			</div>
			<div className='tabs'>
				<NavTab active />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
			</div>
			<div className='extra'>
				<i className='iconfont icon-doubleright' />
			</div>
		</div> */
}

export default MasterNavTab;
