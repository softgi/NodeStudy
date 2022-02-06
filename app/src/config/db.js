const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-lecture.com14qusnmzu.ap-northeast-2.rds.amazonaws.com",
    // host: "localhost",
    user: "admin",
    password: "13467912",
    database: "usermanagement",
    // database: "login_db"
});

db.connect();


module.exports = db;