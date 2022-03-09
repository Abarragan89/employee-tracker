const mysql = require('mysql2');

// connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'anthony', 
        password: 'root',
        database: 'employees'
    },
    console.log('Connected to the election database.')
);

module.exports = db; 