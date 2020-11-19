import Demo from '@/pages/Demo';
import DemoDetail from '@/pages/Demo/Detail';
import PracticeBase from '@/pages/PracticeBase';
import Setting from '@/pages/Setting';
import Site from '@/pages/Site';
import User from '@/pages/User';
import UserBatchAdd from '@/pages/User/BatchAdd';
import SiteDetail from '@/pages/Site/Detail';
import { ExceptionPage } from '@ionia/libs';
import DemoAMap from './pages/Demo/AMap';

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
		path: '/amap',
		component: DemoAMap,
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
		component: SiteDetail,
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
