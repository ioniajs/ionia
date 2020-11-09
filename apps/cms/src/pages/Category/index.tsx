import routes from '@/routes';
import { message } from 'antd';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { VideoPlayer, RichTextEditor, PictureCropper } from '@ionia/libs';
import React from 'react';

export default () => {
	return (
		<PageContainer pageHeaderRender={() => null}>
			<ProCard split='vertical'>
				<ProCard title={<div>111</div>} colSpan='60%'>
					左侧内容
					{/* <div>
						<VideoPlayer
							url={[
								'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
							]}
						/>
					</div> */}
					{/* <div>
						<AudioPlayer
						// onSuccess={info => {
						// 	console.log(info, 'iiiii');
						// 	if (info.file.response.isSuccess) {
						// 		message.success('上传成功');
						// 	} else {
						// 		message.error('上传失败');
						// 	}
						// }}
						// onFail={() => message.error('上传失败')}
						/>
					</div> */}
					<PictureCropper
						src={
							'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg'
						}
					/>
				</ProCard>
				<ProCard>
					111
					<div>
						<RichTextEditor />
					</div>
				</ProCard>
			</ProCard>
		</PageContainer>
	);
};
