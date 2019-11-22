INSERT INTO personas FROM personasstandby WHERE id=1;

SELECT * FROM personas;
CREATE TABLE personasstandby(
id int auto_increment primary key not null,
nombre varchar(30) not null,
segundo_nombre varchar(30) not null,
apellido varchar(50) not null,
biografia varchar(500) not null
);

insert into personasstandby(nombre,segundo_nombre,apellido,biografia) VALUES ('hola', 'holaa', 'holaaa', 'holazz');
insert into personasstandby(nombre,segundo_nombre,apellido,biografia) VALUES ('fff', 'rrrr', 'gggg', 'hhhh');


