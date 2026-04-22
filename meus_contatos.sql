-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/04/2026 às 02:32
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `teste1`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `meus_contatos`
--

CREATE TABLE `meus_contatos` (
  `sobre_nome` varchar(30) DEFAULT NULL,
  `primeiro_nome` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `profissao` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `meus_contatos`
--

INSERT INTO `meus_contatos` (`sobre_nome`, `primeiro_nome`, `email`, `profissao`, `cidade`, `estado`) VALUES
('Silva', 'Julio', 'johnsilva@exemplomail.com', 'pianista', 'SC', 'SP'),
('Barbosa', 'Ana', 'anabarbosa@exemplomail.com', 'designer', 'SC', 'SP'),
('Alves', 'Maria', 'mariaalves@exemplomail.com', 'medica', 'SC', 'SP'),
('Ortiz', 'Rodolfo', 'rodolfoortiz@exemplomail.com', 'mecanico', 'SC', 'SP'),
('gariel', 'Lucas', 'lucas@exemplomail.com', 'Estudante', 'SC', 'SP'),
('Goncalves', 'Igor', 'igor.goncalves.1@exemplomail.com', 'Costura', 'SC', 'SP'),
('Fontanive', 'Artur', 'artur.fontanive.1@exemplomail.com', 'Estudante', 'SC', 'SP'),
('Zermiane', 'Guilherme', 'guilherme.zermiane.1@exemplomail.com', 'Cicob', 'SC', 'SP'),
('Bruno', 'Adriano', 'adriano.bruno.1@exemplomail.com', 'mecanico', 'SC', 'SP'),
('Jobs', 'Steve', 'stevejobs@exemplomail.com', 'CEO', 'SC', 'SP'),
('Senna', 'Ayrton', 'ayrtonsenna@exemplomail', 'piloto_F1', 'Sao Paulo', 'SP'),
('einstein', 'albert', 'albert@teste.com', 'cientista', 'rio do oeste', 'SC');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
