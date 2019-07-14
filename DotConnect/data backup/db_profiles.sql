-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `profiles` (
  `username` varchar(20) NOT NULL,
  `fullname` varchar(40) NOT NULL,
  `profilepic` varchar(300) DEFAULT '/img/new-user-male-icon.jpg',
  `phone` bigint(20) DEFAULT NULL,
  `address` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `placeborn` varchar(20) DEFAULT NULL,
  `dateborn` date NOT NULL,
  `job` varchar(20) DEFAULT NULL,
  `institution` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`username`),
  CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`username`) REFERENCES `register` (`username`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES ('abhinav','abhinav kumar','/img/user-4.jpg',991926279,'bangalore','m','poornea','1997-01-12','dancer','sjbit'),('admin','admin','/img/male-icon.png',874454844,'PC','m','PC','1998-11-08','ower','.connect'),('anshul','anshul malhotra','/img/user-1.jpg',9739109426,'hostel','m','ajmer','1998-10-08','developer','sjbit'),('anshulm2211','anshul malhotra','/img/user-5.jpg',7892089744,'bangalore','m','ajmer','1998-10-08','student','sjbit'),('hema','hemalatha','/img/user-2.jpg',7896541230,'bangalore','f','hassan','1998-07-24','student','sjbit'),('prince','prince singh','/img/user-3.jpg',7762648965,'bangalore','m','jogbani','1996-11-17','coder','sjbit');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-09 21:16:39
