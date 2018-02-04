/* This is a Test area to see if JS is connected to website*/
console.log('Hello');
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

//Event listeners to make shopping list:
  topLeft.addEventListener('click', function () {
    var listItem = document.createElement('li');
if (greenPics.display === "flex") {
  listItem.textContent = "Lacinato Kale";
  shoppingList.appendChild(listItem);
}
else if (essentialPics.display === "flex") {
  listItem.textContent = "Quinoa";
  shoppingList.appendChild(listItem);
}
else if (drinkPics.display === "flex") {
  listItem.textContent = "Cold-Brew Coffee";
  shoppingList.appendChild(listItem);
  }
});
topRight.addEventListener('click', function () {
    var listItem = document.createElement('li');
  if (greenPics.display === "flex") {
    listItem.textContent = "Red Russian Kale";
    shoppingList.appendChild(listItem);
  }
  else if (essentialPics.display === "flex") {
    listItem.textContent = "Green Tortillas";
    shoppingList.appendChild(listItem);
  }
  else if (drinkPics.display === "flex") {
    listItem.textContent = "Green Drink";
    shoppingList.appendChild(listItem);
  }
});
bottomLeft.addEventListener('click', function () {
    var listItem = document.createElement('li');
  if (greenPics.display === "flex") {
    listItem.textContent = "Collards";
    shoppingList.appendChild(listItem);
  }
  else if (essentialPics.display === "flex") {
    listItem.textContent = "Red Quinoa";
    shoppingList.appendChild(listItem);
  }
  else if (drinkPics.display === "flex") {
    listItem.textContent = "Kombucha";
    shoppingList.appendChild(listItem);
  }
});
bottomRight.addEventListener('click', function () {
    var listItem = document.createElement('li');
  if (greenPics.display === "flex") {
    listItem.textContent = "Micro Greens";
    shoppingList.appendChild(listItem);
  }
  else if (essentialPics.display === "flex") {
    listItem.textContent = "Kimchi";
    shoppingList.appendChild(listItem);
  }
  else if (drinkPics.display === "flex") {
    listItem.textContent = "Red Drink";
    shoppingList.appendChild(listItem);
  }
});

var deleteButton = document.getElementById("deleteAll");
deleteButton.addEventListener('click', function (){
  shoppingList.empty();
});


