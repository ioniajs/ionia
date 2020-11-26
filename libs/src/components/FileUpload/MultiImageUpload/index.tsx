import { Button, Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import axios from 'axios';
import arrayMove from 'array-move';
import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import './index.less';
import { useLocalStorage } from 'react-use';
import { UploadItem, UploadItemProps } from '../UploadItem';

interface MultiImageUploadProps extends UploadProps {
	title?: string;
	tips?: string;
	limit?: number;
	onChange?: (files: any) => void;
}

export const MultiImageUpload = ({
	title = '批量上传',
	tips,
	limit = 1,
	action = '/module-infra/res/upload',
	defaultFileList,
	onChange,
	...reset
}: MultiImageUploadProps) => {
	const [token] = useLocalStorage('io-token');
	const [fileList, setFileList] = useState<UploadFile<any>[]>(defaultFileList ?? []);

	const onSortEnd = ({ oldIndex, newIndex }: any) => {
		setFileList(arrayMove(fileList, oldIndex, newIndex));
	};

	const GridItem = SortableElement(({ file }: UploadItemProps) => (
		<div className='io-multi-image-upload__grid-item'>
			<UploadItem
				file={file}
				onRemove={() => {
					setFileList(fileList.filter(f => f.uid !== file.uid));
				}}
			/>
		</div>
	));

	const Grid = SortableContainer(({ items }: any) => (
		<div className='io-multi-image-upload__grid'>
			{items.map((value: any, index: number) => (
				<GridItem key={`item-${index}`} index={index} file={value} />
			))}
		</div>
	));

	return (
		<div className='io-multi-image-upload'>
			<Upload
				action={action}
				multiple
				showUploadList={false}
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
							console.log('此处需要映射一下', response);
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
				{...reset}
				fileList={fileList}
				onChange={info => {
					setFileList([...info.fileList]);
				}}
			>
				<Button
					className='io-multi-image-upload__button'
					type='primary'
					icon={<i className='iconfont icon-upload' />}
				>
					{title}
				</Button>
			</Upload>
			<Grid
				helperClass='io-sortable-helper'
				items={fileList}
				axis='xy'
				onSortEnd={onSortEnd}
			/>
		</div>
	);
};
