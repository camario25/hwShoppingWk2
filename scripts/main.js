


/* This is a Test area to see if JS is connected to website*/
console.log('Hello');

//test1
document.querySelector("aside").style.color = "red";//should change "Shopping List" letters to color red
//Results changed the DOM but not the actual color on the screen
document.querySelector("aside").setAttribute("color", "red");
//Still did not change color on the screen

//test2
var addFooter = document.createElement("footer");
document.querySelector("body").appendChild(addFooter);
addFooter.textContent = "test words";
//Results passed!  JS file able to alter the DOM as long as ther is no CSS involved
/*End of test*/

var greensButton = document.getElementById("orgGreens");
var essenButton = document.getElementById("essentials");
var bevButton = document.getElementById("beverages");

var greenPics = document.querySelector(".greenPics");
var essentialPics = document.querySelector(".essentialPics");
var drinkPics = document.querySelector(".drinkPics");

greensButton.addEventListener('click', function (){
    drinkPics.style.display = "none";
    essentialPics.style.display = "none";
    greenPics.style.display = "flex";
    console.log("click")
});
essenButton.addEventListener('click', function (){
  drinkPics.style.display = "none";
  greenPics.style.display = "none";
  essentialPics.style.display = "flex";
  console.log("click")
});

bevButton.addEventListener('click', function (){
  essentialPics.style.display = "none";
  greenPics.style.display = "none";
  drinkPics.style.display = "flex";
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
  console.log('this kale works');
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


