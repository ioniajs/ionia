import request from '../../../utils/request';
import { JcResult } from '../../base';
import { RoleOperatingDTO, RoleMoveDTO } from './role-management.dto';
import { IdsDTO } from '../../reuse.dto';
import { RoleViewVO } from './role-management.vo';
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
	return request.post('/module-user/cmsmanager/roles/delete', {});
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
