"use strict";

const express = require('express');
const app = express();

//라우팅
const home = require("./routes/home");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // user -> 미들 웨어를 등록해주는  메서드.

module.exports = app;