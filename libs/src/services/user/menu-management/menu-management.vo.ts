//#region
export interface MenuApiVO {
	apiName: string; // api名称
	apiUrl: string; // api地址
	id: string; // id
}
//#endregion

//#region  菜单列表
export interface MenuListVO {
	authFlag: number; // 是否参与权限分配 0-否 1-是
	component: string; // 路由标识
	id: string; //菜单id
	menuName: string; // 菜单名称
	menuType: number; // 菜单类型 1、菜单 2、权限
	name: string; //权限标识
	parentId: string; // 上级菜单id
	showFlag: number; //是否显示 1是 0否
	sortNum: number; // 排序值
}

//#endregion

//#region
export interface MenuAuthVO {
	children: MenuAuthVO[]; // 子集
	id: string; // 菜单id
	name: string; // 菜单名称
	permissionFlag: number; // 是否有权限 （1 有 0没有）
}
//#endregion

//#region
export interface MenuViewVO {
	apis: MenuApiVO[]; // api接口集合
	authFlag: number; // 是否参与权限分配 0-否 1-是
	component: string; // 路由标识
	icon: string; // 菜单图标
	id: string; //菜单id
	menuName: string; // 菜单名称
	menuType: number; // 菜单类型 1、菜单 2、权限
	name: string; // 权限标识
	nodeIds: string[]; //节点id集合
	parentId: string; // 上级菜单
	path: string; // 路由路径
	redirect: string; // 重定向路由标识
	showFlag: number; // 是否显示 0-否 1-是
	sortNum: number; //排序值
}
//#endregion
