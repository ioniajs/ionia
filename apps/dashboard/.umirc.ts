import { defineConfig } from 'umi';

export default defineConfig({
  base: '/dashboard',
  qiankun: {
    slave: {},
  },
  nodeModulesTransform: {
    type: 'none',
  },
});
