'use strict';
const db = require('../db.connection');

//  get all roles
function getAllRoles () {
    const sql = `SELECT role.title, role.id AS role_id, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    });
}
// Add a role
function addRoleToDB (title, salary, department) {
    const sql = `INSERT INTO role(title, salary, department_id)
                SELECT ?, ?, department.id FROM department WHERE department.name = ?`;
    db.query(sql,[title, salary, department], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Role has been created.');
    });
}

module.exports = {  getAllRoles,
                    addRoleToDB
                };