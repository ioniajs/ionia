import { Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { ReactElement } from 'react';
import { UploadButton } from '../UploadButton';
import './index.less';

interface ImageUploadProps extends UploadProps {
	title?: string;
	tips?: string;
}

export const ImageUpload = ({ title, tips, ...reset }: ImageUploadProps) => {
	const fileList: UploadFile<any>[] = [
		{
			uid: '1',
			name: 'image.png',
			status: 'success',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			size: 10,
			type: '',
		},
		{
			uid: '1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			size: 10,
			type: '',
		},
		{
			uid: '2',
			percent: 30,
			name: 'image.png',
			status: 'uploading',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			size: 10,
			type: '',
		},
		{
			uid: '3',
			name: 'image.png',
			status: 'error',
			size: 20,
			type: '',
		},
	];

	return (
		<div className='io-image-upload'>
			<Upload
				className='io-image-upload__button'
				fileList={fileList}
				action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
				listType='picture-card'
				itemRender={(originNode: ReactElement, file: UploadFile) => {
					if (file.status === 'success') {
						return <div>111</div>;
					}

					if (file.status === 'uploading') {
						return <div>{file.percent}</div>;
					}

					if (file.status === 'done') {
						return <div></div>;
					}

					if (file.status === 'error') {
					}

					return originNode;
				}}
				{...reset}
			>
				<UploadButton />
			</Upload>
			{title && <p className='io-file-upload__title'>{title}</p>}
			{tips && <p className='io-file-upload__tips'>{tips}</p>}
		</div>
	);
};
