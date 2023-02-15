INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 120000, 2),
       ('Software Engineer', 100000, 2),
       ('Accountant', 125000, 3),
       ('Account Manager', 110000, 3),
       ('Legal Team Lead', 130000, 4),
       ('Lawyer', 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
       ('Mike', 'Chan', 2, 1),
       ('Ashley', 'Rodriguez', 3, NULL),
       ('Kevin', 'Tupik', 4, 3),
       ('Kunal', 'Singh', 5, NULL),
       ('Malia', 'Brown', 6, 5),
       ('Sarah', 'Lourd', 7, NULL),
       ('Tom', 'Allen', 8, 7);
       
