import React from 'react';
import { hot } from 'react-hot-loader/root';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import routes from './routes';

const App = () => {
	return (
		<CacheSwitch>
			{routes.map((m: any) => (
				<CacheRoute
					key={m.path}
					cacheKey={m.path}
					exact={m.exact ?? true}
					path={m.path}
					component={m.component}
				/>
			))}
		</CacheSwitch>
	);
};

export default hot(App);
