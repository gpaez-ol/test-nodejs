import express from "express";
import errorMiddleware from "../middleware/error-middleware";
const app = express();
const port = 3000;
const routes = require("../routes/tea");
app.use(express.json());
app.use("/", routes); //to use the routes
app.use(errorMiddleware);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
