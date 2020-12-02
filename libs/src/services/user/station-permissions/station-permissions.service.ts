import request from '../../../utils/request';
import { JcResult } from '../../base';
import { SiteGroupOrgDTO, SiteGroupRoleDTO, SiteGroupUserDTO } from './station-permissions.dto';
import { AdminSiteGroupVO } from './station-permissions.vo';

/**
 * 新增修改站群权限数据---阵地
 */
export async function positionAddModJurisdiction(
	data: SiteGroupOrgDTO
): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/siteGroup/org', {
		data,
	});
}

/**
 * 根据阵地id获取站群树
 */
export async function positionDetailTree(id: string): Promise<JcResult<AdminSiteGroupVO>> {
	return request.get(`/module-user/cmsmanager/auth/siteGroup/org/${id}`);
}

/**
 * 新增修改站群权限数据---角色
 */
export async function roleAddModJurisdiction(data: SiteGroupRoleDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/siteGroup/role', {
		data,
	});
}

/**
 * 根据角色id获取站群树
 */
export async function roleDetailTree(id: string): Promise<JcResult<AdminSiteGroupVO>> {
	return request.get(`/module-user/cmsmanager/auth/siteGroup/role/${id}`);
}

/**
 * 新增修改站群权限数据---用户
 */
export async function userAddModJurisdiction(data: SiteGroupUserDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/siteGroup/user', {
		data,
	});
}

/**
 * 根据用户id获取站群树
 */
export async function userDetailTree(id: string): Promise<JcResult<AdminSiteGroupVO>> {
	return request.get(`/module-user/cmsmanager/auth/siteGroup/user/${id}`);
}
