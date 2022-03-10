'use strict';
const db = require('../db.connection');

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
FROM
	employees
LEFT JOIN
	role 
ON
	employees.role_id = role.id 
LEFT JOIN
	department 
ON 
	role.department_id = department.id 
LEFT JOIN
	employees manager_table
ON 
	manager_table.id = employees.manager_id;`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    });
}

// NEED: ids, first names, last names, job titles, departments, salaries, & managers
// SELECT employee.*, first_name FROM employees INNERJOIN employees WHERE id = manager_id;

// Add an employee
function addEmployeeToDB (first, last, role, manager) {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES('${first}', '${last}', '${role}', '${manager}' )`

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Employee has been added');
    });
}

function updateEmployeeToDB (first, last, role) {
    const sql = `UPDATE employees
                SET role = ('${role}')
                WHERE first_name = ${first} AND
                    last_name = ${last}`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Employee has been updated.')
    });

}

module.exports = { getAllEmployees,
                    addEmployeeToDB,
                    updateEmployeeToDB
                }