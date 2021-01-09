//#region
export interface AdminGoodsCategoryDTO {
	id?: string;
	name: string;
}

//#endregion

export interface goodsCategoryParamsDTO {
	beginUpdateTime?: string;
	endUpdateTime?: string;
	name?: string;
	pageNo?: number;
	pageSize?: number;
	pageSort?: string;
}
