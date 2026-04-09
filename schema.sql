CREATE DATABASE inventory_db;
USE inventory_db;
CREATE TABLE suppliers(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(100),city VARCHAR(100));
CREATE TABLE inventory(id INT AUTO_INCREMENT PRIMARY KEY,supplier_id INT,product_name VARCHAR(100),category VARCHAR(100),quantity INT,price FLOAT);