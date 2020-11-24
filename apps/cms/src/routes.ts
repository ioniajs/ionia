import Demo from '@/pages/Demo';
import DemoDetail from '@/pages/Demo/Detail';
import PracticeBase from '@/pages/PracticeBase';
import Setting from '@/pages/Setting';
import Site from '@/pages/Site';
import User from '@/pages/User';
import UserBatchCreate from '@/pages/User/BatchCreate';
import SiteCreate from '@/pages/Site/Create/index';
import SiteDetail from '@/pages/Site/Detail/index';
import SiteBatchCreate from '@/pages/Site/BatchCreate/index';
import { ExceptionPage } from '@ionia/libs';
import DemoAMap from './pages/Demo/AMap';
import DemoETable from './pages/Demo/ETable';
import DemoModalTable from './pages/Demo/ModalTable';
import UserDetail from './pages/User/Detail';
import BaseCreate from '@/pages/PracticeBase/Create';
import BaseDetail from '@/pages/PracticeBase/Detail';

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
		path: '/etable',
		component: DemoETable,
	},
	{
		path: '/modal-table',
		component: DemoModalTable,
	},
	{
		path: '/user',
		component: User,
	},
	{
		path: '/user/batch-create',
		component: UserBatchCreate,
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
		path: '/practicebase/create',
		component: BaseCreate,
	},
	{
		path: '/practicebase/detail/:id',
		component: BaseDetail,
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
