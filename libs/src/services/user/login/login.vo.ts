//#region  获取系统设置VO
export interface UserLoginVO {
	access_token: string; // 登录token
	token_type: string; //token 前缀 用空格隔开
	refresh_token: string; //刷新token
	expires_in: number; //过期时间（单位 秒）
	scope: string; //权限范围
}
//#endregion
