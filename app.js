const inquirer = require('inquirer');
const db = require('./db/index.js');

require('console.table');

function init() {
    mainMenu();
}

const mainMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                { name: "View All Employees", value: "VIEW_EMPLOYEES" },
                { name: "View Managers", value: "VIEW_MANAGERS"},
                { name: "Add Employee", value: "ADD_EMPLOYEE"},
                { name: "Update Employee Role", value: "UPDATE_EMPLOYEE_ROLE"},
                { name: "Update Employee Manager", value: "UPDATE_EMPLOYEE_MANAGER"},
                { name: "Delete Employee", value: "DELETE_EMPLOYEE" },
                { name: "View All Roles", value: "VIEW_ROLES" },
                { name: "Add Role", value: "ADD_ROLE" },
                { name: "Delete Role", value: "DELETE_ROLE" },
                { name: "View All Departments", value: "VIEW_DEPARTMENTS" },
                { name: "Add Department", value: "ADD_DEPARTMENT" },
                { name: "Delete Department", value: "DELETE_DEPARTMENT" },
                { name: "Quit", value: "QUIT" },
      ],
    },
  ]).then((answer) => {
    switch (answer.main) {
        case "VIEW_EMPLOYEES":
            viewEmployees();
            break;
        case "VIEW_MANAGERS":
            viewManagers();
            break;
        case "ADD_EMPLOYEE":
            addEmployee();
            break;
        case "UPDATE_EMPLOYEE_ROLE":
            updateEmployeeRole();
            break;
        case "UPDATE_EMPLOYEE_MANAGER":
            updateEmployeeManager();
            break;
        case "DELETE_EMPLOYEE":
            deleteEmployee();
            break;
        case "VIEW_ROLES":
            viewRoles();
            break;
        case "ADD_ROLE":
            addRole();
            break;
        case "DELETE_ROLE":
            deleteRole();
            break;
        case "VIEW_DEPARTMENTS":
            viewDepartments();
            break;
        case "ADD_DEPARTMENT":
            addDepartment();
            break;
        case "DELETE_DEPARTMENT":
            deleteDepartment();
            break;
        default:
            quit();
    }
  });
};
