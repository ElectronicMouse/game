const fs = require('fs');

// Create a log message
const logTime = new Date().toISOString();
const logLevel = 'ERROR';
const logLine = 'app.js:42';
const logMessage = 'Something went wrong';

var logEntry = `${logTime}; ${logLevel}; ${logLine}; ${logMessage}\n`;

// Write the log message to a file
fs.appendFile('logfile.txt', logEntry, function(err) {
    if (err) {
        console.log('Error writing to log file:', err);
    } else {
        console.log('Log message written to file');
    }
});