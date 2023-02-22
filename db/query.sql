SELECT employee.id AS "ID",
CONCAT(employee.first_name, ' ', employee.last_name) AS "Employee",
role.title AS "Role",
department.name AS "Department",
role.salary AS "Salary",
CONCAT(manager.first_name, ' ', manager.last_name) AS "Manager"
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee manager ON employee.manager_id = manager.id;

-- view managers
SELECT employee.id AS "ID",
CONCAT(employee.first_name, ' ', employee.last_name) AS "Managers",
role.title AS "Role",
department.name AS "Department",
role.salary AS "Salary"
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
WHERE employee.manager_id IS NULL;

-- ADD EMPLOYEE
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('', '', '', '');

-- UPDATE EMPLOYEE ROLE
UPDATE employee
SET role_id = ''
WHERE id = '';

-- UPDATE EMPLOYEE MANAGER
UPDATE employee
SET manager_id = ''
WHERE id = '';

-- DELETE EMPLOYEE
DELETE FROM employee
WHERE id = '';

-- VIEW ALL ROLES
SELECT role.id AS "ID",
role.title AS "Title",
department.name AS "Department",
role.salary AS "Salary"
FROM role
LEFT JOIN department ON role.department_id = department.id;

-- ADD ROLE
INSERT INTO role (title, salary, department_id)
VALUES ('', '', '');

-- DELETE ROLE
DELETE FROM role
WHERE id = '';

-- VIEW ALL DEPARTMENTS
SELECT department.id AS "ID",
department.name AS "Department"
FROM department;

-- ADD DEPARTMENT
INSERT INTO department (name)
VALUES ('');

-- DELETE DEPARTMENT
DELETE FROM department
WHERE id = '';

-- VIEW EMPLOYEES TO EDIT
SELECT employee.id,
CONCAT(employee.first_name, ' ', employee.last_name) AS "name",
employee.manager_id,
CONCAT(manager.first_name, ' ', manager.last_name) AS "manager_name",
role.id AS "role_id",
role.title
FROM employee
RIGHT JOIN role ON employee.role_id = role.id
LEFT JOIN employee manager ON employee.manager_id = manager.id;

-- VIEW ROLES TO EDIT
SELECT role.id, role.title
FROM role;

-- VIEW DEPARTMENTS TO EDIT
SELECT *
FROM department;

CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phone VARCHAR(30) NOT NULL
);

