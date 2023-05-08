const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const database = process.env.DB_STRING.replace(
  "<USERNAME>",
  process.env.DB_USERNAME
).replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose.connect(database).then((con) => {
  console.log("Connected to the database");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
