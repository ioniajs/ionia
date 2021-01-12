import request from '../../../utils/request';
import { JcResult } from '../../base';
import { UserLoginDto } from './login.dto';
import { UserLoginVO } from './login.vo';
import Qs from 'qs';
/**
 * 登录
 * @param data 登录 DTO
 */
export async function userLogin(data: UserLoginDto): Promise<JcResult<UserLoginVO>> {
	return request.post('/module-user/oauth/token', {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: Qs.stringify(data),
	});
}

export async function userLogout(): Promise<JcResult<boolean>> {
	return request.post(`/module-user/logout`);
}
