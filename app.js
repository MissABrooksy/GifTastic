$(document).ready(function() {
 
  var topics = ["red", "yellow", "blue", "green", "orange", "white", "purple", "pink", "teal"];

  // function to make buttons and add to page
  function addButtons(topics, newGifs) {
    $(newGifs).empty();

    for (var i = 0; i < topics.length; i++) {
      var color = $("<button>");
      $(newGifs).append(color);
    }
  }
});

  

function getGifs(){

  let input = $("gifInput").val()

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=UMpcHdf7DsNyxd6QLhzS03psCOF65go0&limit=10");

console.log(input);
xhr.done(function(response) { 
  console.log("success got data", response); 
   
  var gifs = response.data
  for (i in gifs)
  {

      $('.newGifs').append('<img src="'+gifs[i].images.original.url+'" />');
      $('.newGifs').append('<img src="'+gifs[i].ratings+'" />')
  }

    

});
}
getGifs();
