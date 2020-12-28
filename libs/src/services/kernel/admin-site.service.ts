import request from '../../utils/request';
import { JcResult } from '../base';
import { IdsDTO } from '../common.dto';
import {
	AdminSiteDTO,
	AdminSiteBatchSaveDTO,
	AdminSiteSortDTO,
	SiteCfgDTO,
	SiteCopyDTO,
	SiteRevertDTO,
} from './admin-site.dto';

import {
	SiteCfgVO,
	AdminSiteRecycleSummaryVo,
	AdminSiteTreeVO,
	AdminSiteDetailVO,
	AdminSiteTree,
	AdminSiteVO,
	SiteTreeVO,
	AdminSiteTreeAuthVO,
} from './admin-site.vo';

/**
 * 新建站点
 * @param data 新建站点DTO
 */
export async function createAdminSite(data: AdminSiteDTO): Promise<JcResult<object>> {
	return request.post('/module-kernel/cmsmanager/sites', {
		data,
	});
}

/**
 * 批量新建站点
 * @param data 批量新建站点DTO
 */
export async function createAdminSiteBatchSave(
	data: AdminSiteBatchSaveDTO
): Promise<JcResult<object>> {
	return request.post('/module-kernel/cmsmanager/sites/batch', {
		data,
	});
}

/**
 * 站点排序
 * @param data 站点排序DTO
 */
export async function sortAdminSite(data: AdminSiteSortDTO): Promise<JcResult<object>> {
	return request.post('/module-kernel/cmsmanager/sites/sort', {
		data,
	});
}

/**
 * 保存修改站点扩展配置
 */
export async function saveUpdateSite(data: SiteCfgDTO): Promise<JcResult<boolean>> {
	return request.post('/module-kernel/cmsmanager/sites/cfg', {
		data,
	});
}

/**
 * 站点扩展配置详情
 */
export async function siteConfigDetail(id: string): Promise<JcResult<SiteCfgVO>> {
	return request.get(`/module-kernel/cmsmanager/sites/cfg/${id}`);
}

/**
 * 复制站点
 */

export async function copySite(data: SiteCopyDTO): Promise<JcResult<number>> {
	return request.post('/module-kernel/cmsmanager/sites/copy', {
		data,
	});
}

/**
 * 批量删除(移入回收站)
 */
export async function batchDetailSite(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-kernel/cmsmanager/sites/delete', {
		data,
	});
}

/**
 * 禁用站点
 */
export async function disableSite(id: string): Promise<JcResult<boolean>> {
	return request.post(`/module-kernel/cmsmanager/sites/disable/${id}`);
}

/**
 * 启用站点
 */
export async function enableSite(id: string): Promise<JcResult<boolean>> {
	return request.post(`/module-kernel/cmsmanager/sites/enable/${id}`);
}

/**
 * 回收站列表
 */
export async function recycleSiteList(): Promise<JcResult<[AdminSiteRecycleSummaryVo]>> {
	return request.get('/module-kernel/cmsmanager/sites/recycle');
}

/**
 * 回收站删除
 */
export async function recycleSiteDetail(data: IdsDTO): Promise<JcResult<object>> {
	return request.post(`/module-kernel/cmsmanager/sites/recycle/delete`, {
		data,
	});
}

/**
 * 回收站还原
 */
export async function recycleSiteRestore(data: SiteRevertDTO): Promise<JcResult<object>> {
	return request.post(`/module-kernel/cmsmanager/sites/recycle/revert`, {
		data,
	});
}

/**
 * 获取站点树
 */
export async function gainSiteTree(searchStr?: string): Promise<JcResult<AdminSiteTree>> {
	return request.get(`/module-kernel/cmsmanager/sites/tree`, {
		params: {
			searchStr,
		},
	});
}

/**
 * 修改站点
 */
export async function amendSite(data: AdminSiteDTO): Promise<JcResult<object>> {
	return request.post('/module-kernel/cmsmanager/sites/update', {});
}

/**
 * 站点详情
 */
export async function siteDetail(id: string): Promise<JcResult<AdminSiteDetailVO>> {
	return request.get(`/module-kernel/cmsmanager/sites/${id}`);
}

/**
 * 校验站点目录，true通过，false不通过
 */
export interface SiteCatalogue {
	dir: string; //站点目录
	siteId?: string; // 站点id
}
export async function verifySiteCatalogue(params: SiteCatalogue): Promise<JcResult<boolean>> {
	return request.get('/module-kernel/cmsmanager/sites/dir/unique', {
		params,
	});
}

/**
 * 校验站点名称，true通过，false不通过
 */
export interface SiteName {
	name: string; //站点名称
	siteId?: string; // 站点id
}
export async function verifySiteName(params: SiteName): Promise<JcResult<boolean>> {
	return request.get('/module-kernel/cmsmanager/sites/name/unique', {
		params,
	});
}

/**
 * 回收站还原校验,是否存在已删除的上级站点
 */
export async function recycleRestoreVerify(data: IdsDTO): Promise<JcResult<AdminSiteVO>> {
	return request.post('/module-kernel/cmsmanager/sites/recycle/check', {
		data,
	});
}

/**
 * 获取站点树 -- 进群权限
 */
export async function gainSiteTreeEnter(searchStr: string): Promise<JcResult<SiteTreeVO>> {
	return request.get('/module-kernel/cmsmanager/sites/tree');
}

/**
 * 获取站点树 -- 站点权限
 */
export async function gainSiteTreeAuth(
	searchStr: string
): Promise<JcResult<AdminSiteTreeAuthVO[]>> {
	return request.get('/module-kernel/cmsmanager/sites/tree/auth', {
		params: {
			searchStr
		}
	});
}

/**
 * 获取站点树 -- 无权限
 */
export async function gainSiteTreeNoauth(searchStr: string): Promise<JcResult<AdminSiteTreeVO[]>> {
	return request.get('/module-kernel/cmsmanager/sites/tree/noauth');
}
