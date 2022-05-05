const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://aslamjm:apple@cluster0.roiax.mongodb.net/BLOGPOST_COMMENTS?retryWrites=true&w=majority"
);

mongoose.connection.on("open", () => console.log("db connected"));
mongoose.connection.on("error", (err) => console.log(err));

app.use("/comments", router);

app.listen(5001, () => console.log("server running on 5001"));
