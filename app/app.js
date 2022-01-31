"use strict";

const express = require('express');
const app = express();

//라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // user -> 미들 웨어를 등록해주는  메서드.

module.exports = app;