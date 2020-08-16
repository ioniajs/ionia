import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {},
  },
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', microApp: 'dashboard', menu: { name: 'Dashboard' } }],
});
