//#region  志愿者管理分页VO
export interface VolunteerPageVO {
	birthday: string; // 出生日期
	checkStatus: number; // 审核状态
	checkTime: string; // 加入时间/审核时间
	clan: string; // 民族
	code: string; // 志愿者编号
	createTime: string; // 申请时间
	domicile: string; // 籍贯
	education: string; // 学历
	email: string; // 邮箱
	fullName: string; // 姓名
	gender: string; // 性别
	id: number; // id
	idCard: string; // 证件号码
	occupation: string; // 职业
	phone: string; // 手机号
	politicalLook: string; // 政治面貌
	teamName: string; // 队伍名称
	username: string; // 用户名
	workUnit: string; //工作单位
}
//#endregion

//#region 志愿者表彰
export interface PraiseVO {
	dataId: number; // 对应表彰数据字典id
	num: number; // 表彰次数
}
//#endregion

//#region 志愿者详情
export interface VolunteerDetailVO {
	attitudeScore: number; // 服务态度评分
	avatarId: number; // 头像资源id
	birthday: string; // 出生日期
	checkStatus: number; // 审核状态
	checkTime: string; // 审核时间/加入时间
	clanId: number; // 民族
	code: string; // 志愿者编号
	createTime: string; // 申请时间
	currentLocation: string; // 现居地
	domicileId: number; // 籍贯
	educationId: number; // 学历
	email: string; // 邮箱
	fullName: string; // 姓名
	genderId: number; // 性别
	id: number;
	idCard: string; // 身份证
	introduce: string; // 简介
	notPassReason: string; // 审核未通过原因
	occupationId: number; // 职业
	phone: string; // 手机号
	politicalLookId: number; // 政治面貌
	praiseVOS: PraiseVO[];
	punctualityScore: number; // 守时程度评分
	skillScore: number; // 专业技能评分
	strongPoint: string[]; // 擅长服务
	teamId: number; // 队伍id
	totalIntegral: number; // 总积分
	totalVolunteerHour: number; // 总服务时长
	typeId: number; // 志愿者类型
	username: string; // 用户名
	workUnit: string; // 工作单位
}
//#endregion

//#region 志愿者表彰选择列表
export interface VolunteerListVO {
	birthday: string; // 出生日期
	checkStatus: number; // 审核状态 2待审核 3审核未通过
	checkTime: string; // 加入时间/审核时间
	clan: string; // 民族
	code: string; // 志愿者编号
	createTime: string; // 申请时间
	domicile: string; // 籍贯
	education: string; // 学历
	email: string; // 邮箱
	fullName: string; // 姓名
	gender: string; // 性别
	id: number;
	idCard: string; // 证件号码
	occupation: string; // 职业
	phone: string; // 手机号
	politicalLook: string; // 政治面貌
	teamName: string; // 队伍名称
	username: string; // 用户名
	workUnit: string; // 工作单位
}
//#endregion
