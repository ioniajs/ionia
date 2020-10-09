import "reflect-metadata";
import { loggerConfigs } from "./configs";
import { Logger } from "./utils";
export * from "./components";
export { default as configs } from "./configs";
export * from "./core";
export * from "./hooks";
export * from "./layouts";
export * from "./services";
export * from "./utils";

export const logger = new Logger(loggerConfigs);
