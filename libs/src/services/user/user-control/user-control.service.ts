import request from '../../../utils/request';
import { JcResult } from '../../base';
import {
	UserSaveDTO,
	UserUpdateCipherDTO,
	UserUpdateCipherMeDTO,
	UserUpdateDTO,
	UserUpdateStatusDTO,
} from './user-control.dto';
import { IdsDTO } from '../../reuse.dto';
import { UserViewVO } from './user-control.vo';

/**
 *  添加用户
 */
export async function addUser(data: UserSaveDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/users/save', {
		data,
	});
}

/**
 * 修改密码
 */
export async function modPassword(data: UserUpdateCipherDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/users/update/cipher', {
		data,
	});
}

/**
 * 修改自己的密码
 */
export async function modMePassword(data: UserUpdateCipherMeDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/users/update/cipher/me', {
		data,
	});
}

/**
 * 修改用户
 */

export async function modUser(data: UserUpdateDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/users/update', {
		data,
	});
}

/**
 * 修改状态
 */
export async function modUserStatus(data: UserUpdateStatusDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/users/update/status', {
		data,
	});
}

/**
 * 用户详情
 */
export async function userDetail(): Promise<JcResult<UserViewVO>> {
	return request.get('/module-user/cmsmanager/users', {});
}

/**
 * 删除用户
 */
export async function deleteUser(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/users/delete', {
		data,
	});
}

/**
 * 批量添加用户
 */
export async function bacthAddUser(data: UserSaveDTO): Promise<JcResult<boolean>> {
	return request('/module-user/cmsmanager/users/save/batch', {
		data,
	});
}
