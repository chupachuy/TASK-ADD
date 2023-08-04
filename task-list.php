<?php

  include('database.php');

  $query = "SELECT * From task";

  $result = mysqli_query($conecction, $query);

  if(!$result){
    die('Consulta fallida'. mysqli_error($conecction));
  }


  $json = array();

  while($row = mysqli_fetch_array($result)){

    $json[] = array(
      'name' => $row['name'],
      'description' => $row['description'],
      'id' => $row['id'],
    );
   
  };

  $jsonstring = json_encode($json);

  echo $jsonstring;

?>