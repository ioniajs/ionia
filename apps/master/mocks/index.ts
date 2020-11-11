import { setupWorker } from 'msw';
import hero from './hero';
import config from './config';

export default setupWorker(...hero, ...config);
