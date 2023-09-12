const mysql = require("mysql2");

const pool = mysql.createPool({
    database: "addtocart",
    user: "root",
    password: "290802",
    host: "localhost",
    port: "3306",
});

module.exports = pool.promise();
