import request from '../../../utils/request';
import { JcResult } from '../../base';
import { DataOrgDTO, DataRoleDTO, DataUserDTO } from './site-permissions.dto';
import { AdminDataVO } from './site-permissions.vo';

/**
 *  新增修改站点权限数据---阵地
 */
export async function siteCreateModJurisdiction(data: DataOrgDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/data/org', {
		data,
	});
}

/**
 * 新增修改站点权限数据---角色
 */
export async function roleCreateModJurisdiction(data: DataRoleDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/data/role', {
		data,
	});
}

/**
 * 新增修改站点权限数据---用户
 */
export async function userCreateModJurisdiction(data: DataUserDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/data/role', {
		data,
	});
}

/**
 *  根据阵地id获取站点权限数据
 */
export async function siteAcquireData(id: string): Promise<JcResult<AdminDataVO>> {
	return request.get(`/module-user/cmsmanager/auth/data/org/${id}`);
}

/**
 *  根据角色id获取站点权限数据
 */
export async function roleAcquireData(id: string): Promise<JcResult<AdminDataVO>> {
	return request.get(`/module-user/cmsmanager/auth/data/role/${id}`);
}

/**
 *  根据用户id获取站点权限数据
 */
export async function userAcquireData(id: string): Promise<JcResult<AdminDataVO>> {
	return request.get(`/module-user/cmsmanager/auth/data/role/${id}`);
}
