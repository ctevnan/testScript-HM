$(document).ready(function() {
  //$(".list-group").on("click", "a", function(e) {
    $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyArxjU4hlitMhuPvMSdrjhHQFq0PAJnccM";
    googleApiUrl =+ "&address=" + userAddress;
    
    $.ajax({
      type: "GET",
      // url: $(this).attr("href"),
      url: googleApiUrl,
      success: function(response) {
        console.log(response);
        /*$("tbody").empty();
        for (var i = 0; i < userID.length; i++) {
          $("tbody").append(buildTableRow(userID[i]));*/
        }
      })
    })  
  });
  

 /* function buildTableRow(photoData) {
    //var photoTd = $("<td>").append(commitData. (enter params) );
    var userIDTd = $("<td>").append(commitData.);
    //var dateTd = $("<td>").append(commitData.commit.author.date);

    return $("<tr>").append(   Td)
      .append(     Td)
      .append(    Td);
  } */
});