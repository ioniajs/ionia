//#region  登录DTO
export interface UserLoginDto {
	client_id: string; // client_id
	client_secret: string; // client_secret
	grant_type: string; // oauth2鉴权方式，如password
	cipher: string; // 密码
	username: string; // 用户名
	captcha?:string;
	sessionId?:string
}
//#endregion
