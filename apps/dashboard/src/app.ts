export const qiankun = {
  async bootstrap(props) {
    console.log('dashboard bootstrap', props);
  },
  async mount(props) {
    console.log('dashboard mount', props);
  },
  async unmount(props) {
    console.log('dashboard unmount', props);
  },
};
