const express = require('express');
const app = express();
const db = require('./Database/Db.js');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

app.get('/createTable', (req, res)=>{
  let create_table = "CREATE TABLE users ( Name VARCHAR(20), Email VARCHAR(30), Mobile BIGINT UNIQUE, Address VARCHAR(50), Address2 VARCHAR(50), City VARCHAR(30), ZipCode CHAR(6), Password VARCHAR(255), id VARCHAR(100) PRIMARY KEY )";
  db.query(create_table, (err, result)=>{
    if (err) {
      console.log(err);
    } 
    console.log("Table created : ", result);
  });
  res.send('User Table created');
});



//For Signup;
app.post('/signup/user', async (req, res) => {
  let q = `INSERT INTO users (Name, Email, Mobile, Address, Address2, City, ZipCode, Password, id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  let { Name, Email, Mobile, Address, Address2, City, ZipCode, Password } = req.body;
  let id = uuidv4();
  let hashedPassword = await bcrypt.hash(Password, 10);
  let values = [Name, Email, Mobile, Address, Address2, City, ZipCode, hashedPassword, id];
   
  db.query(q, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database insertion failed' });
    }
    res.json({ success: true, 
      info: { Name, Email, Mobile, Address, Address2, City, ZipCode, id } 
    });
  });
});



//For Login
app.post('/login/user', (req, res) => {
  const { Mobile, Password } = req.body;
  console.log(req.body);

  const q = `SELECT * FROM users WHERE Mobile = ?`;

  db.query(q, [Mobile], async (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    if (result.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    let user = result[0];
    console.log(user);
    const passwordMatch = await bcrypt.compare(Password, user.Password);
    console.log(passwordMatch)
    
    if (passwordMatch) {
      const { Password, ...userWithoutPassword } = user;
      return res.json({ success: true, Info: userWithoutPassword });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});


app.get('/ya', (req, res)=>{
  res.send('yaus')
})