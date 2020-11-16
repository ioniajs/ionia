import { setupWorker } from 'msw';
import hero from './hero';
import config from './config';
import login from './login';
import site from './site';
import upload from './upload';
import user from './user';

export default setupWorker(...hero, ...config, ...login, ...site, ...upload, ...user);
