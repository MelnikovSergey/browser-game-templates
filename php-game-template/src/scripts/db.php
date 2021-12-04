<?php

$connection = mysqli_connect("localhost", "root", "password", "testdb");

if (!$connection) {
  die("Ошибка: " . mysqli_connect_error());
}

$sql = "CREATE TABLE Users (id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), age INTEGER);";

if(mysqli_query($connection, $sql)){
    echo "Таблица Users успешно создана";
} else {
    echo "Ошибка: " . mysqli_error($connection);
}

if (isset($_POST["username"]) && isset($_POST["userage"])) {
      
    $name = mysqli_real_escape_string($connection, $_POST["username"]);
    $age = mysqli_real_escape_string($connection, $_POST["userage"]);
    $sql = "INSERT INTO Users (name, age) VALUES ('$name', $age)";
    
    if(mysqli_query($connection, $sql)){
        echo "Данные успешно добавлены";
    } else {
        echo "Ошибка: " . mysqli_error($connection);
    }
    mysqli_close($connection);
}

mysqli_close($connection);