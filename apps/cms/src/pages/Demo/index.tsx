import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { ImageUpload, AnnexUpload, VideoUpload, AudioUpload, AudioPlayer } from '@ionia/libs';

export default () => {
	return (
		<PageContainer pageHeaderRender={() => null}>
			<ProCard>
				<div>Demo</div>
				<ImageUpload
					onAdd={async (file: any) => {
						console.log(file, 'ffffff');
					}}
					onRemove={async (info: any) => {
						console.log(info, 'iiii');
					}}
				/>
				<div style={{ margin: '20px' }} />
				<AnnexUpload
				// onChange={({ file, fileList }: any) => {
				// 	console.log(file, fileList, 'dddddd');
				// }}
				/>
				{/* <VideoUpload /> */}
				<AudioUpload
					onAdd={async (file: any) => {
						console.log(file, 'ffff');
					}}
				/>
				{/* <AudioPlayer /> */}
			</ProCard>
		</PageContainer>
	);
};
