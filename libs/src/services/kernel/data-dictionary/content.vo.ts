export interface DataDictionaryListVo {
	id: number; // id
	label: string; // 标签
}

export interface DataDictionaryPageVO {
	id: number;
	key: string; // 键值
	label: string; // 标签
	pictureId: number; // 图片id
	remark: string; // 备注
	sortNum: number; // 排序值
	status: number; // 状态(1启用0禁用)
	updateTime: string; // 更新时间
}
export interface DataDictionaryVO {
	id: number; // id(新建不传,修改必传)
	key: string; // 字典键值
	label: string; // 字典标签
	parentId: number; // 上级字典数据id
	pictureId: number; // 字典图id
	remark: string; // 备注
	sortNum: number; // 排序值
	status: number; // 状态(1启用 0禁用)
	typeId: number; // 字典类型id
}
