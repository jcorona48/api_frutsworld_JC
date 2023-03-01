
import {keys} from "./keys.js"
// Express App Setup
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mysql from 'mysql'
import {pool} from "./db.js"

let con = mysql.createConnection({
    host: keys.msqlHost,
    user: keys.msqlUser,
    password: keys.msqlPassword,
    port: keys.msqlPort,
    database: keys.msqlDatabase,
});

con.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

const app = express();

app.get("/Productos/all", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 as result");
  res.json(result[0]);
});

app.listen(5000, (err) => {
  console.log("Listening");
});

app.get("/Productos", (req, res) => {res.send("Obteniendo Productos"); });

app.post("/Productos", (req, res) => {res.send("Creando Empleados"); });

app.put("/Productos", (req, res) => {res.send("Actualizando Productos"); });

app.delete("/Productos", (req, res) => {res.send("Eliminando Productos"); });

console.log("klk");

/*

app.use(cors());
app.use(bodyParser.json());

// Mysql Client Setup
let mysql = require('mysql');

let con = mysql.createConnection({
  host: keys.msqlHost,
  user: keys.msqlUser,
  password: keys.msqlPassword,
  port: keys.msqlPort,
  database: keys.msqlDatabase,
});

con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});


// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/authors/all", async (req, res) => {
  const values = await con.query("SELECT * from authors");
  res.send(values.rows);
});


app.post("/authors", async (req, res) => {
  const index = req.body.index;

  if (parseInt(index) > 40) {
    return res.status(422).send("Index too high");
  }

  const author = { name: 'Craig Buckler', values: index };
  con.query('INSERT INTO authors SET ?', author, (err, res) => {
      if(err) throw err;
  
      console.log('Last insert ID:', res.insertId);
    });

    res.send({ working: true });
});


*/