{\rtf1\ansi\ansicpg1252\cocoartf2509
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 -- phpMyAdmin SQL Dump\
-- version 4.8.5\
-- https://www.phpmyadmin.net/\
--\
-- Host: localhost:8889\
-- Generation Time: Nov 04, 2019 at 08:18 AM\
-- Server version: 5.7.25\
-- PHP Version: 7.3.1\
\
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";\
SET time_zone = "+00:00";\
\
--\
-- Database: `cv`\
--\
\
-- --------------------------------------------------------\
\
--\
-- Table structure for table `contact`\
--\
\
CREATE TABLE `contact` (\
  `id` int(11) NOT NULL,\
  `nom` varchar(160) NOT NULL,\
  `email` varchar(160) NOT NULL,\
  `message` text NOT NULL\
) ENGINE=InnoDB DEFAULT CHARSET=utf8;\
\
--\
-- Dumping data for table `contact`\
--\
\
INSERT INTO `contact` (`id`, `nom`, `email`, `message`) VALUES\
(1, 'test1230', 'test1230@mail.me', 'kjshfjkh'),\
(2, 'test1342', 'test1342@mail.me', 'test1342'),\
(3, 'test1112', 'test1112@mail.me', 'test1112'),\
(4, 'test1115', 'test1115@mail.me', 'test1115'),\
(5, 'test1204', 'test1204@mail.me', 'test1204');\
\
--\
-- Indexes for dumped tables\
--\
\
--\
-- Indexes for table `contact`\
--\
ALTER TABLE `contact`\
  ADD PRIMARY KEY (`id`);\
\
--\
-- AUTO_INCREMENT for dumped tables\
--\
\
--\
-- AUTO_INCREMENT for table `contact`\
--\
ALTER TABLE `contact`\
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\
}