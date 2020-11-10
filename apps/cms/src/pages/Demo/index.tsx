import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { ImageUpload } from '@ionia/libs';

export default () => {
	return (
		<PageContainer pageHeaderRender={() => null}>
			<ProCard>
				<div>Demo</div>
				<ImageUpload />
			</ProCard>
		</PageContainer>
	);
};
