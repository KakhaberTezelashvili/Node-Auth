const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", require("./routes/user"));

app.listen(PORT, () => `Server listening to port ${PORT}`);
