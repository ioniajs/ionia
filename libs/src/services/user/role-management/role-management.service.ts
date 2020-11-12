import request from '../../../utils/request';
import { JcResult } from '../../base';
import { RoleOperatingDTO } from './role-management.dto';

/**
 * 添加角色
 */
export async function addRole(data: RoleOperatingDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/roles/save', {
		data,
	});
}
