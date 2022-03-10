'use strict';
const db = require('../db.connection');

// Get all departments
function getAllDepartments () {
    const sql = `SELECT * FROM department`
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    });
}

// Add a department
function addDepartmentToDB (name) {
    const sql = `INSERT INTO department(name)
                VALUES(?)`;
    db.query(sql, [name], (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log("Department has been added");
    });
}

module.exports = { getAllDepartments,
                    addDepartmentToDB
                }