-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 22-05-2020 a las 21:26:44
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
-- Estructura de tabla para la tabla `personas19`
--

DROP TABLE IF EXISTS `personas19`;
CREATE TABLE IF NOT EXISTS `personas19` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(40) COLLATE utf8_spanish2_ci DEFAULT 'No Name',
  `apellidos` varchar(40) COLLATE utf8_spanish2_ci DEFAULT 'No Lastname',
  `edad` int(11) DEFAULT 1,
  `genero` varchar(12) COLLATE utf8_spanish2_ci DEFAULT 'No genero',
  `pais` varchar(40) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `departamento` varchar(50) COLLATE utf8_spanish2_ci DEFAULT 'No Estate or Departament',
  `municipio_ciudad` varchar(50) COLLATE utf8_spanish2_ci DEFAULT 'No City',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `personas19`
--

INSERT INTO `personas19` (`id`, `nombres`, `apellidos`, `edad`, `genero`, `pais`, `departamento`, `municipio_ciudad`) VALUES
(1, 'Jose Armando', 'Lopez Obrador', 25, 'Masculino', 'Mexico', 'Ciudad de México', 'Cuauhtémoc'),
(3, 'Maria Regina', 'Paz Reyes', 27, 'Femenino', 'Guatemala', 'Peten', 'San Benito Peten'),
(7, 'Maria Cristina', 'Tzoc Caxaj', 24, 'Femenino', 'Guatemala', 'Totonicapan', 'Totonicapán'),
(6, 'Jose Ramon', 'Fernandez Gomez', 59, 'Masculino', 'Mexico', 'Ciudad de mexico', 'Calle 23 de Julio'),
(8, 'PruebaNombre', 'ApellidoPrueba', 33, 'Femenino', 'España', 'Madrid ', 'Madrid');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
