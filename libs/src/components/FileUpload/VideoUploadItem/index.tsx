import React, { useState } from 'react';
import { Image, Tooltip } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { VideoPlayer } from '../../VideoPlayer';
import './index.less';

export interface VideoUploadItemProps {
    file: UploadFile;
    onRemove?: () => void;
}

export const VideoUploadItem = ({ file, onRemove }: VideoUploadItemProps) => {
    const [playerVisible, setPlayerVisible] = useState<boolean>(false);
    let item = null;
    // 上传成功并完成
    if (file.status === 'done') {
        item = (
            <>
                <Image src={file.url && file.thumbUrl} />
            </>
        );
    }
    // 上传失败
    if (file.status === 'error') {
        item = (
            <>
                <i className='iconfont icon-video' />
                <span title='video.mp4'>video.mp4</span>
            </>
        );
    }
    const isError = file.status === 'error';

    const child = (
        <div
            className={`io-video-upload__item ${file.status === 'done' ? 'io-video-upload__item--done' : ''
                } ${isError ? 'io-video-upload__item--error' : ''}`}>
            {item}
            <VideoPlayer
                visible={playerVisible}
                url={file.url}
                playing={playerVisible}
                onCancel={() => setPlayerVisible(false)}
            />
            <div className='io-video-upload__item-action'>
                <div className='item-action-container'>
                    <Tooltip title={isError ? '' : '播放'}>
                        <i
                            className={`iconfont icon-play-circle ${isError ? 'disable' : ''}`}
                            onClick={() => {
                                if (isError) return;
                                setPlayerVisible(true);
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
                    <p className='item-action-description'>北京特战队魔鬼训练营视频介绍</p>
                </div>
            </div>
            <div className='io-video-upload__item-mask' />
        </div>
    );
    return isError ? <Tooltip title='上传错误'>{child}</Tooltip> : child;
}