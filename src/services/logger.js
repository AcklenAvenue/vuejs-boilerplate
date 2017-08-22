export default class Logger {
  constructor() {
    this.LTracker = global._LTracker = global._LTracker || []; // eslint-disable-line
     this.LTracker.push({// eslint-disable-line
       logglyKey: '5c94de57-80be-446d-9e84-798ed0d99f34',
       sendConsoleErrors: true,
       tag: 'boilerplateTag',
     });
  }
  log(message, severity) {
    this.LTracker.push({
      text: message,
      severity,
    });
  }
}
