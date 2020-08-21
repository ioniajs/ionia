export const qiankun = {
  async bootstrap(props: any) {
    console.log('dashboard bootstrap', props);
  },
  async mount(props: any) {
    console.log('dashboard mount', props);
  },
  async unmount(props: any) {
    console.log('dashboard unmount', props);
  },
};
