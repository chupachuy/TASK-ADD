<?php

  include('database.php');

  $id =  $_POST['id'];
  $name =  $_POST['name'];
  $description =  $_POST['description'];

  $query = "UPDATE task SET name = '$name', description = '$description' WHERE id = '$id'";

  $result = mysqli_query($conecction, $query);

  if(!$result){
  die("Query fallidas");
  }

  echo "tarea actualizad satisfactoriamente";



?>