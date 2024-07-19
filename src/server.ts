import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";


import connectDb from "./config/db";
import routeNotFound from "./middleware/routeNotFound";
import routes from "./routes";


dotenv.config();

const app = express();
const PORT: Number = Number(process.env.PORT) | 3000;

const connect = connectDb();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/", routes);
app.use(routeNotFound);

const server = app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
