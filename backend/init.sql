CREATE DATABASE IF NOT EXISTS newsteam;

USE newsteam;

CREATE TABLE IF NOT EXISTS games (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  release_date DATE,
  price DECIMAL(10, 2)
);

INSERT INTO games (name, description, release_date, price)
VALUES
('Game 1', 'Description for Game 1', '2023-01-01', 19.99),
('Game 2', 'Description for Game 2', '2023-02-01', 29.99),
('Game 3', 'Description for Game 3', '2023-03-01', 39.99);
