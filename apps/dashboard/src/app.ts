export const qiankun = {
  async bootstrap(props: any) {
    console.log('dashboard bootstrap', props);
  },
  async mount(props: any) {
    console.log('dashboard mount', props);
    props.onGlobalStateChange((state: any) => {
      console.log(`【Slave-${props.name}】`, state);
    }, true);
    props.setGlobalState({
      application: props.name,
    });
  },
  async unmount(props: any) {
    console.log('dashboard unmount', props);
  },
};
