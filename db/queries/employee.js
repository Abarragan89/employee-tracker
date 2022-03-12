'use strict';
const db = require('../db.connection');


// function to get and display names for "update employee" prompt.
function getFirstLastEmployee () {
    return new Promise ((resolve, reject) => {
        const sql = `SELECT first_name, last_name FROM employees`
        db.query(sql, (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        })
    })
}
const formatRow = (row) => {
        const names = [];
        row.forEach(item => {
            names.push(item.first_name + ' ' + item.last_name);
        })
        return names
}

// Get all employees
function getAllEmployees () {
    const sql = `SELECT
	employees.id,
    employees.first_name,
    employees.last_name,
    role.title,
    department.name AS department,
    role.salary,
    CONCAT(manager_table.first_name, ' ', manager_table.last_name) AS manager
    FROM employees
    LEFT JOIN role 
    ON employees.role_id = role.id 
    LEFT JOIN department 
    ON role.department_id = department.id 
    LEFT JOIN employees manager_table
    ON manager_table.id = employees.manager_id;`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    });
}

function addEmployeeToDB (first, last, role, managerFirst, managerSecond) {
    if (!managerFirst || managerFirst === '' || managerFirst === 'none' || managerFirst === 'no') {
        const sql = `INSERT INTO employees (first_name, last_name, role_id)
        SELECT ?, ?, role.id
        FROM role
        WHERE role.title = ?`;
        
        db.query(sql, [first, last, role], (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Employee has been added');
        });
    } else {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        SELECT ?,?, role.id, m.id
        FROM role, employees m  
        WHERE role.title = ? AND m.first_name = ? AND m.last_name = ?`;
        db.query(sql, [first, last, role, managerFirst, managerSecond], (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Employee has been added');
        });
    }
}

function updateEmployeeRole (name, role) {
    const nameArray = name.split(" ")
    const firstName = nameArray[0];
    const lastName = nameArray[1];
    const sql = `UPDATE 
                    employees
                SET 
                    employees.role_id  = ?
                WHERE 
                    employees.first_name = ? AND employees.last_name = ?`;
    db.query(sql, [role, firstName, lastName], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Employee has been updated.')
    });
}

module.exports = { getAllEmployees,
                    addEmployeeToDB,
                    getFirstLastEmployee,
                    formatRow,
                    updateEmployeeRole
                }