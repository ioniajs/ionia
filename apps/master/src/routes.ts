export interface IoniaMenuRoute {
	path: string;
	name: string;
	icon?: string;
	children?: IoniaMenuRoute[];
}

export default {
	cms: [
		{
			path: '/cms',
			name: '内容列表',
		},
		{
			path: '/cms/category',
			name: '内容分类',
		},
	],
} as Record<string, IoniaMenuRoute[]>;
