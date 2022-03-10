
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
(1, 'manager', 67029.21, 1),
(2, 'hourly', 23932.97, 1),
(3, 'manager', 67029.21, 3),
(4, 'hourly', 23932.97, 3);

-- MANAGER VALUES
INSERT INTO employees (id, first_name, last_name, role_id)
VALUES  
(13, 'Mike', 'Stanson', 1),
(15, 'Reeise', 'Dindal', 3);
-- EMPLOYEE VALUES
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
(82, 'Claudia', 'Yanez', 2, 13),
(34, 'Jr.', 'Banuelos', 2, 13),
(2, 'Johnny', 'Myers', 4, 15),
(94, 'Jenny', 'Lopez', 4, 15);