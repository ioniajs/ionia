import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import {
	Watermark,
	AnnexUpload,
	ImagePreview,
	AudioUpload,
	ImageUpload,
	VideoUpload,
} from '@ionia/libs';
import { Button } from 'antd';
import React from 'react';

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
				<div style={{ margin: '20px' }}>dads</div>
				<VideoUpload />
				<ImagePreview url='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />
				<ImagePreview
					title='图片预览'
					url='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
				>
					<Button type='primary'>图片预览</Button>
				</ImagePreview>
				{/* <VideoUpload /> */}
				<AudioUpload
					onAdd={async (file: any) => {
						console.log(file, 'ffff');
					}}
				/>
				{/* <AudioPlayer /> */}
				<Watermark
					onChange={(value: number) => {
						console.log(value);
					}}
				/>
			</ProCard>
		</PageContainer>
	);
};
