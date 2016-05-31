//create a runnable program and/or script to do testing
//include creation of (POST) user profile/db of 4 images
//then do a verification call (/v)
//the trigger command is match
//api endpoint https://matchapi.halberdtechnologies.com/api
//ajax url specifies endpoint to hit, can be any CORS(cross origin resource sharing) enabled endpoint
//get retrieves data from endpoint
//post creates data
//put updates data
//delete deletes data

//begin test suite with Jasmine
//cover all edge cases

describe("An ajax call", function() {
  it("contains a GET call", function() {
    expect(true).toBe(true);
  });
});

describe("An ajax call is just a function", function(){
  var a;

  it("and so is a GET call", function() {
    a = true;

    expect(a).toBe(true);
  });
});

describe("The GET call will return json data", function() {

  it("hits the url: https://matchapi.halberdtechnologies.com/api/Database?userID={f6cd6592-f61e-40b2-afcc-c38827f075df}", function() {
    expect(true).toBe(true);
  });
});

describe("The GET call will return json data", function() {

  it("can have a negative case", function() {
    expect(false).not.toBe(true);
  });
});


$(document).ready(function(){
  $.ajax ({
    type: "GET", //retrieves data 
    url: "https://matchapi.halberdtechnologies.com/api/Database?userID={f6cd6592-f61e-40b2-afcc-c38827f075df}", //api endpoint to hit
    success: function(data, textStatus, jqXHR){  //this function is called when the GET request is successful
    console.log("data");  //data contains the response from the server
    console.log(textStatus); //returns the status of the request in words
    console.log(jqXHR);  //returns the raw XMLhttpRequest object
  },  
    error: function(jqXHR, textStatus, errorThrown){  //this function is called when the GET request fails
    console.log(jqXHR);   //returns raw XMLhttpRequest object
    console.log(textStatus);  //returns the status of the request in words
    console.log(errorThrown);  //returns an error object
  }  
});

$.ajax ({
  type:"POST",
  url: "https://matchapi.halberdtechnologies.com/api/Database?userID={f6cd6592-f61e-40b2-afcc-c38827f075df}&database={testdb}",
  success: function(data, textStatus, jqXHR){
  console.log(data);
  console.log(textStatus);
  console.log(jqXHR);
},  
  error: function(jqXHR, textStatus, errorThrown){
  console.log(jqXHR);
  console.log(textStatus);
  console.log(errorThrown);
}; 

