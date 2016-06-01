$(document).ready(function(){
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userID = $("#userID").val();
    var matchApiUrl = "https://matchapi.halberdtechnologies.com/Help/Api/GET-api-Database_userID={f6cd6592-f61e-40b2-afcc-c38827f075df}";
    matchApiUrl += "&userID=" + userID;

    $.ajax({
      type: "GET",
      url: "https://matchapi.halberdtechnologies.com/Help/Api/GET-api-Database_userID={f6cd6592-f61e-40b2-afcc-c38827f075df}",
      success: function(response){
        console.log(response);
      }
    })
  });  
});