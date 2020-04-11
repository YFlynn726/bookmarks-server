require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const bookmarksRouter = require("./bookmarks/bookmark-router");
const validateToken = require("./validate-token");
const errorHandler = require("./errorHandler");

const app = express();

app.use(
  morgan(NODE_ENV === "production" ? "tiny" : "common", {
    skip: () => NODE_ENV === "test",
  })
);

app.use(validateToken);

app.use(cors());
app.use(helmet());

app.use(bookmarksRouter);

app.get("/bookmarks", bookmarksRouter);
app.get("/bookmarks/:bookmarks_id", bookmarksRouter);
app.post("/bookmarks", bookmarksRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(errorHandler);

module.exports = app;
