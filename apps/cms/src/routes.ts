import Demo from '@/pages/Demo';
import DemoDetail from '@/pages/Demo/Detail';
import PracticeBase from '@/pages/PracticeBase';
import Setting from '@/pages/Setting';
import Site from '@/pages/Site';
import User from '@/pages/User';
import UserBatchAdd from '@/pages/User/BatchAdd';
import SiteCreate from '@/pages/Site/Create/index';
import SiteDetail from '@/pages/Site/Detail/index';
import SiteBatchCreate from '@/pages/Site/BatchCreate/index';
import { ExceptionPage } from '@ionia/libs';
import DemoAMap from './pages/Demo/AMap';
import DemoETable from './pages/Demo/ETable';
import UserDetail from './pages/User/Detail';

import Role from './pages/Role';
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
		path: '/etable',
		component: DemoETable,
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
		path: '/user/detail/:id',
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
		path: '/site/batch-create',
		component: SiteBatchCreate,
	},
	{
		path: '/role',
		component: Role,
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
