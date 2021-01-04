import request from '../../../utils/request';
import { JcResult } from '../../base';
import {
	RoleContentVO,
	ContentDataVO,
	ContentRoleParamsVO,
	ContentUserParamsVO,
	ContentOrgParamsVO,
} from './content-permissions.vo';
import {
	DataRoleContentDTO,
	DataUserContentDTO,
	DataOrgContentDTO,
} from './content-permissions.dto';

/**
 * 根据阵地id获取内容权限数据
 */

export async function organizationGainContent(
	params: ContentOrgParamsVO
): Promise<JcResult<ContentDataVO>> {
	return request.get('/module-user/cmsmanager/auth/content/org', {
		params,
	});
}

/**
 * 新增修改内容权限数据---组织
 */
export async function addContentOrganization(data: DataOrgContentDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/content/org', {
		data,
	});
}

/**
 * 根据角色id获取栏目权限数据
 */
export async function roleGainContent(
	params: ContentRoleParamsVO
): Promise<JcResult<ContentDataVO>> {
	return request.get('/module-user/cmsmanager/auth/content/role', {
		params,
	});
}

/**
 * 新增修改内容权限数据---角色
 */
export async function addContentRole(data: DataRoleContentDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/content/role', {
		data,
	});
}

/**
 * 根据用户id获取内容权限数据
 */
export async function userGainContent(
	params: ContentUserParamsVO
): Promise<JcResult<ContentDataVO>> {
	return request.get('/module-user/cmsmanager/auth/content/user');
}

/**
 * 新增修改内容权限数据---用户
 */
export async function addContentUser(data: DataUserContentDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/content/user', {
		data,
	});
}
