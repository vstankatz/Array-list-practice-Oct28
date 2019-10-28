$(document).ready(function(){

var flavors = ["chocolate", "vanilla", "strawberry", "mint"];
var str = '<ul>';

flavors.forEach(function(flavor){
  str += '<li>' + flavor + '</li>';
});
str += '</ul>';
document.getElementById("output").innerHTML = str;

// var flavorInput = flavors.forEach(function(flavor) {
//   '<li>' + flavor + "</li>";
// });
// $('ul').append(flavorInput);


});
