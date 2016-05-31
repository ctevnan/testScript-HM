$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(userID) {
        $("tbody").empty();
        for (var i = 0; i < userID.length; i++) {
          $("tbody").append(buildTableRow(userID[i]));
        }
      }
    })  
  });

  function buildTableRow(photoData) {
    //var photoTd = $("<td>").append(commitData. (enter params) );
    var userIDTd = $("<td>").append(commitData.   );
    //var dateTd = $("<td>").append(commitData.commit.author.date);

    return $("<tr>").append(   Td)
      .append(     Td)
      .append(    Td);
  }  
});*/