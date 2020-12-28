import request from '../../../utils/request';
import { JcResult } from '../../base';
import { ApiItemVO } from '../cmsmanager-api';
import {
	DataOrgDTO,
	DataRoleDTO,
	DataUserDTO,
	PageSitePermUserDTO,
	SiteGroupSiteUserDTO,
	SiteGroupOrgAndRoleDTO,
	SiteOrgAndRoleDTO,
} from './site-permissions.dto';
import {
	AdminDataVO,
	SitePermVO,
	PageSitePermUserVO,
	SitePermOrgVO,
	SiteAuthVO,
	PageSiteAuthUserVO,
} from './site-permissions.vo';

/**
 *  新增修改站点权限数据---阵地
 */
export async function siteCreateModJurisdiction(data: DataOrgDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/site/org', {
		data,
	});
}

/**
 * 新增修改站点权限数据---角色
 */
export async function roleCreateModJurisdiction(data: DataRoleDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/site/role', {
		data,
	});
}

/**
 * 新增修改站点权限数据---用户
 */
export async function userCreateModJurisdiction(data: DataUserDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/auth/site/user', {
		data,
	});
}

/**
 *  根据阵地id获取站点权限数据
 */
export async function siteAcquireData(id: string): Promise<JcResult<AdminDataVO>> {
	return request.get(`/module-user/cmsmanager/auth/site/org/${id}`);
}

/**
 *  根据角色id获取站点权限数据
 */
export async function roleAcquireData(id: string): Promise<JcResult<AdminDataVO>> {
	return request.get(`/module-user/cmsmanager/auth/site/role/${id}`);
}

/**
 *  根据用户id获取站点权限数据
 */
export async function userAcquireData(id: string): Promise<JcResult<AdminDataVO>> {
	return request.get(`/module-user/cmsmanager/auth/site/role/${id}`);
}

/**
 * 站群权限---阵地及角色树形结构
 */
export async function sitepermGroupOrgandrole(
	params: SitePermOrgVO
): Promise<JcResult<SitePermVO>> {
	return request.get('/module-user/cmsmanager/siteperm/group/organdrole', {
		params,
	});
}

/**
 * 站群权限---用户
 */
export async function sitepermGroupPage(
	params: PageSitePermUserDTO
): Promise<JcResult<PageSitePermUserVO>> {
	return request.get('/module-user/cmsmanager/siteperm/group/page', {
		params,
	});
}

/**
 * 保存站群权限---阵地及角色树形结构
 */
export async function saveSitepermGroupOrgandrole(
	data: SiteGroupOrgAndRoleDTO
): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/siteperm/group/organdrole', {
		data,
	});
}
/**
 * 保存  站群权限---用户
 */
export async function saveSitepermGroupUser(
	data: SiteGroupSiteUserDTO
): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/siteperm/group/user', {
		data,
	});
}

/**
 * 站点权限---阵地及角色树形结构
 */
export async function sitepermSiteOrgandrole(params: SitePermOrgVO): Promise<JcResult<SiteAuthVO>> {
	return request.get('/module-user/cmsmanager/siteperm/site/organdrole', {
		params,
	});
}

/**
 * 保存  保存站点权限---阵地及角色树形结构
 */
export async function saveSitepermSite(data: SiteOrgAndRoleDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/siteperm/site/organdrole', {
		data,
	});
}

/**
 * 站点权限---用户
 */
export async function sitepermSitePage(
	params: PageSitePermUserDTO
): Promise<JcResult<PageSiteAuthUserVO>> {
	return request.get('/module-user/cmsmanager/siteperm/site/page', {
		params,
	});
}
