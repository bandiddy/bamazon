
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(20),
  department_name VARCHAR(20),
  price INTEGER(11),
  stock_quantity INTEGER(11),
  PRIMARY KEY(id)
);
-- Creates 10 new rows
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "games", 300, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Zelda: Breathe of the Wild", "games", 60, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pokemon: Lets Go Pikachu", "games", 100, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Smash Bros: Ultimate", "games", 60, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch Pro Controller", "games", 54, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Joy-Con (L/R) - Neon Pink / Neon Green", "games", 65, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fortnite", "games", 29, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch Super Smash Bros. Ultimate Edition - Switch", "games", 488, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Mario Party", "games", 60, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mario Kart 8 Deluxe", "games", 60, 20);