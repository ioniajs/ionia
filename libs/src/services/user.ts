import request from '../utils/request';
import { CreateUserApiRes, CreateUserDTO } from './dtos';

/**
 * 创建用户
 * @param dto 创建用户DTO
 */
async function creatUser(dto: CreateUserDTO): Promise<CreateUserApiRes> {
	return request.post('/user', { data: dto });
}

// const result: JcResult<CreateUserRes> = await creatUser({
// 	name: '饶志',
// });

// if (result.code === 200) {
// } else {
// }
