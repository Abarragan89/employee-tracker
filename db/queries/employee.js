'use strict';
const db = require('../db.connection');

// function getFirstLastEmployee () {
//         const sql = `SELECT first_name, last_name FROM employees`
//         db.query(sql, (err, rows) => {
//             if (err) {
//                 return(err);
//             }
//                 rows.forEach(item => {
//                     names.push(item.first_name + ' ' + item.last_name);
//             })
//             console.log('in db query ' + names);
//             return names;
//         })
// }

function getFirstLastEmployee () {
    return new Promise ((resolve, reject) => {
        const sql = `SELECT first_name, last_name FROM employees`
        db.query(sql, (err, rows) => {
            if (err) {
                return(err);
            }
            console.log('in db query ' + rows);
            resolve(rows);
        })
    })
}
const formatRow = (row) => {
        const names = [];
        row.forEach(item => {
            names.push(item.first_name + ' ' + item.last_name);
        })
        console.log('In formatRow ' + names)
        return names
}

// const name = getFirstLastEmployee().then(rows => formatRow(rows));
// console.log('outside function ' + name);
// const practiceFunction = () => {
//     let array = [];
//     array.push("square");
//     return array;
// }
// const practice = practiceFunction()
// console.log('practice' + ' ' + practice)

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

// Add an employee
function addEmployeeToDB (first, last, role, manager) {
    // 3/9/2022 MORNING START
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    SELECT ?, ?, role.id, m.id
    FROM role, employees m  
    WHERE role.title = ?
    AND m.first_name = ?`;

    db.query(sql, [first, last, role, manager], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Employee has been added');
    });
}

function updateEmployeeToDB (first, last, role) {
    const sql = `UPDATE employees
                SET role = (?)
                WHERE first_name = ? AND
                    last_name = ?`;
    db.query(sql, [first, last, role], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Employee has been updated.')
    });

}



module.exports = { getAllEmployees,
                    addEmployeeToDB,
                    updateEmployeeToDB,
                    getFirstLastEmployee,
                    formatRow
                }