/* This is a Test area to see if JS is connected to website*/
console.log('Hello');
debugger
document.querySelector("aside").color = "red";//should change "Shopping List" letters to color red
/*End of test*/

var greensButton = document.getElementById("orgGreens");
var essenButton = document.getElementById("essentials");
var bevButton = document.getElementById("beverages");

var greenPics = document.querySelector(".greenPics");
var essentialPics = document.querySelector(".essentialPics");
var drinkPics = document.querySelector(".drinkPics");

greensButton.addEventListener('click', function (){
    drinkPics.display = "none";
    essentialPics.display = "none";
    greenPics.display = "flex";
    console.log("click")
});
essenButton.addEventListener('click', function (){
  drinkPics.display = "none";
  greenPics.display = "none";
  essentialPics.display = "flex";
  console.log("click")
});

bevButton.addEventListener('click', function (){
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
// var inventory = ["Lacinato Kale", "Red Russian Kale", "Collards", "Micro Greens",
//  "Quinoa", "Red Quinoa", "Green Tortillas", "Kimchi",
// "Cold-Brew Coffee", "Kombucha", "Green Drink", "Red Drink"]
// 
// var shoppingListArray = []
var shoppingList =document.querySelector("ul");

var topLeft = document.querySelector(".topLeft");
var topRight = document.querySelector(".topRight");
var bottomLeft = document.querySelector(".bottomLeft");
var bottomRight =document.querySelector(".topRight");

// function pushToShoppingArray (){
  topLeft.addEventListener('click', function () {
if (greenPics.display = flex) {
  var listItem = document.createElement('li');
  listItem.textContent = "";
  shoppingList.appendChild(listItem);
};
else if (essentialPics.display = flex) {
  var listItem = document.createElement('li');
  listItem.textContent = "";
  shoppingList.appendChild(listItem);
};
else if (drinkPics.display = flex) {
  var listItem = document.createElement('li');
  listItem.textContent = "";
  shoppingList.appendChild(listItem);
  };
});
topRight.addEventListener('click', function () {
  if (greenPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
  else if (essentialPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
  else if (drinkPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
});
bottomLeft.addEventListener('click', function () {
  if (greenPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
  else if (essentialPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
  else if (drinkPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
});
bottomRight.addEventListener('click', function () {
  if (greenPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
  else if (essentialPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
  else if (drinkPics.display = flex) {
    var listItem = document.createElement('li');
    listItem.textContent = "";
    shoppingList.appendChild(listItem);
  };
});
// };
var deleteButton = document.getElementById("deleteAll");
deleteButton.addEventListener('click', function (){
  shoppingList.empty();
});


