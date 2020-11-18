import ProCard from '@ant-design/pro-card';
import {
	Watermark,
	AnnexUpload,
	ImagePreview,
	AudioUpload,
	ImageUpload,
	VideoUpload,
	BizPage,
	BizModal,
} from '@ionia/libs';
import { Button } from 'antd';
import React from 'react';

export default () => {
	return (
		<BizPage>
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
				<BizModal title='位置' />
			</ProCard>
		</BizPage>
	);
};
