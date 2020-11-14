import request from '../../../utils/request';
import { JcResult } from '../../base';
import { OrgDTO, OrgBatchDTO, OrgResourceDTO, OrgUserDTO, SortDto } from './practice-base.dto';
import { IdsDTO } from '../../reuse.dto';
import { OrgResourceVO, OrgDetailsVO } from './practice-base.vo';
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

/**
 * 删除阵地 --可批量
 */
export async function deletePosition(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/org/delete', {
		data,
	});
}

/**
 * 删除阵地资源
 */
export async function deletePositionResource(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/org/resource/delete', {
		data,
	});
}

/**
 * 修改阵地资源
 */
export async function modPositionResource(data: OrgResourceDTO): Promise<JcResult<number>> {
	return request.post('/module-user/cmsmanager/org/resource/update', {
		data,
	});
}

/**
 * 阵地资源详情
 */
export async function positionResourceDetail(id: string): Promise<JcResult<OrgResourceVO>> {
	return request.get(`/module-user/cmsmanager/org/resource/${id}`);
}

/**
 * 阵地排序
 */
export async function positionSort(data: SortDto): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/org/sort', {
		data,
	});
}

/**
 * 修改阵地
 */
export async function modposition(data: OrgDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/org/update', {
		data,
	});
}

/**
 * 批量删除用户
 */
export async function batchDeleteUser(data: OrgUserDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/org/user/remove', {
		data,
	});
}

/**
 * 阵地详情
 */
export async function positionDetail(id: string): Promise<JcResult<OrgDetailsVO>> {
	return request.get(`/module-user/cmsmanager/org/resource/${id}`);
}
