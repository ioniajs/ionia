export interface AdminGoodsCategoryItemVO {
	goodsNum: number;
	id: string;
	name: string;
	updateTime: string;
}


export interface AdminGoodsCategoryVO{
    content:AdminGoodsCategoryItemVO[];
    pageNo:number;
    pageSize:number;
    pages:number;
    total:number;
}
