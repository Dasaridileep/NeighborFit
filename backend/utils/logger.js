const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '..', 'logs', 'user_logs.json');

function appendLog(entry) {
  try {
    let logs = [];

    if (fs.existsSync(logFile)) {
      const data = fs.readFileSync(logFile, 'utf-8');
      logs = JSON.parse(data);
    }

    logs.push(entry);
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
  } catch (error) {
    console.error('Failed to log entry:', error.message);
  }
}

module.exports = appendLog;
