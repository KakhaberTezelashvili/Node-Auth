const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

async function createLogEntry(logItem) {
  const fileName = "logs.txt";
  const folderPath = path.join(__dirname, "..", "logs");

  if (!fs.existsSync(folderPath)) {
    await fsPromises.mkdir(folderPath);
  }

  await fsPromises.appendFile(path.join(folderPath, fileName), logItem + "\n");
}

const log = (req, res, next) => {
  createLogEntry(JSON.stringify({ request: req.body }));

  let oldSend = res.send;
  res.send = function (data) {
    createLogEntry(JSON.stringify({ response: data }));
    oldSend.apply(res, arguments);
  };

  next();
};

module.exports = log;
