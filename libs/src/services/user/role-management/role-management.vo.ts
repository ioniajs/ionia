//#region  角色分页VO
export interface RolePageVO {
	createTime: string; // 创建时间
	createUser: string; // 创建人
	description: string; // 描述
	id: string; // 角色id
	name: string; // 角色名称
	org: string; //阵地
	updateTime: string; // 更新时间
	updateUser: string; // 更新人
}
//#endregion

//#region 角色详情
export interface RoleViewVO {
	createTime: string; // 创建时间
	createUser: string; // 创建人
	description: string; // 描述
	id: string; // 角色id
	name: string; // 角色名称
	orgId: string; // 阵地id
	orgNodeIds: string[]; // 阵地id节点
	updateTime: string; // 更新时间
	updateUser: string; // 更新人
}
//#region
