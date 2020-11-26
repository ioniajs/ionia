import { Button, Upload } from 'antd';
import React from 'react';

const fileList: any[] = [
	{
		uid: '-1',
		name: 'xxx.png',
		status: 'done',
		url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	},
	{
		uid: '-2',
		name: 'yyy.png',
		status: 'error',
	},
];

interface MultiImageUploadProps {}

export const MultiImageUpload = ({}: MultiImageUploadProps) => {
	return (
		<div className='io-multi-image-upload'>
			<Upload
				action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
				listType='picture'
				defaultFileList={[...fileList]}
				className='o-multi-image-upload__button'
			>
				<Button icon={<i className='iconfont icon-upload' />}>上传</Button>
			</Upload>
		</div>
	);
};
