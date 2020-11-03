import routes from '@/routes';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { VideoPlayer } from '@ionia/libs';
import React from 'react';

export default () => {
	return (
		<PageContainer pageHeaderRender={() => null}>
			<ProCard split='vertical'>
				<ProCard title={<div>111</div>} colSpan='30%'>
					左侧内容
					<div>
						<VideoPlayer
							url={[
								'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
							]}
						/>
					</div>
				</ProCard>
				<ProCard>111</ProCard>
			</ProCard>
		</PageContainer>
	);
};
