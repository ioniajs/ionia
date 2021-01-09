export interface DataDictionarySaveDTO {
	key: string; // 字典键值
	label: string; // 字典标签
	sortNum: number; // 排序值
	status: number; // 状态(1启用 0禁用)
	typeId: number; // 字典类型Id
	parentId?: number; // 上级字典数据Id
	pictureId?: number; // 字典图id
	remark?: string; // 备注
}

export interface DataDictionaryUpdateDTO {
	label: string; // 字典标签
	sortNum: number; // 排序值
	status: number; // 状态(1启用 0禁用)
	typeId: number; // 字典类型Id
	id?: number;
	parentId?: number; // 上级字典数据Id
	pictureId?: number; // 字典图id
	remark?: string; // 备注
}
export interface DataDictionaryOperatingDTO {
	id: number;
	status: number; //	1启用 0禁用
}