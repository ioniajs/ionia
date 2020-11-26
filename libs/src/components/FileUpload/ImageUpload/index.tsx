import { useLocalStorageState } from 'ahooks';
import { Image, Progress, Tooltip, Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import axios from 'axios';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { BizModalForm, BizModalFormRef } from '../../BizModalForm';
import { UploadButton } from '../UploadButton';
import { PictureCropper } from '../../PictureCropper';
import './index.less';

interface ImageUploadProps extends UploadProps {
	title?: string;
	tips?: string;
	limit?: number;
	onChange?: (files: any) => void;
}

interface UploadItemProps {
	file: UploadFile;
	onRemove?: () => void;
}
const UploadItem = ({ file, onRemove }: UploadItemProps) => {
	const previewModalRef = useRef<BizModalFormRef>();
	const [picCroVisible, setPicCroVisible] = useState<boolean>(false);
	const [imageBase, setImageBase] = useState(); // 裁剪后返回的image base64
	console.log(imageBase, 'iiiii');
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
			className={`io-image-upload__item ${file.status === 'done' ? 'io-image-upload__item--done' : ''
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
				visible={picCroVisible}
				oncancel={() => { setPicCroVisible(false) }}
				src={file?.response?.url}
				onOk={(imageCropBase) => setImageBase(imageCropBase)}
			/>
			<div className='io-image-upload__item-action'>
				<div>
					<Tooltip title='裁剪'>
						<i
							className={`iconfont icon-border ${isError ? 'disable' : ''}`}
							onClick={() => {
								if (isError) return;
								// previewModalRef.current?.open();
								setPicCroVisible(true);
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

export const ImageUpload = ({
	title,
	tips,
	limit = 1,
	action = '/module-infra/res/upload',
	defaultFileList,
	onChange,
	...reset
}: ImageUploadProps) => {
	const [token] = useLocalStorageState('token');
	const [fileList, setFileList] = useState<UploadFile<any>[]>(defaultFileList ?? []);


	useEffect(() => {
		onChange && onChange(fileList);
	}, [fileList]);

	return (
		<div className='io-image-upload'>
			<Upload
				className='io-image-upload__button'
				listType='picture-card'
				action={action}
				customRequest={({
					action,
					data,
					file,
					filename,
					headers,
					onError,
					onProgress,
					onSuccess,
					withCredentials,
				}) => {
					const formData = new FormData();
					// @ts-ignore
					formData.append('files', [file]);

					axios
						.post(action, formData, {
							withCredentials,
							headers: {
								'Accept-Language': 'zh-CN',
								Authorization: `Bearer ${token}`,
								...headers,
							},
							onUploadProgress: ({ total, loaded }) => {
								onProgress(
									{
										percent: Number(
											Math.round((loaded / total) * 100).toFixed(2)
										),
									},
									file
								);
							},
						})
						.then(({ data: response }) => {
							// console.log('此处需要映射一下', response);
							if (response.code === 200) {
								onSuccess(response.data, file);
							}
						})
						.catch(onError);

					return {
						abort() {
							console.log('upload progress is aborted.');
						},
					};
				}}
				itemRender={(originNode: ReactElement, file: UploadFile) => (
					<UploadItem
						file={file}
						onRemove={() => {
							setFileList(fileList.filter(f => f.uid !== file.uid));
						}}
					/>
				)}
				{...reset}
				fileList={fileList}
				onChange={info => {
					setFileList([...info.fileList]);
				}}
			>
				{fileList.length < limit && <UploadButton />}
			</Upload>
			{title && <p className='io-file-upload__title'>{title}</p>}
			{tips && <p className='io-file-upload__tips'>{tips}</p>}
		</div>
	);
};
