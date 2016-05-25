//create a runnable program and/or script to do testing
//include creation of (POST) user profile/db of 4 images
//then do a verification call 
//the trigger command is match
//api endpoint https://matchapi.halberdtechnologies.com

$(Document).ready(function(){
$.ajax
type: POST,
url: "https://matchapi.halberdtechnologies.com",
success: function(userID)
  for (var i = 0; i < userID.length; i++) {
          var newListItem = buildListGroup([i]);
          $(".list-group").append(newListItem);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error");
      }
  });
} 


