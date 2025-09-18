-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 18, 2025 at 10:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roxilerproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `user_fk` int(11) NOT NULL,
  `store_fk` int(11) NOT NULL,
  `rating` enum('1','2','3','4','5') NOT NULL,
  `review` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id`, `user_fk`, `store_fk`, `rating`, `review`) VALUES
(9, 10, 1, '3', ''),
(12, 10, 3, '5', ''),
(6, 12, 1, '3', ''),
(7, 12, 2, '4', ''),
(4, 17, 1, '5', ''),
(5, 17, 2, '5', ''),
(10, 17, 3, '4', '');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'System Administrator'),
(2, 'Normal User'),
(3, 'Store Owner');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `owner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `name`, `address`, `email`, `owner`) VALUES
(1, 'PizzaHut', 'China', 'pizza@gmail.com', 12),
(2, 'kamikazi', 'america', 'kamikazi@gmail.com', 10),
(3, 'ishimura space station', 'Space', 'ishimura@gmail.com', 16);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `token` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `role`, `address`, `token`) VALUES
(1, 'Ronak', 'ronak@gmail.com', '$2b$10$zSyhmamjotkHMqtt7/T1WOQ7yxyhLsJIPnEYgU7ft882YtUGDgmoS', 1, 'Pune', ''),
(2, 'chetan', 'chetan@bund.com', '$2b$10$SRLmCYx5kgkv1BCpVbH3N.DuHBiBIzpfHd1qOL6bDezByDqxvYgGu', 2, 'Bihar', ''),
(3, 'Abhay', 'abhay@bund.com', '$2b$10$zfMjCqLfIO7kVVCLsGPyGOxEroOfFq2ItJd/SejgYvRgeGDGLooZa', 3, 'Mahableshwar', ''),
(8, 'Ram', 'ram@gmail.com', '$2b$10$5ljn6nn1fsUqRlc0uVngEuvCaG5Vq22u3gWUzpVKloY5DpxLSvv02', 2, 'pune', ''),
(9, 'Sam', 'sam@gmail.com', '$2b$10$3TaEr/bqyAtZaH7BrpOXi.b9Qe.M8hLGnuEyv/31KoWj4/yMiD8py', 2, 'USA', ''),
(10, 'john', 'john@sub.com', '$2b$10$Q4KuCLJj1kt4ASjwxJ6LZext5ZedxU.cPsXDx2ciFemfxnE.tY1fe', 2, 'USSR', ''),
(12, 'clark', 'clark@gmial.com', '$2b$10$h2LxXZdlWrFaGd9CrlDnrO907Izew4lMiFNl6VNp7/bkZVi/zysIq', 2, 'Krypton', ''),
(15, 'isaac@gmail.com', 'isaac@gmail.com', '$2b$10$wG.TCaPaUq.zC5UwFOcNpekCTJE/pBA0zoUiXjevcjmCjy/wjkam.', 1, 'Ishimura', ''),
(16, 'owner', 'owner@gmail.com', '$2b$10$d1TYh8p1ximnmt6M6qyM0uWKUJK8LbBUnb6dw6.if98hYBKtOl4ZW', 3, 'UAE', ''),
(17, 'Moti', 'rashi@gmail.com', '$2b$10$uUkOi1U33iiMSeLh0lm6KebUNkOwad/lLtMp0I3v4PWYGC2dpZTPy', 2, 'Gujarat', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_fk_2` (`user_fk`,`store_fk`,`rating`,`review`),
  ADD KEY `user_fk` (`user_fk`,`store_fk`),
  ADD KEY `store_fk` (`store_fk`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner` (`owner`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`store_fk`) REFERENCES `store` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`user_fk`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `store`
--
ALTER TABLE `store`
  ADD CONSTRAINT `store_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
