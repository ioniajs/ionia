import configs from "./configs";

if (configs.isQiankun) {
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
