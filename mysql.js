const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  database: "lcn",
  password: "root",
  
});

// тестирование подключения
connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

//select
connection.query("SELECT id, name, email, password FROM registration_form", (err, rows) => {
  if (err) throw err;

  console.log("Data received from Db:");
  console.log(rows);
});

// //insert
// const test = { age: 10, name: "Craig Buckler", surname: "Exmouth" };
// connection.query("INSERT INTO test SET ?", test, (err, res) => {
//   if (err) throw err;

//   console.log("Last insert ID:", res.insertId);
// });

// //update
// connection.query(
//   "UPDATE test SET age = ? Where ID = ?",
//   ["11", 3],
//   (err, result) => {
//     if (err) throw err;

//     console.log(`Changed ${result.changedRows} row(s)`);
//   }
// );

// //delete
// connection.query("DELETE FROM test WHERE id = ?", [5], (err, result) => {
//   if (err) throw err;

//   console.log(`Deleted ${result.affectedRows} row(s)`);
// });

// закрытие подключения
connection.end(function (err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});
