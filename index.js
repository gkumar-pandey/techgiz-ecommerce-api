const express = require("express");
const dotenv = require("dotenv");
const { routeNotFound } = require("./middleware");
const routes = require("./routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT | 3000;

app.use("/", routes);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
