const express = require('express');
const router = require('./backend/controllers/index');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);
app.listen(8080);

// const mysql = require("mysql");

// app.set('view engine', 'pug');
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get('/login', function(request, response){
//     response.sendFile('/Users/dmitryputyrski/Documents/LCN/login.html');

// });

// app.get('/', function (req, res) {
//   res.render('registration');
// });

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: "8889",
//   user: "root",
//   database: "lcn",
//   password: "8576040spd",
// });

// // тестирование подключения
// connection.connect(function (err) {
//   if (err) {
//     return console.error("Ошибка: " + err.message);
//   } else {
//     console.log("Подключение к серверу MySQL успешно установлено");
//   }
// });

// app.get('/', function(request, response){
//     response.sendFile(__dirname + '/registration.html');
// });

// app.post('/registration', function(request, response) {
//     // response.send(`${request.body.username} ${request.body.useremail} ${request.body.userpassword}`)
//     console.log(request.body);
//     var sql = "INSERT INTO `registration_form` (`name`, `email`, `password`) VALUES ('" + request.body.username + "', '" + request.body.useremail + "', '" + request.body.userpassword + "')";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("table created");
//       // response.sendFile(__dirname + '/login.html');
//     });
//     response.sendFile(__dirname + '/registration.html');
//   });

//select
// connection.query("SELECT id, name, email, password FROM registration_form", (err, rows) => {
//   if (err) throw err;
//   console.log("Data received from Db:");
//   console.log(rows);
// })
  

// app.listen(8080, function(){
//     console.log("running on 8080");
// });