const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'ryul', 
  password: 'ryul_z3', 
  database: 'Flipakart'
});

db.connect((err)=> {
  if (err) {
    console.log("Can't connect with database!.");
    return;
  }
  console.log("Connected to the database !.")
});

module.exports = db;
