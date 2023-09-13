const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pp_classes",
  port: 3307, // Replace 3306 with the actual port number used by your MySQL server
});




app.listen(8082, () => {
  console.log("listening");
});
