import React, { useState, useRef, forwardRef, useEffect } from 'react';
import { Button, Input, Form, Row, Col } from 'antd';
import {
	PlusOutlined,
	MinusOutlined,
	RedoOutlined,
	UndoOutlined,
	LockOutlined,
	UnlockOutlined,
} from '@ant-design/icons';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './index.less';
import { logger } from '../..';
import Modal from 'antd/lib/modal/Modal';

interface CropBox {
	width?: number;
	height?: number;
}
interface PictureCropperProps {
	src?: string;
	ref?: any;
	visible?: boolean;
	oncancel?: () => void;
}

const defaultSrc =
	'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg';

export const PictureCropper: React.FC<PictureCropperProps> = forwardRef((props, ref: any) => {
	const { src = defaultSrc, visible = false, oncancel } = props;
	const cropInstance = useRef<any>(null);
	const [cropForm] = Form.useForm();
	const [image, setImage] = useState<string | undefined>(src);
	const [cropper, setCropper] = useState<any>();
	const [cropData, setCropData] = useState('#');
	const [addNewCropSize, setAddNewCropSize] = useState<boolean>(false);
	const [cropBoxList, setCropBoxList] = useState<Array<CropBox>>([{ width: 60, height: 60 }]);
	return (
		<Modal
			visible={visible}
			title='图片裁剪'
			width='868px'
			onCancel={oncancel}
			cancelText='取消'
			okText='确认'
			onOk={() => {
				console.log(cropper.getCroppedCanvas().toDataURL(), 'cccc');
			}}
		>
			<div className='io-pic-cropper-modal-container'>
				<div className='io-piccropper-container'>
					<div className='io-picropper-left'>
						<Cropper
							ref={ref}
							style={{ height: 420, width: '100%' }}
							initialAspectRatio={1}
							preview='.img-preview'
							src={src}
							viewMode={1}
							guides={true}
							minCropBoxHeight={10}
							minCropBoxWidth={10}
							responsive={true}
							autoCropArea={1}
							checkOrientation={false}
							onInitialized={instance => {
								setCropper(instance);
							}}
						/>
						<div className='io-piccopper-action'>
							<div className='io-piccropper-zoom'>
								图片缩放：
								<div className='io-piccropper-zoom-content'>
									<Button
										size='small'
										className='io-piccropper-zoom-minus'
										onClick={() => {
											cropper.zoom(-0.1);
										}}
									>
										<MinusOutlined className='io-piccropper-zoom-minus-icon' />
									</Button>
									<div className='io-piccropper-zoom-number'>100%</div>
									<Button
										className='io-piccropper-zoom-plus'
										size='small'
										onClick={() => {
											cropper.zoom(0.1);
										}}
									>
										<PlusOutlined className='io-piccropper-zoom-plus-icon' />
									</Button>
								</div>
							</div>
							<div className='io-piccropper-rotate'>
								<UndoOutlined
									className='io-piccropper-rotate-undo'
									onClick={() => {
										cropper.rotate(-10);
									}}
								/>
								&nbsp;&nbsp;
								<RedoOutlined
									className='io-piccropper-rotate-redo'
									onClick={() => {
										cropper.rotate(10);
									}}
								/>
							</div>
						</div>
					</div>
					<div className='io-picropper-right'>
						<div className='io-piccropper-preview-box'>
							<div
								className='img-preview'
								// style={{ width: '100%', height: '300px', float: 'right', marginRight: '60px' }}
							/>
						</div>
						<div className='io-piccropper-setting'>
							<div>
								<p>裁剪框尺寸</p>
								<div className='io-crop-box-setting'>
									<Form form={cropForm}>
										<Row>
											<Col>
												<Form.Item
													name='cropBoxWidth'
													label=''
													// initialValue={228}
												>
													<Input
														className='io-crop-box_input'
														onBlur={e => {
															logger.debug(e.target.value);
															logger.debug(
																cropper.getCropBoxData(),
																'裁剪框大小'
															);
															const cropBoxValue = cropper.getCropBoxData();
															const containerData = cropper.getContainerData();
															const cropWidthValue: number = Number(
																e.target.value
															);
															// 根据输入的长算出裁剪框的比例，从而得到裁剪框的高
															const rateValue =
																cropWidthValue / cropBoxValue.width;
															// 现裁剪框的高 = 裁剪框高度 * 比例
															const cropHeightValue =
																cropBoxValue.height * rateValue;
															const cropTopValue = Math.round(
																(containerData.height -
																	cropHeightValue) /
																	2
															);
															const cropLefttValue = Math.round(
																(containerData.width -
																	cropWidthValue) /
																	2
															);
															cropper.setCropBoxData({
																top: cropTopValue,
																left: cropLefttValue,
																width: cropWidthValue,
																height: cropHeightValue,
															});
															cropForm.setFieldsValue({
																cropBoxHeight: cropHeightValue,
															});
														}}
													/>
												</Form.Item>
											</Col>
											<Col>
												&nbsp;
												<UnlockOutlined className='io-setting-unlock-icon' />
												&nbsp;
											</Col>
											<Col>
												<Form.Item
													name='cropBoxHeight'
													// initialValue={228}
												>
													<Input className='io-crop-box_input' />
												</Form.Item>
											</Col>
										</Row>
									</Form>
								</div>
							</div>
							<div className='io-crop-used-size-setting'>
								<p>常用尺寸</p>
								{(cropBoxList || []).map((corpItem: any) => {
									return (
										<Button
											type='dashed'
											size='small'
											className='io-used-size-item'
											onClick={() => {
												const containerData = cropper.getContainerData();
												logger.debug(containerData, '容器数据');
												const leftValue = Math.round(
													(containerData.width - corpItem.width) / 2
												);
												const topValue = Math.round(
													(containerData.height - corpItem.height) / 2
												);
												cropper.setCropBoxData({
													top: topValue,
													left: leftValue,
													width: corpItem.width,
													height: corpItem.height,
												});
												// cropForm.setFieldsValue({
												// 	cropBoxHeight: corpItem.height,
												// 	cropBoxWidth: corpItem.height,
												// });
												logger.debug(cropper.getData(), 'jhhhh');
											}}
										>
											{corpItem.width}x{corpItem.height}
										</Button>
									);
								})}
							</div>
							<div className='io-add-crop-size'>
								{!addNewCropSize && (
									<Button
										onClick={() => {
											setAddNewCropSize(true);
										}}
										size='small'
									>
										添加
									</Button>
								)}
								{addNewCropSize && (
									<div className='io-add-crop-size-value'>
										<Form form={cropForm}>
											<Row>
												<Col>
													<Form.Item
														name='usedWidth'
														label=''
														className='io-add-size-form'
													>
														<Input
															className='io-add-size-form_input'
															placeholder='宽'
														/>
													</Form.Item>
												</Col>
												<Col>
													<span style={{ textAlign: 'center' }}>
														&nbsp;*&nbsp;
													</span>
												</Col>
												<Col>
													<Form.Item
														name='usedHeight'
														label=''
														className='io-add-size-form'
													>
														<Input
															placeholder='高'
															className='io-add-size-form_input'
														/>
													</Form.Item>
												</Col>
												<Col>
													<Form.Item>
														<Button
															size='small'
															style={{ marginLeft: '8px' }}
															onClick={() => {
																const tempValue = cropForm.getFieldsValue(
																	['usedWidth', 'usedHeight']
																);
																logger.debug(tempValue, 'retet');
																const param = {
																	width: Number(
																		tempValue.usedWidth
																	),
																	height: Number(
																		tempValue.usedHeight
																	),
																};
																setCropBoxList(
																	cropBoxList.concat(param)
																);
																setAddNewCropSize(false);
																cropForm.setFieldsValue({
																	usedWidth: '',
																	usedHeight: '',
																});
															}}
														>
															确认
														</Button>
													</Form.Item>
												</Col>
											</Row>
										</Form>
									</div>
								)}
							</div>
						</div>
					</div>
					{/* <div>
						<Button
							onClick={() => {
								// logger.debug(cropper.getCroppedCanvas().toDataURL(), 'xxxxxxxx');
								if (typeof cropper !== 'undefined') {
									console.log(cropper.getCroppedCanvas(), 'getgetget');
									setCropData(cropper.getCroppedCanvas().toDataURL());
								}
							}}
						>
							确认
						</Button>
					</div> */}
				</div>
			</div>
		</Modal>
	);
});
