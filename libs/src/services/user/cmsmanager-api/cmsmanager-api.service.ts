import request from '../../../utils/request';
import { JcResult } from '../../base';
import { ApiDTO, ApiIdsDTO } from './cmsmanager-api.dto';
import { ApiItemVO, ApiVO } from './cmsmanager-api.vo';

//新增
export async function addApi(data: ApiDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/api', {
		data,
	});
}
//删除

export async function apiDelete(data: ApiIdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/api/delete', {
		data,
	});
}

//列表
export async function apiList(): Promise<JcResult<ApiItemVO[]>> {
	return request.get('/module-user/cmsmanager/api/list');
}

//分页
interface apiParams {
	apiName?: string;
	apiUrl?: string;
	pageNo?: number;
	pageSize?: number;
	pageSort?: string;
}
export async function apiPage(params: apiParams): Promise<JcResult<ApiVO>> {
	return request.get('/module-user/cmsmanager/api/page', {
		params,
	});
}

//更新

export async function apiUpdate(data: ApiDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/api/update', {
		data,
	});
}

//详情
export async function apiFind(id: string): Promise<JcResult<ApiItemVO>> {
	return request.get(`/module-user/cmsmanager/api/${id}`);
}
