const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const Router = require("./routers");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const app = express();

const dbURI = process.env.DATABASE;
const port = process.env.PORT || 5000;

let corsOptions = {
  origin: ["http://localhost:5500", "http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(Router);
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port);
    console.log("connected to mongodb and listening at port 5000");
  })
  .catch((err) => console.error(err));
// app.use(authRouter);
// app.use(expenseRouter);
