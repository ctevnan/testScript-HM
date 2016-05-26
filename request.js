$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://matchapi.halberdtechnologies.com/Help/Api/GET-api-Database_userID={f6cd6592-f61e-40b2-afcc-c38827f075df}",
    success: function(userID){
      console.log('f6cd6592-f61e-40b2-afcc-c38827f075df');
    }
  })
});