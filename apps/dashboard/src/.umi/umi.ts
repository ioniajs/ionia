// @ts-nocheck
import './core/polyfill';

import { plugin } from './core/plugin';
import './core/pluginRegister';
import { createHistory } from './core/history';
import { ApplyPluginsType } from '/Users/roylin/Desktop/code/ionia/node_modules/@umijs/runtime';
import { renderClient } from '/Users/roylin/Desktop/code/ionia/node_modules/@umijs/renderer-react/dist/index.js';
import { getRoutes } from './core/routes';
import { genMount as qiankun_genMount, genBootstrap as qiankun_genBootstrap, genUnmount as qiankun_genUnmount, genUpdate as qiankun_genUpdate } from '/Users/roylin/Desktop/code/ionia/node_modules/@umijs/plugin-qiankun/lib/slave/lifecycles.js';



const getClientRender = (args: { hot?: boolean; routes?: any[] } = {}) => plugin.applyPlugins({
  key: 'render',
  type: ApplyPluginsType.compose,
  initialValue: () => {
    const opts = plugin.applyPlugins({
      key: 'modifyClientRenderOpts',
      type: ApplyPluginsType.modify,
      initialValue: {
        routes: args.routes || getRoutes(),
        plugin,
        history: createHistory(args.hot),
        isServer: process.env.__IS_SERVER,
        rootElement: 'root-slave',
        defaultTitle: ``,
      },
    });
    return renderClient(opts);
  },
  args,
});

const clientRender = getClientRender();
export default clientRender();


    window.g_umi = {
      version: '3.2.16',
    };
  

    export const bootstrap = qiankun_genBootstrap(clientRender);
    export const mount = qiankun_genMount('root-slave');
    export const unmount = qiankun_genUnmount('root-slave');
    export const update = qiankun_genUpdate();

    if (!window.__POWERED_BY_QIANKUN__) {
      bootstrap().then(mount);
    }
    

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    const ret = require('./core/routes');
    if (ret.then) {
      ret.then(({ getRoutes }) => {
        getClientRender({ hot: true, routes: getRoutes() })();
      });
    } else {
      getClientRender({ hot: true, routes: ret.getRoutes() })();
    }
  });
}
