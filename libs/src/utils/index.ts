// @ts-nocheck
export { default as Request } from "./request";

export const isDev = process.env.NODE_ENV === "development";

export const isQiankun = !!window.__POWERED_BY_QIANKUN__;

export const initQiankun = () => {
  if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
};
