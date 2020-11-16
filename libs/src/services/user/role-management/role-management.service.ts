import request from '../../../utils/request';
import { JcResult, Page } from '../../base';
import { RoleOperatingDTO, RoleMoveDTO } from './role-management.dto';
import { IdsDTO } from '../../reuse.dto';
import { RoleViewVO, RolePageVO } from './role-management.vo';
/**
 * 添加角色
 */
export async function addRole(data: RoleOperatingDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/roles/save', {
		data,
	});
}

/**
 * 删除角色
 */
export async function deleteRole(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/roles/delete', {
		data,
	});
}

/**
 * 移入用户
 */
export async function immigrationUser(data: RoleMoveDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/roles/move/in', {
		data,
	});
}

/**
 * 移出用户
 */
export async function shiftOutUser(data: RoleMoveDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/roles/move/out', {
		data,
	});
}

/**
 * 批量添加角色
 */
export async function batchAddRole(data: RoleOperatingDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/roles/save/batch', {
		data,
	});
}

/**
 * 修改角色
 */
export async function modRole(data: RoleOperatingDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/roles/update', {
		data,
	});
}

/**
 * 角色详情
 */
export async function roleDetail(id: string): Promise<JcResult<RoleViewVO>> {
	return request.get(`/module-user/cmsmanager/roles/${id}`);
}

/**
 * 检验名称是否可用 true 可用 false 不可用
 */
export interface VerifyRole {
	id: string; //id
	name: string; //name
}
export async function roleVerifyName(params: VerifyRole): Promise<JcResult<boolean>> {
	return request.get('/module-user/cmsmanager/roles/unique/name', {
		params,
	});
}

/**
 * 角色导入
 */
export async function roleUploadFile(params: string): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/roles/import', {
		data: params,
		requestType: 'form',
	});
}

/**
 * 角色分页
 */
export interface RolePaging {
	beginUpdateTime: string; // 开始更新时间
	endUpdateTime: string; // 结束更新时间
	name: string; // 角色名
	orgId: string; // 阵地id
	pageNo: number; // 页码, 从1开始计数
	pageSize: number; // 页面大小
	pageSort: string; // 排序字段, 格式: name desc,createTime asc
	updateUser: string; // 更新人
}
export async function rolePaging(params: RolePaging): Promise<JcResult<Page<RolePageVO>>> {
	return request.get('/module-user/cmsmanager/roles/page', {
		params,
	});
}
