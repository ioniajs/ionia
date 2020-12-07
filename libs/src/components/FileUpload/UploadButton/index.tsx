import React from 'react';
interface UploadButtonProps {
	type?: 'image' | 'video';
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
	} else {
		child = (
			<>
				<i className='iconfont icon-videocameraadd' />
				<span>上传视频</span>
			</>
		);
	}

	return <div className='io-upload-button'>{child}</div>;
};
