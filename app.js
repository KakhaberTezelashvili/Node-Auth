const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const log = require("./middleware/logger");

app.use(express.json());
app.use(log);
app.use("/users", require("./routes/user"));

app.listen(PORT, () => `Server listening to port ${PORT}`);
