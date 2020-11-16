import Category from '@/pages/Category';
import Demo from '@/pages/Demo';
import DemoDetail from '@/pages/Demo/Detail';
import Detail from '@/pages/Detail';
import List from '@/pages/List';
import PracticeBase from '@/pages/PracticeBase';
import User from '@/pages/User';
import NotPageFound from '@/pages/NotPageFound';

export default [
	{ path: '/', component: List },
	{
		path: '/category',
		component: Category,
	},
	{
		path: '/detail/:id',
		hideInMenu: true,
		component: Detail,
	},
	{
		path: '/user',
		component: User,
	},
	{
		path: '/demo/basic',
		component: Demo,
	},
	{
		path: '/demo/detail',
		component: DemoDetail,
	},
	{
		path: '/practicebase',
		component: PracticeBase,
	},
	{
		key: '/notpagefound',
		path: '/notpagefound',
		component: NotPageFound,
	},
];
