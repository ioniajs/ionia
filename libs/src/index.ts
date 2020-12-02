import 'reflect-metadata';
import './global.less';
import { isDev, Logger, LoggerLevels } from './utils';
export * from './components';
export * from './configs';
export * from './core';
export * from './hooks';
export * from './layouts';
export * from './services';
export * from './utils';

export const logger = new Logger(
	isDev ? { level: LoggerLevels.debug } : { level: LoggerLevels.error }
);
