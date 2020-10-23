import { LangSelector, useGlobalStore } from '@ionia/libs';
import { IoniaApp } from '@ionia/libs/es/core/master-application';
import { Anchor, Menu, Switch } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';
import AvatarDropdown from './AvatarDropdown';
import Logo from './Logo';

import './index.less';

export enum MasterHeaderTheme {
	Light = 'light',
}

export interface MasterHeaderProps {
	theme?: MasterHeaderTheme;
}

export interface RouteMenu {
	key: string;
	name: string;
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
			})) ?? [];
	const selectedKey = routes?.find(r => location.pathname.startsWith(r.key));

	const themeStyles = getThemeStyles(theme);

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
					<span className='io-master__header--item'>
						<Switch checkedChildren='LTR' unCheckedChildren='RTL' />
					</span>
					<span className='io-master__header--item'>
						<AvatarDropdown />
					</span>
					<span className='io-master__header--item'>
						<LangSelector />
					</span>
					<span className='io-master__header--item'>
						<span className='text'>JEECMS演示站</span>
					</span>
				</div>
			</div>
		</Anchor>
	);
};

export default MasterHeader;
