import request from '../../../utils/request';
import { JcResult } from '../../base';
import { OrgDTO, OrgBatchDTO, OrgResourceDTO, OrgUserDTO } from './practice-base.dto';

/**
 *
 * @param data 新建阵地
 */

export async function addPosition(data: OrgDTO): Promise<JcResult<number>> {
	return request.post('/module-user/cmsmanager/org', {
		data,
	});
}

/**
 *
 * @param data 批量新建阵地
 */
export async function addBatchPosition(data: OrgBatchDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/org/batch', {
		data,
	});
}

/**
 * @param data 新增阵地资源
 */
export async function addPositionResource(data: OrgResourceDTO): Promise<JcResult<number>> {
	return request.post('/module-user/cmsmanager/org/resource', {
		data,
	});
}

/**
 * @param data  移入用户
 */
export async function toTheUser(data: OrgUserDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/org/user', {
		data,
	});
}
