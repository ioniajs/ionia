import request from '../../../utils/request';
import { JcResult } from '../../base';
import { DataChannelVO, RoleChannelVO, RoleDataVO } from './column-permissions.vo';
import { DataOrgChannelDTO, DataChannelDTO } from './column-permissions.dto';

/**
 * 根据组织id获取栏目权限数据
 */
interface OrganizationGainCloumn {
	id?: string; // 组织id
	siteId?: string; // 站点id
}
export async function organizationGainCloumn(
	params: OrganizationGainCloumn
): Promise<JcResult<RoleDataVO>> {
	return request.get('/module-user/cmsmanager/auth/channel/org', {
		params,
	});
}

/**
 * 新增修改栏目权限数据---组织
 */
export async function addColumnOrganization(data: DataOrgChannelDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/channel/org', {
		data,
	});
}

/**
 * 根据角色id获取栏目权限数据
 */
export async function roleGainCloumn(
	params: OrganizationGainCloumn
): Promise<JcResult<RoleDataVO>> {
	return request.get('/module-user/cmsmanager/auth/channel/role', {
		params,
	});
}

/**
 * 新增修改栏目权限数据---角色
 */
export async function addColumnRole(data: DataChannelDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/channel/role', {
		data,
	});
}

/**
 * 根据用户id获取栏目权限数据
 */
export async function userGainCloumn(
	params: OrganizationGainCloumn
): Promise<JcResult<RoleDataVO>> {
	return request.get('/module-user/cmsmanager/auth/channel/user');
}

/**
 * 新增修改栏目权限数据---用户
 */
export async function addColumnUser(data: DataChannelDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/channel/user', {
		data,
	});
}
