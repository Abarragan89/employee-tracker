const mysql = require('mysql2');

// connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'anthony', 
        password: 'root',
        database: 'employees'
    },
    console.log('Connected to the employee database.')
);

module.exports = db; 