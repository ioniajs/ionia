//#region 志愿者审核
export interface VolunteerCheckDTO {
	checkStatus: number; // 审核状态 1审核通过 3审核未通过
	id: number;
	notPassReason: string; // 审核未通过原因
}
//#endregion

//#region 志愿者审核编辑
export interface VolunteerDTO {
	birthday: string; // 出生日期
	clan: number | string; // 民族
	currentLocation: string; // 现居地
	domicile: number; // 籍贯
	education: number | string; // 学历
	email: string; // 邮箱
	fullName: string; // 姓名
	gender: number | string; // 性别
	idCard: string; // 身份证
	occupation: number | string; // 职业
	phone: string; // 手机号
	politicalLook: number | string; // 政治面貌
	teamId: number | string; // 支援队伍id
	type: number | string; // 志愿者类型
	username: string; // 用户名
	avatarId?: number | string; // 头像资源id
	checkStatus?: number; // 审核状态 1审核通过 2待审核 3审核未通过
	cipher?: string; // 密码
	id?: number; // 志愿者id
	introduce?: string; // 队伍简介
	notPassReason?: string; // 未通过原因
	strongPoint?: number[]; // 擅长服务
	workUnit?: string; // 工作单位
}
//#endregion
