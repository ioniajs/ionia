import { useGlobalStore } from '../../hooks';
import { useMount } from 'ahooks';
import { ConfigProvider, Layout } from 'antd';
import { MicroAppStateActions } from 'qiankun';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Auth, ErrorFallback } from '../../components';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.less';

const { AccessProvider } = Auth;

interface GlobalLayoutProps {
	globalProps?: MicroAppStateActions;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, globalProps }) => {
	const globalStore = useGlobalStore();
	useMount(() => {
		if (globalProps) {
			globalStore.setActions(globalProps);
			globalProps.onGlobalStateChange(
				(globalState: any) => globalStore.setState(globalState),
				true
			);
		}
	});

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}} resetKeys={[]}>
			<ConfigProvider locale={zhCN}>
				<AccessProvider>
					<Layout className='io-layout__global'>{children}</Layout>
				</AccessProvider>
			</ConfigProvider>
		</ErrorBoundary>
	);
};
