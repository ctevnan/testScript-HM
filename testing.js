//create a runnable program and/or script to do testing
//include creation of (POST) user profile/db of 4 images
//then do a verification call (/v)
//the trigger command is match
//api endpoint https://matchapi.halberdtechnologies.com

$(Document).ready(function(){
$.ajax
type: "GET",
//stringBaseurl = "https://matchapi.halberdtechnologies.com/api";
//var userId = "f6cd6592-f61e-40b2-afcc-c38827f075df";
//var command = stringBaseurl + "/database?userID=" + userID;
url: "https://matchapi.halberdtechnologies.com/api/database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df",
success: function(f6cd6592-f61e-40b2-afcc-c38827f075df)
  error: function(jqXHR, textStatus, errorThrown) {
    alert('Error');
    }
  });
} 

$.ajax
type:"POST",
url: "https://www.matchapi.halberdtechnologies.com",
success: function(currentDB)
  error: function(jqXHR, textStatus, errorThrown) {
    alert("Error");
    }
  });
} 

$.ajax
type: "POST",
url: "https://www.matchapi.halberdtechnologies.com",
success: function(mode)
  for (var i = 0; i < mode.length; i++) {
          var newListItem = buildListGroup([i]);
          $(".list-group").append(newListItem);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error");
      }
  });
} 

