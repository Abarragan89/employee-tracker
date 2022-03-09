
-- DEPARTMENT STORE VALUES
INSERT INTO department (id, name)
VALUES
(1, 'electronics'),
(2, 'appliances'),
(4, 'clothing'),
(3, 'warehouse');

-- ROLE TYPES VALUES
INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, 'manager', "67,029.21", 1),
(2, 'hourly', "23,932", 1);

-- MANAGER VALUES
INSERT INTO employees (id, first_name, last_name, role_id)
VALUES 
(23, 'Anthony', 'Barragan', 1), 
(13, 'Mike', 'Stanson', 1);

-- EMPLOYEE VALUES
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
(82, 'Claudia', 'Yanez', 2, 23),
(34, 'Jr.', 'Banuelos', 2, 13),
(2, 'Johnny', 'Myers', 2, 23),
(94, 'Jenny', 'Lopez', 2, 13);