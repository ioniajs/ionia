import { BizModalForm, BizModalFormRef } from '../../BizModalForm';
import { Tooltip, Image, Progress, Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { ReactElement, useRef } from 'react';
import { UploadButton } from '../UploadButton';
import './index.less';

interface ImageUploadProps extends UploadProps {
	title?: string;
	tips?: string;
}

const UploadItem = ({ file }: { file: UploadFile }) => {
	const previewModalRef = useRef<BizModalFormRef>();

	let item = null;
	if (file.status === 'success') {
		item = (
			<>
				<p>上传成功</p>
				<Progress
					width={112}
					size='small'
					showInfo={false}
					strokeColor='#52C41A'
					strokeWidth={4}
					percent={100}
				/>
			</>
		);
	}

	if (file.status === 'uploading') {
		item = (
			<>
				<p>上传中 {file.percent}%</p>
				<Progress
					width={112}
					size='small'
					showInfo={false}
					strokeColor='#1269DB'
					strokeWidth={4}
					percent={file.percent}
				/>
			</>
		);
	}

	if (file.status === 'done') {
		item = (
			<>
				<Image src={file.url} />
			</>
		);
	}

	if (file.status === 'error') {
		item = (
			<>
				<i className='iconfont icon-image' />
				<span title={file.name}>{file.name}</span>
			</>
		);
	}

	const isError = file.status === 'error';

	const child = (
		<div
			className={`io-image-upload__item ${
				file.status === 'done' ? 'io-image-upload__item--done' : ''
			} ${isError ? 'io-image-upload__item--error' : ''}`}
		>
			{item}
			<BizModalForm
				ref={previewModalRef}
				title={file.name}
				triggerRender={() => null}
				submitterRender={() => null}
			>
				<Image src={file.url} preview={false} />
			</BizModalForm>
			<div className='io-image-upload__item-action'>
				<div>
					<Tooltip title='裁剪'>
						<i className={`iconfont icon-border ${isError ? 'disable' : ''}`} />
					</Tooltip>
					<Tooltip title='预览'>
						<i
							className={`iconfont icon-eye ${isError ? 'disable' : ''}`}
							onClick={() => {
								previewModalRef.current?.open();
							}}
						/>
					</Tooltip>
					<Tooltip title='删除'>
						<i className={`iconfont icon-delete`} />
					</Tooltip>
				</div>
			</div>
			<div className='io-image-upload__item-mask' />
		</div>
	);

	return isError ? <Tooltip title='上传错误'>{child}</Tooltip> : child;
};

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
			name: 'qweqweqweqwew-weqwewqeqwew-weqweqweqweqweqweqw-image.png',
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
				itemRender={(originNode: ReactElement, file: UploadFile) => (
					<UploadItem file={file} />
				)}
				{...reset}
			>
				<UploadButton />
			</Upload>
			{title && <p className='io-file-upload__title'>{title}</p>}
			{tips && <p className='io-file-upload__tips'>{tips}</p>}
		</div>
	);
};
