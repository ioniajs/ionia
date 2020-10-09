export enum LoggerLevels {
  debug = 10,
  info = 30,
  error = 50,
}

export interface LoggerOptions {
  level: LoggerLevels;
}

export class Logger {
  constructor(private options: LoggerOptions = { level: LoggerLevels.info }) {}

  debug(...args: any) {
    if (this.options.level <= LoggerLevels.debug) {
      console.log(...args);
    }
  }

  info(...args: any) {
    if (this.options.level <= LoggerLevels.info) {
      console.info(...args);
    }
  }

  error(...args: any) {
    if (this.options.level <= LoggerLevels.error) {
      console.error(...args);
    }
  }
}
