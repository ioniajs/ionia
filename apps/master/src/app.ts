export const qiankun = async () => {
  const apps = [
    {
      name: 'dashboard',
      entry: '//localhost:7001',
    },
  ];

  return {
    apps,
  };
};
