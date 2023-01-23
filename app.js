const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/employees", require("./routes/employee"));

app.listen(PORT, () => `Server listening to port ${PORT}`);
