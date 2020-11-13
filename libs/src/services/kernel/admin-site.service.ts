import request from '../../utils/request';
import { JcResult } from '../base';
import { AdminSiteDTO, AdminSiteBatchSaveDTO, AdminSiteSortDTO } from './admin-site.dto';

/**
 * 创建站点
 * @param data 新建站点DTO
 */
export async function createAdminSite(data: AdminSiteDTO): Promise<JcResult<object>> {
	return request.post('/module-kernel/cmsmanager/sites', {
		data,
	});
}

/**
 * 批量创建站点
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
