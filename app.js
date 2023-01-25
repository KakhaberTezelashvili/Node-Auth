const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const log = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const validate = require("./middleware/validator");

app.use(express.json());
app.use(log);

app.post("/test", (req, res, next) => {
  const { error, value } = validate(req.body);

  if (error) {
    res.send(error.details);
  }

  res.send({ data: "somfffjfj" });
});

app.use("/users", require("./routes/user"));
app.use(errorHandler);

app.listen(PORT, () => `Server listening on port ${PORT}`);
