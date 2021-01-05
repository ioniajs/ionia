export interface UserDTO {
	principalPhoneFlag: boolean; // 公开标识 false不公开 true公开
	name: string; // 用户名
	phone: string; // 手机号
}

//#region 志愿队伍审核编辑
export interface AdminVolunteerTeamDTO {
	address: string; // 地址
	cipher: string; // 登录密码
	coordinate: string; // 坐标
	email: string; // 邮箱
	name: string; // 队伍名称
	orgId: number; // 阵地id
	principalName: string; // 负责人姓名
	principalNameFlag: boolean; // 负责人姓名公开标识(false不公开 true公开)
	principalPhone: string; // 负责人手机号
	principalPhoneFlag: boolean; // 负责人手机号公开标识(false不公开 true公开)
	username: string; // 用户名
	checkStatus?: number; // 审核状态 1审核通过 3审核未通过
	id?: number;
	introduce?: string; // 队伍简介
	linkmanList?: UserDTO[]; // 联系人
	logoId?: number; // 队伍logo
	notPassReason?: string; // 审核未通过原因
	parentId?: number; // 上级队伍
	strongPoint?: number[]; // 擅长服务
}
//#endregion
