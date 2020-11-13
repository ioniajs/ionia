import request from '../../utils/request';
import { JcResult } from '../base';
import { IdsDTO } from '../reuse.dto';
import {
	AdminSiteDTO,
	AdminSiteBatchSaveDTO,
	AdminSiteSortDTO,
	SiteCfgDTO,
	SiteCopyDTO,
} from './admin-site.dto';

import {
	SiteCfgVO,
	AdminSiteRecycleSummaryVo,
	AdminSiteTreeVO,
	AdminSiteDetailVO,
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
export async function batchDetailSite(data: IdsDTO): Promise<JcResult<object>> {
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
export async function recycleSiteList(): Promise<JcResult<AdminSiteRecycleSummaryVo>> {
	return request.get('/module-kernel/cmsmanager/sites/recycle');
}

/**
 * 回收站删除
 */
export async function recycleSiteDetail(id: string): Promise<JcResult<object>> {
	return request.post(`/module-kernel/cmsmanager/sites/recycle/delete/${id}`);
}

/**
 * 回收站还原
 */

export async function recycleSiteRestore(id: string): Promise<JcResult<object>> {
	return request.post(`/module-kernel/cmsmanager/sites/recycle/revert/${id}`);
}

/**
 * 获取站点树
 */
// export async function gainSiteTree(data: ) {

// }

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
