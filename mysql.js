const mysql = require("mysql");

const db = mysql.createConnection({
    user: "username",
    password: "passwd",
    host: "localhost",
    database: "database_name"
});

db.connect((err) => {console.info("MySQL database connected!");});

exports.db = db;