-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 20 2020 г., 23:50
-- Версия сервера: 5.7.23
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `app_hackaton`
--

-- --------------------------------------------------------

--
-- Структура таблицы `company`
--

CREATE TABLE `company` (
  `id` int(200) NOT NULL,
  `logo` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `company`
--

INSERT INTO `company` (`id`, `logo`, `name`) VALUES
(1, 'qwqwqw', 'asasasas'),
(2, 'qwqwqw', 'asasasas'),
(3, 'logo', 'name'),
(4, 'logo', 'name'),
(5, 'logo', 'name'),
(6, 'logo', 'name'),
(7, '12121', 'aesadsdsd'),
(8, '12121', 'aesadsdsd'),
(9, '', ''),
(10, '', ''),
(11, '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `corzina`
--

CREATE TABLE `corzina` (
  `id` int(200) NOT NULL,
  `id_tovar` int(200) NOT NULL,
  `id_user` int(200) NOT NULL,
  `dostavka` varchar(200) NOT NULL,
  `oplata` varchar(200) NOT NULL,
  `adress` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `corzina`
--

INSERT INTO `corzina` (`id`, `id_tovar`, `id_user`, `dostavka`, `oplata`, `adress`) VALUES
(1, 1, 1, 'sdsd', 'sdsd', 'sdsdsd'),
(2, 1, 1, 'sdsd', 'sdsd', 'sdsdsd'),
(3, 1, 1, 'sdsdsd', 'sdsd', 'sdsd');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(200) NOT NULL,
  `id_company` int(200) NOT NULL,
  `time_task` varchar(200) NOT NULL,
  `description` longtext NOT NULL,
  `coins` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `id_company`, `time_task`, `description`, `coins`) VALUES
(1, 1, 'wewe', 'wewewe', 'wewew'),
(2, 1, 'wewe', 'wewewe', 'wewew'),
(3, 1, 'sdsd', 'sdsd', 'sdsd');

-- --------------------------------------------------------

--
-- Структура таблицы `tovars`
--

CREATE TABLE `tovars` (
  `id` int(200) NOT NULL,
  `img` varchar(200) NOT NULL,
  `coins` varchar(200) NOT NULL,
  `time_tovar` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tovars`
--

INSERT INTO `tovars` (`id`, `img`, `coins`, `time_tovar`, `name`) VALUES
(1, 'sdsd', 'sdsd', 'sdsd', 'sdsds'),
(2, 'sdsd', 'sdsd', 'sdsd', 'sdsds'),
(3, 'sdsdsd', 'sdsdsd', 'sdsds', 'sdsd'),
(4, 'sdsdsd', 'sdsdsd', 'sdsds', 'sdsd');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `coins` varchar(200) DEFAULT '0',
  `role` enum('user','admin','company','') NOT NULL,
  `id_vkUser` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `coins`, `role`, `id_vkUser`) VALUES
(1, 'sdsdsd', 'user', ''),
(2, 'sdsdsd', 'user', ''),
(3, '123', 'user', ''),
(4, '123', 'user', ''),
(5, '121', 'user', ''),
(6, '', '', ''),
(7, '', '', ''),
(8, '1212', 'user', ''),
(9, '1212', 'user', ''),
(10, '3', 'user', '1111'),
(11, '', 'user', '1212121'),
(12, '0', 'user', '1233'),
(13, '0', 'user', '1233'),
(14, '0', 'user', '1233'),
(15, '0', 'user', '1233'),
(16, '0', 'user', '1233'),
(17, '0', 'user', '1233'),
(18, '0', 'user', '1233'),
(19, '0', 'user', '1233'),
(20, '0', 'user', '1233');

-- --------------------------------------------------------

--
-- Структура таблицы `users_tasks`
--

CREATE TABLE `users_tasks` (
  `id` int(200) NOT NULL,
  `id_user` int(200) NOT NULL,
  `id_task` int(200) NOT NULL,
  `check_task` enum('Yes','No') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users_tasks`
--

INSERT INTO `users_tasks` (`id`, `id_user`, `id_task`, `check_task`) VALUES
(1, 2, 1, 'Yes'),
(2, 2, 1, 'Yes'),
(3, 2, 1, 'Yes');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `corzina`
--
ALTER TABLE `corzina`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tovar` (`id_tovar`,`id_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_company` (`id_company`);

--
-- Индексы таблицы `tovars`
--
ALTER TABLE `tovars`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users_tasks`
--
ALTER TABLE `users_tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`,`id_task`),
  ADD KEY `id_task` (`id_task`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `company`
--
ALTER TABLE `company`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `corzina`
--
ALTER TABLE `corzina`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `tovars`
--
ALTER TABLE `tovars`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `users_tasks`
--
ALTER TABLE `users_tasks`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `corzina`
--
ALTER TABLE `corzina`
  ADD CONSTRAINT `corzina_ibfk_1` FOREIGN KEY (`id_tovar`) REFERENCES `tovars` (`id`),
  ADD CONSTRAINT `corzina_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`);

--
-- Ограничения внешнего ключа таблицы `users_tasks`
--
ALTER TABLE `users_tasks`
  ADD CONSTRAINT `users_tasks_ibfk_1` FOREIGN KEY (`id_task`) REFERENCES `tasks` (`id`),
  ADD CONSTRAINT `users_tasks_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
