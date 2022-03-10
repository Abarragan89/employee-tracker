'use strict';
const db = require('../db.connection');

//  get all roles
function getAllRoles () {
    const sql = `SELECT * FROM role`
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
    const sql = `INSERT INTO role(title, salary, department_id) VALUES ('${title}', '${salary}', ${department})`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Role has been added.')
    });
}

module.exports = {  getAllRoles,
                    addRoleToDB
                }