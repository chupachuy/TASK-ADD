<?php

    include('database.php');

    if(isset($_POST["name"] )){
        $name = $_POST["name"];
        $description = $_POST["description"];

        $query = "INSERT into task (name, description) VALUES ('$name', '$description')";

        $result = mysqli_query($conecction, $query);

        

        if(!$result){
            var_dump($query);
            die('La consulta ha fallado');
        }

        echo "Tarea agregada";

    }

?>