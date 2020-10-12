// @ts-nocheck
export * from "./logger";
export { default as Request } from "./request";
export * from "./validator";

export const isDev = process.env.NODE_ENV === "development";

export const isSlave = !!window.__POWERED_BY_QIANKUN__;

export const initSlave = () => {
  if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
};
