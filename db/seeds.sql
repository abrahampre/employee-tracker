INSERT INTO departments (department)
VALUES
('Accounting'),
('Engineering'),
('Sales'),
('Legal');

INSERT INTO roles (title, pay, department_id)
VALUES
('Accountant I','50000',1),
('Accountant II','60000',1),
('Mechanical Engineer','70000',2),
('Electrical Engineer','75000',2),
('Sales Lead','62000',3),
('Sales Rep','68000',3),
('Lawyer','62000',4);

INSERT INTO employee(first_name, last_name, role_id)
VALUES
('Robert','California','4'),
('Creed','Bartton','3'),
('Oscar','Martinez','4'),
('Angela','Martin ','2'),
('Michael','Scott','5'),
('Dwight','Schrute','6'),
('Kevin','Malone','2'),
('Toby','Flenderson','4'),
('Kelly','Kapoor','1');