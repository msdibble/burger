    $(function(){
        $(".change-devoured").on("click", function(event){
            var id = $(this).data("id");
            var newDevoured = $(this).data("newDevoured");

            var devouredState = {
                devoured: newDevoured
            };

            // Send PUT request
            $.ajax("/api/burgers" + id, {
                type: "PUT",
                data: devouredState
            }).then(
                function(){
                    console.log("changed devoured to", newDevoured);
                    // Reloading the page for the updated list
                    location.reload();
                }
            )
        });

        $(".create-update-form").on("submit", function(event){
            event.peventDefault();

            var newBurger = {
                burger_name: $("#burgName").val().trim(),
                devoured: $("[name=devoured]:checked").val().trim()
            };

            //Send POST request
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function(){
                    console.log("created new burger");

                    location.reload();
                }
            )
        });
    });  
 