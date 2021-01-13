import { Image, Progress, Tooltip } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { useRef, useState } from 'react';
import { BizModalForm, BizModalFormRef } from '../../BizModalForm';
import { PictureCropper } from '../../PictureCropper';
import './index.less';

export interface UploadItemProps {
	file: UploadFile;
	onRemove?: () => void;
}

export const UploadItem = ({ file, onRemove }: UploadItemProps) => {
	const previewModalRef = useRef<BizModalFormRef>();
	const [pictureCropperVisible, setPictureCropperVisible] = useState<boolean>(false);
	const [imageBase, setImageBase] = useState<string>();

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
				<Image src={file.url && file.thumbUrl} />
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
				<Image src={file.url && file.thumbUrl} preview={false} />
			</BizModalForm>
			<PictureCropper
				visible={pictureCropperVisible}
				oncancel={() => {
					setPictureCropperVisible(false);
				}}
				src={file?.url}
				onOk={(imageCropBase: any) => setImageBase(imageCropBase)}
			/>
			<div className='io-image-upload__item-action'>
				<div>
					<Tooltip title='裁剪'>
						<i
							className={`iconfont icon-border ${isError ? 'disable' : ''}`}
							onClick={() => {
								if (isError) return;
								setPictureCropperVisible(true);
							}}
						/>
					</Tooltip>
					<Tooltip title='预览'>
						<i
							className={`iconfont icon-eye ${isError ? 'disable' : ''}`}
							onClick={() => {
								if (isError) return;
								previewModalRef.current?.open();
							}}
						/>
					</Tooltip>
					<Tooltip title='删除'>
						<i
							className={`iconfont icon-delete`}
							onClick={() => {
								onRemove && onRemove();
							}}
						/>
					</Tooltip>
				</div>
			</div>
			<div className='io-image-upload__item-mask' />
		</div>
	);

	return isError ? <Tooltip title='上传错误'>{child}</Tooltip> : child;
};
