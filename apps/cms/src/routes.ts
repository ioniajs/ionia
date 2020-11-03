import Category from '@/pages/Category';
import Detail from '@/pages/Detail';
import List from '@/pages/List';

export default [
	{ key: '/', path: '/', component: List },
	{
		key: '/category',
		path: '/category',
		component: Category,
	},
	{
		key: '/detail/:id',
		path: '/detail/:id',
		hideInMenu: true,
		component: Detail,
	},
];
