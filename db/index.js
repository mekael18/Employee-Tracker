const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    };

    // view all employees
    viewAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
        );
    };

    // view all managers
    viewAllManagers() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id WHERE employee.manager_id IS NOT NULL;"
        );
    };

    // add employee
    addEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    };

    // update employee role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]);
    };

    // update employee manager
    updateEmployeeManager(employeeId, managerId) {
        return this.connection.query("UPDATE employee SET manager_id = ? WHERE id = ?", [managerId, employeeId]);
    };

    // delete employee
    deleteEmployee(employeeId) {
        return this.connection.query("DELETE FROM employee WHERE id = ?", employeeId);
    };

    // view all roles
    viewAllRoles() {
        return this.connection.query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;"
        );
    };

    // add role
    addRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    };

    // delete role
    deleteRole(roleId) {
        return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
    };

    // view all departments
    viewAllDepartments() {
        return this.connection.query(
            "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id GROUP BY department.id, department.name;"
        );
    };

    // add department
    addDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    };

    // delete department
    deleteDepartment(departmentId) {
        return this.connection.query("DELETE FROM department WHERE id = ?", departmentId);
    };

    // view employees to edit
    viewEmployeesToEdit() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
        );
    };

    // view roles to edit
    viewRolesToEdit() {
        return this.connection.query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;"
        );
    };

    // view departments to edit
    viewDepartmentsToEdit() {
        return this.connection.query(
            "SELECT department.id, department.name FROM department;"
        );
    };

};

module.exports = new DB(connection);