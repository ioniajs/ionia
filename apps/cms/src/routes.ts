import Demo from '@/pages/Demo';
import DemoDetail from '@/pages/Demo/Detail';
import PracticeBase from '@/pages/PracticeBase';
import Setting from '@/pages/Setting';
import Site from '@/pages/Site';
import User from '@/pages/User';
import UserBatchCreate from '@/pages/User/BatchCreate';
import SiteCreate from '@/pages/Site/Create';
import SiteDetail from '@/pages/Site/Detail';
import SiteBatchCreate from '@/pages/Site/BatchCreate';
import SitePublishStatics from '@/pages/Site/PublishStatics';
import { ExceptionPage } from '@ionia/libs';
import DemoAMap from './pages/Demo/AMap';
import DemoETable from './pages/Demo/ETable';
import DemoModalTable from './pages/Demo/ModalTable';
import DemoModalTransfer from './pages/Demo/ModalTransfer';
import UserDetail from './pages/User/Detail';
import PracticeBaseCreate from '@/pages/PracticeBase/Create';
import PracticeBaseDetail from '@/pages/PracticeBase/Detail';
import PracticeBaseBatchCreate from '@/pages/PracticeBase/BatchCreate';
import Content from '@/pages/Content';

import Role from './pages/Role';
import RoleDetail from '@/pages/Role/Detail';
export default [
	{
		path: '/',
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
		path: '/modal-transfer',
		component: DemoModalTransfer,
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
		path: '/practice-base',
		component: PracticeBase,
	},
	{
		path: '/practice-base/create',
		component: PracticeBaseCreate,
	},
	{
		path: '/practice-base/detail/:id',
		component: PracticeBaseDetail,
	},
	{
		path: '/practice-base/batch-create',
		component: PracticeBaseBatchCreate,
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
		path: '/site/publish-statics',
		component: SitePublishStatics,
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
		path: '/content',
		component: Content,
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
