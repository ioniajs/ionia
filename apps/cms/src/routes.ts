import Content from '@/pages/Content';
import DemoAMap from '@/pages/Demo/AMap';
import DemoDetail from '@/pages/Demo/Detail';
import DemoDynamicFormItem from '@/pages/Demo/DynamicFormItem';
import DemoETable from '@/pages/Demo/ETable';
import DemoModalTable from '@/pages/Demo/ModalTable';
import DemoModalTransfer from '@/pages/Demo/ModalTransfer';
import Home from '@/pages/Home';
import PracticeBase from '@/pages/PracticeBase';
import PracticeBaseBatchCreate from '@/pages/PracticeBase/BatchCreate';
import PracticeBaseCreate from '@/pages/PracticeBase/Create';
import PracticeBaseDetail from '@/pages/PracticeBase/Detail';
import Role from '@/pages/Role';
import RoleDetail from '@/pages/Role/Detail';
import Setting from '@/pages/Setting';
import Site from '@/pages/Site';
import SiteBatchCreate from '@/pages/Site/BatchCreate';
import SiteCreate from '@/pages/Site/Create';
import SiteDetail from '@/pages/Site/Detail';
import SitePublishStatics from '@/pages/Site/PublishStatics';
import User from '@/pages/User';
import UserBatchCreate from '@/pages/User/BatchCreate';
import UserDetail from '@/pages/User/Detail';
import { ExceptionPage } from '@ionia/libs';

export default [
	{
		path: '/',
		component: Home,
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
		path: '/dynamic-from-item',
		component: DemoDynamicFormItem,
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
