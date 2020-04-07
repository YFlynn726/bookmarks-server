require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const bookmarkRouter = require("./bookmarks/bookmark-router");
//const validateToken = require("./validate-token");
const errorHandler = require("./errorHandler");
const BookmarksService = require("../src/bookmarks-service");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

//app.use(validateToken);

app.use(bookmarkRouter);

app.get("/bookmarks", (req, res) => {
  const knexInstance = req.app.get("db");
  BookmarksService.getAllBooks(knexInstance)
    .then((bookmarks) => {
      res.json(bookmarks);
    })
    .catch(next);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(errorHandler);

module.exports = app;
