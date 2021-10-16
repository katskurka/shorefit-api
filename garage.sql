DROP DATABASE IF EXISTS garage_doors;
CREATE DATABASE garage_doors;

DROP USER IF EXISTS 'garageUser'@'localhost';
CREATE USER 'garageUser'@'localhost' IDENTIFIED BY 'garageDoorAPI';

GRANT ALL PRIVILEGES ON classics.* to 'garageUser'@'localhost';
FLUSH PRIVILEGES;

USE garage_doors;
SHOW TABLES;

CREATE TABLE bannerDoors (
id INT auto_increment,
doorModel varchar(50),
doorStyle varchar(50),
doorMaterial varchar(50),
rValue INT,
costMeter varchar(10),
createdAt DATETIME DEFAULT NOW(),
PRIMARY KEY(id)
);

CREATE TABLE haasDoors (
id INT auto_increment,
doorModel varchar(50),
doorStyle varchar(50),
doorMaterial varchar(50),
rValue INT,
costMeter varchar(10),
createdAt DATETIME DEFAULT NOW(),
PRIMARY KEY(id)
);

CREATE TABLE amarrDoors (
id INT auto_increment,
doorModel varchar(50),
doorStyle varchar(50),
doorMaterial varchar(50),
rValue INT,
costMeter varchar(10),
createdAt DATETIME DEFAULT NOW(),
PRIMARY KEY(id)
);

INSERT INTO bannerDoors (doorModel, doorStyle, doorMaterial, rValue, costMeter) Values
('SRP Hollow', 'Raised Panel', 'Steel', 6.85, '$'),
('Advantage', 'Raised Panel', 'Steel', 6.7, '$$'),
('Cambridge', 'Carriage House', 'Wood', 8, '$$$$$'),
('Lancaster', 'Barn', 'Vinyl', 6.7, '$$$$');

INSERT INTO amarrDoors (doorModel, doorStyle, doorMaterial, rValue, costMeter) Values
('Classica', 'Carriage House', 'Steel', 12, '$$$'),
('Heritage', 'Specialty', 'Wood', 9, '$$$$$'),
('Horizon', 'Aluminum', 'Glass', 6, '$$$$$'),
('Lincoln', 'Raised Panel', 'Steel', 9.05, '$');

INSERT INTO haasDoors (doorModel, doorStyle, doorMaterial, rValue, costMeter) Values
('American Tradition', 'Barn', 'Steel', 13.45, '$$$'),
('Hemlock', 'Carriage House', 'Wood', 10, '$$$$'),
('V-Groove', 'Flush Panel', 'Steel', 13.45, '$$$'),
('Endura', 'Barn', 'Vinyl', 7, '$$$$');