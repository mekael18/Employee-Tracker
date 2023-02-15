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

const viewEmployees = () => {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log('\n');
        console.table(employees);
    })
    .then(() => mainMenu());
}

const viewManagers = () => {
    db.findAllManagers()
    .then(([rows]) => {
        let managers = rows;
        console.log('\n');
        console.table(managers);
    })
    .then(() => mainMenu());
}

function addEmployee() {
    connection.viewEmployeesToEdit()
    .then(([rows]) => {
        let employees = rows;
        const roleChoices = employees.map(({ id, title }) => ({
            name: title,
            value: id
            }));
            const managerChoices = employees.map(({ id, name }) => ({
                name: name,
                value: id
            }));
            prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: "What is the employee's first name?",
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?",
        },
        {
            type: 'list',
            name: 'role_id',
            message: "What is the employee's role?",
            choices: roleChoices
            },
            {
                type: 'list',
                name: 'manager_id',
                message: "Who is the employee's manager?",
                choices: managerChoices
                },
                ])
                .then((employee) => {
                    connection.addEmployee(employee);
                    console.log(
                        `Added ${employee.first_name} ${employee.last_name} to the database`
                        );
                        init();
                    }
                    );
                });
}

function updateEmployeeRole() {
    connection.viewEmployeesToEdit()
    .then(([rows]) => {
        let employees = rows;
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
            }));
            const roleChoices = employees.map(({ id, title }) => ({
                name: title,
                value: id
                }));
                prompt([
                    {
                        type: 'list',
                        name: 'employee_id',
                        message: "Which employee's role do you want to update?",
                        choices: employeeChoices
                        },
                        {
                            type: 'list',
                            name: 'role_id',
                            message: "What is the employee's new role?",
                            choices: roleChoices
                            },
                            ])
                            .then((employee) => {
                                connection.updateEmployeeRole(employee);
                                console.log(
                                    `Updated ${employee.first_name} ${employee.last_name}'s role`
                                    );
                                    init();
                                }
                                );
                            });
                        }

function updateEmployeeManager() {
    connection.viewEmployeesToEdit()
    .then(([rows]) => {
        let employees = rows;
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
            }));
            const managerChoices = employees.map(({ id, name }) => ({
                name: name,
                value: id
                }));
                prompt([
                    {
                        type: 'list',
                        name: 'employee_id',
                        message: "Which employee's manager do you want to update?",
                        choices: employeeChoices
                        },
                        {
                            type: 'list',
                            name: 'manager_id',
                            message: "Who is the employee's new manager?",
                            choices: managerChoices
                            },
                            ])
                            .then((employee) => {
                                connection.updateEmployeeManager(employee);
                                console.log(
                                    `Updated ${employee.first_name} ${employee.last_name}'s manager`
                                    );
                                    init();
                                }
                                );
                            });
                        }   

function deleteEmployee() {
    connection.viewEmployeesToEdit()
    .then(([rows]) => {
        let employees = rows;
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
            }));
            prompt([
                {
                    type: 'list',
                    name: 'employee_id',
                    message: "Which employee do you want to delete?",
                    choices: employeeChoices
                    },
                    ])
                    .then((employee) => {
                        connection.deleteEmployee(employee);
                        console.log(
                            `Deleted ${employee.first_name} ${employee.last_name} from the database`
                            );
                            init();
                        }
                        );
                    });
                }

const viewRoles = () => {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log('\n');
        console.table(roles);
    })
    .then(() => mainMenu());
}

function addRole() {
    connection.viewDepartments()
    .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, name }) => ({
            name: name,
            value: id
            }));
            prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: "What is the name of the role?",
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: "What is the salary of the role?",
                        },
                        {
                            type: 'list',
                            name: 'department_id',
                            message: "Which department does the role belong to?",
                            choices: departmentChoices
                            },
                            ])
                            .then((role) => {
                                connection.addRole(role);
                                console.log(
                                    `Added ${role.title} to the database`
                                    );
                                    init();
                                }
                                );
                            });
                        }

function deleteRole() {
    connection.viewRoles()
    .then(([rows]) => {
        let roles = rows;
        const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
            }));
            prompt([
                {
                    type: 'list',
                    name: 'role_id',
                    message: "Which role do you want to delete?",
                    choices: roleChoices
                    },
                    ])
                    .then((role) => {
                        connection.deleteRole(role);
                        console.log(
                            `Deleted ${role.title} from the database`
                            );
                            init();
                        }
                        );
                    });
                }

const viewDepartments = () => {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log('\n');
        console.table(departments);
    })
    .then(() => mainMenu());
}

function addDepartment() {
    prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the department?",
            },
            ])
            .then((department) => {
                connection.addDepartment(department);
                console.log(
                    `Added ${department.name} to the database`
                    );
                    init();
                }
                );
            }

function deleteDepartment() {
    connection.viewDepartments()
    .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, name }) => ({
            name: name,
            value: id
            }));
            prompt([
                {
                    type: 'list',
                    name: 'department_id',
                    message: "Which department do you want to delete?",
                    choices: departmentChoices
                    },
                    ])
                    .then((department) => {
                        connection.deleteDepartment(department);
                        console.log(
                            `Deleted ${department.name} from the database`
                            );
                            init();
                        }
                        );
                    });
                }

const quit = () => {
    console.log('Goodbye!');
    process.exit();
}

init();


