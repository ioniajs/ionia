import React, { useState, useRef } from 'react';
import { Upload, Modal, Tooltip } from 'antd';
import { UploadOutlined, ScissorOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { PictureCropper } from '../PictureCropper';
import './index.less';

function getBase64(file: any) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

interface ImageUploadProps extends UploadProps {
	fileList?: any[];
	action?: string;
	onAdd?: (file: UploadFile) => void;
	limit?: number;
	beforeUpload?: (file: UploadFile) => boolean;
	onRemove?: (file: UploadFile) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = props => {
	const cropRef = useRef<any>(null);
	const {
		// fileList: defaultFileList = [
		// 	{
		// 		uid: '-xxx',
		// 		percent: 50,
		// 		name: 'image.png',
		// 		status: 'uploading',
		// 		url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		// 	},
		// 	{
		// 		uid: '-5',
		// 		name: 'image.png',
		// 		status: 'error',
		// 	},
		// ],
		limit = 1,
		action = 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		fileList: defaultFileList = [],
		onAdd,
		onRemove,
		// action = config.uploadUrl,
		beforeUpload,
		itemRender,
		progress = {
			showInfo: true,
			format: (successPercent?: number) => {
				return '上传中' + successPercent + '%';
			},
			strokeWidth: 4,
			className: 'io-image-upload-progress',
		},
		...reset
	} = props;
	const [state, setState] = useState({
		fileList: defaultFileList,
		previewVisible: false,
		previewImage: '',
		previewTitle: '',
	});

	const handleCancel = () => setState({ ...state, previewVisible: false });

	const handlePreview = async (file: any) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setState({
			...state,
			previewImage: file.url || file.preview,
			previewVisible: true,
			previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
		});
	};

	const handleChange = ({ file, fileList }: UploadChangeParam<UploadFile<any>>) => {
		console.log(file, 'filefile');
		const { status } = file;
		setState({ ...state, fileList });

		if (status === 'done') {
			onAdd && onAdd(file);
		}
	};
	const handleRemove = (file: UploadFile) => {
		// await onRemove(file)
		onRemove && onRemove(file);
	};
	const [cropVisible, setCropVisible] = useState<boolean>(false);
	const [cropImgSrc, setCropImgSrc] = useState<string>();

	const { fileList, previewVisible, previewImage, previewTitle } = state;
	return (
		<div>
			<Upload
				accept='image/*'
				action={action}
				className='io-image-upload'
				multiple={true}
				listType='picture-card'
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				progress={progress}
				// beforeUpload={() => {
				// 	console.log('111');
				// 	return true;
				// }}
				itemRender={(originNode, file, fileList) => {
					console.log(originNode, file, fileList);
					// if (file.status !== 'error' && file.status !== 'uploading') {
					if (file.status === 'done') {
						return (
							<div className='io-item-success-mask'>
								<div className='io-item-success-origin-node'>
									<div className='io-upload-success-img'>
										<img
											// src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg'
											src={file?.response?.url}
											className='io-upload-img'
										/>
										<a href='#'>
											<div className='io-upload-img-mask'>
												<i
													className='iconfont icon-border io-mask-icon'
													onClick={() => {
														setCropVisible(!cropVisible);
														setCropImgSrc(file?.url);
													}}
													title='Crop file'
													// className=''
												/>
												<i
													className='iconfont icon-eye1 io-mask-icon'
													onClick={file => handlePreview(file)}
													title='Preview file'
												/>
												<i
													className='iconfont icon-delete io-mask-icon'
													title='Remove file'
													onClick={async () => {
														await handleRemove(file);
													}}
												/>
											</div>
										</a>
									</div>
								</div>
							</div>
						);
					}
					return originNode;
				}}
				{...reset}
			>
				{fileList.length < limit ? (
					<div>
						<UploadOutlined />
						<div className='ant-upload-text'>上传图片</div>
					</div>
				) : null}
			</Upload>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt='example' style={{ width: '100%' }} src={previewImage} />
			</Modal>
			<PictureCropper
				visible={cropVisible}
				// src={cropImgSrc}
				src={
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg'
				}
				oncancel={() => {
					setCropVisible(false);
				}}
			/>
			{/* <Modal
				title='图片裁剪'
				width='868px'
				visible={cropVisible}
				onCancel={() => {
					setCropVisible(false);
				}}
				cancelText='取消'
				okText='确认'
				onOk={() => {
					console.log(cropRef.current, 'cropRef.current');
					console.log(cropRef.current.cropper.getCroppedCanvas().toDataUrl());
				}}
			>
				<div className='io-pic-cropper-modal-container'>
					<PictureCropper
						ref={cropRef}
						src={
							'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg'
						}
						// onFinsh
					/>
				</div>
			</Modal> */}
		</div>
	);
};
