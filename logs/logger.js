const fs = require('fs');

class Logger {
  log(message, logLevel, logLine) {
    const date = new Date();
    const options = { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};
const logTime = date.toLocaleString('en-GB', options);
    const logEntry = `${logTime}; ${logLevel}; ${logLine}; ${message}\n`;

    fs.appendFile('logs/logfile.txt', logEntry, function(err) {
      if (err) {
        console.log('Error writing to log file:', err);
      } else {
        console.log('Log message written to file');
      }
    });
  }
  clearlog(){
    fs.truncate('logs/logfile.txt', function(err) {
      if (err) {
        console.log('Error writing to log file:', err);
      } else {
        console.log('Log message written to file');
      }
    });
  }
}

module.exports = Logger;
