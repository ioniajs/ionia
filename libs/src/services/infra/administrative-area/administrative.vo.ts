//#region
export interface AreaVO {
	areaCode: string; // 区域编号
	areaDictCode: string; // 区域类型1.省2.市3.区县
	areaName: string; // 区域名称
	child: boolean;
	createTime: string; // 创建时间
	id: string; // 区域id
	nodeIds: number[]; // 结点集合
	parentId: string; //父级id
	remark: string; // 备注
	sortNum: number; // 排序值
	status: number; // 状态 (0关 1开)
}
//#endregion
