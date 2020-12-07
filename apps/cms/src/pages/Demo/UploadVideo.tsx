import React from 'react';
import { VideoUpload } from '@ionia/libs';

export default () => {
    return (
        <VideoUpload title='主视频' limit={3} tips='如有帮助信息，在此处展示' />
    )
}