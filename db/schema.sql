DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roles;

CREATE TABLE departments (
  d_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    r_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    pay VARCHAR (30) NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_departments FOREIGN KEY (department_id) REFERENCES departments(d_id) ON DELETE SET NULL
);

CREATE TABLE employee (
    e_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INTEGER,
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(r_id) ON DELETE SET NULL
);