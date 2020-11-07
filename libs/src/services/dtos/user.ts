import { JcResult } from './base';

export interface CreateUserDTO {
	name: string;
}

export interface CreateUserRes {}

export type CreateUserApiRes = JcResult<CreateUserRes>;
