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


// Show all roles for update process
function getAllRolesUpdate () {
    return new Promise ((resolve, reject) => {
        const sql = `SELECT * FROM role`
        db.query(sql, (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        })
    })
}
const formatRowRole = (row) => {
        const names = [];
        console.log(row);
        row.forEach(item => {
            const role = 
            {
                name: item.title,
                value: item.id
            }
            names.push(role);
        })
        return names
}

module.exports = {  getAllRoles,
                    addRoleToDB,
                    formatRowRole,
                    getAllRolesUpdate
                };