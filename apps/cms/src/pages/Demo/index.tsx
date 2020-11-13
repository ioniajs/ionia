import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { ImageUpload, AnnexUpload, VideoUpload } from '@ionia/libs';

export default () => {
	return (
		<PageContainer pageHeaderRender={() => null}>
			<ProCard>
				<div>Demo</div>
				{/* <ImageUpload
					onAdd={async (file: any) => {
						console.log(file, 'ffffff');
					}}
					onRemove={async (info: any) => {
						console.log(info, 'iiii');
					}}
				/> */}
				{/* <AnnexUpload
				// onChange={({ file, fileList }: any) => {
				// 	console.log(file, fileList, 'dddddd');
				// }}
				/> */}
				<VideoUpload />
			</ProCard>
		</PageContainer>
	);
};
