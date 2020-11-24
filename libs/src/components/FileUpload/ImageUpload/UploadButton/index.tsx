import React from 'react';
import './index.less';

interface UploadButtonProps {
	text?: string;
}

export const UploadButton = ({ text = '上传图片' }: UploadButtonProps) => {
	return (
		<div className='io-upload-button'>
			<i className='iconfont icon-upload' />
			<span>{text}</span>
		</div>
	);
};
