<?php

$pdo = include_once('connection.php');

$id = isset($_POST['id']) ? $_POST['id'] : 0;
$name = isset($_POST['name']) ? $_POST['name'] : 0;
$last_name = isset($_POST['last_name']) ? $_POST['last_name'] : 0;
$patronymic = isset($_POST['patronymic']) ? $_POST['patronymic'] : 0;

$sql_statement = "INSERT INTO user (name, last_name, patronymic) VALUES (:name, :last_name, :patronymic)";

$rows = $pdo->prepare($sql_statement);
$rows->bindParam("name", $name);
$rows->bindParam("last_name", $last_name);
$rows->bindParam("patronymic", $patronymic);
$rows->execute();

echo json_encode(["message" => "все Гуд. Пользователь создан"]);