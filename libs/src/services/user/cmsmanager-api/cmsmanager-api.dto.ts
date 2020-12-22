export interface ApiDTO {
	apiName: string;
	apiUrl: string;
	requestMethod: number;
	id?: string;
	useScene?: string;
}

export interface ApiIdsDTO {
	ids: string[] | string;
}
