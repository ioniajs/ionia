import Category from '@/pages/Category';
import Demo from '@/pages/Demo';
import DemoDetail from '@/pages/Demo/Detail';
import Detail from '@/pages/Detail';
import List from '@/pages/List';
import NotPage from '@/pages/NotPage';
import PracticeBase from '@/pages/PracticeBase';
import SiteManage from '@/pages/SiteManage';
import SysSetting from '@/pages/SysSetting';
import User from '@/pages/User';
import UserBatchAdd from '@/pages/User/UserBatchAdd';

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
		path: '/user/userbatchadd',
		component: UserBatchAdd,
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
		key: '/syssetting',
		path: '/syssetting',
		component: SysSetting,
	},
	{
		key: '/notpage',
		path: '/notpage',
		component: NotPage,
	},
	{
		key: '/sitemanage',
		path: '/sitemanage',
		component: SiteManage,
	},
];
