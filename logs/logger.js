const fs = require('fs');

class Logger {
  log(message, logLevel, logLine) {
    const logTime = new Date().toISOString();
    const logLevel = logLevel;
    const logLine = logLine;
    const logEntry = `${logTime}; ${logLevel}; ${logLine}; ${message}\n`;

    fs.appendFile('logfile.txt', logEntry, function(err) {
      if (err) {
        console.log('Error writing to log file:', err);
      } else {
        console.log('Log message written to file');
      }
    });
  }
}

module.exports = Logger;
