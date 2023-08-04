$(function(){

    let edit = false;

    $('#task-result').hide();
    fetchTasks();
    //console.log("Jquery Funcionando");

    $("#search").keyup(function(){

        if($("#search").val()){
            let search = $("#search").val();
            //console.log(search);

            $.ajax({
                url: 'task-search.php',
                type: 'POST',
                data: {search: search},
                success: function (response){
                    //console.log(response);
                const tasks =  JSON.parse(response);

                let template = "";

                tasks.forEach(task => {
                    console.log(task);
                    template += `
                    <li>${task.name}</li>
                    `;
                });

                $("#container").html(template);
                $('#task-result').show();
                }
            });
        }
    })

    /** Task Form */

    $('#task-form').submit(function(e){
        //console.log("Enviando");
        e.preventDefault();

        const postData = {
            name: $("#name").val(),
            description: $("#description").val(),
            id: $("#taskId").val()
        }

        // SI EDIT ES TRUE 

        let url = edit === false ? 'task-add.php' : 'task-edit.php' ;
        console.log(url);

        //console.log(postData);

        $.post(url, postData, function(response){
            console.log(response);
            fetchTasks();
            $("#task-form").trigger("reset");
        })


    });


    // MOSTRAR TAREAS

    function fetchTasks (){
        $.ajax({
            url: "task-list.php",
            type: "GET",
            success: function (response){
                //console.log(response);
    
                let task = JSON.parse(response);
    
                let template = "";
    
    
                task.forEach(task => {
                    template += `
                        <tr taskId="${task.id}">
                            <td>${task.id}</td>
                            <td><a href="#" class="task-item">${task.name}</a></td>
                            <td>${task.description}</td>
                            <td><button class="task-delete btn btn-danger">Eliminar</button></td>
                            <td></td>
                        </tr>
                    `;
                })
    
                $('#tasks').html(template);
            }
        });

        $(document).on("click", ".task-delete", function(){

            if(confirm("¿Estas seguro de eliminar esta nota?")){

                //console.log("clickeado");
                //console.log($(this));
                let element = $(this)[0].parentElement.parentElement;
                let id = $(element).attr("taskId")
                //console.log(id);
                $.post('task-delete.php', {id}, function (response){
                    //console.log(response);
                    fetchTasks();

                });

            }

        });
    }

    $(document).on("click", ".task-item", function (){

        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr("taskId");

        //console.log(id);

        $.post("task-single.php", {id}, function (response){
            //console.log(response);

            const task = JSON.parse(response);
            $("#name").val(task.name);
            $("#description").val(task.description);
            $("#taskId").val(task.id);
            edit = true;
        })

    });

    


});