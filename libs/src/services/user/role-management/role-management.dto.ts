//#region 添加角色 | 修改角色 DTO
export interface RoleOperatingDTO {
	description?: string; //描述
	id?: string; //id 修改时必传id 新建时不需要
	name: string; //角色名称
	orgId: string[]; //所属阵地
}
//#endregion

//#region 移入用户
export interface RoleMoveDTO {
	id: string; // 角色ID
	userIds: string[]; // 用户id集合
}
//#endregion
