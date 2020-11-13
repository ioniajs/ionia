import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';

export default () => {
	return (
		<PageContainer pageHeaderRender={() => null}>
			<ProCard>
				<div>
					<Button>
						<i className='iconfont icon-left' />
						返回
					</Button>
				</div>
			</ProCard>
		</PageContainer>
	);
};
