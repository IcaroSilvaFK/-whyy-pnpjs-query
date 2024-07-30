import winston from 'winston'
import BrowserConsole from 'winston-transport-browserconsole'

export class Utils {
  static trimSpaces(value: string) {
    return value.trim();
  }

  static toIsoString(date: Date) {
    return date.toISOString();
  }

  static configureLogger(silent = false): winston.Logger {

    const logger = winston.createLogger({
      silent,
      format: winston.format.json(),
      transports: [
        new BrowserConsole(
          {
            format: winston.format.json(),
            level: "debug",
          },
        ),
      ],
    });


    return logger
  }

}