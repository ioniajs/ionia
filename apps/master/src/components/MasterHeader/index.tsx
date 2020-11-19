import { LangSelector, useGlobalStore, gainSiteTree } from '@ionia/libs';
import { IoniaApp } from '@ionia/libs/es/core/master-application';
import { Anchor } from 'antd';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';
import AvatarDropdown from './AvatarDropdown';
import './index.less';
import Logo from './Logo';
import ThemeColor from './ThemeColor';
import Site from './Site';
import { useRequest } from 'ahooks';
const dfs = (node: any) => {
	return (
		node &&
		node.map((n: any) => {
			if (n && n.children) {
				n.children = dfs(n.children);
			}
			return {
				...n,
				title: n.name,
				key: n.id,
			};
		})
	);
};
export enum MasterHeaderTheme {
	Light = 'light',
}

export interface MasterHeaderProps {
	theme?: MasterHeaderTheme;
}

export interface RouteMenu {
	key: string;
	name: string;
	appName: string;
}

const getThemeStyles = (
	theme: MasterHeaderTheme = MasterHeaderTheme.Light
): React.CSSProperties => {
	switch (theme) {
		case MasterHeaderTheme.Light:
		default:
			return {
				background: '#fff',
			};
	}
};

const MasterHeader: React.FC<MasterHeaderProps> = ({ theme }) => {
	const globalStore = useGlobalStore();
	const location = useLocation();
	const history = useHistory();
	const { t } = useTranslation();

	const routes: RouteMenu[] =
		globalStore.state?.apps
			?.filter((app: IoniaApp) => !app.hideInMenu)
			.map((app: IoniaApp) => ({
				key: app.activeRule,
				name: app.name ? t(app.name) : '',
				appName: app.name,
			})) ?? [];
	const selectedKey = routes?.find(r => location.pathname.startsWith(r.key));
	const themeStyles = getThemeStyles(theme);

	useEffect(() => {
		if (selectedKey) {
			globalStore.setState({ currentApp: selectedKey.appName });
		}
	}, [location.pathname]);

	const { data } = useRequest(() => gainSiteTree());

	const treeData: any = data?.data ?? [];

	const siteTree = useMemo(() => dfs(treeData), [treeData]);

	siteTree.map((item: any) => {
		item.icon = <i className='iconfont icon-cluster'></i>;
	});

	return (
		<Anchor className='io-master__anchor'>
			<div className='io-master__header' style={themeStyles}>
				<Logo />
				<div className='io-master__header-left'>
					{routes.map(r => (
						<span
							key={r.key}
							className={`io-master__header--item ${
								selectedKey?.key === r.key ? 'active' : ''
							}`}
							onClick={() => {
								if (selectedKey?.key === r.key) return;
								history.push(r.key.toString());
							}}
						>
							<span className='text'>{r.name}</span>
							<span className='text-bottom-line' />
						</span>
					))}
				</div>
				<div className='io-master__header-right'>
					<ThemeColor />
					<AvatarDropdown />
					<span className='io-master__header--item'>
						<LangSelector />
					</span>
					<span className='io-master__header--item'>
						<Site siteTree={siteTree} />
					</span>
				</div>
			</div>
		</Anchor>
	);
};

export default MasterHeader;
