import React, { useState, ReactElement } from 'react';
import { Upload, Select, Button } from 'antd';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, UploadListType } from 'antd/lib/upload/interface';
import { logger } from '../../';
import './index.less';

interface SecretLevelProps {
	key: string;
	value: string;
}

interface AnnexUploadProps extends UploadProps {
	fileList?: any[];
	onAdd?: (file: UploadFile) => void;
	beforeUpload?: (file: UploadFile) => boolean;
	secretLevelList?: Array<SecretLevelProps>;
	action?: string;
	onChange?: (info: UploadChangeParam<UploadFile<any>>) => void;
	onSuccess?: (info: UploadChangeParam<UploadFile<any>>) => void;
	onFail?: (info: UploadChangeParam<UploadFile<any>>) => void;
}

export const AnnexUpload: React.FC<AnnexUploadProps> = props => {
	const {
		fileList,
		secretLevelList = [
			{ key: '1', value: '秘密' },
			{ key: '2', value: '机密' },
			{ key: '3', value: '绝密' },
		],
		onSuccess,
		onFail,
		onChange = ({ file, fileList }: UploadChangeParam<UploadFile<any>>) => {
			if (file.status !== 'uploading') {
				logger.debug(file, fileList, 'onChangefileeeee');
			}
		},
		...reset
	} = props;
	return (
		<Upload
			className='io-annex-upload'
			fileList={fileList}
			onChange={onChange}
			itemRender={(originNode: ReactElement, file: UploadFile, fileList?: object[]) => {
				// logger.debug(originNode, file, 'ffff');
				// if (file.status !== 'error' && file.status !== 'uploading') {
				return (
					<div className='io-annex-upload-list'>
						{originNode}
						<span className='io-upload-list-secret-level'>
							<Select
								className='io-upload-secret-selct'
								placeholder='选择密级'
								allowClear
								onSelect={e => {
									console.log(e, 'eeeee');
								}}
							>
								{(secretLevelList || []).map(item => {
									return (
										<Select.Option key={item.key} value={item.key}>
											{item.value}
										</Select.Option>
									);
								})}
							</Select>
						</span>
					</div>
				);
				// }
				// return <div className='io-annex-upload-list'>{originNode}</div>;
			}}
		>
			<Button type='primary'>
				<i className='iconfont icon-upload'></i>
				上传附件
			</Button>
		</Upload>
	);
};
