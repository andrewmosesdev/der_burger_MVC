// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
   
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#brgr").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    $(".change-devoured").on("click", function(event) {
        const id = $(this).data("id");
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
        }).then(
          function() {
            console.log("devoured!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  
});
  