import React from 'react';
import { Button } from 'antd';
interface UploadButtonProps {
	type?: 'image' | 'video' | 'audio';
}

export const UploadButton = ({ type = 'image' }: UploadButtonProps) => {
	let child;
	if (type === 'image') {
		child = (
			<>
				<i className='iconfont icon-upload' />
				<span>上传图片</span>
			</>
		);
	} else if (type === 'video') {
		child = (
			<>
				<i className='iconfont icon-videocameraadd' />
				<span>上传视频</span>
			</>
		);
	} else {
		child = (
			<Button type='primary' className='io-audio-upload-but'>
				<i className='iconfont icon-upload'></i>
				上传音频
			</Button>
		);
	}

	return <div className='io-upload-button'>{child}</div>;
};
