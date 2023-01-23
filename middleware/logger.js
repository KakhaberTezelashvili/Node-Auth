const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

async function createLogEntry(logItem) {
  const fileName = "logs.txt";
  const folderPath = path.join(__dirname, "..", "logs");

  if (!fs.existsSync(folderPath)) {
    await fsPromises.mkdir(folderPath);
  }

  await fsPromises.appendFile(
    path.join(folderPath, fileName),
    JSON.stringify(logItem) + "\n"
  );
}

const log = (req, res, next) => {
  createLogEntry(req.body);

  let oldSend = res.send;
  res.send = function (data) {
    createLogEntry(JSON.parse(data));
    oldSend.apply(res, data);
  };

  next();
};

module.exports = log;
