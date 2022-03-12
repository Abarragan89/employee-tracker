
-- DEPARTMENT STORE VALUES
INSERT INTO department (id, name)
VALUES
(1, 'electronics'),
(2, 'management'),
(4, 'clothing'),
(3, 'service');

-- ROLE TYPES VALUES
INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, 'Manager', 67029.21, 2),
(2, 'Tech Sales', 23932.97, 1),
(3, 'Customer Service', 67029.21, 3),
(4, 'Apparel Sales', 23932.97, 4);

-- MANAGER VALUES
INSERT INTO employees (first_name, last_name, role_id)
VALUES  
('Mike', 'Stanson', 1),
('Reesie', 'Dindal', 1);
-- EMPLOYEE VALUES
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Claudia', 'Yanez', 2, 1),
('Jr.', 'Banuelos', 2, 1),
('Johnny', 'Myers', 4, 2),
('Jenny', 'Lopez', 4, 2);