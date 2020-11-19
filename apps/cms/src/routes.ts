import Demo from '@/pages/Demo';
import DemoDetail from '@/pages/Demo/Detail';
import PracticeBase from '@/pages/PracticeBase';
import Setting from '@/pages/Setting';
import Site from '@/pages/Site';
import User from '@/pages/User';
import UserBatchAdd from '@/pages/User/BatchAdd';
import SiteCreate from '@/pages/Site/Create';
import SiteDetail from '@/pages/Site/Detail';
import { ExceptionPage } from '@ionia/libs';

export default [
	{
		path: '/basic',
		component: Demo,
	},
	{
		path: '/detail',
		component: DemoDetail,
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
		path: '/practicebase',
		component: PracticeBase,
	},
	{
		path: '/setting',
		component: Setting,
	},
	{
		path: '/site',
		component: Site,
	},
	{
		path: '/site/create',
		component: SiteCreate,
	},
	{
		path: '/site/detail/:id',
		component: SiteDetail,
	},
	{
		path: '/500',
		component: ExceptionPage,
	},
	{
		path: '/403',
		component: ExceptionPage,
	},
	{
		path: '*',
		component: ExceptionPage,
	},
];
