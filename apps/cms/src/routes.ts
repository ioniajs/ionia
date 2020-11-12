import Category from '@/pages/Category';
import Detail from '@/pages/Detail';
import List from '@/pages/List';
import Demo from '@/pages/Demo';
import PracticeBase from '@/pages/PracticeBase';
import User from '@/pages/User';
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
	{
		key: '/user',
		path: '/user',
		component: User,
	},
	{
		key: '/demo',
		path: '/demo',
		component: Demo,
	},
	{
		key: '/practicebase',
		path: '/practicebase',
		component: PracticeBase,
	},
];
