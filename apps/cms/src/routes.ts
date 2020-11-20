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
import DemoAMap from './pages/Demo/AMap';
import UserDetail from './pages/User/Detail';

import Role from './pages/Role';
import RoleDetail from '@/pages/Role/Detail';
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
		path: '/user/batchadd',
		component: UserBatchAdd,
	},
	{
		path: '/user/detail',
		component: UserDetail,
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
		path: '/role',
		component: Role,
	},
	{
		path: '/role/detail/:id',
		component: RoleDetail,
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
