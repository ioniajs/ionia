import request from '../../../utils/request';
import { JcResult } from '../../base';
import { UploadResultVO } from './admin-the-repository.vo';

/**
 * 文件上传
 */
export async function fileUpload(params: []): Promise<JcResult<UploadResultVO[]>> {
	return request.post('/module-infra/res/upload', {
		data: params,
		requestType: 'form',
	});
}
