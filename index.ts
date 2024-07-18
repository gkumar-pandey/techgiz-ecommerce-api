import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

const { routeNotFound } = require("./middleware");
import routes from "./routes";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();
const PORT: Number = Number(process.env.PORT) | 3000;

connectDb();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/", routes);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
