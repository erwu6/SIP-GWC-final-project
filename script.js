/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/
/*link to slide show maybe?*/
/*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_animated/
/* TODO: Add a variable to store the "my-list" element */

var fullItemList = document.getElementById("my-list");

/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */

if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem);
} // add event listener

/* TODO: Declare the function checkOffList and add actions inside the { } */

function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {
    clicked.target.classList.toggle("all-done");
  }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}