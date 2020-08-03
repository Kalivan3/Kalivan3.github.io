/* When the user clicks on the button, 
toggle between hiding and showing the food content */
function myFunction() {
    document.getElementById("food").classList.toggle("show");
  }
  
  // Close the food-content if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var food = document.getElementsByClassName("food-content");
      var i;
      for (i = 0; i < food.length; i++) {
        var openfood = food[i];
        if (openfood.classList.contains('show')) {
          openfood.classList.remove('show');
        }
      }
    }
  }

  //declare variables to their respective names//
const luwombo = document.getElementById("luwombo")
const rolex = document.getElementById("rolex")
const glasgeflus =document.getElementById("glasgeflus")
const samosas =document.getElementById("samosas")
const fastfood =document.getElementById("fast-food")
const caesrsalad = document.getElementById("caesar-salad")
const frenchfries = document.getElementById("frech-fries")
//using button element to access their respective id names//
const button1 = document.getElementById("luwombo")
const button2 = document.getElementById("rolex")
const button3 = document.getElementById("glasgeflus")
const button4 = document.getElementById("samosas")
const button5 = document.getElementById("fast-food")
const button6 = document.getElementById("Caesar-Salad")
const button7 = document.getElementById("french-fries")
const button8 = document.getElementById("Bites")

//Addiong eventlistener to button element//
button1.addEventListener("click", function() {
  button1.textContent = 'Added luwombo';
  luwombo.style.color ="red";
  
  luwombo.innerText = 'you added to cart'
});

button2.addEventListener("click", function() {
  button2.textContent = 'Added rolex';
  rolex.innerText = 'rolex added to cart'
  rolex.style.color ="red";
});

button3.addEventListener("click", function() {
  button3.textContent = 'Added glasgeflus';
  
  glasgeflus.innerText = 'added to cart'
  glasgeflus.style.color ="red";
});

button4.addEventListener("click", function() {
  button4.textContent = 'Added samosa';
  
  samosas.innerText = 'Added to cart'
  samosas.style.color ="red";
});

button5.addEventListener("click", function() {
  button1.textContent = 'Added fastfood';
  
  fastfood.innerText = 'you added to cart'
  fastfood.style.color ="red";
});

button6.addEventListener("click", function() {
  button6.textContent = 'Added caesar salad';
  caesrsalad.style.color ="red"
  
  caesrsalad.innerText = 'you added to cart'
});

button7.addEventListener("click", function() {
  button7.textContent = 'Added frechfries';
  
  frenchfries.innerText = 'you have added to cart'
  frenchfries.style.color="red";
});

button8.addEventListener("click", function() {
  button8.textContent = 'Added Bites';
  
  Bites.innerText = 'you have added to cart'
  Bites.style.color ="red";

});

