<?php

 include('database.php');

  $id = $_POST["id"];
  $query = "SELECT * FROM task WHERE id = $id";
  $result = mysqli_query($conecction, $query);

  if(!$result){
    die("Consulta Fallida");
  }

  $json = array();

  while($row = mysqli_fetch_array($result)){

    $json[] = array(
      'name' => $row['name'],
      'description' => $row['description'],
      'id' => $row['id']
    );

  }

  $jsonstring = json_encode($json[0]);
  echo $jsonstring;


?>