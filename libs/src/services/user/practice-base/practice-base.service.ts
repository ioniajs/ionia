import request from '../../../utils/request';
import { JcResult, Page } from '../../base';
import { OrgDTO, OrgBatchDTO, OrgResourceDTO, OrgUserDTO, SortDTO } from './practice-base.dto';
import { IdsDTO } from '../../common.dto';
import { OrgResourceVO, OrgDetailsVO, OrgVO, OrgSmallVO, OrgMoveInVO } from './practice-base.vo';
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
export async function positionSort(data: SortDTO): Promise<JcResult<boolean>> {
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
	return request.get(`/module-user/cmsmanager/org/${id}`);
}

/**
 * 阵地列表---树形结构
 */
export interface PositionList {
	crux?: string; // 阵地名称或编号
	isAll?: boolean | string; // 是否包含下级阵地
	parentId?: string; // 父级ID
}
export async function positionList(params: PositionList): Promise<JcResult<OrgVO[]>> {
	return request.get('/module-user/cmsmanager/org/list', {
		params,
	});
}

/**
 * 阵地下拉列表---采用懒加载
 */
export interface PositionPull {
	parentId?: string; // 父级ID
}
export async function positionPullList(params: PositionPull): Promise<JcResult<OrgSmallVO[]>> {
	return request.get('/module-user/cmsmanager/org/pull', {
		params,
	});
}

/**
 * 校验阵地名称，true通过，false不通过
 */
export interface PositionName {
	name: string; // 阵地名称
	orgId: string; // 阵地ID
}
export async function verifyPositionName(params: PositionName): Promise<JcResult<boolean>> {
	return request.get('/module-user/cmsmanager/org/unique', {
		params,
	});
}

/**
 * 阵地资源列表分页
 */
export interface PoListPaging {
	orgId?: string; // 阵地id
	pageNo?: string; // 页码, 从1开始计数
	pageSize?: number; // 页面大小
	pageSort?: string; // 排序字段, 格式: name desc,createTime asc
	title?: string; // 标题
}
export async function positionalListPaging(
	params: PoListPaging
): Promise<JcResult<Page<OrgResourceVO>>> {
	return request.get('/module-user/cmsmanager/org/resource/page', {
		params,
	});
}

/**
 * 阵地移入用户分页
 */
export interface PositionalUserListPaging {
	name?: string; //用户名/姓名
	orgId?: string; //组织id
	pagNo?: number; // 页码。从1开始计数
	pageSize?: number; // 页面大小
	pageSort?: string; // 排序字段, 格式: name desc,createTime asc
}
export async function positionalUserListPaging(
	params: PositionalUserListPaging
): Promise<JcResult<Page<OrgMoveInVO>>> {
	return request.get('/module-user/cmsmanager/org/list/in', {
		params,
	});
}
