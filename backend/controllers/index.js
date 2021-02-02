const mysql = require("mysql");
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(request, response){
    // response.sendFile(path.resolve('login.pug'));
    response.render(path.resolve('login.pug'), {
        status:1, 
        message:'success'
    });
});

router.get('/registration', function(request, response){
    response.sendFile(path.resolve('registration.pug'));
});

router.get('/login', function(request, response){
    response.sendFile(path.resolve('login.pug'));
});

router.post('/login', function(request, response){
    const connection = mysql.createConnection({
        host: "localhost",
        port: "8889",
        user: "root",
        database: "lcn",
        password: "8576040spd",
        socketPath: '/var/mysql/mysql.sock'
    });

    // ДОБИТЬСЯ ЧТОБЫ ЗАРАБОТАЛ ЦИКЛ регистрация => login => profile
    // var sql = "SELECT * FROM `users` WHERE `email` and `password` = '" + request.body.useremail + "' AND `password` = " + request.body.userpassword + "'";
//     var sql = "SELECT email, password FROM users WHERE email = '" + request.body.useremail + "'";
//     connection.query(sql, function (err, result) {
//         if (result.body = null) {
//             console.log(result);
//           response.redirect('/error'); 
//         } else {
//             console.log(result);
//             console.log('login successfull');
//           response.redirect('/profile');
//         }
//     });
// });

var email = request.body.useremail;
var password = request.body.userpassword;
if (email && password) {
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
        console.log(results);
        if (results.length > 0) {
            // request.session.loggedin = true;
            // request.session.email = useremail;
            response.redirect('/profile');
        } else {
            esponse.redirect('/login');
            // response.send('Incorrect Email and/or Password!');
        }			
        response.end();
    });
} 
// else {
//     response.send('Please enter Email and Password!');
//     response.end();
// }
});

router.post('/registration', function(request, response){
    const connection = mysql.createConnection({
        host: "localhost",
        port: "8889",
        user: "root",
        database: "lcn",
        password: "8576040spd",
        socketPath: '/var/mysql/mysql.sock'
    });
        
    var sql = "INSERT INTO `users` (`email`, `password`, `username`) VALUES ('" + request.body.useremail + "', '" + request.body.userpassword + "', '" + request.body.username + "')";
    connection.query(sql, function (err, result) {
        if (err) {
          response.redirect('/error'); 
        } else {
          response.redirect('/login');
        }
    });
});

module.exports = router;