-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 24 oct. 2023 à 10:49
-- Version du serveur : 8.0.31
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jourvie3d4`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

DROP TABLE IF EXISTS `commentaires`;
CREATE TABLE IF NOT EXISTS `commentaires` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdSession` int NOT NULL,
  `IdDev` int NOT NULL,
  `Contenu` varchar(1024) NOT NULL,
  `Horodateur` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `developpeurs`
--

DROP TABLE IF EXISTS `developpeurs`;
CREATE TABLE IF NOT EXISTS `developpeurs` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL,
  `Matricule` varchar(7) NOT NULL,
  `MotDePasse` varchar(20) NOT NULL,
  `IdProjet` int NOT NULL,
  `Etat` varchar(12) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `developpeurs`
--

INSERT INTO `developpeurs` (`Id`, `Nom`, `Matricule`, `MotDePasse`, `IdProjet`, `Etat`) VALUES
(1, 'Agathe', '1111111', '11', 1, 'inactif'),
(2, 'Benedict', '2222222', '11', 1, 'inactif'),
(3, 'Caroline', '3333333', '11', 2, 'inactif');

-- --------------------------------------------------------

--
-- Structure de la table `projets`
--

DROP TABLE IF EXISTS `projets`;
CREATE TABLE IF NOT EXISTS `projets` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(30) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `projets`
--

INSERT INTO `projets` (`Id`, `Nom`) VALUES
(1, 'Maximus'),
(2, 'HocusPocus');

-- --------------------------------------------------------

--
-- Structure de la table `sessionstravail`
--

DROP TABLE IF EXISTS `sessionstravail`;
CREATE TABLE IF NOT EXISTS `sessionstravail` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdTache` int NOT NULL,
  `IdDev` int NOT NULL,
  `Debut` datetime NOT NULL,
  `Fin` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `taches`
--

DROP TABLE IF EXISTS `taches`;
CREATE TABLE IF NOT EXISTS `taches` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Numero` varchar(15) NOT NULL,
  `Titre` varchar(40) NOT NULL,
  `Description` varchar(128) NOT NULL,
  `IdProjet` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `taches`
--

INSERT INTO `taches` (`Id`, `Numero`, `Titre`, `Description`, `IdProjet`) VALUES
(1, 'T1', 'Préparer BD', 'Les douze tables nécessaires doivent être déployées', 1),
(2, 'T2', 'Module connexion', 'Développer l\'écran de connexion et de création de comptes', 1),
(3, 'T3', 'Classes métier', 'Définir et déployer toutes les classes métier du projet', 1),
(4, 'T1', 'Récut utilisateurs', 'Définir tous les r-u pertinents au projet', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
