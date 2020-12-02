//#region  保存区域
export interface AreaDTO {
	areaCode: string; // 编号
	areaDictCode: number; // 区域级别 1.省级2.地级3.县级
	areaName: string; // 区域
	enable?: string; // 启用禁用 1.启用 0.禁用
	id?: string; // 行政区域id
	parentId?: string; // 上级区域id
	remark?: string; // 备注
	sortNum: number; // 排序值
}
//#endregion

//#region 排序
export interface AreaSortDTO {
	id: string; // 区域
	sortNum: number; // 排序值
}
//#endregion
