"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
// const fs = require("fs");
dotenv.config();

const app = express();

//라우팅
const home = require("./src/routes/home");



//morgan으로 log관리하는법
// const accessLogStream = fs.createWriteStream(
//     `${__dirname}/log/access.log`, //
//     { flags: 'a' }
// );


app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("dev", { stream: accessLogStream }));

app.use("/", home); // user -> 미들 웨어를 등록해주는  메서드.

module.exports = app;