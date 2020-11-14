//#region  添加用户DTO
export interface UserSaveDTO {
	cipher: string; // 登录密码
	confirm: string; // 重复密码
	email: string; // 邮箱
	orgId: string; //所属阵地
	realName: string; // 真实姓名
	roleIds: string[]; // 角色id集合
	status: number; //状态(1启用 0禁用)
	telephone: string; // 联系方式
	username: string; // 用户名
}
//#endregion

//#region  修改密码
export interface UserUpdateCipherDTO {
	cipher: string; // 修改密码
	confirm: string; // 重复密码
	id: string; // 用户id
}
//#endregion

//#region  修改自己的密码
export interface UserUpdateCipherMeDTO {
	confirm: string; // 确认密码
	newCipher: string; // 新密码
	oldCipher: string; // 原密码
}
//#endregion

//#region 修改用户
export interface UserUpdateDTO {
	email: string; // 邮箱
	id: string; //用户id
	orgId: string; //所属阵地
	realName: string; //真实姓名
	roleIds: string[]; // 角色id集合
	status: string; // 状态（1 启用 0 禁用）
	telephone: string; // 联系方式
}
//#endregion

//#region 修改状态
export interface UserUpdateStatusDTO {
	id: string; // 用户id
	status: string; // 状态（1 启用 0 禁用）
}

//#endregion
