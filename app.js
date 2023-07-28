$(function(){

    $('#task-result').hide();
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
            description: $("#description").val()
        }

        //console.log(postData);

        $.post('task-add.php', postData, function(response){
            console.log(response);
        })


    });


});