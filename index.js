const express = require("express");
const app = express();
const cors = require("cors");
const body_parser = require("body-parser");
const mysql = require("./mysql");

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded({ extended : true }));

// create
app.post("/mysql/create", (req, res) => {
    mysql.db.query("INSERT INTO table_name (test1, test2) VALUES (?, ?)", [req.body.value1, req.body.value2]);
});

// read
app.get("/mysql/read", (req, res) => {
    mysql.db.query("SELECT * FROM table_name", (err, results) => {
        res.send(results);
    });
});

// update
app.put("/mysql/update:id", (req, res) => {
    mysql.db.query(`UPDATE table_name SET name = ? WHERE id = ${req.params.id}`, [req.body.name]);
});

// delete
app.delete("/mysql/delete:id", (req, res) => {
    mysql.db.query(`DELETE FROM table_name WHERE id = ${req.params.id}`);
});

app.listen(3001, () => {
    console.info("Server running in 3001 port...");
});