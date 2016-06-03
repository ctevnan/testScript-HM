$(document).ready(function() {
    $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyArxjU4hlitMhuPvMSdrjhHQFq0PAJnccM";
    googleApiUrl =+ "&address=" + userAddress;
    
    $.ajax({
      type: "GET",
      url: googleApiUrl,
      success: function(response) {
        console.log(response);
        var geoLocation = response.results[0].geometry.location;
        console.log(geoLocation);
        var halberdApiUrl = "https://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df";
        var halberdApiParams = {
          format: "json",
          lat: geoLocation.lat,
          lon: geoLocation.lng
        }

        $.ajax({
          type: "GET",
          url: halberdApiUrl + $.param(halberdApiParams)
          success: function(response) {
            console.log(response);
            var localPhotos = response.photos.photo;
            for(var i = 0; i < localPhotos.length; i++) {
              var newCol = buildThumbnail(localPhotos[i]);
              $("#photosRow").append(newCol);
            }
          }
        });
      }
    });  
  }); 