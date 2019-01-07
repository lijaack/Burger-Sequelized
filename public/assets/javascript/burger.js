$(document).ready(function() {

    $(".create-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
          name: $("#burger").val().trim(),
        };
    
        // Send the POST request.
        $.post("/api/burgers", newBurger).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
    
    $(".devour-burger").on("click", function(event){
      event.preventDefault();
      var burgerID = $(this).data("id");
      $.ajax({
       type: "put",
        url: "/api/burgers/" + burgerID
      }).then(
        function(){
          location.reload();
        }
      )
     
    })


    $(".delete-burger").on("click", function(event){
      event.preventDefault();
    
      var burgerID = $(this).data("id");

      $.ajax({
        type: "delete",
        url: "/api/burgers/" + burgerID
      })
        .then( function(){
           location.reload();});
      
    })

});