const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router = require("./router");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://aslamjm:apple@cluster0.roiax.mongodb.net/BLOG_POSTS?retryWrites=true&w=majority"
);

mongoose.connection.on("open", () => console.log("db connected"));
mongoose.connection.on("error", (err) => console.log(err));

app.use("/posts", router);

app.listen(5000, () => console.log("server is running on 5000"));
