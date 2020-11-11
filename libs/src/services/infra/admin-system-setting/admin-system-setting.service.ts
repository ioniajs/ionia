import request from '../../../utils/request';
import { JcResult } from '../../base';
import { SysConfigDTO } from './admin-system-setting.dto';
import { SysConfigVO } from './admin-system-setting.vo';
/**
 * 保存系统设置
 * @param data 保存系统设置 DTO
 */
export async function saveSystemSetting(data: SysConfigDTO): Promise<JcResult<SysConfigDTO>> {
	return request.post('/module-infra/cmsmanager/sysConfig', {
		data,
	});
}

/**
 * 获取系统设置
 */
export async function getSystemSetting(): Promise<JcResult<SysConfigVO>> {
	return request.get('/module-infra/cmsmanager/sysConfig');
}
