<?php

$pdo = include_once('connection.php');

$id = isset($_POST['id']) ? $_POST['id'] : 0;

$sql_statement = "SELECT * FROM user WHERE id=:id";

$rows = $pdo->prepare($sql_statement);
$rows->bindParam("id", $id);
$rows->execute();
$user = $rows->fetch();

echo json_encode($user);