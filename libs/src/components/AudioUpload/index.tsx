import React, { ReactElement, useRef, useState } from 'react';
import { Upload, Button, Tooltip } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { UploadChangeParam, UploadProps } from 'antd/lib/upload';
import { AudioPlayer } from '../AudioPlayer';
import { logger } from '../../';
import './index.less';

interface AudioUploadProps extends UploadProps {
    fileList?: any[];
    // onChange?: (info: UploadChangeParam<UploadFile<any>>) => void;
    onAdd?: (file: UploadFile) => void;
}

export const AudioUpload: React.FC<AudioUploadProps> = props => {
    const {
        fileList: defaultFileList = [
			{
				uid: '-xxx',
				// percent: 50,
				name: 'video.mp4',
				status: 'success',
				url:
					'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
				size: 200,
				type: '',
				thumbUrl:
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg',
            },
            {
				uid: '001',
				size: 100,
				name: 'video.mp4',
				url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
				status: 'uploading',
				percent: 50,
				type: '',
            },
            {
                uid: '002',
				size: 100,
				name: 'video.mp4',
				url: 'https://filesamples.com/samples/video/ogv/sample_640x360.ogv',
				// status: 'uploading',
				percent: 99,
				type: '',
            },
			{
				uid: '003',
				size: 100,
				name: 'video.mp4',
				url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
				status: 'error',
				percent: 50,
				type: '',
			},
		],
        onChange,
        onAdd,
    } = props;
    const handleOnChange = ({ file, fileList, event }: UploadChangeParam<UploadFile<any>>) => {
        const { status } = file;
		setFileList(fileList);

		if (status === 'done') {
			onAdd && onAdd(file);
		}
    }
    const [play, setPlay] = useState<boolean>(false);
    const [fileList, setFileList] = useState(defaultFileList);
    const [audioPlayerSrc, setAudioPlayerSrc] = useState<string | undefined>();
    return(
        <div className='io-audio-upload-container'>
            <Upload
                fileList={fileList}
                onChange={handleOnChange}
                className='io-audio-upload'
                itemRender={(originNode: ReactElement, file: UploadFile, fileList?: object[]) => {
                    // logger.debug(originNode, file, fileList, 'XXXX');
                    if (file.status === 'error') {
                        return(
                            <Tooltip title='上传错误' className='io-audio-upload-tooltip'>
                                <div className='io-audio-upload-list-other'>
                                    {originNode}
                                </div>  
                            </Tooltip>
                        )
                    } else if (file.status === 'success') {
                        return (
                            <div className='io-audio-upload-success-container'>
                                <div className='io-audio-upload-list'>
                                    {/* {originNode} */}
                                    {!play && <i className='iconfont icon-attachment io-success-item-icon' />}
                                    {!!play && <i className='iconfont icon-setting io-success-item-icon' />}
                                    <span className='io-audio-upload-file-name'>此处为音频名称此处为音频名称此处为音</span>
                                    <i className='iconfont icon-delete io-success-item-icon' />
                                    {!play && <i
                                        className='iconfont icon-play-circle io-success-item-icon'
                                        onClick={async () => {
                                            setPlay(!play);
                                            await setAudioPlayerSrc('https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3');
                                        }}
                                    />}
                                    {!!play && <i
                                        className='iconfont icon-timeout io-success-item-icon'
                                        onClick={() => {
                                            setPlay(!play);
                                        }}
                                    />}
                                </div> 
                                {/* <a href='#'>
                                    <div className='io-audio-upload-success-mask' />
                                </a>  */}
                            </div>
                        )
                    }
                    return (
                        <div className='io-audio-upload-list-other'>{originNode}</div>
                    )
                }}
            >
                <Button type='primary' className='io-audio-upload-but'>
                    <i className='iconfont icon-upload'></i>
                    上传音频
                </Button>
            </Upload>
            <div style={{ display: 'none'}}>
                <AudioPlayer playing={play} src={audioPlayerSrc} />
            </div>
        </div>
    )
}
