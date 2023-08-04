<?php

  include('database.php');
  
  if(isset($_POST['id'])){
    $id = $_POST["id"];
    $query = "DELETE FROM task WHERE id = $id";
    $result = mysqli_query($conecction, $query);

    if(!$result){
      die("Consulta falllida");
    }

    echo "Tarea eliminada satisfactoriamente";


  }

?>