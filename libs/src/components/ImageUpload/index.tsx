import React, { useState } from 'react';
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
}

export const ImageUpload: React.FC<ImageUploadProps> = props => {
	const {
		fileList: defaultFileList = [
			{
				uid: '-xxx',
				percent: 50,
				name: 'image.png',
				status: 'uploading',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			},
			{
				uid: '-5',
				name: 'image.png',
				status: 'error',
			},
		],
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
	const [cropVisible, setCropVisible] = useState<boolean>(false);

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
	const handleRemove = async (file: UploadFile) => {
		// await onRemove(file)
	};

	const { fileList, previewVisible, previewImage, previewTitle } = state;
	return (
		<div>
			<Upload
				accept='image/*'
				className='io-image-upload'
				multiple={true}
				listType='picture-card'
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				progress={progress}
				beforeUpload={() => {
					console.log('111');
					return false;
				}}
				itemRender={(originNode, file, fileList) => {
					// console.log(originNode, file, fileList);
					if (file.status !== 'error' && file.status !== 'uploading') {
						return (
							<div className='io-item-success-mask'>
								<div className='io-item-success-origin-node'>
									<div className='io-upload-success-img'>
										<img
											src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg'
											className='io-upload-img'
										/>
										<a href='#'>
											<div className='io-upload-img-mask'>
												<ScissorOutlined
													onClick={() => {
														setCropVisible(!cropVisible);
													}}
													className='io-mask-icon'
												/>
												<EyeOutlined
													onClick={file => handlePreview(file)}
													className='io-mask-icon'
												/>
												<DeleteOutlined
													onClick={async () => {
														await handleRemove(file);
													}}
													className='io-mask-icon'
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
				<div>
					<UploadOutlined />
					<div className='ant-upload-text'>上传图片</div>
				</div>
			</Upload>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt='example' style={{ width: '100%' }} src={previewImage} />
			</Modal>
			<Modal
				title='图片裁剪'
				visible={cropVisible}
				onCancel={() => {
					setCropVisible(false);
				}}
				cancelText='取消'
				okText='确认'
				width='868px'
			>
				<PictureCropper
					src={
						'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg'
					}
				/>
			</Modal>
		</div>
	);
};
