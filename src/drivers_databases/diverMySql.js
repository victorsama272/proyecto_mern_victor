const mysql = require('mysql');
const connection =mysql.createConnection({

host:'localhost',
user: 'root@localhost',
password: '',
database: 'admin'
});

connection.connect((err) => {
    if (err) throw err;
    console.log ('mysql =======> Conexion exitosa')
});

module.exports = mysql ;