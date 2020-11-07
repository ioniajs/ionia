import request from '../../../utils/request';
import { JcResult } from '../../base';
import { SysConfigDTO } from './admin-system-setting.dto';

/**
 * 保存系统设置
 * @param data 保存系统设置 DTO
 */
export async function saveSystemSetting(data: SysConfigDTO): Promise<JcResult<SysConfigDTO>> {
	return request.post('/module-infra/cmsmanager/sysConfig', {
		data,
	});
}
