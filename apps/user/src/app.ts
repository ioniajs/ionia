export const qiankun = {
  async bootstrap(props: any) {
    console.log('user bootstrap', props);
  },
  async mount(props: any) {
    console.log('user mount', props);
    props.onGlobalStateChange((state: any) => {
      console.log(`【Slave-${props.name}】`, state);
    }, true);
    props.setGlobalState({
      application: props.name,
    });
  },
  async unmount(props: any) {
    console.log('user unmount', props);
  },
};
