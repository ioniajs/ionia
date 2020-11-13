//#region 添加角色 | 修改角色 DTO
export interface RoleOperatingDTO {
	description: string; //角色
	id?: string; //id 修改时必传id 新建时不需要
	name: string; //角色名称
	orgId: string; //所属阵地
}
//#endregion
