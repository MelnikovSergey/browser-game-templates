<?php
  $mysqli = @new mysqli('localhost', 'Admin', 'pass', 'mybase');
  if (mysqli_connect_errno()) {
    echo "Подключение невозможно: ".mysqli_connect_error();
  }
?>
