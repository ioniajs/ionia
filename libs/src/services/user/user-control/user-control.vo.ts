//#region  用户名模糊匹配用户VO
export interface UserMatchVO {
	phone: string; // 手机号
	username: string; // 用户名
}
//#endregion

//#region  查询用户VO
export interface UserMoveInVO {
	id: string; // 用户id
	positionName: string; // 阵地名称
	realName: string; // 真实姓名
	username: string; //用户名
}

//#region  用户分页VO
export interface UserPageVO {
	createTime: string; // 创建时间
	createUser: string; // 创建人
	email: string; // 电子邮箱
	id: string; // id
	lastLoginIp: string; // 最后登录ip
	lastLoginTime: string; // 最后登录时间
	lastUpdateTime: string; // 最后更新时间
	position: string; // 阵地
	realName: string; // 姓名
	roleNames: string; // 角色名称
	status: number; // 状态（1启用 0禁用）
	telephone: string; // 联系方式
	updateUser: string; //最后更新人
	username: string; // 用户名
}

//#region 用户详情
export interface UserViewVO {
	createTime: string; // 创建时间
	createUser: string; // 创建人
	email: string; // 邮箱
	id: string; // 用户id
	lastLoginIp: string; // 最后登录ip
	lastLoginTime: string; // 最后登录时间
	orgId: string; // 所属阵地id
	orgNodeIds: string[]; // 所属阵地节点id
	realName: string; // 真实姓名
	roleIds: string[]; // 角色id
	status: number; // 状态（1启用 0禁用)
	telephone: string; // 联系方式
	updateTime: string; // 更新时间
	updateUser: string; // 更新人
	username: string; // 用户名
}
//#endregion
