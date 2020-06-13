-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 13-06-2020 a las 04:40:44
-- Versión del servidor: 10.3.14-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `covid19`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `donaciones`
--

DROP TABLE IF EXISTS `donaciones`;
CREATE TABLE IF NOT EXISTS `donaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `edad` int(11) NOT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `donacion_tipo` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado_civil` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `genero` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha` date DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `donaciones`
--

INSERT INTO `donaciones` (`id`, `nombre`, `apellido`, `edad`, `direccion`, `donacion_tipo`, `estado_civil`, `genero`, `fecha`) VALUES
(1, 'ANTONIO', 'GARCIA', 29, '11 Calle 2 Av. Colonia San Josecito Retalhuleu', 'Viveres', 'Casado', 'Masculino', '2020-06-12'),
(2, 'ROCIO', 'TEBAR', 25, 'El Palmar 6 Av. 6 Calle B 6-36 Zona 1', 'Medicas', 'Soltera', 'Femenino', '2020-06-12'),
(3, 'CARLOS', 'MUÑOZ', 32, 'Mazatenango 1 Av. 3-51 Zona 1.', 'Viveres', 'Casado', 'Masculino', '2020-06-12'),
(4, 'ANGELA', 'RAMIREZ', 27, 'Coatepeque 0 Av. 5 Calle Zona 2 Barrio El Rosario.', 'Medico', 'Casado', 'Masculino', '2020-06-12'),
(5, 'IVAN', 'MOYA', 22, '8va. Avenida 6-62 zona 1, Quetzaltenango.', 'Viveres', 'Casado', 'Masculino', '2020-06-12'),
(6, 'RAMON', 'MORCILLO', 20, '3 Calle Zona 2, Concepción Chiquirichapa', 'Viveres', 'Casado', 'Masculino', '2020-06-12'),
(7, 'JUAN', 'SANCHEZ', 20, 'Calzada Revolución del 71, Zona 1.', 'Viveres', 'Casado', 'Masculino', '2020-06-12'),
(8, 'ROSA', 'ARENAS', 22, 'San Marcos 4 Av. 3-71 Zona 2', 'Medicas', 'Casada', 'Femenino', '2020-06-12'),
(9, 'ALICIA', 'ALARCON', 18, 'Quiché 13 Calle 1-66 Zona 5, Frente a CDAG.', 'Medicas', 'Casada', 'Femenino', '2020-06-12'),
(10, 'PAULA', 'ORTIZ', 18, '9A Avenida, Ciudad de Guatemala', 'Medicas', 'Casada', 'Femenino', '2020-06-12'),
(11, 'PEDRO', 'GOMEZ', 22, 'Jalapa 6 Av. 1-99 Zona 1, Barrio La Democracia.', 'Sangre', 'Soltero', 'Masculino', '2020-06-12'),
(12, 'MANUEL', 'GONZALEZ', 27, 'Alta Verapaz 3 Calle 2-13 Zona 3.', 'Sangre', 'Casado', 'Masculino', '2020-06-12'),
(13, 'CRISTINA', 'VASQUEZ', 27, 'Totonicapan San Francisco el Alto', 'Sangre', 'Soltera', 'Femenino', '2020-06-12'),
(14, 'MARIA', 'AZ', 25, '3 Av, Jutiapa', 'Sangre', 'Soltera', 'Femenino', '2020-06-12'),
(15, 'FRANCISCO', 'GOMEZ', 22, '4a Av. zona 1, Tecpán', 'Viveres', 'Soltero', 'Masculino', '2020-06-12'),
(16, 'JAVIER', 'CUC', 20, '8va. Avenida 6-62 zona 1, Quetzaltenango.', 'Viveres', 'Soltero', 'Masculino', '2020-06-12'),
(17, 'MARIO', 'CASTAÑEDA', 34, 'Solola zona 4', 'Sangre', 'Casado', 'Masculino', '2020-06-12');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
