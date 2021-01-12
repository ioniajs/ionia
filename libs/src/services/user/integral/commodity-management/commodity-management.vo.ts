export interface AdminGoodsPageItemVO {
	categoryName: string; //商品分类名称
	coverResId: string;
	id: string;
	integral: number;
	inventory: number;
	name: string;
	resetTime: string;
	status: number;
	stint: number;
	stintNum: number;
	totalConvertNum: number;
	updateTime: string;
}

export interface AdminGoodsPageVO {
	content: AdminGoodsPageItemVO[];
	pageNo: number;
	pageSize: number;
	pages: number;
	total: number;
}
