console.log('Hello');

var greensButton = document.getElementById("orgGreens");
var essenButton = document.getElementById("essentials");
var bevButton = document.getElementById("beverages");

var greenPics = document.querySelector(".greenPics");
var essentialPics = document.querySelector(".essentialPics");
var drinkPics = document.querySelector(".drinkPics");


greensButton.addEventListener('click', function (event){
    drinkPics.display = "none";
    essentialPics.display = "none";
    greenPics.display = "block";
    console.log("click")
});
essenButton.addEventListener('click', function (event){
  drinkPics.display = "none";
  greenPics.display = "none";
  essentialPics.display = "flex";
  console.log("click")
});

bevButton.addEventListener('click', function (event){
  essentialPics.display = "none";
  greenPics.display = "none";
  drinkPics.display = "flex";
  console.log("click")
});

// $( "#list" ).on( "click", "a", function( event ) {
//     var elem = $( this );
//     if ( elem.is( "[href^='http']" ) ) {
//         elem.attr( "target", "_blank" );
//     }
// });