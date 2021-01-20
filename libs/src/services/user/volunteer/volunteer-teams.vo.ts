import { UserDTO } from './volunteer-teams.dto';
//#region 志愿队伍树列表
export interface AdminVolunteerTeamTreeVO {
	address: string; // 地址
	children: AdminVolunteerTeamTreeVO[]; // 下级队伍
	code: string; // 队伍编号
	coordinate: string; // 坐标
	email: string; // 邮箱
	id: number;
	memberNum: number; // 队伍规模
	name: string; // 队伍名称
	orgName: string; // 阵地名称
	principalName: string; // 负责人名称
	principalPhone: string; // 负责人电话
	time: string; // 成立时间
	endCheckTime: string; // 结束成立时间
	username: string; // 用户名
}
//#endregion

//#region 志愿队伍审核分页列表
export interface VolunteerTeamCheckPageVO {
	address: string; // 地址
	checkStatus: number; // 审核状态 1审核通过 2待审核 3审核未通过
	coordinate: string; // 坐标
	createTime: string; // 申请时间
	email: string; // 邮箱
	id: number;
	name: string; // 队伍名称
	notPassReason: string; // 未通过原因
	orgName: string; // 阵地名称
	parentName: string; // 上级队伍名称
	principalName: string; // 负责人名称
	principalPhone: string; // 负责人电话
	username: string; // 用户名
}
//#endregion

// export interface UserDTO {
// 	principalPhoneFlag: boolean; // 公开标识 false不公开 true公开
// 	name: string; // 用户名
// 	phone: string; // 手机号
// }

//#region 志愿队伍审核编辑
export interface AdminVolunteerTeamDetailVO {
	address: string; // 地址
	checkStatus: number; // 审核状态 1审核通过 2待审核 3审核未通过
	checkTime: string; // 审核时间/成立时间
	code: string; // 队伍编号
	conformityScore: number; // 活动符合度
	cooperationScore: number; // 合作能力
	coordinate: string; // 坐标
	createTime: string; // 申请时间
	email: string; // 邮箱
	id: number;
	introduce: string; // 队伍简介
	leadScore: number; // 组织能力
	linkmanList?: UserDTO[]; // 联系人
	logoId: number; // logo资源id
	memberNum: number; // 队伍规模
	name: string; // 队伍名称
	notPassReason: string; // 审核未通过原因
	orgId: number; // 所属阵地id
	parentId: number; // 上级队伍id
	principalName: string; // 负责人姓名
	principalNameFlag: boolean; // 负责人姓名公开标识(false不公开 true公开)
	principalPhone: string; // 负责人手机号
	principalPhoneFlag: boolean; // 负责人手机号公开标识(false不公开 true公开)
	strongPoint?: string[]; // 擅长服务
	totalVolunteerHour: number; // 总志愿服务时长
	totalVolunteerNum: number; //总志愿服务次数
	username: string; // 用户名
}
//#endregion

//#region 志愿队伍列表
export interface AdminVolunteerTeamListVO {
	address: string; // 地址
	children: AdminVolunteerTeamListVO[]; // 下级队伍
	code: string; // 队伍编号
	coordinate: string; // 坐标
	email: string; // 邮箱
	id: string; // id
	logo: string; // 支援队伍图标
	memberNum: number; // 队伍规模
	name: string; // 队伍名称
	orgName: string; // 阵地名称
	principalName: string; // 负责人名称
	principalPhone: string; // 负责人电话
	time: string; // 成立时间
	username: string; // 用户名
}
//#endregion
