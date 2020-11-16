import request from '../../../utils/request';
import { JcResult } from '../../base';
import { UserLoginDto } from './login.dto';
import {UserLoginVO} from './login.vo'
/**
 * 登录
 * @param data 登录 DTO
 */
export async function userLogin(data: UserLoginDto): Promise<JcResult<UserLoginVO>> {
	return request.post('/module-user/oauth/token', {
		data,
	});
}
