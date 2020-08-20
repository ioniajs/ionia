import { defineConfig } from 'umi';

export default defineConfig({
  base: '/user',
  qiankun: {
    slave: {},
  },
  nodeModulesTransform: {
    type: 'none',
  },
});
