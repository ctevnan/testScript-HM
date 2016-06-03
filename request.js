$(document).ready(function(){
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userID = $("#userID").val();
    var matchApiUrl = "http://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df&database=Default";
    matchApiUrl += "userID" + "f6cd6592-f61e-40b2-afcc-c38827f075df";
    matchApiUrl += "&database" + "";

    $.ajax({
      type: "POST",
      url: "http://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df&database=Default",
      success: function(response){
        console.log(response);
      }
    })
  });  
});