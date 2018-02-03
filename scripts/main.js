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
var inventory = ["Lacinato Kale", "Red Russian Kale", "Collards", "Micro Greens",
 "Quinoa", "Red Quinoa", "Green Tortillas", "Kimchi",
"Cold-Brew Coffee", "Kombucha", "Green Drink", "Red Drink"]

var shoppingList = []

var topLeft = document.querySelector(".topLeft");
var topRight = document.querySelector(".topRight");
var bottomLeft = document.querySelector(".bottomLeft");
var bottomRight =document.querySelector(".topRight");

if (greenPics.display = flex) {
  
}

if (essentialPics.display = flex) {
  
}

if (drinkPics.display = flex) {
  
}
