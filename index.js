'use strict';
const inquirer = require('inquirer');
const { getAllDepartments, addDepartmentToDB } = require('./db/queries/department');
const { getAllRoles, addRoleToDB } = require('./db/queries/role');
const { getAllEmployees, addEmployeeToDB } = require('./db/queries/employee');


// Inquirer Prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'navigator',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles', 
                'View all employees',
                'Add a department', 
                'Add a role',
                'Add an employee', 
                'Update an employee role'
            ]
        },
    ])
}
const addADepartment  = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'type',
            message: 'What is the name of the department?'
        }
    ])
}

const addARole = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'title',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'Which department ID does the role belong to?'
        }
    ])
};
const addAEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'first',
            message: 'What is the employee\'s first name?'
        },
        {
            type: 'input',
            name: 'last',
            message: 'What is the employee\'s last name?'
        },
        {
            type: 'input',
            name: 'role',
            message: 'What is the employee\'s role?'
        },
        {
            type: 'input',
            name: 'manager',
            message: 'What is the employee\'s manager?'
        }
    ])
};

// Update and employee
const updateEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            choices: [getAllEmployees()]
        }
    ])
};


promptUser()
    .then(results => {
        switch(results.navigator){
            case 'View all departments':
                getAllDepartments();
                console.clear();
                promptUser();
                break;
            case 'View all roles':
                getAllRoles();
                break;
            case 'View all employees':
                getAllEmployees();
                break;
            case 'Add a department':
                addADepartment()
                    .then(response => {
                        addDepartmentToDB(response.type);
                    })
                break;
            case 'Add a role':
                addARole()
                    .then(response => {
                        const title = response.title;
                        const salary = response.salary;
                        const department = response.department;
                        addRoleToDB (title, salary, department);
                    });
            case 'Add an employee':
                addAEmployee()
                    .then(response => {
                        const first = response.first;
                        const last = response.last;
                        const role = response.role;
                        const manager = response.manager;
                        addEmployeeToDB(first, last, role, manager)
                    });
            case 'Update an employee role':
                updateEmployee() 
                    .then(response => console.log(response.employee))
        }
    })