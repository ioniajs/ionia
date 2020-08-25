import { extend } from "umi-request";

const request = extend({
  prefix: "/api",
  timeout: 10000,
  headers: {},
  errorHandler: (error) => {
    console.error(error);
    throw error;
  },
});

request.use(async (ctx, next) => {
  console.log("a1");
  await next();
  console.log("a2");
});

request.use(async (ctx, next) => {
  console.log("b1");
  await next();
  console.log("b2");
});

request.interceptors.request.use((url, options) => {
  console.log("request interceptor", url);
  return {
    url,
    options,
  };
});

request.interceptors.response.use((response, options) => {
  console.log("response interceptor", response);
  return response;
});

export default request;
